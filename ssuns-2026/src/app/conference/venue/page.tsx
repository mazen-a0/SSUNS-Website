"use client";

import Link from "next/link";
import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { EditorialGallery } from "@/components/media/EditorialGallery";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { ROOM_RATES_IMAGE, VENUE_GALLERY_IMAGES } from "@/lib/images";
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
  const venueGalleryItems = [
    { id: "venue-photo-1", src: VENUE_GALLERY_IMAGES[0], alt: "Sheraton exterior at arrival" },
    { id: "venue-photo-2", src: VENUE_GALLERY_IMAGES[1], alt: "Sheraton lobby and common spaces" },
    { id: "venue-photo-3", src: VENUE_GALLERY_IMAGES[2], alt: "Montreal city view near the venue" },
    { id: "venue-photo-4", src: VENUE_GALLERY_IMAGES[3], alt: "Conference event space inside the Sheraton" },
  ];

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
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--rule)] pb-4">
                <div>
                  <p className="section-kicker">Preferential Sheraton Rates</p>
                  <h2 className="font-display mt-3 text-4xl leading-tight text-[var(--accent)]">Hotel rates</h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                  All prices are in CAD and include Quebec tax. Please also note that all single and double occupancy rooms have 1 queen or 1 king sized bed.
                </p>
              </div>

              <DossierFigure
                alt="Sheraton exterior prepared for conference arrival"
                className="mt-5"
                ratio="16/9"
                src={ROOM_RATES_IMAGE}
              />

              <div className="mt-5 overflow-hidden border border-[var(--rule)]">
                <table className="w-full border-collapse text-left text-sm sm:text-base">
                  <thead className="bg-[var(--paper-deep)] text-[var(--accent)]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Room Type</th>
                      <th className="px-4 py-3 font-semibold">Rate</th>
                      <th className="px-4 py-3 font-semibold">Luggage Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotelRates.map((rate) => (
                      <tr className="border-t border-[var(--rule)]" key={rate.occupancy}>
                        <td className="px-4 py-3 font-semibold text-[var(--text)]">{rate.occupancy}</td>
                        <td className="px-4 py-3 text-[var(--text)]">{rate.roomRate}</td>
                        <td className="px-4 py-3 text-[var(--muted)]">{rate.luggageFees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <EditorialGallery
              description={conferenceContent.venueSection.body}
              eyebrow={conferenceContent.sections.venue}
              items={venueGalleryItems}
              title={conferenceContent.venueSection.title}
            />
          </div>
        </div>
      </section>
    </>
  );
}
