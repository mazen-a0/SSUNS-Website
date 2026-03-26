"use client";

import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { CobeGlobe } from "@/components/ui/cobe-globe";
import { useSiteContent } from "@/lib/useSiteContent";

const delegationMarkers = [
  { id: "toronto", label: "Toronto", location: [43.6532, -79.3832] as [number, number] },
  { id: "montreal", label: "Montreal", location: [45.5017, -73.5673] as [number, number] },
  { id: "nairobi", label: "Nairobi", location: [-1.2921, 36.8219] as [number, number] },
  { id: "paris", label: "Paris", location: [48.8566, 2.3522] as [number, number] },
  { id: "washington", label: "Washington DC", location: [38.9072, -77.0369] as [number, number] },
];

const delegationArcs = [
  { id: "toronto-montreal", from: [43.6532, -79.3832] as [number, number], to: [45.5017, -73.5673] as [number, number] },
  { id: "washington-montreal", from: [38.9072, -77.0369] as [number, number], to: [45.5017, -73.5673] as [number, number] },
  { id: "paris-montreal", from: [48.8566, 2.3522] as [number, number], to: [45.5017, -73.5673] as [number, number] },
  { id: "nairobi-montreal", from: [-1.2921, 36.8219] as [number, number], to: [45.5017, -73.5673] as [number, number] },
];

export default function AboutLegacyPage() {
  const { aboutContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/legacy");

  if (!chapter) {
    return null;
  }

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] xl:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref={chapter.href} items={aboutContent.chapters} />
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
              <div className="space-y-6 body-copy">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <section className="theme-panel-strong paper-grain p-8 sm:p-10">
              <p className="section-kicker">Illustrative View</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--accent)] sm:text-5xl">Delegations</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Illustrative delegation locations connected to SSUNS. Additional delegation detail will be added here once conference data is finalized.
              </p>
              <div className="mt-8">
                <CobeGlobe arcs={delegationArcs} markers={delegationMarkers} />
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--rule)] pt-4 text-xs font-medium text-[var(--muted)] sm:text-sm">
                {delegationMarkers.map((marker) => (
                  <span className="rounded-[999px] border border-[var(--rule)] px-3 py-1" key={marker.id}>
                    {marker.label}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
