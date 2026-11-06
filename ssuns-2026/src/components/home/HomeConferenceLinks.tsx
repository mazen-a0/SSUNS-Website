"use client";

import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSiteContent } from "@/lib/useSiteContent";

export function HomeConferenceLinks() {
  const { language } = useSiteContent();
  const fr = language === "fr";
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <aside aria-label={fr ? "Boutique et partenaire caritatif" : "Shop and charity partner"} className="pointer-events-none fixed inset-x-3 bottom-3 z-40 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[23rem]">
      <div className="guide-announcement-enter pointer-events-auto rounded-xl border border-white/20 bg-[#142082] p-4 text-white shadow-[0_18px_50px_rgba(10,19,66,0.25)] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#c9dfff]">SSUNS 2026</p>
            <p className="font-display mt-1 text-xl leading-tight sm:text-2xl">{fr ? "Magasinez. Soutenez War Child." : "Shop merch. Support War Child."}</p>
          </div>
          <button aria-label={fr ? "Fermer l’annonce" : "Dismiss announcement"} className="-mr-1 -mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" onClick={() => setVisible(false)} type="button">
            <X aria-hidden="true" size={20} />
          </button>
        </div>
        <div className="mt-3 grid gap-2">
          <Link className="flex min-h-11 items-center justify-between gap-2 rounded-md bg-white px-3 py-2 text-sm font-bold text-[#142082] hover:bg-[#e6efff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="/shop">
            {fr ? "Voir la boutique" : "Go to the shop"} <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
          <Link className="flex min-h-11 items-center justify-between gap-2 rounded-md border border-white/65 px-3 py-2 text-sm font-bold text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="/conference/charity-partner">
            {fr ? "Soutenir War Child" : "Support War Child"} <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
