"use client";

import Image from "next/image";
import { CommitteesExplorer } from "@/components/CommitteesExplorer";
import { DossierNav } from "@/components/DossierNav";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function CommitteesPage() {
  const { committees, committeesPageContent } = useSiteContent();
  const slatingChapter = committeesPageContent.chapters.find((chapter) => chapter.href === "/committees") ?? committeesPageContent.chapters[0];

  return (
    <>
      <PageHero intro={slatingChapter.summary} title={slatingChapter.title} />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref="/committees" items={committeesPageContent.chapters} />
            <DossierFigure alt={committeesPageContent.heroImage.alt} ratio="4/3" src={committeesPageContent.heroImage.src} />
          </aside>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{slatingChapter.title}</p>
              <Image alt="" aria-hidden="true" className="mt-4" height={18} src="/graphics/report-divider.svg" width={320} />
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                {slatingChapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
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
