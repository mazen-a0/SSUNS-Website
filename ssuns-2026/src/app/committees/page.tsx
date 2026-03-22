"use client";

import Image from "next/image";
import { CommitteesExplorer } from "@/components/CommitteesExplorer";
import { DossierNav } from "@/components/DossierNav";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function CommitteesPage() {
  const { committees, committeesPageContent } = useSiteContent();

  return (
    <>
      <PageHero intro={committeesPageContent.intro} title={committeesPageContent.title} />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref="/committees" items={committeesPageContent.chapters} />
            <DossierFigure alt={committeesPageContent.heroImage.alt} ratio="4/3" src={committeesPageContent.heroImage.src} />
          </aside>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{committeesPageContent.title}</p>
              <Image alt="" aria-hidden="true" className="mt-4" height={18} src="/graphics/report-divider.svg" width={320} />
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--text)] sm:text-base">{committeesPageContent.intro}</p>
            </article>
            <div className="animate-[sheet-in_420ms_ease-out]">
              <CommitteesExplorer committees={committees} pageContent={committeesPageContent} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
