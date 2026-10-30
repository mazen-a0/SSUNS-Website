"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { BioLetterModal } from "@/components/BioLetterModal";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import type { StaffProfile } from "@/content/en/staff";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutCoordinatorsPage() {
  const { aboutContent, language } = useSiteContent();
  const { coordinatorProfiles } = aboutContent;
  const [activeName, setActiveName] = useState<string | null>(null);
  const activeCoordinator = coordinatorProfiles.find((coordinator) => coordinator.name === activeName);
  const closeBio = useCallback(() => setActiveName(null), []);
  const bioLabel = language === "fr" ? "Lire la bio" : "Read bio";
  const bioButtonStyle = "mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/coordinators");
  const coordinatorsWithHeadshots = coordinatorProfiles.filter(
    (coordinator): coordinator is StaffProfile & { imageSrc: string } => Boolean(coordinator.imageSrc),
  );
  const coordinatorsWithoutHeadshots = coordinatorProfiles.filter((coordinator) => !coordinator.imageSrc);

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={aboutContent.chapters} />
          </aside>
          <div className="min-w-0 space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <div className="space-y-4 body-copy">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <section className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {coordinatorsWithHeadshots.map((coordinator) => (
                <article className="theme-panel paper-grain min-w-0 rounded-[8px] p-3.5" key={`${coordinator.name}-${coordinator.role}`}>
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[8.25rem] overflow-hidden rounded-[6px] border border-[var(--rule)] bg-[var(--paper)]">
                    <Image
                      alt={`${coordinator.name}, ${coordinator.role}`}
                      className="object-cover object-top"
                      fill
                      sizes="132px"
                      src={coordinator.imageSrc}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h2 className="text-base font-semibold leading-tight text-[var(--accent)]">{coordinator.name}</h2>
                    <p className="mt-1.5 text-xs font-semibold leading-relaxed text-[var(--muted)]">{coordinator.role}</p>
                    <button aria-haspopup="dialog" aria-label={`${bioLabel} — ${coordinator.name}`} className={bioButtonStyle} onClick={() => setActiveName(coordinator.name)} type="button">{bioLabel}</button>
                  </div>
                </article>
              ))}
            </section>

            {coordinatorsWithoutHeadshots.length ? (
              <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {coordinatorsWithoutHeadshots.map((coordinator) => (
                  <article className="theme-panel paper-grain min-w-0 rounded-[8px] p-4" key={`${coordinator.name}-${coordinator.role}`}>
                    <h2 className="text-base font-semibold leading-tight text-[var(--accent)]">{coordinator.name}</h2>
                    <p className="mt-1.5 text-xs font-semibold leading-relaxed text-[var(--muted)]">{coordinator.role}</p>
                    <button aria-haspopup="dialog" aria-label={`${bioLabel} — ${coordinator.name}`} className={bioButtonStyle} onClick={() => setActiveName(coordinator.name)} type="button">{bioLabel}</button>
                  </article>
                ))}
              </section>
            ) : null}
          </div>
        </div>
      </section>
      {activeCoordinator ? <BioLetterModal
        headshotAlt={`${activeCoordinator.name}, ${activeCoordinator.role}`}
        headshotSrc={activeCoordinator.imageSrc}
        kicker={chapter.title}
        name={activeCoordinator.name}
        onClose={closeBio}
        open
        showSignature={false}
        signatureName={activeCoordinator.name}
        signatureRole={activeCoordinator.role}
        title={activeCoordinator.name}
      ><p>{activeCoordinator.bio}</p></BioLetterModal> : null}
    </>
  );
}
