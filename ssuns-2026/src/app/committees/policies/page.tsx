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
  const policies = [
    {
      title: isFrench ? "Politique technologique" : "Technology Policy",
      preview: isFrench
        ? "Cette politique présente les attentes concernant l'utilisation des appareils et le format technologique selon le type de comité."
        : "This policy outlines device-use expectations and technology format by committee type.",
      bullets: [
        isFrench ? "Document officiel en format PDF pour SSUNS 2026." : "Official SSUNS 2026 PDF policy document.",
        isFrench ? "Couvre les attentes pour les GA, ECOSOC, agences spécialisées et crises." : "Covers expectations for GAs, ECOSOCs, specialized agencies, and crisis committees.",
      ],
      pdfHref: "/docs/SSUNS26_Tech_Policy.pdf",
    },
    {
      title: isFrench ? "Politique sur l'usage de l'IA" : "AI Policy",
      preview: isFrench
        ? "Cette politique précise les attentes de SSUNS 2026 quant à l'utilisation des outils d'intelligence artificielle dans la préparation et le travail en comité."
        : "This policy clarifies SSUNS 2026 expectations for the use of artificial intelligence tools in preparation and committee work.",
      bullets: [
        isFrench ? "Document officiel en format PDF pour SSUNS 2026." : "Official SSUNS 2026 PDF policy document.",
        isFrench ? "À consulter avant la conférence par les délégués, advisors et membres du dais." : "Recommended reading for delegates, advisors, and dais members before conference weekend.",
      ],
      pdfHref: "/docs/SSUNS26_AI_Policy.pdf",
    },
    {
      title: isFrench ? "Politique des prix" : "Awards Policy",
      preview: isFrench
        ? "Cette politique explique l'approche d'évaluation des distinctions individuelles et de délégation à SSUNS 2026."
        : "This policy explains the evaluation approach for individual and delegation awards at SSUNS 2026.",
      bullets: [
        isFrench ? "Présente le cadre d'évaluation officiel des distinctions." : "Provides the official award evaluation framework.",
        isFrench ? "À consulter par les délégués, dais et responsables de comité." : "Useful for delegates, dais members, and committee leadership.",
      ],
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
              <div className="space-y-4 body-copy">
                <p>{chapter.body[0]}</p>
                <p>{chapter.body[1]}</p>
              </div>
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
                  ? "Pour toute question concernant la politique technologique de la SSUNS ou des problèmes techniques liés aux comités, veuillez contacter committees@ssuns.org."
                  : "For any questions regarding the tech policy at SSUNS or technical issues (with respect to committees), please contact committees@ssuns.org."}
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
