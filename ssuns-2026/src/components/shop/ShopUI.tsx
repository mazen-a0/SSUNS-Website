"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { findProduct, formatPrice, priceLine, shopText, type ShopLine, type ShopLocale, type ShopPhoto, type ShopReceipt } from "@/content/shop";

export const primaryButton = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2438a0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-45";
export const secondaryButton = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--rule)] bg-white px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]";
export const fieldClass = "mt-1.5 min-h-11 w-full rounded-md border border-[var(--rule)] bg-white px-3 py-2 text-base text-[var(--text)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]";
export const textLink = "font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)]";

export function ShopImage({ photo, language, sizes, priority = false }: { photo: ShopPhoto; language: ShopLocale; sizes: string; priority?: boolean }) {
  return <Image alt={photo.alt[language]} className={photo.contain ? "object-contain p-3 sm:p-5" : "object-cover"} fill preload={priority} sizes={sizes} src={photo.src} />;
}

export function ShopDialog({ onClose, title, language, children, wide = false, busy = false }: {
  onClose: () => void; title: string; language: ShopLocale; children: ReactNode; wide?: boolean; busy?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => { if (dialog?.open) dialog.close(); };
  }, []);
  return (
    <dialog aria-busy={busy} aria-labelledby="shop-dialog-title" className={`m-auto max-h-[92dvh] w-[calc(100%-1.25rem)] overflow-y-auto overscroll-contain rounded-xl bg-white text-[var(--text)] shadow-2xl backdrop:bg-[#090d36]/65 ${wide ? "max-w-[62rem]" : "max-w-[42rem]"}`} onCancel={(event) => { if (busy) event.preventDefault(); }} onClose={() => { if (!ref.current?.open) onClose(); }} ref={ref}>
      <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[var(--rule)] bg-white px-4 py-3 sm:px-6">
        <h2 className="font-display text-2xl leading-tight text-[var(--accent)] sm:text-3xl" id="shop-dialog-title">{title}</h2>
        <button aria-label={language === "fr" ? "Fermer" : "Close"} className={`${secondaryButton} size-11 shrink-0 !p-0 disabled:opacity-45`} disabled={busy} onClick={() => ref.current?.close()} type="button"><X aria-hidden="true" size={20} /></button>
      </header>
      {children}
    </dialog>
  );
}

export function PickupDetails({ language }: { language: ShopLocale }) {
  return (
    <div className="space-y-2 text-sm leading-relaxed">
      <p className="font-semibold">{shopText.pickup[language]}</p>
      <p>{shopText.hold[language]}</p>
      <p>{shopText.payment[language]}</p>
    </div>
  );
}

export const statusLabel = (status: ShopReceipt["status"], language: ShopLocale) => language === "en" ? status : ({
  Reserved: "Réservée", Collected: "Récupérée", Cancelled: "Annulée", Unclaimed: "Non réclamée",
})[status];

export function OrderSummary({ lines, total, language, payable = true }: { lines: ShopLine[]; total: number; language: ShopLocale; payable?: boolean }) {
  const fr = language === "fr";
  return (
    <>
      <ul className="divide-y divide-[var(--rule)]">
        {lines.map((line, index) => {
          const localized = findProduct(line.productId) ? priceLine(line, language) : line;
          return <li className="flex items-start justify-between gap-3 py-3 text-sm" key={`${line.productId}-${index}`}>
            <div className="min-w-0">
              <p className="font-semibold">{line.quantity} × {localized.productName}</p>
              {localized.variant && <p className="mt-0.5 text-[var(--muted)]">{localized.variant}</p>}
              <p className="mt-1 text-xs text-[var(--muted)]">
                {formatPrice(line.unitPrice, language)} {fr ? "l’unité" : "each"}
                {line.regularPrice > line.unitPrice && <> · {fr ? "Économie" : "Bundle savings"}: {formatPrice((line.regularPrice - line.unitPrice) * line.quantity, language)}</>}
              </p>
            </div>
            <p className="shrink-0 font-semibold tabular-nums">{formatPrice(line.lineTotal, language)}</p>
          </li>;
        })}
      </ul>
      <OrderTotal language={language} payable={payable} total={total} />
    </>
  );
}

export function OrderTotal({ total, language, payable = true }: { total: number; language: ShopLocale; payable?: boolean }) {
  const fr = language === "fr";
  return <div className="border-t border-[var(--rule)] pt-3">
    <div className="flex flex-wrap items-baseline justify-between gap-2 font-semibold">
      <span>{payable ? (fr ? "Total à payer au retrait" : "Total payable at pickup") : (fr ? "Total de la réservation" : "Reservation total")}</span>
      <span className="text-xl tabular-nums text-[var(--accent)]">{formatPrice(total, language)}</span>
    </div>
    <p className="mt-1 text-xs text-[var(--muted)]">{shopText.taxes[language]}</p>
  </div>;
}

export function shopError(code: string, language: ShopLocale) {
  const errors: Record<string, [string, string]> = {
    invalid: ["Check your details and selections, then try again.", "Vérifiez vos coordonnées et vos choix, puis réessayez."],
    limit: [shopText.policy.en, shopText.policy.fr],
    "price-changed": ["Prices have changed. Refresh the shop and review your cart before trying again.", "Les prix ont changé. Actualisez la boutique et vérifiez votre panier avant de réessayer."],
    closed: ["Online preorders have closed. Shop in person at the conference, subject to availability.", "Les précommandes en ligne sont terminées. Achetez sur place à la conférence, selon les disponibilités."],
    busy: ["The shop is busy. Please wait a minute and try again.", "La boutique est occupée. Attendez une minute et réessayez."],
    "invalid-link": ["This private reservation link is invalid or has expired.", "Ce lien privé est invalide ou a expiré."],
    "not-cancellable": ["This reservation can no longer be cancelled online. Refresh its status or contact SSUNS for help.", "Cette réservation ne peut plus être annulée en ligne. Actualisez son statut ou communiquez avec SSUNS."],
    duplicate: ["This attempt cannot be reused. Contact SSUNS if you’re unsure whether your reservation was recorded.", "Cette tentative ne peut pas être réutilisée. Communiquez avec SSUNS si vous ne savez pas si votre réservation a été enregistrée."],
    unavailable: ["We couldn’t confirm the update. Try again with the same details, or contact SSUNS for help.", "Nous n’avons pas pu confirmer la mise à jour. Réessayez avec les mêmes renseignements ou communiquez avec SSUNS."],
  };
  return (errors[code] ?? errors.unavailable)[language === "fr" ? 1 : 0];
}

export function ShopSupport({ language }: { language: ShopLocale }) {
  return <Link className={textLink} href="/contact">{language === "fr" ? "Communiquer avec SSUNS" : "Contact SSUNS"}</Link>;
}
