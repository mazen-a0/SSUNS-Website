import { aboutContent as en, type SecretariatMember } from "@/content/en/about";

const secretariatBioByName: Record<string, string> = {
  "Marcus Kelly":
    "Rencontrez Marcus, notre Secretaire general pour SSUNS 2026. Il est etudiant de quatrieme annee en gestion internationale avec une mineure en science politique. Marcus connait SSUNS sous plusieurs angles, ayant deja travaille au sein des comites, dans les evenements et aux cotes de nombreuses equipes etudiantes a McGill. En dehors de SSUNS, vous le trouverez souvent en train de courir, de faire du velo ou de chercher un endroit tranquille pour lire. Il est egalement implique dans le journalisme et la vie etudiante sur le campus. Marcus est enthousiaste a l'idee de mener une conference ambitieuse, accueillante et fondee sur le respect. Son conseil aux delegues est simple : la vraie competition repose sur l'equite, la progression et le respect des autres.",
  "Costas Oreopoulos":
    "Rencontrez notre Charge d'Affaires, Costas Oreopoulos (il/lui). Costas est etudiant de deuxieme annee en science politique avec une mineure en developpement international. Originaire de Toronto, son histoire avec SSUNS a commence au secondaire en tant que delegue, avant de le ramener a la conference comme coordonnateur du Centre de ressources des delegues pour SSUNS 2025. Il revient maintenant pour SSUNS 2026 afin d'accompagner les ecoles dans l'inscription et la preparation de la conference. En dehors du travail, Costas aime tout ce qui touche a l'automobile, alors n'hesitez pas a venir lui parler de Formule 1. Son conseil aux delegues est de faire confiance a leur creativite, car c'est souvent leur meilleur atout en comite.",
  "Mazen Asali":
    "Rencontrez notre Directeur general, Mazen Asali (il/lui). Originaire d'Amman, en Jordanie, Mazen est en quatrieme annee a l'Universite McGill, ou il etudie l'informatique et la biologie avec une mineure en entrepreneuriat. Son parcours en MUN a commence au secondaire, ou il a ete a la fois delegue et organisateur, avant de s'impliquer a SSUNS au Centre de ressources des delegues puis dans les operations de la conference. En dehors de ses etudes, Mazen est tres implique dans la vie etudiante a McGill et apprend actuellement le francais. Lorsqu'il ne travaille pas, il aime lire, nager, jouer a des jeux video et ecouter de la musique. Son conseil aux delegues : n'ayez pas peur de sortir de votre zone de confort.",
  "Andrew Tobin":
    "Voici Andrew Tobin (il), notre Secretaire general adjoint aux finances pour SSUNS 2026. Andrew est etudiant de quatrieme annee a l'Universite McGill, inscrit au programme specialise en science politique avec une mineure en histoire. Il s'est d'abord implique dans l'organisation d'evenements etudiants avant de rejoindre l'equipe de SSUNS lors de la saison 2025. Il est actuellement en echange a Lund, en Suede, pour le debut de l'annee 2026, et se rejouit de revenir a Montreal pour sa derniere annee. Andrew est un grand amateur de hockey et s'est egalement implique dans l'Association des etudiants en science politique. Son conseil aux delegues : posez vos questions tot et rencontrez autant de personnes que possible, car tout le monde apprend ensemble.",
  "Hortense Bonnet":
    "Rencontrez Hortense (elle), notre charmante Secretaire generale adjointe a l'administration, la tete pensante derriere notre magnifique merch, les roses et le site web. Elle est actuellement en troisieme annee a l'Universite McGill, ou elle etudie en economie avec non pas une, mais deux mineures en developpement international et en gestion. C'est sa deuxieme annee dans ce role a SSUNS. L'an dernier, vous avez peut-etre eu l'occasion de la voir en tant que coordonnatrice des inscriptions. Mais comment s'est-elle retrouvee dans le monde (legerement chaotique) du MUN ? Ses amis l'ont convaincue que SSUNS etait la meilleure facon de trouver une communaute accueillante a McGill, et au fil du temps, son interet pour la diplomatie a rapidement grandi. Hortense ne se considere pas comme une « MUN kid », mais plutot comme une « OG UN kid » ! Lorsqu'elle n'est pas occupee a donner un coup de main, vous la trouverez probablement en train de savourer un tiramisu ou un fondant baulois. Son restaurant prefere ? Elle reste tres fidele a ses racines francaises : L'Entrecote, ou elle commande toujours son steak saignant voir meme bleu. Son conseil ? « Connectez-vous avec tout le monde. Essayez de nouvelles choses. Experimentez de nouvelles techniques de debat ! De maniere generale… sortez de votre zone de confort… et bien sur, achetez du merch ! »",
  "Julien Fournier":
    "Rencontrez Julien (il), notre formidable chef des ressources humaines. Originaire de Montreal, au Quebec, il est en deuxieme annee a l'Universite McGill, ou il etudie en developpement international et en economie. Il en sera a sa quatrieme participation a SSUNS, ayant deja pris part a la conference en tant que delegue et coordonnateur du Centre de ressources des delegues (DRC) lors des editions precedentes. Son parcours en MUN a commence au cegep, ou il etait responsable des relations publiques, du marketing et des communications pour la conference de son etablissement destinee aux eleves du secondaire, ainsi que pour l'equipe de delegation collegiale. Julien continue de participer activement au circuit avec l'equipe de delegation de McGill et, bien qu'il soit profondement engage dans le Model UN, il pratique egalement le debat parlementaire depuis pres de sept ans ! En dehors du milieu academique, il est barista « professionnel », un lecteur passionne et un grand amateur d'architecture. N'hesitez pas a lui demander son avis sur le design du Centre Sheraton, il en est un grand fan. Julien est aussi un apprenant de langues assidu, avec une impressionnante serie de plus de 1 200 jours sur Duolingo. Son conseil aux delegues : debatez de bonne foi ; reflechissez avant de parler et ayez confiance dans l'ethique de vos arguments, c'est ce qui fait une bonne diplomatie !",
  "Léandre Noël":
    "Rencontrez Leandre (il), notre formidable chef des operations a SSUNS, autrement dit, le coeur du week-end de la conference ! Leandre est responsable de la coordination et de l'organisation de chaque aspect de la conference a l'hotel, de la salle ou vous debatez jusqu'a la chaise sur laquelle vous etes assis. Leandre est en cinquieme annee a l'Universite McGill, ou il poursuit un programme conjoint specialise en science politique et en environnement. Il a commence son parcours a SSUNS en 2023 en tant que vice-president d'un des JCC. Lors de SSUNS 2025, il a occupe le poste de coordinateur des operations, ou il a perfectionne ses competences en organisation. Lorsqu'il n'est pas en train d'orchestrer le deroulement de la conference, Leandre joue au basketball intramural… dans la derniere division, tout en bas du classement. Pour lui, l'essentiel est de s'amuser et de continuer a s'ameliorer, une philosophie qui reflete aussi son conseil aux delegues pour SSUNS 2026. Comme il le dit : « Ne laissez pas les autres definir ce qu'est une conference reussie pour vous. Allez-y une etape a la fois et rendez-vous fiers ! »",
  "Kiara Gilroy":
    "Rencontrez Kiara (elle), notre directrice des evenements. Originaire de Tahiti, en Polynesie francaise, elle poursuit actuellement un baccalaureat en science politique a l'Universite McGill. Ce sera sa deuxieme participation a SSUNS apres avoir servi comme coordonnatrice des evenements lors de la derniere edition de la conference. En dehors de SSUNS, Kiara est egalement une athlet e de haut niveau qui compete pour son equipe universitaire et pour son equipe nationale. Son conseil aux delegues : soyez bienveillants, pensez de maniere creative et n'hesitez pas a demander de l'aide. Et surtout, ne manquez pas le gala des delegues.",
  "Tracy Jiang":
    "Rencontrez Tracy Jiang (elle), notre fantastique cheffe des relations publiques pour SSUNS 2026 ! Originaire de Montreal, Tracy est une etudiante de quatrieme annee (U4) poursuivant un baccalaureat en science politique avec une mineure en etudes du developpement international. Elle a decouvert le Model UN a travers SSUNS, ou elle a d'abord participe en tant que deleguee avant de devenir coordonnatrice du design et de l'image de marque en 2025. Elle est egalement membre active de l'equipe de delegation Model UN de McGill, avec laquelle elle a participe a de nombreuses conferences universitaires. Au-dela de sa presence inspirante, Tracy est une grande voyageuse. Elle revient tout juste d'un echange a Hong Kong, ou elle a enrichi son parcours academique. En dehors des etudes et de ses engagements parascolaires, elle est passionnee de photographie, d'echecs et de musique. Elle est l'une des plus grandes admiratrices de l'auteur-compositeur-interprete Malcolm Todd et peut ecouter de la musique pendant des heures sans s'arreter. Son conseil aux delegues de SSUNS 2026 : il est tout a fait normal d'etre nerveux, mais ne laissez pas cela vous empecher de prendre la parole et d'echanger avec les autres delegues.",
  "Paul Malpartida Durroux":
    "Rencontrez Paul, l'un des membres de notre Secretariat a SSUNS 2026. Originaire de Panama City, Paul est en quatrieme et derniere annee a l'Universite McGill, ou il poursuit un programme conjoint specialise en science politique et en etudes russes. Il a decouvert le Model UN apres son arrivee a McGill et s'est rapidement implique a la fois dans la delegation et dans l'organisation de conferences etudiantes. En dehors du MUN, vous pouvez le trouver plonge dans la litterature russe, suivant de pres la geopolitique mondiale ou jouant au dodgeball intramural. Il est aussi un membre actif de la communaute mcgilloise a travers la SLASA. Son conseil aux delegues : les personnes que vous rencontrez comptent autant que les lecons que vous apprenez en comite.",
  "Hannah Regular":
    "Rencontrez Hannah (elle), notre directrice adjointe des relations publiques pour la gestion de l'image de marque. Originaire de Moncton, au Nouveau-Brunswick, Hannah entame sa quatrieme annee a l'Universite McGill, ou elle etudie en linguistique et en allemand. Elle joue un role creatif central dans l'identite visuelle de la conference et dans les souvenirs que les delegues garderont du week-end. Lorsqu'elle n'est pas derriere la camera, vous pouvez la trouver en train de jouer de la guitare ou du piano. Son conseil aux delegues : quatre jours passent plus vite qu'on ne le croit, alors profitez de chaque instant.",
  "Valeria Fonseca Ortega":
    "Voici Valeria (elle), notre incroyable Secretaire generale adjointe aux comites, de retour pour une deuxieme annee ! Elle est actuellement en quatrieme annee, ou elle poursuit un programme conjoint specialise en economie et en etudes du developpement international, avec une mineure en geographie urbaine. Maintenant a sa troisieme annee a SSUNS, elle a d'abord rejoint l'equipe en tant que vice-presidente du comite FEALAC avant d'integrer le Secretariat. Avant l'universite, Valeria etait tres impliquee en art oratoire et a ete selectionnee pour representer le Mexique au concours international de prise de parole en public (IPSC) organise par l'English-Speaking Union en 2023, ou elle a obtenu la troisieme place mondiale. A McGill, elle a egalement fait partie de l'equipe de delegation, poursuivant ainsi sa passion pour le Model UN et le dialogue international. Actuellement en echange a Paris, elle aime trouver un bon St-Germain Spritz, gouter a la soupe a l'oignon et affirme que les quesadillas sont le repas parfait a toute heure, surtout a 3 h du matin ! Valeria parle « deux langues et demie » (le francais etant la demie !), alors n'hesitez pas a pratiquer votre francais avec elle pendant la conference. Son conseil aux delegues : voyez le MUN comme une « socialisation surboostee ». Lancez-vous et faites de nouvelles rencontres !",
  "Emma Ristic":
    "Voici notre Secretaire generale adjointe aux Assemblees generales et a l'ECOSOC, Emma Ristic (elle). Emma est etudiante de troisieme annee en science politique et a commence son parcours en Model UN a l'universite. Depuis un an et demi, elle participe activement au circuit universitaire avec l'equipe de delegation de McGill et continue d'approfondir son experience academique et organisationnelle. Cette annee, elle s'appuie sur son travail anterieur a SSUNS pour contribuer au ton et a la rigueur de nos plus grandes salles de debat. En dehors des etudes, Emma adore assister a des concerts au parc Jean-Drapeau et faire du hot yoga. Son conseil aux delegues : ayez confiance en votre propre style d'intervention, car votre touche personnelle compte plus qu'une formule toute faite.",
  "Eitan Pessin":
    "Voici notre passionne Secretaire general adjoint aux agences specialisees (ou « Dep Spec » pour faire court), Eitan Pessin (il). Eitan est etudiant de deuxieme annee en histoire et en philosophie. Vous pouvez donc etre certains que ses comites sont concus avec beaucoup de rigueur et d'enthousiasme ! Des son premier semestre a McGill, Eitan s'est vu refuser une place dans l'equipe d'ultimate frisbee et a donc cherche une activite parascolaire dans laquelle s'impliquer. C'est ainsi qu'il a decouvert l'IRSAM et rejoint l'equipe de delegation de McGill, participant au circuit universitaire et a plusieurs conferences. Apres avoir ete vice-president de comite a SSUNS 2025, Eitan a su qu'il voulait s'impliquer davantage dans l'organisation de la conference. En dehors de l'IRSAM, Eitan aime lire, et meme s'il n'a aujourd'hui principalement le temps que pour ses lectures academiques, il est actuellement en train de lire On Photography. Son conseil aux delegues : n'ayez jamais peur de poser des questions.",
  "Will Greer":
    "Rencontrez Will (il), notre remarquable Secretaire general adjoint delegue aux crises. Originaire de Point Edward, en Ontario, Will est etudiant de deuxieme annee a l'Universite McGill, ou il poursuit une double majeure en science politique et en histoire. SSUNS 2026 marquera sa quatrieme participation a la conference : il y a participe a deux reprises au secondaire, ou il a notamment preside a la Cour internationale de Justice (CIJ), puis a ete membre du personnel de comite l'an dernier avant de devenir aujourd'hui notre Dep Crisis. Pendant son temps libre, Will est lanceur pour l'equipe de baseball des Redbirds de McGill, un grand amateur de sport et un passionne de politique mondiale. Et si jamais vous rencontrez un probleme pendant le week-end, rappelez-vous : « quand il y a un Will, il y a un moyen ». Son conseil aux delegues : soyez authentiques et constants, c'est un marathon, pas un sprint.",
};

const secretariatMembers: SecretariatMember[] = en.secretariatMembers.map((member) => ({
  ...member,
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
