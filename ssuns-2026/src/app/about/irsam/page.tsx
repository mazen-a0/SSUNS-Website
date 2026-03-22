"use client";

import Link from "next/link";
import { DossierChapterPage } from "@/components/DossierChapterPage";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutIrsamPage() {
  const { aboutContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/irsam");
  if (!chapter) return null;

  return (
    <>
      <DossierChapterPage chapter={chapter} chapters={aboutContent.chapters} eyebrow={aboutContent.title} />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="mx-auto max-w-[72rem] border-t border-[var(--rule)] pt-6">
          <Link className="inline-flex items-center gap-3 border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href="https://irsam.ca" target="_blank">
            <span>Visit IRSAM</span>
            <span aria-hidden className="h-px w-8 bg-[var(--accent)]" />
          </Link>
        </div>
      </section>
    </>
  );
}
