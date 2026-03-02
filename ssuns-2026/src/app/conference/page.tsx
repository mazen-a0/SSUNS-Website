import { GlassCard } from "@/components/GlassCard";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { conferenceContent } from "@/content/en/site";

export default function ConferencePage() {
  return (
    <>
      <PageHero intro={conferenceContent.intro} title={conferenceContent.title} />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
        {conferenceContent.tracks.map((track) => (
          <SectionReveal key={track.title}>
            <GlassCard className="h-full">
              <h2 className="font-display text-3xl uppercase text-[var(--color-brand-navy)]">{track.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{track.body}</p>
            </GlassCard>
          </SectionReveal>
        ))}
      </section>
    </>
  );
}
