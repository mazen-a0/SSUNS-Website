import { GlassCard } from "@/components/GlassCard";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { commonResources, resourcesPageContent } from "@/content/en/resources";

export default function ResourcesPage() {
  return (
    <>
      <PageHero intro={resourcesPageContent.intro} title={resourcesPageContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {commonResources.map((resource) => (
            <SectionReveal key={resource.id}>
              <GlassCard className="h-full">
                <span className="relative -top-24 block" id={resource.id} />
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">{resource.category}</p>
                <h2 className="mt-3 font-display text-2xl uppercase text-[var(--color-brand-navy)]">{resource.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{resource.description}</p>
                <p className="mt-6 text-sm font-semibold text-[var(--color-brand-blue)]">
                  {resourcesPageContent.placeholderLabel}
                </p>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
