"use client";

import { createContext, useContext } from "react";
import type { ContentBundle, Locale } from "@/content/registry";

type SiteContentContextValue = {
  bundles: Record<Locale, ContentBundle>;
};

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export function SiteContentProvider({
  bundles,
  children,
}: {
  bundles: Record<Locale, ContentBundle>;
  children: React.ReactNode;
}) {
  return <SiteContentContext.Provider value={{ bundles }}>{children}</SiteContentContext.Provider>;
}

export function useContentBundles() {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error("useContentBundles must be used within SiteContentProvider");
  }

  return context.bundles;
}
