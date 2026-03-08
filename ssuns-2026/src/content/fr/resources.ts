import { commonResources as enCommonResources, resourcesPageContent as en } from "@/content/en/resources";

export const resourcesPageContent = {
  ...en,
  title: "Ressources",
  intro:
    "Utilisez le centre de ressources pour préparer les délégués, coordonner les conseillers et revoir les politiques de l'événement avant la conférence.",
  sections: {
    ...en.sections,
    categories: "Catégories",
  },
  chapters: [
    {
      ...en.chapters[0],
      title: "Index",
      summary: "Point d'entrée vers le guide, les politiques, la FAQ et le matériel de planification.",
      body: [
        "Le centre de ressources est conçu comme une bibliothèque de conférence : pratique, consultable et facile à transmettre par les conseillers.",
        "Chaque chapitre pourra plus tard pointer vers un dossier publié ou une ressource téléchargeable.",
      ],
    },
    {
      ...en.chapters[1],
      title: "Guide",
      summary: "Procédure, standards de préparation et attentes envers les délégués.",
      body: [
        "Le guide devrait devenir la référence centrale pour les discours, les motions, les caucus et l'étiquette de conférence.",
        "Le texte fictif pourra plus tard être remplacé par le guide officiel du délégué.",
      ],
    },
    {
      ...en.chapters[2],
      title: "Politiques",
      summary: "Conduite, sécurité, supervision et références d'accessibilité.",
      body: [
        "Les politiques devraient être organisées pour une consultation rapide par les conseillers, les délégués et les familles avant la semaine de la conférence.",
        "Ce chapitre pourra plus tard accueillir des PDF définitifs ou du texte de référence web natif.",
      ],
    },
    {
      ...en.chapters[3],
      title: "FAQ",
      summary: "Réponses pratiques pour les délégués, conseillers et familles.",
      body: [
        "La FAQ devrait réduire les questions logistiques répétitives et fournir une référence cohérente pour la planification courante.",
        "Elle pourra plus tard être élargie à des sections distinctes selon les rôles si nécessaire.",
      ],
    },
    {
      ...en.chapters[4],
      title: "Formation",
      summary: "Préparation, étude du guide et préparation des délégués.",
      body: [
        "Le matériel de formation devrait aider les nouveaux délégués comme les délégués expérimentés à se préparer à la procédure, à la rédaction et à la culture de conférence avant leur arrivée.",
        "Ce chapitre pourra plus tard inclure des ateliers, des vidéos et des notes de préparation pour les conseillers.",
      ],
    },
  ],
  placeholderLabel: "Dossier de ressources fictif",
};

export const commonResources = [
  {
    ...enCommonResources[0],
    title: "Horaire",
    description: "Chronologie de la conférence, cérémonies et séances de comité.",
    category: "Planification",
    details:
      "Comprend les fenêtres d'arrivée, les cérémonies d'ouverture et de clôture, les blocs de comités, les rencontres des conseillers et les heures limites de transport.",
  },
  {
    ...enCommonResources[1],
    title: "Guide du délégué",
    description: "Règles de procédure, déroulement du débat et attentes.",
    category: "Préparation",
    details:
      "Couvre les motions procédurales, la structure de rédaction, les formats de discours et l'étiquette de caucus.",
  },
  {
    ...enCommonResources[2],
    title: "Aide financière",
    description: "Options de soutien et critères d'admissibilité.",
    category: "Accès",
    details:
      "Explique les périodes de demande, la documentation requise et les standards de confidentialité pour les candidats.",
  },
  {
    ...enCommonResources[3],
    title: "Lieu",
    description: "Plans, accès au transport et détails d'accessibilité.",
    category: "Planification",
    details:
      "Présente les plans d'étage, les itinéraires de transport à proximité, les entrées accessibles et les points de rassemblement d'urgence.",
  },
  {
    ...enCommonResources[4],
    title: "FAQ",
    description: "Réponses aux questions fréquentes des délégués, conseillers et familles.",
    category: "Soutien",
    details:
      "Répond aux questions logistiques sur les repas, le code vestimentaire, la supervision et les arrivées tardives.",
  },
  {
    ...enCommonResources[5],
    title: "Politiques",
    description: "Code de conduite, normes de sécurité et canaux de signalement.",
    category: "Conformité",
    details:
      "Décrit les standards de comportement, la politique anti-harcèlement, la protection des participants et le protocole de signalement.",
  },
];
