import type { Metadata } from "next";
import { ConferenceHub } from "./ConferenceHub";

export const metadata: Metadata = {
  title: "Conference pocket guide | SSUNS 2026",
  description: "Your SSUNS conference schedule, committee, charity and venue guide.",
  robots: { index: false, follow: false },
};

// Printed QR destination: https://www.ssuns.org/live
// Keep /live permanent. If the guide moves, preserve this route with a redirect.
export default function LivePage() {
  return <ConferenceHub />;
}
