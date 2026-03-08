"use client";

import { DossierChapterPage } from "@/components/DossierChapterPage";
import { useSiteContent } from "@/lib/useSiteContent";

export default function AboutMissionPage() {
  const { aboutContent } = useSiteContent();
  const chapter = aboutContent.chapters.find((item) => item.href === "/about/mission");
  if (!chapter) return null;
  return <DossierChapterPage chapter={chapter} chapters={aboutContent.chapters} eyebrow={aboutContent.title} />;
}
