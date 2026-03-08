"use client";

import Image from "next/image";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ResourcesPage() {
  const { commonResources, resourcesPageContent } = useSiteContent();
  const categories = [...new Set(commonResources.map((resource) => resource.category))];

  return (
    <>
      <PageHero intro={resourcesPageContent.intro} title={resourcesPageContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <DossierNav currentHref="/resources" items={resourcesPageContent.chapters} />
            <article className="theme-panel overflow-hidden rounded-[8px] p-3">
              {/* delegates reviewing resource documents, 3:2, recommended 1200x800 */}
              <Image alt={resourcesPageContent.heroImage.alt} className="aspect-[3/2] w-full object-cover" height={800} src={resourcesPageContent.heroImage.src} width={1200} />
            </article>
          </aside>

          <div className="space-y-6">
            {categories.map((category) => (
              <section className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-7" key={category}>
                <div className="grid gap-5 lg:grid-cols-[0.26fr_0.74fr]">
                  <div>
                    <p className="section-kicker">{resourcesPageContent.sections.categories}</p>
                    <h2 className="mt-4 font-display text-3xl uppercase leading-none text-[var(--accent)]">{category}</h2>
                  </div>
                  <div className="space-y-4">
                    {commonResources
                      .filter((resource) => resource.category === category)
                      .map((resource) => (
                        <article className="border-t border-[var(--rule)] pt-4" key={resource.id}>
                          <span className="relative -top-24 block" id={resource.id} />
                          <div className="grid gap-3 md:grid-cols-[0.34fr_0.66fr]">
                            <div>
                              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{resource.title}</h3>
                              <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{resource.description}</p>
                            </div>
                            <div>
                              <p className="text-sm leading-relaxed text-[var(--muted)]">{resource.details}</p>
                              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">{resourcesPageContent.placeholderLabel}</p>
                            </div>
                          </div>
                        </article>
                      ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
