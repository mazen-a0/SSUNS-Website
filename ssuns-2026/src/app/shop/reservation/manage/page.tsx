import type { Metadata } from "next";
import { ManageReservation } from "@/components/shop/ManageReservation";

export const metadata: Metadata = {
  title: "Manage your reservation | SSUNS 2026",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function ManageReservationPage() {
  return <ManageReservation />;
}
