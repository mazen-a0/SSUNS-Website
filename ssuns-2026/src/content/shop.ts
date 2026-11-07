export type ShopLocale = "en" | "fr";
type Localized = Record<ShopLocale, string>;
export type ShopOption = { id: string; label: Localized; values: readonly string[]; labels?: Record<string, Localized> };
export type ShopPhoto = { src: string; alt: Localized; contain?: boolean };
export type ShopProduct = {
  id: string;
  name: Localized;
  description: Localized;
  price: number;
  group: "apparel" | "accessories" | "bundle";
  photos: ShopPhoto[];
  options: ShopOption[];
  includes?: { id: string; quantity: number }[];
};

const words = (en: string, fr: string): Localized => ({ en, fr });
const photo = (file: string, en: string, fr: string, contain = false): ShopPhoto => ({
  src: `/images/merch/${file}.webp`, alt: words(en, fr), contain,
});
const sizes = ["S", "M", "L", "XL"] as const;
const size = { id: "size", label: words("Size", "Taille"), values: sizes };
export const collectionPhoto = photo("collection", "Two models in white SSUNS T-shirts and navy sweatpants", "Deux personnes portant les t-shirts blancs et les pantalons molletonnés bleu marine de SSUNS");
const stickerPhotos = [
  photo("stickers", "Examples of SSUNS stickers on a notebook", "Exemples d’autocollants SSUNS sur un cahier"),
  photo("sticker-globe", "SSUNS globe sticker artwork", "Motif d’autocollant SSUNS avec un globe", true),
  photo("sticker-dove", "SSUNS dove sticker artwork", "Motif d’autocollant SSUNS avec une colombe", true),
  photo("sticker-map", "SSUNS map sticker artwork", "Motif d’autocollant SSUNS avec une carte", true),
];
const designAtPickup = words("Choose your design at pickup, subject to availability. Images show examples.", "Choisissez votre motif au retrait, selon les disponibilités. Les images montrent des exemples.");
const posterPhotos = [
  photo("poster-blue", "Blue SSUNS poster with a Montréal street scene", "Affiche bleue SSUNS représentant une rue montréalaise", true),
  photo("poster-poutine", "Illustrated Montréal poutine poster", "Affiche illustrée d’une poutine montréalaise", true),
];
const postcardPhotos = [
  photo("postcard-bear", "SSUNS teddy bear postcard", "Carte postale SSUNS avec un ourson", true),
  photo("postcard-montreal", "Montréal skyline postcard", "Carte postale avec la silhouette de Montréal", true),
  photo("postcard-cherries", "Illustrated cherry soda postcard", "Carte postale illustrée d’une boisson aux cerises", true),
];
const keychainPhotos = [
  photo("bear-detail", "SSUNS teddy bear and keychain attached to a bag", "Ourson et porte-clés SSUNS accrochés à un sac"),
  photo("keychain", "Blue SSUNS letter keychain", "Porte-clés bleu avec les lettres SSUNS", true),
];

