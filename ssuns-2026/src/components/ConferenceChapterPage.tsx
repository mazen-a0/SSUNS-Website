"use client";

import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

type ConferenceChapterPageProps = {
  href: string;
};

export function ConferenceChapterPage({ href }: ConferenceChapterPageProps) {
  const { conferenceContent } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === href);

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={conferenceContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <ConferenceQuickLinks className="mb-6" currentHref={href} />
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="xl:sticky xl:top-28 xl:self-start">
            <DossierNav currentHref={chapter.href} items={conferenceContent.chapters} />
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
