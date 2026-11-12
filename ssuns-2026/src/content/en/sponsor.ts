import { pickImage } from "@/lib/images";

export type Sponsor = {
  id: string;
  name: string;
  tier: "Headline" | "Platinum" | "Bronze";
  href: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  description?: string;
  offer?: { percentOff: number; code: string };
};

const sponsors: Sponsor[] = [
  {
    id: "mcgill",
    name: "McGill University",
    tier: "Headline",
    href: "https://www.mcgill.ca/",
    logoSrc: "/sponsors/mcgill.png",
    logoAlt: "McGill University",
    logoWidth: 2228,
    logoHeight: 800,
  },
  {
    id: "buylanyard",
    name: "BuyLanyard",
    tier: "Platinum",
    href: "https://buylanyard.ca/",
    logoSrc: "/sponsors/buylanyard.jpeg",
    logoAlt: "Buy Lanyard — Lanyards Designed for You",
    logoWidth: 584,
    logoHeight: 186,
    offer: { percentOff: 10, code: "SSUNS10" },
  },
  {
    id: "mcmaster",
    name: "McMaster University",
    tier: "Bronze",
    href: "https://www.mcmaster.ca/",
    logoSrc: "/sponsors/mcmaster.jpeg",
    logoAlt: "McMaster University — Wilson College of Leadership & Civic Engagement",
    logoWidth: 1016,
    logoHeight: 192,
    description: "Wilson College of Leadership & Civic Engagement",
  },
  {
    id: "waterloo",
    name: "University of Waterloo",
    tier: "Bronze",
    href: "https://uwaterloo.ca/",
    logoSrc: "/sponsors/waterloo.jpeg",
    logoAlt: "University of Waterloo crest",
    logoWidth: 1280,
    logoHeight: 1280,
  },
  {
    id: "gs-jj",
    name: "GS-JJ",
    tier: "Bronze",
    href: "https://www.gs-jj.com",
    logoSrc: "/sponsors/gsjj2.jpeg",
    logoAlt: "GS-JJ sponsor logo",
    logoWidth: 795,
    logoHeight: 267,
    description: "GS-JJ supports SSUNS 2026 as part of the community of sponsors helping make the conference possible.",
  },
  {
    id: "wizeprep",
    name: "Wizeprep",
    tier: "Bronze",
    href: "https://www.wizeprep.com/",
    logoSrc: "/sponsors/wizeprep.jpeg",
    logoAlt: "Wizeprep logo",
    logoWidth: 1000,
    logoHeight: 612,
  },
];

