"use client";

import Link from "next/link";
import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferenceDrcPage() {
  const { conferenceContent } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/delegate-resource-center");
  const isFrench = conferenceContent.title === "Conférence";
  const policies = [
    {
      title: isFrench ? "Déclaration d'équité" : "Equity Statement",
      preview: isFrench
        ? "Ce document présente les principes d'équité, d'inclusion et de conduite qui s'appliquent à tous les participants."
        : "This document outlines the equity, inclusion, and conduct expectations that apply to all participants.",
      bullets: [
        isFrench ? "Conçu pour les délégués, encadrants et membres du staff." : "Intended for delegates, advisors, and staff members.",
        isFrench ? "Présente le cadre officiel de respect, de sécurité et de participation." : "Provides the official framework for respectful, safe participation.",
      ],
      pdfHref: "/docs/SSUNS26_Equity_Statement.pdf",
    },
  ];

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={conferenceContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <ConferenceQuickLinks className="mb-6" currentHref={chapter.href} />
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={conferenceContent.chapters} />
          </aside>
          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
              <div className="space-y-6 body-copy">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <section className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{isFrench ? "Politiques pour les délégués" : "Delegate Policies"}</p>
              <div className="mt-5 space-y-4 border-t border-[var(--rule)] pt-5">
                {policies.map((policy) => (
                  <article className="rounded-[12px] border border-[var(--rule)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]" key={policy.title}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold leading-tight text-[var(--text)]">{policy.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{policy.preview}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 border-t border-[var(--rule)] pt-4 text-sm leading-relaxed text-[var(--text)]">
                      {policy.bullets.map((bullet) => (
                        <li className="flex gap-2" key={bullet}>
                          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        className="inline-flex items-center justify-center rounded-[8px] border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1b2ea3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                        href={policy.pdfHref}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {isFrench ? "Lire la politique complète (PDF)" : "Read full policy (PDF)"}
                      </Link>
                      <Link
                        className="inline-flex items-center justify-center rounded-[8px] border border-[var(--rule)] bg-[var(--paper)] px-4 py-2.5 text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent-2)] hover:bg-[rgba(20,32,130,0.04)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                        download
                        href={policy.pdfHref}
                        target="_blank"
                      >
                        {isFrench ? "Télécharger" : "Download"}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
