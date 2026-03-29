import { Container } from "@/components/layout";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  title: string;
  intro: string;
  eyebrow?: string;
  className?: string;
};

export function PageHero({ title, intro, eyebrow, className }: PageHeroProps) {
  return (
    <section className={cn("pt-12 pb-10 sm:pt-14 sm:pb-12", className)}>
      <Container>
        <div className="theme-panel-strong paper-grain section-entrance relative overflow-hidden px-6 py-9 sm:px-9 sm:py-11">
          {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
          <div aria-hidden className="mt-4 h-px max-w-[14rem] bg-[linear-gradient(90deg,var(--accent-2),transparent)]" />
          <div className="mt-6 max-w-4xl">
            <h1 className="font-display text-4xl leading-[0.92] text-[var(--accent)] sm:text-6xl">{title}</h1>
            <p className="measure-prose mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">{intro}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
