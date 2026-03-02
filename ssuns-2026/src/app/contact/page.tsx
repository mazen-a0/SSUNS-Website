import { GlassCard } from "@/components/GlassCard";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { contactContent } from "@/content/en/site";

export default function ContactPage() {
  return (
    <>
      <PageHero intro={contactContent.intro} title={contactContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal>
          <GlassCard>
            <ul className="space-y-3">
              {contactContent.items.map((item) => (
                <li key={item.label} className="rounded-2xl border border-white/55 bg-white/55 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">{item.label}</p>
                  <p className="mt-1 text-sm text-[var(--color-brand-navy)] sm:text-base">{item.value}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </SectionReveal>
      </section>
    </>
  );
}
