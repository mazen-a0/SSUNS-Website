import { GlassCard } from "@/components/GlassCard";
import { LiquidButton } from "@/components/LiquidButton";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { registrationContent } from "@/content/en/site";

export default function RegistrationPage() {
  return (
    <>
      <PageHero intro={registrationContent.intro} title={registrationContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <GlassCard>
            <ol className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              {registrationContent.steps.map((step, index) => (
                <li key={step} className="rounded-2xl border border-white/55 bg-white/55 px-4 py-3">
                  <span className="mr-2 font-semibold text-[var(--color-brand-navy)]">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <LiquidButton className="mt-6" href={registrationContent.cta.href} label={registrationContent.cta.label} />
          </GlassCard>
        </SectionReveal>
      </section>
    </>
  );
}
