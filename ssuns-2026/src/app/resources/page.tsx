"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ResourcesPage() {
  const { commonResources, resourcesPageContent } = useSiteContent();
  const categories = [...new Set(commonResources.map((resource) => resource.category))];

  return (
    <>
      <PageHero intro={resourcesPageContent.intro} title={resourcesPageContent.title} />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref="/resources" items={resourcesPageContent.chapters} />
            <DossierFigure alt={resourcesPageContent.heroImage.alt} ratio="3/2" src={resourcesPageContent.heroImage.src} />
          </aside>

          <div className="space-y-6">
            {categories.map((category) => (
              <section className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-7" key={category}>
                <div className="grid gap-5 lg:grid-cols-[0.26fr_0.74fr]">
                  <div>
                    <p className="section-kicker">{resourcesPageContent.sections.categories}</p>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight text-[var(--accent)]">{category}</h2>
                  </div>
                  <div className="space-y-4">
                    {commonResources
                      .filter((resource) => resource.category === category)
                      .map((resource) => (
                        <article className="border-t border-[var(--rule)] pt-4" id={resource.id} key={resource.id}>
                          <div className="grid gap-3 md:grid-cols-[0.34fr_0.66fr]">
                            <div>
                              <Link className="text-sm font-semibold text-[var(--accent)]" href={resource.href}>
                                {resource.title}
                              </Link>
                              <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{resource.description}</p>
                            </div>
                            <div>
                              <p className="text-sm leading-relaxed text-[var(--muted)]">{resource.details}</p>
                              <p className="mt-3 text-xs font-semibold text-[var(--muted)]">{resourcesPageContent.placeholderLabel}</p>
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
