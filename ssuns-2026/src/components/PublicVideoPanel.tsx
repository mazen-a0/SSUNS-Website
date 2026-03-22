"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type PublicVideoPanelProps = {
  title: string;
  src: string;
  fallbackSrc?: string;
  poster: string;
  unavailableLabel: string;
};

export function PublicVideoPanel({ title, src, fallbackSrc, poster, unavailableLabel }: PublicVideoPanelProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [available, setAvailable] = useState(true);
  const fallback = useMemo(() => fallbackSrc ?? null, [fallbackSrc]);

  return (
    <div className="theme-panel overflow-hidden rounded-[8px] p-3">
      {available ? (
        <video
          className="aspect-[16/9] w-full object-cover"
          controls
          onError={() => {
            if (fallback && currentSrc !== fallback) {
              setCurrentSrc(fallback);
              return;
            }
            setAvailable(false);
          }}
          poster={poster}
          preload="metadata"
        >
          <source src={currentSrc} type="video/mp4" />
        </video>
      ) : (
        <Image alt={title} className="aspect-[16/9] w-full object-cover" height={1080} src={poster} width={1920} />
      )}
      <div className="border-t border-[var(--rule)] px-3 py-4">
        <p className="section-kicker">{title}</p>
        {!available ? <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{unavailableLabel}</p> : null}
      </div>
    </div>
  );
}
