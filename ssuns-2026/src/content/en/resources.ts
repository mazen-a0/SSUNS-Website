export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
};

export const resourcesPageContent = {
  title: "Resources",
  intro:
    "Use the resource hub to prepare delegates, align faculty advisors, and review event policy before conference day.",
  placeholderLabel: "Placeholder content",
};

export const commonResources: ResourceItem[] = [
  {
    id: "schedule",
    title: "Schedule",
    description: "Conference timeline, ceremonies, and committee sessions.",
    href: "#schedule",
    category: "Planning",
  },
  {
    id: "handbook",
    title: "Delegate Handbook",
    description: "Rules of procedure, debate flow, and expectations.",
    href: "#handbook",
    category: "Preparation",
  },
  {
    id: "financial-aid",
    title: "Financial Aid",
    description: "Assistance options and eligibility guidance.",
    href: "#financial-aid",
    category: "Access",
  },
  {
    id: "venue",
    title: "Venue",
    description: "Maps, transit guidance, and accessibility details.",
    href: "#venue",
    category: "Planning",
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Common answers for delegates, advisors, and families.",
    href: "#faq",
    category: "Support",
  },
  {
    id: "policies",
    title: "Policies",
    description: "Code of conduct, safety standards, and reporting channels.",
    href: "#policies",
    category: "Compliance",
  },
];
