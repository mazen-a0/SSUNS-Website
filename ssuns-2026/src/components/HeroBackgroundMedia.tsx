"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroBackgroundMediaProps = {
  poster: string;
  posterAlt: string;
  videoWebmSrc?: string;
  videoMp4Src?: string;
};

export function HeroBackgroundMedia({ poster, posterAlt, videoWebmSrc, videoMp4Src }: HeroBackgroundMediaProps) {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setAllowMotion(!media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {allowMotion ? (
        <video
          aria-hidden="true"
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={videoWebmSrc || "/video/montreal-panorama.webm"} type="video/webm" />
          <source src={videoMp4Src || "/video/montreal-panorama.mp4"} type="video/mp4" />
        </video>
      ) : (
        <Image
          alt={posterAlt}
          className="h-full w-full object-cover"
          fill
          priority
          sizes="(min-width: 1024px) 1152px, 100vw"
          src={poster}
        />
      )}
    </div>
  );
}
