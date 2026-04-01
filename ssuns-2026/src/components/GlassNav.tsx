"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { NavPreviewDeck } from "@/components/nav/nav-preview-deck";
import { SocialIconRow } from "@/components/ui/social-icon";
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
const utilityHrefs = new Set(["/sponsor-us", "/contact"]);

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
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
  const socialItems = useMemo(
    () =>
      socialLinks
        .map((link) => {
          const lower = link.label.toLowerCase();
          if (lower.includes("instagram")) {
            return { platform: "instagram" as const, href: link.href, label: link.label };
          }
          if (lower.includes("linkedin")) {
            return { platform: "linkedin" as const, href: link.href, label: link.label };
          }
          if (lower.includes("tiktok")) {
            return { platform: "tiktok" as const, href: link.href, label: link.label };
          }
          return null;
        })
        .filter(
          (
            item,
          ): item is {
            platform: "instagram" | "linkedin" | "tiktok";
            href: string;
            label: string;
          } => item !== null,
        ),
    [socialLinks],
  );

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b border-white/14 bg-[rgba(13,24,92,0.98)] text-white backdrop-blur-[10px] transition-all duration-300",
        isScrolled && "shadow-[0_14px_28px_-28px_rgba(5,10,35,0.7)]",
      )}
    >
      <div className="h-px bg-[var(--accent-2)]" />

      <div className="hidden xl:block" onMouseLeave={() => setOpenPreview(null)}>
        <div className="page-shell relative">
          <div
            className={cn(
              "overflow-hidden border-b border-white/12 transition-all duration-300",
              isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
            )}
          >
            <div className="flex min-h-5 items-center justify-between gap-3 text-[11px] text-[#d6e2ff]">
              <p className="truncate text-[11px] font-semibold tracking-[0.03em] text-[#d6e2ff]">{mastheadLabel}</p>
              <div className="flex shrink-0 items-center gap-2 py-1">
                <div aria-label={languageSwitchLabel} className="inline-flex h-6 items-center border border-white/16 bg-white/8 p-0.5">
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
                  className={cn(
                    "inline-flex h-6 items-center border border-white/16 bg-white/8 px-3 text-[11px] font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/12",
                  )}
                  aria-label={openPaletteLabel}
                  onClick={onOpenPalette}
                  type="button"
                >
                  {searchLabel}
                </button>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 transition-all duration-300",
              isScrolled ? "min-h-[1.7rem]" : "min-h-[2.1rem]",
            )}
          >
            <Link
              aria-label={homeAriaLabel}
              className="inline-flex items-center"
              href="/"
              onClick={() => {
                setMobileOpen(false);
                setOpenPreview(null);
              }}
            >
              <Image alt="SSUNS logo" height={isScrolled ? 20 : 24} priority src="/logos/ssuns2026-woodmark-white.png" width={isScrolled ? 104 : 118} />
            </Link>

            <nav aria-label="Primary" className="min-w-0">
              <div className={cn("flex min-w-0 items-center justify-center 2xl:gap-4 transition-all duration-300", isScrolled ? "gap-2.5" : "gap-3")}>
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
                          "nav-link inline-flex min-w-0 shrink items-center whitespace-nowrap font-semibold leading-tight text-[#eaf0ff] transition-all duration-300 hover:text-white",
                          isScrolled ? "py-1 text-[1rem] xl:text-[1.03rem]" : "py-1.5 text-[1.0625rem] xl:text-[1.125rem]",
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

            <div className={cn("flex items-center transition-all duration-300", isScrolled ? "gap-2" : "gap-2.5")}>
              {socialItems.length ? (
                <SocialIconRow
                  className="mr-0.5 hidden gap-1.5 xl:flex"
                  items={socialItems.map((item) => ({
                    ...item,
                    className:
                      isScrolled
                        ? "h-6 w-6 rounded-[5px] border-white/16 bg-white/8 text-white hover:border-white/40 hover:bg-white/12"
                        : "h-7 w-7 rounded-[5px] border-white/16 bg-white/8 text-white hover:border-white/40 hover:bg-white/12",
                  }))}
                  variant="inverse"
                />
              ) : null}
              {utilityItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);
                return (
                  <Link
                    className={cn(
                      "nav-link inline-flex items-center whitespace-nowrap font-semibold text-[#d6e2ff] transition-all duration-300 hover:text-white",
                      isScrolled ? "py-1 text-[0.875rem]" : "py-1.5 text-[0.9375rem]",
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
            <div className="absolute inset-x-0 top-full z-40 border-t border-white/12 bg-[rgba(13,24,92,0.98)] py-4 shadow-[0_18px_40px_-30px_rgba(5,10,35,0.9)] backdrop-blur-[12px]">
              <div className="mx-auto max-w-[72rem] px-3">
                <NavPreviewDeck
                  items={previewMenus[openPreview]}
                  onNavigate={() => setOpenPreview(null)}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className={cn("page-shell flex items-center justify-between gap-2 transition-all duration-300 xl:hidden", isScrolled ? "min-h-[1.85rem]" : "min-h-[2.2rem]")}>
        <Link
          aria-label={homeAriaLabel}
          className="inline-flex min-w-0 items-center"
          href="/"
          onClick={() => {
            setMobileOpen(false);
            setOpenPreview(null);
          }}
        >
          <Image
            alt="SSUNS logo"
            className="h-auto w-auto max-w-[6rem] sm:max-w-none"
            height={isScrolled ? 20 : 24}
            priority
            src="/logos/ssuns2026-woodmark-white.png"
            width={isScrolled ? 104 : 118}
          />
        </Link>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {socialItems.length ? (
            <SocialIconRow
              className="hidden gap-1.5 sm:flex"
              items={socialItems.map((item) => ({
                ...item,
                className:
                  isScrolled
                    ? "h-7 w-7 rounded-[5px] border-white/16 bg-white/8 text-white hover:border-white/40 hover:bg-white/12"
                    : "h-8 w-8 rounded-[5px] border-white/16 bg-white/8 text-white hover:border-white/40 hover:bg-white/12",
              }))}
              variant="inverse"
            />
          ) : null}
          <button
            aria-label={openPaletteLabel}
            className={cn(
              "inline-flex min-w-[4.75rem] shrink-0 items-center justify-center whitespace-nowrap border border-white/16 bg-white/8 px-2.5 font-semibold text-white transition-all duration-300 sm:min-w-[5rem] sm:px-3",
              isScrolled ? "h-7 text-[0.76rem] sm:text-[0.8125rem]" : "h-8 text-[0.8rem] sm:text-sm",
            )}
            onClick={onOpenPalette}
            type="button"
          >
            {searchLabel}
          </button>
          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? closeMenuLabel : openMenuLabel}
            className={cn(
              "inline-flex min-w-[5.5rem] shrink-0 items-center justify-center whitespace-nowrap border border-white/16 bg-white/8 px-2.5 font-semibold text-white transition-all duration-300 sm:min-w-[6rem] sm:px-3",
              isScrolled ? "h-7 text-[0.76rem] sm:text-[0.8125rem]" : "h-8 text-[0.8rem] sm:text-sm",
            )}
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
          className="max-h-[calc(100vh-var(--site-sticky-top))] overflow-y-auto overscroll-contain border-t border-white/12 bg-[rgba(12,20,64,0.98)] px-4 py-4 pb-6 text-white xl:hidden sm:px-6"
        >
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
                      <NavPreviewDeck
                        className="mt-3 pl-3"
                        items={previewMenus[item.href]}
                        layout="stack"
                        onNavigate={() => setMobileOpen(false)}
                      />
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
              {socialItems.length ? (
                <SocialIconRow
                  className="w-full pt-1"
                  items={socialItems.map((item) => ({
                    ...item,
                    className: "border-white/16 bg-white/8 text-white hover:border-white/40 hover:bg-white/12",
                  }))}
                  variant="inverse"
                />
              ) : null}
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
