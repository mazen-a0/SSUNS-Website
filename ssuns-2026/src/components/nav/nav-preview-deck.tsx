"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type NavPreviewDeckItem = {
  href: string;
  label: string;
  description: string;
};

type NavPreviewDeckProps = {
  items: NavPreviewDeckItem[];
  className?: string;
  layout?: "grid" | "stack";
  onNavigate?: () => void;
};

export function NavPreviewDeck({ items, className, layout = "grid", onNavigate }: NavPreviewDeckProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div
      className={cn(
        layout === "grid" ? "grid gap-3 sm:grid-cols-2 xl:grid-cols-3" : "space-y-2",
        className,
      )}
    >
      {items.map((item) => (
        <Link
          className={cn(
            "group block border border-white/12 bg-[rgba(8,14,46,0.96)] px-4 py-4 text-white transition-colors duration-200 hover:border-[var(--accent-2)] hover:bg-[rgba(12,20,64,0.98)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            layout === "stack" && "bg-[rgba(255,255,255,0.03)] px-4 py-3",
          )}
          href={item.href}
          key={item.href}
          onClick={onNavigate}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#c6d7ff]">{item.description}</p>
            </div>
            <ArrowRight
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-[#c6d7ff] transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={1.8}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
