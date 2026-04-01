import { committees as enCommittees, committeesPageContent as en } from "@/content/en/committees";

export const committeesPageContent = {
  ...en,
  title: "Comités",
  intro:
    "Comprend des assemblées générales (AG), des conseils économiques et sociaux (ECOSOC), des comités spécialisés (SPEC) et des comités de crise.",
  chapters: [
    {
      href: "/committees",
      title: "Répartition des comités",
      summary: "Descriptions de comités, contacts du dais et notes de programme pour la programmation 2026.",
      body: [
        "Je m'appelle Valeria Fonseca Ortega et je suis de retour pour exercer ma deuxième année en tant que Secrétaire générale adjointe aux affaires des comités. Revenir une seconde fois rend cette édition de SSUNS encore plus passionnante, et moi, aux côtés du reste de l'équipe des comités : Emma Ristic, Secrétaire générale adjointe déléguée pour l'Assemblée générale et l'ECOSOC ; Eitan Pessin, Secrétaire général adjoint délégué pour les agences spécialisées ; et William Greer, Secrétaire général adjoint délégué pour la crise, avons travaillé avec soin pour concevoir des comités originaux, qui mettent en avant des perspectives souvent négligées et qui offrent un contenu éducatif de grande qualité.",
        "Nous avons cherché à présenter une diversité de sujets sur les plans géographique, historique et thématique. Cette année, nous sommes fiers de proposer la première édition du Conseil de sécurité des Nations Unies, ainsi que des comités tels que le Premier Congrès panslave de 1848 et le Festival panafricain du cinéma et de la télévision de Ouagadougou.",
        "Notre objectif est simple : encourager le débat, favoriser l'échange d'idées, remettre en question les perceptions et créer un dialogue significatif. Avant tout, SSUNS ne se veut pas une compétition, mais plutôt un espace où les jeunes leaders peuvent trouver leur voix dans un monde où le dialogue est souvent négligé comme l'un des outils les plus puissants.",
        "Si vous avez des questions, n'hésitez pas à contacter Emma Ristic à l'adresse gaecosoc@ssuns.org, Eitan Pessin à spec@ssuns.org ou Will Greer à crisis@ssuns.org.",
      ],
    },
    {
      href: "/committees/awards",
      title: "Distinctions",
      summary: "Prix individuels et prix de délégation à SSUNS 2026.",
      body: [
        "SSUNS est avant tout un environnement amical et une expérience d'apprentissage collective. Ainsi, les distinctions à SSUNS sont accordées aux délégués dont le comportement enrichit l'apprentissage de leurs pairs de manière exceptionnelle. Les distinctions de SSUNS sont réparties en deux grandes catégories : les distinctions individuelles et les distinctions de délégation.",
        "Détails complets à venir en français. En attendant, veuillez consulter la version anglaise de cette page si nécessaire.",
      ],
    },
    {
      href: "/committees/policies",
      title: "Politiques des comités",
      summary: "Politique technologique selon la taille et le format du comité pour SSUNS 2026.",
      body: [
        "Technology Policy SSUNS 2026.",
        "Please note that the SSUNS 2026 technology policy has changed and will vary by committee size and format. As SSUNS will run as a hybrid conference, the policies for GAs, ECOSOCs, Specialized Agencies, and Crisis committees will differ.",
        "Le texte français complet sera ajouté lorsque la version finale sera approuvée.",
      ],
    },
  ],
  continueLabel: "Continuer vers le programme de la conférence",
  searchLabel: "Rechercher des comités",
  searchPlaceholder: "Rechercher par nom, sujet, format ou niveau",
  allOptionLabel: "Tous",
  filterThemeLabel: "Volet",
  filterLevelLabel: "Niveau",
  sizeLabel: "Taille de la salle",
  clearFiltersLabel: "Effacer les filtres",
  openDetailsLabel: "Ouvrir le dossier",
  noResults: "Aucun comité ne correspond à vos filtres.",
  detailBackLabel: "Retour à tous les comités",
  detailCloseLabel: "Fermer le dossier",
  groups: {
    ga: "Assemblées générales",
    ecosoc: "ECOSOC",
    specialized: "Spécialisés",
    crisis: "Crise",
    jointCrisis: "Crise conjointe",
  },
  sections: {
    ...en.sections,
    overview: "Aperçu",
    difficulty: "Difficulté",
    topic: "Sujet",
    format: "Format",
    chairs: "Biographies de la présidence",
    resources: "Ressources",
    guide: "Guide préparatoire",
  },
};

export const committees = enCommittees.map((committee) => ({
  ...committee,
  level:
    committee.level === "Advanced"
      ? "Avancé"
      : committee.level === "Beginner"
        ? "Débutant"
        : committee.level === "Coming soon"
          ? "À venir"
          : committee.level,
  theme:
    committee.theme === "General Assemblies"
      ? "Assemblées générales"
      : committee.theme === "Economic and Social Councils"
        ? "Conseils économiques et sociaux"
        : committee.theme === "Specialized Committees"
          ? "Comités spécialisés"
          : committee.theme === "Joint Crisis Committees"
            ? "Comités de crise conjoints"
            : committee.theme === "Crisis Committees"
              ? "Comités de crise"
              : committee.theme,
  size:
    committee.size === "Double Delegation"
      ? "Double délégation"
      : committee.size === "Coming soon"
        ? "À venir"
        : committee.size,
  difficulty:
    committee.difficulty === "Coming soon"
      ? "À venir"
      : committee.difficulty
          .replace("This is a Double Delegate Committee.", "Il s'agit d'un comité à double délégation.")
          .replace("This is an Advanced Committee.", "Il s'agit d'un comité avancé.")
          .replace("This is a Beginner Committee.", "Il s'agit d'un comité pour débutants.")
          .replace("This is a General Assembly Heavy Specialized Agency.", "Il s'agit d'une agence spécialisée lourde de l'Assemblée générale.")
          .replace("This is a Crisis Heavy Specialized Agency.", "Il s'agit d'une agence spécialisée comprenant des éléments de crise de haut niveau.")
          .replace("This is a Joint-Crisis Committee.", "Il s'agit d'un comité de crise conjoint.")
          .replace("Some sessions might take place outside the Sheraton Hotel.", "Certaines séances pourraient avoir lieu à l'extérieur de l'hôtel Sheraton."),
  format:
    committee.format === "General Assembly"
      ? "Assemblée générale"
      : committee.format === "ECOSOC"
        ? "ECOSOC"
        : committee.format === "Specialized"
          ? "Spécialisé"
          : committee.format === "Joint Crisis"
            ? "Crise conjointe"
            : committee.format === "Crisis"
              ? "Crise"
              : committee.format,
  blurb: committee.blurb === "Coming soon." ? "À venir." : committee.blurb,
  overview: committee.overview === "Coming soon." ? "À venir." : committee.overview,
  topic: committee.topic === "Coming soon" ? "À venir" : committee.topic,
  backgroundGuide: committee.backgroundGuide === "Coming soon" ? "À venir" : committee.backgroundGuide,
}));
