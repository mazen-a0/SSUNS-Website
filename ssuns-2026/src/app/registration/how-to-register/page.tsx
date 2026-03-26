"use client";

import Image from "next/image";
import { DossierNav } from "@/components/DossierNav";
import { LiquidButton } from "@/components/LiquidButton";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

const howToVideoEmbeds = [
  "https://www.youtube.com/embed/PrCFLMbu7Ug?si=vC7Bkhkf2_tEsC8j",
  "https://www.youtube.com/embed/awAjt0Lnysk?si=wJnsgQJ91dqfgLjD",
  "https://www.youtube.com/embed/AMVFFxxtj_Y?si=IdEiZlkJZmfE1XHv",
  "https://www.youtube.com/embed/SxczU3Nkbxw?si=tqbizm445wZnmrgt",
];

const visibleRegistrationHrefs = new Set(["/registration", "/registration/how-to-register", "/registration/financial-aid"]);

export default function RegistrationHowToRegisterPage() {
  const { registrationContent } = useSiteContent();
  const chapter = registrationContent.chapters.find((item) => item.href === "/registration/how-to-register");
  const navItems = registrationContent.chapters.filter((item) => visibleRegistrationHrefs.has(item.href));
  const isFrench = registrationContent.title === "Inscription";

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={registrationContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] xl:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref={chapter.href} items={navItems} />
          </aside>

          <div className="space-y-8">
            <section className="overflow-hidden border border-[#23379f] bg-[var(--panel-inverse)] text-white">
              <div className="grid gap-4 px-6 py-6 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="section-kicker text-[#b4caff]">{chapter.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#dce7ff]">
                    {isFrench ? "Avec l’aimable autorisation de MUNager" : "Courtesy of MUNager"}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Image alt="SSUNS logo" height={28} src="/logos/ssuns2026-woodmark-white.png" width={132} />
                  <span className="inline-flex items-center border border-white/16 bg-white px-3 py-2">
                    <Image alt="MUNager logo" height={26} src="/logos/munager.png" width={120} />
                  </span>
                </div>
              </div>
            </section>

            <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
              <div className="space-y-6 body-copy">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 border-t border-[var(--rule)] pt-5">
                <LiquidButton href={registrationContent.cta.href} label={registrationContent.cta.label} />
              </div>
            </article>

            <section className="space-y-5">
              {registrationContent.steps.slice(0, 4).map((step, index) => (
                <article className="theme-panel-strong paper-grain p-6 sm:p-8" key={step}>
                  <div className="grid gap-6 xl:grid-cols-[0.42fr_0.58fr] xl:items-start">
                    <div>
                      <p className="section-kicker">{isFrench ? `Étape ${index + 1}` : `Step ${index + 1}`}</p>
                      <h2 className="mt-4 text-3xl font-semibold leading-[1.05] text-[var(--accent)] sm:text-4xl">{step}</h2>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{isFrench ? "À venir." : "Coming soon."}</p>
                    </div>
                    <div className="overflow-hidden border border-[var(--rule)] bg-[var(--paper)]">
                      <div className="relative aspect-video w-full">
                        <iframe
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full border-0"
                          referrerPolicy="strict-origin-when-cross-origin"
                          src={howToVideoEmbeds[index]}
                          title={`How to Register video ${index + 1}`}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="theme-panel p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {isFrench ? "Contenu du guide fourni avec l’aimable autorisation de MUNager." : "Guide content courtesy of MUNager."}
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
