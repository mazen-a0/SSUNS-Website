"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { ListservSignupForm } from "@/components/ListservSignupForm";
import { LiquidButton } from "@/components/LiquidButton";
import { DossierFigure } from "@/components/media/DossierFigure";
import { PageHero } from "@/components/PageHero";
import { PublicVideoPanel } from "@/components/PublicVideoPanel";
import { RegistrationTimeline } from "@/components/RegistrationTimeline";
import { useSiteContent } from "@/lib/useSiteContent";

export default function RegistrationPage() {
  const { registrationContent } = useSiteContent();

  return (
    <>
      <PageHero intro={registrationContent.intro} title={registrationContent.title} />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref="/registration" items={registrationContent.chapters} />
          </aside>

          <div className="space-y-8">
            <article className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-6 py-7 text-white sm:px-8">
              <div className="grid gap-4 md:grid-cols-[0.58fr_0.42fr] md:items-end">
                <div>
                  <p className="section-kicker text-[#b4caff]">{registrationContent.sections.currentTier}</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight">{registrationContent.currentTier.label}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#e4eeff]">{registrationContent.currentTier.detail}</p>
                </div>
                <div className="grid gap-3 border-l border-white/14 pl-0 md:pl-5">
                  {registrationContent.timeline.map((item) => (
                    <article key={item.label}>
                      <p className="text-xs font-semibold text-[#b4caff]">{item.label}</p>
                      <p className="mt-1 text-sm text-[#eef4ff]">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </article>

            <RegistrationTimeline
              financialAidDeadlines={registrationContent.financialAidDeadlines}
              stages={registrationContent.pricingTimeline}
              text={registrationContent.pricingTimelineText}
            />

            <div className="grid gap-8 xl:grid-cols-[0.52fr_0.48fr]">
              <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
                <p className="section-kicker">{registrationContent.letter.label}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--accent)]">{registrationContent.letter.title}</h2>
                <div className="mt-5 space-y-4 border-t border-[var(--rule)] pt-5 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                  {registrationContent.letter.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 border-t border-[var(--rule)] pt-4">
                  <p className="font-accent text-2xl text-[var(--accent)]">{registrationContent.letter.signature}</p>
                  <p className="mt-2 text-xs font-semibold text-[var(--muted)]">{registrationContent.letter.role}</p>
                </div>
                <div className="mt-6 border-t border-[var(--rule)] pt-5">
                  <p className="section-kicker">{registrationContent.sections.listserv}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{registrationContent.listserv.body}</p>
                  <div className="mt-4">
                    <ListservSignupForm fallbackEmail="schools@ssuns.org" text={registrationContent.listservForm} />
                  </div>
                </div>
              </article>

              <div className="space-y-8">
                <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
                  <p className="section-kicker">{registrationContent.sections.flow}</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--accent)]">{registrationContent.sections.flow}</h2>
                  <ol className="mt-6 space-y-4 border-t border-[var(--rule)] pt-5">
                    {registrationContent.steps.map((step, index) => (
                      <li className="grid gap-3 sm:grid-cols-[0.08fr_0.92fr]" key={step}>
                        <span className="text-sm font-semibold tracking-[0.04em] text-[var(--accent)]">{index + 1}</span>
                        <span className="text-sm leading-relaxed text-[var(--text)]">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-[var(--rule)] pt-5">
                    <LiquidButton href={registrationContent.cta.href} label={registrationContent.cta.label} />
                    <Link className="border-b border-[var(--accent-2)] pb-1 text-sm font-semibold tracking-[0.02em] text-[var(--accent)]" href="/registration/financial-aid">
                      {registrationContent.chapters.find((chapter) => chapter.href === "/registration/financial-aid")?.title}
                    </Link>
                  </div>
                </article>

                <PublicVideoPanel
                  fallbackSrc={registrationContent.munagerVideo.fallbackSrc}
                  poster={registrationContent.munagerVideo.poster}
                  src={registrationContent.munagerVideo.src}
                  title={registrationContent.munagerVideo.title}
                  unavailableLabel={registrationContent.munagerVideo.unavailableLabel}
                />

                <DossierFigure alt={registrationContent.image.alt} ratio="4/5" src={registrationContent.image.src} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
