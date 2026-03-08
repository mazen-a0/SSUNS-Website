export type NavItem = {
  label: string;
  href: string;
};

export type UiText = {
  openMenu: string;
  closeMenu: string;
  homeAria: string;
  openCommandPalette: string;
  searchLabel: string;
  commandShortcut: string;
  commandPlaceholder: string;
  commandEmpty: string;
  commandHint: string;
  commandTitle: string;
  closePalette: string;
  commandGroupNavigation: string;
  commandGroupContent: string;
  languageSwitchLabel: string;
  languageEnglish: string;
  languageFrench: string;
};

export const siteMeta = {
  title: "SSUNS 2026",
  description:
    "Secondary Schools' United Nations Symposium 2026. Student-led diplomacy, global dialogue, and collaborative leadership.",
  locale: "en-CA",
};

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Conference", href: "/conference" },
  { label: "Committees", href: "/committees" },
  { label: "Registration", href: "/registration" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const uiText: UiText = {
  openMenu: "Open navigation",
  closeMenu: "Close navigation",
  homeAria: "SSUNS Home",
  openCommandPalette: "Open search",
  searchLabel: "Search",
  commandShortcut: "Cmd+K",
  commandPlaceholder: "Search SSUNS pages, committees, and resources...",
  commandEmpty: "No matches found.",
  commandHint: "Use arrow keys to navigate, Enter to open, and Esc to close.",
  commandTitle: "Search",
  closePalette: "Close search",
  commandGroupNavigation: "Navigation",
  commandGroupContent: "Content",
  languageSwitchLabel: "Language",
  languageEnglish: "EN",
  languageFrench: "FR",
};

export const footerContent = {
  motto: "Student diplomacy, staged with care.",
  watermarkLabel: "SSUNS",
  sections: [
    {
      title: "Conference",
      items: [
        { label: "Venue", href: "/conference/venue" },
        { label: "Committees", href: "/committees" },
        { label: "Schedule", href: "/conference/schedule" },
      ],
    },
    {
      title: "Preparation",
      items: [
        { label: "How To Register", href: "/registration/how-to-register" },
        { label: "Handbook", href: "/resources/handbook" },
        { label: "Policies", href: "/resources/policies" },
      ],
    },
  ],
  contactTitle: "Organizing Office",
  contacts: [
    "info@ssuns.org",
    "committees@ssuns.org",
    "registration@ssuns.org",
  ],
  closing: "SSUNS 2026 remains in preview until launch. Live ssuns.org stays on Squarespace until DNS flip.",
};
