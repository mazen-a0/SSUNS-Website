"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CountUpValue } from "@/components/CountUpValue";
import { CountdownNumber } from "@/components/ui/countdown-number";
import { cn } from "@/lib/cn";

type Stat = {
  label: string;
  value: string;
};

type AtAGlanceItem = {
  label: string;
  detail: string;
};

type AtAGlancePlateProps = {
  label: string;
  stats: Stat[];
  countdownHeading: string;
  conferenceStartIso: string;
  photoSrc: string;
  photoAlt: string;
  photoSlides?: { src: string; alt: string }[];
  items?: AtAGlanceItem[];
};

function CarouselArrow({ direction }: { direction: "next" | "prev" }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={direction === "next" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function AtAGlancePlate({
  label,
  stats,
  countdownHeading,
  conferenceStartIso,
  photoSrc,
  photoAlt,
  photoSlides = [],
  items = [],
}: AtAGlancePlateProps) {
  const slides = photoSlides.length ? photoSlides : [{ src: photoSrc, alt: photoAlt }];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);

  const pauseAutoplay = () => {
    setIsUserPaused(true);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
    pauseAutoplay();
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
    pauseAutoplay();
  };

  const selectSlide = (index: number) => {
    setActiveSlide(index);
    pauseAutoplay();
  };

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      if (isHovered || isUserPaused) return;

      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [isHovered, isUserPaused, slides.length]);

  useEffect(() => {
    if (!isUserPaused) return;

    const timeout = window.setTimeout(() => {
      setIsUserPaused(false);
    }, 12000);

    return () => window.clearTimeout(timeout);
  }, [isUserPaused]);

  return (
    <div className="overflow-hidden rounded-[12px] border border-[var(--rule-strong)] bg-[var(--panel-inverse)] shadow-[var(--shadow-strong)]">
      <div className="md:grid md:h-full md:grid-cols-[0.46fr_0.54fr]">
        <article
          className="group relative h-[260px] overflow-hidden md:h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {slides.map((slide, index) => (
            <Image
              alt={slide.alt}
              aria-hidden={index !== activeSlide}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out transition-transform duration-[900ms]",
                index === activeSlide ? "opacity-100 scale-[1.05]" : "opacity-0 scale-100",
              )}
              fill
              key={slide.src}
              priority={index === 0}
              sizes="(min-width: 768px) 46vw, 100vw"
              src={slide.src}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,26,0.12)_0%,rgba(10,18,58,0.38)_46%,rgba(7,10,26,0.82)_100%)]" />

          <div className="absolute left-4 top-4 rounded-[999px] border border-white/18 bg-[rgba(8,14,44,0.46)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
            {label}
          </div>

          <div className="absolute inset-x-4 bottom-4">
            <div className="rounded-[12px] border border-white/15 bg-[rgba(8,14,44,0.28)] px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/78">At a glance</p>
              <p className="mt-1 text-sm leading-snug text-white">{slides[activeSlide]?.alt ?? photoAlt}</p>
            </div>
          </div>

          {slides.length > 1 ? (
            <>
              <button
                aria-label="Previous image"
                className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-[rgba(8,14,44,0.38)] text-white backdrop-blur-md transition-all duration-200 hover:border-white/35 hover:bg-[rgba(8,14,44,0.56)] md:opacity-0 md:group-hover:opacity-100"
                onClick={previousSlide}
                type="button"
              >
                <CarouselArrow direction="prev" />
              </button>
              <button
                aria-label="Next image"
                className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-[rgba(8,14,44,0.38)] text-white backdrop-blur-md transition-all duration-200 hover:border-white/35 hover:bg-[rgba(8,14,44,0.56)] md:opacity-0 md:group-hover:opacity-100"
                onClick={nextSlide}
                type="button"
              >
                <CarouselArrow direction="next" />
              </button>

              <div className="absolute inset-x-0 bottom-20 flex justify-center">
                <div className="flex items-center gap-2 rounded-full border border-white/14 bg-[rgba(8,14,44,0.24)] px-3 py-2 backdrop-blur-sm">
                  {slides.map((slide, index) => (
                    <button
                      aria-label={`Show image ${index + 1}`}
                      className={[
                        "h-1.5 rounded-full transition-all duration-300",
                        index === activeSlide ? "w-6 bg-white/90" : "w-2 bg-white/35 hover:bg-white/55",
                      ].join(" ")}
                      key={`${slide.src}-dot`}
                      onClick={() => selectSlide(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </article>

        <aside className="relative flex h-full flex-col bg-[linear-gradient(180deg,rgba(20,32,130,0.96),rgba(10,18,58,0.98))] text-white">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(76,158,255,0.9),transparent)]" />

          <div className="px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#b4caff]">Snapshot</p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold leading-tight text-white">SSUNS 2026</h3>
              <p className="inline-flex rounded-[999px] border border-white/14 bg-[rgba(255,255,255,0.08)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#d7e3ff]">
                Montréal • Nov 12–15, 2026
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0 border-t border-white/12">
            {stats.map((stat, index) => (
              <article
                className={[
                  "px-5 py-3.5 sm:px-6 sm:py-4",
                  index % 2 === 1 ? "border-l border-white/12" : "",
                  index >= 2 ? "border-t border-white/12" : "",
                ].join(" ")}
                key={stat.label}
              >
                <CountUpValue className="text-[1.85rem] font-semibold leading-none tabular-nums text-white sm:text-[2rem]" value={stat.value} />
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#b4caff]">{stat.label}</p>
              </article>
            ))}
          </div>

          {items.length ? (
            <div className="grid grid-cols-1 border-t border-white/12 sm:grid-cols-2">
              {items.map((item, index) => (
                <article
                  className={[
                    "px-5 py-3.5 sm:py-4",
                    index % 2 === 1 ? "sm:border-l sm:border-white/12" : "",
                    index >= 2 ? "sm:border-t sm:border-white/12" : "",
                    index > 0 ? "border-t border-white/12 sm:border-t-0" : "",
                  ].join(" ")}
                  key={item.label}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#b4caff]">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#e8f0ff]">{item.detail}</p>
                </article>
              ))}
            </div>
          ) : null}

          <div className="mt-auto border-t border-white/12 bg-black/12">
            <div className="px-5 pt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#d4e2ff]">{countdownHeading}</div>
            <CountdownNumber
              className="grid grid-cols-4 gap-0 px-4 pb-3 pt-2"
              compact
              endDate={new Date(conferenceStartIso)}
              labels={{ days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" }}
              variant="plate"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
