"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

const mapsQuery = "https://www.google.com/maps?q=Le+Centre+Sheraton+Montreal&z=15&output=embed";
const mapsLink = "https://www.google.com/maps/search/?api=1&query=Le+Centre+Sheraton+Montreal";
const hotelRates = [
  { occupancy: "Single", roomRate: "$332.01", luggageFees: "$15.87" },
  { occupancy: "Double", roomRate: "$332.01", luggageFees: "$31.74" },
  { occupancy: "Triple", roomRate: "$343.91", luggageFees: "$47.61" },
  { occupancy: "Quadruple", roomRate: "$355.81", luggageFees: "$63.48" },
];

export default function ConferenceVenuePage() {
  const { conferenceContent } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/venue");

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={conferenceContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref={chapter.href} items={conferenceContent.chapters} />
          </aside>
          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-10">
              <div className="space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <div className="grid gap-8 xl:grid-cols-[0.48fr_0.52fr]">
              <DossierFigure
                alt={conferenceContent.venueSection.image.alt}
                caption="Le Centre Sheraton Montreal Hotel, 1201 René-Lévesque Blvd W, Montreal, QC H3B 2L7"
                eyebrow="Address"
                ratio="16/9"
                src={conferenceContent.venueSection.image.src}
              />

              <article className="theme-panel-strong overflow-hidden rounded-[8px] p-3">
                <iframe
                  className="aspect-[16/9] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapsQuery}
                  title="Le Centre Sheraton Montreal map"
                />
                <div className="border-t border-[var(--rule)] px-3 py-4">
                  <Link className="inline-block border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href={mapsLink} target="_blank">
                    Open in Google Maps
                  </Link>
                </div>
              </article>
            </div>

            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">Preferential Sheraton Rates</p>
              <div className="mt-5 grid gap-4 border-t border-[var(--rule)] pt-5 md:grid-cols-2 xl:grid-cols-4">
                {hotelRates.map((rate) => (
                  <article className="border border-[var(--rule)] px-4 py-4" key={rate.occupancy}>
                    <p className="text-sm font-semibold text-[var(--accent)]">{rate.occupancy}</p>
                    <div className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--text)]">
                      <p>Room rate: {rate.roomRate}</p>
                      <p className="text-[var(--muted)]">Luggage fees: {rate.luggageFees}</p>
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
