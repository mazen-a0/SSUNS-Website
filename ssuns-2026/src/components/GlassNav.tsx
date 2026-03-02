"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  href: string;
};

type GlassNavProps = {
  items: NavItem[];
  openMenuLabel: string;
  closeMenuLabel: string;
  homeAriaLabel: string;
  openPaletteLabel: string;
  commandShortcutLabel: string;
  onOpenPalette: () => void;
};

export function GlassNav({
  items,
  openMenuLabel,
  closeMenuLabel,
  homeAriaLabel,
  openPaletteLabel,
  commandShortcutLabel,
  onOpenPalette,
}: GlassNavProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });
  const navRef = useRef<HTMLDivElement | null>(null);

  const itemRefs = useMemo(() => {
    return items.reduce<Record<string, HTMLAnchorElement | null>>((acc, item) => {
      acc[item.href] = null;
      return acc;
    }, {});
  }, [items]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updatePill = () => {
      const active = items.find((item) => pathname === item.href) ?? null;
      if (!active) {
        setPill((prev) => ({ ...prev, visible: false }));
        return;
      }

      const activeEl = itemRefs[active.href];
      const navEl = navRef.current;

      if (!activeEl || !navEl) {
        setPill((prev) => ({ ...prev, visible: false }));
        return;
      }

      const activeBox = activeEl.getBoundingClientRect();
      const navBox = navEl.getBoundingClientRect();

      setPill({
        left: activeBox.left - navBox.left,
        width: activeBox.width,
        visible: true,
      });
    };

    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [itemRefs, items, pathname]);

  return (
    <header className="sticky top-0 z-40 px-4 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 py-2 transition-all duration-300",
          isScrolled
            ? "border-[var(--glass-border-strong)] bg-[var(--glass-bg-strong)] shadow-[var(--glass-shadow)] backdrop-blur-2xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link aria-label={homeAriaLabel} className="rounded-lg p-2" href="/">
          <Image alt="SSUNS logo" height={30} src="/logos/ssuns-woodmark.png" width={112} priority />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <div ref={navRef} className="relative flex items-center rounded-full border border-white/35 bg-white/30 p-1 backdrop-blur-xl">
            <span
              aria-hidden
              className={cn(
                "absolute top-1 bottom-1 rounded-full bg-[linear-gradient(135deg,rgba(76,158,255,0.33),rgba(255,255,255,0.5))] shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_8px_24px_-10px_rgba(76,158,255,0.95)] transition-all duration-300",
                pill.visible ? "opacity-100" : "opacity-0",
              )}
              style={{ left: `${pill.left}px`, width: `${pill.width}px` }}
            />
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={cn(
                    "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-[var(--color-brand-navy)]" : "text-slate-700 hover:text-[var(--color-brand-navy)]",
                  )}
                  href={item.href}
                  ref={(node) => {
                    itemRefs[item.href] = node;
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label={openPaletteLabel}
            className="hidden rounded-full border border-white/45 bg-white/40 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-xl md:inline-flex"
            onClick={onOpenPalette}
            type="button"
          >
            {commandShortcutLabel}
          </button>
          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? closeMenuLabel : openMenuLabel}
            className="rounded-full border border-white/45 bg-white/40 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur-xl md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            {mobileOpen ? closeMenuLabel : openMenuLabel}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          aria-label="Mobile"
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg-strong)] p-2 shadow-[var(--glass-shadow)] backdrop-blur-xl md:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium",
                pathname === item.href
                  ? "bg-white/65 text-[var(--color-brand-navy)]"
                  : "text-slate-700 hover:bg-white/45",
              )}
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-white/45"
            onClick={() => {
              setMobileOpen(false);
              onOpenPalette();
            }}
            type="button"
          >
            {commandShortcutLabel}
          </button>
        </nav>
      ) : null}
    </header>
  );
}
