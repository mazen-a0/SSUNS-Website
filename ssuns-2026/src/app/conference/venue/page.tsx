"use client";

import { Download } from "lucide-react";
import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { PageHero } from "@/components/PageHero";
import { HotelNavigator } from "@/components/venue/HotelNavigator";
import { venueFloorPlanPdfUrl } from "@/content/venueRooms";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferenceVenuePage() {
  const { conferenceContent, committees, language } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/venue");
  const fr = language === "fr";
  if (!chapter) return null;

  return <>
    <PageHero eyebrow={conferenceContent.title} intro={chapter.summary} title={chapter.title} />
    <section className="page-shell">
      <ConferenceQuickLinks className="mb-6" currentHref={chapter.href} />
      <div className="theme-panel-strong min-w-0 p-5 sm:p-8 lg:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--rule)] pb-6">
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">{chapter.body[0]}</p>
          <a className="inline-flex min-h-12 items-center gap-3 rounded-[var(--radius-sm)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-2)]" href={venueFloorPlanPdfUrl} download="SSUNS-2026-Floor-Plans.pdf">
            <Download size={17} aria-hidden="true" />
            {fr ? "Télécharger les plans (PDF)" : "Download floor plans (PDF)"}
          </a>
        </div>
        <HotelNavigator committees={committees} language={language} />
      </div>
    </section>
  </>;
}
