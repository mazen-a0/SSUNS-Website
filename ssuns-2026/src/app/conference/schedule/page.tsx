"use client";

import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

const schedulePreview = [
  {
    day: "Thursday",
    summary: "Delegates arrive, settle into the conference rhythm, and begin the weekend with opening programming.",
    highlights: ["Delegate registration", "SSUNS Fair", "Workshops", "Opening Ceremony", "First committee sessions"],
  },
  {
    day: "Friday",
    summary: "The first full day balances committee momentum with educational programming and advisor support.",
    highlights: ["ICAO presentation", "McGill campus tours", "Workshops", "Committee sessions", "Head delegate and faculty advisor feedback"],
  },
  {
    day: "Saturday",
    summary: "Committees move into their busiest stretch, with debate, crisis development, drafting, and evening programming.",
    highlights: ["Committee sessions", "Head delegate and faculty advisor feedback", "Delegate Gala"],
  },
  {
    day: "Sunday",
    summary: "The weekend closes with final committee programming and closing ceremonies.",
    highlights: ["Final committee session (FunMUN)", "Closing Ceremony"],
  },
];

export default function ConferenceSchedulePage() {
  const { conferenceContent } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/schedule");

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={conferenceContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <ConferenceQuickLinks className="mb-6" currentHref={chapter.href} />
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={conferenceContent.chapters} />
          </aside>

          <div className="min-w-0 space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
              <p className="section-kicker">Preliminary Schedule Preview</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--accent)]">A first look at the weekend cadence</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text)] sm:text-base">
                This preview is based on the current preliminary schedule and is meant to help delegates and advisors understand the shape of each day. The full interactive schedule will be published once the conference schedule is finalized.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Full conference schedule will be released soon.</p>
            </article>

            <section className="grid gap-4 lg:grid-cols-2">
              {schedulePreview.map((day, index) => (
                <article className="theme-panel paper-grain overflow-hidden rounded-[8px] border border-[var(--rule)]" key={day.day}>
                  <div className="border-b border-[var(--rule)] bg-[rgba(20,32,130,0.04)] px-5 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="section-kicker">Conference day</p>
                        <h3 className="mt-2 text-2xl font-semibold leading-tight text-[var(--accent)]">{day.day}</h3>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] text-sm font-semibold text-[var(--accent)]">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-7 text-[var(--text)]">{day.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {day.highlights.map((highlight) => (
                        <span className="rounded-full border border-[var(--rule)] bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold text-[var(--accent)]" key={highlight}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
