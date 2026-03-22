export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  details: string;
};

export const resourcesPageContent = {
  title: "Resources",
  intro:
    "Use the resource hub as a policy, FAQ, and reference library, while registration packets and training material remain linked from the relevant conference and registration chapters.",
  sections: {
    categories: "Library Index",
  },
  chapters: [
    {
      href: "/resources",
      title: "Index",
      summary: "Library overview for policy, FAQ, and linked planning references.",
      body: [
        "The resource hub is intended to act like a conference library: practical, searchable, and easy for advisors to circulate.",
        "Where material belongs elsewhere, this index points directly to the correct conference or registration chapter.",
      ],
    },
    {
      href: "/resources/handbook",
      title: "Handbook",
      summary: "Handbook material is referenced from Registration for planning clarity.",
      body: [
        "The delegate handbook should be treated as part of registration and preparation workflow.",
        "This route remains available for continuity, but schools should use the registration chapters when the 2026 packet is published.",
      ],
    },
    {
      href: "/resources/policies",
      title: "Policies",
      summary: "Conduct, safety, supervision, and accessibility references.",
      body: [
        "Policies should be organized for quick review by advisors, delegates, and families before conference week.",
        "This chapter can later host final policy PDFs or web-native reference text.",
      ],
    },
    {
      href: "/resources/faq",
      title: "FAQ",
      summary: "Practical answers for delegates, advisors, and families.",
      body: [
        "The FAQ should reduce repeat logistical questions and provide a consistent reference for routine planning issues.",
        "It can later be expanded into role-specific FAQ sections if needed.",
      ],
    },
    {
      href: "/resources/training",
      title: "Training",
      summary: "Training resources are linked from Conference for programme clarity.",
      body: [
        "Training material should sit alongside the conference overview so delegates and advisors encounter it within the programme context.",
        "This route remains available for continuity until the 2026 training packet is finalized.",
      ],
    },
  ],
  placeholderLabel: "Reference packet placeholder",
  heroImage: {
    src: "/placeholders/committee-1200x800.jpg",
    alt: "Delegates reviewing conference materials",
    note: "delegates reviewing printed conference packets, 3:2, recommended 1200x800",
  },
};

export const commonResources: ResourceItem[] = [
  {
    id: "policies",
    title: "Policies",
    description: "Code of conduct, safety standards, and reporting channels.",
    href: "/resources/policies",
    category: "Policy",
    details:
      "Outlines behavioral standards, anti-harassment policy, safeguarding, and incident reporting protocol. Cross-reference the Conference policies chapter for venue-facing guidance.",
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Common answers for delegates, advisors, and families.",
    href: "/resources/faq",
    category: "Policy",
    details:
      "Answers logistics questions about meals, dress code, supervision expectations, and late arrival process. Link delegates onward to venue, schedule, and registration chapters where appropriate.",
  },
  {
    id: "schedule",
    title: "Schedule",
    description: "Conference timeline, ceremonies, and committee sessions.",
    href: "/conference/schedule",
    category: "Library",
    details:
      "Includes arrival windows, opening and closing ceremonies, committee blocks, advisor briefings, and transport cutoffs.",
  },
  {
    id: "venue",
    title: "Venue",
    description: "Maps, transit guidance, and accessibility details.",
    href: "/conference/venue",
    category: "Library",
    details:
      "Provides hotel context, local movement guidance, and quick access to venue information for visiting schools.",
  },
  {
    id: "handbook",
    title: "Delegate Handbook",
    description: "Preparation material should be read from the registration workflow.",
    href: "/registration/how-to-register",
    category: "Cross-reference",
    details:
      "Handbook and packet material should sit alongside registration instructions so schools can review fees, deadlines, and forms in one place.",
  },
  {
    id: "financial-aid",
    title: "Financial Aid",
    description: "Assistance options and eligibility guidance.",
    href: "/registration/financial-aid",
    category: "Cross-reference",
    details:
      "Explains application windows, required documentation, and confidentiality standards for applicants.",
  },
  {
    id: "training",
    title: "Training",
    description: "Delegate preparation and conference readiness material.",
    href: "/conference",
    category: "Cross-reference",
    details:
      "Training now sits under the broader conference programme context so new delegates can move from format overview to preparation guidance without hunting across the site.",
  },
];
