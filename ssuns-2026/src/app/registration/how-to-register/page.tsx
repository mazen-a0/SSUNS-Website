"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DossierNav } from "@/components/DossierNav";
import { LiquidButton } from "@/components/LiquidButton";
import { PageHero } from "@/components/PageHero";
import { cn } from "@/lib/cn";
import { useSiteContent } from "@/lib/useSiteContent";

const visibleRegistrationHrefs = new Set(["/registration", "/registration/how-to-register", "/registration/financial-aid"]);

export default function RegistrationHowToRegisterPage() {
  const { language, registrationContent } = useSiteContent();
  const chapter = registrationContent.chapters.find((item) => item.href === "/registration/how-to-register");
  const navItems = registrationContent.chapters.filter((item) => visibleRegistrationHrefs.has(item.href));
  const isFrench = language === "fr";
  const guide = registrationContent.howToGuide;
  const [activePhase, setActivePhase] = useState(guide.phases[0]?.id ?? "");

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={registrationContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="xl:sticky xl:top-28 xl:self-start">
            <DossierNav currentHref={chapter.href} items={navItems} />
          </aside>

          <div className="space-y-8">
            <section className="overflow-hidden border border-[#23379f] bg-[var(--panel-inverse)] text-white">
              <div className="grid gap-4 px-6 py-6 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="section-kicker text-[#b4caff]">{guide.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#dce7ff]">{guide.courtesy}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Image alt="SSUNS logo" height={28} src="/logos/ssuns2026-woodmark-white.png" width={132} />
                  <span className="inline-flex items-center border border-white/16 bg-white px-3 py-2">
                    <Image alt="MUNager logo" height={26} src="/logos/munager.png" width={120} />
                  </span>
                </div>
              </div>
            </section>

            <article className="theme-panel-strong paper-grain rounded-[8px] p-8 sm:p-10 md:p-12">
              <h2 className="font-display text-4xl leading-[0.95] text-[var(--accent)] sm:text-5xl">{guide.title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--text)]">{guide.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--rule)] pt-5">
                <LiquidButton href={registrationContent.cta.href} label={registrationContent.cta.label} />
                <Link className="inline-flex items-center border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href="https://munager.com/apply-guide/" target="_blank">
                  {guide.openGuideLabel}
                </Link>
              </div>
            </article>

            <section className="theme-panel rounded-[8px] p-4 sm:p-5">
              <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
                {guide.phases.map((phase) => (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => {
                      setActivePhase(phase.id);
                      document.getElementById(phase.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={cn(
                      "border px-4 py-4 text-left transition-colors",
                      activePhase === phase.id
                        ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)]"
                        : "border-[var(--rule)] bg-[var(--panel)] hover:border-[var(--accent)]",
                    )}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                      {isFrench ? "Phase" : "Phase"} {phase.number}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--text)]">{phase.title}</p>
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              {guide.phases.map((phase, index) => (
                <article className="theme-panel-strong paper-grain scroll-mt-32 rounded-[8px] p-6 sm:p-8" id={phase.id} key={phase.id}>
                  <div className="grid gap-6 xl:grid-cols-[0.4fr_0.6fr] xl:items-start">
                    <div>
                      <p className="section-kicker">
                        {isFrench ? "Phase" : "Phase"} {phase.number}
                      </p>
                      <h2 className="font-display mt-4 text-3xl leading-[1.05] text-[var(--accent)] sm:text-4xl">{phase.title}</h2>
                      <div className="mt-6 grid gap-3">
                        {phase.steps.map((step, stepIndex) => (
                          <article className="border border-[var(--rule)] bg-[var(--panel)] p-4" key={`${phase.id}-${step.title}`}>
                            <div className="flex items-start gap-3">
                              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] border border-[var(--accent-2)] text-xs font-semibold text-[var(--accent)]">
                                {stepIndex + 1}
                              </span>
                              <div>
                                <h3 className="text-base font-semibold leading-tight text-[var(--text)]">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                    <div className="overflow-hidden border border-[var(--rule)] bg-[var(--paper)]">
                      <div className="relative aspect-video w-full">
                        <iframe
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full border-0"
                          referrerPolicy="strict-origin-when-cross-origin"
                          src={`https://www.youtube.com/embed/${phase.videoId}`}
                          title={`${guide.title} video ${index + 1}`}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="theme-panel rounded-[8px] p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-[var(--muted)]">{guide.closing}</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
