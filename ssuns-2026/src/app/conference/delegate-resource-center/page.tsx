"use client";

import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { PolicyCard } from "@/components/policies/PolicyCard";
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
                  <PolicyCard
                    bullets={policy.bullets}
                    downloadLabel={isFrench ? "Télécharger" : "Download"}
                    key={policy.title}
                    openLabel={isFrench ? "Lire la politique complète (PDF)" : "Read full policy (PDF)"}
                    pdfHref={policy.pdfHref}
                    preview={policy.preview}
                    title={policy.title}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
