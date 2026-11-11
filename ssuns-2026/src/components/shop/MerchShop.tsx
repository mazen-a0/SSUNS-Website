"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Images, ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  collectionPhoto, componentName, findProduct, formatPrice, preorderClosesAt, preorderLimit, priceLine, regularPrice,
  selectionKey, shopProducts, shopText, shopTimeZone, shopTotals, type ShopLocale, type ShopProduct,
  type ShopReceipt, type ShopSelection,
} from "@/content/shop";
import { useSiteContent } from "@/lib/useSiteContent";
import {
  fieldClass, OrderSummary, OrderTotal, PickupDetails, primaryButton, secondaryButton, ShopDialog, shopError,
  ShopImage, ShopSupport, statusLabel, textLink,
} from "./ShopUI";

type Availability = { state: "open" | "closed" | "unavailable"; closesAt: string | null };
type Confirmation = { receipt: ShopReceipt; managementUrl: string };
const units = (cart: ShopSelection[]) => cart.reduce((sum, item) => sum + item.quantity, 0);
const cartKey = "ssuns-shop-attempt";

function ProductVisual({ product, language, sizes, index = 0, detail = false }: { product: ShopProduct; language: ShopLocale; sizes: string; index?: number; detail?: boolean }) {
  const photo = product.photos[index];
  if (photo) return <ShopImage language={language} photo={detail ? { ...photo, contain: true } : photo} sizes={sizes} />;
  return (
    <div aria-hidden="true" className={`absolute inset-0 flex flex-col justify-between gap-4 p-5 sm:p-6 ${product.id.includes("rose") ? "bg-[#f3e3e3] text-[#743548]" : "bg-[#e6ebf8] text-[var(--accent)]"}`}>
      <span className="text-xs font-semibold tracking-widest">SSUNS 2026</span>
      <span className="font-display max-w-[12ch] text-[clamp(1.2rem,3.4vw,2.75rem)] leading-[1.05]">{product.name[language]}</span>
    </div>
  );
}

function ProductPrice({ product, language }: { product: ShopProduct; language: ShopLocale }) {
  const regular = regularPrice(product);
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 tabular-nums">
      {regular > product.price && <s aria-label={language === "fr" ? "Prix courant" : "Regular price"} className="text-sm text-[var(--muted)]">{formatPrice(regular, language)}</s>}
      <span className="font-semibold text-[var(--accent)]">{formatPrice(product.price, language)}</span>
      {regular > product.price && <span className="rounded-full bg-[#e8eefb] px-2 py-0.5 text-xs font-semibold text-[var(--accent)]">
        {language === "fr" ? "Économie de" : "Save"} {formatPrice(regular - product.price, language)}
      </span>}
    </div>
  );
}

function ProductIncludes({ product, language }: { product: ShopProduct; language: ShopLocale }) {
  if (!product.includes) return null;
  return <p className="text-sm leading-relaxed text-[var(--muted)]">
    {product.includes.map(({ id, quantity }) => `${quantity} × ${componentName(id, language)}`).join(" · ")}
  </p>;
}

function RoseCharityNote({ product, language }: { product: ShopProduct; language: ShopLocale }) {
  if (!product.includes?.some(({ id }) => id === "rose")) return null;
  return <p className="text-sm leading-relaxed text-[var(--accent)]">
    <Link className="relative z-10 underline decoration-[var(--accent)]/35 underline-offset-4 hover:decoration-[var(--accent)]" href="/conference/charity-partner">{shopText.roseCharity[language]}</Link>
  </p>;
}

