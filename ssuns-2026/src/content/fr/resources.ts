import { commonResources as enCommonResources, resourcesPageContent as en } from "@/content/en/resources";

export const resourcesPageContent = {
  ...en,
  title: "Ressources",
  intro:
    "Utilisez le centre de ressources comme une bibliothèque de politiques, de FAQ et de références, tandis que les trousses d'inscription et le matériel de formation sont liés depuis les chapitres pertinents de la conférence et de l'inscription.",
  sections: {
    ...en.sections,
    categories: "Index de bibliothèque",
  },
  chapters: [
    {
      ...en.chapters[0],
      title: "Index",
      summary: "Vue d'ensemble de la bibliothèque pour les politiques, la FAQ et les références de planification.",
      body: [
        "Le centre de ressources est conçu comme une bibliothèque de conférence : pratique, consultable et facile à transmettre par les conseillers.",
        "Lorsque le matériel appartient ailleurs, cet index pointe directement vers le bon chapitre de conférence ou d'inscription.",
      ],
    },
    {
      ...en.chapters[1],
      title: "Guide",
      summary: "Le guide est référencé depuis l'inscription pour une meilleure clarté de planification.",
      body: [
        "Le guide du délégué devrait être traité comme une partie du parcours d'inscription et de préparation.",
        "Cette route demeure disponible pour continuité, mais les écoles devraient utiliser les chapitres d'inscription lorsque la trousse 2026 sera publiée.",
      ],
    },
    {
      ...en.chapters[2],
      title: "Politiques",
      summary: "Références sur la conduite, la sécurité, la supervision et l'accessibilité.",
      body: [
        "Les politiques devraient être organisées pour une consultation rapide par les conseillers, les délégués et les familles avant la semaine de la conférence.",
        "Ce chapitre pourra plus tard accueillir des PDF définitifs ou du texte de référence web natif.",
      ],
    },
    {
      ...en.chapters[3],
      title: "FAQ",
      summary: "Réponses pratiques pour les délégués, les conseillers et les familles.",
      body: [
        "La FAQ devrait réduire les questions logistiques répétitives et fournir une référence cohérente pour la planification courante.",
        "Elle pourra plus tard être élargie à des sections distinctes selon les rôles si nécessaire.",
      ],
    },
    {
      ...en.chapters[4],
      title: "Formation",
      summary: "Les ressources de formation sont liées depuis la Conférence pour plus de clarté.",
      body: [
        "Le matériel de formation devrait se trouver à côté de l'aperçu de la conférence afin que les délégués et les conseillers le rencontrent dans le contexte du programme.",
        "Cette route demeure disponible pour continuité jusqu'à la publication de la trousse de formation 2026.",
      ],
    },
  ],
};

export const commonResources = [
  {
    ...enCommonResources[0],
    title: "Politiques",
    category: "Politiques",
    details:
      "Décrit les standards de comportement, la politique anti-harcèlement, la protection des participants et le protocole de signalement. Référez-vous aussi au chapitre de politiques de la Conférence pour le contexte sur le site.",
  },
  {
    ...enCommonResources[1],
    title: "FAQ",
    category: "Politiques",
    details:
      "Répond aux questions logistiques sur les repas, le code vestimentaire, la supervision et les arrivées tardives. Orientez ensuite les délégués vers les chapitres du lieu, de l'horaire et de l'inscription selon le besoin.",
  },
  {
    ...enCommonResources[2],
    title: "Horaire",
    category: "Bibliothèque",
    details:
      "Comprend les fenêtres d'arrivée, les cérémonies d'ouverture et de clôture, les blocs de comités, les rencontres des conseillers et les heures limites de transport.",
  },
  {
    ...enCommonResources[3],
    title: "Lieu",
    category: "Bibliothèque",
    details:
      "Présente le contexte hôtelier, les déplacements locaux et un accès rapide aux informations sur le lieu pour les écoles en déplacement.",
  },
  {
    ...enCommonResources[4],
    title: "Guide du délégué",
    category: "Renvois",
    details:
      "Le guide et le dossier devraient être placés à côté des instructions d'inscription afin que les écoles puissent consulter les frais, les échéances et les formulaires au même endroit.",
  },
  {
    ...enCommonResources[5],
    title: "Aide financière",
    category: "Renvois",
    details:
      "Explique les périodes de demande, la documentation requise et les standards de confidentialité pour les candidats.",
  },
  {
    ...enCommonResources[6],
    title: "Formation",
    category: "Renvois",
    details:
      "La formation est maintenant placée dans le contexte plus large du programme de conférence afin que les nouveaux délégués puissent passer de l'aperçu des formats au matériel de préparation sans devoir fouiller tout le site.",
  },
];
