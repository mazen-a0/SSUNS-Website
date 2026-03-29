"use client";

import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import { DossierNav } from "@/components/DossierNav";
import { PageHero } from "@/components/PageHero";
import { ProfileCard } from "@/components/ProfileCard";
import { SecretariatModal } from "@/components/SecretariatModal";
import type { SecretariatMember } from "@/content/en/about";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutSecretariatPage() {
  const { aboutContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/secretariat");
  const [activeMember, setActiveMember] = useState<SecretariatMember | null>(null);

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
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

            <LayoutGroup id="secretariat-cards">
              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {aboutContent.secretariatMembers.map((member) => (
                  <ProfileCard
                    bio={member.bio}
                    id={member.name}
                    imageSrc={member.headshotSrc}
                    key={member.name}
                    name={member.name}
                    onOpen={() => setActiveMember(member)}
                    role={member.role}
                  />
                ))}
              </section>

              <SecretariatModal member={activeMember} onClose={() => setActiveMember(null)} />
            </LayoutGroup>
          </div>
        </div>
      </section>
    </>
  );
}
