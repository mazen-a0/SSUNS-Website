import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const spacing = {
  none: "",
  default: "py-8 sm:py-10",
  tight: "py-6 sm:py-8",
  loose: "py-10 sm:py-14",
} as const;

type SectionSpacing = keyof typeof spacing;

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: SectionSpacing;
};

/** Vertical section rhythm; pair with `Container` for width. */
export function Section({ children, className, id, spacing: sp = "default" }: SectionProps) {
  return (
    <section className={cn(spacing[sp], className)} id={id}>
      {children}
    </section>
  );
}
