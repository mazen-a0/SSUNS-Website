import { aboutContent as en, type SecretariatMember } from "@/content/en/about";

const secretariatRoleByName: Record<string, string> = {
  "Marcus Kelly": "Secrétaire général",
  "Costas Oreopoulos": "Chargé d’affaires",
  "Mazen Asali": "Directeur général",
  "Andrew Tobin": "Secrétaire général adjoint aux finances",
  "Hortense Bonnet": "Secrétaire générale adjointe à l’administration",
  "Julien Fournier": "Chef des ressources humaines",
  "Léandre Noël": "Chef des opérations",
  "Kiara Gilroy": "Directrice des événements",
  "Tracy Jiang": "Directrice des relations publiques",
  "Paul Malpartida Durroux": "Directeur adjoint des relations publiques, rayonnement externe",
  "Hannah Regular": "Directrice adjointe des relations publiques, image de marque",
  "Valeria Fonseca Ortega": "Secrétaire générale adjointe aux comités",
  "Emma Ristic": "Secrétaire générale adjointe déléguée aux AG et à l’ECOSOC",
  "Eitan Pessin": "Secrétaire général adjoint délégué aux agences spécialisées",
  "Will Greer": "Secrétaire général adjoint délégué à la crise",
};

const secretariatBioByName: Record<string, string> = {
  "Marcus Kelly":
    "Voici Marcus, notre secrétaire général pour SSUNS 2026. Si vous ne l’avez pas encore croisé sur nos réseaux sociaux ou courant dans les couloirs de l’hôtel, sachez qu’il est en quatrième année à McGill, où il étudie en gestion internationale avec une mineure en science politique. Marcus connaît SSUNS et le Model UN sous tous les angles, de la salle de comité comme vice-président à SSUNS 2024 jusqu’aux opérations plus larges de la conférence comme directeur des événements à SSUNS 2025, sans oublier son expérience de délégué du secondaire jusqu’à l’équipe compétitive de McGill. En dehors de SSUNS, vous le trouverez souvent à courir, à faire du vélo, à chercher un endroit tranquille pour lire ou une plage où se détendre, probablement davantage à Boston qu’à Montréal. Marcus s’implique aussi beaucoup dans d’autres projets sur le campus, notamment au sein de Bull and Bear, le magazine étudiant de McGill, où il est rédacteur en chef adjoint. À la tête de SSUNS 2026, Marcus se réjouit profondément de guider une équipe et une conférence d’exception cette année et espère que chacun pourra profiter pleinement de l’expérience. Son conseil pour passer le meilleur week-end possible ? Apprenez à apprécier l’attente des ascenseurs au Sheraton, cela fait partie du parcours SSUNS. Plus sérieusement, en matière de MUN, Marcus le dit clairement : « La vraie compétition repose sur le respect. » À SSUNS, le manque de respect n’a pas sa place ; la compétition doit être fondée sur l’équité, la progression et le respect mutuel.",
  "Costas Oreopoulos":
    "Voici notre formidable chargé d’affaires, Costas Oreopoulos (il/lui). Costas est en deuxième année à McGill, où il étudie en science politique avec une mineure en développement international. Originaire de Toronto, son parcours avec SSUNS a commencé au secondaire, lorsqu’il assistait à des conférences partout en Amérique du Nord avant de revenir à SSUNS comme coordonnateur du Centre de ressources des délégués pour l’édition 2025. Il revient maintenant pour SSUNS 2026 afin d’accompagner les écoles dans leur inscription et leur préparation à la conférence. En dehors du travail, Costas est passionné par tout ce qui touche à l’automobile, alors n’hésitez pas à venir lui parler de Formule 1 pendant le week-end. Ancien délégué de crise, il rappelle aux participants que la créativité est souvent leur plus grande force en comité.",
  "Mazen Asali":
    "Voici notre incroyable directeur général, Mazen Asali (il/lui). Originaire d’Amman, en Jordanie, Mazen est actuellement en quatrième année à McGill, où il étudie l’informatique et la biologie avec une mineure en entrepreneuriat. Son parcours en Model UN a commencé au secondaire, où il a été à la fois délégué et organisateur, avant de s’impliquer à SSUNS comme membre du DRC puis au sein des opérations de la conférence. En dehors de ses études, Mazen est très impliqué dans la vie étudiante à McGill et continue d’apprendre le français. Lorsqu’il ne travaille pas, il aime lire, nager, jouer à des jeux vidéo et coder. Son conseil aux délégués est simple : n’ayez pas peur de sortir de votre zone de confort.",
  "Andrew Tobin":
    "Voici Andrew Tobin (il/lui), notre secrétaire général adjoint aux finances pour SSUNS 2026. Andrew est en quatrième année à McGill, où il suit un programme spécialisé en science politique avec une mineure en histoire. Il s’est d’abord impliqué dans l’organisation d’événements étudiants avant de rejoindre l’équipe de SSUNS pour l’édition 2025. Il est actuellement en échange à Lund, en Suède, pour le début de 2026, et a hâte de revenir à Montréal pour sa dernière année. Grand amateur de hockey, Andrew s’est aussi impliqué au sein de l’Association étudiante de science politique. Son conseil aux délégués : n’ayez pas peur de poser des questions et allez à la rencontre des autres, tout le monde apprend ensemble.",
  "Hortense Bonnet":
    "Rencontrez Hortense (elle), notre brillante secrétaire générale adjointe à l’administration, l’esprit derrière notre merch, nos roses et notre site web. Elle est actuellement en troisième année à McGill, où elle étudie l’économie avec deux mineures, l’une en développement international et l’autre en gestion. C’est sa deuxième année dans ce rôle à SSUNS. L’an dernier, vous l’avez peut-être croisée comme coordonnatrice des inscriptions. Mais comment est-elle arrivée dans l’univers, parfois légèrement chaotique, du Model UN ? Ses amis lui ont dit que SSUNS était la meilleure façon de trouver une communauté accueillante à McGill, et son intérêt pour la diplomatie a rapidement grandi. Hortense ne se décrit pas comme une « MUN kid », mais plutôt comme une « OG UN kid ». Quand elle n’est pas occupée à aider l’équipe, vous la trouverez probablement en train de savourer un tiramisu ou un fondant baulois. Son restaurant préféré ? Très fidèle à ses racines françaises, elle répond sans hésiter : L’Entrecôte, où elle commande toujours son steak saignant, voire bleu. Son conseil : « Parlez à tout le monde. Essayez de nouvelles choses. Testez de nouvelles techniques de débat. De manière générale, sortez de votre zone de confort… et bien sûr, achetez du merch ! »",
  "Julien Fournier":
    "Rencontrez Julien (il/lui), notre formidable chef des ressources humaines. Originaire de Montréal, il est en deuxième année à McGill, où il étudie le développement international et l’économie. SSUNS 2026 marquera sa quatrième participation à la conférence, lui qui y a déjà pris part comme délégué puis comme coordonnateur du Centre de ressources des délégués. Son parcours en Model UN a commencé au cégep, où il supervisait les relations publiques, le marketing et les communications de la conférence de son établissement ainsi que de l’équipe de délégation collégiale. Julien continue de participer activement au circuit avec l’équipe de délégation de McGill et, malgré son engagement profond dans le MUN, il pratique aussi le débat parlementaire depuis près de sept ans. En dehors du milieu universitaire, il est barista « professionnel », lecteur passionné et grand amateur d’architecture. N’hésitez pas à lui demander son avis sur le design du Sheraton, il en est un admirateur convaincu. Julien est aussi un apprenant de langues assidu, avec une impressionnante série de plus de 1 200 jours sur Duolingo. Son conseil aux délégués : débattez de bonne foi, réfléchissez avant de parler et ayez confiance dans la solidité éthique de vos arguments, c’est cela qui fait une bonne diplomatie.",
  "Léandre Noël":
    "Rencontrez Léandre (il/lui), notre formidable chef des opérations à SSUNS, autrement dit le cœur battant du week-end de la conférence. Léandre est chargé de coordonner et d’organiser chaque aspect de la conférence à l’hôtel, depuis la salle où vous débattez jusqu’à la chaise sur laquelle vous êtes assis. Il est en cinquième année à McGill, où il poursuit un programme conjoint spécialisé en science politique et en environnement. Léandre a commencé son parcours à SSUNS en 2023 comme vice-président de l’un des JCC. À SSUNS 2025, il a occupé le poste de coordonnateur des opérations, où il a perfectionné son sens de l’organisation. Lorsqu’il n’est pas en train d’orchestrer le déroulement de la conférence, Léandre joue au basketball intramural, dans la dernière division, tout en bas du classement. Pour lui, l’essentiel est de s’amuser et de continuer à progresser, une philosophie qui reflète aussi son conseil aux délégués pour SSUNS 2026 : « Ne laissez pas les autres définir ce qu’est une conférence réussie pour vous. Avancez une étape à la fois et rendez-vous fiers. »",
  "Kiara Gilroy":
    "Rencontrez Kiara (elle), notre excellente directrice des événements. Originaire de Tahiti, en Polynésie française, elle poursuit actuellement un baccalauréat en science politique à l’Université McGill. SSUNS 2026 sera sa deuxième participation à la conférence après avoir brillamment occupé le poste de coordonnatrice des événements lors de la dernière édition, ainsi qu’à McMUN. Au-delà de son expérience en MUN, Kiara est aussi une athlète de haut niveau, membre à la fois de son équipe universitaire et de son équipe nationale. Son conseil aux délégués : soyez bienveillants, réfléchissez avec créativité et n’hésitez jamais à demander de l’aide. Et surtout, ne manquez pas le gala des délégués.",
  "Tracy Jiang":
    "Rencontrez Tracy Jiang (elle), notre fantastique directrice des relations publiques pour SSUNS 2026. Originaire de Montréal, Tracy est en quatrième année à McGill, où elle étudie en science politique avec une mineure en développement international. Elle a découvert le Model UN à travers SSUNS, d’abord comme déléguée, puis comme coordonnatrice du design et de l’image de marque en 2025. Elle est également membre active de l’équipe de délégation de McGill et a participé à de nombreuses conférences universitaires. Au-delà de sa présence inspirante sur le circuit, Tracy est une grande voyageuse. Elle revient tout juste d’un échange à Hong Kong, qui a enrichi son parcours académique. En dehors des études et de ses engagements parascolaires, elle est passionnée de photographie, d’échecs et de musique. Elle compte parmi les plus grandes admiratrices de Malcolm Todd et peut écouter de la musique pendant des heures sans s’arrêter. Son conseil aux délégués de SSUNS 2026 : il est tout à fait normal d’être nerveux, mais ne laissez pas cela vous empêcher de prendre la parole et d’entrer en dialogue avec les autres.",
  "Paul Malpartida Durroux":
    "Rencontrez Paul, l’un des membres remarquables de notre secrétariat à SSUNS 2026. Originaire de Panama City, Paul est en quatrième et dernière année à McGill, où il poursuit un programme conjoint spécialisé en science politique et en études russes. Bien qu’il ait découvert le Model UN seulement après son arrivée à McGill, il s’est rapidement imposé sur le circuit universitaire en participant à des conférences avec l’équipe de délégation de McGill. Il s’est aussi beaucoup impliqué dans l’envers du décor, notamment en travaillant à McMUN et en faisant déjà partie du secrétariat de SSUNS l’an dernier. En dehors du MUN, vous pouvez le trouver plongé dans la littérature russe, suivant de près la géopolitique mondiale ou dominant le dodgeball intramural. Il est aussi un membre actif de la communauté mcgilloise à travers la SLASA. Son conseil aux délégués : les personnes que vous rencontrez comptent autant que les leçons que vous apprenez en comité.",
  "Hannah Regular":
    "Rencontrez Hannah (elle), notre directrice adjointe des relations publiques pour l’image de marque. Originaire de Moncton, au Nouveau-Brunswick, Hannah entame sa quatrième année à McGill, où elle étudie la linguistique et l’allemand. Polyglotte et créative, vous pouvez la trouver en train de jouer de la guitare ou du piano lorsqu’elle n’est pas derrière la caméra. Des TikToks de la conférence aux images des cérémonies d’ouverture et de clôture, Hannah joue un rôle essentiel dans la manière dont les délégués arrivent avec enthousiasme et repartent avec des souvenirs forts. Après avoir rejoint l’équipe comme photographe à SSUNS et vidéaste à McMUN, elle sait déjà parfaitement où trouver le meilleur angle, alors souriez, il y a de fortes chances qu’elle vous ait déjà capturés en image. Son conseil aux délégués : quatre jours passent plus vite qu’on ne le croit, alors profitez pleinement de chaque moment.",
  "Valeria Fonseca Ortega":
    "Voici Valeria (elle), notre incroyable secrétaire générale adjointe aux comités, de retour pour une deuxième année. Elle est actuellement en quatrième année, où elle poursuit un programme conjoint spécialisé en économie et en développement international, avec une mineure en géographie urbaine. Maintenant dans sa troisième année à SSUNS, elle a d’abord rejoint l’équipe comme vice-présidente du comité FEALAC avant d’intégrer le secrétariat. Avant l’université, Valeria était très impliquée en prise de parole en public et a été choisie pour représenter le Mexique au concours international de prise de parole organisé par l’English-Speaking Union en 2023, où elle a terminé troisième au monde. À McGill, elle a aussi fait partie de l’équipe de délégation, poursuivant sa passion pour le Model UN et le dialogue international. Actuellement en échange à Paris, elle aime trouver un bon St-Germain Spritz, goûter à la soupe à l’oignon et défend les quesadillas comme le repas parfait à n’importe quelle heure, surtout à 3 h du matin. Valeria parle « deux langues et demie », le français étant la demie, alors n’hésitez pas à pratiquer avec elle pendant la conférence. Son conseil aux délégués : voyez le MUN comme une « socialisation surboostée ». Osez vous lancer et faites de nouvelles rencontres.",
  "Emma Ristic":
    "Voici Emma Ristic (elle), notre formidable secrétaire générale adjointe déléguée aux assemblées générales et à l’ECOSOC. Emma est en troisième année en science politique et a commencé son parcours en Model UN à l’université. Depuis un an et demi, elle participe activement au circuit universitaire avec l’équipe de délégation de McGill, tout en enrichissant son expérience académique et organisationnelle. Cette année, elle s’appuie sur son travail antérieur à SSUNS pour contribuer au ton et à la rigueur de nos plus grandes salles de débat. En dehors des études, Emma adore assister à des concerts au parc Jean-Drapeau et faire du hot yoga. Son conseil aux délégués : ayez confiance en votre propre style de prise de parole, car votre touche personnelle compte davantage qu’une formule toute faite.",
  "Eitan Pessin":
    "Voici Eitan Pessin (il), notre passionné secrétaire général adjoint délégué aux agences spécialisées, ou « Dep Spec » pour faire court. Eitan est en deuxième année en histoire et en philosophie, alors vous pouvez être certains que ses comités sont conçus avec rigueur et enthousiasme. Dès son premier semestre à McGill, après s’être vu refuser une place dans l’équipe d’ultimate frisbee, il a cherché une activité parascolaire où s’impliquer. C’est ainsi qu’il a découvert l’IRSAM et rejoint l’équipe de délégation de McGill, participant au circuit universitaire et à plusieurs conférences. Après avoir été vice-président de comité à SSUNS 2025, Eitan a compris qu’il voulait jouer un rôle plus important dans l’organisation de la conférence. En dehors de l’IRSAM, Eitan aime lire et, même s’il n’a aujourd’hui surtout le temps que pour ses lectures académiques, il lit actuellement On Photography. Son conseil aux délégués : n’ayez jamais peur de poser des questions.",
  "Will Greer":
    "Rencontrez Will (il/lui), notre remarquable secrétaire général adjoint délégué à la crise. Originaire de Point Edward, en Ontario, Will est en deuxième année à McGill, où il poursuit une double majeure en science politique et en histoire. SSUNS 2026 marquera sa quatrième participation à la conférence : il y a participé à deux reprises au secondaire, notamment en présidant à la Cour internationale de Justice, puis a travaillé comme membre du personnel de comité l’an dernier avant de devenir aujourd’hui notre Dep Crisis. Pendant son temps libre, Will est lanceur pour l’équipe de baseball des Redbirds de McGill, grand amateur de sport et passionné de politique mondiale. Et si jamais vous rencontrez un problème pendant le week-end, rappelez-vous : « quand il y a un Will, il y a un moyen ». Son conseil aux délégués : soyez authentiques et constants, c’est un marathon, pas un sprint.",
};

