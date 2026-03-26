"use client";

import Image from "next/image";
import { DossierNav } from "@/components/DossierNav";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutPage() {
  const { aboutContent } = useSiteContent();
  const overviewChapter = aboutContent.chapters.find((chapter) => chapter.href === "/about") ?? aboutContent.chapters[0];

  return (
    <>
      <PageHero intro={aboutContent.intro} title={aboutContent.title} />
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] xl:gap-14">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref="/about" items={aboutContent.chapters} />
            <div className="theme-panel-strong paper-grain rounded-[8px] p-5">
              <div className="grid gap-0 border border-[var(--rule)]">
                {aboutContent.metrics.map((metric) => (
                  <article className="border-t border-[var(--rule)] px-4 py-4 first:border-t-0" key={metric.label}>
                    <p className="section-kicker">{metric.label}</p>
                    <p className="mt-3 text-3xl font-semibold leading-none text-[var(--accent)]">{metric.value}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-8 sm:p-11">
              <p className="section-kicker">{overviewChapter.title}</p>
              <Image alt="" aria-hidden="true" className="mt-4 opacity-85" height={18} src="/graphics/report-rule.svg" width={300} />
              <div className="mt-5 space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                {overviewChapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 border-l border-[var(--rule)] pl-5">
                <p className="text-2xl font-semibold leading-[1.2] text-[var(--accent)] sm:text-3xl">{aboutContent.mission}</p>
              </div>
            </article>

            <DossierFigure alt={aboutContent.image.alt} caption={aboutContent.legacy} eyebrow={aboutContent.sections.legacy} ratio="3/2" src={aboutContent.image.src} />

            <div className="grid gap-5 md:grid-cols-3">
              {aboutContent.pillars.map((pillar) => (
                <article className="theme-panel paper-grain rounded-[8px] p-5" key={pillar.title}>
                  <p className="section-kicker">{aboutContent.sections.mission}</p>
                  <h2 className="mt-4 text-xl font-semibold leading-tight text-[var(--accent)]">{pillar.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{pillar.body}</p>
                </article>
              ))}
            </div>

            <article className="bg-[var(--panel-inverse)] p-6 text-white sm:p-7">
              <p className="section-kicker text-[#b4caff]">{aboutContent.sections.team}</p>
              <div className="mt-5 space-y-4 border-t border-white/12 pt-5">
                {aboutContent.teamPlaceholders.map((member) => (
                  <article className="grid gap-3 sm:grid-cols-[0.34fr_0.66fr]" key={member.name}>
                    <p className="text-sm font-semibold tracking-[0.06em] text-white">{member.name}</p>
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
