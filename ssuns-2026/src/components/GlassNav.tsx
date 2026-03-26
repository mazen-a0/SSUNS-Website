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

type SocialLink = {
  label: string;
  href: string;
};

type PreviewMenuItem = {
  label: string;
  href: string;
  description: string;
};

type GlassNavProps = {
  items: NavItem[];
  openMenuLabel: string;
  closeMenuLabel: string;
  homeAriaLabel: string;
  openPaletteLabel: string;
  searchLabel: string;
  languageSwitchLabel: string;
  language: Locale;
  setLanguage: (language: Locale) => void;
  languageEnglishLabel: string;
  languageFrenchLabel: string;
  socialLinks: SocialLink[];
  mastheadLabel: string;
  previewMenus: Record<string, PreviewMenuItem[]>;
  onOpenPalette: () => void;
};

const coreHrefs = new Set(["/", "/about", "/conference", "/committees", "/registration"]);
const utilityHrefs = new Set(["/sponsor-us", "/staff-resources", "/contact"]);

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 24 24" width="14">
      <rect height="15" rx="4" stroke="currentColor" strokeWidth="1.5" width="15" x="4.5" y="4.5" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" fill="currentColor" r="1" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 24 24" width="14">
      <path d="M14 4v9.2a3.2 3.2 0 1 1-3-3.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M14 4c1 2.1 2.6 3.4 5 3.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function GlassNav({
  items,
  openMenuLabel,
  closeMenuLabel,
  homeAriaLabel,
  openPaletteLabel,
  searchLabel,
  languageSwitchLabel,
  language,
  setLanguage,
  languageEnglishLabel,
  languageFrenchLabel,
  socialLinks,
  mastheadLabel,
  previewMenus,
  onOpenPalette,
}: GlassNavProps) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPreview, setOpenPreview] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!headerRef.current || !target) return;
      if (!headerRef.current.contains(target)) {
        setOpenPreview(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPreview(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const coreItems = useMemo(() => items.filter((item) => coreHrefs.has(item.href)), [items]);
  const utilityItems = useMemo(() => items.filter((item) => utilityHrefs.has(item.href)), [items]);
  const instagramLink = socialLinks.find((link) => link.label.toLowerCase().includes("instagram"));
  const tiktokLink = socialLinks.find((link) => link.label.toLowerCase().includes("tiktok"));

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b border-white/14 bg-[rgba(13,24,92,0.98)] text-white backdrop-blur-[10px]",
        isScrolled && "shadow-[0_14px_28px_-28px_rgba(5,10,35,0.7)]",
      )}
    >
      <div className="h-px bg-[var(--accent-2)]" />

      <div className="hidden xl:block" onMouseLeave={() => setOpenPreview(null)}>
        <div className="page-shell">
          <div className="flex min-h-6 items-center justify-between gap-4 border-b border-white/12 text-[12px] text-[#d6e2ff]">
            <p className="truncate text-[11px] font-semibold tracking-[0.03em] text-[#d6e2ff]">{mastheadLabel}</p>
            <div className="flex shrink-0 items-center gap-2 py-1">
              {instagramLink ? (
                <Link
                  aria-label={instagramLink.label}
                  className="inline-flex h-7 w-7 items-center justify-center border border-white/16 bg-white/8 text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/12"
                  href={instagramLink.href}
                  target="_blank"
                >
                  <InstagramIcon />
                </Link>
              ) : null}
              {tiktokLink ? (
                <Link
                  aria-label={tiktokLink.label}
                  className="inline-flex h-7 w-7 items-center justify-center border border-white/16 bg-white/8 text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/12"
                  href={tiktokLink.href}
                  target="_blank"
                >
                  <TikTokIcon />
                </Link>
              ) : null}
              <div aria-label={languageSwitchLabel} className="inline-flex h-7 items-center border border-white/16 bg-white/8 p-0.5">
                <button
                  className={cn(
                    "inline-flex h-full min-w-9 items-center justify-center px-2 text-[11px] font-semibold transition-colors duration-200",
                    language === "en" ? "bg-white text-[var(--accent)]" : "text-[#d6e2ff] hover:text-white",
                  )}
                  onClick={() => setLanguage("en")}
                  type="button"
                >
                  {languageEnglishLabel}
                </button>
                <button
                  className={cn(
                    "inline-flex h-full min-w-9 items-center justify-center px-2 text-[11px] font-semibold transition-colors duration-200",
                    language === "fr" ? "bg-white text-[var(--accent)]" : "text-[#d6e2ff] hover:text-white",
                  )}
                  onClick={() => setLanguage("fr")}
                  type="button"
                >
                  {languageFrenchLabel}
                </button>
              </div>
              <button
                aria-label={openPaletteLabel}
                className="inline-flex h-7 items-center border border-white/16 bg-white/8 px-3 text-[11px] font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/12"
                onClick={onOpenPalette}
                type="button"
              >
                {searchLabel}
              </button>
            </div>
          </div>

          <div className="grid min-h-[3rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
            <Link
              aria-label={homeAriaLabel}
              className="inline-flex items-center"
              href="/"
              onClick={() => {
                setMobileOpen(false);
                setOpenPreview(null);
              }}
            >
              <Image alt="SSUNS logo" height={22} priority src="/logos/ssuns2026-woodmark-white.png" width={108} />
            </Link>

            <nav aria-label="Primary" className="min-w-0">
              <div className="flex min-w-0 items-center justify-center gap-3 2xl:gap-4">
                {coreItems.map((item) => {
                  const isActive = isActivePath(pathname, item.href);
                  const hasPreview = Boolean(previewMenus[item.href]?.length);
                  return (
                    <div
                      className="relative"
                      key={item.href}
                      onFocusCapture={() => setOpenPreview(hasPreview ? item.href : null)}
                      onMouseEnter={() => setOpenPreview(hasPreview ? item.href : null)}
                    >
                      <Link
                        aria-expanded={hasPreview ? openPreview === item.href : undefined}
                        className={cn(
                          "nav-link inline-flex min-w-0 shrink items-center whitespace-nowrap py-2 text-[15px] font-semibold text-[#eaf0ff] transition-colors duration-200 hover:text-white",
                          isActive && "is-active text-white",
                        )}
                        href={item.href}
                        onClick={(event) => {
                          if (hasPreview && openPreview !== item.href) {
                            event.preventDefault();
                            setOpenPreview(item.href);
                          } else {
                            setOpenPreview(null);
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </nav>

            <div className="flex items-center gap-2.5">
              {utilityItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);
                return (
                  <Link
                    className={cn(
                      "nav-link inline-flex items-center whitespace-nowrap py-2 text-[13px] font-semibold text-[#d6e2ff] transition-colors duration-200 hover:text-white",
                      isActive && "is-active text-white",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenPreview(null);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {openPreview && previewMenus[openPreview]?.length ? (
            <div className="border-t border-white/12 py-4">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {previewMenus[openPreview].map((entry) => (
                  <Link
                    className="block border border-white/12 bg-[rgba(8,14,46,0.96)] px-4 py-4 transition-colors duration-200 hover:border-[var(--accent-2)] hover:bg-[rgba(12,20,64,0.98)]"
                    href={entry.href}
                    key={entry.href}
                    onClick={() => setOpenPreview(null)}
                    onFocus={() => setOpenPreview(openPreview)}
                  >
                    <p className="text-sm font-semibold text-white">{entry.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#c6d7ff]">{entry.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="page-shell flex min-h-[3rem] items-center justify-between gap-4 xl:hidden">
        <Link
          aria-label={homeAriaLabel}
          className="inline-flex items-center"
          href="/"
          onClick={() => {
            setMobileOpen(false);
            setOpenPreview(null);
          }}
        >
          <Image alt="SSUNS logo" height={22} priority src="/logos/ssuns2026-woodmark-white.png" width={108} />
        </Link>
        <div className="flex items-center gap-2">
          <button
            aria-label={openPaletteLabel}
            className="inline-flex h-9 items-center border border-white/16 bg-white/8 px-3 text-sm font-semibold text-white"
            onClick={onOpenPalette}
            type="button"
          >
            {searchLabel}
          </button>
          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? closeMenuLabel : openMenuLabel}
            className="inline-flex h-9 items-center border border-white/16 bg-white/8 px-3 text-sm font-semibold text-white"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            {mobileOpen ? closeMenuLabel : openMenuLabel}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile" className="border-t border-white/12 bg-[rgba(12,20,64,0.98)] px-4 py-4 text-white xl:hidden sm:px-6">
          <div className="space-y-5">
            <p className="text-[12px] font-semibold text-[#d6e2ff]">{mastheadLabel}</p>
            <div className="grid gap-2">
              {items.map((item) => {
                const isActive = isActivePath(pathname, item.href);
                const hasPreview = Boolean(previewMenus[item.href]?.length);
                const isExpanded = Boolean(mobileExpanded[item.href]);
                return (
                  <div className="border-b border-white/12 py-3" key={item.href}>
                    <div className="flex items-center gap-3">
                      <Link
                        className={cn(
                          "block flex-1 text-base font-semibold text-white transition-colors duration-200 hover:text-[#dce8ff]",
                          isActive && "text-[#dce8ff]",
                        )}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasPreview ? (
                        <button
                          aria-expanded={isExpanded}
                          className="inline-flex h-8 items-center border border-white/14 px-3 text-sm font-semibold text-[#d6e2ff]"
                          onClick={() => setMobileExpanded((current) => ({ ...current, [item.href]: !current[item.href] }))}
                          type="button"
                        >
                          {isExpanded ? "−" : "+"}
                        </button>
                      ) : null}
                    </div>
                    {hasPreview && isExpanded ? (
                      <div className="mt-3 space-y-2 pl-3">
                        {previewMenus[item.href].map((entry) => (
                          <Link
                            className="block text-sm text-[#d6e2ff] transition-colors duration-200 hover:text-white"
                            href={entry.href}
                            key={entry.href}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="font-semibold text-white">{entry.label}</span>
                            <span className="mt-1 block text-xs leading-relaxed">{entry.description}</span>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-white/12 pt-4">
              <button
                aria-label={openPaletteLabel}
                className="inline-flex h-9 items-center border border-white/16 bg-white/8 px-3 text-sm font-semibold text-white"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenPalette();
                }}
                type="button"
              >
                {searchLabel}
              </button>
              <div aria-label={languageSwitchLabel} className="inline-flex h-9 items-center border border-white/16 bg-white/8 p-0.5">
                <button
                  className={cn(
                    "inline-flex h-full min-w-10 items-center justify-center px-2 text-[11px] font-semibold",
                    language === "en" ? "bg-white text-[var(--accent)]" : "text-[#d6e2ff]",
                  )}
                  onClick={() => setLanguage("en")}
                  type="button"
                >
                  {languageEnglishLabel}
                </button>
                <button
                  className={cn(
                    "inline-flex h-full min-w-10 items-center justify-center px-2 text-[11px] font-semibold",
                    language === "fr" ? "bg-white text-[var(--accent)]" : "text-[#d6e2ff]",
                  )}
                  onClick={() => setLanguage("fr")}
                  type="button"
                >
                  {languageFrenchLabel}
                </button>
              </div>
              {instagramLink ? (
                <Link
                  aria-label={instagramLink.label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/16 bg-white/8 text-white"
                  href={instagramLink.href}
                  target="_blank"
                >
                  <InstagramIcon />
                </Link>
              ) : null}
              {tiktokLink ? (
                <Link
                  aria-label={tiktokLink.label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/16 bg-white/8 text-white"
                  href={tiktokLink.href}
                  target="_blank"
                >
                  <TikTokIcon />
                </Link>
              ) : null}
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
