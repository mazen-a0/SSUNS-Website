import { aboutContent as en, type SecretariatMember } from "@/content/en/about";

const secretariatMembers: SecretariatMember[] = [
  { name: "Marcus Kelly", role: "Secretary-General", headshotSrc: "/headshots/marcus.jpg" },
  { name: "Costas Oreopoulos", role: "Chargée d’Affaires", headshotSrc: "/headshots/costas.jpg" },
  { name: "Mazen Asali", role: "Director-General", headshotSrc: "/headshots/mazen.jpg" },
  { name: "Andrew Tobin", role: "USG Finance", headshotSrc: "/headshots/andrew.jpg" },
  { name: "Hortense Bonnet", role: "USG Admin", headshotSrc: "/headshots/hortense.jpg" },
  { name: "Julien Fournier", role: "Chief of HR", headshotSrc: "/headshots/julien.jpg" },
  { name: "Léandre Noël", role: "Chief of Ops", headshotSrc: "/headshots/leandre.jpg" },
  { name: "Kiara Gilroy", role: "Director of Events", headshotSrc: "/headshots/kiara.jpg" },
  { name: "Tracy Jiang", role: "Director of PR", headshotSrc: "/headshots/tracy.jpg" },
  { name: "Paul Malpartida Durroux", role: "Dep PR External Outreach", headshotSrc: "/headshots/paul.jpg" },
  { name: "Hannah Regular", role: "Dep PR Brand Management", headshotSrc: "/headshots/hannah.jpg" },
  { name: "Valeria Fonseca Ortega", role: "USG Committees", headshotSrc: "/headshots/vale.jpg" },
  { name: "Emma Ristic", role: "Dep GA/ECOSOCs", headshotSrc: "/headshots/emma.jpg" },
  { name: "Eitan Pessin", role: "Dep Specs", headshotSrc: "/headshots/eitan.jpg" },
  { name: "Will Greer", role: "Dep Crisis", headshotSrc: "/headshots/will.jpg" },
];

export const aboutContent = {
  ...en,
  title: "À propos de SSUNS",
  intro:
    "SSUNS est l'une des plus grandes conférences de simulation des Nations Unies pour écoles secondaires en Amérique du Nord, conçue par des étudiants qui valorisent la qualité institutionnelle, une pédagogie solide et un véritable sens de l'occasion.",
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
      title: "Vue d'ensemble",
      summary: "Profil institutionnel, héritage et standard de conférence.",
      body: [
        "SSUNS fonctionne comme une institution diplomatique étudiante avec un fort accent sur la préparation, le rythme et la confiance opérationnelle.",
        "L'identité de la conférence dépend autant de la discipline du programme et de la clarté pour les conseillers que de l'ampleur des comités.",
      ],
    },
    {
      ...en.chapters[1],
      title: "Mission",
      summary: "Pourquoi SSUNS existe et quel standard la conférence cherche à tenir.",
      body: [
        "SSUNS existe pour offrir aux délégués du secondaire une conférence qui traite la préparation, la diplomatie et le leadership étudiant avec sérieux.",
        "L'objectif n'est pas simplement la participation, mais la formation : les élèves devraient repartir avec de meilleures habitudes de recherche, de rédaction et de négociation.",
      ],
    },
    {
      ...en.chapters[2],
      title: "Secrétariat",
      summary: "La structure de direction étudiante responsable de la conférence.",
      body: [
        "Le secrétariat est responsable de l'orientation du programme, de la logistique, des comités, des services aux délégués et de la cohérence générale de la conférence.",
        "Les biographies fictives pourront plus tard être remplacées par les membres confirmés de l'exécutif et les descriptions exactes de portefeuille.",
      ],
    },
    {
      ...en.chapters[3],
      title: "Coordination",
      summary: "Les portefeuilles opérationnels qui transforment la planification en exécution.",
      body: [
        "Les coordonnateurs soutiennent la circulation sur le site, la communication avec les conseillers, l'inscription, l'accueil et les opérations des comités pendant la semaine de la conférence.",
        "Cette section pourra ensuite s'élargir à des profils détaillés ou à des notes de direction pour chaque portefeuille.",
      ],
    },
    {
      ...en.chapters[4],
      title: "Héritage de SSUNS",
      summary: "Une lecture plus longue de SSUNS comme institution et tradition annuelle.",
      body: [
        "Au fil des décennies, SSUNS est devenu une conférence reconnue pour son ampleur, la variété de ses comités et un équilibre distinctif entre rigueur et chaleur humaine.",
        "Ce chapitre pourra plus tard être enrichi par des repères historiques confirmés, des archives photographiques et du matériel d'anniversaire officiel.",
      ],
    },
    {
      href: "/about/irsam",
      title: "IRSAM",
      summary: "Visitez IRSAM, l'Association des étudiants en relations internationales de McGill, organisme parent de SSUNS.",
      body: [
        "IRSAM est l'Association des étudiants en relations internationales de McGill, l'organisme parapluie qui soutient SSUNS et d'autres programmes.",
      ],
    },
    {
      href: "/about/faqs",
      title: "FAQ",
      summary: "Questions fréquentes pour les délégués, les conseillers et les familles.",
      body: [
        "Les questions fréquentes couvrent les distinctions, la logistique des délégations, le code vestimentaire, la préparation et le déroulement général de la conférence.",
        "Lorsqu'une question renvoie à un autre sujet, les délégués devraient être orientés vers les chapitres du lieu, de l'horaire, de l'inscription ou des comités.",
      ],
    },
  ],
  mission:
    "SSUNS existe pour offrir aux délégués du secondaire une conférence qui traite la préparation, la diplomatie et le leadership étudiant avec sérieux. L'objectif n'est pas seulement la participation, mais la formation.",
  legacy:
    "Au fil des décennies, SSUNS est devenu une conférence reconnue pour son ampleur, la variété de ses comités et un équilibre distinctif entre rigueur et chaleur humaine. Le texte de remplacement pourra plus tard être remplacé par des repères historiques précis.",
  pillars: [
    {
      ...en.pillars[0],
      title: "Excellence dirigée par les étudiants",
      body: "Les grandes fonctions opérationnelles sont conçues et livrées par des équipes étudiantes avec une responsabilité claire et une forte discipline de production.",
    },
    {
      ...en.pillars[1],
      title: "Rigueur de fond",
      body: "Les sujets de comité sont choisis pour leur profondeur politique, leur actualité et la complexité réelle des négociations qu'ils permettent.",
    },
    {
      ...en.pillars[2],
      title: "Culture institutionnelle",
      body: "Les nouveaux délégués comme les présidents expérimentés doivent sentir que la conférence est exigeante, cohérente et qu'elle mérite une préparation sérieuse.",
    },
  ],
  teamPlaceholders: [
    { ...en.teamPlaceholders[0], name: "Secrétaire général fictif", role: "Direction générale de la conférence et vision d'ensemble." },
    { ...en.teamPlaceholders[1], name: "Directeur général fictif", role: "Opérations, logistique et exécution sur le site." },
    { ...en.teamPlaceholders[2], name: "Secrétaire général adjoint aux comités fictif", role: "Recrutement, formation et contrôle de qualité des comités." },
  ],
  secretariatMembers,
  faqCategories: en.faqCategories,
  metrics: [
    { ...en.metrics[0], label: "Années d'existence" },
    { ...en.metrics[1], label: "Bénévoles annuels" },
    { ...en.metrics[2], label: "Écoles partenaires" },
  ],
};
