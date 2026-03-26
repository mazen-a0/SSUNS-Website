"use client";

import { useEffect, useState } from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { GlassNav } from "@/components/GlassNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";
import { useSiteContent } from "@/lib/useSiteContent";

type SiteChromeProps = {
  children: React.ReactNode;
};

type PreviewMenuSection = {
  href: string;
  label: string;
  description: string;
};

const aboutPreviewOrder = ["/about/mission", "/about/secretariat", "/about/coordinators", "/about/legacy", "/about/irsam", "/about/faqs"] as const;
const conferencePreviewOrder = [
  "/conference/venue",
  "/conference/schedule",
  "/conference/icao",
  "/conference/charity-partner",
  "/conference/delegate-resource-center",
] as const;
const committeesPreviewOrder = ["/committees", "/committees/awards", "/committees/policies"] as const;
const registrationPreviewOrder = ["/registration", "/registration/how-to-register", "/registration/financial-aid"] as const;

function pickPreviewSections(
  chapters: Array<{ href: string; title: string }>,
  order: readonly string[],
  descriptions: Record<string, string>,
): PreviewMenuSection[] {
  return order
    .map((href) => {
      const chapter = chapters.find((item) => item.href === href);
      if (!chapter) return null;
      return {
        href: chapter.href,
        label: chapter.title,
        description: descriptions[href] ?? chapter.title,
      };
    })
    .filter((item): item is PreviewMenuSection => item !== null);
}

export function SiteChrome({ children }: SiteChromeProps) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { language, setLanguage } = useAppPreferences();
  const {
    aboutContent,
    committeesPageContent,
    conferenceContent,
    footerContent,
    navItems,
    registrationContent,
    searchIndex,
    uiText,
  } = useSiteContent();

  useEffect(() => {
    const openSearch = () => setPaletteOpen(true);
    window.addEventListener("ssuns:open-search", openSearch as EventListener);
    return () => window.removeEventListener("ssuns:open-search", openSearch as EventListener);
  }, []);

  const descriptions =
    language === "fr"
      ? {
          "/about/mission": "Mission et mandat",
          "/about/secretariat": "Équipe de direction",
          "/about/coordinators": "Répertoire des coordinateurs",
          "/about/legacy": "Historique de la conférence",
          "/about/irsam": "Organisme partenaire",
          "/about/faqs": "Questions fréquentes",
          "/conference/venue": "Hôtel + tarifs + carte",
          "/conference/schedule": "Calendrier de la conférence",
          "/conference/icao": "Référence du comité ICAO",
          "/conference/charity-partner": "Information sur le partenaire",
          "/conference/delegate-resource-center": "Documents et aide pour les délégués",
          "/committees": "Liste des comités et dossiers",
          "/committees/awards": "Prix et distinctions",
          "/committees/policies": "Politiques et consignes",
          "/registration": "Information sur l'inscription",
          "/registration/how-to-register": "Étapes d'inscription",
          "/registration/financial-aid": "Soutien financier",
        }
      : {
          "/about/mission": "Mission and mandate",
          "/about/secretariat": "Leadership team",
          "/about/coordinators": "Coordinator directory",
          "/about/legacy": "Past conference context",
          "/about/irsam": "Partner organization",
          "/about/faqs": "Common questions",
          "/conference/venue": "Hotel + rates + map",
          "/conference/schedule": "Conference calendar",
          "/conference/icao": "ICAO committee reference",
          "/conference/charity-partner": "Partner information",
          "/conference/delegate-resource-center": "Delegate documents and help",
          "/committees": "Committee list and dossiers",
          "/committees/awards": "Awards and distinctions",
          "/committees/policies": "Policies and guidance",
          "/registration": "Registration information",
          "/registration/how-to-register": "Registration steps",
          "/registration/financial-aid": "Financial aid",
        };

  const previewMenus: Record<string, PreviewMenuSection[]> = {
    "/about": pickPreviewSections(aboutContent.chapters, aboutPreviewOrder, descriptions),
    "/conference": pickPreviewSections(conferenceContent.chapters, conferencePreviewOrder, descriptions),
    "/committees": pickPreviewSections(committeesPageContent.chapters, committeesPreviewOrder, descriptions),
    "/registration": pickPreviewSections(registrationContent.chapters, registrationPreviewOrder, descriptions),
  };

  return (
    <>
      <GlassNav
        closeMenuLabel={uiText.closeMenu}
        homeAriaLabel={uiText.homeAria}
        items={navItems}
        language={language}
        languageEnglishLabel={uiText.languageEnglish}
        languageFrenchLabel={uiText.languageFrench}
        languageSwitchLabel={uiText.languageSwitchLabel}
        mastheadLabel={uiText.mastheadLabel}
        onOpenPalette={() => setPaletteOpen(true)}
        openMenuLabel={uiText.openMenu}
        openPaletteLabel={uiText.openCommandPalette}
        previewMenus={previewMenus}
        searchLabel={uiText.searchLabel}
        setLanguage={setLanguage}
        socialLinks={footerContent.socialLinks}
      />
      <main>{children}</main>
      <SiteFooter />
      <CommandPalette
        actions={searchIndex}
        onOpenChange={setPaletteOpen}
        open={paletteOpen}
        text={{
          closeLabel: uiText.closePalette,
          contentGroupLabel: uiText.commandGroupContent,
          empty: uiText.commandEmpty,
          hint: uiText.commandHint,
          navigationGroupLabel: uiText.commandGroupNavigation,
          placeholder: uiText.commandPlaceholder,
          title: uiText.commandTitle,
        }}
      />
    </>
  );
}
