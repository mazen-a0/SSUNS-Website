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
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref={chapter.href} items={chapters} />
          </aside>
          <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-10">
            <div className="space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
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
