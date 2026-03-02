import { cn } from "@/lib/cn";

type PageHeroProps = {
  title: string;
  intro: string;
  eyebrow?: string;
  className?: string;
};

export function PageHero({ title, intro, eyebrow, className }: PageHeroProps) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6", className)}>
      {eyebrow ? (
        <p className="mb-3 font-accent text-lg text-[var(--color-brand-blue)]">{eyebrow}</p>
      ) : null}
      <h1 className="font-display text-4xl uppercase text-[var(--color-brand-navy)] sm:text-6xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">{intro}</p>
    </section>
  );
}
