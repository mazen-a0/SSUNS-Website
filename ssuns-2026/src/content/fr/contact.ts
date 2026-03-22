import { contactContent as en } from "@/content/en/contact";

export const contactContent = {
  ...en,
  title: "Nous joindre",
  intro:
    "Communiquez avec le secrétariat de SSUNS par les adresses officielles ci-dessous. Les numéros de téléphone ne sont volontairement pas publiés sur le site public.",
  sections: {
    ...en.sections,
    responseWindow: "Délai de réponse",
    office: "Répertoire de contact",
    form: "Écrire à SSUNS",
  },
  officeHours: {
    ...en.officeHours,
    title: "Délai de réponse",
    body: "L'équipe répond dans un délai de 2 à 3 jours ouvrables pendant la saison active de planification de la conférence.",
  },
  officeBlurb:
    "Utilisez le répertoire pour joindre directement le bon portefeuille. TODO(contact): Confirmer quelles adresses devraient demeurer publiques avant le lancement.",
  form: {
    ...en.form,
    nameLabel: "Nom",
    emailLabel: "Courriel",
    subjectLabel: "Objet",
    messageLabel: "Message",
    submitLabel: "Envoyer un courriel à SSUNS",
    helper: "Ce formulaire ouvre actuellement votre logiciel de courriel et envoie à schools@ssuns.org.",
    validation: {
      required: "Veuillez remplir tous les champs.",
      email: "Veuillez entrer une adresse courriel valide.",
    },
  },
};
