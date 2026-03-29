"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type EditorialGalleryItem = {
  id: string;
  src: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  fallbackSrc?: string;
};

type EditorialGalleryProps = {
  items: EditorialGalleryItem[];
  className?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  compact?: boolean;
};

function EditorialGalleryTile({ item }: { item: EditorialGalleryItem }) {
  const fallbackSrc = item.fallbackSrc || "/pictures/committee-1200x800.jpg";
  const [resolvedSrc, setResolvedSrc] = useState(item.src || fallbackSrc);

  return (
    <figure className="overflow-hidden border border-[var(--rule)] bg-[var(--panel)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          alt={item.alt}
          className="object-cover motion-safe:image-drift"
          fill
          onError={() => {
            if (resolvedSrc !== fallbackSrc) {
              setResolvedSrc(fallbackSrc);
            }
          }}
          sizes="(min-width: 1280px) 24vw, (min-width: 768px) 32vw, 100vw"
          src={resolvedSrc}
        />
      </div>
      {item.eyebrow || item.caption ? (
        <figcaption className="space-y-2 border-t border-[var(--rule)] px-4 py-4">
          {item.eyebrow ? <p className="section-kicker">{item.eyebrow}</p> : null}
          {item.caption ? <p className="text-sm leading-relaxed text-[var(--muted)]">{item.caption}</p> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function EditorialGallery({ items, className, title, eyebrow, description, compact = false }: EditorialGalleryProps) {
  if (!items.length) return null;

  return (
    <section className={cn("theme-panel-strong paper-grain overflow-hidden rounded-[8px] p-6 sm:p-8", className)}>
      {title || eyebrow || description ? (
        <div className="mb-5 border-b border-[var(--rule)] pb-4">
          {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
          {title ? <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--accent)] sm:text-4xl">{title}</h2> : null}
          {description ? <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{description}</p> : null}
        </div>
      ) : null}

      <div className={cn("grid gap-4 md:grid-cols-2 xl:grid-cols-3", compact && "xl:grid-cols-4")}>
        {items.map((item) => (
          <EditorialGalleryTile item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
