import Link from "next/link";
import { cn } from "@/lib/cn";

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
  return (
    <nav aria-label={currentHref} className="theme-panel-strong paper-grain rounded-[8px] p-4 sm:p-5">
      <div className="space-y-2">
        {items.map((item) => {
          const isActive = currentHref === item.href;

          return (
            <Link
              className={cn(
                "block border px-4 py-4 transition-colors",
                isActive
                  ? "border-[var(--accent)] bg-[rgba(20,32,130,0.05)]"
                  : "border-[var(--rule)] bg-transparent hover:bg-[rgba(20,32,130,0.03)]",
              )}
              href={item.href}
              key={item.href}
            >
              <p className={cn("text-sm font-semibold uppercase tracking-[0.12em]", isActive ? "text-[var(--accent)]" : "text-[var(--text)]")}>
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.summary}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
