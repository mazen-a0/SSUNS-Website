"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";

type GlassSheetModalProps = {
  open: boolean;
  title: string;
  closeLabel: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function GlassSheetModal({
  open,
  title,
  closeLabel,
  onClose,
  children,
}: GlassSheetModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(11,16,44,0.55)] p-4 backdrop-blur-md sm:items-center sm:p-8">
      <button
        aria-label={closeLabel}
        className="absolute inset-0"
        onClick={onClose}
        type="button"
      />
      <div
        aria-modal="true"
        className={cn(
          "relative z-10 w-full max-w-3xl rounded-3xl border border-[var(--glass-border-strong)] bg-[var(--glass-bg-strong)] p-6 shadow-[0_35px_80px_-35px_rgba(11,16,44,0.92)] backdrop-blur-2xl",
          "sm:p-8",
        )}
        role="dialog"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl uppercase text-[var(--color-brand-navy)]">{title}</h2>
          <button
            className="rounded-full border border-white/55 bg-white/50 px-3 py-1 text-xs font-semibold text-[var(--color-brand-navy)]"
            onClick={onClose}
            type="button"
          >
            {closeLabel}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
