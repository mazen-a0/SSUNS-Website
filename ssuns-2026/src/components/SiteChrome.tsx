"use client";

import { useState } from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { GlassNav } from "@/components/GlassNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useAppPreferences } from "@/components/providers/AppPreferencesProvider";
import { useSiteContent } from "@/lib/useSiteContent";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { language, setLanguage } = useAppPreferences();
  const { navItems, searchIndex, uiText } = useSiteContent();

  return (
    <>
      <GlassNav
        closeMenuLabel={uiText.closeMenu}
        commandShortcutLabel={uiText.commandShortcut}
        homeAriaLabel={uiText.homeAria}
        items={navItems}
        language={language}
        languageEnglishLabel={uiText.languageEnglish}
        languageFrenchLabel={uiText.languageFrench}
        languageSwitchLabel={uiText.languageSwitchLabel}
        onOpenPalette={() => setPaletteOpen(true)}
        openMenuLabel={uiText.openMenu}
        openPaletteLabel={uiText.openCommandPalette}
        searchLabel={uiText.searchLabel}
        setLanguage={setLanguage}
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
