"use client";

import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function GalleryPage() {
  const { homeContent } = useSiteContent();

  return (
    <>
      <PageHero intro={homeContent.gallery.intro} title={homeContent.gallery.pageTitle ?? homeContent.gallery.title} />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {homeContent.gallery.items.map((item, index) => (
            <DossierFigure alt={item.alt} caption={item.caption} eyebrow={item.title} key={item.id} ratio={index === 2 ? "3/2" : "16/9"} src={item.src} />
          ))}
        </div>
      </section>
    </>
  );
}
