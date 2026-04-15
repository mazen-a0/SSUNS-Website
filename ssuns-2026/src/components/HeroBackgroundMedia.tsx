"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type HeroBackgroundMediaProps = {
  poster: string;
  posterAlt: string;
  videoMp4Src?: string;
};

export function HeroBackgroundMedia({ poster, posterAlt, videoMp4Src }: HeroBackgroundMediaProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasLoadedVideoRef = useRef(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const resolvedVideoSrc = videoMp4Src || "/video/montreal-panorama.mp4";

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextInViewport = Boolean(entry?.isIntersecting);
        setIsInViewport(nextInViewport);

        if (nextInViewport && !hasLoadedVideoRef.current) {
          hasLoadedVideoRef.current = true;
          setVideoSrc(resolvedVideoSrc);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [resolvedVideoSrc]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setPrefersReducedMotion(media.matches);
    };

    update();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    video.defaultMuted = isMuted;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibilityChange = () => {
      if (document.hidden && !video.paused) {
        video.pause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isInViewport && !video.paused) {
      video.pause();
    }
  }, [isInViewport]);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !videoSrc || videoFailed || prefersReducedMotion || !isInViewport) return;

    video.muted = true;
    video.defaultMuted = true;

    void video.play().catch(() => {
      // Keep the poster visible if autoplay is blocked or the resource is rejected.
    });
  }, [isInViewport, prefersReducedMotion, videoFailed, videoSrc]);

  useEffect(() => {
    tryPlay();
  }, [tryPlay]);

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      ref={wrapperRef}
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

      {videoSrc && !videoFailed ? (
        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          className="h-full w-full object-cover [border-radius:inherit]"
          loop
          muted={isMuted}
          onCanPlay={tryPlay}
          onLoadedData={tryPlay}
          onError={() => setVideoFailed(true)}
          playsInline
          poster={poster}
          preload="metadata"
          src={videoSrc}
          style={{ borderRadius: "inherit" }}
        />
      ) : null}

      {videoSrc && !videoFailed ? (
        <div className="absolute bottom-4 right-4 z-10">
          <button
            aria-label={isMuted ? "Unmute hero video" : "Mute hero video"}
            className="inline-flex items-center rounded-full border border-white/18 bg-[rgba(7,15,49,0.52)] px-3 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:border-white/34 hover:bg-[rgba(7,15,49,0.7)]"
            onClick={toggleMuted}
            type="button"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
