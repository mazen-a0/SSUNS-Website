"use client";

import Image from "next/image";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferencePage() {
  const { conferenceContent } = useSiteContent();

  return (
    <>
      <PageHero intro={conferenceContent.intro} title={conferenceContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <DossierNav currentHref="/conference" items={conferenceContent.chapters} />
          </aside>

          <div className="space-y-6">
            <article className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-6 py-8 text-white sm:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/14 pb-5">
                <div>
                  <p className="section-kicker text-[#b4caff]">{conferenceContent.sections.schedule}</p>
                  <h2 className="mt-3 font-display text-4xl uppercase leading-none">{conferenceContent.scheduleBand.title}</h2>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {conferenceContent.scheduleBand.items.map((item) => (
                  <article className="border-l border-white/18 pl-4" key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b4caff]">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#eef4ff]">{item.text}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{conferenceContent.sections.venue}</p>
              <Image alt="" aria-hidden="true" className="mt-4" height={18} src="/graphics/report-divider.svg" width={320} />
              <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <h2 className="font-display text-4xl uppercase leading-none text-[var(--accent)]">{conferenceContent.venueSection.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">{conferenceContent.venueSection.body}</p>
                  <ul className="mt-6 space-y-4 border-t border-[var(--rule)] pt-5">
                    {conferenceContent.expectations.map((item) => (
                      <li className="grid gap-3 sm:grid-cols-[0.06fr_0.94fr]" key={item}>
                        <span aria-hidden className="mt-2 h-px w-6 bg-[var(--accent)]" />
                        <span className="text-sm leading-relaxed text-[var(--muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="theme-panel overflow-hidden p-3">
                  {/* conference hotel exterior, 16:9, recommended 1600x900 */}
                  <Image alt={conferenceContent.venueSection.image.alt} className="aspect-[16/9] w-full object-cover" height={900} src={conferenceContent.venueSection.image.src} width={1600} />
                </div>
              </div>
            </article>

            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{conferenceContent.sections.tracks}</p>
              <div className="mt-6 space-y-5 border-t border-[var(--rule)] pt-5">
                {conferenceContent.tracks.map((track) => (
                  <article className="grid gap-4 md:grid-cols-[0.32fr_0.68fr]" key={track.title}>
                    <Image alt={track.image.alt} className="aspect-[3/2] w-full object-cover" height={800} src={track.image.src} width={1200} />
                    <div>
                      <h3 className="font-display text-3xl uppercase leading-none text-[var(--accent)]">{track.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{track.body}</p>
                    </div>
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
