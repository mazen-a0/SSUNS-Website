import { cn } from "@/lib/cn";

type PageHeroProps = {
  title: string;
  intro: string;
  eyebrow?: string;
  className?: string;
};

export function PageHero({ title, intro, eyebrow, className }: PageHeroProps) {
  return (
    <section className={cn("page-shell pt-14 pb-12 sm:pt-16 sm:pb-14", className)}>
      <div className="theme-panel-strong paper-grain section-entrance relative overflow-hidden px-7 py-10 sm:px-10 sm:py-12">
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <div aria-hidden className="mt-4 h-px max-w-[14rem] bg-[linear-gradient(90deg,var(--accent-2),transparent)]" />
        <div className="mt-6 max-w-4xl">
          <h1 className="font-display text-4xl leading-[0.92] text-[var(--accent)] sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--muted)] sm:text-lg">{intro}</p>
        </div>
      </div>
    </section>
  );
}
