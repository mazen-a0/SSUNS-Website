import { conferenceContent as en } from "@/content/en/conference";
import { charityPartner } from "@/content/charityPartner";
import { scheduleDays, scheduleDayHighlights } from "@/content/schedule";

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
      summary: "Horaire interactif des délégués du 12 au 15 novembre, avec les heures, les détails et les ressources utiles.",
      body: [
        "SSUNS 2026 aura lieu du 12 au 15 novembre à Montréal.",
        "Découvrez les séances de comité par bloc, les ateliers, les cérémonies, les séances de retour et les événements sociaux. Toutes les heures sont locales à Montréal.",
      ],
    },
    {
      href: "/conference/icao",
      title: "ICAO",
      summary: "Chapitre de référence pour le comité ICAO de SSUNS et son contexte dans la conférence.",
      body: [
        "L'Organisation de l'aviation civile internationale se trouve à Montréal, et cela compte. C'est l'un des rares endroits où la coordination mondiale n'est pas théorique, mais opérationnelle.",
        "La programmation ICAO de SSUNS est conçue pour refléter cet univers : structurée, technique lorsque nécessaire, et profondément politique sous la surface. C'est un avantage propre à Montréal et une manière très SSUNS de faire de la ville une partie de l'apprentissage.",
      ],
    },
    {
      href: "/conference/charity-partner",
      title: "Partenaire caritatif",
      // Keep the supplied English copy until an approved French version is available.
      summary: "War Child — SSUNS 2026 charity partner.",
      body: charityPartner.paragraphs,
    },
    {
      href: "/conference/delegate-resource-center",
      title: "Centre de ressources des délégués (DRC)",
      summary: "Soutien aux délégués, repères sur le site et ressources d'aide.",
      body: [
        "Le Centre de ressources des délégués vise à centraliser le matériel de soutien et les ressources destinées aux délégués pendant la préparation et les opérations de conférence.",
        "Ce chapitre oriente les délégués vers l'inscription, la préparation des comités, la logistique du lieu et les politiques.",
      ],
    },
    {
      ...en.chapters[3],
      title: "Politiques",
      summary: "Code de conduite, accessibilité, sécurité et attentes de supervision.",
      body: [
        "Les politiques sont traitées comme une architecture de conférence, non comme un ensemble secondaire de documents.",
        "Ce chapitre rassemble les textes de référence, les voies d'escalade et les consignes de signalement applicables à SSUNS 2026.",
      ],
    },
    {
      ...en.chapters[4],
      title: "Distinctions",
      summary: "Reconnaissance, honneurs et distinctions à la clôture de la conférence.",
      body: [
        "Les distinctions reconnaissent l'excellence individuelle et la performance d'ensemble des délégations à la clôture de la conférence.",
        "Ce chapitre présente le cadre général des catégories, des critères et des distinctions remises pendant la cérémonie de clôture.",
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
      title: "Agences spécialisées",
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
    items: scheduleDays.map((day) => ({ label: day.fr, text: scheduleDayHighlights(day.id, "fr") })),
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
