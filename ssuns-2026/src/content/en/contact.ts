import { pickImage } from "@/lib/images";

export const contactContent = {
  title: "Contact Us",
  intro: "We’d love to hear from you!",
  sections: {
    general: "General inquiries",
    secretariat: "Secretariat contacts",
    social: "Social updates",
    responseWindow: "Response Window",
    office: "Contact Directory",
  },
  lead: "For any general questions or remarks regarding SSUNS 2026, please contact:",
  contacts: [
    {
      name: "Marcus Kelly",
      role: "Secretary-General",
      email: "sg@ssuns.org",
      phone: "+1 (781) 366-5736",
      buttonLabel: "Email Marcus",
    },
    {
      name: "Costas Oreopoulos",
      role: "Chargé d’Affaires",
      email: "schools@ssuns.org",
      buttonLabel: "Email Costas",
    },
  ],
  directory: [
    { name: "Marcus Kelly", role: "Secretary-General", email: "sg@ssuns.org" },
    { name: "Costas Oreopoulos", role: "Chargé d’Affaires", email: "schools@ssuns.org" },
    { name: "Mazen Asali", role: "Director-General", email: "dg@ssuns.org" },
    { name: "Andrew Tobin", role: "USG Finance", email: "finance@ssuns.org" },
    { name: "Hortense Bonnet", role: "USG Admin", email: "admin@ssuns.org" },
    { name: "Julien Fournier", role: "Chief of HR", email: "hr@ssuns.org" },
    { name: "Léandre Noël", role: "Chief of Ops", email: "operations@ssuns.org" },
    { name: "Kiara Gilroy", role: "Director of Events", email: "events@ssuns.org" },
    { name: "Tracy Jiang", role: "Director of PR", email: "pr@ssuns.org" },
    { name: "Paul Malpartida Durroux", role: "Dep PR External Outreach", email: "externaloutreach@ssuns.org" },
    { name: "Hannah Regular", role: "Dep PR Brand Management", email: "brandingdesign@ssuns.org" },
    { name: "Valeria Fonseca Ortega", role: "USG Committees", email: "committees@ssuns.org" },
    { name: "Emma Ristic", role: "Dep GA/ECOSOCs", email: "gaecosoc@ssuns.org" },
    { name: "Eitan Pessin", role: "Dep Specs", email: "spec@ssuns.org" },
    { name: "Will Greer", role: "Dep Crisis", email: "crisis@ssuns.org" },
  ],
  secretariatNote: "For inquiries addressed to specific members of our Secretariat, visit the Secretariat page for each member’s contact information.",
  secretariatCta: { label: "Secretariat", href: "/about/secretariat" },
  socialNote: "Remember to also keep updated on SSUNS-related information through the various social media handles linked below!",
  socialPrompt: "Follow SSUNS on social media for more updates!",
  officeHours: {
    title: "Response Window",
    body: "The team responds within 2-3 business days during active conference planning season.",
  },
  image: {
    src: pickImage("montreal", "contact-hero"),
    alt: "Montreal downtown streets near conference district",
    note: "Montreal streetscape, 16:9, recommended 1600x900",
  },
};
