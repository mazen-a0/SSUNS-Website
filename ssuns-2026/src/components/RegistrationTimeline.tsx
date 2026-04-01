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
  text: {
    title: string;
    delegationFee: string;
    delegateFee: string;
    current: string;
    to: string;
  };
};

function isCurrentStage(stage: TimelineStage) {
  const today = new Date();
  const start = new Date(`${stage.start}T00:00:00-04:00`);
  const end = new Date(`${stage.end}T23:59:59-04:00`);
  return today >= start && today <= end;
}

export function RegistrationTimeline({ stages, text }: RegistrationTimelineProps) {
  return (
    <div className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--rule)] pb-4">
        <div>
          <p className="section-kicker">{text.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            {stages.find((stage) => isCurrentStage(stage)) ? text.current : ""}
          </p>
        </div>
      </div>
      <ol className="mt-4 list-none space-y-3 p-0">
        {stages.map((stage, index) => {
          const active = isCurrentStage(stage);
          return (
            <li key={stage.id}>
              <article
                className={`relative border px-4 py-3.5 pl-11 transition-colors ${active ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)]" : "border-[var(--rule)] bg-[var(--panel)]"}`}
              >
                <span
                  aria-hidden
                  className={`absolute left-3 top-3.5 flex h-6 w-6 items-center justify-center rounded-full border text-[11px] font-bold ${
                    active ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--rule)] bg-[var(--panel)] text-[var(--muted)]"
                  }`}
                >
                  {index + 1}
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[var(--accent)]">{stage.label}</p>
                    <p className="mt-1 text-[13px] text-[var(--muted)]">
                      {stage.start} {text.to} {stage.end}
                    </p>
                  </div>
                  {active ? (
                    <span className="inline-flex items-center rounded-full border border-[var(--accent)] bg-[rgba(20,32,130,0.08)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
                      {text.current}
                    </span>
                  ) : null}
                </div>
                <div className="mt-3 grid gap-2.5 md:grid-cols-2">
                  <p className="text-[13px] text-[var(--text)]">
                    {text.delegationFee}: {stage.delegationFee}
                  </p>
                  <p className="text-[13px] text-[var(--text)]">
                    {text.delegateFee}: {stage.delegateFee}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
