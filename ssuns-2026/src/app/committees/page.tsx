"use client";

import Image from "next/image";
import { CommitteesExplorer } from "@/components/CommitteesExplorer";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { EditorialGallery } from "@/components/media/EditorialGallery";
import { useSiteContent } from "@/lib/useSiteContent";

export default function CommitteesPage() {
  const { committees, committeesPageContent } = useSiteContent();
  const slatingChapter = committeesPageContent.chapters.find((chapter) => chapter.href === "/committees") ?? committeesPageContent.chapters[0];
  const committeeGalleryItems = [
    { id: "committee-photo-1", src: "/photos/delegates(3).JPG", alt: "Delegates debating in committee" },
    { id: "committee-photo-2", src: "/photos/chairs.JPG", alt: "Chairs and dais preparing materials" },
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
                  <p className="section-kicker">{slatingChapter.title}</p>
                  <div className="mt-5 space-y-4 text-[13px] leading-6 text-[var(--text)] sm:text-[0.95rem] sm:leading-7">
                    {slatingChapter.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
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
    </>
  );
}