export const sponsorContent = {
  title: "Sponsorships",
  intro:
    "Support a flagship student-led conference that brings 1,300+ delegates to Montréal for four days of debate, public speaking, and youth leadership.",
  heroImage: {
    src: pickImage("sheraton", "sponsor-hero"),
    alt: "Conference venue prepared for plenary and sponsor reception",
    note: "conference ballroom or sponsor reception setting, 16:9, recommended 1600x900",
  },
  reasons: [
    {
      title: "Why sponsor SSUNS",
      body:
        "SSUNS connects sponsors with a large network of student leaders, families, educators, and alumni who value debate, diplomacy, and public speaking.",
    },
    {
      title: "Conference overview",
      body:
        "The conference welcomes delegations from across Canada and abroad to downtown Montréal for committees, ceremonies, and educational programming.",
    },
    {
      title: "Opportunities",
      body:
        "Sponsorship can support accessibility, delegate materials, keynote programming, hospitality, and high-visibility conference operations.",
    },
  ],
  stats: [
    { label: "Delegates", value: "1,300+" },
    { label: "McGill staff", value: "250+" },
    { label: "Conference dates", value: "Nov 12-15, 2026" },
    { label: "Venue", value: "Sheraton Montréal" },
    { label: "Audience", value: "Students, advisors, families" },
  ],
  supportersTitle: "Supporters",
  supportersNote:
    "SSUNS partners with organizations that value youth leadership, public speaking, and access to high-quality conference experiences.",
  sponsorsTitle: "Our sponsors",
  sponsorsHeading: "Thank you to the partners making SSUNS possible.",
  sponsorsIntro:
    "We appreciate all of our sponsors for making this conference possible. Their support helps SSUNS welcome delegates, advisors, and staff into a polished and accessible conference weekend.",
  sponsorVisitLabel: "Visit sponsor site",
  sponsors,
  ui: {
    becomeSponsor: "Partner with SSUNS",
    headline: "Headline sponsor",
    visitMcGill: "Visit mcgill.ca",
    platinum: "Platinum sponsor",
    bronze: "Bronze sponsors",
    discountSuffix: "% off",
    codeLabel: "Use code",
    copyCode: "Copy code",
    copied: "Copied",
    copyFailed: "Please select and copy the code above.",
    partnerHeading: "Partner with SSUNS",
    packageHeading: "Sponsorship package",
    tiersHeading: "Sponsorship levels",
    tiersIntro: "Choose the level of presence that fits your organization.",
    visibilityHeading: "Visibility opportunities",
    visibilityIntro: "Ways sponsors can appear across SSUNS",
    customHeading: "Custom sponsorships",
  },
  contactTitle: "Sponsorship contact",
  contactEmail: "pr@ssuns.org",
  packageLabel: "Find our full sponsorship package here.",
  packagePath: "/docs/Marketing Brochure SSUNS26.pdf",
  packageUnavailableLabel: "Review the complete sponsorship package for the full matrix of opportunities, pricing, and custom partnership details.",
  tiers: [
    {
      name: "Bronze",
      price: "$500",
      summary: "A focused entry point for organizations looking to support SSUNS and appear in core sponsor visibility channels.",
    },
    {
      name: "Platinum",
      price: "$1000",
      summary: "A stronger visibility tier for partners seeking broader recognition across delegate-facing and staff-facing conference materials.",
    },
    {
      name: "Sapphire",
      price: "$1800",
      summary: "A premium sponsorship tier for organizations seeking high-visibility conference presence and expanded recognition.",
    },
    {
      name: "Headline Sponsor",
      price: "$2500",
      summary: "An exclusive partnership that includes all Sapphire tier benefits plus major platform recognition.",
      benefits: [
        "Presented as the official Headline Sponsor of SSUNS 2026 across key platforms.",
        "Invitation to deliver a brief address at the Opening or Closing Ceremony, aligned with SSUNS messaging.",
        "Full-page feature in the digital Delegate Handbook.",
        "Premium logo placement across conference materials.",
        "Standalone social media feature.",
        "Dedicated email advertisement.",
      ],
    },
  ],
  visibilityOptions: [
    "Instagram Story",
    "SSUNS website listing",
    "Logo in Delegate Handbook",
    "Opening Ceremony invitations",
    "Table at SSUNS Fair",
    "Instagram Post",
    "Collective email feature",
    "SSUNS all-staff channel",
    "Half-page in Delegate Handbook",
    "Verbal recognition during Opening Ceremony",
    "Flyers in staff suites",
    "Logo on conference materials",
  ],
  customOptions: [
    {
      title: "Self-pitched sponsorship",
      body:
        "Organizations can propose a custom SSUNS presence, with scope, pricing, and implementation discussed directly with the Public Relations team.",
    },
    {
      title: "Food sponsorship",
      body:
        "Food sponsorship supports McGill student staff throughout the weekend and is available at the Platinum tier level as a Staff Experience Sponsorship.",
    },
    {
      title: "Joint sponsorship opportunities",
      body:
        "Organizations seeking a broader student audience may discuss joint partnership options with the SSUNS Public Relations team.",
    },
  ],
  cta: {
    label: "Register now",
    href: "https://www.munager.com/user/newApplication/SSUNS2026",
  },
};
