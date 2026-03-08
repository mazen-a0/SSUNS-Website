"use client";

import { DossierChapterPage } from "@/components/DossierChapterPage";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ResourcesTrainingPage() {
  const { resourcesPageContent } = useSiteContent();
  const chapter = resourcesPageContent.chapters.find((item) => item.href === "/resources/training");
  if (!chapter) return null;
  return <DossierChapterPage chapter={chapter} chapters={resourcesPageContent.chapters} eyebrow={resourcesPageContent.title} />;
}
