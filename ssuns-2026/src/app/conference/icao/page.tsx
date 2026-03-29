"use client";

import Link from "next/link";
import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { CommitteeImage } from "@/components/media/CommitteeImage";
import { DossierFigure } from "@/components/media/DossierFigure";
import { EditorialGallery } from "@/components/media/EditorialGallery";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferenceIcaoPage() {
  const { committees, conferenceContent } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/icao");
  const icaoCommittee = committees.find((committee) => committee.slug === "icao-2026");
  const icaoGalleryItems = [
    { id: "icao-gallery-1", src: "/pictures/icao(1).JPG", alt: "ICAO interior view" },
    { id: "icao-gallery-2", src: "/pictures/icao(2).jpg", alt: "ICAO exterior and grounds" },
    { id: "icao-gallery-3", src: "/pictures/icao(3).jpg", alt: "ICAO building detail" },
  ];

  if (!chapter || !icaoCommittee) return null;

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
            <DossierFigure alt="ICAO headquarters in Montreal" priority ratio="16/9" src="/pictures/icao.JPG" />

            <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-10">
              <div className="space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <div className="grid gap-8 xl:grid-cols-[0.54fr_0.46fr]">
              <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
                <p className="section-kicker">{conferenceContent.icaoFeature.title}</p>
                <div className="mt-5 space-y-4 border-t border-[var(--rule)] pt-5">
                  <CommitteeImage alt={`${icaoCommittee.name} committee image`} mode="hero" slug={icaoCommittee.slug} src={icaoCommittee.imageSrc} />
                  <p className="text-sm leading-relaxed text-[var(--text)]">{conferenceContent.icaoFeature.body}</p>
                  <Link className="text-sm font-semibold text-[var(--accent)]" href={`/committees/${icaoCommittee.slug}`}>
                    View ICAO committee dossier
                  </Link>
                </div>
              </article>

              <article className="theme-panel-strong overflow-hidden rounded-[8px] p-3">
                <iframe
                  className="aspect-[4/3] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={conferenceContent.icaoFeature.mapQuery}
                  title="ICAO Montreal map"
                />
                <div className="border-t border-[var(--rule)] px-3 py-4">
                  <Link className="inline-block border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href={conferenceContent.icaoFeature.mapLink} target="_blank">
                    Open in Google Maps
                  </Link>
                </div>
              </article>
            </div>

            <EditorialGallery compact items={icaoGalleryItems} />
          </div>
        </div>
      </section>
    </>
  );
}
