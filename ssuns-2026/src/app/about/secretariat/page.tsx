"use client";

import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { ProfileCard } from "@/components/ProfileCard";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutSecretariatPage() {
  const { aboutContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/secretariat");

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] xl:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <DossierNav currentHref={chapter.href} items={aboutContent.chapters} />
          </aside>

          <div className="space-y-8">
            <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-10">
              <div className="space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {aboutContent.secretariatMembers.map((member) => (
                <ProfileCard bio={member.bio} imageSrc={member.headshotSrc} key={member.name} name={member.name} role={member.role} />
              ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
