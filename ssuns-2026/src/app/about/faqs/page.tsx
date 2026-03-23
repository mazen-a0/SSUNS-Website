"use client";

import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutFaqsPage() {
  const { aboutContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/faqs");
  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref={chapter.href} items={aboutContent.chapters} />
          </aside>
          <div className="space-y-6">
            {aboutContent.faqCategories.map((category) => (
              <section className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8" key={category.title}>
                <p className="section-kicker">{category.title}</p>
                <div className="mt-5 space-y-3 border-t border-[var(--rule)] pt-5">
                  {category.items.map((item) => (
                    <details className="border border-[var(--rule)] px-4 py-4" key={item.question}>
                      <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">{item.question}</summary>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
