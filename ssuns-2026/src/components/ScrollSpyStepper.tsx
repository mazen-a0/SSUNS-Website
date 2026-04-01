"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type Step = {
  id: string;
  label: string;
  title?: string;
};

type ScrollSpyStepperProps = {
  steps: Step[];
  className?: string;
};

export function ScrollSpyStepper({ steps, className }: ScrollSpyStepperProps) {
  const [activeStep, setActiveStep] = useState(steps[0]?.id ?? "");

  useEffect(() => {
    const elements = steps
      .map((step) => document.getElementById(step.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const visibleEntries = new Map<string, IntersectionObserverEntry>();

    const updateActiveStep = () => {
      const candidates = steps
        .map((step, index) => {
          const entry = visibleEntries.get(step.id);
          if (!entry?.isIntersecting) return null;

          return { id: step.id, index, top: entry.boundingClientRect.top };
        })
        .filter((item): item is { id: string; index: number; top: number } => item !== null)
        .sort((a, b) => {
          const delta = Math.abs(a.top) - Math.abs(b.top);
          if (delta !== 0) return delta;
          return a.index - b.index;
        });

      if (candidates[0]?.id) setActiveStep(candidates[0].id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visibleEntries.set(entry.target.id, entry);
        updateActiveStep();
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: 0.15,
      },
    );

    for (const el of elements) observer.observe(el);

    return () => {
      observer.disconnect();
      visibleEntries.clear();
    };
  }, [steps]);

  const activeIndex = useMemo(() => Math.max(steps.findIndex((step) => step.id === activeStep), 0), [activeStep, steps]);

  const scrollToStep = (id: string) => {
    setActiveStep(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={cn("min-w-0", className)}>
      <nav aria-label="Application phases" className="hidden md:block">
        <ol className="relative flex flex-col items-center gap-8 py-4">
          <span aria-hidden className="absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-[var(--rule)]" />

          {steps.map((step, index) => {
            const isActive = activeStep === step.id;
            const isComplete = index < activeIndex;

            return (
              <li className="relative z-[1]" key={step.id}>
                <button
                  type="button"
                  aria-current={isActive ? "step" : undefined}
                  aria-label={step.title ?? `Step ${step.label}`}
                  className="inline-flex items-center justify-center"
                  onClick={() => scrollToStep(step.id)}
                >
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold leading-none transition-colors duration-200",
                      isActive
                        ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                        : isComplete
                          ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                          : "border-[var(--rule)] bg-white text-[var(--muted)]",
                    )}
                  >
                    {step.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      <nav aria-label="Application phases" className="md:hidden">
        <div className="overflow-x-auto pb-1">
          <div className="flex min-w-max items-center gap-3">
            {steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  type="button"
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-2 text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-[var(--rule)] bg-white text-[var(--muted)]",
                  )}
                  onClick={() => scrollToStep(step.id)}
                >
                  <span
                    className={cn(
                      "inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold leading-none",
                      isActive ? "border-white/30 bg-white/10 text-white" : "border-[var(--rule)] bg-[var(--panel)] text-[var(--accent)]",
                    )}
                  >
                    {step.label}
                  </span>
                  <span>{step.title ?? step.id}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
