"use client";

import { DossierChapterPage } from "@/components/DossierChapterPage";
import { useSiteContent } from "@/lib/useSiteContent";

export default function ResourcesHandbookPage() {
  const { resourcesPageContent } = useSiteContent();
  const chapter = resourcesPageContent.chapters.find((item) => item.href === "/resources/handbook");
  if (!chapter) return null;
  return <DossierChapterPage chapter={chapter} chapters={resourcesPageContent.chapters} eyebrow={resourcesPageContent.title} />;
}
