import { homeContent as en } from "@/content/en/home";

export const homeContent = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "SSUNS 2026 • Montréal",
    title: "Secondary Schools’ United Nations Symposium",
    accent: "La principale conférence de simulation des Nations Unies pour écoles secondaires au Canada",
    description:
      "Le Secondary Schools’ United Nations Symposium (SSUNS) est la plus grande conférence de simulation des Nations Unies (MUN) au niveau secondaire au Canada, accueillant 1300+ élèves chaque mois de novembre au centre-ville de Montréal.",
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
        value: "26",
        detail: "Comprend des assemblées générales, des ECOSOC, des agences spécialisées et des comités de crise.",
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
    label: "Lettre du Secrétaire général",
    title: "Bienvenue à SSUNS 2026 !",
    body: [
      "Bienvenue à SSUNS 2026 ! Je m’appelle Marcus C. Kelly et j’ai le plaisir d’occuper le poste de Secrétaire général de SSUNS 2026, la 34e édition de notre conférence.",
      "Chaque mois de novembre, notre conférence remplit un mandat ambitieux. Notre équipe, composée de 250+ étudiants de l’Université McGill formés au MUN, organise l’une des plus grandes et prestigieuses conférences de Modélisation des Nations Unies au Canada et dans le monde. Après des mois de préparation, l’équipe de SSUNS organise un week-end de conférence axé sur la collaboration, le leadership, l’éducation et une saine compétition, afin d’offrir une expérience fondée sur des valeurs, une expérience qui peut influencer la manière dont les étudiants, les délégués et les leaders interagissent au début de leur parcours.",
      "Je considère SSUNS comme un puissant catalyseur qui rassemble 1300+ des esprits les plus brillants du secondaire, du collégial et du CÉGEP. Je sais aussi que SSUNS 2026 sera une année particulière, une année qui marquera notre conférence pour longtemps. Les dernières éditions de SSUNS ont connu croissance et transformation ; cette année, mon équipe et moi souhaitons ancrer notre conférence fondée sur des valeurs dans chaque aspect du travail que nous accomplissons et livrons à nos délégations. Cette année, je mets l’accent sur la réussite à travers la confiance, la coordination et l’excellence académique dans la création de nos contenus de comités et de nos services aux délégations, une approche qui reflète nos responsabilités en tant qu’étudiants de l’Université McGill.",
      "Le Model United Nations est en soi une simulation, un modèle de la diplomatie réelle et des interactions mondiales. Toutefois, lorsqu’on participe à cette simulation, il faut reconnaître sa capacité concrète à inspirer et à allumer une étincelle dans l’esprit d’un jeune leader. C’est quelque chose de bien réel, et une réussite tout aussi réelle.",
      "SSUNS 2026 se tiendra dans notre lieu habituel, le magnifique Centre Sheraton, au centre-ville de Montréal, un lieu dont le prestige est à la hauteur de celui de notre conférence. Nous sommes extrêmement reconnaissants de pouvoir compter sur cet espace, et j’ai hâte au jour où SSUNS 2026 commencera et où nos délégués franchiront les portes de l’hôtel avec détermination. Il est d’usage que nos délégations séjournent au Centre Sheraton, ce qui permet aux délégués de profiter d’un lien naturel avec Montréal et avec leur comité.",
      "SSUNS 2026 est fière de proposer une impressionnante sélection de comités, définie par la diversité des sujets et par une mission sincère d’éducation et d’autonomisation de nos jeunes délégués. Pour celles et ceux qui connaissent déjà bien le MUN, nous proposons des comités avancés qui affineront et mettront à l’épreuve la profondeur de vos compétences à mesure que vous progressez dans votre parcours MUN, une étape essentielle en vue du circuit universitaire. Pour celles et ceux qui n’ont jamais fait de MUN auparavant, rassurez-vous : SSUNS 2026 est l’endroit idéal pour commencer. S’inscrire à un comité débutant offrira à nos nouveaux délégués l’occasion de faire leurs premiers pas dans leur parcours MUN. Notre seule mission est d’offrir une expérience à la fois enrichissante et stimulante à tous les types de délégués.",
      "Les événements de SSUNS occupent une place toute particulière dans mon cœur. En tant que Director of Events de SSUNS 2025, j’ai pu constater de première main à quel point ces moments contribuent à créer une expérience véritablement complète pour nos délégués.",
      "Pendant la journée, les délégués auront l’occasion d’assister à des présentations de l’Organisation de l’aviation civile internationale (OACI), la plus importante organisation des Nations Unies au Canada, ainsi qu’à la foire SSUNS, où les participants pourront découvrir des possibilités qui vont bien au-delà du secondaire. En soirée, ne manquez surtout pas notre Gala des délégués, un incontournable de SSUNS et l’un des moments les plus mémorables de la conférence.",
      "Cette année, nous sommes fiers d’introduire deux améliorations majeures à l’expérience SSUNS : un site web entièrement repensé et notre nouvelle plateforme d’inscription, MUNager. Ces outils nous permettront de communiquer plus efficacement et d’assurer une expérience plus fluide pour les conseillers et les délégués. Restez à l’affût de ces nouveautés.",
      "Alors, qu’attendez-vous ? Assurez votre place à SSUNS 2026 tant que les places sont encore limitées.",
      "Comme toujours, suivez-nous sur LinkedIn, Instagram et Facebook pour accompagner le déroulement de SSUNS 2026. Si vous avez des questions ou des préoccupations, n’hésitez surtout pas à me contacter à sg@ssuns.org. Votre expérience compte pour nous, et nous sommes là pour faire en sorte qu’elle soit tout simplement exceptionnelle.",
    ],
    signature: "Marcus C. Kelly",
    role: "Secrétaire général, SSUNS 2026",
    stamp: "Montréal • Bureau de l'organisation",
  },
  conferenceStandard: {
    ...en.conferenceStandard,
    label: "STANDARD DE CONFÉRENCE",
    sections: [
      {
        label: "Conception des comités",
        title: "Des salles distinctes, offrant des expériences uniques",
        body: "Chaque comité est conçu pour se distinguer réellement, par son rythme, sa difficulté et son style de débat. Les délégués y façonnent leur propre expérience et se poussent à exceller.",
      },
      {
        label: "Soutien aux conseillers",
        title: "Des repères clairs tout au long du processus",
        body: "Les conseillers disposent d'un déroulé simple : ce qui compte, quand agir, où aller et qui contacter si quelque chose change. Nous voulons rendre l'encadrement à SSUNS aussi fluide que possible.",
      },
      {
        label: "Hospitalité",
        title: "Soigné et à la hauteur",
        body: "De l'arrivée aux plénières, en passant par les moments entre les séances de comité, SSUNS est pensé pour offrir une expérience professionnelle, digne et facile à parcourir.",
      },
    ],
  },
  featuredCommittees: {
    ...en.featuredCommittees,
    label: "Comités en vedette",
    title: "Notre liste des comités.",
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
      { date: "1er avril 2026", label: "Ouverture des inscriptions" },
      { date: "12-15 nov. 2026", label: "Semaine de la conférence à Montréal" },
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
        quote: "L'inscription, la circulation dans l'hôtel et les attentes des comités doivent être claires bien avant l'arrivée des délégués.",
        author: "Conseiller scolaire",
        role: "Conseiller d'une délégation de retour",
      },
      {
        ...en.testimonials.items[1],
        quote: "Une bonne conférence doit être accueillante, bien organisée et sérieuse sur le plan académique du début à la fin.",
        author: "Chef de délégation",
        role: "Responsable d'une délégation senior",
      },
    ],
  },
  registrationBand: {
    ...en.registrationBand,
    label: "Inscription",
    title: "Les inscriptions à SSUNS 2026 sont maintenant ouvertes.",
    body:
      "Les délégations peuvent maintenant utiliser MUNager pour consulter le guide d'inscription, les frais, les échéances et l'aide financière avant de finaliser leur inscription.",
    cta: { ...en.registrationBand.cta, label: "S'inscrire" },
  },
};
