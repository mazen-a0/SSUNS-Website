import { registrationContent as en } from "@/content/en/registration";

export const registrationContent = {
  ...en,
  title: "Inscription",
  intro:
    "Les inscriptions à SSUNS 2026 ouvriront le 1er avril ! Cette année, nous introduisons un nouveau système d’inscription conçu pour améliorer votre expérience et simplifier le processus.",
  sections: {
    ...en.sections,
    flow: "Comment s'inscrire",
    pathways: "Volets d'inscription",
    timeline: "Calendrier d'inscription",
    fees: "Frais et financement",
    currentTier: "Palier d'inscription actuel",
    walkthrough: "Guide Munager",
    listserv: "Liste de diffusion",
  },
  chapters: [
    {
      ...en.chapters[0],
      title: "Information",
      summary: "Les inscriptions à SSUNS 2026 ouvrent le 1er avril 2026.",
      body: [
        "Les inscriptions pour SSUNS 2026 ouvriront le 1er avril !",
        "Cette année, nous introduisons un nouveau système d’inscription conçu pour améliorer votre expérience et simplifier le processus.",
        "Des informations supplémentaires, y compris des instructions détaillées et des mises à jour importantes, seront publiées ici tout au long du mois de mars.",
        "Nous encourageons tous les délégués et les encadrants à les consulter à l’avance afin d’assurer une inscription sans difficulté.",
        "La conférence se déroulera du 12 au 15 novembre 2026.",
        "Ouverture des inscriptions : 1er avril.",
        "Clôture des inscriptions : 16 octobre ou lorsque la capacité maximale est atteinte.",
      ],
    },
    {
      ...en.chapters[1],
      title: "Comment s'inscrire",
      summary: "Utilisez Munager pour compléter l'inscription de votre délégation.",
      body: [en.howToGuide.intro],
    },
    {
      ...en.chapters[2],
      title: "Frais",
      summary: "Les informations tarifaires seront publiées avec les documents d'inscription.",
      body: [
        "Les détails finaux sur les frais seront publiés avec le matériel d'inscription.",
        "Ce chapitre est réservé aux frais de délégation, aux consignes de facturation et à toute mise à jour des politiques financières.",
      ],
    },
    {
      ...en.chapters[3],
      title: "Aide financière",
      summary: "Information sur l'accessibilité financière.",
      body: [
        "Les politiques financières et les informations relatives à l’aide financière seront mises à jour prochainement.",
        "Dates limites – Demandes d’aide financière.",
        "Précoce : 8 juin.",
        "Régulière : 8 septembre.",
        "Dernière ronde : 16 octobre.",
        "Dates limites – Facturation.",
        "Précoce : 22 juin.",
        "Régulière : 16 septembre.",
        "Dernière ronde : 23 octobre.",
      ],
    },
    {
      ...en.chapters[4],
      title: "Échéances",
      summary: "Suivez les dates d'ouverture, les publications et les dates de conférence.",
      body: [
        "Les inscriptions ouvrent le 1er avril 2026.",
        "SSUNS 2026 aura lieu du 12 au 15 novembre 2026. D'autres échéances seront publiées dès qu'elles seront confirmées.",
      ],
    },
  ],
  steps: [
    "Consultez la page officielle d’inscription de SSUNS et prenez connaissance des instructions.",
    "Complétez l’inscription de votre école sur MUNager à l’aide du lien officiel de la conférence.",
    "Inscrivez-vous à la liste de diffusion de SSUNS afin de recevoir les mises à jour et annonces importantes avant la conférence.",
    "Consultez la section « Inscription » de notre site web pour obtenir des informations sur les frais, les échéances et les politiques.",
  ],
  howToGuide: en.howToGuide,
  timeline: [
    { ...en.timeline[0], label: "1er avril 2026", text: "Ouverture des inscriptions." },
    { ...en.timeline[1], label: "Mars 2026", text: "Les mises à jour du site et les détails d'inscription continuent d'être publiés." },
    { ...en.timeline[2], label: "12-15 novembre 2026", text: "Dates de la conférence à Montréal." },
  ],
  currentTier: {
    label: "Les inscriptions ouvrent le 1er avril",
    detail: "La conférence se déroulera du 12 au 15 novembre 2026. Les inscriptions se terminent le 16 octobre ou lorsque la capacité maximale est atteinte.",
  },
  pricingTimeline: en.pricingTimeline,
  pricingTimelineText: {
    title: "Calendrier d'inscription",
    delegationFee: "Frais de délégation",
    delegateFee: "Par délégué",
    current: "Actuel",
    financialAidDeadlines: "Échéances d'aide financière",
    to: "au",
  },
  financialAidDeadlines: ["8 juin", "8 septembre", "16 octobre"],
  invoiceDeadlines: ["22 juin", "16 septembre", "23 octobre"],
  feePlaceholders: [
    { ...en.feePlaceholders[0], title: "Frais", body: "Les frais de délégué s’appliquent à chaque participant inscrit. Les frais de délégation constituent un montant unique couvrant l’ensemble de la délégation." },
    { ...en.feePlaceholders[1], title: "Dates", body: "Ouverture des inscriptions : 1er avril. Clôture des inscriptions : 16 octobre ou lorsque la capacité maximale est atteinte." },
    { ...en.feePlaceholders[2], title: "Aide financière", body: "Les politiques financières et les informations relatives à l’aide financière seront mises à jour prochainement." },
  ],
  tracks: [
    {
      ...en.tracks[0],
      title: "Inscription Munager",
      body: "Munager est la plateforme unique utilisée pour l'inscription à SSUNS 2026.",
    },
    {
      ...en.tracks[1],
      title: "Guide du délégué",
      body: "Le guide et le dossier de préparation devraient être consultés avant les arrivées, l'attribution des comités et la semaine de la conférence.",
    },
    {
      ...en.tracks[2],
      title: "Fenêtre d'aide financière",
      body: "Les détails sur l'aide financière et les politiques connexes seront liés depuis le chapitre d'aide financière une fois publiés.",
    },
  ],
  listserv: {
    ...en.listserv,
    label: "Restez informés",
    body: "Vous pouvez dès maintenant vous inscrire pour recevoir les courriels hebdomadaires de SSUNS ! Restez informé de nos dernières mises à jour, des informations sur l’inscription et bien plus encore.",
  },
  listservForm: {
    nameLabel: "Nom",
    emailLabel: "Courriel",
    schoolLabel: "École",
    submitLabel: "Joindre la liste de diffusion",
    successLabel: "Merci. Vos renseignements ont été envoyés.",
    fallbackLabel: "Impossible d'envoyer automatiquement. Veuillez écrire à schools@ssuns.org.",
  },
  letter: {
    ...en.letter,
    label: "Chargée d’Affaires",
    title: "Lettre aux écoles",
    body: [
      "Les inscriptions pour SSUNS 2026 ouvriront le 1er avril !",
      "Cette année, nous introduisons un nouveau système d’inscription conçu pour améliorer votre expérience et simplifier le processus.",
      "Des informations supplémentaires, y compris des instructions détaillées et des mises à jour importantes, seront publiées ici tout au long du mois de mars.",
      "Inscrivez-vous avec votre adresse courriel pour recevoir les dernières nouvelles de SSUNS 2026 de la part de notre chargée d’affaires.",
    ],
    role: "Chargée d’Affaires, SSUNS 2026",
  },
  cta: { ...en.cta, label: "Register now", href: "https://www.munager.com/user/newApplication/SSUNS2026" },
  munagerVideo: {
    ...en.munagerVideo,
    title: "Guide Munager",
    unavailableLabel: "Vidéo à venir",
  },
};
