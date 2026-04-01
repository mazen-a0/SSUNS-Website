"use client";

import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ProfileCard } from "@/components/ProfileCard";
import { SecretariatModal } from "@/components/SecretariatModal";
import type { SecretariatMember } from "@/content/en/about";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutSecretariatPage() {
  const { aboutContent, contactContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/secretariat");
  const [activeMember, setActiveMember] = useState<SecretariatMember | null>(null);
  const directoryByName = new Map(contactContent.directory.map((entry) => [entry.name, entry.email]));
  const members = aboutContent.secretariatMembers.map((member) => ({
    ...member,
    email: member.email ?? directoryByName.get(member.name),
  }));

  if (!chapter) return null;

  return (
    <>
      <PageHero eyebrow={aboutContent.title} intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="space-y-8">
          <article className="theme-panel-strong paper-grain rounded-[8px] p-7 sm:p-10">
            <div className="space-y-5 text-sm leading-7 text-[var(--text)] sm:text-[1.02rem]">
              {chapter.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <LayoutGroup id="secretariat-cards">
            <section className="mx-auto grid max-w-[64rem] justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <ProfileCard
                  bio={member.bio}
                  email={member.email}
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
      </section>
    </>
  );
}
