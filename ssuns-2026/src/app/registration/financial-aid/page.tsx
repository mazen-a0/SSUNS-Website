"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { PolicyCard } from "@/components/policies/PolicyCard";
import { useSiteContent } from "@/lib/useSiteContent";

const visibleRegistrationHrefs = new Set(["/registration", "/registration/how-to-register", "/registration/financial-aid"]);

export default function RegistrationFinancialAidPage() {
  const { registrationContent } = useSiteContent();
  const chapter =
    registrationContent.chapters.find((item) => item.href === "/registration/financial-aid") ??
    registrationContent.chapters[3];
  const navItems = registrationContent.chapters.filter((item) => visibleRegistrationHrefs.has(item.href));
  const isFrench = registrationContent.title === "Inscription";
  const financialPolicy = {
    title: isFrench ? "Politiques financières" : "Financial Policies",
    preview: isFrench
      ? "Ce document présente les échéances financières, les attentes de paiement, les remboursements et le calendrier de l'aide financière pour SSUNS 2026."
      : "This document outlines financial deadlines, payment expectations, refunds, and financial aid timing for SSUNS 2026.",
    bullets: [
      isFrench ? "Document officiel SSUNS 2026 en format PDF." : "Official SSUNS 2026 PDF policy document.",
      isFrench ? "À consulter avant de soumettre une demande d'aide financière ou de régler une facture." : "Useful before applying for financial aid or arranging payment.",
    ],
    pdfHref: "/docs/SSUNS26_Financial_Policies.pdf",
  };

  if (!chapter) return null;

  const phaseRows = registrationContent.pricingTimeline.map((phase, index) => ({
    id: phase.id,
    label: phase.label,
    range: `${phase.start} ${registrationContent.pricingTimelineText.to} ${phase.end}`,
    financialAidDeadline: registrationContent.financialAidDeadlines[index] ?? "",
    invoiceDeadline: registrationContent.invoiceDeadlines[index] ?? "",
  }));

  return (
    <>
      <PageHero intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={navItems} />
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-8 sm:p-11">
              <p className="section-kicker">{chapter.title}</p>
              <div className="mt-5 flex flex-col gap-4 border-b border-[var(--rule)] pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <p className="max-w-3xl text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">{chapter.body[0]}</p>
                <Link
                  className="inline-flex shrink-0 items-center justify-center rounded-[8px] border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1b2ea3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)]"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScAZf9Kh4ckkcumqryw9KAnk3yscsCBt9gyQyCEAVxD2rhyRA/viewform"
                  rel="noreferrer"
                  target="_blank"
                >
                  {isFrench ? "Faire une demande" : "Apply Here"}
                </Link>
              </div>

              <div className="mt-8 rounded-[12px] border border-[#23379f]/60 bg-[var(--panel)] p-5 shadow-[0_0_0_1px_rgba(35,55,159,0.18),0_18px_36px_-32px_rgba(10,19,66,0.22)] ring-1 ring-inset ring-[#23379f]/12 sm:p-6">
                <div className="flex flex-col gap-3 border-b border-[var(--rule)] pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="section-kicker">{isFrench ? "Dates limites" : "Deadlines"}</p>
                    <h2 className="mt-2 text-lg font-semibold text-[var(--heading)] sm:text-[1.3rem]">
                      {isFrench
                        ? "La date limite d'aide financière dépend de votre palier d'inscription"
                        : "Your financial aid deadline depends on your registration phase"}
                    </h2>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-3">
                  {phaseRows.map((phase) => (
                    <article
                      key={phase.id}
                      className="rounded-[12px] border border-[#23379f]/70 bg-[linear-gradient(180deg,rgba(20,32,130,0.055),rgba(255,255,255,0.97))] p-5 shadow-[0_0_0_1px_rgba(35,55,159,0.22),0_12px_28px_-24px_rgba(10,19,66,0.24)] ring-1 ring-inset ring-[#23379f]/14"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                            {isFrench ? "Palier d'inscription" : "Registration phase"}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-[var(--heading)]">{phase.label}</h3>
                        </div>
                        <span className="rounded-full border border-[#23379f]/60 bg-[rgba(20,32,130,0.06)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                          {phase.range}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3 border-t border-[var(--rule)] pt-4">
                        <div className="rounded-[10px] border border-[#23379f]/65 bg-[rgba(20,32,130,0.05)] px-4 py-3 shadow-[0_0_0_1px_rgba(35,55,159,0.12)] ring-1 ring-inset ring-[#23379f]/10">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                            {isFrench ? "Date limite d'aide financière" : "Financial aid deadline"}
                          </p>
                          <p className="mt-1 text-sm font-medium text-[var(--text)]">{phase.financialAidDeadline}</p>
                        </div>
                        <div className="rounded-[10px] border border-[#23379f]/65 bg-[rgba(20,32,130,0.05)] px-4 py-3 shadow-[0_0_0_1px_rgba(35,55,159,0.12)] ring-1 ring-inset ring-[#23379f]/10">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                            {isFrench ? "Date limite de facture" : "Invoice deadline"}
                          </p>
                          <p className="mt-1 text-sm font-medium text-[var(--text)]">{phase.invoiceDeadline}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </article>

            <PolicyCard
              bullets={financialPolicy.bullets}
              downloadLabel={isFrench ? "Télécharger" : "Download"}
              openLabel={isFrench ? "Lire la politique complète (PDF)" : "Read full policy (PDF)"}
              pdfHref={financialPolicy.pdfHref}
              preview={financialPolicy.preview}
              title={financialPolicy.title}
            />
          </div>
        </div>
      </section>
    </>
  );
}
