"use client";

type TimelineStage = {
  id: string;
  label: string;
  start: string;
  end: string;
  delegationFee: string;
  delegateFee: string;
};

type RegistrationTimelineProps = {
  stages: TimelineStage[];
  financialAidDeadlines: string[];
  text: {
    title: string;
    delegationFee: string;
    delegateFee: string;
    current: string;
    financialAidDeadlines: string;
    to: string;
  };
};

function isCurrentStage(stage: TimelineStage) {
  const today = new Date();
  const start = new Date(`${stage.start}T00:00:00-04:00`);
  const end = new Date(`${stage.end}T23:59:59-04:00`);
  return today >= start && today <= end;
}

export function RegistrationTimeline({ stages, financialAidDeadlines, text }: RegistrationTimelineProps) {
  return (
    <div className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
      <p className="section-kicker">{text.title}</p>
      <ol className="mt-5 list-none space-y-4 border-t border-[var(--rule)] p-0 pt-5">
        {stages.map((stage, index) => {
          const active = isCurrentStage(stage);
          return (
            <li key={stage.id}>
              <article
                className={`relative border px-4 py-4 pl-12 ${active ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)]" : "border-[var(--rule)]"}`}
              >
                <span
                  aria-hidden
                  className={`absolute left-3 top-4 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold ${
                    active ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--rule)] bg-[var(--panel)] text-[var(--muted)]"
                  }`}
                >
                  {index + 1}
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[var(--accent)]">{stage.label}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {stage.start} {text.to} {stage.end}
                    </p>
                  </div>
                  {active ? <span className="text-xs font-semibold text-[var(--accent)]">{text.current}</span> : null}
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <p className="text-sm text-[var(--text)]">
                    {text.delegationFee}: {stage.delegationFee}
                  </p>
                  <p className="text-sm text-[var(--text)]">
                    {text.delegateFee}: {stage.delegateFee}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
      <div className="mt-5 border-t border-[var(--rule)] pt-4">
        <p className="text-xs font-semibold text-[var(--muted)]">{text.financialAidDeadlines}</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{financialAidDeadlines.join(" • ")}</p>
      </div>
    </div>
  );
}
