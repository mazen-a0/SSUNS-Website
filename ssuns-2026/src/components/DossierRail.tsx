"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { useSiteContent } from "@/lib/useSiteContent";

type DossierRailItem = {
  href: string;
  title: string;
  summary: string;
};

type DossierRailProps = {
  items: DossierRailItem[];
  currentHref: string;
  variant?: "rail" | "strip";
  contextTitle?: string;
  contextSummary?: string;
};

function isActive(currentHref: string, href: string) {
  return currentHref === href;
}

function isHashLink(href: string) {
  return href.startsWith("#");
}

export function DossierRail({ items, currentHref, variant = "rail", contextTitle, contextSummary }: DossierRailProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { aboutContent, registrationContent, uiText } = useSiteContent();
  const activeItem = useMemo(
    () => items.find((item) => isActive(currentHref, item.href)) ?? items[0],
    [currentHref, items],
  );

  const summary = contextSummary ?? activeItem?.summary ?? "";
  const title = contextTitle ?? activeItem?.title ?? "";
  const faqHref = aboutContent.chapters.find((chapter) => chapter.href === "/about/faqs")?.href ?? "/about/faqs";
  const quickLinks = [
    { label: uiText.railRegisterLabel, href: registrationContent.cta.href, external: true },
    { label: uiText.railContactLabel, href: "/contact", external: false },
    { label: uiText.railFaqLabel, href: faqHref, external: false },
  ];

  if (variant === "strip") {
    return (
      <>
        <div className="border-y border-[var(--rule)] bg-[rgba(255,255,255,0.6)] px-0 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--rule)] pb-3">
            <div>
              <p className="section-kicker">{uiText.railIndexLabel}</p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{summary}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                className="border border-[var(--rule)] px-3 py-1.5 text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)]"
                onClick={() => window.dispatchEvent(new CustomEvent("ssuns:open-search"))}
                type="button"
              >
                {uiText.searchLabel}
              </button>
              {quickLinks.map((link) => (
                <Link
                  className="border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]"
                  href={link.href}
                  key={link.label}
                  target={link.external ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {items.map((item) => {
              const active = isActive(currentHref, item.href);
              return isHashLink(item.href) ? (
                <a
                  className={cn(
                    "inline-flex items-center border px-3 py-1.5 text-sm font-semibold transition-colors duration-200",
                    active
                      ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)] text-[var(--accent)]"
                      : "border-[var(--rule)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  className={cn(
                    "inline-flex items-center border px-3 py-1.5 text-sm font-semibold transition-colors duration-200",
                    active
                      ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)] text-[var(--accent)]"
                      : "border-[var(--rule)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="theme-panel-strong paper-grain hidden rounded-[8px] p-4 xl:block">
        <section>
          <p className="section-kicker">{uiText.railIndexLabel}</p>
          <div className="mt-3 space-y-2 border-t border-[var(--rule)] pt-3">
            {items.map((item) => {
              const active = isActive(currentHref, item.href);
              const itemClass = cn(
                "block border-l-2 px-4 py-3 transition-colors duration-200",
                active
                  ? "border-[var(--accent)] bg-[rgba(20,32,130,0.05)]"
                  : "border-[var(--rule)] hover:bg-[rgba(20,32,130,0.03)]",
              );

              return isHashLink(item.href) ? (
                <a className={itemClass} href={item.href} key={item.href}>
                  <p className={cn("text-sm font-semibold", active ? "text-[var(--accent)]" : "text-[var(--text)]")}>{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
                </a>
              ) : (
                <Link className={itemClass} href={item.href} key={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}>
                  <p className={cn("text-sm font-semibold", active ? "text-[var(--accent)]" : "text-[var(--text)]")}>{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-5 border-t border-[var(--rule)] pt-4">
          <p className="section-kicker">{uiText.railContextLabel}</p>
          <div className="mt-3 space-y-3">
            <div>
              <p className="text-[11px] font-semibold text-[var(--muted)]">{uiText.railCurrentLabel}</p>
              <p className="mt-2 text-lg font-semibold leading-tight text-[var(--accent)]">{title}</p>
            </div>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{summary}</p>
          </div>
        </section>

        <section className="mt-5 border-t border-[var(--rule)] pt-4">
          <p className="section-kicker">{uiText.railQuickLinksLabel}</p>
          <div className="mt-3 grid gap-2">
            <button
              className="border border-[var(--rule)] px-3 py-2 text-left text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)]"
              onClick={() => window.dispatchEvent(new CustomEvent("ssuns:open-search"))}
              type="button"
            >
              {uiText.searchLabel}
            </button>
            {quickLinks.map((link) => (
              <Link
                className="border border-[var(--rule)] px-3 py-2 text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)]"
                href={link.href}
                key={link.label}
                target={link.external ? "_blank" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="theme-panel-strong paper-grain rounded-[8px] p-4 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="section-kicker">{uiText.railCurrentLabel}</p>
            <p className="mt-2 truncate text-sm font-semibold text-[var(--accent)]">{title}</p>
          </div>
          <button
            className="border border-[var(--rule)] px-3 py-2 text-sm font-semibold text-[var(--accent)]"
            onClick={() => setMobileOpen(true)}
            type="button"
          >
            {uiText.railOpenLabel}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="absolute inset-0 bg-[rgba(8,12,28,0.4)]" onClick={() => setMobileOpen(false)} type="button" />
          <div className="theme-panel-strong paper-grain absolute inset-y-0 left-0 w-[min(22rem,88vw)] overflow-y-auto border-r border-[var(--rule)] p-5 shadow-[var(--shadow-strong)]">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--rule)] pb-4">
              <p className="section-kicker">{uiText.railIndexLabel}</p>
              <button className="text-sm font-semibold text-[var(--accent)]" onClick={() => setMobileOpen(false)} type="button">
                {uiText.railCloseLabel}
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {items.map((item) => {
                const active = isActive(currentHref, item.href);
                return isHashLink(item.href) ? (
                  <a
                    className={cn(
                      "block border-l-2 px-4 py-3",
                      active ? "border-[var(--accent)] bg-[rgba(20,32,130,0.05)]" : "border-[var(--rule)]",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    <p className={cn("text-sm font-semibold", active ? "text-[var(--accent)]" : "text-[var(--text)]")}>{item.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
                  </a>
                ) : (
                  <Link
                    className={cn(
                      "block border-l-2 px-4 py-3",
                      active ? "border-[var(--accent)] bg-[rgba(20,32,130,0.05)]" : "border-[var(--rule)]",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setMobileOpen(false)}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <p className={cn("text-sm font-semibold", active ? "text-[var(--accent)]" : "text-[var(--text)]")}>{item.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
                  </Link>
                );
              })}
            </div>
            <div className="mt-5 border-t border-[var(--rule)] pt-4">
              <p className="section-kicker">{uiText.railQuickLinksLabel}</p>
              <div className="mt-3 grid gap-2">
                <button
                  className="border border-[var(--rule)] px-3 py-2 text-left text-sm font-semibold text-[var(--accent)]"
                  onClick={() => {
                    setMobileOpen(false);
                    window.dispatchEvent(new CustomEvent("ssuns:open-search"));
                  }}
                  type="button"
                >
                  {uiText.searchLabel}
                </button>
                {quickLinks.map((link) => (
                  <Link
                    className="border border-[var(--rule)] px-3 py-2 text-sm font-semibold text-[var(--accent)]"
                    href={link.href}
                    key={link.label}
                    onClick={() => setMobileOpen(false)}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
