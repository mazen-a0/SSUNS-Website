import { createHash, createHmac, randomBytes } from "node:crypto";
import { isIP } from "node:net";
import { findProduct, pickupDeadline, preorderClosesAt, preorderLimit, priceLine, selectionKey, shopText, type ShopLocale, type ShopSelection } from "@/content/shop";

type ErrorCode = "invalid" | "limit" | "price-changed" | "closed" | "unavailable" | "busy" | "invalid-link" | "not-cancellable" | "duplicate";
const status: Record<ErrorCode, number> = {
  invalid: 400, limit: 409, "price-changed": 409, closed: 409, unavailable: 503, busy: 429,
  "invalid-link": 404, "not-cancellable": 409, duplicate: 409,
};
type Json = Record<string, unknown>;
const object = (value: unknown): value is Json => value !== null && typeof value === "object" && !Array.isArray(value);
const field = (value: unknown, max: number) => typeof value === "string" && value.trim().length > 0 &&
  value.length <= max && !/[\u0000-\u001f\u007f]/u.test(value) ? value.trim() : null;
const headers = { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" };
const reply = (body: unknown, status = 200) => Response.json(body, { status, headers });
const failure = (error: ErrorCode) => reply({ ok: false, error }, status[error]);
const hash = (value: string) => createHash("sha256").update(value).digest("hex");
const sign = (value: string, secret: string) => createHmac("sha256", secret).update(value).digest("hex");

function configuration() {
  const { SHOP_APPS_SCRIPT_URL: url, SHOP_SIGNING_SECRET: secret, SHOP_SITE_ORIGIN: origin } = process.env;
  if (!url || !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url) || !secret || secret.length < 32 || !origin) return null;
  try {
    const site = new URL(origin);
    if (site.origin !== origin || (site.protocol !== "https:" && !(process.env.NODE_ENV !== "production" && ["localhost", "127.0.0.1"].includes(site.hostname)))) return null;
    return { url, secret, origin };
  } catch {
    return null;
  }
}

export function shopAvailability(now = Date.now()) {
  const configured = !!configuration();
  const configuredCutoff = process.env.SHOP_PREORDER_CLOSES_AT || preorderClosesAt;
  const cutoff = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:Z|[+-]\d\d:\d\d)$/.test(configuredCutoff)
    ? Date.parse(configuredCutoff) : NaN;
  const closesAt = Number.isFinite(cutoff) && cutoff <= Date.parse(pickupDeadline) ? new Date(cutoff).toISOString() : null;
  return { closesAt, state: !closesAt || !configured ? "unavailable" as const : now >= cutoff ? "closed" as const : "open" as const };
}

export function validateCheckout(body: Json) {
  const name = field(body.name, 120);
  const email = field(body.email, 254)?.toLowerCase();
  const school = field(body.school, 140);
  const requestId = body.requestId;
  if (!name || !email || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email) || !school ||
      body.website !== "" || typeof requestId !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId) ||
      !Array.isArray(body.items) || body.items.length < 1 || body.items.length > preorderLimit) return { error: "invalid" as const };
  const locale: ShopLocale = body.locale === "fr" ? "fr" : "en";
  const items: ShopSelection[] = [];
  let count = 0;
  for (const row of body.items) {
    if (!object(row) || typeof row.productId !== "string" || typeof row.quantity !== "number" ||
        !Number.isSafeInteger(row.quantity) || row.quantity < 1 || !object(row.options)) return { error: "invalid" as const };
    count += row.quantity;
    if (count > preorderLimit) return { error: "limit" as const };
    const product = findProduct(row.productId);
    const values = row.options;
    if (!product || Object.keys(values).length !== product.options.length ||
        product.options.some(({ id, values: allowed }) => !Object.hasOwn(values, id) || typeof values[id] !== "string" || !allowed.includes(values[id]))) return { error: "invalid" as const };
    const selection = { productId: product.id, options: Object.fromEntries(product.options.map(({ id }) => [id, values[id] as string])), quantity: row.quantity };
    const same = items.find((line) => selectionKey(line) === selectionKey(selection));
    if (same) same.quantity += selection.quantity;
    else items.push(selection);
  }
  items.sort((a, b) => selectionKey(a).localeCompare(selectionKey(b)));
  const lines = items.map((item) => priceLine(item, locale));
  const total = lines.reduce((sum, item) => sum + item.lineTotal, 0);
  if (body.shownTotal !== total) return { error: "price-changed" as const };
  return { name, email, school, requestId, locale, items, lines, total, count };
}

