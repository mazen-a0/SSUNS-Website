"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/content/registry";

type AppPreferencesContextValue = {
  language: Locale;
  setLanguage: (language: Locale) => void;
};

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "ssuns-language";

function getStoredLanguage(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === "fr" ? "fr" : "en";
}

export function AppPreferencesProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>(getStoredLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>;
}

export function useAppPreferences() {
  const context = useContext(AppPreferencesContext);

  if (!context) {
    throw new Error("useAppPreferences must be used within AppPreferencesProvider");
  }

  return context;
}
