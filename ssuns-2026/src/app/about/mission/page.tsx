"use client";

import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutMissionPage() {
  const { aboutContent, homeContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/mission");

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={aboutContent.chapters} />
          </aside>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
              <p className="section-kicker">{homeContent.editorial.label}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--accent)] sm:text-4xl">{homeContent.editorial.title}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">{homeContent.editorial.subtitle}</p>
              <div className="mt-6 border-t border-[var(--rule)] pt-5">
                <div className="space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                  {homeContent.editorial.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>

            <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
              <div className="space-y-6 body-copy">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
