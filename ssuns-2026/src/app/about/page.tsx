"use client";

import Image from "next/image";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutPage() {
  const { aboutContent } = useSiteContent();
  const overviewChapter = aboutContent.chapters.find((chapter) => chapter.href === "/about") ?? aboutContent.chapters[0];

  return (
    <>
      <PageHero intro={aboutContent.intro} title={aboutContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <DossierNav currentHref="/about" items={aboutContent.chapters} />
            <div className="theme-panel-strong paper-grain rounded-[8px] p-5">
              <div className="grid gap-0 border border-[var(--rule)]">
                {aboutContent.metrics.map((metric) => (
                  <article className="border-t border-[var(--rule)] px-4 py-4 first:border-t-0" key={metric.label}>
                    <p className="section-kicker">{metric.label}</p>
                    <p className="mt-3 font-display text-3xl uppercase leading-none text-[var(--accent)]">{metric.value}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{overviewChapter.title}</p>
              <Image alt="" aria-hidden="true" className="mt-4" height={18} src="/graphics/report-divider.svg" width={320} />
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                {overviewChapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 border-l border-[var(--rule)] pl-5">
                <p className="font-display text-3xl uppercase leading-[1.04] text-[var(--accent)]">{aboutContent.mission}</p>
              </div>
            </article>

            <article className="theme-panel overflow-hidden rounded-[8px] p-3">
              {/* delegates collaborating during moderated caucus, 3:2, recommended 1600x1067 */}
              <Image alt={aboutContent.image.alt} className="aspect-[3/2] w-full object-cover" height={1067} src={aboutContent.image.src} width={1600} />
              <div className="grid gap-4 border-t border-[var(--rule)] px-3 py-4 sm:grid-cols-[0.36fr_0.64fr]">
                <p className="section-kicker">{aboutContent.sections.legacy}</p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{aboutContent.legacy}</p>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-3">
              {aboutContent.pillars.map((pillar) => (
                <article className="theme-panel paper-grain rounded-[8px] p-5" key={pillar.title}>
                  <p className="section-kicker">{aboutContent.sections.mission}</p>
                  <h2 className="mt-4 font-display text-2xl uppercase leading-none text-[var(--accent)]">{pillar.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{pillar.body}</p>
                </article>
              ))}
            </div>

            <article className="bg-[var(--panel-inverse)] p-6 text-white sm:p-7">
              <p className="section-kicker text-[#b4caff]">{aboutContent.sections.team}</p>
              <div className="mt-5 space-y-4 border-t border-white/12 pt-5">
                {aboutContent.teamPlaceholders.map((member) => (
                  <article className="grid gap-3 sm:grid-cols-[0.34fr_0.66fr]" key={member.name}>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{member.name}</p>
                    <p className="text-sm leading-relaxed text-[#dbe7ff]">{member.role}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
