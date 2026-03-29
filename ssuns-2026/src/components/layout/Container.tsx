import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Horizontal page width aligned with `.page-shell` (institutional max width + padding). */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("page-shell", className)}>{children}</div>;
}
