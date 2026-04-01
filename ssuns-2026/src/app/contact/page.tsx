"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SocialIconRow } from "@/components/ui/social-icon";
import { DossierFigure } from "@/components/media/DossierFigure";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ContactPage() {
  const { contactContent, footerContent } = useSiteContent();
  const socialItems = footerContent.socialLinks
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
    .filter((item): item is { platform: "instagram" | "linkedin" | "tiktok"; href: string; label: string } => item !== null);

  return (
    <>
      <PageHero intro={contactContent.intro} title={contactContent.title} />
      <section className="page-shell">
        <div className="grid gap-8 xl:grid-cols-[0.62fr_0.38fr]">
          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{contactContent.sections.general}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--accent)]">{contactContent.title}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">{contactContent.lead}</p>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {contactContent.contacts.map((contact) => (
                  <article className="rounded-[8px] border border-[var(--rule)] bg-white px-5 py-5 shadow-[var(--shadow-soft)]" key={contact.email}>
                    <p className="section-kicker">{contact.role}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-[var(--heading)]">{contact.name}</h3>
                    <a
                      className="mt-5 block break-all text-base font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-2)]"
                      href={`mailto:${contact.email}`}
                    >
                      {contact.email}
                    </a>
                    {contact.phone ? (
                      <a
                        className="mt-2 block text-sm leading-relaxed text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                        href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                      >
                        {contact.phone}
                      </a>
                    ) : null}
                    <a
                      className="mt-6 inline-flex items-center justify-center rounded-[8px] border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1b2ea3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      href={`mailto:${contact.email}`}
                    >
                      {contact.buttonLabel}
                    </a>
                  </article>
                ))}
              </div>
            </article>

            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{contactContent.sections.secretariat}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">{contactContent.secretariatNote}</p>
              <Link
                className="mt-5 inline-flex items-center justify-center rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] px-4 py-2.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                href={contactContent.secretariatCta.href}
              >
                {contactContent.secretariatCta.label}
              </Link>
            </article>
          </div>

          <div className="space-y-6">
            <DossierFigure alt={contactContent.image.alt} ratio="16/9" src={contactContent.image.src} />

            <article className="bg-[var(--panel-inverse)] p-6 text-white sm:p-8">
              <p className="section-kicker text-[#b4caff]">{contactContent.sections.responseWindow}</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight">{contactContent.officeHours.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#e4eeff] sm:text-base">{contactContent.officeHours.body}</p>
            </article>

            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{contactContent.sections.social}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">{contactContent.socialNote}</p>
              {socialItems.length ? <SocialIconRow className="mt-5" items={socialItems} /> : null}
              <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">{contactContent.socialPrompt}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
