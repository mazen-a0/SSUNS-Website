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
    <footer className="mt-20 border-t border-[#25389f] bg-[var(--panel-inverse)] text-white">
      <div className="page-shell py-7 sm:py-8">
        <div className="grid gap-6 border-t border-white/12 pt-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          <section className="space-y-4 border-b border-white/12 pb-5 lg:border-b-0 lg:pb-0">
            <span className="inline-flex items-center border border-white/16 bg-[rgba(7,15,49,0.38)] px-3 py-2">
              <Image alt="SSUNS logo" height={28} src="/logos/ssuns2026-woodmark-white.png" width={122} />
            </span>
            <p className="max-w-md text-sm leading-relaxed text-[#d7e3ff]">{footerContent.motto}</p>
            <p className="max-w-md text-xs leading-relaxed text-[#b4caff]">SSUNS is a part of the non-profit organization IRSAM.</p>
          </section>

          <section>
            {footerContent.sections.map((section) => (
              <div className="mb-4 last:mb-0" key={section.title}>
                <p className="section-kicker text-[#b4caff]">{section.title}</p>
                <div className="mt-3 space-y-2 border-t border-white/12 pt-3">
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
            <div className="mt-3 space-y-2 border-t border-white/12 pt-3">
              {footerContent.contacts.map((contact) => (
                <a className="block text-sm text-white/90 transition-opacity hover:opacity-70" href={`mailto:${contact}`} key={contact}>
                  {contact}
                </a>
              ))}
            </div>
            {socialItems.length ? <SocialIconRow className="mt-5" items={socialItems} variant="inverse" /> : null}
          </section>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/12 pt-4 text-xs leading-relaxed text-[#b4caff]">
          <p>{footerContent.closing}</p>
          <p>Copyright IRSAM | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
