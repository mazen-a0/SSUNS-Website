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
                    return (
                      <article className="group theme-panel overflow-hidden rounded-[8px]" key={committee.id}>
                        <div className="relative">
                          <CommitteeImage alt={`${committee.name} committee image`} mode="card" slug={committee.slug} src={committee.imageSrc} />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(8,15,52,0.94)] to-transparent px-4 py-4 text-white">
                            <p className="text-[11px] font-semibold text-[#c7d7ff]">{committee.theme}</p>
                            <h3 className="mt-2 text-2xl font-semibold leading-tight">{committee.name}</h3>
                          </div>
                        </div>

                        <div className="flex min-h-[10.75rem] flex-col px-4 py-4">
                          <div className="grid gap-2 text-[11px] font-semibold text-[var(--muted)] sm:grid-cols-3">
                            <span className="border border-[var(--rule)] px-2 py-1">{committee.format}</span>
                            <span className="border border-[var(--rule)] px-2 py-1">{committee.level}</span>
                            <span className="border border-[var(--rule)] px-2 py-1">{committee.size}</span>
                          </div>

                          <div className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                            <p className="text-[var(--text)]">{committee.blurb}</p>
                          </div>

                          <div className="mt-auto flex justify-end pt-5">
                            <Link
                              className="inline-flex items-center gap-2 rounded-full border border-[var(--rule-strong)] bg-[var(--panel-strong)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)] transition-colors duration-150 hover:bg-[var(--paper)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)]"
                              href={`/committees/${committee.slug}`}
                            >
                              <span>{pageContent.openDetailsLabel}</span>
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
