import { pickImage } from "@/lib/images";

export const sponsorContent = {
  title: "Sponsor Us",
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
  contactTitle: "Sponsorship contact",
  contactEmail: "sponsorship@ssuns.org",
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
