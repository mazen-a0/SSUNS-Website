"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CommitteeImage } from "@/components/media/CommitteeImage";
import { getCommitteeBadges, getCommitteeLevelLabel } from "@/lib/committeeBadges";
import { useSiteContent } from "@/lib/useSiteContent";

const detailSections = ["overview", "dais"] as const;
const daisPlaceholderSrc = "/dais_headshots/Portrait_Placeholder.png";

type SectionKey = (typeof detailSections)[number];

type CommitteeDetailSheetProps = {
  slug: string;
};

export function CommitteeDetailSheet({ slug }: CommitteeDetailSheetProps) {
  const { committees, committeesPageContent, language } = useSiteContent();
  const committee = committees.find((entry) => entry.slug === slug);
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");
  const [isDescriptionRevealed, setIsDescriptionRevealed] = useState(false);

  if (!committee) {
    return null;
  }

  const isFrenchTheme =
    committee.theme === "Agences spécialisées" ||
    committee.theme === "Comités spécialisés" ||
    committee.theme === "Comités de crise" ||
    committee.theme === "Comités de crise conjoints" ||
    committee.theme === "Assemblées générales" ||
    committee.theme === "Conseils économiques et sociaux";
  const contactLine =
    committee.theme === "Specialized Agencies" ||
    committee.theme === "Specialized Committees" ||
    committee.theme === "Agences spécialisées" ||
    committee.theme === "Comités spécialisés"
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
  const isFrench = language === "fr";
  const levelLabel = getCommitteeLevelLabel(committee.level);
  const metadataBadges = getCommitteeBadges(committee).filter((badge) => badge !== levelLabel);
  const sectionLabels = {
    overview: committeesPageContent.sections.overview,
    dais: isFrench ? "Rencontrez le dais" : "Meet the Dais",
    resources: committeesPageContent.sections.resources,
    guide: committeesPageContent.sections.guide,
    guideNote: isFrench
      ? "Les background guides seront publiés plus près de la conférence."
      : "Background guides will be released closer to the conference.",
    daisNote: isFrench ? "Les biographies du dais seront publiées avec les mises à jour du comité." : "Dais profiles will be published with committee updates.",
    resourcesNote: isFrench ? "Les ressources du comité seront ajoutées au fur et à mesure de leur publication." : "Committee resources will be added here as they are released.",
  };
  const hasDaisGroups = committee.chairs.some((chair) => chair.daisGroup);
  const daisGroups = committee.chairs.reduce<Array<{ title: string | null; chairs: typeof committee.chairs }>>((groups, chair) => {
    const title = chair.daisGroup ?? null;
    const existingGroup = groups.find((group) => group.title === title);

    if (existingGroup) {
      existingGroup.chairs.push(chair);
    } else {
      groups.push({ title, chairs: [chair] });
    }

    return groups;
  }, []);
  const getDaisGroupLabel = (groupTitle: string | null) => {
    if (!groupTitle) {
      return null;
    }

    if (!isFrench) {
      return groupTitle;
    }

    if (groupTitle === "Joint Crisis Coordinator") {
      return "Coordination de crise conjointe";
    }

    if (groupTitle === "Russia") {
      return "Empire russe";
    }

    if (groupTitle === "Britain") {
      return "Empire britannique";
    }

    return groupTitle;
  };
  const factCards = [
    { label: committeesPageContent.filterThemeLabel, value: committee.theme },
    { label: committeesPageContent.sections.format, value: committee.format },
    { label: committeesPageContent.sizeLabel, value: committee.size },
    levelLabel
      ? { label: committeesPageContent.filterLevelLabel, value: levelLabel }
      : metadataBadges.length
        ? { label: committeesPageContent.sections.difficulty, value: metadataBadges.join(" • ") }
        : null,
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

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

        <div className="mt-6 space-y-6">
          <div className="max-w-5xl">
            <p className="section-kicker">{committee.theme}</p>
            <h1 className="mt-3 font-display text-4xl leading-[0.92] text-[var(--accent)] sm:text-5xl">{committee.name}</h1>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--text)]">{committee.blurb}</p>
          </div>

          <article className="theme-panel overflow-hidden rounded-[10px] p-3">
            <div className="relative overflow-hidden rounded-[8px]">
              <CommitteeImage alt="Committee room with placards and dais" mode="banner" slug={committee.slug} src={committee.imageSrc} />
              <div className="mt-3 grid gap-2 border-t border-[var(--rule)] pt-3 sm:grid-cols-2 lg:grid-cols-4">
                {factCards.map((fact) => (
                  <div
                    className="rounded-[7px] border border-[rgba(20,32,130,0.16)] bg-[rgba(253,247,234,0.72)] p-3"
                    key={`${fact.label}-${fact.value}`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{fact.label}</p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-[var(--text)]">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="theme-panel paper-grain rounded-[8px] p-5">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(16rem,0.85fr)] lg:items-start">
              <div>
                <p className="section-kicker">{sectionLabels.resources}</p>
                {committee.resources.length ? (
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)]">
                    {committee.resources.map((resource) => (
                      <li className="border-t border-[var(--rule)] pt-2 first:border-t-0 first:pt-0" key={resource}>
                        {resource}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{sectionLabels.resourcesNote}</p>
                )}
              </div>
              <div className="border-t border-[var(--rule)] pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                <p className="section-kicker">{sectionLabels.guide}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{sectionLabels.guideNote}</p>
              </div>
              <div className="border-t border-[var(--rule)] pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                <p className="section-kicker">Contact</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{contactLine}</p>
              </div>
            </div>
          </article>

          <div className="flex flex-wrap gap-2 border-b border-[var(--rule)] pb-3">
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
                  {sectionLabels[section]}
                </button>
              );
            })}
          </div>

          <div className="border-b border-[var(--rule)] pb-5">
            {activeSection === "overview" ? (
              committee.descriptionReveal ? (
                <button
                  className="group w-full rounded-[8px] border border-[var(--rule-strong)] bg-[var(--panel)] p-5 text-left shadow-[0_10px_30px_rgba(20,32,130,0.08)] transition-colors hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                  onClick={() => setIsDescriptionRevealed(true)}
                  type="button"
                >
                  <span className="section-kicker">{committee.descriptionReveal.label}</span>
                  <span className="mt-3 block text-base font-semibold leading-7 text-[var(--accent)]">
                    {isDescriptionRevealed ? committee.descriptionReveal.message : committee.overview}
                  </span>
                </button>
              ) : (
                <p className="body-copy text-[0.98rem] md:columns-2 md:gap-10">{committee.overview}</p>
              )
            ) : null}
            {activeSection === "dais" ? (
              committee.chairs.length ? (
                <div className="space-y-5">
                  {daisGroups.map((group, groupIndex) => {
                    const groupLabel = hasDaisGroups ? getDaisGroupLabel(group.title) : null;

                    return (
                      <section
                        className={
                          groupLabel
                            ? "rounded-[8px] border border-[var(--rule)] bg-[rgba(20,32,130,0.025)] p-3 sm:p-4"
                            : undefined
                        }
                        key={group.title ?? `dais-group-${groupIndex}`}
                      >
                        {groupLabel ? <p className="section-kicker mb-3 text-[var(--accent)]">{groupLabel}</p> : null}
                        <ul className="grid gap-4 lg:grid-cols-2">
                          {group.chairs.map((chair) => {
                            const roleText = chair.role ?? chair.bio ?? (isFrench ? "Membre du dais" : "Dais member");
                            const imageSrc = chair.imageSrc ?? daisPlaceholderSrc;

                            return (
                              <li
                                className="min-w-0 rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] p-4 shadow-[0_12px_30px_rgba(20,32,130,0.06)] sm:p-5"
                                key={`${chair.name}-${roleText}`}
                              >
                                <div className="grid gap-4 sm:grid-cols-[11.5rem_minmax(0,1fr)] sm:items-center">
                                  <div className="relative h-[19rem] overflow-hidden rounded-[6px] border border-[var(--rule)] bg-[var(--paper)] sm:h-[17rem]">
                                    <Image
                                      alt={`${chair.name}, ${roleText}`}
                                      className="object-cover object-top"
                                      fill
                                      sizes="(min-width: 1024px) 184px, (min-width: 640px) 184px, 100vw"
                                      src={imageSrc}
                                    />
                                  </div>
                                  <div className="min-w-0 self-center">
                                    <p className="text-lg font-semibold leading-tight text-[var(--text)]">{chair.name}</p>
                                    <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--muted)]">{roleText}</p>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </section>
                    );
                  })}
                </div>
              ) : (
                <p className="body-copy text-[0.98rem] text-[var(--muted)]">{sectionLabels.daisNote}</p>
              )
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
