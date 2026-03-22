"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Committee } from "@/content/en/committees";
import { CommitteeImage } from "@/components/media/CommitteeImage";

type CommitteesPageContent = typeof import("@/content/en/committees").committeesPageContent;

type CommitteesExplorerProps = {
  committees: Committee[];
  pageContent: CommitteesPageContent;
};

type GroupKey = "ga" | "ecosoc" | "specialized" | "jointCrisis" | "crisis";

function getCommitteeGroup(committee: Committee): GroupKey {
  if (committee.theme === "General Assemblies" || committee.theme === "Assemblées générales") return "ga";
  if (committee.theme === "Economic and Social Councils" || committee.theme === "Conseils économiques et sociaux") return "ecosoc";
  if (committee.theme === "Specialized Committees" || committee.theme === "Comités spécialisés") return "specialized";
  if (committee.theme === "Joint Crisis Committees" || committee.theme === "Comités de crise conjoints") return "jointCrisis";
  return "crisis";
}

export function CommitteesExplorer({ committees, pageContent }: CommitteesExplorerProps) {
  const allLabel = pageContent.allOptionLabel;
  const [search, setSearch] = useState("");
  const [track, setTrack] = useState<string>(allLabel);
  const [level, setLevel] = useState<string>(allLabel);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const tracks = [allLabel, pageContent.groups.ga, pageContent.groups.ecosoc, pageContent.groups.specialized, pageContent.groups.jointCrisis, pageContent.groups.crisis];
  const levels = [allLabel, ...new Set(committees.map((item) => item.level))];

  const filtered = useMemo(() => {
    return committees.filter((committee) => {
      const keyword = `${committee.name} ${committee.topic} ${committee.format} ${committee.difficulty} ${committee.theme}`.toLowerCase();
      const keywordMatch = keyword.includes(search.trim().toLowerCase());
      const groupKey = getCommitteeGroup(committee);
      const groupLabel = pageContent.groups[groupKey];
      const trackMatch = track === allLabel || groupLabel === track;
      const levelMatch = level === allLabel || committee.level === level;
      return keywordMatch && trackMatch && levelMatch;
    });
  }, [allLabel, committees, level, pageContent.groups, search, track]);

  const groupedCommittees = useMemo(
    () => ({
      ga: filtered.filter((committee) => getCommitteeGroup(committee) === "ga"),
      ecosoc: filtered.filter((committee) => getCommitteeGroup(committee) === "ecosoc"),
      specialized: filtered.filter((committee) => getCommitteeGroup(committee) === "specialized"),
      jointCrisis: filtered.filter((committee) => getCommitteeGroup(committee) === "jointCrisis"),
      crisis: filtered.filter((committee) => getCommitteeGroup(committee) === "crisis"),
    }),
    [filtered],
  );

  const orderedGroups: GroupKey[] = ["ga", "ecosoc", "specialized", "jointCrisis", "crisis"];

  return (
    <>
      <div className="theme-panel-strong paper-grain rounded-[8px] p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.42fr_0.42fr_0.2fr] lg:items-end">
          <label className="text-xs font-semibold text-[var(--muted)]">
            {pageContent.searchLabel}
            <input
              className="mt-2 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={pageContent.searchPlaceholder}
              value={search}
            />
          </label>

          <label className="text-xs font-semibold text-[var(--muted)]">
            {pageContent.filterThemeLabel}
            <select
              className="mt-2 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
              onChange={(event) => setTrack(event.target.value)}
              value={track}
            >
              {tracks.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>

          <label className="text-xs font-semibold text-[var(--muted)]">
            {pageContent.filterLevelLabel}
            <select
              className="mt-2 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
              onChange={(event) => setLevel(event.target.value)}
              value={level}
            >
              {levels.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>

          <button
            className="border-b border-[var(--accent-2)] py-2 text-left text-xs font-semibold text-[var(--accent)]"
            onClick={() => {
              setSearch("");
              setTrack(allLabel);
              setLevel(allLabel);
            }}
            type="button"
          >
            {pageContent.clearFiltersLabel}
          </button>
        </div>
      </div>

      {filtered.length ? (
        <div className="mt-10 space-y-12">
          {orderedGroups.map((groupKey) => {
            const groupCommittees = groupedCommittees[groupKey];
            if (!groupCommittees.length) return null;

            return (
              <section key={groupKey}>
                <div className="mb-5 flex items-end justify-between gap-3 border-b border-[var(--rule)] pb-3">
                  <div>
                    <p className="section-kicker">{pageContent.filterThemeLabel}</p>
                    <h2 className="text-2xl font-semibold leading-tight text-[var(--accent)]">{pageContent.groups[groupKey]}</h2>
                  </div>
                  <p className="text-sm font-semibold text-[var(--muted)]">{groupCommittees.length}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {groupCommittees.map((committee) => {
                    const isExpanded = expandedCard === committee.id;

                    return (
                      <article
                        className="group theme-panel overflow-hidden rounded-[8px]"
                        key={committee.id}
                        onMouseEnter={() => setExpandedCard(committee.id)}
                        onMouseLeave={() => setExpandedCard((current) => (current === committee.id ? null : current))}
                      >
                        <div className="relative">
                          <CommitteeImage alt={`${committee.name} committee placeholder`} mode="card" slug={committee.slug} src={committee.imageSrc} />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(8,15,52,0.94)] to-transparent px-4 py-4 text-white">
                            <p className="text-[11px] font-semibold text-[#c7d7ff]">{committee.theme}</p>
                            <h3 className="mt-2 font-display text-2xl leading-none">{committee.name}</h3>
                          </div>
                        </div>

                        <div className="px-4 py-4">
                          <div className="grid gap-2 text-[11px] font-semibold text-[var(--muted)] sm:grid-cols-3">
                            <span className="border border-[var(--rule)] px-2 py-1">{committee.level}</span>
                            <span className="border border-[var(--rule)] px-2 py-1">{committee.format}</span>
                            <span className="border border-[var(--rule)] px-2 py-1">{committee.size}</span>
                          </div>

                          <div className={`mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)] ${isExpanded ? "block" : "hidden md:block md:opacity-0 md:transition-opacity md:duration-200 group-hover:opacity-100"}`}>
                            <p className="text-[var(--text)]">{committee.blurb}</p>
                            <p>{committee.topic}</p>
                          </div>

                          <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--rule)] pt-4">
                            <button
                              className="text-sm font-semibold text-[var(--accent)] md:hidden"
                              onClick={() => setExpandedCard(isExpanded ? null : committee.id)}
                              type="button"
                            >
                              {isExpanded ? pageContent.detailCloseLabel : pageContent.sections.overview}
                            </button>
                            <Link className="ml-auto inline-flex items-center gap-3 text-sm font-semibold text-[var(--accent)]" href={`/committees/${committee.slug}`}>
                              <span>{pageContent.openDetailsLabel}</span>
                              <span aria-hidden className="h-px w-8 bg-[var(--accent)] transition-all duration-300 group-hover:w-10" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <section className="theme-panel paper-grain mt-6 rounded-[8px] px-5 py-8 text-center text-sm text-[var(--muted)]">
          {pageContent.noResults}
        </section>
      )}

      <div className="mt-8">
        <Link className="border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href="/conference">
          {pageContent.continueLabel}
        </Link>
      </div>
    </>
  );
}
