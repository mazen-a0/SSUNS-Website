"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CountdownBandProps = {
  target: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
  };
  /** Shown when the target date has passed (avoids an empty section). */
  endedMessage?: string;
  endedCta?: { label: string; href: string };
};

function getCountdownState(target: string) {
  const end = new Date(target).getTime();
  if (Number.isNaN(end)) {
    return { kind: "invalid" as const };
  }

  const distance = end - Date.now();
  if (distance <= 0) {
    return { kind: "ended" as const };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  return { kind: "upcoming" as const, days, hours, minutes };
}

export function CountdownBand({ target, labels, endedMessage, endedCta }: CountdownBandProps) {
  const [state, setState] = useState(() => getCountdownState(target));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setState(getCountdownState(target));
    }, 60_000);
    return () => window.clearInterval(interval);
  }, [target]);

  if (state.kind === "invalid") {
    return null;
  }

  if (state.kind === "ended") {
    if (!endedMessage) {
      return null;
    }

    return (
      <div className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-5 py-5 text-white">
        <p className="text-sm leading-relaxed text-[#e4edff]">{endedMessage}</p>
        {endedCta ? (
          <Link className="mt-4 inline-flex border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-white hover:text-[#dbe6ff]" href={endedCta.href}>
            {endedCta.label}
          </Link>
        ) : null}
      </div>
    );
  }

  return (
    <div className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-5 py-5 text-white">
      <div className="grid gap-4 sm:grid-cols-3">
        <article>
          <p className="section-kicker text-[#b4caff]">{labels.days}</p>
          <p className="mt-2 text-4xl font-semibold leading-none">{state.days}</p>
        </article>
        <article>
          <p className="section-kicker text-[#b4caff]">{labels.hours}</p>
          <p className="mt-2 text-4xl font-semibold leading-none">{state.hours}</p>
        </article>
        <article>
          <p className="section-kicker text-[#b4caff]">{labels.minutes}</p>
          <p className="mt-2 text-4xl font-semibold leading-none">{state.minutes}</p>
        </article>
      </div>
    </div>
  );
}
