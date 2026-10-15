"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CharityDonateButton } from "@/components/CharityDonateButton";
import { charityPartner } from "@/content/charityPartner";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferenceCharityPartnerPage() {
  const { conferenceContent, language } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/charity-partner");

  return (
    <div className="page-shell pt-8 sm:pt-12">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--rule)] pb-5">
        <Link className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href="/conference">
          ← {conferenceContent.title}
        </Link>
        <p className="section-kicker">SSUNS 2026 / {chapter?.title}</p>
      </header>

      <div lang="en">
        {language === "fr" ? <p className="mt-5 text-sm text-[var(--muted)]">Partner information provided in English.</p> : null}
        <section aria-labelledby="charity-title" className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col items-start justify-center py-2 lg:py-8">
            <Image alt="War Child" className="h-auto w-36 sm:w-44" height={784} priority sizes="176px" src="/logos/warchild.png" width={1500} />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#bd1037]">Our 2026 charity partner</p>
            <h1 className="font-display mt-4 text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-[var(--accent)]" id="charity-title">War Child<span className="text-[#db0a3e]">.</span></h1>
            <p className="mt-6 max-w-lg text-xl leading-relaxed text-[var(--text)] sm:text-2xl">Community-driven action.<br />Long-term impact.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a className="inline-flex min-h-12 items-center gap-5 rounded-full bg-[#bd1037] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9d0d2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd1037]" href="#support-war-child">
                Support War Child <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </a>
              <a className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href={charityPartner.website} rel="noopener noreferrer" target="_blank">
                Meet our partner <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
          <figure className="relative min-w-0">
            <div className="relative aspect-[5/4] overflow-hidden rounded-t-[5rem] rounded-b-lg sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image alt="Hands preparing vegetables together around a table" className="object-cover" fill priority sizes="(min-width: 1024px) 42vw, 100vw" src="/photos/war-child/community.webp" />
            </div>
            <figcaption className="mt-3 text-xs text-[var(--muted)]">Photography: <a className="underline underline-offset-2" href={charityPartner.website} rel="noopener noreferrer" target="_blank">War Child Canada</a></figcaption>
          </figure>
        </section>

        <section aria-labelledby="partner-story" className="grid gap-8 border-t border-[var(--rule)] py-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <figure className="self-start">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
              <Image alt="People carrying containers, with a child pushing a wheelbarrow" className="object-cover" fill sizes="(min-width: 1024px) 42vw, 100vw" src="/photos/war-child/community-water.webp" />
            </div>
            <figcaption className="mt-3 text-xs text-[var(--muted)]">Photography: <a className="underline underline-offset-2" href={charityPartner.website} rel="noopener noreferrer" target="_blank">War Child Canada</a></figcaption>
          </figure>
          <div>
            <h2 className="font-display text-3xl leading-tight text-[var(--accent)] sm:text-4xl" id="partner-story">Rooted in collaboration.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--text)]">
              {charityPartner.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <a className="mt-6 inline-flex items-center gap-3 border-b border-[var(--accent)] pb-1 font-semibold text-[var(--accent)]" href={charityPartner.website} rel="noopener noreferrer" target="_blank">
              Learn more at warchild.ca <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section aria-labelledby="support-title" className="relative overflow-hidden rounded-xl bg-[#142082] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14" id="support-war-child">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-2 bg-[#db0a3e] sm:w-3" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">SSUNS × War Child</p>
              <h2 className="font-display mt-4 max-w-lg text-4xl leading-tight sm:text-5xl" id="support-title">Support our<br />charity partner.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-white/85">Contribute through our online fundraiser for War Child.</p>
            </div>
            <CharityDonateButton />
          </div>
        </section>
      </div>
    </div>
  );
}
