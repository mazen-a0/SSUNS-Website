import { aboutContent as en, type SecretariatMember } from "@/content/en/about";

const secretariatMembers: SecretariatMember[] = en.secretariatMembers.map((member) => ({ ...member }));

export const aboutContent = {
  ...en,
  title: "À propos de SSUNS",
  intro:
    "Fondé en 1992 par un groupe d’étudiants de l’Université McGill, le Symposium des Nations Unies des écoles secondaires (SSUNS) a été créé afin d’offrir aux élèves du secondaire un espace pour explorer les enjeux mondiaux à travers la diplomatie et le débat.",
  sections: {
    ...en.sections,
    mission: "Mission",
    legacy: "Héritage",
    team: "Équipe",
    glance: "En bref",
  },
  chapters: [
    {
      ...en.chapters[0],
      title: "Vue d’ensemble",
      summary: "Profil institutionnel, héritage et mission de SSUNS.",
      body: [
        "En 1992, un groupe d’étudiants de l’Université McGill s’est réuni avec l’objectif de créer un espace où des élèves du secondaire pourraient explorer les enjeux mondiaux à travers la diplomatie et le débat.",
        "Aujourd’hui, dans sa 34e année, le Symposium des Nations Unies des écoles secondaires (SSUNS) est devenu l’une des principales conférences de simulation des Nations Unies au secondaire au Canada.",
        "Chaque année, SSUNS accueille plus de 1 300 délégués représentant plus de 60 délégations scolaires provenant du monde entier. Entièrement organisée par des étudiants et soutenue par plus de 250 étudiants de McGill, la conférence offre un espace dynamique où les élèves du secondaire et du cégep développent leurs compétences en leadership, en négociation et en prise de parole en public, tout en abordant des enjeux mondiaux complexes à travers les débats en comité et la collaboration.",
        "Organisé annuellement à Montréal, au Québec, SSUNS rassemble des étudiants du monde entier pour une expérience inoubliable. Cette année, nous sommes ravis d’accueillir de nouveau les délégués à l’hôtel Sheraton Centre Montréal. Des comités innovants aux événements captivants pour les participants, le Secrétariat a travaillé sans relâche afin de créer une 34e édition exceptionnelle de SSUNS. Nous vous invitons à explorer notre site web pour découvrir ce qui fait de SSUNS une conférence de simulation des Nations Unies véritablement unique.",
      ],
    },
    {
      ...en.chapters[1],
      title: "Mission",
      summary: "Pourquoi SSUNS existe et ce que la conférence demande aux délégués et au personnel.",
      body: [
        "SSUNS rassemble des délégués du secondaire provenant du monde entier afin de participer à des débats réfléchis sur des enjeux mondiaux. Grâce à une diplomatie structurée et à la collaboration, la conférence encourage les étudiants à développer leur esprit critique, leurs compétences en communication et leur leadership, tout en travaillant à l’élaboration de solutions concrètes.",
        "Organisé par des étudiants de l’Université McGill, SSUNS offre aux délégués comme aux membres du personnel des occasions de se développer en tant que leaders, de s’ouvrir à une diversité de perspectives et de participer à une conférence fondée sur la préparation, le respect et la curiosité intellectuelle.",
      ],
    },
    {
      ...en.chapters[2],
      title: "Secrétariat",
      summary: "La structure de direction étudiante responsable de la conférence.",
      body: [
        "UNE ÉQUIPE DE 15 PERSONNES MOBILISÉE TOUTE L’ANNÉE POUR FAIRE VIVRE L’EXPÉRIENCE SSUNS.",
        "Tout au long de l’année, le Secrétariat travaille à la mise en place de chaque aspect de la conférence, du développement des comités à l’élaboration du programme académique, en passant par la coordination de la logistique et des événements.",
        "Aux côtés de centaines d’étudiants bénévoles de McGill, l’équipe réunit les personnes et les idées qui donnent vie à SSUNS.",
        "À la fois étudiants, organisateurs et leaders, les membres du Secrétariat contribuent à créer une conférence qui stimule la réflexion, encourage la collaboration et rassemble la communauté internationale du MUN à Montréal.",
        "NOUS AVONS HÂTE DE VOUS ACCUEILLIR À SSUNS !",
      ],
    },
    {
      ...en.chapters[3],
      title: "Coordinateurs",
      summary: "Les équipes opérationnelles qui rendent l’expérience SSUNS possible.",
      body: [
        "Découvrez les coordinateurs qui contribuent à faire vivre l’expérience SSUNS !",
        "SSUNS ne serait pas possible sans leur engagement et leur soutien.",
      ],
    },
    {
      ...en.chapters[4],
      title: "Héritage de SSUNS",
      summary: "Une lecture plus longue de SSUNS comme institution et tradition annuelle.",
      body: [
        "Fondé en 1992 par un groupe d’étudiant·e·s de l’Université McGill, le Symposium des Nations Unies des écoles secondaires (SSUNS) a été créé afin d’offrir aux élèves du secondaire un espace pour explorer les enjeux mondiaux à travers la diplomatie et le débat.",
        "Au fil des années, SSUNS est devenu l’une des plus importantes conférences de simulation des Nations Unies pour les élèves du secondaire, accueillant des délégués provenant de partout au Canada et du monde entier.",
        "Aujourd’hui, la conférence poursuit cet héritage en réunissant des étudiants autour de débats réfléchis, de la collaboration et du développement du leadership.",
      ],
    },
    {
      ...en.chapters[5],
      title: "IRSAM",
      summary: "L’organisation mère de SSUNS et ses autres volets étudiants.",
      body: [
        "SSUNS fait partie d’une organisation plus large, l’Association des étudiant·e·s en relations internationales de McGill (IRSAM). Cet organisme à but non lucratif, constitué au niveau fédéral, regroupe plus de 300 membres étudiants à l’Université McGill.",
        "IRSAM vise à favoriser l’engagement des jeunes, le développement du leadership et la sensibilisation aux enjeux internationaux à travers ses différents volets. De plus, IRSAM bénéficie du statut consultatif spécial auprès du Conseil économique et social des Nations Unies (ECOSOC), ce qui en fait l’une des rares organisations universitaires dirigées par des étudiants dans le monde à détenir ce statut auprès des Nations Unies.",
        "En plus de SSUNS, IRSAM comprend six autres associations : McMUN, l’équipe de délégation de McGill, Flux, la McGill International Review, Junior Peacemakers et la Délégation Consultative des Jeunes de l’Université McGill (MYAD).",
      ],
    },
    {
      ...en.chapters[6],
      title: "FAQ",
      summary: "Questions fréquentes pour les délégués, les encadrants et les familles.",
      body: [
        "Qu’est-ce que la simulation des Nations Unies (MUN) ?",
        "Comment les écoles peuvent-elles s’inscrire à SSUNS ?",
        "Comment les écoles peuvent-elles rester informées ?",
      ],
    },
  ],
  secretariatMembers,
  legacyGlobalSection: {
    ...en.legacyGlobalSection,
    title: "L’héritage est mondial",
    body: ["À venir."],
  },
  faqCategories: en.faqCategories,
  pillars: [
    {
      ...en.pillars[0],
      title: "Excellence étudiante",
      body: "SSUNS est conçu et organisé par des étudiants de l’Université McGill, qui assurent la réalisation de la conférence avec professionnalisme et rigueur.",
    },
    {
      ...en.pillars[1],
      title: "Débats engagés",
      body: "Les comités abordent des enjeux mondiaux complexes à travers des discussions de fond et des négociations réfléchies.",
    },
    {
      ...en.pillars[2],
      title: "Leadership collaboratif",
      body: "SSUNS permet aux jeunes leaders de faire entendre leurs perspectives et leurs idées dans les discussions sur les enjeux mondiaux.",
    },
  ],
  metrics: [
    { label: "Délégués", value: "1300+" },
    { label: "Staff", value: "250+" },
    { label: "Écoles", value: "60+" },
  ],
};