const secretariatMembers: SecretariatMember[] = en.secretariatMembers.map((member) => ({
  ...member,
  role: secretariatRoleByName[member.name] ?? member.role,
  bio: secretariatBioByName[member.name] ?? member.bio,
}));

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
        "Chaque année, SSUNS accueille 1300+ délégués représentant plus de 60 délégations scolaires provenant du monde entier. Entièrement organisée par des étudiants et soutenue par 250+ étudiants de McGill, la conférence offre un espace dynamique où les élèves du secondaire et du cégep développent leurs compétences en leadership, en négociation et en prise de parole en public, tout en abordant des enjeux mondiaux complexes à travers les débats en comité et la collaboration.",
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
        "Notre équipe de coordination fait vivre l’expérience SSUNS, et la conférence ne serait pas possible sans son dévouement et son soutien.",
        "Restez à l’affût : les profils des coordinateurs seront ajoutés à mesure que nous approchons de SSUNS 2026 !",
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
        "En plus de SSUNS, IRSAM soutient un ensemble plus large d'initiatives étudiantes, notamment en publication, en sensibilisation jeunesse, en engagement politique et au sein de l'équipe de délégation de McGill.",
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
    body: [
      "SSUNS n'a jamais semblé limité à une seule ville. Chaque mois de novembre, Montréal devient un point de rencontre où arrivent des étudiants avec des cultures scolaires et des instincts politiques différents, tous décidés à prendre la diplomatie au sérieux.",
      "C'est précisément cela qui compte. Lorsque des délégués du Canada se retrouvent dans la même salle que des élèves venant des États-Unis, d'Europe, d'Afrique et d'ailleurs, le débat devient un échange de perspectives, de priorités et de ténacité lorsque la salle résiste.",
      "Cette énergie internationale donne à SSUNS son caractère distinctif. Les comités sont de véritables simulations mondiales. Des amitiés se créent au-delà des frontières, les blocs se redessinent à l'heure du lunch, et les idées sont mises à l'épreuve par des personnes qui ne pensent pas comme vous.",
      "On repart plus affûté, plus confiant et plus conscient du monde dans lequel on s'apprête à entrer.",
    ],
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
