"use client";

import { DossierNav } from "@/components/DossierNav";
import { EditorialGallery } from "@/components/media/EditorialGallery";
import { PageHero } from "@/components/PageHero";
import { CobeGlobe } from "@/components/ui/cobe-globe";
import { LEGACY_GALLERY_IMAGES } from "@/lib/images";
import { useSiteContent } from "@/lib/useSiteContent";

const montreal: [number, number] = [45.5017, -73.5673];

const delegationMarkers = [
  { id: "toronto", label: "Toronto", location: [43.6532, -79.3832] as [number, number] },
  { id: "vancouver", label: "Vancouver", location: [49.2827, -123.1207] as [number, number] },
  { id: "new-york", label: "New York", location: [40.7128, -74.006] as [number, number] },
  { id: "boston", label: "Boston", location: [42.3601, -71.0589] as [number, number] },
  { id: "washington", label: "Washington DC", location: [38.9072, -77.0369] as [number, number] },
  { id: "chicago", label: "Chicago", location: [41.8781, -87.6298] as [number, number] },
  { id: "kenya", label: "Kenya", location: [-1.2921, 36.8219] as [number, number] },
  { id: "uganda", label: "Uganda", location: [0.3476, 32.5825] as [number, number] },
  { id: "panama", label: "Panama", location: [8.9824, -79.5199] as [number, number] },
  { id: "trinidad", label: "Trinidad and Tobago", location: [10.6596, -61.5089] as [number, number] },
  { id: "belarus", label: "Belarus", location: [53.9, 27.5667] as [number, number] },
  { id: "ghana", label: "Ghana", location: [5.6037, -0.187] as [number, number] },
  { id: "nigeria", label: "Nigeria", location: [6.5244, 3.3792] as [number, number] },
  { id: "bahamas", label: "Bahamas", location: [25.0443, -77.3504] as [number, number] },
  { id: "nepal", label: "Nepal", location: [27.7172, 85.324] as [number, number] },
  { id: "cameroon", label: "Cameroon", location: [3.848, 11.5021] as [number, number] },
  { id: "cuba", label: "Cuba", location: [23.1136, -82.3666] as [number, number] },
  { id: "ethiopia", label: "Ethiopia", location: [8.9806, 38.7578] as [number, number] },
  { id: "puerto-rico", label: "Puerto Rico", location: [18.4655, -66.1057] as [number, number] },
  { id: "burkina-faso", label: "Burkina Faso", location: [12.3714, -1.5197] as [number, number] },
  { id: "morocco", label: "Morocco", location: [34.0209, -6.8416] as [number, number] },
  { id: "haiti", label: "Haiti", location: [18.5944, -72.3074] as [number, number] },
  { id: "germany", label: "Germany", location: [52.52, 13.405] as [number, number] },
  { id: "nicaragua", label: "Nicaragua", location: [12.114, -86.2362] as [number, number] },
];

const delegationArcs = delegationMarkers.map((marker) => ({
  id: `${marker.id}-montreal`,
  from: marker.location,
  to: montreal,
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
  const legacyGalleryItems = [
    { id: "legacy-photo-1", src: LEGACY_GALLERY_IMAGES[0], alt: "SSUNS team members in conference setting" },
    { id: "legacy-photo-2", src: LEGACY_GALLERY_IMAGES[1], alt: "Delegates gathering between committee sessions" },
    { id: "legacy-photo-3", src: LEGACY_GALLERY_IMAGES[2], alt: "SSUNS participants during a conference ceremony" },
    { id: "legacy-photo-4", src: LEGACY_GALLERY_IMAGES[3], alt: "Montréal city scene connected to the conference's international footprint" },
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
                  <CobeGlobe arcs={delegationArcs} markers={delegationMarkers} showMarkerLabelsOnHover />
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
