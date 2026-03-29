import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const gaps = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
} as const;

type StackGap = keyof typeof gaps;

type StackProps = {
  children: ReactNode;
  className?: string;
  gap?: StackGap;
};

export function Stack({ children, className, gap = "md" }: StackProps) {
  return <div className={cn("flex flex-col", gaps[gap], className)}>{children}</div>;
}
