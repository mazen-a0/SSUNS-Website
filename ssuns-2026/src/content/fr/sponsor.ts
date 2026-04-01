import { sponsorContent as en } from "@/content/en/sponsor";

export const sponsorContent = {
  ...en,
  title: "Commanditer SSUNS",
  intro:
    "Soutenez une conférence étudiante phare qui réunit plus d'un millier de délégués à Montréal pour quatre jours de débat, de prise de parole en public et d'éducation civique.",
  reasons: [
    {
      ...en.reasons[0],
      title: "Pourquoi commanditer SSUNS",
      body:
        "SSUNS met les commanditaires en relation avec un vaste réseau de leaders étudiants, de familles, d'éducateurs et d'anciens qui valorisent le débat, la diplomatie et la prise de parole en public.",
    },
    {
      ...en.reasons[1],
      title: "Aperçu de la conférence",
      body:
        "La conférence accueille des délégations du Canada et d'ailleurs au centre-ville de Montréal pour des comités, des cérémonies et une programmation éducative.",
    },
    {
      ...en.reasons[2],
      title: "Occasions de visibilité",
      body:
        "Les commandites peuvent soutenir l'accessibilité, le matériel des délégués, la programmation principale, l'accueil et les opérations visibles de la conférence.",
    },
  ],
  stats: [
    { ...en.stats[0], label: "Délégués" },
    { ...en.stats[1], label: "Dates" },
    { ...en.stats[2], label: "Lieu" },
    { ...en.stats[3], label: "Public" },
  ],
  supportersTitle: "Partenaires",
  supportersNote:
    "SSUNS collabore avec des organisations qui valorisent le leadership jeunesse, l'éducation civique et l'accès à une expérience de conférence de grande qualité.",
  contactTitle: "Contact commandites",
  packageLabel: "Demander le dossier de commandite",
  packageUnavailableLabel: "Notre équipe vous transmettra le dossier actuel par courriel.",
};
