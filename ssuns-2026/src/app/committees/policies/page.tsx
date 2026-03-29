"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
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

            <section className="grid gap-6 xl:grid-cols-3">
              <article className="theme-panel rounded-[8px] p-6 sm:p-7 xl:col-span-1">
                <p className="section-kicker">{isFrench ? "Assemblées générales à double délégation" : "Double-Delegate General Assemblies"}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">{chapter.body[2]}</p>
              </article>

              <article className="theme-panel rounded-[8px] p-6 sm:p-7 xl:col-span-1">
                <p className="section-kicker">{isFrench ? "Petites AG, ECOSOC et agences spécialisées" : "Small GAs, ECOSOCs, and Specialized Agencies"}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">{chapter.body[3]}</p>
              </article>

              <article className="theme-panel rounded-[8px] p-6 sm:p-7 xl:col-span-1">
                <p className="section-kicker">{isFrench ? "Crises" : "Crises"}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">{chapter.body[4]}</p>
              </article>
            </section>

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
