"use client";

import { useMemo } from "react";
import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";
import { useContentBundles } from "@/components/providers/SiteContentProvider";
import { buildSearchIndex } from "@/content/search";

export function useSiteContent() {
  const { language } = useAppPreferences();
  const bundles = useContentBundles();
  const content = bundles[language] ?? bundles.en;
  const alternateLanguage = language === "en" ? "fr" : "en";
  const alternateContent = bundles[alternateLanguage] ?? bundles.en;

  const primarySearchIndex = useMemo(() => buildSearchIndex(content), [content]);
  const alternateSearchIndex = useMemo(
    () =>
      buildSearchIndex(alternateContent)
        .filter((entry) => entry.group === "content")
        .map((entry) => ({ ...entry, id: `${entry.id}-${alternateLanguage}` })),
    [alternateContent, alternateLanguage],
  );

  return {
    language,
    ...content,
    searchIndex: [...primarySearchIndex, ...alternateSearchIndex],
  };
}
