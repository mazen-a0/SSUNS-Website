import type { ExcellenceScholarshipContent } from "@/content/en/excellenceScholarship";

export const excellenceScholarship: ExcellenceScholarshipContent = {
  navTitle: "Bourse d’excellence",
  title: "Bourse d’excellence SSUNS",
  headline: { first: "Bourse", second: "d’excellence" },
  summary: "Deux bourses de 1 000 $ récompensant le leadership, l’initiative, l’impact et le potentiel des délégués.",
  intro: "Le Secondary Schools’ United Nations Symposium est fier de présenter la Bourse d’excellence SSUNS, une initiative qui récompense les délégués faisant preuve d’un leadership exceptionnel, d’initiative, d’engagement communautaire et d’une volonté de susciter des changements positifs au-delà des simulations des Nations Unies.",
  award: "2 bourses · 1 000 $ chacune",
  awardDetail: { label: "Deux bourses", amount: "1 000 $", each: "chacune" },
  awardDescription: "Deux délégués recevront chacun une bourse de 1 000 $ destinée à soutenir leurs objectifs et leurs aspirations en matière d’études.",
  applyLabel: "Postuler sur Fillout",
  sectionsLabel: "Renseignements sur la bourse",
  tabs: { eligibility: "Admissibilité", selection: "Sélection", process: "Dates et entretiens" },
  deadlineLabel: "Date limite de candidature",
  deadline: "Vendredi 6 novembre 2026 à 23 h 59 HNE (heure de Montréal).",
  eligibility: {
    title: "Admissibilité et critères de sélection",
    intro: "La bourse est ouverte à tous les délégués inscrits qui participent à SSUNS 2026.",
    criteriaIntro: "Les candidatures seront évaluées selon quatre critères :",
    criteria: [
      { title: "Initiative et impact démontré", description: "Entreprendre des actions concrètes, repérer des possibilités d’amélioration et contribuer positivement au bien-être d’autrui." },
      { title: "Leadership et qualités personnelles", description: "Faire preuve de responsabilité, de collaboration, d’intégrité, d’ouverture à différentes perspectives et d’une volonté de progresser sur le plan personnel." },
      { title: "Potentiel d’avenir", description: "Démontrer de la curiosité intellectuelle, de l’ambition, des aspirations réfléchies et la capacité de contribuer de manière significative à la société." },
      { title: "Aspirations en matière d’études", description: "Formuler des objectifs d’études clairs et expliquer de manière réfléchie comment la bourse pourrait contribuer à leur réalisation." },
    ],
  },
  fairness: {
    title: "Une sélection équitable et indépendante",
    lead: "Le processus de sélection se déroulera entièrement à l’aveugle quant à la délégation et au comité des candidats.",
    paragraphs: [
      "Les candidats ne seront pas évalués en fonction de leur établissement scolaire ou de leur délégation, du comité qui leur a été attribué, ni de leurs résultats ou des prix obtenus en comité. La bourse est indépendante de tous les prix de comité existants.",
      "SSUNS reconnaît que le leadership, l’excellence et l’impact prennent de nombreuses formes. Les candidats sont encouragés à s’appuyer sur des expériences vécues à l’école, dans leur communauté, dans leur vie personnelle ou dans le cadre d’initiatives individuelles.",
      "L’exercice de fonctions officielles de leadership, une participation importante à des activités parascolaires et l’obtention de prix antérieurs ne constituent pas des conditions préalables à l’examen d’une candidature.",
      "Afin de favoriser un processus de sélection équitable, les candidatures seront évaluées en tenant compte des expériences et des possibilités propres à chaque personne.",
      "La situation financière des candidats ne leur conférera aucun avantage ni désavantage, et aucun renseignement financier ne sera exigé.",
      "Les réponses portant sur les aspirations en matière d’études seront évaluées selon leur clarté et la qualité de la réflexion, plutôt qu’en fonction de la situation financière des candidats.",
    ],
  },
  process: {
    title: "Processus de candidature et de sélection",
    stages: [
      { title: "Candidature", paragraphs: ["Les délégués intéressés doivent remplir et soumettre leur candidature au plus tard le :"] },
      { title: "Présélection et entretiens", paragraphs: ["Après un premier examen des candidatures, les candidats présélectionnés seront contactés pour recevoir des renseignements complémentaires et seront invités à participer à un bref entretien en personne pendant SSUNS 2026.", "Les entretiens auront lieu en dehors des séances de comité, afin que les candidats ne manquent aucun temps de comité."] },
      { title: "Sélection", paragraphs: ["À l’issue des entretiens, le Comité de sélection des bourses désignera deux bénéficiaires d’ici la fin de la conférence."] },
    ],
  },
  application: {
    title: "Présenter une candidature à la Bourse d’excellence SSUNS",
    intro: "Nous encourageons tous les délégués intéressés à présenter leur candidature, quels que soient leur expérience antérieure en leadership ou leurs accomplissements. La Bourse d’excellence SSUNS vise à reconnaître non seulement les réalisations des élèves, mais aussi leur potentiel à exercer une influence positive et significative à l’avenir.",
    frameTitle: "Candidature à la Bourse d’excellence SSUNS",
    loading: "Chargement du formulaire…",
    unavailable: "Le formulaire n’a pas pu se charger ici. Veuillez utiliser le lien direct ci-dessus pour présenter votre candidature.",
    openForm: "Ouvrir le formulaire dans un nouvel onglet",
    onPageLabel: "Postuler sur cette page",
  },
};
