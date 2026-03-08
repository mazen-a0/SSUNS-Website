"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CursorSpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

export function CursorSpotlight({ children, className }: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseMove={(event) => {
        if (!ref.current || reducedMotion) return;
        const rect = ref.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        ref.current.style.setProperty("--spotlight-x", `${x}px`);
        ref.current.style.setProperty("--spotlight-y", `${y}px`);
      }}
      ref={ref}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
          reducedMotion ? "hidden" : "group-hover:opacity-100",
        )}
        style={{
          background:
            "radial-gradient(240px circle at var(--spotlight-x,50%) var(--spotlight-y,50%), rgba(255,255,255,0.26), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}
