"use client";

import { DossierChapterPage } from "@/components/DossierChapterPage";
import { useSiteContent } from "@/lib/useSiteContent";

export default function RegistrationHowToRegisterPage() {
  const { registrationContent } = useSiteContent();
  const chapter = registrationContent.chapters.find((item) => item.href === "/registration/how-to-register");
  if (!chapter) return null;
  return <DossierChapterPage chapter={chapter} chapters={registrationContent.chapters} eyebrow={registrationContent.title} />;
}
