"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteContent } from "@/lib/useSiteContent";

export function SiteFooter() {
  const { footerContent } = useSiteContent();

  return (
    <footer className="mt-20 border-t border-[#25389f] bg-[var(--panel-inverse)] text-white">
      <div className="mx-auto max-w-[96rem] px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.8fr]">
          <section className="relative border border-white/14 bg-[rgba(7,14,48,0.26)] p-6">
            <Image
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-4 right-4 opacity-[0.22]"
              height={74}
              src="/graphics/ornate-frame.svg"
              width={74}
            />
            <span className="inline-flex border border-white/18 bg-[rgba(7,15,49,0.38)] px-3 py-2">
              <Image alt="SSUNS logo" height={28} src="/logos/ssuns-woodmark.png" width={108} />
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#d7e3ff]">{footerContent.motto}</p>
            <Image alt="" aria-hidden="true" className="mt-5 opacity-95 invert" height={18} src="/graphics/report-divider.svg" width={260} />
            <p className="mt-5 text-xs leading-relaxed text-[#b4caff]">{footerContent.closing}</p>
          </section>

          {footerContent.sections.map((section) => (
            <section key={section.title}>
              <p className="section-kicker text-[#b4caff]">{section.title}</p>
              <div className="mt-4 space-y-3 border-t border-white/12 pt-4">
                {section.items.map((item) => (
                  <Link className="block text-sm text-white/90 transition-opacity hover:opacity-70" href={item.href} key={item.label}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section>
            <p className="section-kicker text-[#b4caff]">{footerContent.contactTitle}</p>
            <div className="mt-4 space-y-3 border-t border-white/12 pt-4">
              {footerContent.contacts.map((contact) => (
                <a className="block text-sm text-white/90 transition-opacity hover:opacity-70" href={`mailto:${contact}`} key={contact}>
                  {contact}
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3 border-t border-white/12 pt-4">
              {footerContent.socialLinks.map((link) => (
                <Link className="text-sm text-white/90 transition-opacity hover:opacity-70" href={link.href} key={link.href} target="_blank">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
