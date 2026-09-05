"use client";

import Image from "next/image";
import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutIrsamPage() {
  const { aboutContent, language } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/irsam");

  if (!chapter) return null;

  const labels =
    language === "fr"
      ? {
          organization: "Organisation mère",
          visit: "Visiter IRSAM",
          emblemAlt: "Emblème de l’IRSAM avec colombe et globe",
        }
      : {
          organization: "Parent organization",
          visit: "Visit IRSAM",
          emblemAlt: "IRSAM emblem with dove and globe",
        };

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={aboutContent.chapters} />
          </aside>

          <article className="theme-panel-strong paper-grain rounded-[8px] p-6 sm:p-8 md:p-12">
            <div className="flex flex-col gap-6 border-b border-[var(--rule)] pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 max-w-3xl">
                <p className="section-kicker">{labels.organization}</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--accent)] sm:text-4xl">{chapter.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">{chapter.summary}</p>
              </div>

              <div className="flex aspect-square w-24 shrink-0 items-center justify-center rounded-full border border-[var(--rule)] bg-white/75 p-3 shadow-[0_12px_28px_rgba(20,32,130,0.07)] sm:w-28">
                <Image
                  alt={labels.emblemAlt}
                  className="h-auto w-full object-contain"
                  height={238}
                  priority
                  sizes="(min-width: 640px) 112px, 96px"
                  src="/logos/irsam2.png"
                  width={239}
                />
              </div>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem] sm:leading-8">
              {chapter.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 border-t border-[var(--rule)] pt-6">
              <Link
                className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[color-mix(in_srgb,var(--accent)_88%,black)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)]"
                href="https://irsam.ca"
                rel="noreferrer"
                target="_blank"
              >
                <span>{labels.visit}</span>
                <span aria-hidden className="text-base leading-none">↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
