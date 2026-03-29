import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const gaps = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
} as const;

type GridGap = keyof typeof gaps;

type GridProps = {
  children: ReactNode;
  className?: string;
  gap?: GridGap;
};

export function Grid({ children, className, gap = "md" }: GridProps) {
  return <div className={cn("grid", gaps[gap], className)}>{children}</div>;
}
