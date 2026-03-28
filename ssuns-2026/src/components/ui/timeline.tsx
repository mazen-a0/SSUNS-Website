"use client";

import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, Clock3, CircleDot, X } from "lucide-react";
import { cn } from "@/lib/cn";

const timelineVariants = cva("relative flex w-full min-w-0", {
  variants: {
    variant: {
      default: "gap-5",
      compact: "gap-4",
      spacious: "gap-8",
    },
    orientation: {
      vertical: "flex-col",
      horizontal: "grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "vertical",
  },
});

const itemVariants = cva("relative min-w-0", {
  variants: {
    orientation: {
      vertical: "pl-10 sm:pl-12",
      horizontal: "h-full min-w-0",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export type TimelineItem = {
  id: string;
  title: string;
  description?: string;
  timestamp?: string | Date;
  status?: "default" | "completed" | "active" | "pending" | "error";
  content?: ReactNode;
};

export interface TimelineProps extends VariantProps<typeof timelineVariants> {
  items: TimelineItem[];
  className?: string;
  showConnectors?: boolean;
  showTimestamps?: boolean;
  timestampPosition?: "top" | "bottom" | "inline";
}

function getStatusIcon(status: TimelineItem["status"]) {
  switch (status) {
    case "completed":
      return <Check className="h-3.5 w-3.5" strokeWidth={2} />;
    case "active":
      return <Clock3 className="h-3.5 w-3.5" strokeWidth={2} />;
    case "error":
      return <X className="h-3.5 w-3.5" strokeWidth={2} />;
    default:
      return <CircleDot className="h-3.5 w-3.5" strokeWidth={1.8} />;
  }
}

function formatTimestamp(timestamp: string | Date) {
  const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Timeline({
  items,
  className,
  variant,
  orientation = "vertical",
  showConnectors = true,
  showTimestamps = true,
  timestampPosition = "top",
}: TimelineProps) {
  return (
    <div className={cn(timelineVariants({ orientation, variant }), className)}>
      {items.map((item, index) => {
        const iconClasses = cn(
          "flex h-7 w-7 items-center justify-center rounded-full border text-[var(--accent)]",
          item.status === "completed" && "border-[var(--accent)] bg-[var(--accent)] text-white",
          item.status === "active" && "border-[var(--accent)] bg-[rgba(76,158,255,0.12)] text-[var(--accent)]",
          item.status === "pending" && "border-[var(--rule)] bg-[var(--panel)] text-[var(--muted)]",
          item.status === "error" && "border-[#9b1c1c] bg-[#9b1c1c] text-white",
          (!item.status || item.status === "default") && "border-[var(--rule)] bg-[var(--panel)]",
        );

        return (
          <article className={cn(itemVariants({ orientation }))} key={item.id}>
            {orientation === "vertical" ? (
              <>
                <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center"> 
                  <div className={iconClasses}>{getStatusIcon(item.status)}</div>
                </div>
                {showConnectors && index < items.length - 1 ? (
                  <span className="absolute left-[0.82rem] top-8 h-[calc(100%-0.25rem)] w-px bg-[var(--rule)]" />
                ) : null}
              </>
            ) : (
              <div className="mb-4 flex items-center gap-3">
                <div className={iconClasses}>{getStatusIcon(item.status)}</div>
                {showConnectors && index < items.length - 1 ? <span className="hidden h-px flex-1 bg-[var(--rule)] xl:block" /> : null}
              </div>
            )}

            <div className="h-full rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] p-4 sm:p-5">
              {showTimestamps && timestampPosition === "top" && item.timestamp ? (
                <time className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--muted)]">{formatTimestamp(item.timestamp)}</time>
              ) : null}
              <div className={cn("mt-1 flex gap-3", timestampPosition === "inline" ? "items-start justify-between" : "items-start")}>
                <h3 className="text-lg font-semibold leading-snug text-[var(--accent)] sm:text-xl">{item.title}</h3>
                {showTimestamps && timestampPosition === "inline" && item.timestamp ? (
                  <time className="shrink-0 text-xs font-medium text-[var(--muted)]">{formatTimestamp(item.timestamp)}</time>
                ) : null}
              </div>
              {item.description ? <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{item.description}</p> : null}
              {item.content ? <div className="mt-4">{item.content}</div> : null}
              {showTimestamps && timestampPosition === "bottom" && item.timestamp ? (
                <time className="mt-4 block text-xs font-medium text-[var(--muted)]">{formatTimestamp(item.timestamp)}</time>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