function ProductDetail({ product, language, add, close }: {
  product: ShopProduct; language: ShopLocale; add: (selection: ShopSelection) => boolean; close: () => void;
}) {
  const fr = language === "fr";
  const [photoIndex, setPhotoIndex] = useState(0);
  const [options, setOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [limit, setLimit] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const photoCount = product.photos.length;
  const stepPhoto = (delta: number) => setPhotoIndex((index) => (index + delta + photoCount) % photoCount);
  const arrowClass = "absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-sm hover:bg-[#e8eefb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
  return (
    <ShopDialog language={language} onClose={close} title={product.name[language]} wide>
      <div className="grid gap-5 p-4 sm:p-6 md:grid-cols-[1.1fr_1fr] md:gap-7">
        <div aria-label={fr ? "Galerie du produit" : "Product gallery"} className="min-w-0" role="group" onKeyDown={(event) => {
          if (photoCount < 2 || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
          event.preventDefault();
          stepPhoto(event.key === "ArrowLeft" ? -1 : 1);
        }}>
          <div className="relative aspect-[4/3] touch-pan-y overflow-hidden rounded-lg bg-[#eff1f7] sm:aspect-[5/4]"
            onTouchStart={(event) => { const touch = event.touches[0]; touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null; }}
            onTouchEnd={(event) => {
              const start = touchStart.current;
              touchStart.current = null;
              const end = event.changedTouches[0];
              if (photoCount < 2 || !start || !end) return;
              const dx = end.clientX - start.x;
              if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(end.clientY - start.y)) stepPhoto(dx < 0 ? 1 : -1);
            }}>
            <ProductVisual detail index={photoIndex} language={language} product={product} sizes="(min-width: 1024px) 490px, (min-width: 768px) 49vw, 94vw" />
            {photoCount > 1 && <>
              <button aria-label={fr ? "Photo précédente" : "Previous photo"} className={`${arrowClass} left-2`} onClick={() => stepPhoto(-1)} type="button"><ChevronLeft aria-hidden="true" size={22} /></button>
              <button aria-label={fr ? "Photo suivante" : "Next photo"} className={`${arrowClass} right-2`} onClick={() => stepPhoto(1)} type="button"><ChevronRight aria-hidden="true" size={22} /></button>
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--accent)]" role="status">
                Photo {photoIndex + 1} / {photoCount}
              </p>
            </>}
          </div>
          {product.photos.length > 1 && <div aria-label={fr ? "Photos du produit" : "Product photos"} className="mt-3 flex flex-wrap gap-2" role="group">
            {product.photos.map((photo, i) => (
              <button aria-label={photo.alt[language]} aria-pressed={i === photoIndex} className={`relative size-14 overflow-hidden rounded-md border-2 bg-[#eff1f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:size-16 ${i === photoIndex ? "border-[var(--accent)]" : "border-transparent hover:border-[var(--rule)]"}`} key={photo.src} onClick={() => setPhotoIndex(i)} type="button">
                <ShopImage language={language} photo={photo} sizes="64px" />
              </button>
            ))}
          </div>}
        </div>
        <form className="min-w-0 space-y-4" onSubmit={(event) => {
          event.preventDefault();
          if (!add({ productId: product.id, options, quantity })) setLimit(true);
        }}>
          <ProductPrice language={language} product={product} />
          <ProductIncludes language={language} product={product} />
          <RoseCharityNote language={language} product={product} />
          <p className="text-sm leading-relaxed">{product.description[language]}</p>
          {product.group === "bundle" && <p className="text-xs text-[var(--muted)]">{fr ? "Compte comme un article précommandé." : "Counts as one preorder selection."}</p>}
          {product.options.map((option) => (
            <label className="block text-sm font-semibold" key={option.id}>{option.label[language]}
              <select className={fieldClass} onChange={(event) => setOptions({ ...options, [option.id]: event.target.value })} required value={options[option.id] ?? ""}>
                <option disabled value="">{fr ? "Sélectionner" : "Select"}</option>
                {option.values.map((value) => <option key={value} value={value}>{option.labels?.[value]?.[language] ?? value}</option>)}
              </select>
            </label>
          ))}
          {product.options.length > 0 && <a className={`inline-block text-sm ${textLink}`} href="/images/merch/size-guide.pdf" rel="noopener noreferrer" target="_blank">{fr ? "Guide des tailles (PDF)" : "Size guide (PDF)"}</a>}
          <label className="block max-w-32 text-sm font-semibold">{fr ? "Quantité" : "Quantity"}
            <select className={fieldClass} onChange={(event) => { setQuantity(Number(event.target.value)); setLimit(false); }} value={quantity}>
              {[1, 2, 3].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          {limit && <p className="rounded-md bg-[#f8edf0] p-3 text-sm text-[#6d243e]" role="alert">{shopText.policy[language]}</p>}
          <button className={`${primaryButton} w-full sm:w-auto`} type="submit">
            {fr ? "Ajouter au panier" : "Add to cart"} <ShoppingBag aria-hidden="true" size={16} />
          </button>
        </form>
      </div>
    </ShopDialog>
  );
}

