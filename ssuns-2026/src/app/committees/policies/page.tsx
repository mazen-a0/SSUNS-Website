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
  const policies = [
    {
      title: isFrench ? "Politique technologique" : "Technology Policy",
      preview: policyPreview,
      bullets: [],
      pdfHref: "/docs/SSUNS26_Tech_Policy.pdf",
    },
    {
      title: isFrench ? "Politique sur l'usage de l'IA" : "AI Policy",
      preview: policyPreview,
      bullets: [],
      pdfHref: "/docs/SSUNS26_AI_Policy.pdf",
    },
    {
      title: isFrench ? "Politique des prix" : "Awards Policy",
      preview: policyPreview,
      bullets: [],
      pdfHref: "/docs/SSUNS26_Award_Eval_Policy.pdf",
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
              <p className="body-copy">{policyPreview}</p>
            </article>

            <div className="space-y-3">
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
