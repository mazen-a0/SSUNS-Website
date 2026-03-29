"use client";

import { ConferenceQuickLinks } from "@/components/ConferenceQuickLinks";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { ExpandablePanels } from "@/components/ui/expandable-panels";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferencePoliciesPage() {
  const { conferenceContent, language } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/policies");

  if (!chapter) return null;

  const isFrench = language === "fr";
  const panels = [
    {
      id: "technology",
      title: isFrench ? "Politique technologique" : "Technology Policy",
      summary: isFrench ? "Les règles technologiques varient selon la taille et le format des comités." : "Technology rules vary by committee size and format.",
      content: chapter.body,
    },
    {
      id: "pre-writing",
      title: isFrench ? "Politique de pré-rédaction" : "Pre-Writing Policy",
      summary: isFrench ? "En attente du texte canonique." : "Canonical guidance pending.",
      content: [isFrench ? "À venir." : "Coming soon."],
    },
    {
      id: "awards",
      title: isFrench ? "Politique des prix" : "Awards Policy",
      summary: isFrench ? "En attente du texte canonique." : "Canonical guidance pending.",
      content: [isFrench ? "À venir." : "Coming soon."],
    },
    {
      id: "ai",
      title: isFrench ? "Politique sur l’IA" : "AI Policy",
      summary: isFrench ? "En attente du texte canonique." : "Canonical guidance pending.",
      content: [isFrench ? "À venir." : "Coming soon."],
    },
  ];

  return (
    <>
      <PageHero eyebrow={conferenceContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <ConferenceQuickLinks className="mb-6" currentHref={chapter.href} />
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={conferenceContent.chapters} />
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-10">
              <p className="text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">{chapter.summary}</p>
            </article>

            <ExpandablePanels items={panels} />
          </div>
        </div>
      </section>
    </>
  );
}
