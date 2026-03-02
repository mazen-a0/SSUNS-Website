export type NavItem = {
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
  { label: "About Us", href: "/about" },
  { label: "Conference", href: "/conference" },
  { label: "Committees", href: "/committees" },
  { label: "Registration", href: "/registration" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const uiText = {
  openMenu: "Open navigation",
  closeMenu: "Close navigation",
  homeAria: "SSUNS Home",
  openCommandPalette: "Open command palette",
  commandShortcut: "Cmd+K",
  commandPlaceholder: "Search pages and resources...",
  commandEmpty: "No results found.",
  commandHint: "Use arrow keys, Enter to open, and Esc to close.",
  commandTitle: "Command Palette",
  closeModal: "Close details",
  closePalette: "Close command palette",
};

export const homeContent = {
  eyebrow: "SSUNS 2026",
  headline: "A New Surface for Student Diplomacy",
  accent: "liquid clarity",
  description:
    "A conference experience shaped for precision, empathy, and high-level debate. Build policy, sharpen rhetoric, and negotiate with intent.",
  primaryCta: { label: "Register Delegation", href: "/registration" },
  secondaryCta: { label: "Explore Committees", href: "/committees" },
  quickStats: [
    { label: "Delegates", value: "1500+" },
    { label: "Schools", value: "90+" },
    { label: "Committees", value: "35" },
  ],
  sections: [
    {
      title: "Built for Impact",
      body: "From opening ceremonies to midnight directive drafting, every program touchpoint prioritizes meaningful participation and strategic growth.",
    },
    {
      title: "Global Agenda",
      body: "Committees span climate governance, cyber diplomacy, conflict prevention, and human rights frameworks with realistic, current scenarios.",
    },
    {
      title: "Leadership Pipeline",
      body: "Students lead the full conference stack: policy design, chairing, logistics, crisis pacing, and delegate support.",
    },
  ],
};

export const aboutContent = {
  title: "About SSUNS",
  intro:
    "SSUNS is one of North America's largest high-school Model UN conferences, run by students for students with a focus on rigorous diplomacy and inclusive dialogue.",
  points: [
    "Student-run operations with professional production standards",
    "Committee simulations grounded in contemporary geopolitics",
    "Training pathways for new delegates and experienced chairs",
  ],
};

export const conferenceContent = {
  title: "Conference",
  intro:
    "SSUNS 2026 combines traditional committees, dynamic crisis rooms, and high-caliber keynote programming across a multi-day event.",
  tracks: [
    {
      title: "General Assemblies",
      body: "Large-format debate with structured caucusing and amendment workflow.",
    },
    {
      title: "Specialized Committees",
      body: "Focused issue spaces with deep research and strategic bloc-building.",
    },
    {
      title: "Crisis Simulations",
      body: "Fast-paced scenarios that reward adaptability under pressure.",
    },
  ],
};

export const registrationContent = {
  title: "Registration",
  intro:
    "Registration opens in phases for schools and independent delegates. Final fees and deadlines will be published in the handbook.",
  steps: [
    "Submit school or delegate profile",
    "Select committee preferences",
    "Complete payment and policy forms",
    "Download prep resources and attend orientation",
  ],
  cta: { label: "Open Resource Hub", href: "/resources" },
};

export const contactContent = {
  title: "Contact",
  intro:
    "Questions about logistics, committees, accessibility, or partnerships can be directed to the organizing team.",
  items: [
    { label: "General", value: "info@ssuns.org" },
    { label: "Committees", value: "committees@ssuns.org" },
    { label: "Registration", value: "registration@ssuns.org" },
  ],
};
