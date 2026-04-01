"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { useSiteContent } from "@/lib/useSiteContent";

const quickLinkOrder = [
  "/conference/venue",
  "/conference/schedule",
  "/conference/icao",
  "/conference/charity-partner",
  "/conference/delegate-resource-center",
] as const;

type ConferenceQuickLinksProps = {
  currentHref?: string;
  className?: string;
};

export function ConferenceQuickLinks({ currentHref, className }: ConferenceQuickLinksProps) {
  const { conferenceContent } = useSiteContent();
  const isFrench = conferenceContent.title === "Conférence";
  const items = quickLinkOrder
    .map((href) => conferenceContent.chapters.find((chapter) => chapter.href === href))
    .filter((chapter): chapter is NonNullable<typeof chapter> => Boolean(chapter));

  return (
    <nav aria-label="Conference quick links" className={cn("theme-panel-strong paper-grain p-4 sm:p-5", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--rule)] pb-4">
        <p className="section-kicker">{isFrench ? "Liens rapides de la conférence" : "Conference quick links"}</p>
        <p className="w-full text-sm leading-relaxed text-[var(--muted)] sm:w-auto">
          {isFrench ? "Accédez directement aux sections clés de la conférence." : "Navigate the key conference sections directly."}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => {
          const isActive = currentHref === item.href;
          return (
            <Link
              className={cn(
                "inline-flex items-center border px-3 py-2 text-sm font-semibold transition-colors duration-200",
                isActive
                  ? "border-[var(--accent)] bg-[rgba(20,32,130,0.06)] text-[var(--accent)]"
                  : "border-[var(--rule)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
              )}
              href={item.href}
              key={item.href}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
