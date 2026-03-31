import { homeContent as en } from "@/content/en/home";

export const homeContent = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "SSUNS 2026 • Montréal",
    title: "Secondary Schools’ United Nations Symposium",
    accent: "La principale conférence de simulation des Nations Unies pour écoles secondaires au Canada",
    description:
      "Le Secondary Schools’ United Nations Symposium (SSUNS) est la plus grande conférence de simulation des Nations Unies (MUN) au niveau secondaire au Canada, accueillant plus de 1300 élèves chaque mois de novembre au centre-ville de Montréal.",
    statement:
      "Le Model United Nations permet aux délégués de se mettre à la place des chefs d'État et des diplomates, en utilisant le débat et la prise de parole en public pour aborder des enjeux du monde réel.",
    primaryCta: { ...en.hero.primaryCta, label: "Register now" },
    secondaryCta: { ...en.hero.secondaryCta, label: "Découvrir les comités" },
    stats: [
      { ...en.hero.stats[0], label: "Délégués" },
      { ...en.hero.stats[1], label: "Personnel" },
      { ...en.hero.stats[2], label: "Écoles" },
      { ...en.hero.stats[3], label: "Comités" },
    ],
    conferenceStartIso: en.hero.conferenceStartIso,
    countdownHeading: "Compte à rebours avant SSUNS 2026",
    countdownTarget: en.hero.countdownTarget,
    countdownLabels: {
      days: "Jours",
      hours: "Heures",
      minutes: "Minutes",
    },
    countdownEndedMessage: "Le compte à rebours est terminé — consultez le calendrier de la conférence SSUNS 2026.",
    countdownEndedCta: { label: "Calendrier de la conférence", href: "/conference/schedule" },
  },
  sectionIndex: [
    { ...en.sectionIndex[0], label: "Vue d'ensemble" },
    { ...en.sectionIndex[1], label: "En bref" },
    { ...en.sectionIndex[2], label: "Dates clés" },
    { ...en.sectionIndex[3], label: "Mission" },
    { ...en.sectionIndex[4], label: "Comités" },
    { ...en.sectionIndex[5], label: "Lieu" },
    { ...en.sectionIndex[6], label: "Inscription" },
  ],
  atGlance: {
    ...en.atGlance,
    label: "En bref",
    items: [
      {
        ...en.atGlance.items[0],
        label: "Délégués",
        value: "1300+",
        detail: "Accueille plus de 1300 délégués provenant du monde entier.",
      },
      {
        ...en.atGlance.items[1],
        label: "Lieu",
        value: "Sheraton Montréal",
        detail: "Le Sheraton accueille le 34e itinéraire de SSUNS du 12 au 15 novembre.",
      },
      {
        ...en.atGlance.items[2],
        label: "Comités",
        value: "24",
        detail: "Comprend des assemblées générales, des ECOSOC, des comités spécialisés et des comités de crise.",
      },
      {
        ...en.atGlance.items[3],
        label: "Écoles",
        value: "60+",
        detail: "Des délégations en provenance du Canada et d'ailleurs dans le monde.",
      },
    ],
  },
  editorial: {
    ...en.editorial,
    label: "Profil institutionnel",
    title: "Qu'est-ce que SSUNS?",
    subtitle: "Une institution diplomatique étudiante avec les standards d'un grand programme annuel.",
    strengthsTitle: "Ce qui distingue SSUNS",
    body: [
      "SSUNS n'est pas un événement de débat à un seul registre. C'est un écosystème diplomatique complet où les délégués construisent des positions de politique, négocient des amendements et défendent des résultats dans des salles qui récompensent la discipline.",
      "Derrière chaque séance se trouve une équipe étudiante qui coordonne la présidence, l'architecture de crise, l'accueil, la communication avec les conseillers et les opérations sur le site avec une précision remarquable.",
    ],
    points: [
      "Des règles de procédure rigoureuses sans friction performative",
      "Des sujets choisis pour leur profondeur géopolitique et leur valeur pédagogique",
      "Une atmosphère cérémoniale sans devenir théâtrale",
    ],
  },
  directorNote: {
    ...en.directorNote,
    label: "Lettre de la direction",
    title: "Une conférence devrait être à la fois exigeante et généreuse.",
    body: [
      "SSUNS est conçu pour récompenser une préparation sérieuse tout en demeurant lisible et accueillant pour les écoles qui découvrent le circuit. La qualité ne se mesure pas au volume, mais à la maîtrise.",
      "Nous voulons que les délégués repartent avec l'impression d'avoir été tenus à un véritable standard, visible dans la conception des comités, les communications aux conseillers, l'hospitalité sur le site et le rythme de chaque séance.",
    ],
    signature: "Secrétaire général fictif",
    role: "Secrétaire général, SSUNS 2026",
    stamp: "Montréal • Bureau de l'organisation",
  },
  conferenceStandard: {
    ...en.conferenceStandard,
    label: "Standard de conférence",
    title: "Structuré pour inspirer confiance, rythme et clarté institutionnelle.",
    intro:
      "Le programme est construit comme un rapport bien mené : chaque section doit sembler intentionnelle, lisible et digne des écoles qui nous confient leurs élèves.",
    sections: [
      {
        ...en.conferenceStandard.sections[0],
        label: "Conception des comités",
        title: "Des salles distinctes, pas des formats répétés",
        body: "Les comités sont rédigés et encadrés de manière à se distinguer réellement par leur rythme, leur complexité et leur exigence pédagogique.",
      },
      {
        ...en.conferenceStandard.sections[1],
        label: "Soutien aux conseillers",
        title: "Une clarté opérationnelle du briefing à la clôture",
        body: "Les conseillers reçoivent des étapes claires, des indications précises sur le lieu et des voies d'escalade pour garder la logistique calme et prévisible.",
      },
      {
        ...en.conferenceStandard.sections[2],
        label: "Hospitalité",
        title: "Cérémoniel sans devenir théâtral",
        body: "L'arrivée, les moments en plénière et la circulation informelle sont conçus pour paraître soignés, dignes et simples à parcourir.",
      },
    ],
    policyCallout: {
      ...en.conferenceStandard.policyCallout,
      label: "Politiques et conduite",
      title: "Les standards comptent autant que l'esthétique.",
      body:
        "Le code de conduite, la protection, l'accessibilité et la coordination avec les conseillers sont traités comme une architecture essentielle de la conférence, et non comme des ajouts.",
      cta: { ...en.conferenceStandard.policyCallout.cta, label: "Consulter les politiques" },
    },
  },
  featuredCommittees: {
    ...en.featuredCommittees,
    label: "Comités en vedette",
    title: "Un programme choisi avec soin, présenté comme un dossier.",
    intro:
      "Des premières expériences rassurantes jusqu'aux salles techniques de haute stratégie, SSUNS est conçu comme un portefeuille d'expériences plutôt qu'un seul format répété.",
    ctaLabel: "Voir le catalogue complet des comités",
    items: [
      { ...en.featuredCommittees.items[0], note: "Une entrée mesurée dans la rédaction, le caucus et le travail de coalition." },
      { ...en.featuredCommittees.items[1], note: "Un rythme de crise soutenu avec des attentes rédactionnelles serrées et une adaptation stratégique." },
      { ...en.featuredCommittees.items[2], note: "Technique, avancé et fortement axé sur les politiques dans le langage comme dans le tempo." },
    ],
  },
  timeline: {
    ...en.timeline,
    title: "Dates clés",
    intro: "Un calendrier de planification rigoureux pour les conseillers, la présidence et les délégués.",
    items: [
      { ...en.timeline.items[0], date: "sept. 2025", label: "Ouverture de la préinscription des écoles" },
      { ...en.timeline.items[1], date: "nov. 2025", label: "Période de préférences de comités" },
      { ...en.timeline.items[2], date: "janv. 2026", label: "Publication des guides préparatoires" },
      { ...en.timeline.items[3], date: "1er avril 2026", label: "Ouverture des inscriptions" },
      { ...en.timeline.items[4], date: "12-15 nov. 2026", label: "Semaine de la conférence à Montréal" },
    ],
  },
  gallery: {
    ...en.gallery,
    pageTitle: "Galerie",
    title: "Montréal et le lieu",
    scrollHint: "Faire défiler les planches",
    label: "Planches brochure",
    intro:
      "L'atmosphère de la conférence dépend autant du cadre que de l'horaire : arrivée, circulation, énergie des comités et ville au-delà du lieu.",
    items: [
      {
        ...en.gallery.items[0],
        title: "Montréal au crépuscule",
        caption: "Une ville bilingue dotée d'une gravité civique et d'une véritable allure de conférence.",
      },
      {
        ...en.gallery.items[1],
        title: "Arrivée au Sheraton",
        caption: "Une implantation hôtelière centralisée facilite la circulation des délégations, le soutien aux conseillers et les transitions de soirée.",
      },
      {
        ...en.gallery.items[2],
        title: "Le parquet des comités",
        caption: "Le débat, la rédaction et les mouvements de procédure doivent sembler disciplinés plutôt que chaotiques.",
      },
      {
        ...en.gallery.items[3],
        title: "Cadre de plénière",
        caption: "Les moments d'ouverture et de clôture doivent porter un poids cérémoniel sans excès.",
      },
    ],
    cta: {
      ...en.gallery.cta,
      label: "Voir la galerie",
    },
  },
  landAcknowledgement: {
    ...en.landAcknowledgement,
    title: "Reconnaissance du territoire",
    resourcesTitle: "Ressources supplémentaires",
    contactLine: "Pour plus d'information sur les initiatives à venir, contactez notre Chief of Human Resources à hr@ssuns.org.",
    expandLabel: "Lire la suite",
    collapseLabel: "Réduire",
  },
  testimonials: {
    ...en.testimonials,
    label: "Impressions des écoles",
    title: "La conférence doit paraître maîtrisée dès le premier contact.",
    items: [
      {
        ...en.testimonials.items[0],
        quote: "À venir.",
        author: "Conseiller scolaire",
        role: "Conseiller d'une délégation de retour",
      },
      {
        ...en.testimonials.items[1],
        quote: "À venir.",
        author: "Chef de délégation",
        role: "Responsable d'une délégation senior",
      },
    ],
  },
  registrationBand: {
    ...en.registrationBand,
    label: "Inscription",
    title: "Les inscriptions à SSUNS 2026 ouvriront le 1er avril!",
    body:
      "La conférence aura lieu du 12 au 15 novembre 2026. Des détails supplémentaires, y compris les étapes d'inscription et les mises à jour importantes, seront publiés tout au long du mois de mars.",
    cta: { ...en.registrationBand.cta, label: "Register now" },
  },
};
