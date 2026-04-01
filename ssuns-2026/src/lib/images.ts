export type ImageCategory = "committees" | "delegates" | "events" | "icao" | "montreal" | "sheraton" | "staff";

export const IMAGE_REGISTRY = {
  hero: {
    montage: [
      "/delegates/hero-1920x1080.jpg",
      "/delegates/delegates(10).JPG",
      "/delegates/delegates(3).JPG",
      "/events/gala(1).JPG",
    ],
  },
  committees: {
    debate: [
      "/committees/committee(10).jpg",
      "/committees/chairs.jpg",
      "/committees/committee(4).jpg",
      "/committees/committee(7).jpg",
      "/committees/committee(2).jpg",
      "/committees/committee(8).jpg",
      "/committees/committee(5).jpg",
      "/committees/committee(9).jpg",
    ],
  },
  venue: {
    sheraton: [
      "/sheraton/hotel(1).jpg",
      "/sheraton/hotel(2).png",
      "/sheraton/hotel-1600x900.jpg",
      "/events/gala(4).jpg",
    ],
  },
  montreal: {
    city: [
      "/montreal/montreal(1).jpg",
      "/montreal/montreal(3).jpg",
      "/montreal/montreal(4).jpg",
      "/montreal/montreal(5).png",
    ],
  },
  delegates: {
    portraits: [
      "/delegates/delegates(vertical).jpg",
      "/delegates/delegates(17).jpg",
      "/delegates/delegates(16).jpg",
      "/delegates/delegates(18).JPG",
    ],
    floor: [
      "/delegates/delegates(12).JPG",
      "/delegates/delegates(7).JPG",
      "/delegates/delegates(14).JPG",
      "/delegates/delegates(1).JPG",
      "/delegates/delegates(9).JPG",
      "/delegates/delegates(6).JPG",
      "/delegates/delegates(5).jpg",
      "/delegates/delegates(15).JPG",
    ],
  },
  legacy: {
    alumniVibe: [
      "/staff/secretariat(2).JPG",
      "/events/gala(5).jpg",
      "/delegates/delegates(11).JPG",
      "/montreal/montreal(2).jpg",
    ],
  },
  events: {
    ceremony: [
      "/events/gala(2).JPG",
      "/events/gala(7).jpg",
      "/events/gala(8).jpg",
      "/events/gala(6).jpg",
    ],
  },
  icao: {
    gallery: [
      "/icao/icao(1).JPG",
      "/icao/icao(2).jpg",
      "/icao/icao(6).jpg",
      "/icao/icao(8).jpg",
    ],
  },
  staff: {
    secretariat: [
      "/staff/secretariat(1).JPG",
      "/staff/secretariat(3).JPG",
      "/staff/secretariat(5).JPG",
      "/staff/chairs.jpg",
    ],
  },
} as const;

export const HOME_MONTAGE_IMAGES = [
  IMAGE_REGISTRY.delegates.floor[0],
  IMAGE_REGISTRY.staff.secretariat[0],
  IMAGE_REGISTRY.events.ceremony[0],
  IMAGE_REGISTRY.venue.sheraton[1],
  IMAGE_REGISTRY.icao.gallery[0],
  IMAGE_REGISTRY.delegates.floor[1],
  IMAGE_REGISTRY.committees.debate[0],
  IMAGE_REGISTRY.montreal.city[0],
] as const;

export const COMMITTEE_SLATE_IMAGES = [
  IMAGE_REGISTRY.delegates.floor[2],
  IMAGE_REGISTRY.committees.debate[1],
  IMAGE_REGISTRY.committees.debate[3],
  IMAGE_REGISTRY.committees.debate[4],
] as const;

export const LEGACY_GALLERY_IMAGES = [
  IMAGE_REGISTRY.legacy.alumniVibe[0],
  IMAGE_REGISTRY.legacy.alumniVibe[2],
  IMAGE_REGISTRY.legacy.alumniVibe[1],
  IMAGE_REGISTRY.legacy.alumniVibe[3],
] as const;

export const ICAO_GALLERY_IMAGES = IMAGE_REGISTRY.icao.gallery;
export const VENUE_GALLERY_IMAGES = [
  IMAGE_REGISTRY.venue.sheraton[0],
  IMAGE_REGISTRY.venue.sheraton[2],
  IMAGE_REGISTRY.montreal.city[2],
  IMAGE_REGISTRY.events.ceremony[2],
] as const;

