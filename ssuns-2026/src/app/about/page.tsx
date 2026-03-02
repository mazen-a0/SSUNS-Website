import { GlassCard } from "@/components/GlassCard";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { aboutContent } from "@/content/en/site";

export default function AboutPage() {
  return (
    <>
      <PageHero intro={aboutContent.intro} title={aboutContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <GlassCard>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              {aboutContent.points.map((point) => (
                <li key={point} className="rounded-2xl border border-white/55 bg-white/55 px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </GlassCard>
        </SectionReveal>
      </section>
    </>
  );
}
