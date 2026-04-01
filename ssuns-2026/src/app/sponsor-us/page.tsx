"use client";

import { PageHero } from "@/components/PageHero";
import { DossierCarousel } from "@/components/media/DossierCarousel";
import { useSiteContent } from "@/lib/useSiteContent";

export default function SponsorUsPage() {
  const { homeContent, sponsorContent } = useSiteContent();
  const sponsorSlides = homeContent.gallery.items.slice(1, 4).map((item) => ({
    id: item.id,
    alt: item.alt,
    caption: item.caption,
    eyebrow: item.title,
    src: item.src,
  }));

  return (
    <>
      <PageHero intro={sponsorContent.intro} title={sponsorContent.title} />
      <section className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[0.44fr_0.56fr]">
          <DossierCarousel items={sponsorSlides} />

          <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {sponsorContent.stats.map((stat) => (
                <article className="border border-[var(--rule)] px-4 py-4" key={stat.label}>
                  <p className="section-kicker">{stat.label}</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--text)]">{stat.value}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 border-t border-[var(--rule)] pt-5">
              <p className="section-kicker">{sponsorContent.packageLabel}</p>
              <a className="mt-3 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href={sponsorContent.packagePath}>
                {sponsorContent.packageLabel}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{sponsorContent.packageUnavailableLabel}</p>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.64fr_0.36fr]">
          <div className="space-y-6">
            {sponsorContent.reasons.map((reason) => (
                <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8" key={reason.title}>
                  <p className="section-kicker">{sponsorContent.title}</p>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight text-[var(--accent)]">{reason.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">{reason.body}</p>
                </article>
              ))}
          </div>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{sponsorContent.supportersTitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{sponsorContent.supportersNote}</p>
            </article>

            <article className="bg-[var(--panel-inverse)] p-6 text-white sm:p-8">
              <p className="section-kicker text-[#b4caff]">{sponsorContent.contactTitle}</p>
              <a className="mt-4 block text-lg font-semibold text-white" href={`mailto:${sponsorContent.contactEmail}`}>
                {sponsorContent.contactEmail}
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
