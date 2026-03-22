import { DossierRail } from "@/components/DossierRail";

type DossierNavItem = {
  href: string;
  title: string;
  summary: string;
};

type DossierNavProps = {
  items: DossierNavItem[];
  currentHref: string;
};

export function DossierNav({ items, currentHref }: DossierNavProps) {
  return <DossierRail currentHref={currentHref} items={items} />;
}
