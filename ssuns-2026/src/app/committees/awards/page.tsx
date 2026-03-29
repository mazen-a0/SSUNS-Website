"use client";

import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

const awardVideoPlaceholders = [1, 2, 3, 4];

export default function CommitteesAwardsPage() {
  const { committeesPageContent, language } = useSiteContent();
  const chapter = committeesPageContent.chapters.find((item) => item.href === "/committees/awards");
  const isFrench = language === "fr";

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={committeesPageContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="xl:sticky xl:top-28 xl:self-start">
            <DossierNav currentHref={chapter.href} items={committeesPageContent.chapters} />
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
              <div className="space-y-4 body-copy">
                <p>{chapter.body[0]}</p>
              </div>
            </article>

            <section className="grid gap-6 xl:grid-cols-2">
              <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
                <p className="section-kicker">{isFrench ? "Prix individuels" : "Individual Awards"}</p>
                <div className="mt-5 space-y-4 border-t border-[var(--rule)] pt-5">
                  <article>
                    <h2 className="font-display text-3xl leading-tight text-[var(--accent)]">{isFrench ? "Prix Gavel" : "Gavel"}</h2>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                      <li>{chapter.body[2]}</li>
                      <li>{chapter.body[3]}</li>
                      <li>{chapter.body[4]}</li>
                      <li>{chapter.body[5]}</li>
                      <li className="text-[var(--muted)]">{chapter.body[6]}</li>
                    </ul>
                  </article>

                  <article className="border-t border-[var(--rule)] pt-5">
                    <h3 className="font-display text-2xl leading-tight text-[var(--accent)]">{isFrench ? "Prix de délégué remarquable" : "Outstanding Delegate Award"}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text)] sm:text-base">{chapter.body[8]}</p>
                  </article>

                  <article className="border-t border-[var(--rule)] pt-5">
                    <h3 className="font-display text-2xl leading-tight text-[var(--accent)]">{isFrench ? "Mention honorable" : "Honourable Mention"}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text)] sm:text-base">{chapter.body[10]}</p>
                  </article>
                </div>
              </article>

              <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-9">
                <p className="section-kicker">{isFrench ? "Prix de délégation" : "Delegation Awards"}</p>
                <div className="mt-5 space-y-5 border-t border-[var(--rule)] pt-5 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                  <article>
                    <h2 className="font-display text-3xl leading-tight text-[var(--accent)]">{isFrench ? "Grande délégation" : "Large Delegation"}</h2>
                    <p className="mt-3">{chapter.body[11]}</p>
                  </article>
                  <article className="border-t border-[var(--rule)] pt-5">
                    <h2 className="font-display text-3xl leading-tight text-[var(--accent)]">{isFrench ? "Petite délégation" : "Small Delegation"}</h2>
                    <p className="mt-3">{chapter.body[12]}</p>
                  </article>
                </div>
              </article>
            </section>

            <section className="theme-panel rounded-[8px] p-6 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--rule)] pb-4">
                <div>
                  <p className="section-kicker">{isFrench ? "Vidéos des prix" : "Award Videos"}</p>
                  <h2 className="font-display mt-3 text-3xl leading-tight text-[var(--accent)]">{isFrench ? "Vidéos explicatives" : "Video guidance"}</h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">{isFrench ? "À venir." : "Coming soon."}</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {awardVideoPlaceholders.map((item) => (
                  <article className="border border-[var(--rule)] p-4" key={item}>
                    {/* TODO(video): Replace this placeholder with the canonical awards YouTube embed once the URL is provided. */}
                    <div className="aspect-video w-full bg-[var(--paper-deep)]" />
                    <p className="mt-3 text-sm font-semibold text-[var(--accent)]">{isFrench ? `Vidéo des prix ${item}` : `Awards video ${item}`}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{isFrench ? "À venir." : "Coming soon."}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