function extra(id: string, en: string, fr: string, price: number, description: Localized, photos: ShopPhoto[] = []): ShopProduct {
  return { id, name: words(en, fr), price, group: "accessories", description, photos, options: [] };
}
function bundle(id: string, en: string, fr: string, price: number, description: Localized, includes: ShopProduct["includes"], photos: ShopPhoto[] = []): ShopProduct {
  return { id, name: words(en, fr), price, group: "bundle", description, includes, photos, options: [] };
}
export const shopProducts: ShopProduct[] = [
  {
    id: "white-tee", name: words("White T-shirt", "T-shirt blanc"), price: 2499, group: "apparel",
    description: words("The 2026 SSUNS tee, with a printed design on the front and back.", "Le t-shirt SSUNS 2026, avec un motif imprimé à l’avant et au dos."),
    photos: [photo("tee-front", "Front of the white SSUNS T-shirt", "Devant du t-shirt blanc SSUNS"), photo("tee-fit", "White T-shirt on a second model", "T-shirt blanc porté par une deuxième personne"), photo("tee-back", "Back print on the white T-shirts", "Motif au dos des t-shirts blancs"), collectionPhoto],
    options: [size],
  },
  {
    id: "navy-hoodie", name: words("Navy hoodie", "Chandail à capuchon bleu marine"), price: 4999, group: "apparel",
    description: words("The SSUNS 2026 hoodie in navy, with artwork on both sides.", "Le chandail à capuchon SSUNS 2026 bleu marine, avec un motif à l’avant et au dos."),
    photos: [photo("hoodie-front", "Front of the navy SSUNS hoodie", "Devant du chandail à capuchon bleu marine SSUNS"), photo("hoodie-back", "Back print on the navy hoodie", "Motif au dos du chandail bleu marine"), photo("hoodie-fit", "Navy hoodie on two models", "Chandail bleu marine porté par deux personnes")],
    options: [size],
  },
  {
    id: "sweatpants", name: words("Navy sweatpants", "Pantalon molletonné bleu marine"), price: 3999, group: "apparel",
    description: words("Navy sweatpants with the SSUNS mark on the leg.", "Pantalon molletonné bleu marine avec l’emblème de SSUNS sur la jambe."),
    photos: [photo("sweatpants-detail", "SSUNS mark on the navy sweatpants", "Emblème de SSUNS sur le pantalon bleu marine"), photo("sweatpants-fit", "Full-length view of the navy sweatpants", "Vue de la coupe du pantalon molletonné bleu marine"), collectionPhoto],
    options: [size],
  },
  {
    id: "water-bottle", name: words("Water bottle", "Bouteille d’eau"), price: 1799, group: "accessories",
    description: words("The SSUNS water bottle, photographed with the 2026 collection.", "La bouteille d’eau SSUNS, photographiée avec la collection 2026."),
    photos: [photo("bottle", "SSUNS water bottle", "Bouteille d’eau SSUNS")], options: [],
  },
  {
    id: "pin", name: words("SSUNS pin", "Épinglette SSUNS"), price: 499, group: "accessories",
    description: words("A pin with the SSUNS emblem.", "Une épinglette à l’effigie de SSUNS."),
    photos: [photo("pin", "Round SSUNS pin against navy fabric", "Épinglette ronde SSUNS sur un tissu bleu marine")], options: [],
  },
  extra("bear", "SSUNS teddy bear", "Ourson SSUNS", 1899, words("A teddy bear in SSUNS navy.", "Un ourson vêtu de bleu marine aux couleurs de SSUNS."), [
    photo("bear", "Teddy bear wearing a navy SSUNS shirt", "Ourson portant un chandail bleu marine SSUNS"), keychainPhotos[0],
  ]),
  extra("keychain", "SSUNS keychain", "Porte-clés SSUNS", 499, words("The blue SSUNS letter keychain.", "Le porte-clés bleu avec les lettres SSUNS."), keychainPhotos),
  extra("small-sticker", "Small sticker", "Petit autocollant", 249, designAtPickup, stickerPhotos),
  extra("large-sticker", "Large sticker", "Grand autocollant", 349, designAtPickup, stickerPhotos),
  extra("cap", "Cap", "Casquette", 1699, words("SSUNS cap.", "Casquette SSUNS.")),
  extra("tote", "Tote bag", "Sac fourre-tout", 699, words("SSUNS tote bag.", "Sac fourre-tout SSUNS.")),
  extra("poster", "Poster", "Affiche", 399, designAtPickup, posterPhotos),
  extra("postcard", "Postcard", "Carte postale", 199, designAtPickup, postcardPhotos),
  extra("bookmark", "Bookmark", "Signet", 115, words("SSUNS bookmark.", "Signet SSUNS.")),
  {
    id: "ssuns-outfit", name: words("SSUNS Outfit", "Tenue SSUNS"), price: 8499, group: "bundle",
    description: words("Pair the navy hoodie with the matching sweatpants. Choose a size for each.", "Agencez le chandail bleu marine au pantalon assorti. Choisissez la taille de chaque vêtement."),
    photos: [photo("sweatpants-fit", "The navy hoodie and sweatpants worn together", "Le chandail et le pantalon bleu marine portés ensemble"), photo("hoodie-front", "Navy hoodie included in the bundle", "Chandail bleu marine compris dans l’ensemble"), photo("sweatpants-detail", "Navy sweatpants included in the bundle", "Pantalon bleu marine compris dans l’ensemble")],
    options: [
      { ...size, id: "hoodie", label: words("Hoodie size", "Taille du chandail") },
      { ...size, id: "sweatpants", label: words("Sweatpants size", "Taille du pantalon") },
    ],
    includes: [{ id: "navy-hoodie", quantity: 1 }, { id: "sweatpants", quantity: 1 }],
  },
  bundle("conference-souvenirs", "Conference Souvenirs", "Souvenirs de la conférence", 799, designAtPickup,
    [{ id: "poster", quantity: 1 }, { id: "keychain", quantity: 1 }], [posterPhotos[0], keychainPhotos[1], posterPhotos[1]]),
  bundle("accessories-bundle", "Accessories Bundle", "Ensemble d’accessoires", 2499, designAtPickup,
    [{ id: "cap", quantity: 1 }, { id: "tote", quantity: 1 }, { id: "large-sticker", quantity: 1 }], stickerPhotos),
  bundle("three-small-stickers", "Sticker Bar: Three small", "Bar à autocollants : trois petits", 649, designAtPickup,
    [{ id: "small-sticker", quantity: 3 }], stickerPhotos),
  bundle("mixed-stickers", "Sticker Bar: Large + two small", "Bar à autocollants : un grand et deux petits", 749, designAtPickup,
    [{ id: "large-sticker", quantity: 1 }, { id: "small-sticker", quantity: 2 }], stickerPhotos),
  bundle("souvenir-pack", "Souvenir Pack", "Ensemble souvenir", 599, designAtPickup,
    [{ id: "poster", quantity: 1 }, { id: "postcard", quantity: 1 }, { id: "bookmark", quantity: 1 }], [posterPhotos[0], ...postcardPhotos]),
  bundle("rose-bundle", "Rose Bundle", "Ensemble de roses", 999, words("Three roses.", "Trois roses."),
    [{ id: "rose", quantity: 3 }]),
  bundle("large-rose-bundle", "Large Rose Bundle", "Grand ensemble de roses", 2999, words("Ten roses.", "Dix roses."),
    [{ id: "rose", quantity: 10 }]),
  bundle("rose-postcard", "Rose & Postcard", "Rose et carte postale", 549, designAtPickup,
    [{ id: "rose", quantity: 1 }, { id: "postcard", quantity: 1 }], postcardPhotos),
];

