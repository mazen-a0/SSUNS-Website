"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export type RegistrationTimelinePhase = {
  id: string;
  title: string;
  start: string;
  end: string;
  delegationFee: string;
  perDelegate: string;
  financialAidDeadline?: string;
  invoiceDeadline?: string;
};

type Labels = {
  title: string;
  currentPrefix: string;
  currentWindow: string;
  selectHint: string;
  openDetails: string;
  detailsVisible: string;
  registrationOpens: string;
  registrationCloses: string;
  refundCutoff: string;
  lastPayment: string;
  delegationFee: string;
  perDelegate: string;
  financialAid: string;
  invoice: string;
  current: string;
  completed: string;
  upcoming: string;
  to: string;
};

type Props = {
  phases: RegistrationTimelinePhase[];
  now?: Date;
  labels: Labels;
};

type PhaseStatus = "completed" | "active" | "upcoming";

function toStartDate(value: string) {
  return new Date(`${value}T00:00:00-04:00`);
}

function toEndDate(value: string) {
  return new Date(`${value}T23:59:59-04:00`);
}

function getStatus(phase: RegistrationTimelinePhase, now: Date): PhaseStatus {
  const start = toStartDate(phase.start);
  const end = toEndDate(phase.end);

  if (now > end) return "completed";
  if (now >= start && now <= end) return "active";
  return "upcoming";
}

