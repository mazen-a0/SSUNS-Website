"use client";

import Link from "next/link";
import { PolicyCard } from "@/components/policies/PolicyCard";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferenceDrcPage() {
  const { conferenceContent, language } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/delegate-resource-center");
  const handbook = conferenceContent.delegateHandbook;
  const isFrench = language === "fr";

  if (!chapter) return null;

  return (
    <div className="page-shell pt-6 sm:pt-8">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--rule)] pb-4">
        <Link className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href="/conference">
          ← {conferenceContent.title}
        </Link>
        <p className="section-kicker">SSUNS 2026 / {chapter.title}</p>
      </header>

      <section aria-labelledby="handbook-title" className="py-6 sm:py-8" lang="en">
        {isFrench ? <p className="mb-5 text-sm text-[var(--muted)]">Handbook information is currently provided in English.</p> : null}
        <div className="min-w-0 rounded-xl bg-[var(--accent)] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
          <h1 className="font-display max-w-4xl text-[clamp(2.2rem,5.6vw,4.75rem)] leading-[1.02]" id="handbook-title">
            {handbook.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#e3ebff]" id="handbook-availability">
            {handbook.description}
          </p>
          {handbook.href ? (
            <a
              aria-describedby="handbook-password"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#142082] transition-colors hover:bg-[#e5eeff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href={handbook.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {handbook.accessLabel}
            </a>
          ) : (
            <button
              aria-describedby="handbook-availability"
              aria-label={`${handbook.accessLabel} — ${handbook.comingSoonLabel}`}
              className="mt-6 inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full bg-[#edf2fc] px-6 py-3 text-sm font-semibold text-[#334475]"
              disabled
              type="button"
            >
              {handbook.comingSoonLabel}
            </button>
          )}
          {handbook.href ? <p className="mt-3 max-w-2xl text-sm leading-6 text-[#e3ebff]" id="handbook-password">{handbook.passwordNote}</p> : null}
        </div>
      </section>

      <section aria-labelledby="delegate-policies" className="grid min-w-0 gap-4 border-t border-[var(--rule)] pt-6 lg:grid-cols-[0.3fr_1fr] lg:gap-8">
        <h2 className="text-lg font-semibold text-[var(--accent)]" id="delegate-policies">
          {isFrench ? "Politiques pour les délégués" : "Delegate policies"}
        </h2>
        <PolicyCard
          downloadLabel={isFrench ? "Télécharger" : "Download"}
          openLabel={isFrench ? "Lire la politique complète (PDF)" : "Read PDF"}
          pdfHref="/docs/SSUNS26_Equity_Statement.pdf"
          preview={isFrench
            ? "Ce document présente les principes d'équité, d'inclusion et de conduite qui s'appliquent à tous les participants."
            : "This document outlines the equity, inclusion, and conduct expectations that apply to all participants."}
          title={isFrench ? "Déclaration d'équité" : "Equity Statement"}
        />
      </section>
    </div>
  );
}
