"use client";

import Image from "next/image";
import Link from "next/link";
import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { DossierCarousel } from "@/components/media/DossierCarousel";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferencePage() {
  const { conferenceContent, homeContent } = useSiteContent();
  const conferenceSlides = [
    {
      id: "conference-venue",
      alt: conferenceContent.venueSection.image.alt,
      caption: conferenceContent.venueSection.body,
      eyebrow: conferenceContent.venueSection.title,
      src: conferenceContent.venueSection.image.src,
    },
    ...homeContent.gallery.items.slice(1).map((item) => ({
      id: item.id,
      alt: item.alt,
      caption: item.caption,
      eyebrow: item.title,
      src: item.src,
    })),
  ];

  return (
    <>
      <PageHero intro={conferenceContent.intro} title={conferenceContent.title} />
      <section className="page-shell">
        <ConferenceQuickLinks className="mb-6" currentHref="/conference" />
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="xl:sticky xl:top-28 xl:self-start">
            <DossierNav currentHref="/conference" items={conferenceContent.chapters} />
          </aside>

          <div className="space-y-6">
            <article className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-6 py-8 text-white sm:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/14 pb-5">
                <div>
                  <p className="section-kicker text-[#b4caff]">{conferenceContent.sections.schedule}</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight">{conferenceContent.scheduleBand.title}</h2>
                </div>
                <Link className="border-b border-[#79aefc] pb-1 text-sm font-semibold tracking-[0.02em] text-white" href="/conference/schedule">
                  {conferenceContent.chapters.find((chapter) => chapter.href === "/conference/schedule")?.title}
                </Link>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {conferenceContent.scheduleBand.items.map((item) => (
                  <article className="border-l border-white/18 pl-4" key={item.label}>
                    <p className="text-xs font-semibold text-[#b4caff]">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#eef4ff]">{item.text}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{conferenceContent.sections.venue}</p>
              <Image alt="" aria-hidden="true" className="mt-4 opacity-85" height={18} src="/graphics/report-rule.svg" width={300} />
              <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <h2 className="text-3xl font-semibold leading-tight text-[var(--accent)]">{conferenceContent.venueSection.title}</h2>
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
                <DossierFigure alt={conferenceContent.venueSection.image.alt} ratio="16/9" src={conferenceContent.venueSection.image.src} />
              </div>
            </article>

            <DossierCarousel
              description={conferenceContent.venueSection.body}
              eyebrow={conferenceContent.sections.venue}
              items={conferenceSlides}
              title={conferenceContent.venueSection.title}
            />

            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{conferenceContent.sections.tracks}</p>
              <div className="mt-6 space-y-5 border-t border-[var(--rule)] pt-5">
                {conferenceContent.tracks.map((track) => (
                  <article className="grid gap-4 md:grid-cols-[0.32fr_0.68fr]" key={track.title}>
                    <DossierFigure alt={track.image.alt} ratio="3/2" src={track.image.src} />
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight text-[var(--accent)]">{track.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{track.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <div className="grid gap-6 lg:grid-cols-[0.56fr_0.44fr]">
              <DossierFigure
                alt={conferenceContent.crisisFeature.image.alt}
                caption={conferenceContent.crisisFeature.body}
                eyebrow={conferenceContent.crisisFeature.title}
                ratio="3/2"
                src={conferenceContent.crisisFeature.image.src}
              />

              <div className="space-y-6">
                <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
                  <p className="section-kicker">{conferenceContent.sections.policies}</p>
                  <div className="mt-5 space-y-4 border-t border-[var(--rule)] pt-5">
                    {conferenceContent.policyCallouts.map((item) => (
                      <article className="grid gap-3 md:grid-cols-[0.34fr_0.66fr]" key={item.title}>
                        <p className="text-sm font-semibold text-[var(--accent)]">{item.title}</p>
                        <p className="text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                      </article>
                    ))}
                  </div>
                </article>

                <article className="bg-[var(--panel-inverse)] p-6 text-white sm:p-8">
                  <p className="section-kicker text-[#b4caff]">{conferenceContent.sections.sponsorship}</p>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight">{conferenceContent.sponsorshipCallout.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#dbe7ff]">{conferenceContent.sponsorshipCallout.body}</p>
                  <Link className="mt-5 inline-flex border-b border-[#79aefc] pb-1 text-sm font-semibold tracking-[0.02em] text-white" href={conferenceContent.sponsorshipCallout.href}>
                    {conferenceContent.sponsorshipCallout.title}
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
