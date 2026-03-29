export const contactContent = {
  title: "Contact Us",
  intro:
    "Reach the SSUNS secretariat through the official portfolio addresses below. Phone numbers are intentionally not published on the public site.",
  sections: {
    responseWindow: "Response Window",
    office: "Contact Directory",
    form: "Write to SSUNS",
  },
  directory: [
    { name: "Marcus Kelly", role: "Secretary-General", email: "sg@ssuns.org" },
    { name: "Costas Oreopoulos", role: "Chargée d’Affaires", email: "schools@ssuns.org" },
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
  officeHours: {
    title: "Response Window",
    body: "The team responds within 2-3 business days during active conference planning season.",
  },
  officeBlurb:
    "Use the directory to reach the right portfolio directly. TODO(contact): Confirm which addresses should remain public-facing before launch.",
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    submitLabel: "Email SSUNS",
    helper: "This form currently opens your email client and sends to schools@ssuns.org.",
    validation: {
      required: "Please complete all fields.",
      email: "Please enter a valid email address.",
    },
    recipient: "schools@ssuns.org",
  },
  image: {
    src: "/pictures/montreal-1600x900.jpg",
    alt: "Montreal downtown streets near conference district",
    note: "Montreal streetscape, 16:9, recommended 1600x900",
  },
};
