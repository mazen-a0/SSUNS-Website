import Image from "next/image";
import { GlassCard } from "@/components/GlassCard";
import { LiquidButton } from "@/components/LiquidButton";
import { SectionReveal } from "@/components/SectionReveal";
import { homeContent } from "@/content/en/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pt-12 pb-8 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <SectionReveal>
          <p className="font-accent text-xl text-[var(--color-brand-blue)]">{homeContent.eyebrow}</p>
          <h1 className="mt-3 font-display text-5xl uppercase leading-none text-[var(--color-brand-navy)] sm:text-7xl">
            {homeContent.headline}
          </h1>
          <p className="mt-3 font-accent text-2xl text-[var(--color-brand-blue)]">{homeContent.accent}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">{homeContent.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LiquidButton href={homeContent.primaryCta.href} label={homeContent.primaryCta.label} />
            <LiquidButton
              href={homeContent.secondaryCta.href}
              label={homeContent.secondaryCta.label}
              variant="ghost"
            />
          </div>
        </SectionReveal>

        <SectionReveal className="lg:justify-self-end">
          <GlassCard className="w-full max-w-md p-4 sm:p-6">
            <Image
              alt="SSUNS dove mark"
              className="mx-auto"
              height={170}
              priority
              src="/logos/ssuns-dove.png"
              width={170}
            />
            <div className="mt-5 grid grid-cols-3 gap-2">
              {homeContent.quickStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/55 bg-white/55 px-2 py-3 text-center">
                  <p className="text-xl font-semibold text-[var(--color-brand-navy)]">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </SectionReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
        {homeContent.sections.map((item, index) => (
          <SectionReveal key={item.title} className="h-full" >
            <GlassCard className="h-full" >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">0{index + 1}</p>
              <h2 className="mt-3 font-display text-3xl uppercase text-[var(--color-brand-navy)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.body}</p>
            </GlassCard>
          </SectionReveal>
        ))}
      </section>
    </>
  );
}
