"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { PolicyCard } from "@/components/policies/PolicyCard";
import { useSiteContent } from "@/lib/useSiteContent";

export default function CommitteesPoliciesPage() {
  const { committeesPageContent, language } = useSiteContent();
  const chapter = committeesPageContent.chapters.find((item) => item.href === "/committees/policies");
  const isFrench = language === "fr";
  const policyPreview = isFrench ? "Consultez le PDF pour toute l’information pertinente." : "Access the PDF for all relevant information.";
  const resourceGroups = [
    {
      title: isFrench ? "Politiques officielles" : "Official Policies",
      intro: isFrench ? "Les politiques officielles des comités sont disponibles dans les PDF ci-dessous." : "Official committee policies are available through the PDFs below.",
      items: [
        {
          title: isFrench ? "Politique technologique" : "Technology Policy",
          preview: policyPreview,
          pdfHref: "/docs/SSUNS26_Tech_Policy.pdf",
          openLabel: isFrench ? "Lire la politique complète (PDF)" : "Read full policy (PDF)",
        },
        {
          title: isFrench ? "Politique sur l'usage de l'IA" : "AI Policy",
          preview: policyPreview,
          pdfHref: "/docs/SSUNS26_AI_Policy.pdf",
          openLabel: isFrench ? "Lire la politique complète (PDF)" : "Read full policy (PDF)",
        },
        {
          title: isFrench ? "Politique des prix" : "Awards Policy",
          preview: policyPreview,
          pdfHref: "/docs/SSUNS26_Award_Eval_Policy.pdf",
          openLabel: isFrench ? "Lire la politique complète (PDF)" : "Read full policy (PDF)",
        },
      ],
    },
    {
      title: isFrench ? "Procédure" : "Procedure",
      intro: isFrench ? "Consultez les procédures parlementaires pour comprendre le déroulement des comités." : "Use the parliamentary procedures resource to understand committee flow and formal debate expectations.",
      items: [
        {
          title: isFrench ? "Procédures parlementaires" : "Parliamentary Procedures",
          preview: isFrench ? "Consultez le PDF pour toutes les informations pertinentes." : "Access the PDF for all relevant information.",
          pdfHref: "/docs/SSUNS Parlimentary Procedure.pdf",
          openLabel: isFrench ? "Lire les procédures (PDF)" : "Read procedures (PDF)",
        },
      ],
    },
    {
      title: isFrench ? "Résolutions" : "Resolutions",
      intro: isFrench ? "Ces ressources aident les délégués à préparer et comprendre la rédaction de résolutions." : "These resources support delegates as they prepare and understand resolution writing.",
      items: [
        {
          title: isFrench ? "Guide de rédaction d'une résolution" : "How to Write a Resolution Guide",
          preview: isFrench ? "Consultez le PDF pour toutes les informations pertinentes." : "Access the PDF for all relevant information.",
          pdfHref: "/docs/SSUNS2026 - How to Write a Resolution.pdf",
          openLabel: isFrench ? "Lire le guide (PDF)" : "Read the guide (PDF)",
        },
        {
          title: isFrench ? "Exemple de projet de résolution" : "Sample Draft Resolution",
          preview: isFrench ? "Lisez l'exemple de résolution ici." : "Read the sample resolution here.",
          pdfHref: "/docs/SSUNS2026 - Sample Draft Resolution.pdf",
          openLabel: isFrench ? "Lire l'exemple (PDF)" : "Read sample resolution (PDF)",
        },
      ],
    },
  ];

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={committeesPageContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={committeesPageContent.chapters} />
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
              <p className="section-kicker">{isFrench ? "Ressources des comités" : "Committee resources"}</p>
              <div className="mt-4 space-y-4 body-copy">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <div className="space-y-6">
              {resourceGroups.map((group) => (
                <section className="theme-panel-strong paper-grain rounded-[8px] p-5 sm:p-6" key={group.title}>
                  <div className="mb-4">
                    <p className="section-kicker">{group.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{group.intro}</p>
                  </div>
                  <div className="grid gap-3 lg:grid-cols-2">
                    {group.items.map((item) => (
                      <PolicyCard
                        downloadLabel={isFrench ? "Télécharger" : "Download"}
                        key={item.title}
                        openLabel={item.openLabel}
                        pdfHref={item.pdfHref}
                        preview={item.preview}
                        title={item.title}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <article className="theme-panel-strong rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{isFrench ? "Questions" : "Questions"}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                {isFrench
                  ? "Pour toute question concernant les politiques des comités, veuillez contacter committees@ssuns.org."
                  : "For any questions regarding committee policies, please contact committees@ssuns.org."}
              </p>
              <Link className="mt-4 inline-flex border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href="mailto:committees@ssuns.org">
                committees@ssuns.org
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
