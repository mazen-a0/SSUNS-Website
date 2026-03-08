"use client";

import { getContent } from "@/content/registry";
import { buildSearchIndex } from "@/content/search";
import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";

export function useSiteContent() {
  const { language } = useAppPreferences();
  const content = getContent(language);
  const alternateContent = getContent(language === "en" ? "fr" : "en");
  const primarySearchIndex = buildSearchIndex(content);
  const alternateSearchIndex = buildSearchIndex(alternateContent)
    .filter((entry) => entry.group === "content")
    .map((entry) => ({ ...entry, id: `${entry.id}-${language === "en" ? "fr" : "en"}` }));

  return {
    language,
    ...content,
    searchIndex: [...primarySearchIndex, ...alternateSearchIndex],
  };
}
