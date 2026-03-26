"use client";

import Link from "next/link";
import { useState } from "react";
import { CommitteeImage } from "@/components/media/CommitteeImage";
import { useSiteContent } from "@/lib/useSiteContent";

const detailSections = ["overview", "topic", "format", "chairs", "resources"] as const;

type SectionKey = (typeof detailSections)[number];

type CommitteeDetailSheetProps = {
  slug: string;
};

export function CommitteeDetailSheet({ slug }: CommitteeDetailSheetProps) {
  const { committees, committeesPageContent } = useSiteContent();
  const committee = committees.find((entry) => entry.slug === slug);
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");

  if (!committee) {
    return null;
  }

  const isFrenchTheme =
    committee.theme === "Comités spécialisés" ||
    committee.theme === "Comités de crise" ||
    committee.theme === "Comités de crise conjoints" ||
    committee.theme === "Assemblées générales" ||
    committee.theme === "Conseils économiques et sociaux";
  const contactLine =
    committee.theme === "Specialized Committees" || committee.theme === "Comités spécialisés"
      ? isFrenchTheme
        ? "Pour toute question, veuillez contacter Eitan Pessin à spec@ssuns.org."
        : "If you have questions, please contact Eitan Pessin at spec@ssuns.org."
      : committee.theme === "Crisis Committees" ||
          committee.theme === "Joint Crisis Committees" ||
          committee.theme === "Comités de crise" ||
          committee.theme === "Comités de crise conjoints"
        ? isFrenchTheme
          ? "Pour toute question, veuillez contacter Will Greer à crisis@ssuns.org."
          : "If you have questions, please contact Will Greer at crisis@ssuns.org."
        : isFrenchTheme
          ? "Pour toute question, veuillez contacter Emma Ristic à gaecosoc@ssuns.org."
          : "If you have questions, please contact Emma Ristic at gaecosoc@ssuns.org.";

  return (
    <section className="page-shell mt-8">
      <div className="theme-panel-strong paper-grain overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--rule)] pb-4">
          <Link className="text-sm font-semibold text-[var(--accent)]" href="/committees">
            {committeesPageContent.detailBackLabel}
          </Link>
          <Link className="border border-[var(--rule)] px-4 py-2 text-sm font-semibold text-[var(--accent)]" href="/committees">
            {committeesPageContent.detailCloseLabel}
          </Link>
        </div>

        <div className="mt-6 grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <div>
            <p className="section-kicker">{committee.theme}</p>
            <h1 className="mt-3 font-display text-4xl leading-[0.92] text-[var(--accent)] sm:text-5xl">{committee.name}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text)]">{committee.blurb}</p>

            <div className="mt-6 grid gap-3 border-y border-[var(--rule)] py-4 sm:grid-cols-4">
              <div>
                <p className="text-[11px] font-semibold text-[var(--muted)]">{committeesPageContent.filterThemeLabel}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">{committee.theme}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--muted)]">{committeesPageContent.sections.format}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">{committee.format}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--muted)]">{committeesPageContent.filterLevelLabel}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">{committee.level}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--muted)]">{committeesPageContent.sizeLabel}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">{committee.size}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-b border-[var(--rule)] pb-3">
              {detailSections.map((section) => {
                const isActive = activeSection === section;
                return (
                  <button
                    className={
                      isActive
                        ? "border border-[var(--accent)] bg-[rgba(20,32,130,0.06)] px-3 py-2 text-sm font-semibold text-[var(--accent)]"
                        : "border border-[var(--rule)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:bg-[rgba(20,32,130,0.03)] hover:text-[var(--accent)]"
                    }
                    key={section}
                    onClick={() => setActiveSection(section)}
                    type="button"
                  >
                    {committeesPageContent.sections[section]}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 border-b border-[var(--rule)] pb-5">
              {activeSection === "overview" ? <p className="body-copy text-[0.98rem]">{committee.overview}</p> : null}
              {activeSection === "topic" ? <p className="body-copy text-[0.98rem]">{committee.topic || "Coming soon."}</p> : null}
              {activeSection === "format" ? <p className="body-copy text-[0.98rem]">{committee.format || "Coming soon."}</p> : null}
              {activeSection === "chairs" ? (
                committee.chairs.length ? (
                  <ul className="space-y-4">
                    {committee.chairs.map((chair) => (
                      <li className="border-t border-[var(--rule)] pt-4 first:border-t-0 first:pt-0" key={chair.name}>
                        <p className="text-2xl font-semibold leading-tight text-[var(--text)]">{chair.name}</p>
                        <p className="body-copy mt-2 text-[0.98rem] text-[var(--muted)]">{chair.bio}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="body-copy text-[0.98rem] text-[var(--muted)]">Coming soon.</p>
                )
              ) : null}
              {activeSection === "resources" ? (
                <div className="space-y-4">
                  {committee.resources.length ? (
                    <ul className="space-y-3 body-copy text-[0.98rem]">
                      {committee.resources.map((resource) => (
                        <li className="border-t border-[var(--rule)] pt-3 first:border-t-0 first:pt-0" key={resource}>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="body-copy text-[0.98rem] text-[var(--muted)]">Coming soon.</p>
                  )}
                  <div className="border-t border-[var(--rule)] pt-4">
                    <p className="text-[11px] font-semibold text-[var(--muted)]">{committeesPageContent.sections.guide}</p>
                    <p className="mt-2 text-sm text-[var(--muted)]">{committee.backgroundGuide}</p>
                  </div>
                </div>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{contactLine}</p>
          </div>

          <div className="space-y-4">
            <article className="theme-panel overflow-hidden rounded-[8px] p-3">
              <CommitteeImage alt="Committee room with placards and dais" mode="hero" slug={committee.slug} src={committee.imageSrc} />
            </article>

            <article className="theme-panel paper-grain rounded-[8px] p-5">
              <p className="section-kicker">{committeesPageContent.sections.difficulty}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{committee.difficulty}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
