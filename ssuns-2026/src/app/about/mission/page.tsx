"use client";

import Image from "next/image";
import Link from "next/link";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutMissionPage() {
  const { aboutContent, homeContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/mission");

  if (!chapter) return null;

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
              <p className="section-kicker">{homeContent.editorial.label}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--accent)] sm:text-4xl">{homeContent.editorial.title}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">{homeContent.editorial.subtitle}</p>
              <div className="mt-6 border-t border-[var(--rule)] pt-5">
                <div className="space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                  {homeContent.editorial.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>

            <article className="theme-panel-strong paper-grain overflow-hidden rounded-[8px] p-5 sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[8px] border border-[var(--rule)] bg-[var(--paper)]">
                  <Image
                    alt="The SSUNS 2026 Secretariat group portrait"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1280px) 420px, (min-width: 1024px) 45vw, 92vw"
                    src="/headshots/full_sec.jpeg"
                  />
                </div>
                <div className="min-w-0">
                  <p className="section-kicker">{aboutContent.title}</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--accent)]">Who we are</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--text)] sm:text-base">
                    The SSUNS Secretariat comprises 15 McGill students working under the Secretary-General to make SSUNS happen. After a year of work, the Secretariat hopes to break conference standards and deliver a smooth and enriching experience for all delegations this upcoming fall. To learn more about our individual Secretariat members, check out our Meet the Secretariat page.
                  </p>
                  <Link className="mt-5 inline-flex border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href="/about/secretariat">
                    Meet the Secretariat
                  </Link>
                </div>
              </div>
            </article>

            <article className="theme-panel-strong paper-grain p-8 sm:p-10 md:p-12">
              <div className="space-y-6 body-copy">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
