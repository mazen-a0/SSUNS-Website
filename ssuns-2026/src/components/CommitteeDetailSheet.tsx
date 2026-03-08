"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteContent } from "@/lib/useSiteContent";

const detailSections = ["overview", "topic", "difficulty", "format", "chairs", "resources"] as const;

type CommitteeDetailSheetProps = {
  slug: string;
};

export function CommitteeDetailSheet({ slug }: CommitteeDetailSheetProps) {
  const { committees, committeesPageContent } = useSiteContent();
  const committee = committees.find((entry) => entry.slug === slug);

  if (!committee) {
    return null;
  }

  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
      <div className="theme-panel-strong paper-grain overflow-hidden rounded-[10px] p-5 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--rule)] pb-4">
          <Link
            className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]"
            href="/committees"
          >
            {committeesPageContent.detailBackLabel}
          </Link>
          <Link className="border border-[var(--rule)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]" href="/committees">
            {committeesPageContent.detailCloseLabel}
          </Link>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <p className="section-kicker">{committee.theme}</p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-[0.92] text-[var(--accent)] sm:text-5xl">{committee.name}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text)] sm:text-base">{committee.blurb}</p>

            <div className="mt-6 grid gap-3 border-y border-[var(--rule)] py-4 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{committeesPageContent.filterLevelLabel}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)]">{committee.level}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{committeesPageContent.sections.format}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)]">{committee.format}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{committeesPageContent.sizeLabel}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)]">{committee.size}</p>
              </div>
            </div>

            <nav aria-label={committee.name} className="mt-5 overflow-x-auto">
              <div className="flex min-w-max gap-3 border-b border-[var(--rule)] pb-3">
                {detailSections.map((section) => (
                  <a
                    className="border border-[var(--rule)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]"
                    href={`#${section}`}
                    key={section}
                  >
                    {committeesPageContent.sections[section]}
                  </a>
                ))}
              </div>
            </nav>

            <div className="mt-6 space-y-5">
              <section id="overview" className="scroll-mt-28 border-b border-[var(--rule)] pb-5">
                <p className="section-kicker">{committeesPageContent.sections.overview}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{committee.overview}</p>
              </section>

              <section id="topic" className="scroll-mt-28 border-b border-[var(--rule)] pb-5">
                <p className="section-kicker">{committeesPageContent.sections.topic}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{committee.topic}</p>
              </section>

              <section id="difficulty" className="scroll-mt-28 border-b border-[var(--rule)] pb-5">
                <p className="section-kicker">{committeesPageContent.sections.difficulty}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{committee.difficulty}</p>
              </section>

              <section id="format" className="scroll-mt-28 border-b border-[var(--rule)] pb-5">
                <p className="section-kicker">{committeesPageContent.sections.format}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{committee.format}</p>
              </section>
            </div>
          </div>

          <div className="space-y-5">
            <article className="theme-panel overflow-hidden rounded-[10px] p-3">
              {/* TODO(photo): Replace with committee room photograph (3:2, 1200x800). Suggested subject: placards, dais, and delegates in active session. */}
              <Image
                alt="Committee room with placards and dais"
                className="aspect-[3/2] w-full object-cover"
                height={800}
                src="/placeholders/committee-1200x800.jpg"
                width={1200}
              />
            </article>

            <section id="chairs" className="theme-panel paper-grain scroll-mt-28 rounded-[10px] p-5">
              <p className="section-kicker">{committeesPageContent.sections.chairs}</p>
              <ul className="mt-4 space-y-4">
                {committee.chairs.map((chair) => (
                  <li className="border-t border-[var(--rule)] pt-4 first:border-t-0 first:pt-0" key={chair.name}>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{chair.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{chair.bio}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="resources" className="bg-[var(--panel-inverse)] p-5 text-white shadow-[var(--shadow-soft)] scroll-mt-28">
              <p className="section-kicker text-[#afcbff]">{committeesPageContent.sections.resources}</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#e8f0ff]">
                {committee.resources.map((resource) => (
                  <li className="border-t border-white/14 pt-3 first:border-t-0 first:pt-0" key={resource}>
                    {resource}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-white/14 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#afcbff]">
                  {committeesPageContent.sections.guide}
                </p>
                <p className="mt-2 text-sm text-[#eef4ff]">{committee.backgroundGuide}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