async function readBody(request: Request): Promise<Json | null> {
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get("content-type") ?? "")) return null;
  const origin = request.headers.get("origin");
  if (request.headers.get("sec-fetch-site") === "cross-site" ||
      (origin && new URL(origin).host !== (request.headers.get("host") ?? new URL(request.url).host))) return null;
  const stream = request.body?.getReader();
  if (!stream) return null;
  const decoder = new TextDecoder();
  let text = "", size = 0;
  for (;;) {
    const { done, value } = await stream.read();
    if (done) break;
    size += value.byteLength;
    if (size > 16384) { await stream.cancel(); return null; }
    text += decoder.decode(value, { stream: true });
  }
  const body: unknown = JSON.parse(text + decoder.decode());
  return object(body) ? body : null;
}

async function workspaceCall(config: NonNullable<ReturnType<typeof configuration>>, data: Json) {
  const payload = JSON.stringify(data);
  const timestamp = Date.now();
  const signal = AbortSignal.timeout(23000);
  let response = await fetch(config.url, {
    method: "POST", redirect: "manual", cache: "no-store", signal,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ timestamp, payload, signature: sign(`${timestamp}.${payload}`, config.secret) }),
  });
  // Apps Script ContentService serves its output at a one-time Google-hosted URL.
  if (response.status === 302 || response.status === 303) {
    const redirect = new URL(response.headers.get("location") ?? "");
    if (redirect.protocol !== "https:" || redirect.hostname !== "script.googleusercontent.com") throw new Error("Unexpected workspace response");
    response = await fetch(redirect, { redirect: "error", cache: "no-store", signal });
  }
  if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) throw new Error("Workspace request failed");
  const result: unknown = await response.json();
  if (!object(result)) throw new Error("Invalid workspace response");
  if (result.ok === true && object(result.receipt)) return result;
  const error = typeof result.error === "string" && Object.hasOwn(status, result.error) ? result.error as ErrorCode : "unavailable";
  return { ok: false, error };
}

export async function handleShopRequest(request: Request) {
  let body: Json | null;
  try { body = await readBody(request); } catch { return failure("invalid"); }
  if (!body) return failure("invalid");
  const config = configuration();
  if (!config) return failure("unavailable");
  const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const rateKey = sign(`rate:${isIP(ip) ? ip : "unknown"}`, config.secret);
  try {
    if (body.action === "create") {
      const order = validateCheckout(body);
      if (order.error) return failure(order.error);
      const availability = shopAvailability();
      if (!availability.closesAt || availability.state === "unavailable") return failure("unavailable");
      const { name, email, school, requestId, locale, items, lines, total, count } = order;
      const fingerprint = hash(JSON.stringify({ name, email, school, items }));
      // A random per-attempt client UUID and a secret PRF give the same unguessable
      // token on retries without storing the raw token in Sheets.
      const token = sign(`management:v1:${requestId}:${fingerprint}`, config.secret);
      const managementUrl = `${config.origin}/shop/reservation/manage#${token}`;
      const result = await workspaceCall(config, {
        action: "create", rateKey, requestId, fingerprint, tokenHash: hash(token), managementUrl,
        id: `SSUNS-M-${randomBytes(6).toString("hex").toUpperCase()}`, name, email, school, locale, lines, total, count,
        closesAt: availability.closesAt, pickupDeadline,
        pickup: shopText.pickup[locale], hold: shopText.hold[locale], payment: shopText.payment[locale],
      });
      return result.ok ? reply({ ok: true, receipt: result.receipt, managementUrl }) : failure(result.error as ErrorCode);
    }
    if ((body.action === "view" || body.action === "cancel") && typeof body.token === "string" && /^[a-f0-9]{64}$/.test(body.token)) {
      const result = await workspaceCall(config, { action: body.action, rateKey, tokenHash: hash(body.token), pickupDeadline });
      return result.ok ? reply({ ok: true, receipt: result.receipt }) : failure(result.error as ErrorCode);
    }
    return failure("invalid-link");
  } catch {
    // Never log request bodies, upstream responses, or management credentials.
    return failure("unavailable");
  }
}
