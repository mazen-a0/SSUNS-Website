"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type DossierFigureProps = {
  src: string;
  alt: string;
  ratio?: "16/9" | "3/2" | "4/5" | "4/3" | "1/1";
  eyebrow?: string;
  caption?: string;
  fallbackSrc?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

const ratioClasses: Record<NonNullable<DossierFigureProps["ratio"]>, string> = {
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

export function DossierFigure({
  src,
  alt,
  ratio = "16/9",
  eyebrow,
  caption,
  fallbackSrc = "/pictures/hero-1920x1080.jpg",
  className,
  imageClassName,
  priority = false,
}: DossierFigureProps) {
  const [resolvedSrc, setResolvedSrc] = useState(src || fallbackSrc);

  return (
    <figure className={cn("theme-panel section-entrance overflow-hidden rounded-[8px] p-3", className)}>
      <div className={cn("relative w-full overflow-hidden", ratioClasses[ratio])}>
        <Image
          alt={alt}
          className={cn("object-cover motion-safe:image-drift", imageClassName)}
          fill
          onError={() => {
            if (resolvedSrc !== fallbackSrc) {
              setResolvedSrc(fallbackSrc);
            }
          }}
          priority={priority}
          sizes="(min-width: 1280px) 52vw, (min-width: 768px) 80vw, 100vw"
          src={resolvedSrc}
        />
      </div>
      {eyebrow || caption ? (
        <figcaption className="grid gap-3 border-t border-[var(--rule)] px-3 py-4 sm:grid-cols-[0.34fr_0.66fr]">
          <p className="section-kicker">{eyebrow}</p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">{caption}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
