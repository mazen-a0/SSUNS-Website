"use client";

import { useMemo, useState } from "react";
import { commonResources } from "@/content/en/resources";
import { navItems, uiText } from "@/content/en/site";
import { CommandPalette } from "@/components/CommandPalette";
import { GlassNav } from "@/components/GlassNav";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  const actions = useMemo(() => {
    const routeActions = [{ id: "home", label: "Home", description: "Go to homepage", href: "/", group: "Navigation" }].concat(
      navItems.map((item) => ({
        id: item.href,
        label: item.label,
        description: `Go to ${item.label}`,
        href: item.href,
        group: "Navigation",
      })),
    );

    const resourceActions = commonResources.map((resource) => ({
      id: resource.id,
      label: resource.title,
      description: resource.description,
      href: `/resources${resource.href}`,
      group: "Resources",
    }));

    return [...routeActions, ...resourceActions];
  }, []);

  return (
    <>
      <GlassNav
        closeMenuLabel={uiText.closeMenu}
        commandShortcutLabel={uiText.commandShortcut}
        homeAriaLabel={uiText.homeAria}
        items={navItems}
        onOpenPalette={() => setPaletteOpen(true)}
        openMenuLabel={uiText.openMenu}
        openPaletteLabel={uiText.openCommandPalette}
      />
      <main>{children}</main>
      <CommandPalette
        actions={actions}
        onOpenChange={setPaletteOpen}
        open={paletteOpen}
        text={{
          closeLabel: uiText.closePalette,
          empty: uiText.commandEmpty,
          hint: uiText.commandHint,
          placeholder: uiText.commandPlaceholder,
          title: uiText.commandTitle,
        }}
      />
    </>
  );
}
