"use client";

import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { LiquidButton } from "@/components/LiquidButton";
import { useSiteContent } from "@/lib/useSiteContent";

const placeholderResources = [
  "Delegate Handbook (PDF)",
  "Rules of Procedure (PDF)",
  "Code of Conduct (PDF)",
];

export default function ConferenceDrcPage() {
  const { conferenceContent } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/delegate-resource-center");
  const isFrench = conferenceContent.title === "Conférence";

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={conferenceContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <ConferenceQuickLinks className="mb-6" currentHref={chapter.href} />
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={conferenceContent.chapters} />
          </aside>
          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
              <div className="space-y-6 body-copy">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <section className="theme-panel-strong paper-grain p-6 sm:p-8">
              <p className="section-kicker">{isFrench ? "Documents" : "Documents"}</p>
              <div className="mt-5 grid gap-4 border-t border-[var(--rule)] pt-5 md:grid-cols-2 xl:grid-cols-3">
                {placeholderResources.map((label) => (
                  <div className="border border-[var(--rule)] bg-white p-4" key={label}>
                    <p className="text-sm font-semibold text-[var(--accent)]">{label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{isFrench ? "À venir" : "Coming soon"}</p>
                    <div className="mt-4">
                      <LiquidButton className="w-full justify-center" href="#" label={label} variant="ghost" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
