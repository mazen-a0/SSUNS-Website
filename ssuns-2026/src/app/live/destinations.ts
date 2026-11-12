import type { ScheduleEvent } from "@/content/schedule";
import { hotelLevels, venueRooms, type HotelLevel, type VenueRoom } from "@/content/venueRooms";

export type MapDestination = { floor: HotelLevel; room?: VenueRoom };

// Match confirmed schedule locations to the existing floor plans. A whole
// foyer or ballroom group is deliberately a floor-only destination.
const floorOnly: Readonly<Record<string, HotelLevel>> = {
  "3rd floor foyer": "3",
  "4th floor ballrooms": "4",
};
const roomAliases: Readonly<Record<string, string>> = {
  "Drummond East, 3rd floor": "Drummond East",
  "Salon Jarry": "Jarry",
};

export function eventDestinations(event: ScheduleEvent, committeeRooms: VenueRoom[], bloc?: string): MapDestination[] {
  if (event.kind === "session") {
    return event.bloc === bloc ? committeeRooms.map((room) => ({ floor: room.floor, room })) : [];
  }
  const location = event.location?.en;
  if (!location) return [];
  const room = venueRooms.find((item) => item.room === (roomAliases[location] ?? location));
  if (room) return [{ floor: room.floor, room }];
  const floor = floorOnly[location];
  return floor ? [{ floor }] : [];
}

export function mapHref(destination: MapDestination) {
  const params = new URLSearchParams({ floor: destination.floor });
  if (destination.room) params.set("room", destination.room.id);
  return `#hotel-map?${params}`;
}

export function readMapDestination(params: URLSearchParams) {
  const room = venueRooms.find((item) => item.id === params.get("room"));
  const floor = hotelLevels.find((level) => level === params.get("floor"));
  return { room, floor: room?.floor ?? floor };
}
