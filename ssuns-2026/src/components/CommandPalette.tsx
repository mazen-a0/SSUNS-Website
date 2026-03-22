"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchEntry } from "@/content/search";
import { cn } from "@/lib/cn";

type CommandPaletteText = {
  title: string;
  placeholder: string;
  empty: string;
  hint: string;
  closeLabel: string;
  navigationGroupLabel: string;
  contentGroupLabel: string;
};

type CommandPaletteProps = {
  actions: SearchEntry[];
  text: CommandPaletteText;
  open?: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({
  actions,
  text,
  open = false,
  onOpenChange,
}: CommandPaletteProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return actions;

    return actions.filter((item) => {
      return `${item.title} ${item.snippet} ${item.group}`.toLowerCase().includes(normalized);
    });
  }, [actions, query]);
  const safeActiveIndex = Math.min(active, Math.max(filtered.length - 1, 0));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) {
          onOpenChange(false);
          setQuery("");
          setActive(0);
        } else {
          onOpenChange(true);
          setActive(0);
        }
      }

      if (event.key === "/" && !isTypingTarget && !open) {
        event.preventDefault();
        onOpenChange(true);
        setActive(0);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  const onSelect = (href: string) => {
    onOpenChange(false);
    setQuery("");
    setActive(0);
    if (/^https?:\/\//.test(href)) {
      window.location.href = href;
      return;
    }
    router.push(href);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(8,12,28,0.56)] p-4 backdrop-blur-sm sm:p-10">
      <button
        aria-label={text.closeLabel}
        className="absolute inset-0"
        onClick={() => {
          onOpenChange(false);
          setQuery("");
          setActive(0);
        }}
        type="button"
      />
      <div aria-modal="true" className="relative mx-auto max-w-3xl" role="dialog">
        <div className="theme-panel-strong paper-grain relative overflow-hidden rounded-[10px] border border-[var(--rule)] p-4 sm:p-5">
          <div className="report-tab border-b border-[var(--rule)] pb-4">
            <label className="sr-only" htmlFor="command-input">
              {text.placeholder}
            </label>
            <div className="flex items-center gap-3 border border-[var(--rule)] bg-[var(--bg)] px-3 py-3">
              <span aria-hidden className="text-xs font-semibold text-[var(--muted)]">
                /
              </span>
              <input
                aria-activedescendant={filtered[safeActiveIndex] ? `command-option-${filtered[safeActiveIndex].id}` : undefined}
                aria-autocomplete="list"
                aria-controls="command-results"
                aria-label={text.placeholder}
                className="w-full bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none"
                id="command-input"
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setActive((prev) => Math.min(prev + 1, Math.max(filtered.length - 1, 0)));
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    setActive((prev) => Math.max(prev - 1, 0));
                  }
                  if (event.key === "Enter") {
                    event.preventDefault();
                    const target = filtered[safeActiveIndex];
                    if (target) onSelect(target.href);
                  }
                  if (event.key === "Escape") {
                    event.preventDefault();
                    onOpenChange(false);
                    setQuery("");
                    setActive(0);
                  }
                }}
                placeholder={text.placeholder}
                ref={inputRef}
                value={query}
              />
              <kbd className="border border-[var(--rule)] px-2 py-1 text-[10px] font-semibold text-[var(--muted)]">
                Esc
              </kbd>
            </div>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="section-kicker">{text.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{text.hint}</p>
              </div>
            </div>
          </div>

          <ul aria-label={text.title} className="mt-3 max-h-[50vh] space-y-2 overflow-y-auto" id="command-results" role="listbox">
            {filtered.length ? (
              filtered.map((action, index) => (
                <li
                  aria-selected={index === safeActiveIndex}
                  id={`command-option-${action.id}`}
                  key={action.id}
                  role="option"
                >
                  <button
                    className={cn(
                      "w-full border px-4 py-3 text-left transition-colors",
                      index === safeActiveIndex
                        ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)] text-[var(--accent)]"
                        : "border-[var(--rule)] bg-transparent hover:bg-[rgba(20,32,130,0.03)]",
                    )}
                    onClick={() => onSelect(action.href)}
                    onMouseEnter={() => setActive(index)}
                    type="button"
                  >
                    <div className="grid gap-2 sm:grid-cols-[0.22fr_0.78fr] sm:items-start">
                      <p className="text-[10px] font-semibold text-[var(--muted)]">
                        {action.group === "navigation" ? text.navigationGroupLabel : text.contentGroupLabel}
                      </p>
                      <div>
                        <p className="text-sm font-semibold">{action.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{action.snippet}</p>
                      </div>
                    </div>
                  </button>
                </li>
              ))
            ) : (
              <li className="border border-[var(--rule)] bg-[var(--paper-deep)] px-4 py-5 text-sm text-[var(--muted)]">
                {text.empty}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
