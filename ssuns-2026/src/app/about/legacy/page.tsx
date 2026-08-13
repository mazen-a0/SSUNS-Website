"use client";

import { DossierNav } from "@/components/DossierNav";
import { EditorialGallery } from "@/components/media/EditorialGallery";
import { PageHero } from "@/components/PageHero";
import { CobeGlobe } from "@/components/ui/cobe-globe";
import { legacyDelegationMarkers, legacyGalleryItems, legacyMontrealCoordinates } from "@/content/legacyPage";
import { useSiteContent } from "@/lib/useSiteContent";

const delegationArcs = legacyDelegationMarkers.map((marker) => ({
  id: `${marker.id}-montreal`,
  from: marker.location,
  to: legacyMontrealCoordinates,
}));

export default function AboutLegacyPage() {
  const { aboutContent, language } = useSiteContent();
  const isFrench = language === "fr";
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/legacy");
  const { locations } = aboutContent.legacyGlobalSection;
  const regions = [
    { id: "canada", label: "Canada", places: locations.canada },
    { id: "unitedStates", label: isFrench ? "États-Unis" : "United States", places: locations.unitedStates },
    { id: "widerWorld", label: isFrench ? "Le reste du monde" : "Around the world", places: locations.widerWorld },
  ].filter((region) => region.places.length);
  const totalOrigins = regions.reduce((sum, region) => sum + region.places.length, 0);
  const crossroadsStats = [
    { value: String(totalOrigins), label: isFrench ? "Origines de délégations" : "Delegation origins" },
    { value: String(regions.length), label: isFrench ? "Régions représentées" : "Regions represented" },
    { value: "Montréal", label: isFrench ? "Un point de rencontre" : "One meeting point" },
  ];
  if (!chapter) {
    return null;
  }

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
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

            <section className="overflow-hidden rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] p-6 text-white sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_auto] lg:items-center">
                <div>
                  <p className="section-kicker text-[#b4caff]">{isFrench ? "Montréal, chaque novembre" : "Montréal, every November"}</p>
                  <p className="mt-3 max-w-2xl text-lg font-semibold leading-snug text-white sm:text-[1.45rem]">
                    {isFrench
                      ? "Un carrefour où des écoles de tout le continent et d'ailleurs se réunissent pour prendre la diplomatie au sérieux."
                      : "A crossroads where schools from across the continent and beyond gather to take diplomacy seriously."}
                  </p>
                </div>
                <dl className="grid grid-cols-3 gap-3 sm:gap-5 lg:border-l lg:border-white/15 lg:pl-8">
                  {crossroadsStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="font-display text-2xl leading-none text-white sm:text-3xl">{stat.value}</dd>
                      <p aria-hidden className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#b4caff]">{stat.label}</p>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            <section className="overflow-hidden border border-[var(--rule)] bg-[var(--panel-strong)] p-6 sm:p-8">
              <p className="section-kicker">{aboutContent.sections.legacy}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--accent)] sm:text-4xl">{aboutContent.legacyGlobalSection.title}</h2>
              <div className="mt-6 grid gap-8 xl:grid-cols-[0.58fr_0.42fr] xl:items-start">
                <div className="space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                  {aboutContent.legacyGlobalSection.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="border border-[var(--rule)] bg-[var(--paper)] px-4 py-8 sm:px-6 sm:py-10">
                  <CobeGlobe arcs={delegationArcs} markers={legacyDelegationMarkers} showMarkerLabelsOnHover />
                </div>
              </div>
            </section>

            <section className="overflow-hidden border border-[var(--rule)] bg-[var(--panel-strong)] p-6 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--rule)] pb-5">
                <div>
                  <p className="section-kicker">{isFrench ? "Autour du monde" : "Around the world"}</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-[var(--accent)] sm:text-3xl">
                    {isFrench ? "D'où viennent les délégations" : "Where delegations travel from"}
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                  {isFrench
                    ? "Chaque novembre, Montréal devient un point de rencontre pour des écoles venues de tout le continent et d'ailleurs."
                    : "Every November, Montréal becomes a meeting point for schools from across the continent and beyond."}
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {regions.map((region) => (
                  <div className="rounded-[8px] border border-[var(--rule)] bg-[var(--paper)] p-5" key={region.id}>
                    <div className="flex items-center justify-between gap-3 border-b border-[var(--rule)] pb-3">
                      <p className="text-sm font-semibold text-[var(--accent)]">{region.label}</p>
                      <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-[var(--accent)] px-2 text-xs font-semibold text-[var(--accent)]">
                        {region.places.length}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {region.places.map((place) => (
                        <span
                          className="rounded-full border border-[var(--rule)] bg-[var(--panel)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition-colors duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          key={place}
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <EditorialGallery compact items={legacyGalleryItems} />
          </div>
        </div>
      </section>
    </>
  );
}