export const preorderLimit = 3;
export const preorderClosesAt = "2026-11-12T00:00:00-05:00";
export const pickupDeadline = "2026-11-13T12:00:00-05:00";
export const shopTimeZone = "America/Toronto";
export const shopText = {
  pickup: words("SSUNS DRC, second floor of Le Centre Sheraton Montréal", "Centre de ressources des délégués (DRC), 2e étage du Centre Sheraton Montréal"),
  hold: words("Collect your reservation by Friday, November 13 at noon (Montréal time). Unclaimed items may be released for general sale after that time.", "Récupérez votre réservation au plus tard le vendredi 13 novembre à midi (heure de Montréal). Les articles non réclamés pourront ensuite être remis en vente."),
  payment: words("Pay in person when you collect your items. No payment is collected online.", "Payez sur place au moment du retrait. Aucun paiement n’est perçu en ligne."),
  policy: words("To ensure merchandise is available to as many delegates as possible, preorders are limited to three items per delegate. Additional merchandise will be available for purchase at the conference, subject to availability.", "Pour que le plus grand nombre de délégués puisse en profiter, les précommandes sont limitées à trois articles par personne. D’autres articles seront en vente à la conférence, selon les disponibilités."),
  taxes: words("Prices in CAD. Québec taxes (14.975%) added at checkout.", "Prix en dollars canadiens. Taxes du Québec (14,975 %) ajoutées à la commande."),
};

export type ShopSelection = { productId: string; options: Record<string, string>; quantity: number };
export type ShopLine = ShopSelection & {
  productName: string;
  variant: string;
  unitPrice: number;
  regularPrice: number;
  lineTotal: number;
};
export const shopStatuses = ["Reserved", "Collected", "Cancelled", "Unclaimed"] as const;
export type ShopReceipt = {
  id: string;
  name: string;
  status: (typeof shopStatuses)[number];
  lines: ShopLine[];
  total: number;
  canCancel: boolean;
  email?: "sent" | "unavailable";
};

// 14.975% combined GST/QST, applied once to the order subtotal in cents.
export function shopTotals(subtotal: number) {
  const tax = Math.floor((subtotal * 599 + 2000) / 4000);
  return { subtotal, tax, total: subtotal + tax };
}

export const findProduct = (id: string) => shopProducts.find((product) => product.id === id);
export const componentName = (id: string, locale: ShopLocale) => id === "rose" ? words("Rose", "Rose")[locale] : findProduct(id)?.name[locale];
export const regularPrice = (product: ShopProduct) => product.includes?.reduce(
  (total, item) => total + (item.id === "rose" ? 399 : findProduct(item.id)!.price) * item.quantity, 0,
) ?? product.price;
export const formatPrice = (cents: number, locale: ShopLocale) => new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", { style: "currency", currency: "CAD" }).format(cents / 100);
export const selectionKey = (line: ShopSelection) => JSON.stringify([line.productId, Object.entries(line.options).sort(([a], [b]) => a.localeCompare(b))]);
export function priceLine(selection: ShopSelection, locale: ShopLocale): ShopLine {
  const product = findProduct(selection.productId);
  if (!product) throw new Error("Unknown product");
  return {
    ...selection, productName: product.name[locale],
    variant: product.options.map((option) => {
      const value = selection.options[option.id];
      return `${option.label[locale]}: ${option.labels?.[value]?.[locale] ?? value}`;
    }).join(" · "),
    unitPrice: product.price, regularPrice: regularPrice(product), lineTotal: product.price * selection.quantity,
  };
}
