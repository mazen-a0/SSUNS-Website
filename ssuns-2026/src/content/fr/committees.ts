import { committees as enCommittees, committeesPageContent as en } from "@/content/en/committees";

export const committeesPageContent = {
  ...en,
  title: "Comités",
  intro:
    "Nos comités 2026 sont en préparation. Explorez les comités 2025 ci-dessous comme aperçu.",
  continueLabel: "Continuer vers le programme de la conférence",
  searchLabel: "Rechercher des comités",
  searchPlaceholder: "Rechercher par nom, sujet, format ou difficulté",
  allOptionLabel: "Tous",
  filterThemeLabel: "Volet",
  filterLevelLabel: "Niveau",
  sizeLabel: "Taille de la salle",
  clearFiltersLabel: "Effacer les filtres",
  openDetailsLabel: "Ouvrir le dossier",
  noResults: "Aucun comité ne correspond à vos filtres.",
  detailBackLabel: "Retour à tous les comités",
  detailCloseLabel: "Fermer le dossier",
  sections: {
    ...en.sections,
    overview: "Aperçu",
    difficulty: "Niveau de difficulté",
    topic: "Sujet",
    format: "Format",
    chairs: "Présidence",
    resources: "Ressources",
    guide: "Guide préparatoire",
  },
};

export const committees = enCommittees.map((committee) => ({
  ...committee,
  level:
    committee.level === "Beginner"
      ? "Débutant"
      : committee.level === "Intermediate"
        ? "Intermédiaire"
        : committee.level === "Advanced"
          ? "Avancé"
          : committee.level === "High Crisis"
            ? "Crise élevée"
            : committee.level === "Low Crisis"
              ? "Crise légère"
              : committee.level === "Bilingual"
                ? "Bilingue"
                : committee.level,
  theme:
    committee.theme === "General Assemblies"
      ? "Assemblées générales"
      : committee.theme === "Economic and Social Councils"
        ? "Conseils économiques et sociaux"
        : committee.theme === "Specialized Committees"
          ? "Comités spécialisés"
          : committee.theme === "Crisis Committees"
            ? "Comités de crise"
            : committee.theme === "Joint Crisis Committees"
              ? "Comités de crise conjoints"
              : committee.theme,
  size:
    committee.size === "Double Delegation"
      ? "Double délégation"
      : committee.size === "Medium"
        ? "Moyenne"
        : committee.size === "Small"
          ? "Petite"
          : committee.size === "Joint Crisis"
            ? "Crise conjointe"
            : committee.size,
  overview: `${committee.overview} Aperçu du programme 2025 de SSUNS.`,
  difficulty:
    committee.difficulty === "Beginner Committee."
      ? "Comité débutant."
      : committee.difficulty === "Advanced Committee."
        ? "Comité avancé."
        : committee.difficulty === "High Level of Crisis."
          ? "Niveau élevé de crise."
          : committee.difficulty === "Low Level of Crisis."
            ? "Niveau léger de crise."
            : committee.difficulty,
  format:
    committee.format === "General Assembly"
      ? "Assemblée générale"
      : committee.format === "Specialized"
        ? "Spécialisé"
        : committee.format === "Specialized Crisis"
          ? "Crise spécialisée"
          : committee.format === "Joint Crisis"
            ? "Crise conjointe"
            : committee.format === "ECOSOC"
              ? "ECOSOC"
              : committee.format === "Crisis"
                ? "Crise"
                : committee.format,
  chairs: committee.chairs.map((chair) => ({
    ...chair,
    name: chair.name === "Chair Placeholder" ? "Présidence fictive" : "Vice-présidence fictive",
    bio:
      chair.name === "Chair Placeholder"
        ? "TODO : Remplacer par la biographie confirmée de la présidence 2026 pour ce comité."
        : "TODO : Remplacer par la biographie confirmée de la vice-présidence 2026 pour ce comité.",
  })),
  resources: committee.resources.map((resource) =>
    resource.startsWith("TODO:")
      ? resource
          .replace("TODO: Add confirmed background guide link when the 2026 committee packet is published.", "TODO : Ajouter le lien confirmé vers le guide préparatoire lorsque le dossier 2026 sera publié.")
          .replace("TODO: Add research primer or committee brief when available.", "TODO : Ajouter une note de recherche ou un dossier de comité lorsqu'il sera disponible.")
      : resource,
  ),
  backgroundGuide: "TODO : Ajouter le lien vers le guide 2026.",
}));
