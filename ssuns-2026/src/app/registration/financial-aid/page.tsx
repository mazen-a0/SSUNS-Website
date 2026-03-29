"use client";

import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

const visibleRegistrationHrefs = new Set(["/registration", "/registration/how-to-register", "/registration/financial-aid"]);

export default function RegistrationFinancialAidPage() {
  const { language, registrationContent } = useSiteContent();
  const chapter = registrationContent.chapters.find((item) => item.href === "/registration/financial-aid");
  const navItems = registrationContent.chapters.filter((item) => visibleRegistrationHrefs.has(item.href));
  const isFrench = language === "fr";

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={registrationContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={navItems} />
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
              <div className="space-y-4 body-copy">
                {chapter.body.slice(0, 1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <section className="grid gap-6 xl:grid-cols-2">
              <article className="theme-panel rounded-[8px] p-6 sm:p-8">
                <p className="section-kicker">{isFrench ? "Dates limites de demande d'aide financière" : "Financial Aid Application Deadlines"}</p>
                <div className="mt-5 space-y-3 border-t border-[var(--rule)] pt-5">
                  {registrationContent.financialAidDeadlines.map((deadline) => (
                    <div className="border-l border-[var(--rule)] pl-4" key={deadline}>
                      <p className="text-sm font-semibold text-[var(--accent)]">{deadline}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="theme-panel rounded-[8px] p-6 sm:p-8">
                <p className="section-kicker">{isFrench ? "Dates limites de facture" : "Invoice Deadlines"}</p>
                <div className="mt-5 space-y-3 border-t border-[var(--rule)] pt-5">
                  {registrationContent.invoiceDeadlines.map((deadline) => (
                    <div className="border-l border-[var(--rule)] pl-4" key={deadline}>
                      <p className="text-sm font-semibold text-[var(--accent)]">{deadline}</p>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
