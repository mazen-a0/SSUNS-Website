import type { ScheduleBloc } from "@/content/schedule";

export const hotelLevels = ["B", "A", "2", "3", "4", "7"] as const;
export type HotelLevel = typeof hotelLevels[number];
export type VenueRoom = {
  id: string;
  committeeSlug?: string;
  // Supplied table label is a fallback; public committee names come from site content.
  tableLabel: string;
  side?: string;
  room: string;
  floor: HotelLevel;
  bloc: ScheduleBloc;
  // Room bounds as percentages of the supplied, uncropped floor-plan page.
  bounds: readonly [number, number, number, number];
};

// Organizer-supplied room list, 16 October 2026. Preserve split JCC rooms.
// The organizer confirmed Cradhoc is Ad Hoc of the Secretary General.
export const venueRooms: VenueRoom[] = [
  { id: "salon-a", committeeSlug: "unhrc-2026", tableLabel: "UNHRC", room: "Salon A", floor: "B", bloc: "A", bounds: [20, 28, 15.5, 14] },
  { id: "salon-b", committeeSlug: "nhl-2026", tableLabel: "NHL", room: "Salon B", floor: "B", bloc: "B", bounds: [36, 28, 15.5, 14] },
  { id: "salon-c", committeeSlug: "wto-2026", tableLabel: "WTO", room: "Salon C", floor: "B", bloc: "C", bounds: [52, 28, 15, 14] },
  { id: "jarry", committeeSlug: "fespaco-2026", tableLabel: "FESPACO", room: "Jarry", floor: "A", bloc: "A", bounds: [44.8, 25.7, 9.4, 15.3] },
  { id: "joyce", committeeSlug: "icj-2026", tableLabel: "ICJ", room: "Joyce", floor: "A", bloc: "B", bounds: [54.5, 25.7, 8.4, 15.3] },
  { id: "kafka", committeeSlug: "chess-2026", tableLabel: "JCC: Russia", side: "Russia", room: "Kafka", floor: "A", bloc: "C", bounds: [16.3, 45.7, 9, 9.5] },
  { id: "lamartine", committeeSlug: "chess-2026", tableLabel: "JCC: Britain", side: "Great Britain", room: "Lamartine", floor: "A", bloc: "C", bounds: [16.3, 55.8, 9, 13.5] },
  { id: "musset", committeeSlug: "ad-hoc-2026", tableLabel: "Ad Hoc Spec", room: "Musset", floor: "A", bloc: "A", bounds: [35.4, 48.2, 8.5, 8.1] },
  { id: "salon-1", committeeSlug: "tyre-siege-2026", tableLabel: "Great Expectations", room: "Salon 1", floor: "2", bloc: "B", bounds: [15, 27.7, 8.9, 17] },
  { id: "salon-2", committeeSlug: "versace-2026", tableLabel: "Versace", room: "Salon 2", floor: "2", bloc: "A", bounds: [24.3, 32.5, 8.3, 12.2] },
  { id: "salon-4", committeeSlug: "ad-hoc-sg-2026", tableLabel: "Cradhoc", room: "Salon 4", floor: "2", bloc: "B", bounds: [73.5, 36.2, 7.5, 18.4] },
  { id: "salon-5", committeeSlug: "dam-right-2026", tableLabel: "Dam Right", room: "Salon 5", floor: "2", bloc: "C", bounds: [73.5, 55.3, 7.5, 22.2] },
  { id: "drummond-west", committeeSlug: "sdg-12-2026", tableLabel: "SDG 12", room: "Drummond West", floor: "3", bloc: "B", bounds: [14.5, 39, 12, 12.3] },
  { id: "drummond-center", committeeSlug: "unsc-2026", tableLabel: "UNSC", room: "Drummond Center", floor: "3", bloc: "A", bounds: [27, 39, 8.4, 12.3] },
  { id: "drummond-east", committeeSlug: "ifad-2026", tableLabel: "IFAD", room: "Drummond East", floor: "3", bloc: "C", bounds: [36, 39, 12, 12.3] },
  { id: "salon-6", committeeSlug: "mof-2026", tableLabel: "French Bilingual", room: "Salon 6", floor: "3", bloc: "A", bounds: [75.2, 61, 6, 16.6] },
  { id: "salon-7", committeeSlug: "praguematic-2026", tableLabel: "Slavic Identity", room: "Salon 7", floor: "3", bloc: "B", bounds: [75.2, 43, 6, 17.5] },
  { id: "salon-8", committeeSlug: "khanflict-2026", tableLabel: "Khanflict", room: "Salon 8", floor: "4", bloc: "C", bounds: [67.5, 47.2, 5.2, 10.5] },
  { id: "ballroom-west", committeeSlug: "who-2026", tableLabel: "WHO", room: "Ballroom West", floor: "4", bloc: "A", bounds: [15, 32.5, 16, 29.2] },
  { id: "ballroom-center", committeeSlug: "ccpcj-2026", tableLabel: "CCPCJ", room: "Ballroom Center", floor: "4", bloc: "B", bounds: [31.6, 32.5, 16, 29.2] },
  { id: "ballroom-east", committeeSlug: "icao-2026", tableLabel: "ICAO", room: "Ballroom East", floor: "4", bloc: "C", bounds: [48.2, 32.5, 8.8, 29.2] },
  { id: "716", committeeSlug: "festival-rivalry-2026", tableLabel: "JCC: Osheaga", side: "Osheaga", room: "716", floor: "7", bloc: "C", bounds: [47, 25.3, 15.8, 9] },
  { id: "722", committeeSlug: "festival-rivalry-2026", tableLabel: "JCC: Lollapalooza", side: "Lollapalooza", room: "722", floor: "7", bloc: "C", bounds: [59.1, 44.3, 7.6, 17.7] },
  { id: "705", committeeSlug: "pour-decisions-2026", tableLabel: "Burgandian Ministry", room: "705", floor: "7", bloc: "A", bounds: [18.7, 75.8, 7.6, 12] },
  { id: "720", committeeSlug: "penguins-2026", tableLabel: "Penguin House", room: "720", floor: "7", bloc: "B", bounds: [67.1, 25.3, 8.1, 11.8] },
  { id: "728", committeeSlug: "newsboys-2026", tableLabel: "Newsboy's", room: "728", floor: "7", bloc: "A", bounds: [53, 81.2, 10.3, 8] },
];
