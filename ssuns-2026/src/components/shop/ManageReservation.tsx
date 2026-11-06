"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ShopReceipt } from "@/content/shop";
import { useSiteContent } from "@/lib/useSiteContent";
import { OrderSummary, PickupDetails, primaryButton, secondaryButton, ShopDialog, shopError, ShopSupport, statusLabel, textLink } from "./ShopUI";

async function reservationRequest(action: "view" | "cancel", token: string, signal?: AbortSignal): Promise<{ receipt: ShopReceipt } | { error: string }> {
  if (!/^[a-f0-9]{64}$/.test(token)) return { error: "invalid-link" };
  try {
    const response = await fetch("/api/shop/reservations", {
      method: "POST", headers: { "Content-Type": "application/json" }, signal,
      body: JSON.stringify({ action, token }),
    });
    const result = await response.json();
    return response.ok && result.ok ? { receipt: result.receipt } : { error: result.error ?? "unavailable" };
  } catch {
    return { error: "unavailable" };
  }
}

export function ManageReservation() {
  const { language } = useSiteContent();
  const fr = language === "fr";
  const token = useRef("");
  const pending = useRef(false);
  const [receipt, setReceipt] = useState<ShopReceipt | null>(null);
  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [busy, setBusy] = useState(false);
  const [cancelledHere, setCancelledHere] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let controller: AbortController | undefined;
    function load() {
      controller?.abort();
      const request = new AbortController();
      controller = request;
      const fragment = window.location.hash.slice(1);
      if (fragment) {
        token.current = fragment;
        // Fragments never reach the HTTP server. Remove the token from the visible
        // URL as soon as it is read; only keep it in memory for this page visit.
        window.history.replaceState(window.history.state, "", window.location.pathname);
      }
      void reservationRequest("view", token.current, request.signal).then((result) => {
        if (request.signal.aborted) return;
        if ("receipt" in result) {
          setReceipt(result.receipt);
          setError("");
        } else {
          if (result.error === "invalid-link") setReceipt(null);
          setError(result.error);
        }
      });
    }
    function newLink() {
      if (!window.location.hash) return;
      setReceipt(null);
      setError("");
      setCancelledHere(false);
      setConfirm(false);
      load();
    }
    load();
    window.addEventListener("hashchange", newLink);
    return () => {
      controller?.abort();
      window.removeEventListener("hashchange", newLink);
    };
  }, [refresh]);

  async function cancel() {
    if (pending.current) return;
    pending.current = true;
    setBusy(true);
    setError("");
    const activeToken = token.current;
    const result = await reservationRequest("cancel", activeToken);
    if (activeToken === token.current) {
      if ("receipt" in result && result.receipt.status === "Cancelled") {
        setReceipt(result.receipt);
        setCancelledHere(true);
      } else setError("error" in result ? result.error : "unavailable");
      setConfirm(false);
    }
    setBusy(false);
    pending.current = false;
  }

  return (
    <div className="page-shell pb-16 pt-9 sm:pt-14">
      <div className="mx-auto max-w-2xl">
        <Link className={`text-sm ${textLink}`} href="/shop">← {fr ? "Boutique" : "Shop"}</Link>
        <h1 className="font-display mt-5 text-4xl leading-tight text-[var(--accent)] sm:text-6xl">{fr ? "Votre réservation." : "Your reservation."}</h1>
        <section aria-label={fr ? "Détails de la réservation" : "Reservation details"} className="mt-6 space-y-5 border-y border-[var(--rule)] py-6">
          {error && <p className="rounded-lg bg-[#f8edf0] p-4 text-sm text-[#6d243e]" role="alert">{shopError(error, language)}</p>}
          {!receipt && !error && <p role="status">{fr ? "Recherche de votre réservation…" : "Looking up your reservation…"}</p>}
          {receipt && <>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-display text-2xl text-[var(--accent)]">{receipt.id}</p>
              <p className="rounded-full bg-[#eef1f9] px-3 py-1 text-sm font-semibold text-[var(--accent)]">{statusLabel(receipt.status, language)}</p>
            </div>
            <p>{receipt.name}</p>
            <OrderSummary language={language} lines={receipt.lines} payable={receipt.status === "Reserved"} total={receipt.total} />
            {receipt.status === "Reserved" && <PickupDetails language={language} />}
            {cancelledHere && <div className="space-y-2 rounded-lg bg-[#eef1f9] p-4" role="status">
              <p className="font-semibold">{fr ? "Votre réservation a été annulée." : "Your reservation has been cancelled."}</p>
              {receipt.email && <p className="text-sm">{receipt.email === "sent"
                ? (fr ? "Un courriel d’annulation a été envoyé." : "A cancellation email was sent.")
                : (fr ? "L’annulation est enregistrée. L’envoi du courriel n’a pas pu être confirmé." : "Cancellation was recorded. Email delivery could not be confirmed.")}</p>}
            </div>}
            {receipt.canCancel && <button className={secondaryButton} onClick={() => setConfirm(true)} type="button">{fr ? "Annuler la réservation" : "Cancel reservation"}</button>}
          </>}
          {error && error !== "invalid-link" && <button className={secondaryButton} disabled={busy} onClick={() => setRefresh((value) => value + 1)} type="button">
            {fr ? "Actualiser le statut" : "Refresh status"}
          </button>}
        </section>
        <p className="mt-5 text-sm">{fr ? "Besoin d’aide ou perdu votre lien? " : "Need help or lost your link? "}<ShopSupport language={language} /></p>
      </div>
      {confirm && <ShopDialog busy={busy} language={language} onClose={() => setConfirm(false)} title={fr ? "Annuler la réservation?" : "Cancel this reservation?"}>
        <div className="space-y-5 p-4 sm:p-6">
          <p>{fr ? "Les articles seront retirés de votre réservation. Cette action ne peut pas être annulée." : "Your items will be removed from your reservation. This action can’t be undone."}</p>
          <div className="flex flex-wrap gap-3">
            <button className={primaryButton} disabled={busy} onClick={cancel} type="button">
              {busy ? (fr ? "Annulation…" : "Cancelling…") : (fr ? "Confirmer l’annulation" : "Confirm cancellation")}
            </button>
            <button className={secondaryButton} disabled={busy} onClick={() => setConfirm(false)} type="button">{fr ? "Garder la réservation" : "Keep reservation"}</button>
          </div>
        </div>
      </ShopDialog>}
    </div>
  );
}
