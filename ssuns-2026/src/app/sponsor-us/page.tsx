"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { DossierCarousel } from "@/components/media/DossierCarousel";
import { Reveal } from "@/components/motion/Reveal";
import type { Sponsor } from "@/content/en/sponsor";
import { useSiteContent } from "@/lib/useSiteContent";

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]";
const textLink = `inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent)] underline underline-offset-4 decoration-[var(--accent-2)] hover:decoration-current ${focusStyle}`;
const sectionHeading = "font-display text-3xl leading-tight text-[var(--accent)] sm:text-4xl";

function SponsorLogo({ sponsor, featured = false }: { sponsor: Sponsor; featured?: boolean }) {
  return <Image
    alt={sponsor.logoAlt}
    className={featured ? "h-auto max-h-36 w-full max-w-md object-contain" : "h-auto max-h-32 w-full max-w-64 object-contain"}
    height={sponsor.logoHeight}
    priority={featured}
    sizes={featured ? "(min-width: 768px) 448px, 80vw" : "(min-width: 640px) 256px, 80vw"}
    src={sponsor.logoSrc}
    width={sponsor.logoWidth}
  />;
}

export default function SponsorUsPage() {
  const { homeContent, sponsorContent, language } = useSiteContent();
  const { ui } = sponsorContent;
  const [activeTierIndex, setActiveTierIndex] = useState(0);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const platinumSponsors = sponsorContent.sponsors.filter((sponsor) => sponsor.tier === "Platinum");
  const bronzeSponsors = sponsorContent.sponsors.filter((sponsor) => sponsor.tier === "Bronze");
  const sponsorSlides = homeContent.gallery.items.slice(1, 4).map((item) => ({
    id: item.id, alt: item.alt, caption: item.caption, eyebrow: item.title, src: item.src,
  }));

  async function copyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  function onTierKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    const count = sponsorContent.tiers.length;
    if (event.key === "ArrowRight") next = (index + 1) % count;
    else if (event.key === "ArrowLeft") next = (index + count - 1) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;
    else return;
    event.preventDefault();
    setActiveTierIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="page-shell pt-6 sm:pt-8" lang={language}>
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--rule)] pb-4">
        <p className="section-kicker">SSUNS 2026 / {sponsorContent.title}</p>
        <a className={textLink} href="#partner-with-ssuns">{ui.becomeSponsor} <span aria-hidden="true" className="ml-2">↓</span></a>
      </header>

      <section aria-labelledby="sponsors-title" className="grid gap-5 py-8 sm:py-10 lg:grid-cols-2 lg:items-start lg:gap-x-14">
        <h1 className="font-display text-[clamp(2.45rem,12vw,6.5rem)] leading-none tracking-tight text-[var(--accent)] lg:col-span-2" id="sponsors-title">{sponsorContent.title}</h1>
        <h2 className="max-w-lg text-xl leading-8 text-[var(--accent)] sm:text-2xl">{sponsorContent.sponsorsHeading}</h2>
        <p className="max-w-xl text-base leading-7 text-[var(--muted)] lg:pb-1">{sponsorContent.sponsorsIntro}</p>
      </section>

      <section aria-labelledby="platinum-title">
        <h2 className="section-kicker mb-4" id="platinum-title">{ui.platinum}</h2>
        {platinumSponsors.map((sponsor) => <article className="grid overflow-hidden rounded-lg border border-[var(--rule)] md:grid-cols-[1.15fr_0.85fr]" id={`sponsor-${sponsor.id}`} key={sponsor.id} style={{ scrollMarginTop: "calc(var(--site-sticky-top) + 2rem)" }}>
          <a aria-label={`${sponsor.name} — ${sponsorContent.sponsorVisitLabel}`} className={`flex min-h-56 items-center justify-center bg-white px-7 py-12 sm:px-12 md:min-h-72 ${focusStyle} focus-visible:-outline-offset-4`} href={sponsor.href} rel="noopener noreferrer" target="_blank"><SponsorLogo featured sponsor={sponsor} /></a>
          <div className="flex flex-col items-start justify-center bg-[var(--accent)] px-6 py-7 text-white sm:px-9 sm:py-9">
            <h3 className="text-base font-semibold text-white/80">{sponsor.name}</h3>
            {sponsor.offer ? <>
              <p className="font-display mt-2 text-[clamp(2.5rem,5vw,4rem)] leading-tight">{sponsor.offer.percentOff}{ui.discountSuffix}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/25 pt-4">
                <p className="text-sm text-white/80">{ui.codeLabel} <strong className="ml-2 select-all text-lg tracking-wide text-white">{sponsor.offer.code}</strong></p>
                <button className="min-h-11 text-xs font-semibold underline underline-offset-4 hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" onClick={() => copyCode(sponsor.offer!.code)} type="button">{copyState === "copied" ? ui.copied : ui.copyCode}</button>
              </div>
              <p aria-live="polite" className={copyState === "failed" ? "text-xs leading-5 text-white/85" : "sr-only"}>{copyState === "failed" ? ui.copyFailed : copyState === "copied" ? `${ui.copied}: ${sponsor.offer.code}` : ""}</p>
            </> : null}
            <a className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline underline-offset-4 hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href={sponsor.href} rel="noopener noreferrer" target="_blank">{sponsorContent.sponsorVisitLabel}<span aria-hidden="true">↗</span></a>
          </div>
        </article>)}
      </section>

      <section aria-labelledby="bronze-title" className="py-8 sm:py-10">
        <h2 className="section-kicker mb-4" id="bronze-title">{ui.bronze}</h2>
        <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2 xl:grid-cols-4">
          {bronzeSponsors.map((sponsor) => <article className="flex min-w-0 flex-col" id={`sponsor-${sponsor.id}`} key={sponsor.id} style={{ scrollMarginTop: "calc(var(--site-sticky-top) + 2rem)" }}>
            <a aria-label={`${sponsor.name} — ${sponsorContent.sponsorVisitLabel}`} className={`flex h-44 items-center justify-center rounded-md border border-[var(--rule)] bg-white p-5 transition-colors hover:border-[var(--accent)] motion-reduce:transition-none ${focusStyle}`} href={sponsor.href} rel="noopener noreferrer" target="_blank"><SponsorLogo sponsor={sponsor} /></a>
            <h3 className="mt-4 text-base font-semibold leading-6 text-[var(--accent)]">{sponsor.name}</h3>
            {sponsor.description ? <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{sponsor.description}</p> : null}
            <a className={`${textLink} mt-2 self-start`} href={sponsor.href} rel="noopener noreferrer" target="_blank">{sponsorContent.sponsorVisitLabel}<span aria-hidden="true" className="ml-2">↗</span></a>
          </article>)}
        </div>
      </section>

      <section aria-labelledby="partner-title" className="border-t border-[var(--rule)] py-8 sm:py-10" id="partner-with-ssuns" style={{ scrollMarginTop: "calc(var(--site-sticky-top) + 2rem)" }}>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-14">
          <h2 className={sectionHeading} id="partner-title">{ui.partnerHeading}</h2>
          <p className="max-w-xl text-base leading-7 text-[var(--text)]">{sponsorContent.intro}</p>
        </div>
        <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-[var(--rule)] py-6 md:grid-cols-3 xl:grid-cols-5">
          {sponsorContent.stats.map((stat) => <div key={stat.label}>
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{stat.label}</dt>
            <dd className="mt-2 text-lg font-semibold leading-7 text-[var(--accent)]">{stat.value}</dd>
          </div>)}
        </dl>
        <div className="mt-7 grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div className="space-y-5">
            {sponsorContent.reasons.map((reason) => <Reveal key={reason.title}>
              <h3 className="text-lg font-semibold text-[var(--accent)]">{reason.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">{reason.body}</p>
            </Reveal>)}
          </div>
          <DossierCarousel className="self-start" items={sponsorSlides} />
        </div>
      </section>

      <section aria-labelledby="tiers-title" className="border-t border-[var(--rule)] py-8 sm:py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className={sectionHeading} id="tiers-title">{ui.tiersHeading}</h2>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">{ui.tiersIntro}</p>
        </div>
        <div aria-labelledby="tiers-title" className="grid grid-cols-2 border-b border-[var(--rule)] sm:grid-cols-4" role="tablist">
          {sponsorContent.tiers.map((tier, index) => <button
            aria-controls={`sponsorship-panel-${index}`}
            aria-selected={activeTierIndex === index}
            className={`min-h-24 border-b-2 px-3 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-5 ${activeTierIndex === index ? "border-[var(--accent)] bg-[var(--panel)] text-[var(--accent)]" : "border-transparent text-[var(--muted)] hover:text-[var(--accent)]"}`}
            id={`sponsorship-tab-${index}`}
            key={index}
            onClick={() => setActiveTierIndex(index)}
            onKeyDown={(event) => onTierKeyDown(event, index)}
            ref={(node) => { tabRefs.current[index] = node; }}
            role="tab"
            tabIndex={activeTierIndex === index ? 0 : -1}
            type="button"
          ><span className="block text-sm font-semibold">{tier.name}</span><span className="font-display mt-1 block text-2xl">{tier.price}</span></button>)}
        </div>
        {sponsorContent.tiers.map((tier, index) => <div aria-labelledby={`sponsorship-tab-${index}`} className={activeTierIndex === index ? `grid gap-5 py-6 lg:grid-cols-[0.4fr_0.6fr] lg:gap-12 ${focusStyle}` : "hidden"} hidden={activeTierIndex !== index} id={`sponsorship-panel-${index}`} key={index} role="tabpanel" tabIndex={0}>
          <h3 className="font-display text-2xl leading-tight text-[var(--accent)] sm:text-3xl">{tier.name}</h3>
          <div>
            <p className="max-w-2xl text-base leading-7 text-[var(--text)]">{tier.summary}</p>
            {tier.benefits?.length ? <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--muted)] marker:text-[var(--accent)]">{tier.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul> : null}
          </div>
        </div>)}
        <aside className="mt-2 grid gap-5 rounded-lg bg-[var(--accent)] p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl">{ui.packageHeading}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">{sponsorContent.packageUnavailableLabel}</p>
          </div>
          <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[#e4eeff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none" href={sponsorContent.packagePath} rel="noopener noreferrer" target="_blank">{sponsorContent.packageLabel}</a>
        </aside>
      </section>

      <section aria-labelledby="visibility-title" className="grid gap-7 border-t border-[var(--rule)] py-8 sm:py-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-12">
        <div>
          <p className="section-kicker">{ui.visibilityHeading}</p>
          <h2 className={`${sectionHeading} mt-3 max-w-md`} id="visibility-title">{ui.visibilityIntro}</h2>
        </div>
        <ul className="grid gap-x-8 self-start sm:grid-cols-2">
          {sponsorContent.visibilityOptions.map((option) => <li className="border-b border-[var(--rule)] py-3 text-sm leading-6 text-[var(--text)]" key={option}>{option}</li>)}
        </ul>
      </section>

      <section aria-labelledby="custom-title" className="border-t border-[var(--rule)] py-8 sm:py-10">
        <h2 className={sectionHeading} id="custom-title">{ui.customHeading}</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3 lg:gap-9">
          {sponsorContent.customOptions.map((option) => <article className="border-t border-[var(--rule)] pt-4" key={option.title}>
            <h3 className="text-base font-semibold text-[var(--accent)]">{option.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{option.body}</p>
          </article>)}
        </div>
      </section>

      <footer className="grid gap-6 border-t border-[var(--rule)] pt-7 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className="section-kicker">{sponsorContent.supportersTitle}</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--muted)]">{sponsorContent.supportersNote}</p>
        </div>
        <div className="lg:justify-self-end">
          <h2 className="section-kicker">{sponsorContent.contactTitle}</h2>
          <a className={`${textLink} mt-2 text-lg`} href={`mailto:${sponsorContent.contactEmail}`}>{sponsorContent.contactEmail}<span aria-hidden="true" className="ml-3">↗</span></a>
        </div>
      </footer>
    </div>
  );
}
