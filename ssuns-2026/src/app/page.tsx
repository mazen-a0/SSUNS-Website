"use client";

import Image from "next/image";
import Link from "next/link";
import { CountdownBand } from "@/components/CountdownBand";
import { DossierRail } from "@/components/DossierRail";
import { CountUpValue } from "@/components/CountUpValue";
import { HeroBackgroundMedia } from "@/components/HeroBackgroundMedia";
import { LandAcknowledgementBlock } from "@/components/LandAcknowledgementBlock";
import { LiquidButton } from "@/components/LiquidButton";
import { CommitteeImage } from "@/components/media/CommitteeImage";
import { DossierFigure } from "@/components/media/DossierFigure";
import { useSiteContent } from "@/lib/useSiteContent";

export default function HomePage() {
  const { committees, committeesPageContent, homeContent } = useSiteContent();
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
      <section className="mx-auto mt-0 max-w-[96rem] px-5 sm:px-8" id="hero">
        <div className="film-grain section-entrance relative isolate overflow-hidden rounded-[8px] border border-[#20349c] bg-[#0f183e] px-6 py-12 shadow-[var(--shadow-strong)] sm:px-10 sm:py-16">
          {/* TODO(video): Replace with final Montreal panorama loop (16:9, 1920x1080). Suggested subject: downtown skyline, river approach, or city arrival footage. */}
          <HeroBackgroundMedia
            poster={homeContent.hero.image.src}
            posterAlt={homeContent.hero.image.alt}
            videoMp4Src={homeContent.hero.video.mp4Src}
            videoWebmSrc={homeContent.hero.video.webmSrc}
          />
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
              <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.9] text-white sm:text-7xl">{homeContent.hero.title}</h1>
              <p className="mt-4 text-sm font-semibold tracking-[0.03em] text-[#b9ceff]">{homeContent.hero.accent}</p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#eef3ff] sm:text-lg">{homeContent.hero.description}</p>
              <p className="mt-6 max-w-xl border-l border-white/34 pl-4 text-sm leading-relaxed text-[#d7e4ff]">{homeContent.hero.statement}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LiquidButton href={homeContent.hero.primaryCta.href} label={homeContent.hero.primaryCta.label} />
                <LiquidButton
                  className="border-white/40 bg-[rgba(255,255,255,0.08)] text-white hover:bg-white hover:text-[var(--accent)]"
                  href={homeContent.hero.secondaryCta.href}
                  label={homeContent.hero.secondaryCta.label}
                  variant="ghost"
                />
              </div>
            </div>

            <aside className="border border-white/16 bg-[rgba(11,19,56,0.5)] p-5 text-white backdrop-blur-[2px]">
              <p className="section-kicker text-[#b4caff]">{homeContent.editorial.label}</p>
              <h2 className="mt-4 font-display text-3xl leading-none">{homeContent.editorial.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#e4edff]">{homeContent.editorial.subtitle}</p>
              <div className="mt-6 grid gap-4 border-t border-white/14 pt-4 sm:grid-cols-2">
                {homeContent.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <CountUpValue className="text-3xl font-semibold leading-none text-white" value={stat.value} />
                    <p className="mt-2 text-[11px] font-semibold text-[#b7ccff]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[96rem] px-5 sm:px-8">
        <DossierRail
          contextSummary={homeContent.editorial.subtitle}
          contextTitle={homeContent.editorial.title}
          currentHref="#hero"
          items={homeContent.sectionIndex.map((item) => ({ href: `#${item.id}`, summary: item.label, title: item.label }))}
          variant="strip"
        />

        <div className="mt-8 space-y-16">
          <section className="section-entrance" id="glance">
            <div className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] text-white shadow-[var(--shadow-soft)]">
              <div className="grid gap-0 lg:grid-cols-4">
                {homeContent.atGlance.items.map((item) => (
                  <article className="border-t border-white/14 px-5 py-6 first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0" key={item.label}>
                    <p className="section-kicker text-[#b4caff]">{item.label}</p>
                    <p className="mt-3 text-2xl font-semibold leading-tight text-white">{item.value}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#dbe7ff]">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-entrance" id="key-dates">
            {homeContent.hero.countdownTarget ? (
              <CountdownBand labels={homeContent.hero.countdownLabels} target={homeContent.hero.countdownTarget} />
            ) : (
              <div className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="section-kicker">{homeContent.timeline.title}</p>
                    <h2 className="mt-3 font-display text-4xl leading-none text-[var(--accent)]">{homeContent.timeline.title}</h2>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">{homeContent.timeline.intro}</p>
                </div>
                <div className="mt-6 grid gap-4 border-t border-[var(--rule)] pt-5 md:grid-cols-5">
                  {homeContent.timeline.items.map((item) => (
                    <article className="border-l border-[var(--rule)] pl-4" key={item.date}>
                      <p className="text-xs font-semibold text-[var(--accent)]">{item.date}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{item.label}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]" id="mission">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="section-entrance rounded-[8px] border border-[var(--rule)] bg-[var(--panel-inverse)] p-6 text-white shadow-[var(--shadow-soft)] sm:p-7">
                <p className="section-kicker text-[#b4caff]">{homeContent.editorial.label}</p>
                <Image alt="" aria-hidden="true" className="mt-4 opacity-90 invert" height={18} src="/graphics/report-rule.svg" width={260} />
                <h2 className="mt-5 font-display text-4xl leading-[0.92] sm:text-5xl">{homeContent.editorial.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#dbe6ff] sm:text-base">{homeContent.editorial.subtitle}</p>
              </div>
            </aside>

            <div className="space-y-6">
              <article className="theme-panel-strong paper-grain section-entrance rounded-[8px] p-6 sm:p-8">
                <div className="space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                  {homeContent.editorial.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <article className="theme-panel paper-grain section-entrance overflow-hidden rounded-[8px] p-5 sm:p-6">
                <p className="section-kicker">{homeContent.directorNote.label}</p>
                <div className="mt-5 grid gap-5 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
                  <DossierFigure alt={homeContent.directorNote.image.alt} ratio="4/5" src={homeContent.directorNote.image.src} />
                  <div>
                    <h3 className="text-3xl font-semibold leading-tight text-[var(--accent)]">{homeContent.directorNote.title}</h3>
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--text)]">
                      {homeContent.directorNote.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-6 border-t border-[var(--rule)] pt-4">
                      <p className="font-accent text-2xl text-[var(--accent)]">{homeContent.directorNote.signature}</p>
                      <p className="mt-2 text-xs font-semibold text-[var(--muted)]">{homeContent.directorNote.role}</p>
                      <p className="mt-4 inline-flex border border-[var(--rule)] px-3 py-1 text-[10px] font-semibold text-[var(--muted)]">{homeContent.directorNote.stamp}</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="theme-panel-strong paper-grain section-entrance rounded-[8px] p-6 sm:p-8">
                <p className="section-kicker">{homeContent.conferenceStandard.label}</p>
                <div className="mt-6 space-y-5 border-t border-[var(--rule)] pt-5">
                  {homeContent.conferenceStandard.sections.map((section) => (
                    <article className="grid gap-3 md:grid-cols-[0.28fr_0.72fr]" key={section.title}>
                      <div>
                        <p className="text-xs font-semibold text-[var(--muted)]">{section.label}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold leading-tight text-[var(--accent)]">{section.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{section.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section className="section-entrance" id="committees-preview">
            <div className="rounded-[8px] border border-[var(--rule)] bg-[var(--bg-alt)] px-5 py-6 sm:px-6 sm:py-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="section-kicker">{homeContent.featuredCommittees.label}</p>
                  <h2 className="mt-3 max-w-3xl font-display text-4xl leading-none text-[var(--accent)] sm:text-5xl">{homeContent.featuredCommittees.title}</h2>
                </div>
                <Link className="border-b border-[var(--accent-2)] pb-1 text-sm font-semibold tracking-[0.02em] text-[var(--accent)]" href="/committees">
                  {homeContent.featuredCommittees.ctaLabel}
                </Link>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{homeContent.featuredCommittees.intro}</p>
              <div className="mt-6 grid gap-4 xl:grid-cols-3">
                {featuredCommittees.map((committee) => (
                  <article className="group relative overflow-hidden border border-[var(--rule)] bg-[var(--panel)] transition-colors duration-300 hover:border-[var(--accent)]" key={committee.slug}>
                    <CommitteeImage alt={`${committee.name} committee placeholder`} mode="card" slug={committee.slug} src={committee.imageSrc} />
                    <div className="p-5">
                      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <p className="section-kicker">{committee.theme}</p>
                      <h3 className="mt-4 font-display text-3xl leading-none text-[var(--accent)]">{committee.name}</h3>
                      <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold text-[var(--muted)]">
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.level}</span>
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.size}</span>
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.format}</span>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-[var(--text)]">{committee.note}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{committee.topic}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-[var(--rule)] pt-4">
                        <Link className="text-sm font-semibold tracking-[0.02em] text-[var(--accent)]" href={`/committees/${committee.slug}`}>
                          {committeesPageContent.openDetailsLabel}
                        </Link>
                        <span aria-hidden className="h-px w-10 bg-[var(--accent)] transition-all duration-300 group-hover:w-14" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-entrance" id="venue">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-kicker">{homeContent.gallery.label}</p>
                <h2 className="mt-3 font-display text-4xl leading-none text-[var(--accent)] sm:text-5xl">{homeContent.gallery.title}</h2>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-[var(--muted)]">{homeContent.gallery.scrollHint}</p>
                <Link className="mt-2 inline-block border-b border-[var(--accent-2)] pb-1 text-sm font-semibold tracking-[0.02em] text-[var(--accent)]" href={homeContent.gallery.cta.href}>
                  {homeContent.gallery.cta.label}
                </Link>
              </div>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{homeContent.gallery.intro}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <DossierFigure
                alt={homeContent.gallery.items[0].alt}
                caption={homeContent.gallery.items[0].caption}
                eyebrow={homeContent.gallery.items[0].title}
                ratio="16/9"
                src={homeContent.gallery.items[0].src}
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {homeContent.gallery.items.slice(1).map((item, index) => (
                  <DossierFigure alt={item.alt} caption={item.caption} eyebrow={item.title} key={item.id} ratio={index === 1 ? "3/2" : "16/9"} src={item.src} />
                ))}
              </div>
            </div>
          </section>

          <section className="section-entrance">
            <LandAcknowledgementBlock
              body={homeContent.landAcknowledgement.body}
              collapseLabel={homeContent.landAcknowledgement.collapseLabel}
              contactLine={homeContent.landAcknowledgement.contactLine}
              expandLabel={homeContent.landAcknowledgement.expandLabel}
              resources={homeContent.landAcknowledgement.resources}
              resourcesTitle={homeContent.landAcknowledgement.resourcesTitle}
              title={homeContent.landAcknowledgement.title}
            />
          </section>
        </div>
      </section>

      <section className="mt-14 border-y border-[#23379f] bg-[var(--panel-inverse)] px-4 py-8 text-white sm:px-6 sm:py-10" id="register">
        <div className="mx-auto max-w-[96rem]">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker text-[#b4caff]">{homeContent.registrationBand.label}</p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[0.94] sm:text-5xl">{homeContent.registrationBand.title}</h2>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-[#e3ecff]">{homeContent.registrationBand.body}</p>
              <LiquidButton className="mt-6 border-white bg-white text-[var(--accent)]" href={homeContent.registrationBand.cta.href} label={homeContent.registrationBand.cta.label} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
