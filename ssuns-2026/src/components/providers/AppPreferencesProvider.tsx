"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import type { Locale } from "@/content/registry";

type AppPreferencesContextValue = {
  language: Locale;
  setLanguage: (language: Locale) => void;
};

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "ssuns-language";
const LANGUAGE_CHANGE_EVENT = "ssuns-language-change";

function getStoredLanguage(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === "fr" ? "fr" : "en";
}

export function AppPreferencesProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    (callback) => {
      window.addEventListener("storage", callback);
      window.addEventListener(LANGUAGE_CHANGE_EVENT, callback as EventListener);
      return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback as EventListener);
      };
    },
    getStoredLanguage,
    () => "en",
  ) as Locale;

  const setLanguage = useCallback((nextLanguage: Locale) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
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
