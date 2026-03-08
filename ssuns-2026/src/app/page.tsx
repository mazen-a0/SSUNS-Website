"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroBackgroundMedia } from "@/components/HeroBackgroundMedia";
import { HomeSectionTabs } from "@/components/HomeSectionTabs";
import { LiquidButton } from "@/components/LiquidButton";
import { useSiteContent } from "@/lib/useSiteContent";

export default function HomePage() {
  const { committees, homeContent } = useSiteContent();
  const featuredCommittees = homeContent.featuredCommittees.items
    .map((item) => {
      const committee = committees.find((entry) => entry.slug === item.slug);

      if (!committee) {
        return null;
      }

      return { ...committee, note: item.note };
    })
    .filter((committee): committee is NonNullable<typeof committee> => committee !== null);

  return (
    <>
      <section className="mx-auto mt-0 max-w-6xl px-4 sm:px-6" id="hero">
        <div className="film-grain relative isolate overflow-hidden rounded-[8px] border border-[#20349c] bg-[#0f183e] px-6 py-12 shadow-[var(--shadow-strong)] sm:px-10 sm:py-16">
          {/* TODO(video): Replace with final Montreal panorama loop (16:9, 1920x1080). Suggested subject: downtown skyline, river approach, or city arrival footage. */}
          <HeroBackgroundMedia poster="/placeholders/hero-1920x1080.jpg" posterAlt={homeContent.hero.image.alt} />
          <div className="absolute inset-0 z-10" style={{ background: "var(--hero-overlay)" }} />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(6,11,34,0.18),rgba(6,11,34,0.34))]" />
          <Image
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-5 right-5 z-20 opacity-[0.22]"
            height={96}
            src="/graphics/ornate-frame.svg"
            width={96}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-6 bottom-6 z-20 opacity-[0.36]"
            height={72}
            src="/graphics/corner-ornament.svg"
            width={72}
          />

          <div className="relative z-20 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker text-[#dbe6ff]">{homeContent.hero.eyebrow}</p>
              <Image alt="" aria-hidden="true" className="mt-4 opacity-90" height={18} src="/graphics/report-rule.svg" width={320} />
              <h1 className="mt-5 max-w-4xl font-display text-5xl uppercase leading-[0.9] text-white sm:text-7xl">
                {homeContent.hero.title}
              </h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#b9ceff]">{homeContent.hero.accent}</p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#eef3ff] sm:text-lg">{homeContent.hero.description}</p>
              <p className="mt-6 max-w-xl border-l border-white/34 pl-4 text-sm leading-relaxed text-[#d7e4ff]">{homeContent.hero.statement}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LiquidButton href={homeContent.hero.primaryCta.href} label={homeContent.hero.primaryCta.label} />
                <LiquidButton className="border-white/25 bg-[rgba(255,255,255,0.06)] text-white" href={homeContent.hero.secondaryCta.href} label={homeContent.hero.secondaryCta.label} variant="ghost" />
              </div>
            </div>

            <aside className="border border-white/16 bg-[rgba(11,19,56,0.5)] p-5 text-white backdrop-blur-[2px]">
              <p className="section-kicker text-[#b4caff]">{homeContent.editorial.label}</p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-none">{homeContent.editorial.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#e4edff]">{homeContent.editorial.subtitle}</p>
              <div className="mt-6 grid gap-4 border-t border-white/14 pt-4 sm:grid-cols-2">
                {homeContent.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl uppercase leading-none text-white">{stat.value}</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b7ccff]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[0.24fr_0.76fr] lg:gap-6">
        <aside className="mb-6 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
          <HomeSectionTabs items={homeContent.sectionIndex} />
        </aside>

        <div className="space-y-12">
          <section id="glance">
            <div className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] text-white shadow-[var(--shadow-soft)]">
              <div className="grid gap-0 lg:grid-cols-4">
                {homeContent.atGlance.items.map((item) => (
                  <article className="border-t border-white/14 px-5 py-5 first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0" key={item.label}>
                    <p className="section-kicker text-[#b4caff]">{item.label}</p>
                    <p className="mt-3 font-display text-2xl uppercase leading-none text-white">{item.value}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#dbe7ff]">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="mission" className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[8px] border border-[var(--rule)] bg-[var(--panel-inverse)] p-6 text-white shadow-[var(--shadow-soft)] sm:p-7">
                <p className="section-kicker text-[#b4caff]">{homeContent.editorial.label}</p>
                <Image alt="" aria-hidden="true" className="mt-4 opacity-90 invert" height={18} src="/graphics/report-rule.svg" width={260} />
                <h2 className="mt-5 font-display text-4xl uppercase leading-[0.92] sm:text-5xl">{homeContent.editorial.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#dbe6ff] sm:text-base">{homeContent.editorial.subtitle}</p>
              </div>
            </aside>

            <div className="space-y-5">
              <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
                <div className="space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                  {homeContent.editorial.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <article className="theme-panel paper-grain overflow-hidden rounded-[8px] p-5 sm:p-6">
                <p className="section-kicker">{homeContent.directorNote.label}</p>
                <div className="mt-5 grid gap-5 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
                  <div className="relative overflow-hidden border border-[var(--rule)]">
                    <Image alt="" aria-hidden="true" className="pointer-events-none absolute top-3 right-3 opacity-[0.18]" height={60} src="/graphics/ornate-frame.svg" width={60} />
                    {/* TODO(photo): Replace with Secretariat headshot (4:5, 800x1000). Suggested subject: Secretary-General or senior executive portrait in formal attire. */}
                    <Image alt={homeContent.directorNote.image.alt} className="aspect-[4/5] w-full object-cover" height={1000} src={homeContent.directorNote.image.src} width={800} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl uppercase leading-none text-[var(--accent)]">{homeContent.directorNote.title}</h3>
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--text)]">
                      {homeContent.directorNote.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-6 border-t border-[var(--rule)] pt-4">
                      <p className="font-accent text-2xl text-[var(--accent)]">{homeContent.directorNote.signature}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{homeContent.directorNote.role}</p>
                      <p className="mt-4 inline-flex border border-[var(--rule)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{homeContent.directorNote.stamp}</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
                <p className="section-kicker">{homeContent.conferenceStandard.label}</p>
                <div className="mt-6 space-y-5 border-t border-[var(--rule)] pt-5">
                  {homeContent.conferenceStandard.sections.map((section) => (
                    <article className="grid gap-3 md:grid-cols-[0.28fr_0.72fr]" key={section.title}>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{section.label}</p>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl uppercase leading-none text-[var(--accent)]">{section.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{section.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section id="committees-preview">
            <div className="rounded-[8px] border border-[var(--rule)] bg-[var(--bg-alt)] px-5 py-6 sm:px-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="section-kicker">{homeContent.featuredCommittees.label}</p>
                  <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-none text-[var(--accent)] sm:text-5xl">{homeContent.featuredCommittees.title}</h2>
                </div>
                <Link className="border-b border-[var(--accent-2)] pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]" href="/committees">
                  {homeContent.featuredCommittees.ctaLabel}
                </Link>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{homeContent.featuredCommittees.intro}</p>
              <div className="-mx-5 mt-6 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6">
                <div className="flex w-max snap-x gap-4">
                  {featuredCommittees.map((committee) => (
                    <article className="group relative w-[320px] snap-start overflow-hidden border border-[var(--rule)] bg-[var(--panel)] p-5 transition-colors duration-300 hover:border-[var(--accent)] sm:w-[360px]" key={committee.slug}>
                      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <p className="section-kicker">{committee.theme}</p>
                      <h3 className="mt-4 font-display text-3xl uppercase leading-none text-[var(--accent)]">{committee.name}</h3>
                      <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.level}</span>
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.size}</span>
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.format}</span>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-[var(--text)]">{committee.note}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{committee.topic}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-[var(--rule)] pt-4">
                        <Link className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]" href={`/committees/${committee.slug}`}>
                          {committee.name}
                        </Link>
                        <span aria-hidden className="h-px w-10 bg-[var(--accent)] transition-all duration-300 group-hover:w-14" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="venue">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-kicker">{homeContent.gallery.label}</p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-none text-[var(--accent)] sm:text-5xl">{homeContent.gallery.title}</h2>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{homeContent.gallery.scrollHint}</p>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{homeContent.gallery.intro}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="theme-panel overflow-hidden rounded-[8px] p-3">
                {/* TODO(photo): Replace with Montreal skyline at dusk (16:9, 1600x900). Suggested subject: city skyline or downtown Montreal establishing shot. */}
                <Image alt={homeContent.gallery.items[0].alt} className="aspect-[16/9] w-full object-cover" height={900} src={homeContent.gallery.items[0].src} width={1600} />
                <div className="grid gap-4 border-t border-[var(--rule)] px-3 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <p className="section-kicker">{homeContent.gallery.items[0].title}</p>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{homeContent.gallery.items[0].caption}</p>
                </div>
              </article>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {homeContent.gallery.items.slice(1).map((item, index) => (
                  <article className="theme-panel overflow-hidden rounded-[8px] p-3" key={item.id}>
                    {/* TODO(photo): Replace with venue/programme photography (16:9 or 3:2, 1600x900 or 1600x1067). Suggested subjects: Sheraton exterior, delegates caucusing, conference ballroom. */}
                    <Image
                      alt={item.alt}
                      className={index === 1 ? "aspect-[3/2] w-full object-cover" : "aspect-[16/9] w-full object-cover"}
                      height={index === 1 ? 1067 : 900}
                      src={item.src}
                      width={1600}
                    />
                    <div className="grid gap-3 border-t border-[var(--rule)] px-3 py-4">
                      <p className="section-kicker">{item.title}</p>
                      <p className="text-sm leading-relaxed text-[var(--muted)]">{item.caption}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section>
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{homeContent.landAcknowledgement.title}</p>
              <div className="mt-5 space-y-4 border-t border-[var(--rule)] pt-5 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                {homeContent.landAcknowledgement.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </section>

          <section id="register">
            <div className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-6 py-8 text-white sm:px-8 sm:py-10">
              <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <p className="section-kicker text-[#b4caff]">{homeContent.registrationBand.label}</p>
                  <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-[0.94] sm:text-5xl">{homeContent.registrationBand.title}</h2>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-[#e3ecff]">{homeContent.registrationBand.body}</p>
                  <LiquidButton className="mt-6" href={homeContent.registrationBand.cta.href} label={homeContent.registrationBand.cta.label} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
