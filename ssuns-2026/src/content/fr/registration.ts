import { registrationContent as en } from "@/content/en/registration";

export const registrationContent = {
  ...en,
  title: "Inscription",
  intro:
    "Les inscriptions à SSUNS 2026 sont maintenant ouvertes. Cette année, nous introduisons un nouveau système d’inscription conçu pour améliorer votre expérience et simplifier le processus.",
  sections: {
    ...en.sections,
    flow: "Comment s'inscrire",
    pathways: "Volets d'inscription",
    timeline: "Calendrier d'inscription",
    fees: "Frais et financement",
    currentTier: "Palier d'inscription actuel",
    walkthrough: "Guide Munager",
    listserv: "Infolettre",
  },
  chapters: [
    {
      ...en.chapters[0],
      title: "Information",
      summary: "Les inscriptions à SSUNS 2026 sont maintenant ouvertes.",
      body: [
        "Les inscriptions pour SSUNS 2026 sont maintenant ouvertes.",
        "Cette année, nous introduisons un nouveau système d’inscription conçu pour améliorer votre expérience et simplifier le processus.",
        "Consultez ici les instructions détaillées et les mises à jour importantes afin d’assurer une inscription sans difficulté.",
        "La conférence se déroulera du 12 au 15 novembre 2026.",
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
        "Consultez sur cette page les politiques financières de SSUNS 2026, les périodes d'aide financière et les échéances de facturation.",
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
    "Inscrivez-vous à l'infolettre de SSUNS afin de recevoir les mises à jour et annonces importantes avant la conférence.",
    "Consultez la section « Inscription » de notre site web pour obtenir des informations sur les frais, les échéances et les politiques.",
  ],
  howToGuide: {
    ...en.howToGuide,
    overviewHeading: "Aperçu",
  },
  timeline: [
    { ...en.timeline[0], label: "1er avril 2026", text: "Ouverture des inscriptions." },
    { ...en.timeline[1], label: "Mars 2026", text: "Les mises à jour du site et les détails d'inscription continuent d'être publiés." },
    { ...en.timeline[2], label: "12-15 novembre 2026", text: "Dates de la conférence à Montréal." },
  ],
  currentTier: {
    label: "Les inscriptions sont ouvertes",
    detail: "La conférence se déroulera du 12 au 15 novembre 2026. Les inscriptions se terminent le 16 octobre ou lorsque la capacité maximale est atteinte.",
  },
  pricingTimeline: en.pricingTimeline,
  pricingTimelineText: {
    title: "Calendrier d'inscription",
    delegationFee: "Frais de délégation",
    delegateFee: "Par délégué",
    current: "Fenêtre d'inscription actuelle",
    to: "au",
  },
  financialAidDeadlines: ["8 juin", "8 septembre", "16 octobre"],
  invoiceDeadlines: ["22 juin", "16 septembre", "23 octobre"],
  feeNotes: [
    { ...en.feeNotes[0], title: "Frais", body: "Les frais de délégué s’appliquent à chaque participant inscrit. Les frais de délégation constituent un montant unique couvrant l’ensemble de la délégation." },
    { ...en.feeNotes[1], title: "Dates", body: "Ouverture des inscriptions : 1er avril. Clôture des inscriptions : 16 octobre ou lorsque la capacité maximale est atteinte." },
    { ...en.feeNotes[2], title: "Aide financière", body: "Les politiques financières, les périodes d'aide financière et les échéances de facturation sont disponibles sur la page d'aide financière." },
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
      body: "Les détails sur l'aide financière, les politiques financières et les échéances de facturation sont disponibles dans le chapitre d'aide financière.",
    },
  ],
  listserv: {
    ...en.listserv,
    label: "Abonnez-vous à l'infolettre",
    body: "Abonnez-vous à l'infolettre de SSUNS pour recevoir nos mises à jour hebdomadaires, les informations d'inscription et les annonces importantes tout au long de la saison.",
  },
  listservForm: {
    requiredLabel: "indique un champ obligatoire",
    emailLabel: "Courriel",
    firstNameLabel: "Prénom",
    lastNameLabel: "Nom de famille",
    submitLabel: "S'abonner à l'infolettre",
  },
  letter: {
    ...en.letter,
    label: "Chargé d’Affaires",
    title: "Lettre aux écoles",
    body: [
      "Chers délégués et conseillers pédagogiques de SSUNS,",
      "Je m'appelle Costas Oreopoulos et j'ai l'immense privilège d'agir en tant que Chargé d’Affaires pour SSUNS 2026. Depuis ses débuts en 1993, SSUNS est devenu la principale conférence de Modélisation des Nations Unies au Canada. Aujourd'hui, à sa 34e édition, nous continuons d'offrir une expérience de conférence de calibre mondial aux élèves du secondaire et du CÉGEP. Chaque mois de novembre, 1300+ étudiants provenant du monde entier se joignent à nous pour quatre jours de sessions de comités dynamiques, de débats captivants et de simulations immersives.",
      "Au-delà des sessions de comités, SSUNS propose une variété d'activités pour enrichir votre expérience, notamment des ateliers, des événements sociaux et des visites guidées de l'Université McGill. Les conseillers pédagogiques auront l'occasion d'observer leurs délégués en action, d'échanger avec d'autres éducateurs et de profiter du salon des conseillers ainsi que d'événements sociaux. Le tout se déroule dans la ville de Montréal, où les participants peuvent découvrir des sites emblématiques et s'imprégner de sa culture unique.",
      "Mon parcours en MUN a commencé à SSUNS lorsque j'étais au secondaire à Toronto. Cette expérience a nourri une passion qui m'a gardé engagé dans le circuit avant de me ramener à McGill avec l'envie d'offrir à une nouvelle génération de délégués une expérience aussi marquante. Après avoir vu la conférence du point de vue du délégué comme de celui du Secrétariat, je peux affirmer que SSUNS demeure une expérience exceptionnellement formatrice.",
      "Que vous reveniez à SSUNS ou que vous y participiez pour la première fois, nous sommes extrêmement heureux de vous accueillir pour un week-end inoubliable de diplomatie, de débats et de collaboration. J'ai hâte de vous voir tous en novembre !",
      "Cordialement,",
    ],
    role: "Chargé d’Affaires, SSUNS 2026",
  },
  cta: { ...en.cta, label: "S'inscrire", href: "https://www.munager.com/user/newApplication/SSUNS2026" },
  munagerVideo: {
    ...en.munagerVideo,
    title: "Guide Munager",
    unavailableLabel: "Vidéo du guide indisponible",
  },
};
