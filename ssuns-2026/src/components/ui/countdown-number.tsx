"use client";

import { useEffect, useMemo, useState } from "react";
import NumberFlow from "@number-flow/react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type CountdownNumberProps = {
  endDate: Date;
  startDate?: Date;
  className?: string;
  /** Smaller tiles for dense layouts (e.g. hero sidebar) */
  compact?: boolean;
  labels?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const defaultLabels = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
};

function getTimeLeft(endDate: Date, startDate?: Date): TimeLeft {
  const start = startDate ? new Date(startDate) : new Date();
  const end = new Date(endDate);
  const difference = end.getTime() - start.getTime();

  if (difference <= 0 || Number.isNaN(difference)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function CountdownNumber({ endDate, startDate, className, compact = false, labels = defaultLabels }: CountdownNumberProps) {
  const prefersReducedMotion = useReducedMotion();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(endDate, startDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(endDate, startDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [endDate, startDate]);

  const units = useMemo(
    () => [
      { key: "days", value: timeLeft.days, label: labels.days },
      { key: "hours", value: timeLeft.hours, label: labels.hours },
      { key: "minutes", value: timeLeft.minutes, label: labels.minutes },
      { key: "seconds", value: timeLeft.seconds, label: labels.seconds },
    ],
    [labels.days, labels.hours, labels.minutes, labels.seconds, timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds],
  );

  const tileClass = cn(
    "flex flex-col items-center justify-center rounded-[6px] text-center",
    compact
      ? "min-w-[3.25rem] border border-white/16 bg-[rgba(8,14,46,0.55)] px-2 py-2 sm:min-w-[3.75rem]"
      : "theme-panel min-w-[4.5rem] px-2.5 py-2.5 sm:min-w-[5.25rem] sm:px-3 sm:py-3",
  );
  const digitClass = cn(
    "font-semibold leading-none tabular-nums",
    compact ? "text-lg text-white sm:text-xl" : "text-2xl text-[var(--accent)] sm:text-3xl",
  );
  const labelClass = cn(
    "mt-0.5 font-semibold uppercase tracking-[0.06em]",
    compact ? "text-[9px] text-[#b4caff]" : "text-[10px] text-[var(--muted)]",
  );

  return (
    <div className={cn("flex flex-wrap items-center gap-2 sm:gap-3", className)} suppressHydrationWarning>
      {units.map((unit, index) => {
        const body = (
          <div className={tileClass}>
            <NumberFlow className={digitClass} format={{ minimumIntegerDigits: 2 }} value={unit.value} />
            <span className={labelClass}>{unit.label}</span>
          </div>
        );

        return (
          <div className="flex items-center gap-2 sm:gap-3" key={unit.key}>
            {prefersReducedMotion ? (
              body
            ) : (
              <motion.div initial={{ opacity: 0, y: 6 }} transition={{ delay: index * 0.04, duration: 0.3, ease: "easeOut" }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {body}
              </motion.div>
            )}
            {index < units.length - 1 ? (
              <span className={cn("font-semibold text-[var(--muted)]", compact ? "text-sm text-white/35" : "hidden text-lg sm:inline")} aria-hidden>
                :
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
