import { sponsorContent as en } from "@/content/en/sponsor";

export const sponsorContent = {
  ...en,
  title: "Commandites",
  intro:
    "Soutenez une conférence étudiante phare qui réunit plus de 1 300 délégués à Montréal pour quatre jours de débat, de prise de parole en public et de leadership jeunesse.",
  reasons: [
    {
      ...en.reasons[0],
      title: "Pourquoi commanditer SSUNS",
      body:
        "SSUNS met les commanditaires en relation avec un vaste réseau de leaders étudiants, de familles, d'éducateurs et d'anciens qui valorisent le débat, la diplomatie et la prise de parole en public.",
    },
    {
      ...en.reasons[1],
      title: "Aperçu de la conférence",
      body:
        "La conférence accueille des délégations du Canada et d'ailleurs au centre-ville de Montréal pour des comités, des cérémonies et une programmation éducative.",
    },
    {
      ...en.reasons[2],
      title: "Occasions de visibilité",
      body:
        "Les commandites peuvent soutenir l'accessibilité, le matériel des délégués, la programmation principale, l'accueil et les opérations visibles de la conférence.",
    },
  ],
  stats: [
    { ...en.stats[0], label: "Délégués" },
    { ...en.stats[1], label: "Personnel McGill" },
    { ...en.stats[2], label: "Dates", value: "12–15 novembre 2026" },
    { ...en.stats[3], label: "Lieu" },
    { ...en.stats[4], label: "Public", value: "Élèves, conseillers, familles" },
  ],
  supportersTitle: "Partenaires",
  supportersNote:
    "SSUNS collabore avec des organisations qui valorisent le leadership jeunesse, la prise de parole en public et l'accès à une expérience de conférence de grande qualité.",
  sponsorsTitle: "Nos commanditaires",
  sponsorsHeading: "Merci aux partenaires qui rendent SSUNS possible.",
  sponsorsIntro:
    "Nous remercions tous nos commanditaires de rendre cette conférence possible. Leur soutien aide SSUNS à accueillir les délégués, les conseillers pédagogiques et le personnel dans une fin de semaine de conférence soignée et accessible.",
  sponsorVisitLabel: "Visiter le site du commanditaire",
  sponsors: en.sponsors.map((sponsor) => ({
    ...sponsor,
    description:
      sponsor.name === "GS-JJ"
        ? "GS-JJ soutient SSUNS 2026 au sein de la communauté de commanditaires qui contribuent à rendre la conférence possible."
        : sponsor.description,
  })),
  ui: {
    becomeSponsor: "Devenir partenaire de SSUNS",
    platinum: "Commanditaire platine",
    bronze: "Commanditaires bronze",
    discountSuffix: " % de rabais",
    codeLabel: "Avec le code",
    copyCode: "Copier le code",
    copied: "Copié",
    copyFailed: "Veuillez sélectionner et copier le code ci-dessus.",
    partnerHeading: "Devenir partenaire de SSUNS",
    packageHeading: "Dossier de commandite",
    tiersHeading: "Niveaux de commandite",
    tiersIntro: "Choisissez le niveau de visibilité qui convient à votre organisation.",
    visibilityHeading: "Occasions de visibilité",
    visibilityIntro: "Les différentes façons de vous faire connaître à SSUNS",
    customHeading: "Commandites personnalisées",
  },
  contactTitle: "Contact commandites",
  packageLabel: "Consultez notre dossier complet de commandite ici",
  packageUnavailableLabel: "Consultez le dossier complet pour connaître les possibilités de commandite, les prix et les détails des partenariats personnalisés.",
  tiers: [
    { ...en.tiers[0], name: "Bronze", summary: "Un premier niveau de partenariat pour soutenir SSUNS et bénéficier d’une présence sur ses principaux supports de visibilité." },
    { ...en.tiers[1], name: "Platine", summary: "Une visibilité accrue pour les partenaires souhaitant être reconnus sur davantage de supports destinés aux délégués et au personnel." },
    { ...en.tiers[2], name: "Saphir", summary: "Un niveau de commandite supérieur pour les organisations souhaitant une présence marquée à la conférence et une reconnaissance élargie." },
    {
      ...en.tiers[3],
      name: "Commanditaire principal",
      summary: "Un partenariat exclusif comprenant tous les avantages du niveau Saphir, ainsi qu’une reconnaissance sur les principales plateformes.",
      benefits: [
        "Présentation comme commanditaire principal officiel de SSUNS 2026 sur les principales plateformes.",
        "Invitation à prononcer une brève allocution à la cérémonie d’ouverture ou de clôture, en accord avec les messages de SSUNS.",
        "Une page complète dans le guide numérique du délégué.",
        "Placement privilégié du logo sur les documents de la conférence.",
        "Une publication dédiée sur les réseaux sociaux.",
        "Une publicité dédiée par courriel.",
      ],
    },
  ],
  visibilityOptions: [
    "Story Instagram",
    "Mention sur le site de SSUNS",
    "Logo dans le guide du délégué",
    "Invitations à la cérémonie d’ouverture",
    "Table à la foire SSUNS",
    "Publication Instagram",
    "Mention dans un courriel collectif",
    "Canal de communication de l’ensemble du personnel SSUNS",
    "Une demi-page dans le guide du délégué",
    "Remerciement à la cérémonie d’ouverture",
    "Dépliants dans les suites du personnel",
    "Logo sur les documents de la conférence",
  ],
  customOptions: [
    { title: "Proposition de commandite", body: "Les organisations peuvent proposer une présence personnalisée à SSUNS. La portée, le prix et la mise en œuvre seront discutés directement avec l’équipe des relations publiques." },
    { title: "Commandite alimentaire", body: "La commandite alimentaire soutient les membres du personnel étudiant de McGill pendant la fin de semaine. Elle est offerte au niveau Platine dans le cadre d’une commandite de l’expérience du personnel." },
    { title: "Possibilités de partenariat conjoint", body: "Les organisations souhaitant rejoindre un public étudiant plus large peuvent discuter des possibilités de partenariat conjoint avec l’équipe des relations publiques de SSUNS." },
  ],
};
