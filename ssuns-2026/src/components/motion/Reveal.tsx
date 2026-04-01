"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: ElementType;
};

export function Reveal({ children, className, delay = 0, once = true, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMedia = window.matchMedia("(max-width: 767px)");
    const updateReduced = () => setReduced(reducedMedia.matches);
    const updateMobile = () => setIsMobile(mobileMedia.matches);

    updateReduced();
    updateMobile();

    if (typeof reducedMedia.addEventListener === "function") {
      reducedMedia.addEventListener("change", updateReduced);
      mobileMedia.addEventListener("change", updateMobile);

      return () => {
        reducedMedia.removeEventListener("change", updateReduced);
        mobileMedia.removeEventListener("change", updateMobile);
      };
    }

    reducedMedia.addListener(updateReduced);
    mobileMedia.addListener(updateMobile);

    return () => {
      reducedMedia.removeListener(updateReduced);
      mobileMedia.removeListener(updateMobile);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reduced || isMobile) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        if (once) observer.disconnect();
      },
      { threshold: 0.28, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, reduced, isMobile]);

  const Component = as;

  return (
    <Component
      className={cn(
        "motion-reduce:transition-none",
        visible || reduced || isMobile
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-100 translate-y-0 blur-0 md:opacity-0 md:translate-y-[12px] md:blur-[2px]",
        className,
      )}
      ref={ref as never}
      style={{
        transitionDuration: reduced ? "0ms" : "560ms",
        transitionDelay: reduced ? "0ms" : `${delay}ms`,
        transitionProperty: "opacity, transform, filter",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </Component>
  );
}
