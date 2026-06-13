import { sponsorContent as en } from "@/content/en/sponsor";

export const sponsorContent = {
  ...en,
  title: "Commanditer SSUNS",
  intro:
    "Soutenez une conférence étudiante phare qui réunit plus de 1 300 délégués à Montréal pour quatre jours de débat, de prise de parole en public et de leadership jeunesse.",
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
    { ...en.stats[1], label: "Personnel McGill" },
    { ...en.stats[2], label: "Dates" },
    { ...en.stats[3], label: "Lieu" },
    { ...en.stats[4], label: "Public" },
  ],
  supportersTitle: "Partenaires",
  supportersNote:
    "SSUNS collabore avec des organisations qui valorisent le leadership jeunesse, la prise de parole en public et l'accès à une expérience de conférence de grande qualité.",
  contactTitle: "Contact commandites",
  packageLabel: "Consultez notre dossier complet de commandite ici",
  packageUnavailableLabel: "Consultez le dossier complet pour connaître les possibilités de commandite, les prix et les détails des partenariats personnalisés.",
};
