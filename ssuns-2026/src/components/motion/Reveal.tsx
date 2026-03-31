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
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReduced = () => setReduced(media.matches);
    media.addEventListener("change", updateReduced);

    return () => {
      media.removeEventListener("change", updateReduced);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reduced) return;

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
  }, [once, reduced]);

  const Component = as;

  return (
    <Component
      className={cn(
        "motion-reduce:transition-none",
        visible || reduced ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-[12px] blur-[2px]",
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
