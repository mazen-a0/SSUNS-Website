"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Committee } from "@/content/en/committees";

type CommitteesPageContent = typeof import("@/content/en/committees").committeesPageContent;

type CommitteesExplorerProps = {
  committees: Committee[];
  pageContent: CommitteesPageContent;
};

export function CommitteesExplorer({ committees, pageContent }: CommitteesExplorerProps) {
  const allLabel = pageContent.allOptionLabel;
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState<string>(allLabel);
  const [level, setLevel] = useState<string>(allLabel);

  const themes = [allLabel, ...new Set(committees.map((item) => item.theme))];
  const levels = [allLabel, ...new Set(committees.map((item) => item.level))];

  const filtered = useMemo(() => {
    return committees.filter((committee) => {
      const keyword = `${committee.name} ${committee.topic} ${committee.format} ${committee.difficulty}`.toLowerCase();
      const keywordMatch = keyword.includes(search.trim().toLowerCase());
      const themeMatch = theme === allLabel || committee.theme === theme;
      const levelMatch = level === allLabel || committee.level === level;

      return keywordMatch && themeMatch && levelMatch;
    });
  }, [allLabel, committees, level, search, theme]);

  return (
    <>
      <div className="theme-panel-strong paper-grain rounded-[10px] p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.4fr_0.4fr_0.2fr] lg:items-end">
          <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            {pageContent.searchLabel}
            <input
              className="mt-2 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={pageContent.searchPlaceholder}
              value={search}
            />
          </label>

          <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            {pageContent.filterThemeLabel}
            <select
              className="mt-2 w-full border border-[var(--rule)] bg-[var(--bg)] px-3 py-3 text-sm text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
              onChange={(event) => setTheme(event.target.value)}
              value={theme}
            >
              {themes.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>

          <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
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
            className="border-b border-[var(--accent-2)] py-2 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]"
            onClick={() => {
              setSearch("");
              setTheme(allLabel);
              setLevel(allLabel);
            }}
            type="button"
          >
            {pageContent.clearFiltersLabel}
          </button>
        </div>
      </div>

      {filtered.length ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((committee) => (
            <article className="theme-panel paper-grain report-tab flex h-full flex-col p-5" key={committee.id}>
              <p className="section-kicker">{committee.theme}</p>
              <h3 className="mt-4 font-display text-3xl uppercase leading-none text-[var(--accent)]">{committee.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text)]">{committee.blurb}</p>
              <dl className="mt-5 grid gap-0 border-y border-[var(--rule)] py-4 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                <div className="flex items-center justify-between gap-3 border-b border-[var(--rule)] pb-3">
                  <dt>{pageContent.filterLevelLabel}</dt>
                  <dd className="text-right text-[var(--text)]">{committee.level}</dd>
                </div>
                <div className="flex items-center justify-between gap-3 border-b border-[var(--rule)] py-3">
                  <dt>{pageContent.sizeLabel}</dt>
                  <dd className="text-right text-[var(--text)]">{committee.size}</dd>
                </div>
                <div className="flex items-center justify-between gap-3 pt-3">
                  <dt>{pageContent.sections.format}</dt>
                  <dd className="text-right text-[var(--text)]">{committee.format}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{committee.topic}</p>
              <Link
                className="mt-6 inline-flex items-center justify-between gap-3 border-t border-[var(--rule)] pt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]"
                href={`/committees/${committee.slug}`}
              >
                <span>{pageContent.openDetailsLabel}</span>
                <span aria-hidden className="h-px w-8 bg-[var(--accent)]" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <section className="theme-panel paper-grain mt-6 rounded-[10px] px-5 py-8 text-center text-sm text-[var(--muted)]">
          {pageContent.noResults}
        </section>
      )}

      <div className="mt-6">
        <Link className="border-b border-[var(--accent-2)] pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]" href="/conference">
          {pageContent.continueLabel}
        </Link>
      </div>
    </>
  );
}
