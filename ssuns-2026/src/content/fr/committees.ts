import { committees as enCommittees, committeesPageContent as en } from "@/content/en/committees";

export const committeesPageContent = {
  ...en,
  title: "Comités",
  intro:
    "Comprend des assemblées générales (AG), des conseils économiques et sociaux (ECOSOC), des agences spécialisées (SPEC) et des comités de crise.",
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
    specialized: "Agences spécialisées",
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

const committeeTranslationsBySlug: Record<string, { blurb: string; overview: string; topic: string }> = {
  "who-2026": {
    blurb: "Renforcer le soutien aux travailleurs de la santé dans les marchés émergents.",
    topic: "Renforcer le soutien aux travailleurs de la santé dans les marchés émergents",
    overview:
      "En première ligne face aux enjeux de santé publique, aux pandémies et aux crises humanitaires, les travailleurs de la santé constituent l’un des piliers essentiels du bien-être collectif. Pourtant, les conditions particulières dans lesquelles ils exercent augmentent considérablement leur vulnérabilité à l’épuisement professionnel, à l’insécurité et au manque de soutien structurel. Ce comité de l’Organisation mondiale de la santé examinera comment les États et les institutions internationales peuvent mieux soutenir, former et protéger les professionnels de la santé dans les marchés émergents. Les délégués seront appelés à élaborer des solutions réalistes afin d’améliorer les conditions de travail, la résilience des systèmes de santé et la stabilité sociale à long terme dans les régions les plus touchées.",
  },
  "ccpcj-2026": {
    blurb: "Lutter contre la criminalité environnementale à l’échelle mondiale.",
    topic: "Lutter contre la criminalité environnementale à l’échelle mondiale",
    overview:
      "La criminalité environnementale constitue depuis longtemps l’une des formes les plus lucratives de criminalité organisée transnationale, menaçant les écosystèmes, sapant la gouvernance et mettant en danger les communautés les plus vulnérables. Elle prend de nombreuses formes, allant de l’exploitation forestière illégale au trafic d’espèces sauvages, en passant par l’extraction minière illicite et l’élimination toxique de déchets. Dans ce comité de la Commission pour la prévention du crime et la justice pénale, les délégués étudieront comment renforcer la coopération internationale, les mécanismes de surveillance et les cadres juridiques afin de mieux prévenir, poursuivre et décourager ces crimes. Le défi sera d’équilibrer application du droit, développement économique et protection de l’environnement.",
  },
  "wto-2026": {
    blurb: "Intégrer l’atténuation des changements climatiques dans la politique commerciale mondiale.",
    topic: "Intégrer l’atténuation des changements climatiques dans la politique commerciale mondiale",
    overview:
      "Alors que les changements climatiques s’accélèrent à un rythme sans précédent, les États subissent une pression croissante pour adapter leurs marchés aux réalités écologiques actuelles. Le commerce international joue un rôle majeur dans le monde contemporain, et son influence sur les émissions, la production et les chaînes d’approvisionnement devient impossible à ignorer. Ce comité de l’Organisation mondiale du commerce se penchera sur la manière dont les cadres commerciaux peuvent mieux intégrer les impératifs climatiques sans compromettre l’équité entre les États. Les délégués devront débattre d’outils comme les ajustements carbone, les incitatifs verts, les normes commerciales et les responsabilités différenciées, tout en tenant compte des tensions entre développement, souveraineté économique et durabilité.",
  },
  "ifad-2026": {
    blurb: "Faire progresser l’innovation agricole durable dans la région Asie-Pacifique.",
    topic: "Faire progresser l’innovation agricole durable dans la région Asie-Pacifique",
    overview:
      "La région Asie-Pacifique fait face à des défis agricoles particuliers en raison de sa forte densité démographique, de sa vulnérabilité aux catastrophes naturelles et de la dégradation des sols. Dans de nombreux pays, l’agriculture demeure un pilier économique et social majeur, mais les pressions environnementales et structurelles menacent sa viabilité à long terme. Dans ce comité du Fonds international de développement agricole, les délégués examineront comment promouvoir des formes d’innovation agricole qui améliorent la sécurité alimentaire, soutiennent les agriculteurs ruraux et réduisent l’empreinte écologique des systèmes de production. L’objectif sera de proposer des politiques concrètes qui tiennent compte à la fois de la durabilité, de l’accessibilité et de la résilience régionale.",
  },
  "fespaco-2026": {
    blurb: "Élargir la portée mondiale du cinéma africain.",
    topic: "Élargir la portée mondiale du cinéma africain",
    overview:
      "Le Festival panafricain du cinéma et de la télévision de Ouagadougou est le plus grand et le plus influent festival consacré au cinéma africain. Tenu tous les deux ans à Ouagadougou, au Burkina Faso, il met en valeur les films du continent et de sa diaspora. Malgré la richesse et la diversité du cinéma africain, des obstacles structurels, comme les réseaux de distribution limités et l’accès inégal aux marchés médiatiques mondiaux, empêchent souvent ces œuvres d’atteindre un public international plus large. Ce comité de FESPACO examinera comment les États africains et les institutions culturelles peuvent collaborer pour accroître la visibilité de ces films tout en préservant l’intégrité des industries locales qui les produisent. Les délégués réfléchiront à des stratégies capables d’assurer une représentation et une accessibilité durables des récits africains sur la scène internationale.",
  },
  "sdg-12-2026": {
    blurb: "S’attaquer à l’extraction environnementale et à l’exploitation du travail dans l’industrie de la fast fashion.",
    topic: "S’attaquer à l’extraction environnementale et à l’exploitation du travail dans l’industrie de la fast fashion",
    overview:
      "Avec plus de 92 millions de tonnes de déchets textiles produits chaque année, la croissance rapide de l’industrie de la fast fashion est devenue un enjeu central du développement mondial. Le Sommet mondial de la mode, tenu chaque année à Copenhague, rassemble des acteurs publics et privés autour des transformations nécessaires du secteur. Dans ce comité, les délégués étudieront la manière dont l’industrie de la mode rapide repose à la fois sur l’extraction environnementale et sur des formes persistantes d’exploitation du travail. Ils devront débattre de chaînes d’approvisionnement, de responsabilité des entreprises, de réglementation, de consommation et de justice globale, afin d’identifier des solutions crédibles face à un modèle économique profondément inégal et écologiquement insoutenable.",
  },
  "unhrc-2026": {
    blurb: "Empêcher la criminalisation des défenseurs autochtones des terres dans les conflits liés à l’extraction des ressources.",
    topic: "Empêcher la criminalisation des défenseurs autochtones des terres dans les conflits liés à l’extraction des ressources",
    overview:
      "Les peuples autochtones sont depuis longtemps confrontés à des projets d’extraction soutenus par les gouvernements, qu’il s’agisse de pipelines, de barrages ou d’autres formes de développement des ressources. De nombreux défenseurs autochtones des terres ont été surveillés, poursuivis ou criminalisés pour avoir résisté à des projets menaçant leurs territoires, leurs moyens de subsistance et leurs systèmes de vie. Dans ce comité du Conseil des droits de l’homme, les délégués examineront comment la communauté internationale peut mieux protéger ces défenseurs tout en répondant aux tensions entre souveraineté étatique, droits collectifs et développement économique. Le débat portera sur les droits autochtones, l’accès à la justice, la responsabilité des entreprises et la prévention de la violence dans les conflits liés à l’extraction.",
  },
  "icao-2026": {
    blurb: "Mobiliser la technologie aéronautique dans les interventions en cas de catastrophe.",
    topic: "Mobiliser la technologie aéronautique dans les interventions en cas de catastrophe",
    overview:
      "À mesure que les catastrophes naturelles deviennent plus fréquentes et plus intenses, les systèmes mondiaux d’intervention d’urgence subissent une pression immense. Parallèlement, l’aviation est devenue un outil essentiel pour acheminer l’aide humanitaire, mener des opérations de recherche et sauvetage et rétablir une certaine stabilité lorsque les infrastructures terrestres sont inutilisables. Ce comité de l’Organisation de l’aviation civile internationale examinera comment la technologie aéronautique peut renforcer les réponses aux catastrophes grâce à une meilleure coordination de l’espace aérien, à la mise en place de corridors aériens d’urgence et à l’utilisation de systèmes aériens sans pilote pour l’évaluation des dommages. Les délégués devront élaborer des résolutions que les autorités internationales pourront adapter afin de coordonner plus efficacement les réponses aériennes et d’atténuer les conséquences sociales, économiques et culturelles pour les populations touchées.",
  },
  "penguins-2026": {
    blurb: "Répondre au changement générationnel dans les habitudes de consommation des médias.",
    topic: "Répondre au changement générationnel dans les habitudes de consommation des médias",
    overview:
      "À une époque où les écrans rivalisent avec les étagères, l’art du récit fait face à un tournant générationnel. Les jeunes lecteurs consomment de plus en plus les histoires par l’intermédiaire des plateformes numériques, des livres audio et de formats courts, tandis que les taux de lecture et les habitudes de littératie déclinent rapidement. Pour le conseil d’administration de Penguin Random House, ce défi doit devenir une occasion à saisir si l’entreprise veut assurer sa survie. Si l’imprimé demeure emblématique, l’avenir exige de l’innovation dans les formats, la distribution et le marketing, ainsi qu’une réponse lucide aux difficultés contemporaines de l’édition. Entre interdictions de livres, fermes à contenu et récits recyclés à l’infini en ligne, l’entreprise devra trouver l’équilibre entre son héritage littéraire et les attentes d’une génération profondément numérique.",
  },
  "nhl-2026": {
    blurb: "Le lock-out de la LNH de 2004-2005.",
    topic: "Le lock-out de la LNH de 2004-2005",
    overview:
      "Sur la glace des plus célèbres arénas d’Amérique du Nord, une guerre froide éclate, non pas de patins et de bâtons, mais de dollars et de contrats. La LNH de 2004-2005 fait face à une interruption sans précédent alors que propriétaires et joueurs s’affrontent sur les salaires, le partage des revenus et l’instauration d’un plafond salarial strict. Les propriétaires soutiennent que la stabilité financière exige des réformes sévères, tandis que les joueurs affirment que des décennies d’efforts et de talent méritent une rémunération équitable. Les spéculations médiatiques explosent, les commanditaires s’inquiètent et les ligues internationales entrevoient des occasions de croissance. Pendant les mois de négociations tendues, les équipes se divisent, les arénas restent silencieux et les partisans se retrouvent devant des patinoires vides. La ligue sortira-t-elle de cette crise avec un nouvel ordre financier viable, ou le sport subira-t-il des dommages durables ?",
  },
  "icj-2026": {
    blurb: "Temple de Préah Vihéar (Cambodge c. Thaïlande).",
    topic: "Temple de Préah Vihéar (Cambodge c. Thaïlande)",
    overview:
      "À La Haye, l’histoire et le droit se heurtent autour d’un temple pluriséculaire perché dans les montagnes du Dangrek. Le Cambodge et la Thaïlande comparaissent devant la Cour internationale de Justice dans un différend portant sur la souveraineté du temple de Préah Vihéar, ancien sanctuaire khmer devenu un point de tension entre nationalisme, diplomatie et droit international. Cartes coloniales, frontières contestées et décennies de tensions politiques seront soumises à l’examen judiciaire alors que la Cour évaluera le statut juridique du territoire et l’autorité des décisions passées. Mais l’affaire dépasse largement les murs du temple : elle soulève des questions de souveraineté territoriale, de portée de l’arbitrage international et d’héritage des frontières tracées dans un autre âge. La Cour établira-t-elle un précédent décisif ou les échos de l’histoire continueront-ils de défier le droit ?",
  },
  "praguematic-2026": {
    blurb: "Construire l’identité slave.",
    topic: "Construire l’identité slave",
    overview:
      "Au cœur de l’Europe, l’air est chargé de révolution. Nous sommes en 1848, et les rues de Prague vibrent d’une énergie nouvelle. Des délégués venus de l’ensemble des terres slaves, Tchèques, Polonais, Slovaques et Slaves du Sud, se réunissent à l’occasion du premier Congrès panslave afin de coopérer et de développer une vision commune de l’avenir des peuples slaves. Ils débattront des droits linguistiques, de l’autonomie nationale, de l’empire et des promesses de la démocratie, tandis que des soulèvements secouent l’Europe centrale. L’atmosphère est traversée à la fois par l’espoir et la tension : des peuples longtemps contenus par des structures impériales peuvent-ils trouver une cause commune ? Les conservateurs appellent à la prudence, tandis que les mouvements libéraux et radicaux réclament le changement. Les décisions du Congrès façonneront-elles les mouvements nationalistes de l’Europe centrale et orientale, ou seront-elles diluées dans la répression et le compromis ?",
  },
  "mof-2026": {
    blurb: "Les grèves ouvrières de 2009 en Guadeloupe et en Martinique.",
    topic: "Les grèves ouvrières de 2009 en Guadeloupe et en Martinique",
    overview:
      "Dans les Caraïbes, des îles à la culture vibrante s’embrasent sous l’effet du mécontentement social. En 2009, la Guadeloupe et la Martinique connaissent des grèves ouvrières qui ébranlent leurs économies et leurs sociétés. Les travailleurs, indignés par le coût de la vie, la stagnation des salaires et les inégalités enracinées, paralysent ports, usines et rues, transformant la contestation en affirmation d’identité locale. Rythmes de carnaval, chants populaires et slogans créoles accompagnent les mobilisations, mêlant fierté culturelle et revendications politiques. Les grèves résultent de tensions de longue date entre les îles et la France métropolitaine, sur fond de dissonance culturelle et d’héritage colonial. À mesure que les jours passent, la situation se détériore : pénuries alimentaires, tourisme perturbé et négociations à haut risque menacent des économies déjà fragiles. Les îles obtiendront-elles de vraies réformes, ou les fractures entre État et citoyens s’approfondiront-elles ?",
  },
  "dam-right-2026": {
    blurb: "Le projet hydroélectrique de la Baie-James.",
    topic: "Le projet hydroélectrique de la Baie-James",
    overview:
      "Au début des années 1970, les rivières du nord du Québec deviennent le centre de l’un des plus ambitieux projets hydroélectriques au monde : le projet de la Baie-James. D’immenses barrages promettent de produire d’énormes quantités d’électricité et de transformer le Québec en puissance énergétique. Pourtant, le projet avance sans consultation véritable des peuples autochtones dont les terres doivent être inondées. Pour les communautés cries et inuit, ce développement menace les territoires de chasse, les routes migratoires et les écosystèmes fragiles du Nord. En réponse, des dirigeants autochtones s’organisent politiquement et juridiquement, notamment au sein du Grand Conseil des Cris et de la Northern Quebec Inuit Association. Dans ce comité, les délégués représentent des responsables cris et inuit réunis afin de coordonner une réponse à l’expansion rapide du projet. Faut-il tenter d’arrêter les travaux, négocier des protections concrètes ou adopter de nouvelles stratégies pour défendre les terres, les cultures et les droits autochtones ?",
  },
  "tyre-siege-2026": {
    blurb: "Le siège de Tyr.",
    topic: "Le siège de Tyr",
    overview:
      "Sur les rivages rocailleux de la Méditerranée orientale, une petite forteresse insulaire ose défier le plus grand conquérant de son époque. La ville de Tyr, avec ses hautes murailles, sa puissante flotte et ses riches marchands, est l’une des places fortes les plus redoutables de la région, mais elle se trouve directement sur la route d’Alexandre le Grand et de sa campagne contre le royaume achéménide. Après le refus des Tyriens de laisser Alexandre offrir un sacrifice dans l’un de leurs temples, un siège sans précédent se met en place. Sans flotte assez puissante pour affronter Tyr en mer, Alexandre et son armée devront vaincre ses défenses par la créativité et l’ingéniosité avant que le temps, les ressources et le moral ne s’épuisent. Dans cette lutte de débrouillardise, d’endurance et d’ambition, le destin d’une ville et la légende d’un conquérant sont en jeu.",
  },
  "ad-hoc-2026": {
    blurb: "Sujet révélé lors de l’enregistrement à la conférence.",
    topic: "Sujet révélé pendant la conférence",
    overview:
      "L’agence spécialisée Ad Hoc de SSUNS est volontairement tenue secrète jusqu’au début de la conférence. Les délégués doivent s’attendre à un briefing surprise, à une salle qui récompense des habitudes de recherche adaptables et à une expérience de comité exigeant de réfléchir rapidement une fois le mandat complet dévoilé.",
  },
  "chess-2026": {
    blurb: "Empire russe c. Empire britannique.",
    topic: "Empire russe c. Empire britannique",
    overview:
      "Tout au long du XIXe siècle, l’Asie centrale devient le théâtre d’une guerre silencieuse, une guerre froide fondée sur la rivalité géopolitique et la domination régionale. À travers montagnes et déserts, les empires russe et britannique jouent une partie d’échecs discrète mais décisive. Tandis que la Russie poursuit son hégémonie par la conquête de khanats d’Asie centrale, la Grande-Bretagne craint pour son joyau colonial, l’Inde. Comme les deux empires redoutent une guerre ouverte, les délégués incarneront ici les appareils de renseignement des deux puissances, en mettant l’accent sur l’espionnage, la cartographie et la diplomatie afin d’atteindre leurs objectifs impériaux. L’un des empires parviendra-t-il à mater l’autre dans l’ombre, ou cette guerre feutrée débouchera-t-elle sur un conflit direct que ni l’un ni l’autre ne peut contrôler ?",
  },
  "festival-rivalry-2026": {
    blurb: "Osheaga c. Lollapalooza.",
    topic: "Osheaga c. Lollapalooza",
    overview:
      "À l’été 2027, deux géants des festivals musicaux sont sur le point d’entrer en collision. Osheaga et Lollapalooza doivent tous deux se dérouler du 1er au 3 août 2027, à seulement quelques kilomètres l’un de l’autre, se disputant les mêmes artistes, le même public et les mêmes manchettes. Avec des programmations qui se chevauchent et des horaires concurrents, la course est lancée pour savoir quel festival attirera les plus grandes foules et dominera l’été musical. D’un côté, Osheaga s’est imposé comme une institution estivale montréalaise ; de l’autre, Lollapalooza bénéficie du prestige d’une marque internationale. Dans ce comité de crise conjointe, les délégués incarneront les équipes de direction des deux festivals et devront rivaliser pour obtenir les artistes, séduire les foules et imposer leur événement comme référence incontestée.",
  },
  "versace-2026": {
    blurb: "Conseil d’administration.",
    topic: "La chute de la maison Versace, 1997",
    overview:
      "Le 15 juillet 1997, l’annonce de l’assassinat de Gianni Versace se répand dans les journaux et sur les écrans du monde entier. Fondateur et force créative derrière Versace, l’une des plus grandes maisons de luxe italiennes, il a été brutalement tué devant son domicile à Miami. Pendant des décennies, la maison Versace a tenu grâce à la vision, à la créativité et au leadership de Gianni. Désormais, l’entreprise fait face à son moment le plus instable. Sa sœur, Donatella Versace, est pressentie pour prendre la relève, mais nul ne sait si la maison peut survivre sans son fondateur. En tant que membres du conseil d’administration, les délégués devront stabiliser l’entreprise, affronter une couverture médiatique mondiale intense, préserver l’identité iconique de la marque et décider de sa direction future, alors que toute l’industrie de la mode observe attentivement.",
  },
  "newsboys-2026": {
    blurb: "La grève des vendeurs de journaux de 1899.",
    topic: "La grève des vendeurs de journaux de 1899",
    overview:
      "En 1899, le journal du matin est le battement de cœur de chaque grande ville américaine, jusqu’au moment où il cesse soudainement d’arriver. Et si le maillon le plus vital de la chaîne de distribution refusait simplement de travailler ? Au début du mois d’août 1899, les newsboys, ces enfants qui vendaient les journaux dans les rues, se mettent en grève pour exiger un traitement plus juste de la part des puissantes compagnies de presse qui profitent de leur travail. Armés de courage, de débrouillardise et d’intelligence de rue, ces jeunes travailleurs défient des géants économiques et montrent que même les plus petites voix peuvent avoir un impact immense. Dans ce comité, les délégués débattront des droits de ces enfants, négocieront avec les propriétaires de journaux et exploreront des stratégies pour donner à ces jeunes travailleurs reconnaissance et levier politique.",
  },
  "unsc-2026": {
    blurb: "La guerre des Malouines (1982).",
    topic: "La guerre des Malouines (1982)",
    overview:
      "Le 2 avril 1982, les forces armées argentines envahissent et occupent les îles Falkland, territoire britannique situé à environ 300 milles au large de la côte sud-est de l’Amérique du Sud. L’Argentine soutient qu’elle a hérité de ces îles, connues sous le nom d’Islas Malvinas, de l’Espagne au moment de son indépendance. Les Britanniques, eux, affirment administrer paisiblement l’archipel depuis 1833 et invoquent en outre le droit des habitants à l’autodétermination. Tandis que des navires britanniques prennent la mer, le monde observe une diplomatie qui tente de rattraper le conflit armé. Le Conseil de sécurité doit gérer la tension entre les deux États afin d’empêcher une escalade et de résoudre la crise. Réussira-t-il à préserver la paix à temps, ou cette guerre deviendra-t-elle le symbole d’un ordre géopolitique brisé et profondément divisé ?",
  },
  "khanflict-2026": {
    blurb: "L’effondrement de la Pax Mongolica et la lutte pour contrôler le commerce eurasiatique.",
    topic: "L’effondrement de la Pax Mongolica et la lutte pour contrôler le commerce eurasiatique",
    overview:
      "Pendant la majeure partie du XIIIe siècle, l’empire fondé par Gengis Khan contrôle une grande partie de l’Eurasie, période souvent qualifiée de Pax Mongolica. Les routes commerciales prospèrent, permettant aux marchands de voyager relativement en sécurité de la Chine à la Méditerranée. Les taxes sont souvent harmonisées et les échanges culturels s’intensifient. Mais à la fin du XIIIe siècle, l’empire commence à se fragmenter en États rivaux. La stabilité s’effrite tandis que plusieurs khans se disputent la légitimité. La question devient alors la suivante : lequel des grands États successeurs dominera l’avenir de l’Eurasie ? Dans ce comité, les délégués incarneront des dirigeants, des marchands et des courtiers de pouvoir à travers le continent, tous engagés dans une compétition pour rétablir l’ordre et reprendre le contrôle des routes de la soie.",
  },
  "pour-decisions-2026": {
    blurb: "La guerre de succession de Bourgogne, 1477.",
    topic: "La guerre de succession de Bourgogne, 1477",
    overview:
      "La bataille de Nancy marque une fin décisive dans l’histoire de l’Europe : la défaite et la mort de Charles le Téméraire, duc de Bourgogne. Après sa disparition, un vide de pouvoir s’ouvre au sein du puissant État bourguignon, dépourvu d’héritier masculin. Alors que sa fille Marie devient seule héritière, les Habsbourg, la France et d’autres puissances étrangères entrevoient une occasion de s’emparer des terres bourguignonnes. Dans ce comité, les délégués incarneront nobles, royaux et envoyés étrangers chargés de préserver l’État bourguignon. La Bourgogne pourra-t-elle survivre comme puissance indépendante, ou tombera-t-elle sous les ambitions expansionnistes des monarchies européennes ?",
  },
  "ad-hoc-sg-2026": {
    blurb: "Sujet révélé pendant l’ouverture de la conférence.",
    topic: "Sujet révélé pendant la conférence",
    overview:
      "Le comité Ad Hoc du Secrétaire général demeure confidentiel jusqu’à l’arrivée des délégués sur place. Cette salle est pensée pour les participants qui aiment l’incertitude, l’adaptation rapide et le rythme soutenu d’un scénario de crise une fois la situation officiellement dévoilée.",
  },
};

export const committees = enCommittees.map((committee) => {
  const translation = committeeTranslationsBySlug[committee.slug];

  return {
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
          : committee.theme === "Specialized Agencies" || committee.theme === "Specialized Committees"
            ? "Agences spécialisées"
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
    blurb: translation?.blurb ?? committee.blurb,
    overview: translation?.overview ?? committee.overview,
    topic: translation?.topic ?? committee.topic,
  };
});
