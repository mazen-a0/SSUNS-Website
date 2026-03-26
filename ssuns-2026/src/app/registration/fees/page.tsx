"use client";

import { DossierChapterPage } from "@/components/DossierChapterPage";
import { useSiteContent } from "@/lib/useSiteContent";

export default function RegistrationFeesPage() {
  const { registrationContent } = useSiteContent();
  const chapter = registrationContent.chapters.find((item) => item.href === "/registration/fees");
  const navItems = registrationContent.chapters.filter((item) =>
    ["/registration", "/registration/how-to-register", "/registration/financial-aid"].includes(item.href),
  );
  if (!chapter) return null;
  return <DossierChapterPage chapter={chapter} chapters={navItems} eyebrow={registrationContent.title} />;
}
