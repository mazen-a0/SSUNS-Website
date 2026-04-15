"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroBackgroundMediaProps = {
  poster: string;
  posterAlt: string;
  videoMp4Src?: string;
};

export function HeroBackgroundMedia({ poster, posterAlt, videoMp4Src }: HeroBackgroundMediaProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasLoadedVideoRef = useRef(false);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedPlayback, setHasStartedPlayback] = useState(false);
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

        if (nextInViewport && !hasLoadedVideoRef.current) {
          hasLoadedVideoRef.current = true;
          setVideoSrc(resolvedVideoSrc);
        }

        if (!nextInViewport) {
          const video = videoRef.current;
          if (video && !video.paused) {
            video.pause();
          }
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

    const syncState = () => {
      setIsPlaying(!video.paused);
      if (!video.paused) {
        setHasStartedPlayback(true);
      }
    };

    syncState();
    video.addEventListener("play", syncState);
    video.addEventListener("pause", syncState);

    return () => {
      video.removeEventListener("play", syncState);
      video.removeEventListener("pause", syncState);
    };
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

  const startPlayback = async () => {
    const video = videoRef.current;
    if (!video || !videoSrc || videoFailed) return;

    try {
      await video.play();
      setHasStartedPlayback(true);
    } catch {
      // Keep the poster visible if playback is blocked.
    }
  };

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
          className={`h-full w-full object-cover [border-radius:inherit] transition-opacity duration-200 ${hasStartedPlayback ? "opacity-100" : "opacity-0"}`}
          loop
          muted={isMuted}
          onError={() => setVideoFailed(true)}
          playsInline
          preload="auto"
          src={videoSrc}
          style={{ borderRadius: "inherit" }}
        />
      ) : null}

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {!isPlaying ? (
          <button
            aria-label="Play hero video"
            className="inline-flex items-center gap-3 rounded-full border border-white/24 bg-[rgba(7,15,49,0.58)] px-5 py-3 text-sm font-semibold text-white shadow-[0_24px_60px_-28px_rgba(5,11,37,0.95)] backdrop-blur-md transition-colors duration-200 hover:border-white/40 hover:bg-[rgba(7,15,49,0.74)]"
            onClick={startPlayback}
            type="button"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/10">
              <svg aria-hidden="true" className="ml-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5.5v13l10-6.5-10-6.5z" />
              </svg>
            </span>
            <span>{prefersReducedMotion ? "Play Video" : "Play"}</span>
          </button>
        ) : null}
      </div>

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
