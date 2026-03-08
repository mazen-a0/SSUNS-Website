import { contactContent as en } from "@/content/en/contact";

export const contactContent = {
  ...en,
  title: "Contact",
  intro:
    "Communiquez avec l'équipe organisatrice pour les questions de comités, les demandes d'accessibilité, les partenariats et le soutien aux conseillers.",
  sections: {
    ...en.sections,
    responseWindow: "Délai de réponse",
    office: "Bureau de l'organisation",
  },
  items: [
    { ...en.items[0], label: "Général" },
    { ...en.items[1], label: "Comités" },
    { ...en.items[2], label: "Inscription" },
    { ...en.items[3], label: "Partenariats" },
  ],
  officeHours: {
    ...en.officeHours,
    title: "Délai de réponse",
    body: "L'équipe répond dans un délai de 2 à 3 jours ouvrables pendant la saison active de planification de la conférence.",
  },
  officeBlurb:
    "Pour les questions de planification scolaire, d'adéquation des comités et de logistique de l'événement, écrivez au portefeuille approprié ci-dessus. Le texte de remplacement pourra être remplacé plus tard par des attentes précises.",
};
