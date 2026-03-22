import { registrationContent as en } from "@/content/en/registration";

export const registrationContent = {
  ...en,
  title: "Inscription",
  intro:
    "Les inscriptions à SSUNS 2026 ouvriront le 1er avril! La conférence aura lieu du 12 au 15 novembre 2026 et des détails supplémentaires seront publiés tout au long du mois de mars.",
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
      title: "Info",
      summary: "Les inscriptions à SSUNS 2026 ouvrent le 1er avril 2026.",
      body: [
        "Les inscriptions à SSUNS 2026 ouvriront le 1er avril. La conférence aura lieu du 12 au 15 novembre 2026.",
        "Assurez-vous de vous inscrire à notre liste de diffusion ci-dessous pour rester informé au fur et à mesure que les détails seront publiés au cours du mois de mars.",
      ],
    },
    {
      ...en.chapters[1],
      title: "Tutoriel Munager",
      summary: "Utilisez Munager pour compléter l'inscription de votre délégation.",
      body: [
        "Toute l'inscription doit être complétée par l'entremise de Munager.",
        "Les écoles et les délégués doivent suivre les instructions officielles d'inscription et utiliser la plateforme officielle pour les soumissions et les mises à jour.",
      ],
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
        "Les informations sur l'accessibilité financière seront publiées avec le dossier d'inscription.",
        "Les écoles devraient consulter ce chapitre pour les options de soutien, les critères d'admissibilité et l'échéancier de soumission.",
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
    "Ouvrez la page officielle d'inscription de SSUNS et consultez les instructions publiées.",
    "Complétez l'inscription dans Munager à l'aide du lien officiel de la conférence.",
    "Inscrivez-vous à la liste de diffusion pour recevoir les mises à jour au fur et à mesure qu'elles sont publiées en mars.",
    "Revenez aux chapitres d'inscription pour les frais, les échéances, le guide et les mises à jour sur l'aide financière.",
  ],
  timeline: [
    { ...en.timeline[0], label: "1er avril 2026", text: "Ouverture des inscriptions." },
    { ...en.timeline[1], label: "Mars 2026", text: "Les mises à jour du site et les détails d'inscription continuent d'être publiés." },
    { ...en.timeline[2], label: "12-15 novembre 2026", text: "Dates de la conférence à Montréal." },
  ],
  currentTier: {
    label: "Les inscriptions ouvrent le 1er avril",
    detail: "Munager est la destination unique et officielle pour l'inscription des écoles et des délégués.",
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
  feePlaceholders: [
    { ...en.feePlaceholders[0], title: "Frais", body: "Les informations tarifaires seront publiées dans le cadre de l'ouverture officielle des inscriptions." },
    { ...en.feePlaceholders[1], title: "Politiques", body: "Toute politique de paiement ou d'annulation sera liée depuis ce chapitre une fois publiée." },
    { ...en.feePlaceholders[2], title: "Aide financière", body: "Les détails sur l'aide financière apparaîtront ici lorsque SSUNS publiera le dossier d'inscription 2026." },
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
    body: "Inscrivez-vous à la liste de diffusion de SSUNS pour recevoir les avis de publication, les consignes d'inscription et les mises à jour de la conférence.",
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
      "Assurez-vous de vous inscrire à notre liste de diffusion ci-dessous pour rester informé au fur et à mesure que les détails seront publiés au cours du mois de mars.",
      "Les inscriptions à SSUNS 2026 ouvriront le 1er avril. La conférence aura lieu du 12 au 15 novembre 2026.",
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
