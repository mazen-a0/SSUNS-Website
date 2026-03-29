"use client";

import { CommitteesExplorer } from "@/components/CommitteesExplorer";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function CommitteesPage() {
  const { committees, committeesPageContent } = useSiteContent();
  const slatingChapter = committeesPageContent.chapters.find((chapter) => chapter.href === "/committees") ?? committeesPageContent.chapters[0];

  return (
    <>
      <PageHero intro={slatingChapter.summary} title={slatingChapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
            <DossierNav currentHref="/committees" items={committeesPageContent.chapters} />
          </aside>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{slatingChapter.title}</p>
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
