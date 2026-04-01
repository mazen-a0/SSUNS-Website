import { pickImage } from "@/lib/images";

export const sponsorContent = {
  title: "Sponsor Us",
  intro:
    "Support a flagship student-led conference that brings 1300+ delegates to Montreal for four days of debate, public speaking, and civic education.",
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
        "The conference welcomes delegations from across Canada and abroad to downtown Montreal for committees, ceremonies, and educational programming.",
    },
    {
      title: "Opportunities",
      body:
        "Sponsorship can support accessibility, delegate materials, keynote programming, hospitality, and high-visibility conference operations.",
    },
  ],
  stats: [
    { label: "Delegates", value: "1300+" },
    { label: "Conference dates", value: "Nov 12-15, 2026" },
    { label: "Venue", value: "Sheraton Montreal" },
    { label: "Audience", value: "Students, advisors, families" },
  ],
  supportersTitle: "Supporters",
  supportersNote:
    "SSUNS partners with organizations that value youth leadership, civic education, and access to high-quality conference experiences.",
  contactTitle: "Sponsorship contact",
  contactEmail: "sponsorship@ssuns.org",
  packageLabel: "Request sponsorship package",
  packagePath: "mailto:sponsorship@ssuns.org?subject=SSUNS%202026%20Sponsorship%20Package",
  packageUnavailableLabel: "Our team will share the current package directly by email.",
  cta: {
    label: "Register now",
    href: "https://www.munager.com/user/newApplication/SSUNS2026",
  },
};
