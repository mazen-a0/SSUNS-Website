"use client";

import Image from "next/image";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselControls, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/cn";

type DossierCarouselItem = {
  id: string;
  src: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  fallbackSrc?: string;
};

type DossierCarouselProps = {
  items: DossierCarouselItem[];
  className?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
};

function DossierCarouselSlide({ item }: { item: DossierCarouselItem }) {
  const [resolvedSrc, setResolvedSrc] = useState(item.src || item.fallbackSrc || "/placeholders/hero-1920x1080.jpg");
  const fallbackSrc = item.fallbackSrc || "/placeholders/hero-1920x1080.jpg";

  return (
    <figure className="theme-panel section-entrance overflow-hidden rounded-[8px] p-3">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          alt={item.alt}
          className="object-cover motion-safe:image-drift"
          fill
          onError={() => {
            if (resolvedSrc !== fallbackSrc) {
              setResolvedSrc(fallbackSrc);
            }
          }}
          sizes="(min-width: 1280px) 52vw, (min-width: 768px) 80vw, 100vw"
          src={resolvedSrc}
        />
      </div>
      {item.eyebrow || item.caption ? (
        <figcaption className="grid gap-3 border-t border-[var(--rule)] px-3 py-4 sm:grid-cols-[0.34fr_0.66fr]">
          <p className="section-kicker">{item.eyebrow}</p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">{item.caption}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}

export function DossierCarousel({ items, className, title, eyebrow, description }: DossierCarouselProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className={cn("theme-panel-strong paper-grain overflow-hidden rounded-[8px] p-6 sm:p-8", className)}>
      {title || eyebrow || description ? (
        <div className="mb-5 border-b border-[var(--rule)] pb-4">
          {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
          {title ? <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--accent)] sm:text-4xl">{title}</h2> : null}
          {description ? <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{description}</p> : null}
        </div>
      ) : null}
      <Carousel opts={{ align: "start", loop: items.length > 1 }}>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem className="md:basis-[88%] xl:basis-[78%]" key={item.id}>
              <DossierCarouselSlide item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {items.length > 1 ? <CarouselControls /> : null}
      </Carousel>
    </section>
  );
}
