import Image from "next/image";
import { useState } from "react";
import { useSiteContent } from "@/lib/useSiteContent";

type ProfileCardProps = {
  name: string;
  role: string;
  imageSrc?: string;
  bio?: string;
};

export function ProfileCard({ name, role, imageSrc, bio }: ProfileCardProps) {
  const { language } = useSiteContent();
  const [expanded, setExpanded] = useState(false);
  const body = bio?.trim() || (language === "fr" ? "À venir" : "Coming soon");

  return (
    <article className="theme-panel paper-grain overflow-hidden rounded-[8px] p-4 sm:p-5">
      {/* TODO(photo): Replace with the correct secretariat member headshot (4:5, 800x1000). Current file should live at /public/headshots/<name>.jpg. */}
      <div className="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-start">
        <div className="relative overflow-hidden rounded-[6px] border border-[var(--rule)]">
          <Image alt={`${name} headshot`} className="aspect-[4/5] w-full object-cover" height={1000} src={imageSrc || "/headshots/marcus.jpg"} width={800} />
        </div>
        <div>
          <h3 className="font-display text-2xl leading-tight text-[var(--accent)]">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{role}</p>
          <div className="mt-4 border-t border-[var(--rule)] pt-4">
            <p
              className="text-sm leading-relaxed text-[var(--muted)]"
              style={
                expanded
                  ? undefined
                  : {
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      display: "-webkit-box",
                      overflow: "hidden",
                    }
              }
            >
              {body}
            </p>
            <button
              aria-expanded={expanded}
              className="mt-3 text-sm font-semibold text-[var(--accent)]"
              onClick={() => setExpanded((current) => !current)}
              type="button"
            >
              {expanded ? (language === "fr" ? "Réduire" : "Show less") : language === "fr" ? "Lire la bio" : "Read bio"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
