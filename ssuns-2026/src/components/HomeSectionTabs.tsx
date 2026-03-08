"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type HomeSectionTab = {
  id: string;
  label: string;
};

type HomeSectionTabsProps = {
  items: HomeSectionTab[];
};

export function HomeSectionTabs({ items }: HomeSectionTabsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [reducedMotion, setReducedMotion] = useState(false);

  const ids = useMemo(() => items.map((item) => item.id), [items]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.55, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      observer.disconnect();
    };
  }, [ids]);

  return (
    <nav aria-label="Homepage sections" className="rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] p-2 lg:p-3">
      <div className="flex gap-2 overflow-x-auto lg:flex-col">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              className={cn(
                "relative shrink-0 border px-3 py-3 text-left transition-colors lg:w-full",
                isActive
                  ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)] text-[var(--accent)]"
                  : "border-[var(--rule)] bg-transparent text-[var(--muted)] hover:bg-[rgba(20,32,130,0.03)]",
              )}
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
                setActiveId(item.id);
              }}
              type="button"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em]">{item.label}</span>
              <span
                aria-hidden
                className={cn(
                  "mt-3 block h-px w-8 transition-all",
                  isActive ? "bg-[var(--accent)]" : "bg-[var(--rule)]",
                )}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
