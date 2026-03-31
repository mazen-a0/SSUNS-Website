"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { ExpandablePanels } from "@/components/ui/expandable-panels";
import { useSiteContent } from "@/lib/useSiteContent";

export default function CommitteesPoliciesPage() {
  const { committeesPageContent, language } = useSiteContent();
  const chapter = committeesPageContent.chapters.find((item) => item.href === "/committees/policies");
  const isFrench = language === "fr";

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

            <ExpandablePanels
              items={[
                {
                  id: "technology-policy",
                  title: isFrench ? "Politique technologique" : "Technology Policy",
                  summary: isFrench ? "Attentes techniques selon le format du comité." : "Technology expectations by committee format.",
                  content: chapter.body.slice(1),
                },
                {
                  id: "prewriting-policy",
                  title: isFrench ? "Politique de pré-rédaction" : "Pre-Writing Policy",
                  summary: isFrench ? "Préparation et rédaction avant le comité." : "Preparation and drafting expectations before committee.",
                  content: [isFrench ? "À venir." : "Coming soon."],
                },
                {
                  id: "award-policy",
                  title: isFrench ? "Politique des prix" : "Award Policy",
                  summary: isFrench ? "Critères et approche des distinctions." : "Award criteria and judging approach.",
                  content: [isFrench ? "À venir." : "Coming soon."],
                },
                {
                  id: "ai-policy",
                  title: isFrench ? "Politique sur l’IA" : "AI Policy",
                  summary: isFrench ? "Usage acceptable des outils d’IA." : "Acceptable use of AI tools and assistance.",
                  content: [isFrench ? "À venir." : "Coming soon."],
                },
              ]}
            />

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
