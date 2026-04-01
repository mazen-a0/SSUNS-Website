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
        return { platform: "instagram" as const, href: link.href, label: link.label };
      }
      if (lower.includes("tiktok")) {
        return { platform: "tiktok" as const, href: link.href, label: link.label };
      }
      return null;
    })
    .filter((item): item is { platform: "instagram" | "tiktok"; href: string; label: string } => item !== null);

  return (
    <footer className="mt-12 border-t border-white/14 bg-[rgba(13,24,92,0.98)] text-white">
      <div className="page-shell py-4 sm:py-5">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <section className="space-y-2.5 border-b border-white/12 pb-3 lg:border-b-0 lg:pb-0">
            <span className="inline-flex items-center border border-white/16 bg-[rgba(7,15,49,0.38)] px-3 py-1">
              <Image alt="SSUNS logo" height={28} src="/logos/ssuns2026-woodmark-white.png" width={122} />
            </span>
            <p className="max-w-md text-sm leading-relaxed text-[#d7e3ff]">{footerContent.motto}</p>
            <p className="max-w-md text-xs leading-relaxed text-[#b4caff]">SSUNS is a part of the non-profit organization IRSAM.</p>
          </section>

          <section>
            {footerContent.sections.map((section) => (
              <div className="mb-2.5 last:mb-0" key={section.title}>
                <p className="section-kicker text-[#b4caff]">{section.title}</p>
                <div className="mt-2 space-y-1 border-t border-white/12 pt-2">
                  {section.items.map((item) => (
                    <Link className="block text-sm text-white/90 transition-opacity hover:opacity-70" href={item.href} key={item.label}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section>
            <p className="section-kicker text-[#b4caff]">{footerContent.contactTitle}</p>
            <div className="mt-2 space-y-1 border-t border-white/12 pt-2">
              {footerContent.contacts.map((contact) => (
                <a className="block text-sm text-white/90 transition-opacity hover:opacity-70" href={`mailto:${contact}`} key={contact}>
                  {contact}
                </a>
              ))}
            </div>
            {socialItems.length ? <SocialIconRow className="mt-3" items={socialItems} variant="inverse" /> : null}
          </section>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/12 pt-2.5 text-xs leading-relaxed text-[#b4caff]">
          <p>{footerContent.closing}</p>
          <p>Copyright IRSAM | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
