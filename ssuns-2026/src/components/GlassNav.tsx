"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPreview, setOpenPreview] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const coreItems = useMemo(() => items.filter((item) => coreHrefs.has(item.href)), [items]);
  const utilityItems = useMemo(() => items.filter((item) => utilityHrefs.has(item.href)), [items]);
  const instagramLink = socialLinks.find((link) => link.label.toLowerCase().includes("instagram"));
  const tiktokLink = socialLinks.find((link) => link.label.toLowerCase().includes("tiktok"));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-[var(--rule)] bg-[rgba(244,246,251,0.94)] backdrop-blur-sm",
        isScrolled && "shadow-[0_10px_24px_-24px_rgba(10,19,66,0.45)]",
      )}
    >
      <div className="border-t border-[var(--rule)]" />

      <div className="hidden xl:block" onMouseLeave={() => setOpenPreview(null)}>
        <div className="mx-auto max-w-[96rem] px-5 sm:px-8">
          <div className="flex min-h-9 items-center justify-between gap-4 border-b border-[var(--rule)] text-[11px] text-[var(--muted)]">
            <p className="truncate text-[10px] font-semibold tracking-[0.05em] text-[var(--accent)]">{mastheadLabel}</p>
            <div className="flex shrink-0 items-center gap-2">
              {instagramLink ? (
                <Link
                  aria-label={instagramLink.label}
                  className="inline-flex h-7 w-7 items-center justify-center border border-[var(--rule)] text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.05)]"
                  href={instagramLink.href}
                  target="_blank"
                >
                  <InstagramIcon />
                </Link>
              ) : null}
              {tiktokLink ? (
                <Link
                  aria-label={tiktokLink.label}
                  className="inline-flex h-7 w-7 items-center justify-center border border-[var(--rule)] text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.05)]"
                  href={tiktokLink.href}
                  target="_blank"
                >
                  <TikTokIcon />
                </Link>
              ) : null}
              <div aria-label={languageSwitchLabel} className="inline-flex h-7 items-center border border-[var(--rule)] bg-white/70 p-0.5">
                <button
                  className={cn(
                    "inline-flex h-full min-w-9 items-center justify-center px-2 text-[11px] font-semibold transition-colors duration-200",
                    language === "en" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)] hover:text-[var(--accent)]",
                  )}
                  onClick={() => setLanguage("en")}
                  type="button"
                >
                  {languageEnglishLabel}
                </button>
                <button
                  className={cn(
                    "inline-flex h-full min-w-9 items-center justify-center px-2 text-[11px] font-semibold transition-colors duration-200",
                    language === "fr" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)] hover:text-[var(--accent)]",
                  )}
                  onClick={() => setLanguage("fr")}
                  type="button"
                >
                  {languageFrenchLabel}
                </button>
              </div>
              <button
                aria-label={openPaletteLabel}
                className="inline-flex h-7 items-center border border-[var(--rule)] px-3 text-[11px] font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.05)]"
                onClick={onOpenPalette}
                type="button"
              >
                {searchLabel}
              </button>
            </div>
          </div>

          <div className="grid min-h-[4rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
            <Link aria-label={homeAriaLabel} className="inline-flex items-center" href="/">
              <span className="inline-flex border border-[var(--accent)] bg-[var(--accent)] px-2.5 py-2 shadow-[var(--shadow-soft)]">
                <Image alt="SSUNS logo" height={22} priority src="/logos/ssuns-woodmark.png" width={88} />
              </span>
            </Link>

            <nav aria-label="Primary" className="min-w-0">
              <div className="flex min-w-0 items-center justify-center gap-2.5 2xl:gap-3.5">
                {coreItems.map((item) => {
                  const isActive = isActivePath(pathname, item.href);
                  return (
                    <div
                      className="relative"
                      key={item.href}
                      onFocusCapture={() => setOpenPreview(previewMenus[item.href]?.length ? item.href : null)}
                      onMouseEnter={() => setOpenPreview(previewMenus[item.href]?.length ? item.href : null)}
                    >
                      <Link
                        className={cn(
                          "nav-link inline-flex min-w-0 shrink items-center whitespace-nowrap py-3 text-[11px] font-semibold text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]",
                          isActive && "is-active text-[var(--accent)]",
                        )}
                        href={item.href}
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
                      "nav-link inline-flex items-center whitespace-nowrap py-3 text-[10.5px] font-semibold text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]",
                      isActive && "is-active text-[var(--accent)]",
                    )}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {openPreview && previewMenus[openPreview]?.length ? (
            <div className="border-t border-[var(--rule)] py-4">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {previewMenus[openPreview].map((entry) => (
                  <Link
                    className="theme-panel-strong block rounded-[8px] px-4 py-4 transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.03)]"
                    href={entry.href}
                    key={entry.href}
                    onFocus={() => setOpenPreview(openPreview)}
                  >
                    <p className="text-sm font-semibold text-[var(--accent)]">{entry.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{entry.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mx-auto flex min-h-[4.25rem] max-w-[96rem] items-center justify-between gap-4 px-5 sm:px-8 xl:hidden">
        <Link aria-label={homeAriaLabel} className="inline-flex items-center" href="/">
          <span className="inline-flex border border-[var(--accent)] bg-[var(--accent)] px-2.5 py-2 shadow-[var(--shadow-soft)]">
            <Image alt="SSUNS logo" height={22} priority src="/logos/ssuns-woodmark.png" width={88} />
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            aria-label={openPaletteLabel}
            className="inline-flex h-9 items-center border border-[var(--rule)] px-3 text-sm font-semibold text-[var(--accent)]"
            onClick={onOpenPalette}
            type="button"
          >
            {searchLabel}
          </button>
          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? closeMenuLabel : openMenuLabel}
            className="inline-flex h-9 items-center border border-[var(--rule)] px-3 text-sm font-semibold text-[var(--accent)]"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            {mobileOpen ? closeMenuLabel : openMenuLabel}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile" className="border-t border-[var(--rule)] bg-[var(--paper)] px-4 py-4 xl:hidden sm:px-6">
          <div className="space-y-5">
            <p className="text-[11px] font-semibold text-[var(--accent)]">{mastheadLabel}</p>
            <div className="grid gap-2">
              {items.map((item) => {
                const isActive = isActivePath(pathname, item.href);
                return (
                  <div className="border-b border-[var(--rule)] py-3" key={item.href}>
                    <Link
                      className={cn(
                        "block text-sm font-semibold text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]",
                        isActive && "text-[var(--accent)]",
                      )}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {previewMenus[item.href]?.length ? (
                      <div className="mt-2 space-y-2 pl-3">
                        {previewMenus[item.href].map((entry) => (
                          <Link
                            className="block text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
                            href={entry.href}
                            key={entry.href}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="font-semibold text-[var(--text)]">{entry.label}</span>
                            <span className="mt-1 block text-xs leading-relaxed">{entry.description}</span>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-[var(--rule)] pt-4">
              <button
                aria-label={openPaletteLabel}
                className="inline-flex h-9 items-center border border-[var(--rule)] px-3 text-sm font-semibold text-[var(--accent)]"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenPalette();
                }}
                type="button"
              >
                {searchLabel}
              </button>
              <div aria-label={languageSwitchLabel} className="inline-flex h-9 items-center border border-[var(--rule)] bg-white/70 p-0.5">
                <button
                  className={cn(
                    "inline-flex h-full min-w-10 items-center justify-center px-2 text-[11px] font-semibold",
                    language === "en" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]",
                  )}
                  onClick={() => setLanguage("en")}
                  type="button"
                >
                  {languageEnglishLabel}
                </button>
                <button
                  className={cn(
                    "inline-flex h-full min-w-10 items-center justify-center px-2 text-[11px] font-semibold",
                    language === "fr" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]",
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
                  className="inline-flex h-9 w-9 items-center justify-center border border-[var(--rule)] text-[var(--accent)]"
                  href={instagramLink.href}
                  target="_blank"
                >
                  <InstagramIcon />
                </Link>
              ) : null}
              {tiktokLink ? (
                <Link
                  aria-label={tiktokLink.label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-[var(--rule)] text-[var(--accent)]"
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
