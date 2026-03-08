"use client";

import Image from "next/image";
import { DossierNav } from "@/components/DossierNav";
import { LiquidButton } from "@/components/LiquidButton";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function RegistrationPage() {
  const { registrationContent } = useSiteContent();

  return (
    <>
      <PageHero intro={registrationContent.intro} title={registrationContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <DossierNav currentHref="/registration" items={registrationContent.chapters} />
          </aside>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{registrationContent.sections.flow}</p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none text-[var(--accent)]">{registrationContent.sections.flow}</h2>
              <ol className="mt-6 space-y-4 border-t border-[var(--rule)] pt-5">
                {registrationContent.steps.map((step, index) => (
                  <li className="grid gap-3 sm:grid-cols-[0.08fr_0.92fr]" key={step}>
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{index + 1}</span>
                    <span className="text-sm leading-relaxed text-[var(--text)]">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-[var(--rule)] pt-5">
                <LiquidButton href={registrationContent.cta.href} label={registrationContent.cta.label} />
              </div>
            </article>

            <article className="theme-panel overflow-hidden rounded-[8px] p-3">
              {/* delegate registration portrait, 4:5, recommended 800x1000 */}
              <Image alt={registrationContent.image.alt} className="aspect-[4/5] w-full object-cover" height={1000} src={registrationContent.image.src} width={800} />
              <div className="grid gap-3 border-t border-[var(--rule)] px-3 py-4">
                <p className="section-kicker">{registrationContent.sections.pathways}</p>
                <div className="space-y-3">
                  {registrationContent.tracks.map((track) => (
                    <article className="border-t border-[var(--rule)] pt-3 first:border-t-0 first:pt-0" key={track.title}>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{track.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{track.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
