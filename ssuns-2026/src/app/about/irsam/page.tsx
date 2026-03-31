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
          logoAlt: "Logo de l’IRSAM",
        }
      : {
          organization: "Parent organization",
          visit: "Visit IRSAM",
          logoAlt: "IRSAM logo",
        };

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={aboutContent.chapters} />
          </aside>

          <div className="space-y-6">
            <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
              <div className="flex flex-col gap-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <p className="section-kicker">{labels.organization}</p>
                    <h2 className="text-3xl font-semibold leading-tight text-[var(--accent)] sm:text-4xl">{chapter.title}</h2>
                  </div>

                  <div className="relative aspect-square w-[5.5rem] shrink-0 sm:w-[6.5rem] md:w-[7rem]">
                    <Image
                      alt={labels.logoAlt}
                      className="h-auto w-full object-contain"
                      height={600}
                      priority
                      sizes="(min-width: 768px) 112px, 88px"
                      src="/logos/irsam.png"
                      width={600}
                    />
                  </div>
                </div>

                <div className="border-t border-[var(--rule)] pt-6">
                  <div className="space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                    {chapter.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[var(--rule)] pt-6">
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
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
