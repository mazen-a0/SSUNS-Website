"use client";

import { DossierChapterPage } from "@/components/DossierChapterPage";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ConferenceDrcPage() {
  const { conferenceContent } = useSiteContent();
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/delegate-resource-center");
  if (!chapter) return null;
  return <DossierChapterPage chapter={chapter} chapters={conferenceContent.chapters} eyebrow={conferenceContent.title} />;
}
