"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ContactPage() {
  const { contactContent } = useSiteContent();

  return (
    <>
      <PageHero intro={contactContent.intro} title={contactContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="theme-panel-strong paper-grain rounded-[10px] p-6 sm:p-8">
            <p className="section-kicker">{contactContent.sections.office}</p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-none text-[var(--accent)]">{contactContent.sections.office}</h2>
            <div className="mt-6 overflow-hidden border border-[var(--rule)]">
              {contactContent.items.map((item) => (
                <article className="grid gap-3 border-t border-[var(--rule)] px-4 py-4 first:border-t-0 md:grid-cols-[0.28fr_0.72fr]" key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{item.label}</p>
                  <p className="text-sm leading-relaxed text-[var(--text)] sm:text-base">{item.value}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">{contactContent.officeBlurb}</p>
          </article>

          <div className="space-y-5">
            <article className="theme-panel overflow-hidden rounded-[10px] p-3">
              {/* Montreal streetscape near conference district, 16:9, recommended 1600x900 */}
              <Image
                alt={contactContent.image.alt}
                className="aspect-[16/9] w-full object-cover"
                height={900}
                src={contactContent.image.src}
                width={1600}
              />
            </article>
            <article className="bg-[var(--panel-inverse)] p-6 text-white sm:p-7">
              <p className="section-kicker text-[#afcbff]">{contactContent.sections.responseWindow}</p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-none">{contactContent.officeHours.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#e4eeff]">{contactContent.officeHours.body}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
