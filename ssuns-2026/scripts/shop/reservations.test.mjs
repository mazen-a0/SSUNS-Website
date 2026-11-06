import assert from "node:assert/strict";
import { createHash, createHmac, randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");
function moduleUrl(source) {
  const { outputText } = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } });
  return `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
}

const catalogUrl = moduleUrl(await read("../../src/content/shop.ts"));
const catalog = await import(catalogUrl);
const { handleShopRequest, shopAvailability } = await import(moduleUrl((await read("../../src/lib/shopServer.ts")).replace("@/content/shop", catalogUrl)));
const script = await read("./Code.gs");
const secret = "local-test-only-signing-key-000000000000";
const origin = "https://shop-test.example";
const url = "https://script.google.com/macros/s/shop-test/exec";
const now = Date.parse("2026-11-08T12:00:00-05:00");
const sha = (s) => createHash("sha256").update(s).digest("hex");

function fakeWorkspace() {
  const rows = [[[]], [[]]];
  const mail = [];
  const cache = new Map();
  let locked = false;
  const workspace = { rows, mail, time: now, failWrite: false, failMail: false, failResponse: false };
  class TestDate extends Date {
    static now() { return workspace.time; }
  }
  const sheets = rows.map((_, i) => ({
    getSheetId: () => i, getLastRow: () => rows[i].length,
    getRange: (first, col, length, width) => ({ getValues: () => rows[i].slice(first - 1, first - 1 + length).map((r) => r.slice(col - 1, col - 1 + width)) }),
  }));
  const ss = { getId: () => "test-sheet", getSheetByName: (name) => sheets[name === "Reservations" ? 0 : 1] };
  const values = (r) => r.values.map((v) => v.userEnteredValue.numberValue ?? v.userEnteredValue.stringValue);
  const context = {
    Date: TestDate,
    SpreadsheetApp: { openById: () => ss },
    Sheets: { Spreadsheets: { batchUpdate: ({ requests }) => {
      assert.equal(locked, true);
      if (workspace.failWrite) throw new Error("Simulated write failure");
      for (const req of requests) {
        if (req.appendCells) {
          const { sheetId, rows: data } = req.appendCells;
          rows[sheetId].push(...data.map(values));
        } else {
          const { start, rows: data } = req.updateCells;
          rows[start.sheetId][start.rowIndex][start.columnIndex] = values(data[0])[0];
        }
      }
    } } },
    LockService: { getScriptLock: () => ({
      tryLock: () => { if (locked) return false; locked = true; return true; },
      releaseLock: () => { locked = false; },
    }) },
    CacheService: { getScriptCache: () => ({ get: (k) => cache.get(k), put: (k, v) => cache.set(k, v) }) },
    PropertiesService: { getScriptProperties: () => ({
      getProperty: (key) => ({ SHOP_SIGNING_SECRET: secret, SHOP_SEND_EMAIL: "true", SHOP_SHEET_ID: "test-sheet" })[key],
    }) },
    Utilities: {
      Charset: { UTF_8: "UTF-8" },
      computeHmacSha256Signature: (value, key) => Array.from(createHmac("sha256", key).update(value).digest()),
      formatDate: (date) => date.toISOString(),
    },
    ContentService: { MimeType: { JSON: "application/json" }, createTextOutput: (text) => ({ setMimeType: () => text }) },
    MailApp: { getRemainingDailyQuota: () => 100, sendEmail: (message) => {
      assert.equal(locked, false);
      if (workspace.failMail) throw new Error("Simulated mail failure");
      mail.push(message);
    } },
  };
  const post = runInNewContext(script + "\ndoPost", context);
  workspace.post = (body) => JSON.parse(post({ postData: { contents: body } }));
  workspace.fetch = async (destination, options) => {
    assert.equal(destination, url);
    const result = workspace.post(options.body);
    if (workspace.failResponse) throw new Error("Simulated connection loss after write");
    return Response.json(result);
  };
  return workspace;
}

const line = (productId = "white-tee", options = { size: "M" }, quantity = 1) => ({ productId, options, quantity });
function checkout(items = [line()], extra = {}) {
  return {
    action: "create", name: "Sample Delegate", email: "delegate@example.test", school: "Example School",
    requestId: randomUUID(), locale: "en", items, website: "",
    shownTotal: items.reduce((sum, item) => sum + catalog.priceLine(item, "en").lineTotal, 0), ...extra,
  };
}
const request = (body, headers = {}) => new Request(origin + "/api/shop/reservations", {
  method: "POST", headers: { "Content-Type": "application/json", origin, "x-vercel-forwarded-for": "192.0.2.9", ...headers },
  body: JSON.stringify(body),
});

test("shop API and signed Apps Script transaction logic", async (t) => {
  const originalFetch = globalThis.fetch;
  const originalNow = Date.now;
  const env = { ...process.env };
  process.env.SHOP_APPS_SCRIPT_URL = url;
  process.env.SHOP_SIGNING_SECRET = secret;
  process.env.SHOP_SITE_ORIGIN = origin;
  delete process.env.SHOP_PREORDER_CLOSES_AT;
  Date.now = () => now;
  t.after(() => { globalThis.fetch = originalFetch; Date.now = originalNow; process.env = env; });

  let ws;
  const reset = () => { ws = fakeWorkspace(); globalThis.fetch = ws.fetch; };
  const call = async (body, headers) => {
    const response = await handleShopRequest(request(body, headers));
    assert.equal(response.headers.get("cache-control"), "no-store");
    return { status: response.status, ...await response.json() };
  };

  await t.test("approved prices and all nine bundle savings", () => {
    const savings = {
      "ssuns-outfit": 999, "conference-souvenirs": 199, "accessories-bundle": 598, "three-small-stickers": 151,
      "mixed-stickers": 300, "souvenir-pack": 114, "rose-bundle": 281, "large-rose-bundle": 1101, "rose-postcard": 60,
    };
    assert.equal(catalog.findProduct("large-sticker").price, 499);
    assert.equal(catalog.findProduct("bear").price, 1899);
    assert.equal(catalog.findProduct("keychain").price, 499);
    for (const product of catalog.shopProducts.filter((p) => p.group === "bundle")) {
      assert.equal(catalog.regularPrice(product) - product.price, savings[product.id], product.id);
    }
    assert.equal(catalog.shopProducts.filter((p) => p.group === "bundle").length, Object.keys(savings).length);
  });

  await t.test("validates IDs, sizes, prices, quantity, email, spam field, and same-origin requests", async () => {
    reset();
    assert.equal((await call(checkout([line("white-tee", { size: "XS" })]))).error, "invalid");
    assert.equal((await call(checkout([line()], { items: [line("fake-item", {})] }))).error, "invalid");
    assert.equal((await call(checkout([line("ssuns-outfit", { hoodie: "S" })]))).error, "invalid");
    assert.equal((await call(checkout([line()], { shownTotal: 1 }))).error, "price-changed");
    assert.equal((await call(checkout([line("white-tee", { size: "M" }, 4)]))).error, "limit");
    assert.equal((await call(checkout([line()], { email: "missing-at-sign" }))).error, "invalid");
    assert.equal((await call(checkout([line()], { website: "filled" }))).error, "invalid");
    assert.equal((await call(checkout(), { origin: "https://outside.example" })).error, "invalid");
    assert.deepEqual(ws.rows.map((r) => r.length), [1, 1]);
  });

  await t.test("records both tabs, totals, variant and token hash; repeats are idempotent and count by email", async () => {
    reset();
    const body = checkout([line("ssuns-outfit", { hoodie: "S", sweatpants: "XL" }), line("pin", {}, 2)], { school: "=NotAFormula" });
    const a = await call(body);
    assert.equal(a.ok, true);
    assert.match(a.receipt.id, /^SSUNS-M-[A-F0-9]{12}$/);
    assert.equal(a.receipt.total, 8997);
    assert.equal(a.receipt.lines.find((i) => i.productId === "ssuns-outfit").variant, "Hoodie size: S · Sweatpants size: XL");
    assert.equal(ws.rows[0][1][4], "=NotAFormula");
    assert.equal(ws.rows[0][1][5], 89.97);
    const token = new URL(a.managementUrl).hash.slice(1);
    assert.match(token, /^[a-f0-9]{64}$/);
    assert.equal(ws.rows[0][1][11], sha(token));
    assert.ok(!JSON.stringify(ws.rows).includes(token));
    assert.equal(a.receipt.email, "sent");
    assert.ok(ws.mail[0].body.includes(a.managementUrl));
    assert.equal((await call(body)).receipt.id, a.receipt.id);
    assert.equal((await call({ ...body, school: "Different School" })).error, "duplicate");
    assert.equal((await call(checkout())).error, "limit");
    assert.deepEqual(ws.rows.map((r) => r.length), [2, 3]);
    assert.equal(ws.mail.length, 1);
    const b = await call(checkout([line()], { email: "different@example.test" }));
    assert.notEqual(b.managementUrl, a.managementUrl);
    assert.notEqual(b.receipt.id, a.receipt.id);
  });

  await t.test("views never cancel; invalid, expired, and finalized links cannot cancel", async () => {
    reset();
    const a = await call(checkout());
    const token = new URL(a.managementUrl).hash.slice(1);
    const view = await call({ action: "view", token });
    assert.equal(view.receipt.status, "Reserved");
    assert.equal(view.receipt.canCancel, true);
    assert.equal(view.receipt.email, undefined);
    assert.equal(view.receipt.school, undefined);
    assert.equal((await call({ action: "cancel", token: a.receipt.id })).error, "invalid-link");
    assert.equal((await call({ action: "view", token: "f".repeat(64) })).error, "invalid-link");
    ws.rows[0][1][6] = "Collected";
    assert.equal((await call({ action: "view", token })).receipt.canCancel, false);
    assert.equal((await call({ action: "cancel", token })).error, "not-cancellable");
    ws.rows[0][1][6] = "Unclaimed";
    assert.equal((await call({ action: "cancel", token })).error, "not-cancellable");
    ws.rows[0][1][12] = now - 1;
    assert.equal((await call({ action: "view", token })).error, "invalid-link");
  });

  await t.test("requires persistence before confirming cancellation, preserves items and sends one email", async () => {
    reset();
    const a = await call(checkout());
    const token = new URL(a.managementUrl).hash.slice(1);
    ws.failWrite = true;
    assert.equal((await call({ action: "cancel", token })).error, "unavailable");
    assert.equal(ws.rows[0][1][6], "Reserved");
    ws.failWrite = false;
    const cancelled = await call({ action: "cancel", token });
    assert.equal(cancelled.receipt.status, "Cancelled");
    assert.equal(cancelled.receipt.canCancel, false);
    assert.equal(cancelled.receipt.email, "sent");
    assert.equal(ws.rows[0][1][6], "Cancelled");
    assert.ok(ws.rows[0][1][8]);
    assert.deepEqual(ws.rows.map((r) => r.length), [2, 2]);
    assert.equal((await call({ action: "cancel", token })).receipt.status, "Cancelled");
    assert.equal(ws.mail.length, 2);
    assert.match(ws.mail[1].subject, /cancelled/);
  });

  await t.test("handles failed writes, lost responses, and mail failures without false confirmation", async () => {
    reset();
    const body = checkout();
    ws.failWrite = true;
    assert.equal((await call(body)).error, "unavailable");
    assert.deepEqual(ws.rows.map((r) => r.length), [1, 1]);
    assert.equal(ws.mail.length, 0);
    ws.failWrite = false;
    ws.failResponse = true;
    ws.failMail = true;
    assert.equal((await call(body)).error, "unavailable");
    ws.failResponse = false;
    assert.equal((await call(body)).receipt.id, ws.rows[0][1][0]);
    assert.deepEqual(ws.rows.map((r) => r.length), [2, 2]);
    const second = await call(checkout());
    assert.equal(second.receipt.email, "unavailable");
    const token = new URL(second.managementUrl).hash.slice(1);
    const cancelled = await call({ action: "cancel", token });
    assert.equal(cancelled.receipt.status, "Cancelled");
    assert.equal(cancelled.receipt.email, "unavailable");
  });

  await t.test("applies the approved Montréal cutoff and rejects unsigned or stale requests", async () => {
    reset();
    const cutoff = Date.parse(catalog.preorderClosesAt);
    assert.equal(shopAvailability(cutoff - 1).state, "open");
    assert.equal(shopAvailability(cutoff).state, "closed");
    ws.time = cutoff;
    Date.now = () => cutoff;
    assert.equal((await call(checkout())).error, "closed");
    const forged = JSON.stringify({ timestamp: cutoff, payload: "{}", signature: "0".repeat(64) });
    assert.equal(ws.post(forged).ok, false);
    const stale = JSON.stringify({ timestamp: now, payload: "{}", signature: createHmac("sha256", secret).update(now + ".{}").digest("hex") });
    assert.equal(ws.post(stale).ok, false);
    assert.deepEqual(ws.rows.map((r) => r.length), [1, 1]);
    Date.now = () => now;
  });

  await t.test("unconfigured checkout never returns a confirmation", async () => {
    reset();
    delete process.env.SHOP_SIGNING_SECRET;
    assert.equal(shopAvailability().state, "unavailable");
    const result = await call(checkout());
    assert.equal(result.status, 503);
    assert.equal(result.receipt, undefined);
  });
});
