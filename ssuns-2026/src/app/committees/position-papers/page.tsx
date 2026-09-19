"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { positionPaperGroups } from "@/content/positionPapers";
import { useSiteContent } from "@/lib/useSiteContent";

export default function PositionPapersPage() {
  const { committeesPageContent, language } = useSiteContent();
  const chapter = committeesPageContent.chapters.find((item) => item.href === "/committees/position-papers");
  const isFrench = language === "fr";

  if (!chapter) return null;

  const labels = isFrench
    ? {
        overview: "Apercu",
        requirements: "Exigences",
        format: "Format",
        deadline: "Date limite",
        writing: "Structure recommandee",
        submit: "Soumettre l'expose de position",
        viewCommittee: "Voir le dossier du comite",
        forms: "Formulaires de soumission",
        questions: "Questions",
        contact: "Personne-ressource",
        crisisNote: "Les comites de crise",
      }
    : {
        overview: "Overview",
        requirements: "Requirements",
        format: "Format",
        deadline: "Deadline",
        writing: "Recommended structure",
        submit: "Submit position paper",
        viewCommittee: "View committee file",
        forms: "Submission forms",
        questions: "Questions",
        contact: "Contact",
        crisisNote: "Crisis committees",
      };

  const requirementCards = [
    {
      title: labels.requirements,
      body: "Position papers are required for all delegates participating in General Assembly, Economic and Social Council, or Specialized Agency committees at SSUNS 2026.",
    },
    {
      title: labels.crisisNote,
      body: "Position papers are not required for Crisis Committees and will not be accepted for those committees.",
    },
    {
      title: labels.deadline,
      body: "Position papers must be submitted by November 11 at 11:59 PM in order to be considered for an award. Delegates who do not submit position papers will not be eligible for awards.",
    },
  ];

  const formatCards = [
    {
      title: labels.writing,
      body: "A strong position paper can be divided into three concise paragraphs: a summary of the issue, the nation or character's stance, and proposed solutions or courses of action.",
    },
    {
      title: labels.format,
      body: "All position papers should use Times New Roman, 12-point font, be single-spaced, and be a maximum of one page in length, including all subtopics.",
    },
    {
      title: "Citations",
      body: "Citations should be written in Chicago style, using footnotes and a bibliography. Delegates are encouraged to use additional research and supporting facts that will be helpful in debate.",
    },
    {
      title: "Voice",
      body: "Delegates representing a nation should write in the third person. Delegates representing a character should write in the first person from that character's point of view.",
    },
  ];

  return (
    <>
      <PageHero eyebrow={committeesPageContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={committeesPageContent.chapters} />
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain overflow-hidden rounded-[8px]">
              <div className="border-b border-[var(--rule)] p-7 sm:p-9">
                <p className="section-kicker">{labels.overview}</p>
                <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
                  <p>
                    Position papers give each delegation the chance to summarize its understanding of the issue at hand, make a nation&apos;s or
                    character&apos;s stance clear, and propose possible solutions before committee begins.
                  </p>
                  <p>
                    All eligible delegates must submit their papers through the Google Form assigned to their committee. Submissions should be uploaded
                    in PDF format.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-3">
                {requirementCards.map((card) => (
                  <section className="rounded-[8px] border border-[#23379f]/35 bg-[var(--panel)] p-5 shadow-[0_12px_28px_rgba(20,32,130,0.06)]" key={card.title}>
                    <p className="section-kicker">{card.title}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text)]">{card.body}</p>
                  </section>
                ))}
              </div>
            </article>

            <section className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{labels.format}</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {formatCards.map((card) => (
                  <article className="rounded-[8px] border border-[var(--rule)] bg-[rgba(253,247,234,0.58)] p-5" key={card.title}>
                    <h2 className="text-lg font-semibold text-[var(--accent)]">{card.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--text)]">{card.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-[var(--rule)] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-kicker">{labels.forms}</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--accent)]">Committee submission links</h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                  Select your committee below and use the assigned form to submit your position paper. These links can also be found on each eligible
                  committee&apos;s page.
                </p>
              </div>

              <div className="mt-6 space-y-7">
                {positionPaperGroups.map((group) => (
                  <section key={group.title}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold text-[var(--accent)]">{group.title}</h3>
                      <Link className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href={`mailto:${group.contact}`}>
                        {group.contact}
                      </Link>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {group.committees.map((committee) => (
                        <article className="rounded-[8px] border border-[var(--rule)] bg-white/72 p-4 shadow-[0_10px_24px_rgba(20,32,130,0.05)]" key={committee.formHref}>
                          <Link className="text-base font-semibold leading-snug text-[var(--accent)] hover:underline" href={committee.href}>
                            {committee.label}
                          </Link>
                          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                            <Link
                              className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[color-mix(in_srgb,var(--accent)_88%,black)]"
                              href={committee.formHref}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {labels.submit}
                            </Link>
                            <Link
                              className="inline-flex items-center justify-center rounded-full border border-[var(--rule-strong)] px-4 py-2.5 text-sm font-semibold text-[var(--accent)] transition-colors duration-150 hover:border-[var(--accent)]"
                              href={committee.href}
                            >
                              {labels.viewCommittee}
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>

            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <p className="section-kicker">{labels.questions}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text)] sm:text-base">
                For questions about position papers, delegates can contact the Deputy USG Committees for General Assemblies and Economic and Social
                Councils, the Deputy USG Committees for Specialized Agencies, or the USG Committees.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {["gaecosoc@ssuns.org", "spec@ssuns.org", "committees@ssuns.org"].map((email) => (
                  <Link
                    className="inline-flex rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[color-mix(in_srgb,var(--accent)_88%,black)]"
                    href={`mailto:${email}`}
                    key={email}
                  >
                    {email}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