async function checkoutKey(fields: unknown, prior: { current: { fingerprint: string; id: string } | null }) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(JSON.stringify(fields)));
  const fingerprint = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  let saved: { fingerprint?: string; id?: string } = {};
  try { saved = JSON.parse(sessionStorage.getItem(cartKey) ?? "{}") ?? {}; } catch { /* storage can be unavailable */ }
  const id = prior.current?.fingerprint === fingerprint ? prior.current.id
    : saved.fingerprint === fingerprint && typeof saved.id === "string" ? saved.id : crypto.randomUUID();
  prior.current = { fingerprint, id };
  try { sessionStorage.setItem(cartKey, JSON.stringify(prior.current)); } catch { /* in-memory retry key still works */ }
  return id;
}

export function MerchShop({ availability }: { availability: Availability }) {
  const { language } = useSiteContent();
  const fr = language === "fr";
  const [active, setActive] = useState<ShopProduct | null>(null);
  const [cart, setCart] = useState<ShopSelection[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [stockKey, setStockKey] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const [copied, setCopied] = useState(false);
  const pending = useRef(false);
  const checkoutHeading = useRef<HTMLLegendElement>(null);
  const prior = useRef<{ fingerprint: string; id: string } | null>(null);
  const count = units(cart);
  const lines = cart.map((line) => priceLine(line, language));
  const { total, subtotal } = shopTotals(lines.reduce((sum, line) => sum + line.lineTotal, 0));
  const [stockId, stockSize] = stockKey.split(":");
  const stockProduct = findProduct(stockId);
  const closing = availability.closesAt && (Date.parse(availability.closesAt) === Date.parse(preorderClosesAt)
    ? (fr ? "mercredi 11 novembre à minuit" : "midnight on Wednesday, November 11")
    : new Intl.DateTimeFormat(fr ? "fr-CA" : "en-CA", {
      timeZone: shopTimeZone, weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "2-digit",
    }).format(new Date(availability.closesAt)));
  const sections = [
    { id: "apparel", title: fr ? "Les vêtements" : "The apparel", label: fr ? "Vêtements" : "Apparel" },
    { id: "accessories", title: fr ? "Les accessoires" : "The extras", label: fr ? "Accessoires" : "Accessories" },
    { id: "bundle", title: "Roses", label: "Roses" },
  ] as const;

  useEffect(() => {
    if (cartOpen && checkoutOpen) checkoutHeading.current?.focus();
  }, [cartOpen, checkoutOpen]);

  function openCart() {
    setError("");
    setCheckoutOpen(false);
    setCopied(false);
    setCartOpen(true);
  }

  function add(item: ShopSelection) {
    if (count + item.quantity > preorderLimit) return false;
    const key = selectionKey(item);
    setCart((current) => current.some((line) => selectionKey(line) === key)
      ? current.map((line) => selectionKey(line) === key ? { ...line, quantity: line.quantity + item.quantity } : line)
      : [...current, item]);
    setNotice(fr ? `${item.quantity} × ${findProduct(item.productId)?.name.fr} — ajouté au panier` : `${item.quantity} × ${findProduct(item.productId)?.name.en} added to cart`);
    setActive(null);
    return true;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current || !count || availability.state !== "open") return;
    pending.current = true;
    setSubmitting(true);
    setError("");
    const fields = new FormData(event.currentTarget);
    const data = {
      name: String(fields.get("name") ?? "").trim(),
      email: String(fields.get("email") ?? "").trim().toLowerCase(),
      school: String(fields.get("school") ?? "").trim(),
      items: [...cart].sort((a, b) => selectionKey(a).localeCompare(selectionKey(b))),
    };
    try {
      const requestId = await checkoutKey(data, prior);
      const response = await fetch("/api/shop/reservations", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create", ...data, requestId, locale: language, shownTotal: total, website: fields.get("website") ?? "" }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        setError(result.error ?? "unavailable");
        setStockKey(typeof result.stockKey === "string" ? result.stockKey : "");
        return;
      }
      setConfirmation({ receipt: result.receipt, managementUrl: result.managementUrl });
      setCart([]);
      prior.current = null;
      try { sessionStorage.removeItem(cartKey); } catch { /* optional storage */ }
    } catch { setError("unavailable"); }
    finally { pending.current = false; setSubmitting(false); }
  }

  return (
    <div className="page-shell pb-16 pt-5 sm:pt-8">
      <section aria-labelledby="shop-title" className="grid overflow-hidden bg-[#eef1f9] lg:grid-cols-[0.83fr_1.17fr]">
        <div className="flex flex-col items-start justify-center p-5 sm:px-10 sm:py-12 xl:p-14">
          <p className="section-kicker text-[var(--accent)]">SSUNS 2026 / {fr ? "La collection" : "The collection"}</p>
          <h1 className="font-display mt-4 max-w-[9ch] text-[clamp(3rem,6.3vw,7rem)] leading-[0.92] tracking-[-0.035em] text-[var(--accent)]" id="shop-title">
            {fr ? "La boutique." : "The merch shop."}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--text)] sm:text-lg">
            {fr ? "Des vêtements et souvenirs à rapporter de Montréal. Réservez en ligne et payez au retrait à la conférence." : "Conference apparel and keepsakes to take home from Montréal. Reserve online and pay when you pick up at the conference."}
          </p>
          <a className={`${primaryButton} mt-6`} href="#apparel">{fr ? "Voir la collection" : "Explore the collection"} <ArrowDown aria-hidden="true" size={17} /></a>
        </div>
        <figure className="relative aspect-[3/2] bg-[#20274a] lg:aspect-auto lg:min-h-[26rem]">
          <ShopImage language={language} photo={collectionPhoto} priority sizes="(min-width: 1024px) 58vw, 100vw" />
          <figcaption className="absolute bottom-0 left-0 bg-[#142082] px-4 py-2 text-xs font-semibold text-white">MONTRÉAL · 2026</figcaption>
        </figure>
      </section>

      <div className="grid gap-5 border-b border-[var(--rule)] py-6 sm:grid-cols-[1fr_1fr] sm:gap-8">
        <div>
          <h2 className="font-display text-2xl text-[var(--accent)]">{fr ? "Précommandes" : "Preorders"}</h2>
          {closing && <p className="mt-2 text-sm leading-relaxed">
            {fr ? "Précommandez jusqu’au " : "Preorder by "}<time className="font-semibold" dateTime={availability.closesAt ?? undefined}>{closing}</time> {fr ? "(heure de Montréal)." : "(Montréal time)."}
          </p>}
          {availability.state !== "open" && <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
            {availability.state === "closed" ? (fr ? "Les précommandes sont terminées." : "Preorders are closed.") : (fr ? "Les précommandes en ligne ne sont pas disponibles pour le moment." : "Online preorders are currently unavailable.")}
          </p>}
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--muted)]">{shopText.policy[language]}</p>
        </div>
        <PickupDetails language={language} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--rule)] py-3">
        <nav aria-label={fr ? "Catégories de la boutique" : "Shop categories"} className="flex flex-wrap gap-x-5 gap-y-2">
          {sections.map((section) => <a className="py-2 text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href={`#${section.id}`} key={section.id}>{section.label}</a>)}
        </nav>
        <button className={secondaryButton} onClick={openCart} type="button"><ShoppingBag aria-hidden="true" size={17} /> {fr ? "Panier" : "Cart"} <span className="rounded-full bg-[#e8eefb] px-2 py-0.5 tabular-nums">{count}</span></button>
      </div>

      {sections.map((section) => (
        <section aria-labelledby={`${section.id}-title`} className="border-b border-[var(--rule)] py-9 sm:py-13" id={section.id} key={section.id}>
          <header className="mb-5 flex flex-wrap items-end justify-between gap-3 sm:mb-7">
            <div>
              {section.label !== section.title && <p className="section-kicker">{section.label}</p>}
              <h2 className="font-display mt-2 text-3xl leading-tight text-[var(--accent)] sm:text-5xl" id={`${section.id}-title`}>{section.title}</h2>
            </div>
            <p className="text-xs text-[var(--muted)] sm:text-sm">{shopText.taxes[language]}</p>
          </header>
          <div className={`grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-9 ${section.id === "accessories" ? "md:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-3"}`}>
            {shopProducts.filter((product) => product.group === section.id).map((product) => (
              <article className={`group relative min-w-0 ${section.id === "bundle" ? "border-t-2 border-[var(--accent)] bg-[#f1f3fa] pb-3" : ""}`} key={product.id}>
                <div className={`relative overflow-hidden bg-[#edf0f8] ${section.id === "apparel" ? "aspect-[4/5]" : "aspect-[5/4]"}`}>
                  <div className="absolute inset-0 transition-transform duration-300 motion-safe:group-hover:scale-[1.025]">
                    <ProductVisual language={language} product={product} sizes={section.id === "accessories" ? "(min-width: 1280px) 24vw, (min-width: 768px) 31vw, 48vw" : "(min-width: 768px) 32vw, 48vw"} />
                  </div>
                  {product.photos.length > 1 && <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold text-[var(--accent)]"><Images aria-hidden="true" size={14} /> {product.photos.length} photos</span>}
                  {product.soldOut && (
                    <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-[#743548] px-2 py-2.5 text-center text-xs font-semibold tracking-[0.16em] text-white uppercase sm:text-sm">
                      {fr ? "Épuisé" : "Sold out"}
                    </p>
                  )}
                </div>
                <div className={`space-y-2 pt-2.5 sm:pt-4 ${section.id === "bundle" ? "px-2.5 sm:px-4" : ""}`}>
                  <h3 className="font-display text-lg leading-tight text-[var(--accent)] sm:text-2xl">
                    {product.soldOut ? product.name[language] : <button className="text-left after:absolute after:inset-0 after:rounded-sm focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-[var(--accent)]" onClick={() => setActive(product)} type="button">
                      {product.name[language]} <ArrowUpRight aria-hidden="true" className="inline size-4 align-baseline sm:size-5" />
                    </button>}
                  </h3>
                  {!product.soldOut && <ProductPrice language={language} product={product} />}
                  <ProductIncludes language={language} product={product} />
                  <RoseCharityNote language={language} product={product} />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-sm">
        <p>{fr ? "Vous avez déjà réservé? Ouvrez le lien privé que vous avez sauvegardé ou reçu par courriel." : "Already reserved? Use the private link you saved or received by email."}</p>
        <ShopSupport language={language} />
      </div>
      {count > 0 && <div className="pointer-events-none fixed inset-x-3 bottom-3 z-30 flex justify-end sm:left-auto sm:right-5 sm:bottom-5">
        <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-end gap-2 rounded-xl border border-[var(--rule)] bg-white px-3 py-2 shadow-lg">
          {notice && <p className="max-w-[15rem] text-xs font-semibold text-[var(--accent)]" role="status">{notice}</p>}
          <button className={primaryButton} onClick={openCart} type="button">
            <ShoppingBag aria-hidden="true" size={17} /> {fr ? "Voir le panier" : "View cart"} · {count}
          </button>
        </div>
      </div>}

      {active && <ProductDetail add={add} close={() => setActive(null)} key={active.id} language={language} product={active} />}

      {cartOpen && <ShopDialog busy={submitting} language={language} onClose={() => { setCartOpen(false); setNotice(""); }} title={confirmation && !count ? (fr ? "Votre réservation" : "Your reservation") : checkoutOpen ? (fr ? "Confirmer la commande" : "Checkout") : (fr ? "Votre panier" : "Your cart")}>
        <div className="space-y-5 p-4 sm:p-6">
          {confirmation && !count ? <>
            <p className="font-semibold text-[var(--accent)]" role="status">
              {confirmation.receipt.status === "Reserved" ? (fr ? "Réservation enregistrée." : "Reservation recorded.") : statusLabel(confirmation.receipt.status, language)}
            </p>
            <p className="font-display text-2xl text-[var(--accent)]">{confirmation.receipt.id}</p>
            <p>{confirmation.receipt.name}</p>
            <OrderSummary language={language} lines={confirmation.receipt.lines} payable={confirmation.receipt.status === "Reserved"} total={confirmation.receipt.total} />
            {confirmation.receipt.status === "Reserved" && <PickupDetails language={language} />}
            <div className="rounded-lg bg-[#eef1f9] p-4 text-sm">
              <p>{confirmation.receipt.email === "sent"
                ? (fr ? "Un courriel de confirmation a été envoyé. Gardez votre lien privé." : "A confirmation email was sent. Keep your link private.")
                : (fr ? "Sauvegardez ce lien privé. L’envoi du courriel n’a pas pu être confirmé." : "Save this private link. Email delivery could not be confirmed.")}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a className={primaryButton} href={confirmation.managementUrl} rel="noreferrer">
                  {fr ? "Gérer votre réservation" : "Manage your reservation"} <ArrowRight aria-hidden="true" size={16} />
                </a>
                <button className={secondaryButton} onClick={async () => {
                  try { await navigator.clipboard.writeText(confirmation.managementUrl); setCopied(true); }
                  catch { setCopied(false); }
                }} type="button">{copied ? (fr ? "Lien copié" : "Link copied") : (fr ? "Copier le lien privé" : "Copy private link")}</button>
              </div>
            </div>
          </> : count === 0 ? <p>{fr ? "Votre panier est vide. Choisissez un article dans la collection." : "Your cart is empty. Choose something from the collection."}</p> :
            <>
              <p className="text-sm font-semibold text-[var(--accent)]">{fr ? "Ajoutez vos articles, puis faites une seule réservation pour tout le panier." : "Add everything you want, then reserve your whole cart at once."}</p>
              <p className="text-sm text-[var(--muted)]">{fr ? `${count} article(s) sur ${preorderLimit}` : `${count} of ${preorderLimit} preorder selections`}</p>
              <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
                {lines.map((line) => {
                  const key = selectionKey(line);
                  return <li className="flex flex-wrap items-center justify-between gap-3 py-3 text-sm" key={key}>
                    <div className="min-w-0">
                      <p className="font-semibold">{line.productName}</p>
                      {line.variant && <p className="text-xs text-[var(--muted)]">{line.variant}</p>}
                      <p className="mt-1 text-xs text-[var(--muted)]">{formatPrice(line.unitPrice, language)} {fr ? "l’unité" : "each"}</p>
                      {line.regularPrice > line.unitPrice && <p className="mt-1 text-xs text-[var(--muted)]">{fr ? "Économie" : "Bundle savings"}: {formatPrice((line.regularPrice - line.unitPrice) * line.quantity, language)}</p>}
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <select aria-label={`${fr ? "Quantité" : "Quantity"}: ${line.productName} ${line.variant}`} className="h-11 rounded-md border border-[var(--rule)] px-2" disabled={submitting} onChange={(event) => {
                        const quantity = Number(event.target.value);
                        if (count - line.quantity + quantity > preorderLimit) { setError("limit"); return; }
                        setCart(cart.map((item) => selectionKey(item) === key ? { ...item, quantity } : item));
                        setError("");
                      }} value={line.quantity}>
                        {[1, 2, 3].map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <button aria-label={`${fr ? "Retirer" : "Remove"} ${line.productName} ${line.variant}`} className={textLink} disabled={submitting} onClick={() => { setCart(cart.filter((item) => selectionKey(item) !== key)); setError(""); }} type="button">{fr ? "Retirer" : "Remove"}</button>
                      <span className="min-w-[4rem] text-right font-semibold tabular-nums">{formatPrice(line.lineTotal, language)}</span>
                    </div>
                  </li>;
                })}
              </ul>
              <OrderTotal checkout language={language} subtotal={subtotal} total={total} />
              {error && <p className="rounded-md bg-[#f8edf0] p-3 text-sm text-[#6d243e]" role="alert">
                {(error === "stock" || error === "selection-unavailable") && stockProduct && <strong>{stockProduct.name[language]}{stockSize && ` · ${stockSize}`}: </strong>}{shopError(error, language)}
              </p>}
              {!checkoutOpen ? <div className="flex flex-wrap gap-2">
                <button className={primaryButton} onClick={() => setCheckoutOpen(true)} type="button">{fr ? "Passer à la commande" : "Continue to checkout"} <ArrowRight aria-hidden="true" size={16} /></button>
                <button className={secondaryButton} onClick={() => { setCartOpen(false); setNotice(""); }} type="button">{fr ? "Continuer à magasiner" : "Keep shopping"}</button>
              </div> : <>
              <PickupDetails language={language} />
              <p className="text-xs leading-relaxed text-[var(--muted)]">{shopText.policy[language]}</p>
              <form className="space-y-3" onSubmit={submit}>
                <fieldset className="grid gap-3 sm:grid-cols-2" disabled={submitting || availability.state !== "open"}>
                  <legend className="mb-3 font-display text-xl text-[var(--accent)]" ref={checkoutHeading} tabIndex={-1}>{fr ? "Coordonnées pour le retrait" : "Pickup details"}</legend>
                  <label className="block text-sm font-semibold">{fr ? "Nom complet" : "Full name"}<input autoComplete="name" className={fieldClass} maxLength={120} name="name" required /></label>
                  <label className="block text-sm font-semibold">{fr ? "Courriel" : "Email"}<input autoComplete="email" className={fieldClass} maxLength={254} name="email" required type="email" /></label>
                  <label className="block text-sm font-semibold sm:col-span-2">{fr ? "École ou délégation" : "School or delegation"}<input autoComplete="organization" className={fieldClass} maxLength={140} name="school" required /></label>
                  <label aria-hidden="true" className="absolute left-[-9999px]">Website<input autoComplete="off" name="website" tabIndex={-1} /></label>
                </fieldset>
                <p className="text-xs text-[var(--muted)]">{fr ? "Vos renseignements servent à préparer votre retrait et à vous envoyer les mises à jour de votre réservation." : "We use your details to prepare your pickup and send reservation updates."}</p>
                {availability.state !== "open" && <p className="text-sm font-semibold text-[var(--accent)]">
                  {availability.state === "closed" ? shopError("closed", language) : (fr ? "Les précommandes en ligne ne sont pas disponibles pour le moment." : "Online preorders are currently unavailable.")}
                </p>}
                <button className={`${primaryButton} w-full sm:w-auto`} disabled={submitting || availability.state !== "open"} type="submit">
                  {submitting ? (fr ? "Enregistrement…" : "Recording…") : (fr ? "Confirmer la réservation" : "Submit reservation")}
                </button>
                {error === "unavailable" && <p className="text-sm"><ShopSupport language={language} /></p>}
              </form>
              </>}
            </>}
        </div>
      </ShopDialog>}
    </div>
  );
}
