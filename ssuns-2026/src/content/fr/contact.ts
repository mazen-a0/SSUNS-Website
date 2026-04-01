import { contactContent as en } from "@/content/en/contact";

export const contactContent = {
  ...en,
  title: "Nous joindre",
  intro: "Nous serions ravis d’avoir de vos nouvelles !",
  sections: {
    ...en.sections,
    general: "Demandes générales",
    secretariat: "Contacts du secrétariat",
    social: "Réseaux sociaux",
    responseWindow: "Délai de réponse",
  },
  lead: "Pour toute question générale ou remarque concernant SSUNS 2026, veuillez contacter :",
  contacts: [
    {
      ...en.contacts[0],
      role: "Secrétaire général",
      buttonLabel: "Écrire à Marcus",
    },
    {
      ...en.contacts[1],
      buttonLabel: "Écrire à Costas",
    },
  ],
  directory: en.directory,
  secretariatNote:
    "Pour les demandes destinées à des membres précis de notre secrétariat, veuillez consulter la page du Secrétariat pour les coordonnées de chaque membre.",
  secretariatCta: { ...en.secretariatCta, label: "Secrétariat" },
  socialNote: "N’oubliez pas de rester à jour sur SSUNS grâce aux différents réseaux sociaux ci-dessous !",
  socialPrompt: "Suivez SSUNS sur les réseaux sociaux pour plus de nouvelles !",
  officeHours: {
    ...en.officeHours,
    title: "Délai de réponse",
    body: "L'équipe répond dans un délai de 2 à 3 jours ouvrables pendant la saison active de planification de la conférence.",
  },
};
