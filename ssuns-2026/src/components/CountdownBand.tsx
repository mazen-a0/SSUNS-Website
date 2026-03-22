"use client";

import { useEffect, useState } from "react";

type CountdownBandProps = {
  target: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
  };
};

function getCountdown(target: string) {
  const distance = new Date(target).getTime() - Date.now();
  if (Number.isNaN(distance) || distance <= 0) {
    return null;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

export function CountdownBand({ target, labels }: CountdownBandProps) {
  const [countdown, setCountdown] = useState(() => getCountdown(target));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown(target));
    }, 60_000);

    return () => window.clearInterval(interval);
  }, [target]);

  if (!countdown) return null;

  return (
    <div className="rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-5 py-5 text-white">
      <div className="grid gap-4 sm:grid-cols-3">
        <article>
          <p className="section-kicker text-[#b4caff]">{labels.days}</p>
          <p className="mt-2 text-4xl font-semibold leading-none">{countdown.days}</p>
        </article>
        <article>
          <p className="section-kicker text-[#b4caff]">{labels.hours}</p>
          <p className="mt-2 text-4xl font-semibold leading-none">{countdown.hours}</p>
        </article>
        <article>
          <p className="section-kicker text-[#b4caff]">{labels.minutes}</p>
          <p className="mt-2 text-4xl font-semibold leading-none">{countdown.minutes}</p>
        </article>
      </div>
    </div>
  );
}
