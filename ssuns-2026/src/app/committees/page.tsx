"use client";

import Image from "next/image";
import { useState } from "react";
import { CommitteesExplorer } from "@/components/CommitteesExplorer";
import { DossierNav } from "@/components/DossierNav";
import { SecretaryLetterModal } from "@/components/home/SecretaryLetterModal";
import { PageHero } from "@/components/PageHero";
import { EditorialGallery } from "@/components/media/EditorialGallery";
import { COMMITTEE_SLATE_IMAGES } from "@/lib/images";
import { useSiteContent } from "@/lib/useSiteContent";

export default function CommitteesPage() {
  const { committees, committeesPageContent, language } = useSiteContent();
  const slatingChapter = committeesPageContent.chapters.find((chapter) => chapter.href === "/committees") ?? committeesPageContent.chapters[0];
  const isFrench = language === "fr";
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const letterOpeningPreview = slatingChapter.body.slice(0, 3);
  const letterClosingPreview = slatingChapter.body.slice(-2);
  const letterKicker = isFrench ? "SGA Affaires des comités" : "USG Committee Affairs";
  const committeeGalleryItems = [
    { id: "committee-photo-1", src: COMMITTEE_SLATE_IMAGES[0], alt: "Delegates debating in committee" },
    { id: "committee-photo-2", src: COMMITTEE_SLATE_IMAGES[1], alt: "Chairs and dais preparing materials" },
    { id: "committee-photo-3", src: COMMITTEE_SLATE_IMAGES[2], alt: "Committee room during session" },
    { id: "committee-photo-4", src: COMMITTEE_SLATE_IMAGES[3], alt: "Delegates consulting notes before debate" },
  ];

  return (
    <>
      <PageHero intro={slatingChapter.summary} title={slatingChapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header space-y-6">
            <DossierNav currentHref="/committees" items={committeesPageContent.chapters} />
          </aside>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="min-w-0 flex-1">
                  <p className="section-kicker">{letterKicker}</p>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                    {letterOpeningPreview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <button
                    aria-haspopup="dialog"
                    className="mt-4 text-sm font-semibold text-[var(--accent)]"
                    onClick={() => setIsLetterOpen(true)}
                    type="button"
                  >
                    {isFrench ? "Lire la suite" : "Read more"}
                  </button>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                    {letterClosingPreview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6 border-l border-[var(--rule)] pl-4">
                    <p className="font-accent text-2xl leading-tight text-[var(--accent)]">Valeria Fonseca Ortega</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                      {isFrench ? "Secrétaire générale adjointe aux affaires des comités, SSUNS 2026" : "Under-Secretary-General for Committee Affairs, SSUNS 2026"}
                    </p>
                  </div>
                </div>

                <div className="w-[340px] max-w-[40vw] shrink-0 self-start overflow-hidden rounded-[8px] border border-[var(--rule)] bg-[var(--panel)]">
                    <Image
                      alt="Valeria Fonseca Ortega"
                      className="h-auto w-full object-cover"
                      height={425}
                      sizes="(min-width: 1280px) 340px, 40vw"
                      src="/headshots/vale.jpg"
                      width={340}
                    />
                </div>
              </div>
            </article>
            <EditorialGallery compact items={committeeGalleryItems} />
            <div className="animate-[sheet-in_420ms_ease-out]">
              <CommitteesExplorer committees={committees} pageContent={committeesPageContent} />
            </div>
          </div>
        </div>
      </section>
      <SecretaryLetterModal
        body={slatingChapter.body}
        imageAlt="Valeria Fonseca Ortega"
        imageSrc="/headshots/vale.jpg"
        kicker={letterKicker}
        onClose={() => setIsLetterOpen(false)}
        open={isLetterOpen}
        role={isFrench ? "Secrétaire générale adjointe aux affaires des comités, SSUNS 2026" : "Under-Secretary-General for Committee Affairs, SSUNS 2026"}
        signature="Valeria Fonseca Ortega"
        title={isFrench ? "Un message de la Secrétaire générale adjointe aux affaires des comités" : "A message from the Under-Secretary-General for Committee Affairs"}
      />
    </>
  );
}
