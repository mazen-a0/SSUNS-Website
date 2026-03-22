"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpValueProps = {
  value: string;
  className?: string;
};

function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) {
    return { prefix: "", number: null, suffix: value };
  }

  return {
    prefix: match[1],
    number: Number.parseInt(match[2], 10),
    suffix: match[3],
  };
}

export function CountUpValue({ value, className }: CountUpValueProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    const node = ref.current;
    if (!node || parsed.number === null || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        const start = performance.now();
        const duration = 3000;

        const tick = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const next = Math.round(parsed.number * progress);
          setDisplayValue(`${parsed.prefix}${next}${parsed.suffix}`);
          if (progress < 1) {
            window.requestAnimationFrame(tick);
          } else {
            setHasAnimated(true);
          }
        };

        window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated, parsed.number, parsed.prefix, parsed.suffix]);

  return (
    <span className={className} ref={ref}>
      {displayValue}
    </span>
  );
}
