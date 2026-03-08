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
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <DossierNav currentHref={chapter.href} items={chapters} />
          </aside>
          <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
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
