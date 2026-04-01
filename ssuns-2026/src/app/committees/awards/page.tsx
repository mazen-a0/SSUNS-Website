"use client";

import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { Container } from "@/components/layout";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

const awardsPolicyHref = "/docs/SSUNS26_Award_Eval_Policy.pdf";

export default function CommitteesAwardsPage() {
  const { committeesPageContent, language } = useSiteContent();
  const chapter = committeesPageContent.chapters.find((item) => item.href === "/committees/awards");
  const isFrench = language === "fr";

  if (!chapter) return null;

  const overview = isFrench
    ? [
        "SSUNS demeure avant tout un forum conçu pour favoriser un dialogue sérieux et développer des solutions réfléchies à des enjeux mondiaux complexes. Les prix reconnaissent l'excellence, mais ils ne remplacent jamais l'objectif principal de la conférence : enrichir l'expérience d'apprentissage de tous les délégués.",
        "La politique des prix met particulièrement l'accent sur les qualités humaines et diplomatiques, notamment l'advocacy, le leadership, l'ingéniosité et la diplomatie. Les distinctions sont accordées aux délégués dont la conduite améliore concrètement l'apprentissage de leurs pairs.",
      ]
    : [
        "SSUNS is first and foremost a forum designed to foster meaningful dialogue and develop impactful solutions to complex global issues. Awards matter, but they never replace the conference's core purpose: enriching the learning experience of everyone in the room.",
        "The awards policy places particular emphasis on soft skills, especially advocacy, leadership, ingenuity, and diplomacy. Recognition is given to delegates whose conduct meaningfully strengthens the learning of their peers.",
      ];

  const gavelAwards = isFrench
    ? [
        {
          name: "Prix Viola Desmond pour l'advocacy",
          detail: "(3 points)",
        },
        {
          name: "Prix Hide Hyodo Shimizu pour le leadership",
          detail: "Réservé aux AG, ECOSOC et agences spécialisées (3 points)",
        },
        {
          name: "Prix Frederick Banting pour l'ingéniosité",
          detail: "Réservé aux comités de crise (3 points)",
        },
        {
          name: "Prix Sergeant Tommy Prince pour la diplomatie",
          detail: "(3 points)",
        },
      ]
    : [
        {
          name: "Viola Desmond Award for Advocacy",
          detail: "(3 points)",
        },
        {
          name: "Hide Hyodo Shimizu Award for Leadership",
          detail: "Limited to GAs, ECOSOCs, and Specialized Agencies (3 points)",
        },
        {
          name: "Frederick Banting Award for Ingenuity",
          detail: "Limited to Crisis committees (3 points)",
        },
        {
          name: "Sergeant Tommy Prince Award for Diplomacy",
          detail: "(3 points)",
        },
      ];

  const evaluationAreas = isFrench
    ? [
        "Règles de procédure, position du pays ou du personnage, et qualité des interventions.",
        "Leadership, collaboration, créativité et volonté d'apprendre et de s'améliorer.",
        "Pour les comités avec résolutions : rédaction, mécanismes, fusions et qualité du travail de bloc.",
        "Pour les comités avec directives : rédaction des directives, stratégie de crise et qualité des notes au backroom.",
        "Pour les doubles délégations : alignement du duo, partage des responsabilités et respect mutuel.",
      ]
    : [
        "Rules of procedure, country or character position, and speaking performance.",
        "Leadership, collaboration, creativity, and willingness to learn and improve.",
        "For resolution-cycle committees: drafting quality, mechanisms, mergers, and bloc-building.",
        "For directive-cycle committees: directive drafting, crisis strategy, and backroom note quality.",
        "For double-delegate committees: partner alignment, workload sharing, and mutual respect.",
      ];

  const otherAwards = isFrench
    ? [
        {
          name: "Prix du délégué remarquable de SSUNS",
          detail: "(2 points)",
        },
        {
          name: "Mention honorable",
          detail: "(1 point)",
        },
        {
          name: "Répartition des prix",
          detail: "Le nombre de prix de délégué remarquable et de mentions honorables accordés dans chaque comité est proportionnel à la taille du comité.",
        },
      ]
    : [
        {
          name: "SSUNS Outstanding Delegate Award",
          detail: "(2 points)",
        },
        {
          name: "Honourable Mention Certificate",
          detail: "(1 point)",
        },
        {
          name: "Award distribution",
          detail: "The number of Outstanding Delegate awards and Honourable Mentions in each committee is granted in proportion to committee size.",
        },
      ];

  const delegationBullets = isFrench
    ? [
        {
          name: "Grande délégation",
          detail:
            "Au-dessus de la taille médiane des délégations de SSUNS. Les prix sont Meilleure grande délégation et Grande délégation remarquable.",
        },
        {
          name: "Petite délégation",
          detail:
            "En dessous de la taille médiane des délégations de SSUNS, avec un minimum de quatre délégués. Les prix sont Meilleure petite délégation et Petite délégation remarquable.",
        },
        {
          name: "Méthode de classement",
          detail: "Le classement est calculé en divisant le total des points obtenus par le nombre de délégués.",
        },
        {
          name: "Comités à double délégation",
          detail: "Les prix obtenus dans les comités à double délégation comptent pour le double de leur valeur normale.",
        },
        {
          name: "Comités Ad Hoc",
          detail: "Les gavels remportés dans les comités Ad Hoc comptent également pour le double de leur valeur normale.",
        },
      ]
    : [
        {
          name: "Large Delegation",
          detail:
            "Above the median SSUNS delegation size. Available awards are Best Large Delegation and Outstanding Large Delegation.",
        },
        {
          name: "Small Delegation",
          detail:
            "Below the median SSUNS delegation size, with a minimum of four delegates. Available awards are Best Small Delegation and Outstanding Small Delegation.",
        },
        {
          name: "Ranking method",
          detail: "Rankings are calculated by dividing total award points by the number of delegates in the delegation.",
        },
        {
          name: "Double-delegate committees",
          detail: "Awards earned in double-delegate committees are weighted at twice their standard point value.",
        },
        {
          name: "Ad Hoc committees",
          detail: "Gavels earned in Ad Hoc committees are also weighted at twice their standard point value.",
        },
      ];

  return (
    <>
      <PageHero eyebrow={committeesPageContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="pb-12">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
            <aside className="sticky-below-header">
              <DossierNav currentHref={chapter.href} items={committeesPageContent.chapters} />
            </aside>

            <div className="space-y-8">
              <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
                <div className="flex flex-col gap-5 border-b border-[var(--rule)] pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="section-kicker">{isFrench ? "Politique des prix" : "Awards Policy"}</p>
                    <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--accent)]">
                      {isFrench ? "Comment SSUNS reconnaît l'excellence" : "How SSUNS recognizes excellence"}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      className="inline-flex items-center justify-center rounded-[8px] border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--accent-strong)]"
                      href={awardsPolicyHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {isFrench ? "Lire la politique complète (PDF)" : "Read full policy (PDF)"}
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)]"
                      href={awardsPolicyHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {isFrench ? "Télécharger" : "Download"}
                    </Link>
                  </div>
                </div>

                <div className="mt-5 space-y-4 body-copy">
                  {overview.map((paragraph) => (
                    <p className="measure-prose" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>

              <section className="grid gap-6 xl:grid-cols-[0.56fr_0.44fr]">
                <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
                  <p className="section-kicker">{isFrench ? "Prix individuels" : "Individual Awards"}</p>
                  <div className="mt-5 space-y-5 border-t border-[var(--rule)] pt-5">
                    <article>
                      <h2 className="font-display text-3xl leading-tight text-[var(--accent)]">{isFrench ? "Prix Gavel" : "Gavel Awards"}</h2>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                        {gavelAwards.map((award) => (
                          <li key={award.name}>
                            <span className="font-semibold text-[var(--heading)]">{award.name}</span>
                            <span className="text-[var(--text)]"> {award.detail}</span>
                          </li>
                        ))}
                        <li className="text-[var(--muted)]">
                          {isFrench
                            ? "Tous les prix Gavel sont considérés comme équivalents ; il n'existe aucun classement entre eux."
                            : "All gavel awards are considered equivalent; there is no ranking among the individual gavel awards."}
                        </li>
                      </ul>
                    </article>

                    <article className="border-t border-[var(--rule)] pt-5">
                      <h3 className="font-display text-2xl leading-tight text-[var(--accent)]">
                        {isFrench ? "Autres distinctions" : "Other Awards"}
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                        {otherAwards.map((award) => (
                          <li key={award.name}>
                            <span className="font-semibold text-[var(--heading)]">{award.name}</span>
                            <span className="text-[var(--text)]"> {award.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>

                    <article className="border-t border-[var(--rule)] pt-5">
                      <h3 className="font-display text-2xl leading-tight text-[var(--accent)]">
                        {isFrench ? "Ce que le dais évalue" : "What the dais evaluates"}
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                        {evaluationAreas.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                        {isFrench
                          ? "Consultez la politique des prix pour une explication plus détaillée des attentes du dais."
                          : "Read the awards policy for more detailed information about what the dais evaluates."}
                      </p>
                    </article>
                  </div>
                </article>

                <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
                  <p className="section-kicker">{isFrench ? "Prix de délégation" : "Delegation Awards"}</p>
                  <div className="mt-5 space-y-5 border-t border-[var(--rule)] pt-5 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                    <article>
                      <h2 className="font-display text-3xl leading-tight text-[var(--accent)]">
                        {isFrench ? "Classement des délégations" : "Delegation standings"}
                      </h2>
                      <ul className="mt-4 space-y-3">
                        {delegationBullets.map((item) => (
                          <li className="text-sm leading-relaxed text-[var(--text)] sm:text-base" key={item.name}>
                            <span className="font-semibold text-[var(--heading)]">{item.name}</span>
                            <span className="text-[var(--text)]"> {item.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
