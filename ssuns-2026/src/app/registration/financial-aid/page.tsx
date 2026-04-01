"use client";

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
              <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                {chapter.body.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-[12px] border border-[var(--rule)] bg-[var(--panel)] p-5 sm:p-6">
                <div className="flex flex-col gap-3 border-b border-[var(--rule)] pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="section-kicker">{isFrench ? "Dates limites" : "Deadlines"}</p>
                    <h2 className="mt-2 text-lg font-semibold text-[var(--heading)] sm:text-[1.3rem]">
                      {isFrench
                        ? "La date limite d'aide financière dépend de votre palier d'inscription"
                        : "Your financial aid deadline depends on your registration phase"}
                    </h2>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                    {isFrench
                      ? "Repérez votre période d'inscription actuelle, puis utilisez la date associée à ce palier pour l'aide financière et la facturation."
                      : "Match your current registration window to the corresponding financial aid and invoice deadline below."}
                  </p>
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-3">
                  {phaseRows.map((phase) => (
                    <article
                      key={phase.id}
                      className="rounded-[12px] border border-[var(--rule)] bg-[var(--paper)] p-5 shadow-[var(--shadow-soft)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                            {isFrench ? "Palier d'inscription" : "Registration phase"}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-[var(--heading)]">{phase.label}</h3>
                        </div>
                        <span className="rounded-full border border-[var(--rule)] bg-[var(--panel)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                          {phase.range}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3 border-t border-[var(--rule)] pt-4">
                        <div className="rounded-[10px] border border-[var(--rule)] bg-[var(--panel)] px-4 py-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                            {isFrench ? "Date limite d'aide financière" : "Financial aid deadline"}
                          </p>
                          <p className="mt-1 text-sm font-medium text-[var(--text)]">{phase.financialAidDeadline}</p>
                        </div>
                        <div className="rounded-[10px] border border-[var(--rule)] bg-[var(--panel)] px-4 py-3">
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
