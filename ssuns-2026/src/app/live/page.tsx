import type { Metadata, Viewport } from "next";
import { ConferenceHub } from "./ConferenceHub";

export const metadata: Metadata = {
  title: "Conference pocket guide | SSUNS 2026",
  description: "Your SSUNS conference schedule, committee, charity and venue guide.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { viewportFit: "cover", themeColor: "#171e59" };

// Printed QR destination: https://www.ssuns.org/live
// Keep /live permanent. If the guide moves, preserve this route with a redirect.
export default function LivePage() {
  return <ConferenceHub />;
}
