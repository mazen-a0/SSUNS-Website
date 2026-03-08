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
    "Use the resource hub to prepare delegates, align faculty advisors, and review event policy before conference day.",
  sections: {
    categories: "Categories",
  },
  chapters: [
    {
      href: "/resources",
      title: "Index",
      summary: "Entry point to handbook, policies, FAQ, and planning material.",
      body: [
        "The resource hub is intended to act like a conference library: practical, searchable, and easy for advisors to circulate.",
        "Each chapter can later point to a published packet or downloadable resource.",
      ],
    },
    {
      href: "/resources/handbook",
      title: "Handbook",
      summary: "Procedure, preparation standards, and delegate expectations.",
      body: [
        "The handbook should become the central reference for speeches, motions, caucusing, and conference etiquette.",
        "Placeholder text can later be replaced by the published delegate handbook.",
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
      summary: "Preparation guidance, handbook study, and delegate readiness.",
      body: [
        "Training material should help new and returning delegates prepare for procedure, writing, and conference culture before arrival.",
        "This chapter can later include workshops, videos, and advisor-led preparation notes.",
      ],
    },
  ],
  placeholderLabel: "Placeholder resource packet",
  heroImage: {
    src: "/placeholders/committee-1200x800.jpg",
    alt: "Delegates reviewing resource documents",
    note: "committee placards and working papers, 3:2, recommended 1200x800",
  },
};

export const commonResources: ResourceItem[] = [
  {
    id: "schedule",
    title: "Schedule",
    description: "Conference timeline, ceremonies, and committee sessions.",
    href: "#schedule",
    category: "Planning",
    details:
      "Includes arrival windows, opening and closing ceremonies, committee blocks, advisor briefings, and transport cutoffs.",
  },
  {
    id: "handbook",
    title: "Delegate Handbook",
    description: "Rules of procedure, debate flow, and expectations.",
    href: "#handbook",
    category: "Preparation",
    details:
      "Covers procedural motions, drafting structure, speech formats, and model caucusing etiquette.",
  },
  {
    id: "financial-aid",
    title: "Financial Aid",
    description: "Assistance options and eligibility guidance.",
    href: "#financial-aid",
    category: "Access",
    details:
      "Explains application windows, required documentation, and confidentiality standards for applicants.",
  },
  {
    id: "venue",
    title: "Venue",
    description: "Maps, transit guidance, and accessibility details.",
    href: "#venue",
    category: "Planning",
    details:
      "Provides floor maps, nearest transit routes, accessibility entrances, and emergency meeting points.",
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Common answers for delegates, advisors, and families.",
    href: "#faq",
    category: "Support",
    details:
      "Answers logistics questions about meals, dress code, supervision expectations, and late arrival process.",
  },
  {
    id: "policies",
    title: "Policies",
    description: "Code of conduct, safety standards, and reporting channels.",
    href: "#policies",
    category: "Compliance",
    details:
      "Outlines behavioral standards, anti-harassment policy, safeguarding, and incident reporting protocol.",
  },
];
