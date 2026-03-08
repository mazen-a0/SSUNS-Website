"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { Locale } from "@/content/registry";

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
  searchLabel: string;
  commandShortcutLabel: string;
  languageSwitchLabel: string;
  language: Locale;
  setLanguage: (language: Locale) => void;
  languageEnglishLabel: string;
  languageFrenchLabel: string;
  onOpenPalette: () => void;
};

export function GlassNav({
  items,
  openMenuLabel,
  closeMenuLabel,
  homeAriaLabel,
  openPaletteLabel,
  searchLabel,
  commandShortcutLabel,
  languageSwitchLabel,
  language,
  setLanguage,
  languageEnglishLabel,
  languageFrenchLabel,
  onOpenPalette,
}: GlassNavProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const navRef = useRef<HTMLDivElement | null>(null);

  const itemRefs = useMemo(() => {
    return items.reduce<Record<string, HTMLAnchorElement | null>>((acc, item) => {
      acc[item.href] = null;
      return acc;
    }, {});
  }, [items]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const active = items.find((item) => pathname === item.href) ?? null;
      if (!active) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }

      const activeEl = itemRefs[active.href];
      const navEl = navRef.current;

      if (!activeEl || !navEl) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }

      const activeBox = activeEl.getBoundingClientRect();
      const navBox = navEl.getBoundingClientRect();

      setIndicator({
        left: activeBox.left - navBox.left,
        width: activeBox.width,
        visible: true,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [itemRefs, items, pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-[#25389f] backdrop-blur-sm transition-colors duration-300",
        isScrolled ? "bg-[rgba(10,18,60,0.96)]" : "bg-[rgba(20,32,130,0.9)]",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link aria-label={homeAriaLabel} className="inline-flex items-center" href="/">
          <span className="inline-flex border border-white/18 bg-[rgba(7,15,49,0.4)] px-2.5 py-2">
            <Image alt="SSUNS logo" height={24} src="/logos/ssuns-woodmark.png" width={92} priority />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex md:justify-center">
          <div ref={navRef} className="relative flex items-center gap-5">
            <span
              aria-hidden
              className={cn(
                "absolute bottom-0 h-px bg-[#79aefc] transition-all duration-300",
                indicator.visible ? "opacity-100" : "opacity-0",
              )}
              style={{ left: `${indicator.left}px`, width: `${indicator.width}px` }}
            />
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={cn(
                    "relative pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors",
                    isActive ? "text-white" : "text-[#d3e2ff] hover:text-white",
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

        <div className="flex items-center justify-end gap-3">
          <div aria-label={languageSwitchLabel} className="hidden items-center gap-1 border-r border-white/18 pr-3 md:flex">
            <button
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.18em]",
                language === "en" ? "text-white" : "text-[#d3e2ff]",
              )}
              onClick={() => setLanguage("en")}
              type="button"
            >
              {languageEnglishLabel}
            </button>
            <span aria-hidden className="text-[11px] text-[#9bb9ff]">|</span>
            <button
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.18em]",
                language === "fr" ? "text-white" : "text-[#d3e2ff]",
              )}
              onClick={() => setLanguage("fr")}
              type="button"
            >
              {languageFrenchLabel}
            </button>
          </div>
          <button
            aria-label={openPaletteLabel}
            className="hidden border border-white/18 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d3e2ff] transition-colors hover:text-white md:inline-flex"
            onClick={onOpenPalette}
            type="button"
          >
            {searchLabel}
          </button>
          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? closeMenuLabel : openMenuLabel}
            className="border border-white/18 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d3e2ff] md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            {mobileOpen ? closeMenuLabel : openMenuLabel}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile" className="border-t border-white/12 bg-[rgba(10,18,60,0.98)] px-4 py-3 md:hidden sm:px-6">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "border-b border-white/10 pb-3 text-[11px] font-semibold uppercase tracking-[0.18em]",
                  pathname === item.href ? "text-white" : "text-[#d3e2ff]",
                )}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <button
                className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", language === "en" ? "text-white" : "text-[#d3e2ff]")}
                onClick={() => setLanguage("en")}
                type="button"
              >
                {languageEnglishLabel}
              </button>
              <span aria-hidden className="text-[11px] text-[#9bb9ff]">|</span>
              <button
                className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", language === "fr" ? "text-white" : "text-[#d3e2ff]")}
                onClick={() => setLanguage("fr")}
                type="button"
              >
                {languageFrenchLabel}
              </button>
            </div>
            <button
              className="border-b border-white/10 pb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d3e2ff]"
              onClick={() => {
                setMobileOpen(false);
                onOpenPalette();
              }}
              type="button"
            >
              {searchLabel}
              <span className="ml-2 text-[#9bb9ff]">{commandShortcutLabel}</span>
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
