"use client";

import { DossierChapterPage } from "@/components/DossierChapterPage";
import { useSiteContent } from "@/lib/useSiteContent";

export default function RegistrationFinancialAidPage() {
  const { registrationContent } = useSiteContent();
  const chapter = registrationContent.chapters.find((item) => item.href === "/registration/financial-aid");
  if (!chapter) return null;
  return <DossierChapterPage chapter={chapter} chapters={registrationContent.chapters} eyebrow={registrationContent.title} />;
}
