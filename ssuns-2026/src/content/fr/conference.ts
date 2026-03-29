import { conferenceContent as en } from "@/content/en/conference";

export const conferenceContent = {
  ...en,
  title: "Conférence",
  intro:
    "SSUNS 2026 réunit des comités traditionnels, des salles de crise dynamiques, une programmation d'allocutions et un soutien opérationnel clair dans une expérience pluriquotidienne soigneusement produite.",
  sections: {
    ...en.sections,
    tracks: "À quoi s'attendre",
    schedule: "Temps forts de l'horaire",
    venue: "Lieu et ville",
    policies: "Conduite et politiques",
    sponsorship: "Commandites",
    training: "Formation et préparation",
  },
  chapters: [
    {
      ...en.chapters[0],
      title: "Vue d'ensemble",
      summary: "Vue d'ensemble du programme, formats de salle et attentes de l'événement.",
      body: [
        "La conférence est structurée pour paraître lisible et bien rythmée, de la cérémonie d'ouverture jusqu'aux départs.",
        "Les délégués devraient y trouver des formats de salle distincts, un soutien solide aux conseillers et des standards opérationnels prévisibles.",
      ],
    },
    {
      ...en.chapters[1],
      title: "Lieu",
      summary: "Implantation hôtelière, accès urbain et circulation dans l'environnement de conférence.",
      body: [
        "Le lieu hôte est conçu pour garder les comités, le soutien aux conseillers, les plénières et la circulation informelle dans un même ensemble cohérent.",
        "Montréal donne à la conférence à la fois un caractère civique et une accessibilité pratique pour les écoles en déplacement.",
      ],
    },
    {
      ...en.chapters[2],
      title: "Horaire",
      summary: "Cadence des arrivées, séances de comité, cérémonies et départs.",
      body: [
        "L'horaire est conçu pour préserver l'élan sans créer une compression inutile pour les délégués ou les conseillers.",
        "Le texte d'horaire fictif pourra être remplacé plus tard par le programme quotidien final.",
      ],
    },
    {
      href: "/conference/icao",
      title: "ICAO",
      summary: "Chapitre de référence pour le comité ICAO de SSUNS et son contexte dans la conférence.",
      body: ["À venir."],
    },
    {
      href: "/conference/charity-partner",
      title: "Partenaire caritatif",
      summary: "Information sur le partenaire caritatif de la conférence et initiatives connexes.",
      body: [
        "Ce chapitre est réservé à l'information sur le partenaire caritatif de SSUNS et aux initiatives connexes tournées vers la conférence.",
        "Lorsque le partenaire 2026 sera confirmé, ce chapitre devrait diriger les délégués et les conseillers vers l'information officielle et les détails pertinents.",
      ],
    },
    {
      href: "/conference/delegate-resource-center",
      title: "Centre de ressources des délégués (DRC)",
      summary: "Soutien aux délégués, repères sur le site et ressources d'aide.",
      body: [
        "Le Centre de ressources des délégués vise à centraliser le matériel de soutien et les ressources destinées aux délégués pendant la préparation et les opérations de conférence.",
        "Ce chapitre devrait orienter les délégués vers l'inscription, la préparation des comités, la logistique du lieu et les politiques.",
      ],
    },
    {
      ...en.chapters[3],
      title: "Politiques",
      summary: "Code de conduite, accessibilité, sécurité et attentes de supervision.",
      body: [
        "Les politiques sont traitées comme une architecture de conférence, non comme un ensemble secondaire de documents.",
        "Ce chapitre accueillera plus tard les textes définitifs, les voies d'escalade et les consignes de signalement.",
      ],
    },
    {
      ...en.chapters[4],
      title: "Distinctions",
      summary: "Reconnaissance, honneurs et distinctions à la clôture de la conférence.",
      body: [
        "Les informations relatives aux distinctions seront publiées ici lorsque le programme 2026 sera finalisé.",
        "Ce chapitre pourra ensuite présenter les catégories, les critères et les notes de cérémonie de clôture.",
      ],
    },
  ],
  tracks: [
    {
      ...en.tracks[0],
      title: "Assemblées générales",
      body: "De grandes salles avec caucus soutenus, un processus d'amendement structuré et un accent clair sur la discipline des blocs.",
    },
    {
      ...en.tracks[1],
      title: "Comités spécialisés",
      body: "Des salles plus petites avec des mandats ciblés, des cadres plus techniques et une analyse plus poussée des compromis politiques.",
    },
    {
      ...en.tracks[2],
      title: "Simulations de crise",
      body: "Des salles à évolution rapide qui privilégient la stratégie immédiate, des mises à jour d'information soutenues et une rédaction disciplinée des directives.",
    },
  ],
  expectations: [
    "Tenue professionnelle attendue et arrivée ponctuelle aux comités",
    "Préparation sérieuse avant la publication des guides de comité",
    "Conduite respectueuse en débat selon des standards clairs",
  ],
  scheduleBand: {
    ...en.scheduleBand,
    title: "Temps forts de l'horaire",
    items: [
      { ...en.scheduleBand.items[0], label: "Jour 1", text: "Arrivée, cérémonie d'ouverture, formation des blocs et premières directives." },
      { ...en.scheduleBand.items[1], label: "Jour 2", text: "Accélération des comités, ateliers et coordination des conseillers." },
      { ...en.scheduleBand.items[2], label: "Jour 3", text: "Rédaction des résolutions, intensification des crises et présélection des distinctions." },
      { ...en.scheduleBand.items[3], label: "Jour 4", text: "Votes finaux, cérémonie de clôture et départs." },
    ],
  },
  venueSection: {
    ...en.venueSection,
    title: "Lieu et ville",
    body:
      "Les délégués se réunissent dans un hôtel central de Montréal avec un excellent accès au transport, des services à proximité et une structure adaptée aux grandes délégations scolaires.",
  },
  sponsorshipCallout: {
    ...en.sponsorshipCallout,
    title: "Soutenir SSUNS 2026",
    body:
      "Les organisations qui souhaitent soutenir l'accessibilité, la qualité du programme ou l'accueil de la conférence peuvent consulter le chapitre de commandites.",
  },
  crisisFeature: {
    ...en.crisisFeature,
    title: "Simulation de crise",
    body: "Les mises à jour rapides, la rédaction de directives et l'adaptation stratégique demeurent une part distinctive du programme de SSUNS.",
  },
  policyCallouts: [
    {
      ...en.policyCallouts[0],
      title: "Code de conduite",
      body: "Résumé fictif des attentes de comportement, de la supervision des conseillers et du professionnalisme attendu pendant l'événement.",
    },
    {
      ...en.policyCallouts[1],
      title: "Accessibilité",
      body: "Résumé fictif du processus d'accommodement, de l'accès au site et des contacts de soutien.",
    },
    {
      ...en.policyCallouts[2],
      title: "Politiques de sécurité",
      body: "Résumé fictif des canaux de signalement, de la protection des participants et des protocoles d'urgence.",
    },
  ],
};
