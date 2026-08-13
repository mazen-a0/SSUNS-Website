import { LEGACY_GALLERY_IMAGES } from "@/lib/images";

export type LegacyDelegationMarker = {
  id: string;
  label: string;
  location: [number, number];
};

export const legacyMontrealCoordinates: [number, number] = [45.5017, -73.5673];

export const legacyDelegationMarkers: LegacyDelegationMarker[] = [
  { id: "toronto", label: "Toronto", location: [43.6532, -79.3832] },
  { id: "vancouver", label: "Vancouver", location: [49.2827, -123.1207] },
  { id: "new-york", label: "New York", location: [40.7128, -74.006] },
  { id: "boston", label: "Boston", location: [42.3601, -71.0589] },
  { id: "washington", label: "Washington DC", location: [38.9072, -77.0369] },
  { id: "chicago", label: "Chicago", location: [41.8781, -87.6298] },
  { id: "kenya", label: "Kenya", location: [-1.2921, 36.8219] },
  { id: "uganda", label: "Uganda", location: [0.3476, 32.5825] },
  { id: "panama", label: "Panama", location: [8.9824, -79.5199] },
  { id: "trinidad", label: "Trinidad and Tobago", location: [10.6596, -61.5089] },
  { id: "belarus", label: "Belarus", location: [53.9, 27.5667] },
  { id: "ghana", label: "Ghana", location: [5.6037, -0.187] },
  { id: "nigeria", label: "Nigeria", location: [6.5244, 3.3792] },
  { id: "bahamas", label: "Bahamas", location: [25.0443, -77.3504] },
  { id: "nepal", label: "Nepal", location: [27.7172, 85.324] },
  { id: "cameroon", label: "Cameroon", location: [3.848, 11.5021] },
  { id: "cuba", label: "Cuba", location: [23.1136, -82.3666] },
  { id: "ethiopia", label: "Ethiopia", location: [8.9806, 38.7578] },
  { id: "puerto-rico", label: "Puerto Rico", location: [18.4655, -66.1057] },
  { id: "burkina-faso", label: "Burkina Faso", location: [12.3714, -1.5197] },
  { id: "morocco", label: "Morocco", location: [34.0209, -6.8416] },
  { id: "haiti", label: "Haiti", location: [18.5944, -72.3074] },
  { id: "germany", label: "Germany", location: [52.52, 13.405] },
  { id: "nicaragua", label: "Nicaragua", location: [12.114, -86.2362] },
];

export const legacyGalleryItems = [
  { id: "legacy-photo-1", src: LEGACY_GALLERY_IMAGES[0], alt: "SSUNS team members in conference setting" },
  { id: "legacy-photo-2", src: LEGACY_GALLERY_IMAGES[1], alt: "Delegates gathering between committee sessions" },
  { id: "legacy-photo-3", src: LEGACY_GALLERY_IMAGES[2], alt: "SSUNS participants during a conference ceremony" },
  { id: "legacy-photo-4", src: LEGACY_GALLERY_IMAGES[3], alt: "Montréal city scene connected to the conference's international footprint" },
];
