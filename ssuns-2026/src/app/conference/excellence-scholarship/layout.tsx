import type { Metadata } from "next";
import type { ReactNode } from "react";
import { excellenceScholarship } from "@/content/en/excellenceScholarship";

export const metadata: Metadata = {
  title: "SSUNS Excellence Scholarship | SSUNS 2026",
  description: excellenceScholarship.summary,
};

export default function ScholarshipLayout({ children }: { children: ReactNode }) {
  return children;
}
