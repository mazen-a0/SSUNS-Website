"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type ExpandablePanel = {
  id: string;
  title: string;
  summary: string;
  content: string[];
};

type ExpandablePanelsProps = {
  items: ExpandablePanel[];
  className?: string;
};

export function ExpandablePanels({ items, className }: ExpandablePanelsProps) {
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <article className="overflow-hidden border border-[var(--rule)] bg-[var(--panel)]" key={item.id}>
            <button
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[rgba(20,32,130,0.03)] sm:px-6"
              onClick={() => setOpenId((current) => (current === item.id ? "" : item.id))}
              type="button"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[var(--text)]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--rule)] text-[var(--accent)]">
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
              </span>
            </button>

            {isOpen ? (
              <div className="border-t border-[var(--rule)] px-5 py-5 sm:px-6">
                <div className="space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                  {item.content.map((paragraph, index) => (
                    <p key={`${item.id}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