export const SHERATON_PRIMARY_IMAGE = IMAGE_REGISTRY.venue.sheraton[0];
export const DEFAULT_HERO_IMAGE = IMAGE_REGISTRY.hero.montage[0];
export const DEFAULT_EDITORIAL_IMAGE = IMAGE_REGISTRY.committees.debate[0];
export const ROOM_RATES_IMAGE = "/sheraton/room_for_rates.jpg";

export const IMAGES: Record<ImageCategory, string[]> = {
  committees: [...IMAGE_REGISTRY.committees.debate],
  delegates: [...IMAGE_REGISTRY.delegates.floor, ...IMAGE_REGISTRY.delegates.portraits],
  events: [...IMAGE_REGISTRY.events.ceremony],
  icao: [...IMAGE_REGISTRY.icao.gallery],
  montreal: [...IMAGE_REGISTRY.montreal.city],
  sheraton: [...IMAGE_REGISTRY.venue.sheraton],
  staff: [...IMAGE_REGISTRY.staff.secretariat],
};

const CURATED_IMAGE_KEYS: Record<string, string> = {
  "home-hero-poster": DEFAULT_HERO_IMAGE,
  "gallery-montreal": IMAGE_REGISTRY.montreal.city[0],
  "gallery-hotel": SHERATON_PRIMARY_IMAGE,
  "gallery-delegates": IMAGE_REGISTRY.delegates.floor[3],
  "gallery-ballroom": IMAGE_REGISTRY.events.ceremony[0],
  "home-photo-1": HOME_MONTAGE_IMAGES[0],
  "home-photo-2": HOME_MONTAGE_IMAGES[1],
  "home-photo-3": HOME_MONTAGE_IMAGES[2],
  "home-photo-4": HOME_MONTAGE_IMAGES[3],
  "home-photo-5": HOME_MONTAGE_IMAGES[4],
  "home-photo-6": HOME_MONTAGE_IMAGES[5],
  "home-photo-7": HOME_MONTAGE_IMAGES[6],
  "home-photo-8": HOME_MONTAGE_IMAGES[7],
  "at-a-glance-primary": IMAGE_REGISTRY.delegates.floor[4],
  "at-a-glance-1": IMAGE_REGISTRY.delegates.floor[5],
  "at-a-glance-2": IMAGE_REGISTRY.committees.debate[2],
  "at-a-glance-3": IMAGE_REGISTRY.events.ceremony[1],
  "about-overview": IMAGE_REGISTRY.montreal.city[1],
  "conference-track-ga": IMAGE_REGISTRY.committees.debate[5],
  "conference-track-specialized": IMAGE_REGISTRY.delegates.floor[6],
  "conference-track-crisis": IMAGE_REGISTRY.events.ceremony[3],
  "venue-overview": IMAGE_REGISTRY.venue.sheraton[2],
  "conference-crisis-feature": IMAGE_REGISTRY.delegates.floor[7],
  "resources-hero": IMAGE_REGISTRY.committees.debate[6],
  "sponsor-hero": SHERATON_PRIMARY_IMAGE,
  "contact-hero": IMAGE_REGISTRY.montreal.city[3],
  "committee-page-photo-1": COMMITTEE_SLATE_IMAGES[0],
  "legacy-photo-1": LEGACY_GALLERY_IMAGES[0],
  "legacy-photo-2": LEGACY_GALLERY_IMAGES[1],
  "legacy-photo-3": LEGACY_GALLERY_IMAGES[2],
  "legacy-photo-4": LEGACY_GALLERY_IMAGES[3],
  "icao-primary": ICAO_GALLERY_IMAGES[0],
};

function hashString(input: string) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash * 31 + input.charCodeAt(index)) >>> 0;
  }
  return hash;
}

export function pickImage(category: ImageCategory, key: string): string {
  const curated = CURATED_IMAGE_KEYS[key];
  if (curated) {
    return curated;
  }

  const images = IMAGES[category];
  if (!images.length) {
    return DEFAULT_HERO_IMAGE;
  }

  return images[hashString(key) % images.length];
}
