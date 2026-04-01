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
        "Les distinctions individuelles reconnaissent notamment l'advocacy, le leadership, l'ingéniosité et la diplomatie. Les distinctions de délégation sont calculées en fonction des performances d'ensemble et de la taille relative des délégations.",
      ],
    },
    {
      href: "/committees/policies",
      title: "Politiques des comités",
      summary: "Politique technologique selon la taille et le format du comité pour SSUNS 2026.",
      body: [
        "Politique technologique SSUNS 2026.",
        "La politique technologique de SSUNS 2026 varie selon la taille et le format du comité. Les attentes applicables aux AG, ECOSOC, agences spécialisées et comités de crise diffèrent donc selon le cadre de travail du comité.",
        "Les délégués doivent consulter le document PDF officiel avant la conférence afin de préparer correctement leur matériel et leur méthode de travail.",
      ],
    },
  ],
  continueLabel: "Continuer vers le programme de la conférence",
  searchLabel: "Rechercher des comités",
  searchHint: "Rechercher par nom, sujet, format ou niveau",
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
      : committee.size === "Single Delegation"
        ? "Délégation simple"
        : committee.size,
  difficulty:
    committee.difficulty
      .replace("This is a Double Delegate Committee.", "Il s'agit d'un comité à double délégation.")
      .replace("This is an Advanced Committee.", "Il s'agit d'un comité avancé.")
      .replace("This is a Beginner Committee.", "Il s'agit d'un comité pour débutants.")
      .replace("This is a General Assembly Heavy Specialized Agency.", "Il s'agit d'une agence spécialisée à dominante d'assemblée générale.")
      .replace("This is a Crisis Heavy Specialized Agency.", "Il s'agit d'une agence spécialisée à forte composante de crise.")
      .replace("This is a Joint-Crisis Committee.", "Il s'agit d'un comité de crise conjoint.")
      .replace("This is a regular committee.", "Il s'agit d'un comité régulier.")
      .replace("This is an Ad Hoc Specialized Agency.", "Il s'agit d'une agence spécialisée Ad Hoc.")
      .replace("This is an Ad Hoc Crisis committee.", "Il s'agit d'un comité de crise Ad Hoc.")
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
  backgroundGuide:
    committee.backgroundGuide === "Background guides will be released closer to the conference."
      ? "Les guides préparatoires seront publiés plus près de la conférence."
      : committee.backgroundGuide,
}));
