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
  railIndexLabel: string;
  railContextLabel: string;
  railQuickLinksLabel: string;
  railCurrentLabel: string;
  railOpenLabel: string;
  railCloseLabel: string;
  railRegisterLabel: string;
  railContactLabel: string;
  railFaqLabel: string;
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
  mastheadLabel: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const siteMeta = {
  title: "SSUNS 2026",
  description:
    "Secondary Schools' United Nations Symposium 2026. Student-led diplomacy, global dialogue, and collaborative leadership.",
  locale: "en-CA",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Conference", href: "/conference" },
  { label: "Committees", href: "/committees" },
  { label: "Registration", href: "/registration" },
  { label: "Sponsor Us", href: "/sponsor-us" },
  { label: "Staff Resources", href: "/staff-resources" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/ssuns_official/" },
  { label: "TikTok", href: "https://www.tiktok.com/@ssuns2025" },
];

export const uiText: UiText = {
  openMenu: "Open navigation",
  closeMenu: "Close navigation",
  homeAria: "SSUNS Home",
  openCommandPalette: "Open search",
  searchLabel: "Search",
  railIndexLabel: "Index",
  railContextLabel: "Context",
  railQuickLinksLabel: "Quick Links",
  railCurrentLabel: "Current Section",
  railOpenLabel: "Open index",
  railCloseLabel: "Close index",
  railRegisterLabel: "Register",
  railContactLabel: "Contact",
  railFaqLabel: "FAQ",
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
  mastheadLabel: "SSUNS 2026 • Montreal",
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
        { label: "Sponsor Us", href: "/sponsor-us" },
      ],
    },
    {
      title: "Preparation",
      items: [
        { label: "How To Register", href: "/registration/how-to-register" },
        { label: "Handbook", href: "/registration/how-to-register" },
        { label: "Policies", href: "/resources/policies" },
        { label: "FAQ", href: "/resources/faq" },
      ],
    },
  ],
  socialLinks,
  contactTitle: "Organizing Office",
  contacts: ["sg@ssuns.org", "schools@ssuns.org", "committees@ssuns.org"],
  closing: "SSUNS 2026 remains in preview until launch. Live ssuns.org stays on Squarespace until DNS flip.",
};
