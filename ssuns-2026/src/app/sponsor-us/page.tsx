"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { DossierCarousel } from "@/components/media/DossierCarousel";
import { useSiteContent } from "@/lib/useSiteContent";

const tierStyles: Record<string, { accent: string; accentSoft: string; sheen: string }> = {
  Bronze: {
    accent: "#a96634",
    accentSoft: "rgba(169, 102, 52, 0.14)",
    sheen: "radial-gradient(circle at 20% 20%, rgba(169, 102, 52, 0.22), transparent 34%)",
  },
  Platinum: {
    accent: "#64748b",
    accentSoft: "rgba(100, 116, 139, 0.16)",
    sheen: "radial-gradient(circle at 18% 18%, rgba(148, 163, 184, 0.28), transparent 36%)",
  },
  Sapphire: {
    accent: "#1d64c8",
    accentSoft: "rgba(29, 100, 200, 0.14)",
    sheen: "radial-gradient(circle at 18% 18%, rgba(29, 100, 200, 0.24), transparent 36%)",
  },
  "Headline Sponsor": {
    accent: "#142082",
    accentSoft: "rgba(20, 32, 130, 0.16)",
    sheen: "radial-gradient(circle at 18% 18%, rgba(20, 32, 130, 0.26), transparent 38%)",
  },
};

function getTierStyle(name: string) {
  return tierStyles[name] ?? tierStyles.Bronze;
}

export default function SponsorUsPage() {
  const { homeContent, sponsorContent } = useSiteContent();
  const [activeTierName, setActiveTierName] = useState(sponsorContent.tiers[0]?.name ?? "");
  const activeTier = sponsorContent.tiers.find((tier) => tier.name === activeTierName) ?? sponsorContent.tiers[0];
  const activeTierStyle = getTierStyle(activeTier.name);
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
        <div className="paper-grain mb-6 overflow-hidden rounded-[12px] border border-[var(--rule-strong)] bg-[var(--panel-inverse)] text-white shadow-[var(--shadow-soft)]">
          <div className="grid gap-5 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="section-kicker text-[#b4caff]">Sponsorship package</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">Partner with a conference built for visibility and student leadership.</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#e6edff] sm:text-base">{sponsorContent.packageUnavailableLabel}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {sponsorContent.stats.slice(0, 2).map((stat) => (
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white" key={stat.label}>
                    {stat.value} {stat.label === "McGill staff" ? stat.label : stat.label.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
            <Link
              className="inline-flex items-center justify-center rounded-[10px] border border-white bg-white px-5 py-4 text-center text-sm font-semibold text-[var(--accent)] shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#eef3ff]"
              href={sponsorContent.packagePath}
              rel="noreferrer"
              target="_blank"
            >
              {sponsorContent.packageLabel}
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.44fr_0.56fr]">
          <DossierCarousel items={sponsorSlides} />

          <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {sponsorContent.stats.map((stat) => (
                <article className="rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] px-4 py-4" key={stat.label}>
                  <p className="section-kicker">{stat.label}</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--text)]">{stat.value}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 border-t border-[var(--rule)] pt-5">
              <p className="section-kicker">Sponsorship tiers</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[var(--accent)]">Choose the level of presence that fits your organization</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {sponsorContent.tiers.map((tier) => {
                  const isActive = tier.name === activeTier.name;
                  const tierStyle = getTierStyle(tier.name);
                  return (
                    <button
                      className="group relative overflow-hidden rounded-[10px] border px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5"
                      key={tier.name}
                      onClick={() => setActiveTierName(tier.name)}
                      style={{
                        background: isActive ? `linear-gradient(135deg, ${tierStyle.accent}, #142082)` : `linear-gradient(135deg, ${tierStyle.accentSoft}, rgba(255,255,255,0.42))`,
                        borderColor: isActive ? tierStyle.accent : "var(--rule)",
                        boxShadow: isActive ? `0 18px 40px ${tierStyle.accentSoft}` : undefined,
                        color: isActive ? "#ffffff" : "var(--accent)",
                      }}
                      type="button"
                    >
                      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ background: tierStyle.sheen }} />
                      <span className="relative flex items-start justify-between gap-3">
                        <span>
                          <span className="block text-sm font-semibold">{tier.name}</span>
                          <span className={isActive ? "mt-1 block text-xs font-semibold text-white/75" : "mt-1 block text-xs font-semibold text-[var(--muted)]"}>
                            Sponsorship tier
                          </span>
                        </span>
                        <span className="text-sm font-semibold">{tier.price}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <div
                className="relative mt-5 overflow-hidden rounded-[12px] border bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]"
                style={{ borderColor: activeTierStyle.accent, boxShadow: `0 18px 45px ${activeTierStyle.accentSoft}` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: activeTierStyle.sheen }} />
                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-2xl font-semibold leading-tight text-[var(--accent)]">{activeTier.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{activeTier.summary}</p>
                    </div>
                    <p className="rounded-full px-3 py-1.5 text-lg font-semibold text-white" style={{ backgroundColor: activeTierStyle.accent }}>
                      {activeTier.price}
                    </p>
                  </div>
                  {activeTier.benefits?.length ? (
                    <ul className="mt-4 space-y-2 border-t border-[var(--rule)] pt-4 text-sm leading-relaxed text-[var(--text)]">
                      {activeTier.benefits.map((benefit) => (
                        <li className="flex gap-2" key={benefit}>
                          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: activeTierStyle.accent }} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.64fr_0.36fr]">
          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">Visibility opportunities</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-[var(--accent)]">Ways sponsors can appear across SSUNS</h2>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {sponsorContent.visibilityOptions.map((option) => (
                  <p className="rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] px-3 py-2 text-sm font-semibold leading-relaxed text-[var(--text)]" key={option}>
                    {option}
                  </p>
                ))}
              </div>
            </article>

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
              <p className="section-kicker">Custom sponsorships</p>
              <div className="mt-4 space-y-4">
                {sponsorContent.customOptions.map((option) => (
                  <div className="border-t border-[var(--rule)] pt-4 first:border-t-0 first:pt-0" key={option.title}>
                    <p className="text-base font-semibold text-[var(--accent)]">{option.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{option.body}</p>
                  </div>
                ))}
              </div>
            </article>

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
