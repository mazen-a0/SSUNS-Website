import Image from "next/image";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  title: string;
  intro: string;
  eyebrow?: string;
  className?: string;
};

export function PageHero({ title, intro, eyebrow, className }: PageHeroProps) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6", className)}>
      <div className="theme-panel-strong paper-grain relative overflow-hidden rounded-[8px] px-6 py-8 sm:px-8 sm:py-10">
        <Image
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-4 right-4 opacity-20"
          height={72}
          src="/graphics/ornate-frame.svg"
          width={72}
        />
        <Image
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-4 bottom-4 opacity-40"
          height={60}
          src="/graphics/corner-ornament.svg"
          width={60}
        />
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <Image alt="" aria-hidden="true" className="mt-4" height={18} src="/graphics/report-divider.svg" width={320} />
        <div className="mt-6 grid gap-5 lg:grid-cols-[0.82fr_0.18fr] lg:items-end">
          <div>
            <h1 className="font-display text-4xl uppercase leading-[0.92] text-[var(--accent)] sm:text-6xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">{intro}</p>
          </div>
          <div className="hidden border-l border-[var(--rule)] pl-5 lg:block">
            <Image alt="" aria-hidden="true" className="opacity-80" height={18} src="/graphics/report-divider.svg" width={120} />
          </div>
        </div>
      </div>
    </section>
  );
}