export function RegistrationTimelineModule({ phases, now = new Date(), labels }: Props) {
  const statuses = useMemo(() => phases.map((phase) => getStatus(phase, now)), [phases, now]);
  const currentIndex = Math.max(statuses.findIndex((status) => status === "active"), 0);
  const [selectedPhaseId, setSelectedPhaseId] = useState(phases[currentIndex]?.id ?? phases[0]?.id ?? "");

  useEffect(() => {
    setSelectedPhaseId(phases[currentIndex]?.id ?? phases[0]?.id ?? "");
  }, [currentIndex, phases]);

  const selectedPhase = phases.find((phase) => phase.id === selectedPhaseId) ?? phases[currentIndex] ?? phases[0];
  const selectedIndex = Math.max(phases.findIndex((phase) => phase.id === selectedPhase?.id), 0);

  return (
    <section className="theme-panel-strong paper-grain overflow-hidden rounded-[12px] border border-[#23379f]/45 shadow-[0_0_0_1px_rgba(35,55,159,0.14),0_18px_36px_-32px_rgba(10,19,66,0.28)]">
      <div className="border-b border-[var(--rule)] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="section-kicker">{labels.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              {labels.registrationOpens} Apr 1, 2026 • {labels.registrationCloses} Oct 16, 2026 • {labels.refundCutoff} Oct 12, 2026 • {labels.lastPayment} Oct 23, 2026
            </p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)] sm:text-xs">
              {labels.selectHint}
            </p>
          </div>
          <span className="inline-flex max-w-full items-center rounded-full border border-[var(--accent)] bg-[rgba(20,32,130,0.08)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)] sm:text-xs">
            {labels.currentPrefix}: {phases[currentIndex]?.title}
          </span>
        </div>
      </div>

      <div className="px-4 py-5 sm:px-6">
        <div className="relative">
          <span aria-hidden className="absolute left-[2rem] right-[2rem] top-5 hidden h-px bg-[var(--rule)] md:block" />
          <span
            aria-hidden
            className="absolute left-[2rem] top-5 hidden h-px bg-[var(--accent)] transition-all duration-300 ease-out md:block"
            style={{
              width:
                phases.length > 1
                  ? `calc((100% - 4rem) * ${Math.max(selectedIndex, 0) / (phases.length - 1)})`
                  : "0%",
            }}
          />

          <div className="grid gap-3 md:grid-cols-3">
            {phases.map((phase, index) => {
              const status = statuses[index];
              const isSelected = phase.id === selectedPhase?.id;
              const isActive = status === "active";
              const isCompleted = status === "completed";

              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setSelectedPhaseId(phase.id)}
                  className={cn(
                    "group relative rounded-[12px] border bg-[var(--panel)] p-4 text-left transition duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] motion-safe:hover:-translate-y-[1px]",
                    isSelected
                      ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)] shadow-[0_0_0_1px_rgba(20,32,130,0.14),0_10px_24px_-24px_rgba(10,19,66,0.24)]"
                      : "border-[#23379f]/55 shadow-[0_0_0_1px_rgba(35,55,159,0.16),0_10px_24px_-24px_rgba(10,19,66,0.2)] hover:border-[var(--accent-2)]",
                  )}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={cn(
                        "relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-all",
                        isActive
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_0_0_6px_rgba(76,158,255,0.14)] motion-safe:animate-pulse"
                          : isCompleted
                            ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                            : "border-[var(--rule)] bg-[var(--panel)] text-[var(--muted)]",
                      )}
                    >
                      {isCompleted ? "✓" : index + 1}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={cn("text-base font-semibold leading-tight", isCompleted ? "text-[var(--muted)]" : "text-[var(--text)]")}>
                          {phase.title}
                        </h3>
                        {isActive ? (
                          <span className="inline-flex items-center rounded-full border border-[var(--accent)] bg-[rgba(20,32,130,0.08)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                            {labels.current}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                        {phase.start} {labels.to} {phase.end}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                        <span>{isSelected ? labels.detailsVisible : labels.openDetails}</span>
                        <span
                          aria-hidden
                          className={cn("transition-transform duration-300 ease-out", isSelected ? "rotate-90" : "")}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {selectedPhase ? (
          <div className="relative mt-4 rounded-[12px] border border-[#23379f]/55 bg-[var(--panel)] p-4 shadow-[0_0_0_1px_rgba(35,55,159,0.16),0_12px_24px_-24px_rgba(10,19,66,0.22)] transition duration-300 ease-out motion-safe:animate-[sheet-in_260ms_ease-out] sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold leading-tight text-[var(--text)]">{selectedPhase.title}</h3>
                  <span
                    className={cn(
                      "inline-flex max-w-full items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] sm:text-[11px]",
                      statuses[selectedIndex] === "active"
                        ? "border border-[var(--accent)] bg-[rgba(20,32,130,0.08)] text-[var(--accent)]"
                        : statuses[selectedIndex] === "completed"
                          ? "border border-[var(--rule)] bg-[var(--paper)] text-[var(--muted)]"
                          : "border border-[var(--rule)] bg-[var(--paper)] text-[var(--muted)]",
                    )}
                  >
                    {statuses[selectedIndex] === "active"
                      ? labels.currentWindow
                      : statuses[selectedIndex] === "completed"
                        ? labels.completed
                        : labels.upcoming}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {selectedPhase.start} {labels.to} {selectedPhase.end}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <article className="rounded-[10px] border border-[#23379f]/50 bg-[var(--paper)] px-4 py-3 shadow-[inset_0_1px_0_rgba(35,55,159,0.1)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">{labels.delegationFee}</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--accent)]">{selectedPhase.delegationFee}</p>
                </article>
                <article className="rounded-[10px] border border-[#23379f]/50 bg-[var(--paper)] px-4 py-3 shadow-[inset_0_1px_0_rgba(35,55,159,0.1)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">{labels.perDelegate}</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--accent)]">{selectedPhase.perDelegate}</p>
                </article>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--rule)] pt-4">
              {selectedPhase.financialAidDeadline ? (
                <span className="inline-flex items-center rounded-full border border-[#23379f]/45 bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold text-[var(--text)]">
                  {labels.financialAid}: {selectedPhase.financialAidDeadline}
                </span>
              ) : null}
              {selectedPhase.invoiceDeadline ? (
                <span className="inline-flex items-center rounded-full border border-[#23379f]/45 bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold text-[var(--text)]">
                  {labels.invoice}: {selectedPhase.invoiceDeadline}
                </span>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
