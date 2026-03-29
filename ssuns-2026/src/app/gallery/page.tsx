"use client";

import { DossierCarousel } from "@/components/media/DossierCarousel";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function GalleryPage() {
  const { homeContent } = useSiteContent();

  return (
    <>
      <PageHero intro={homeContent.gallery.intro} title={homeContent.gallery.pageTitle ?? homeContent.gallery.title} />
      <section className="page-shell">
        <DossierCarousel
          className="mb-6"
          description={homeContent.gallery.intro}
          eyebrow={homeContent.gallery.label}
          items={homeContent.gallery.items.map((item) => ({
            alt: item.alt,
            caption: item.caption,
            eyebrow: item.title,
            id: item.id,
            src: item.src,
          }))}
          title={homeContent.gallery.title}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {homeContent.gallery.items.map((item, index) => (
            <DossierFigure alt={item.alt} caption={item.caption} eyebrow={item.title} key={item.id} ratio={index === 2 ? "3/2" : "16/9"} src={item.src} />
          ))}
        </div>
      </section>
    </>
  );
}
