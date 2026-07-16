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
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={aboutContent.chapters} />
          </aside>
          <div className="space-y-6">
            {aboutContent.faqCategories.map((category) => (
              <section className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8" key={category.title}>
                <p className="section-kicker">{category.title}</p>
                <div className="mt-5 space-y-3 border-t border-[var(--rule)] pt-5">
                  {category.items.map((item) => (
                    <details
                      className="faq-toggle rounded-[6px] border border-[var(--rule)] px-4 py-4 transition-colors duration-200 hover:border-[var(--accent)] open:border-[var(--accent)] open:bg-[rgba(20,32,130,0.03)]"
                      key={item.question}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[var(--accent)] [&::-webkit-details-marker]:hidden">
                        <span>{item.question}</span>
                        <span
                          aria-hidden
                          className="faq-chevron shrink-0 text-[var(--accent-2)] transition-transform duration-200"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </summary>
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
