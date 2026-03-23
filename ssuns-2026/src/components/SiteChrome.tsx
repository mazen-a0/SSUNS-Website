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

  const previewMenus: Record<string, PreviewMenuSection[]> = {
    "/about": aboutContent.chapters
      .filter((chapter) => chapter.href !== "/about")
      .map((chapter) => ({ description: chapter.summary, href: chapter.href, label: chapter.title })),
    "/conference": conferenceContent.chapters
      .filter((chapter) => chapter.href !== "/conference")
      .map((chapter) => ({ description: chapter.summary, href: chapter.href, label: chapter.title })),
    "/committees": committeesPageContent.chapters.map((chapter) => ({
      description: chapter.summary,
      href: chapter.href,
      label: chapter.title,
    })),
    "/registration": registrationContent.chapters
      .filter((chapter) => chapter.href !== "/registration")
      .map((chapter) => ({ description: chapter.summary, href: chapter.href, label: chapter.title })),
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
