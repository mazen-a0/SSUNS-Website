"use client";

import { useMemo, useState } from "react";
import { committeesPageContent, type Committee } from "@/content/en/committees";
import { GlassCard } from "@/components/GlassCard";
import { GlassSheetModal } from "@/components/GlassSheetModal";
import { LiquidButton } from "@/components/LiquidButton";

type CommitteesExplorerProps = {
  committees: Committee[];
  closeLabel: string;
};

export function CommitteesExplorer({ committees, closeLabel }: CommitteesExplorerProps) {
  const allLabel = committeesPageContent.allOptionLabel;
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState<string>(allLabel);
  const [level, setLevel] = useState<string>(allLabel);
  const [active, setActive] = useState<Committee | null>(null);

  const themes = [allLabel, ...new Set(committees.map((item) => item.theme))];
  const levels = [allLabel, ...new Set(committees.map((item) => item.level))];

  const filtered = useMemo(() => {
    return committees.filter((committee) => {
      const keyword = `${committee.name} ${committee.topic} ${committee.format}`.toLowerCase();
      const keywordMatch = keyword.includes(search.trim().toLowerCase());
      const themeMatch = theme === allLabel || committee.theme === theme;
      const levelMatch = level === allLabel || committee.level === level;

      return keywordMatch && themeMatch && levelMatch;
    });
  }, [allLabel, committees, level, search, theme]);

  return (
    <>
      <div className="grid gap-3 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 backdrop-blur-xl sm:grid-cols-3 sm:items-end">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
          {committeesPageContent.searchLabel}
          <input
            className="mt-2 w-full rounded-xl border border-white/65 bg-white/65 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)]"
            onChange={(event) => setSearch(event.target.value)}
            placeholder={committeesPageContent.searchPlaceholder}
            value={search}
          />
        </label>

        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
          {committeesPageContent.filterThemeLabel}
          <select
            className="mt-2 w-full rounded-xl border border-white/65 bg-white/65 px-3 py-2 text-sm text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)]"
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

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
            {committeesPageContent.filterLevelLabel}
            <select
              className="mt-2 w-full rounded-xl border border-white/65 bg-white/65 px-3 py-2 text-sm text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)]"
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
            className="mt-2 text-xs font-semibold text-[var(--color-brand-navy)] underline decoration-[var(--color-brand-blue)] underline-offset-4"
            onClick={() => {
              setSearch("");
              setTheme(allLabel);
              setLevel(allLabel);
            }}
            type="button"
          >
            {committeesPageContent.clearFiltersLabel}
          </button>
        </div>
      </div>

      {filtered.length ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((committee) => (
            <GlassCard key={committee.id} className="flex h-full flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">{committee.theme}</p>
                <h3 className="mt-2 font-display text-2xl uppercase text-[var(--color-brand-navy)]">{committee.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{committee.blurb}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-full bg-white/65 px-2 py-1">{committee.level}</span>
                <span className="rounded-full bg-white/65 px-2 py-1">{committee.size}</span>
                <span className="rounded-full bg-white/65 px-2 py-1">{committee.format}</span>
              </div>
              <LiquidButton
                className="mt-auto w-fit"
                label={committeesPageContent.openDetailsLabel}
                onClick={() => setActive(committee)}
                variant="ghost"
              />
            </GlassCard>
          ))}
        </div>
      ) : (
        <GlassCard as="section" className="mt-6 text-center text-sm text-slate-700">
          {committeesPageContent.noResults}
        </GlassCard>
      )}

      <GlassSheetModal
        closeLabel={closeLabel}
        onClose={() => setActive(null)}
        open={Boolean(active)}
        title={active?.name ?? ""}
      >
        {active ? (
          <div className="space-y-4 text-sm text-slate-800">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {committeesPageContent.modalTopicLabel}
              </p>
              <p className="mt-1 leading-relaxed">{active.topic}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {committeesPageContent.modalFormatLabel}
                </p>
                <p className="mt-1">{active.format}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {committeesPageContent.modalGuideLabel}
                </p>
                <p className="mt-1">{active.backgroundGuide}</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {committeesPageContent.modalChairsLabel}
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                {active.chairs.map((chair) => (
                  <li key={chair}>{chair}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </GlassSheetModal>
    </>
  );
}
