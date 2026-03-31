import { motion } from "framer-motion";
import Image from "next/image";
import { useSiteContent } from "@/lib/useSiteContent";

type ProfileCardProps = {
  id: string;
  name: string;
  role: string;
  email?: string;
  imageSrc?: string;
  bio?: string;
  onOpen: () => void;
};

export function ProfileCard({ id, name, role, email, imageSrc, bio, onOpen }: ProfileCardProps) {
  const { language } = useSiteContent();
  const body = bio?.trim() || (language === "fr" ? "À venir" : "Coming soon");

  return (
    <motion.article
      layoutId={`secretariat-card-${id}`}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="theme-panel paper-grain overflow-hidden rounded-[8px] p-4 sm:p-5"
    >
      {/* TODO(photo): Replace with the correct secretariat member headshot (4:5, 800x1000). Current file should live at /public/headshots/<name>.jpg. */}
      <div className="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-start">
        <div className="relative overflow-hidden rounded-[6px] border border-[var(--rule)]">
          <Image alt={`${name} headshot`} className="aspect-[4/5] w-full object-cover" height={1000} src={imageSrc || "/headshots/marcus.jpg"} width={800} />
        </div>
        <div>
          <h3 className="font-display text-2xl leading-tight text-[var(--accent)]">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{role}</p>
          {email ? (
            <a className="mt-2 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href={`mailto:${email}`}>
              {email}
            </a>
          ) : null}
          <div className="mt-4 border-t border-[var(--rule)] pt-4">
            <p
              className="text-sm leading-relaxed text-[var(--muted)]"
              style={{
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                display: "-webkit-box",
                overflow: "hidden",
              }}
            >
              {body}
            </p>
            <button
              aria-haspopup="dialog"
              className="mt-3 text-sm font-semibold text-[var(--accent)]"
              onClick={onOpen}
              type="button"
            >
              {language === "fr" ? "Lire la bio" : "Read bio"}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
