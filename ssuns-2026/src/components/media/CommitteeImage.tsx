"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type CommitteeImageProps = {
  slug: string;
  alt: string;
  src?: string;
  mode?: "card" | "hero";
  className?: string;
  priority?: boolean;
};

const fallbackSrc = "/placeholders/committee-1200x800.jpg";

export function CommitteeImage({ slug, alt, src, mode = "card", className, priority = false }: CommitteeImageProps) {
  const initialSrc = src || fallbackSrc;
  const [resolvedSrc, setResolvedSrc] = useState(initialSrc);
  const wrapperClassName = useMemo(
    () =>
      mode === "hero"
        ? "aspect-[16/9] max-h-[clamp(240px,38vw,520px)]"
        : "aspect-[4/3] max-h-[clamp(180px,22vw,260px)]",
    [mode],
  );

  return (
    <div className={cn("relative w-full overflow-hidden", wrapperClassName, className)} data-committee-slug={slug}>
      {/* TODO(photo): Replace missing committee image with /public/committees/2026/{slug}.jpg. Fallback remains /public/placeholders/committee-1200x800.jpg until the final asset is added. */}
      <Image
        alt={alt}
        className="object-cover"
        fill
        onError={() => {
          if (resolvedSrc !== fallbackSrc) {
            setResolvedSrc(fallbackSrc);
          }
        }}
        priority={priority}
        sizes={mode === "hero" ? "(min-width: 1280px) 52vw, 100vw" : "(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw"}
        src={resolvedSrc}
      />
    </div>
  );
}
