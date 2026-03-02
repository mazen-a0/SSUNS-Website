"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CommandAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  group: string;
};

type CommandPaletteText = {
  title: string;
  placeholder: string;
  empty: string;
  hint: string;
  closeLabel: string;
};

type CommandPaletteProps = {
  actions: CommandAction[];
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
      return `${item.label} ${item.description} ${item.group}`.toLowerCase().includes(normalized);
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
    router.push(href);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(8,12,35,0.52)] p-4 backdrop-blur-md sm:p-10">
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
      <div
        aria-modal="true"
        className="relative mx-auto max-w-2xl rounded-3xl border border-[var(--glass-border-strong)] bg-[var(--glass-bg-strong)] p-3 shadow-[0_30px_80px_-35px_rgba(10,16,45,0.9)] backdrop-blur-2xl"
        role="dialog"
      >
        <label className="sr-only" htmlFor="command-input">
          {text.placeholder}
        </label>
        <div className="flex items-center gap-2 rounded-2xl border border-white/55 bg-white/65 px-3 py-2">
          <span aria-hidden className="text-xs font-semibold text-slate-600">
            / 
          </span>
          <input
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none"
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
          <kbd className="rounded-md bg-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-600">Esc</kbd>
        </div>

        <h2 className="px-1 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{text.title}</h2>

        <ul aria-label={text.title} className="mt-2 max-h-[50vh] space-y-1 overflow-y-auto" role="listbox">
          {filtered.length ? (
            filtered.map((action, index) => (
              <li key={action.id}>
                <button
                  aria-selected={index === safeActiveIndex}
                  className={cn(
                    "w-full rounded-xl px-3 py-2 text-left transition",
                    index === safeActiveIndex
                      ? "bg-[rgba(76,158,255,0.2)] text-[var(--color-brand-navy)]"
                      : "hover:bg-white/50",
                  )}
                  onClick={() => onSelect(action.href)}
                  onMouseEnter={() => setActive(index)}
                  role="option"
                  type="button"
                >
                  <p className="text-sm font-semibold">{action.label}</p>
                  <p className="text-xs text-slate-600">{action.description}</p>
                </button>
              </li>
            ))
          ) : (
            <li className="rounded-xl bg-white/40 px-3 py-4 text-sm text-slate-600">{text.empty}</li>
          )}
        </ul>

        <p className="px-1 pt-3 text-xs text-slate-500">{text.hint}</p>
      </div>
    </div>
  );
}
