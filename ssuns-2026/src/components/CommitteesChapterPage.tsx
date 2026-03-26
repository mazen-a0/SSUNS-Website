"use client";

import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

type CommitteesChapterPageProps = {
  href: string;
};

export function CommitteesChapterPage({ href }: CommitteesChapterPageProps) {
  const { committeesPageContent } = useSiteContent();
  const chapter = committeesPageContent.chapters.find((item) => item.href === href);

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={committeesPageContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] xl:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref={chapter.href} items={committeesPageContent.chapters} />
          </aside>
          <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
            <div className="space-y-6 body-copy">
              {chapter.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
