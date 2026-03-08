"use client";

import Image from "next/image";
import { CommitteesExplorer } from "@/components/CommitteesExplorer";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function CommitteesPage() {
  const { committees, committeesPageContent } = useSiteContent();

  return (
    <>
      <PageHero intro={committeesPageContent.intro} title={committeesPageContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <article className="theme-panel overflow-hidden rounded-[10px] p-3">
            {/* delegates in active committee session, 3:2, recommended 1200x800 */}
            <Image
              alt={committeesPageContent.heroImage.alt}
              className="aspect-[3/2] w-full object-cover"
              height={800}
              src={committeesPageContent.heroImage.src}
              width={1200}
            />
          </article>
          <article className="theme-panel-strong paper-grain rounded-[10px] p-6 sm:p-8">
            <p className="section-kicker">{committeesPageContent.title}</p>
            <Image alt="" aria-hidden="true" className="mt-4" height={18} src="/graphics/report-divider.svg" width={320} />
            <p className="mt-5 text-sm leading-relaxed text-[var(--text)] sm:text-base">{committeesPageContent.intro}</p>
          </article>
        </div>
        <div className="mt-6 animate-[sheet-in_420ms_ease-out]">
          <CommitteesExplorer committees={committees} pageContent={committeesPageContent} />
        </div>
      </section>
    </>
  );
}
