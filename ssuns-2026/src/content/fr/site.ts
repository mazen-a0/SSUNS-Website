import {
  footerContent as enFooterContent,
  navItems as enNavItems,
  siteMeta as enSiteMeta,
  uiText as enUiText,
} from "@/content/en/site";

export const siteMeta = {
  ...enSiteMeta,
  description:
    "Symposium des Nations Unies des écoles secondaires 2026. Diplomatie étudiante, dialogue mondial et leadership collaboratif.",
  locale: "fr-CA",
};

export const navItems = [
  { ...enNavItems[0], label: "À propos" },
  { ...enNavItems[1], label: "Conférence" },
  { ...enNavItems[2], label: "Comités" },
  { ...enNavItems[3], label: "Inscription" },
  { ...enNavItems[4], label: "Ressources" },
  { ...enNavItems[5], label: "Contact" },
];

export const uiText = {
  ...enUiText,
  openMenu: "Ouvrir la navigation",
  closeMenu: "Fermer la navigation",
  homeAria: "Accueil SSUNS",
  openCommandPalette: "Ouvrir la recherche",
  searchLabel: "Recherche",
  commandPlaceholder: "Rechercher les pages, comités et ressources de SSUNS...",
  commandEmpty: "Aucun résultat trouvé.",
  commandHint: "Utilisez les flèches pour naviguer, Entrée pour ouvrir et Échap pour fermer.",
  commandTitle: "Recherche",
  closePalette: "Fermer la recherche",
  commandGroupNavigation: "Navigation",
  commandGroupContent: "Contenu",
  languageSwitchLabel: "Langue",
};

export const footerContent = {
  ...enFooterContent,
  motto: "La diplomatie étudiante, mise en scène avec rigueur.",
  sections: [
    {
      ...enFooterContent.sections[0],
      title: "Conférence",
      items: [
        { ...enFooterContent.sections[0].items[0], label: "Lieu" },
        { ...enFooterContent.sections[0].items[1], label: "Comités" },
        { ...enFooterContent.sections[0].items[2], label: "Horaire" },
      ],
    },
    {
      ...enFooterContent.sections[1],
      title: "Préparation",
      items: [
        { ...enFooterContent.sections[1].items[0], label: "Comment s'inscrire" },
        { ...enFooterContent.sections[1].items[1], label: "Guide" },
        { ...enFooterContent.sections[1].items[2], label: "Politiques" },
      ],
    },
  ],
  contactTitle: "Bureau de l'organisation",
  closing:
    "SSUNS 2026 demeure en prévisualisation jusqu'au lancement. Le site ssuns.org reste sur Squarespace jusqu'au basculement DNS.",
};
