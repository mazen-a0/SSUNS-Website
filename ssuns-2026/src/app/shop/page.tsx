import type { Metadata } from "next";
import { MerchShop } from "@/components/shop/MerchShop";
import { shopAvailability } from "@/lib/shopServer";

export const metadata: Metadata = {
  title: "Merchandise Shop | SSUNS 2026",
  description: "Browse SSUNS 2026 merchandise and reserve items for pickup at the conference.",
};

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return <MerchShop availability={shopAvailability()} />;
}
