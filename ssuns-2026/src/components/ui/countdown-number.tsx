"use client";

import { useEffect, useMemo, useState } from "react";
import NumberFlow from "@number-flow/react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type CountdownNumberProps = {
  endDate: Date;
  startDate?: Date;
  className?: string;
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

export function CountdownNumber({ endDate, startDate, className, labels = defaultLabels }: CountdownNumberProps) {
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

  return (
    <div className={cn("flex flex-wrap items-center gap-3 sm:gap-4", className)}>
      {units.map((unit, index) => {
        const body = (
          <div className="theme-panel flex min-w-[4.75rem] flex-col items-center justify-center rounded-[8px] px-3 py-3 text-center sm:min-w-[5.5rem]">
            <NumberFlow className="text-2xl font-semibold leading-none text-[var(--accent)] sm:text-3xl" format={{ minimumIntegerDigits: 2 }} value={unit.value} />
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">{unit.label}</span>
          </div>
        );

        return (
          <div className="flex items-center gap-3" key={unit.key}>
            {prefersReducedMotion ? (
              body
            ) : (
              <motion.div initial={{ opacity: 0, y: 8 }} transition={{ delay: index * 0.05, duration: 0.35, ease: "easeOut" }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {body}
              </motion.div>
            )}
            {index < units.length - 1 ? <span className="hidden text-lg font-semibold text-[var(--muted)] sm:inline">:</span> : null}
          </div>
        );
      })}
    </div>
  );
}
