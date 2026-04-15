"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroBackgroundMediaProps = {
  poster: string;
  posterAlt: string;
  videoMp4Src?: string;
};

export function HeroBackgroundMedia({ poster, posterAlt, videoMp4Src }: HeroBackgroundMediaProps) {
  const [allowMotion, setAllowMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setAllowMotion(!media.matches);
    };

    update();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);

      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden [border-radius:inherit]"
      style={{ borderRadius: "inherit", clipPath: "inset(0 round 12px)" }}
    >
      <Image
        alt={posterAlt}
        className="h-full w-full object-cover [border-radius:inherit]"
        fill
        priority
        sizes="(min-width: 1024px) 1152px, 100vw"
        src={poster}
        style={{ borderRadius: "inherit" }}
      />
      {allowMotion && !videoFailed && (
        <video
          aria-hidden="true"
          autoPlay
          className="h-full w-full object-cover [border-radius:inherit]"
          loop
          muted
          onError={() => setVideoFailed(true)}
          playsInline
          poster={poster}
          preload="metadata"
          style={{ borderRadius: "inherit" }}
        >
          <source src={videoMp4Src || "/video/montreal-panorama.mp4"} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
