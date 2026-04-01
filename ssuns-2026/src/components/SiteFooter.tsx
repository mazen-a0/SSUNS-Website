"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialIconRow } from "@/components/ui/social-icon";
import { useSiteContent } from "@/lib/useSiteContent";

export function SiteFooter() {
  const { footerContent } = useSiteContent();
  const socialItems = footerContent.socialLinks
    .map((link) => {
      const lower = link.label.toLowerCase();
      if (lower.includes("instagram")) {
        return {
          platform: "instagram" as const,
          href: link.href,
          label: link.label,
          className: "rounded-lg border-white/0 bg-white/5 text-white/90 ring-1 ring-white/10 hover:border-white/0 hover:bg-white/10 hover:text-white",
        };
      }
      if (lower.includes("linkedin")) {
        return {
          platform: "linkedin" as const,
          href: link.href,
          label: link.label,
          className: "rounded-lg border-white/0 bg-white/5 text-white/90 ring-1 ring-white/10 hover:border-white/0 hover:bg-white/10 hover:text-white",
        };
      }
      if (lower.includes("tiktok")) {
        return {
          platform: "tiktok" as const,
          href: link.href,
          label: link.label,
          className: "rounded-lg border-white/0 bg-white/5 text-white/90 ring-1 ring-white/10 hover:border-white/0 hover:bg-white/10 hover:text-white",
        };
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
        className: string;
      } => item !== null,
    );
  const conferenceSection = footerContent.sections[0];
  const preparationSection = footerContent.sections[1];

  return (
    <footer className="mt-12 border-t border-white/10 bg-[linear-gradient(180deg,#142082_0%,#101a64_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 lg:gap-x-14">
          <section>
            <span className="inline-flex items-center">
              <Image alt="SSUNS logo" height={32} src="/logos/ssuns2026-woodmark-white.png" width={140} />
            </span>
            <div className="mt-5 h-px w-16 bg-[linear-gradient(90deg,rgba(76,158,255,0.95),rgba(255,255,255,0.2))]" />
            <p className="mt-5 max-w-md font-accent text-[1.55rem] leading-tight text-[#f4f7ff]">{footerContent.motto}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/90">SSUNS is a part of the non-profit organization IRSAM.</p>
          </section>

          <section>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{conferenceSection.title}</p>
                <div className="mt-4 h-px w-full bg-white/10" />
                <nav className="mt-4 space-y-3" aria-label={conferenceSection.title}>
                  {conferenceSection.items.map((item) => (
                    <Link
                      className="block text-base leading-7 text-white/90 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#142082]"
                      href={item.href}
                      key={item.label}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{preparationSection.title}</p>
                <div className="mt-4 h-px w-full bg-white/10" />
                <nav className="mt-4 space-y-3" aria-label={preparationSection.title}>
                  {preparationSection.items.map((item) => (
                    <Link
                      className="block text-base leading-7 text-white/90 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#142082]"
                      href={item.href}
                      key={item.label}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{footerContent.contactTitle}</p>
            <div className="mt-4 h-px w-full bg-white/10" />
            <div className="mt-4 space-y-3">
              {footerContent.contacts.map((contact) => (
                <a
                  className="block text-base leading-7 text-white/90 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#142082]"
                  href={`mailto:${contact}`}
                  key={contact}
                >
                  {contact}
                </a>
              ))}
            </div>
            {socialItems.length ? (
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Social</p>
                <SocialIconRow
                  className="mt-4 gap-3"
                  items={socialItems}
                  variant="inverse"
                />
              </div>
            ) : null}
          </section>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 sm:pt-5">
          <div className="flex flex-col gap-2 text-xs leading-relaxed text-white/60 md:flex-row md:items-start md:justify-between">
            <p className="max-w-3xl">{footerContent.closing}</p>
            <p className="shrink-0">Copyright IRSAM | All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
