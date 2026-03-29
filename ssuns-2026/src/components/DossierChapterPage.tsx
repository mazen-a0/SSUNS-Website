import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";

type Chapter = {
  href: string;
  title: string;
  summary: string;
  body: string[];
};

type DossierChapterPageProps = {
  eyebrow: string;
  chapter: Chapter;
  chapters: Chapter[];
};

export function DossierChapterPage({ eyebrow, chapter, chapters }: DossierChapterPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="xl:sticky xl:top-28 xl:self-start">
            <DossierNav currentHref={chapter.href} items={chapters} />
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
