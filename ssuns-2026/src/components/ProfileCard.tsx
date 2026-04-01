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
  const body = bio?.trim() || (language === "fr" ? "Biographie disponible dans le profil complet." : "Biography available in the full profile.");

  return (
    <motion.article
      layoutId={`secretariat-card-${id}`}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="theme-panel paper-grain mx-auto flex h-full w-full max-w-[20rem] overflow-hidden rounded-[8px] p-3.5 sm:p-4"
    >
      <div className="flex min-h-0 w-full flex-col gap-3">
        <div className="relative overflow-hidden rounded-[6px] border border-[var(--rule)]">
          <Image
            alt={`${name} headshot`}
            className="h-[8.75rem] w-full object-cover object-top sm:h-[9.25rem]"
            height={1000}
            src={imageSrc || "/headshots/marcus.jpg"}
            width={800}
          />
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <h3 className="font-display text-[1.5rem] leading-tight text-[var(--accent)]">{name}</h3>
          <p
            className="mt-1.5 min-h-[2.4rem] text-[0.88rem] leading-relaxed text-[var(--muted)]"
            style={{
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              display: "-webkit-box",
              overflow: "hidden",
            }}
          >
            {role}
          </p>
          {email ? (
            <a
              className="mt-1.5 inline-flex min-h-[2.3rem] items-start break-words text-[0.86rem] font-semibold leading-relaxed text-[var(--accent)] underline-offset-4 hover:underline"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          ) : null}
          <div className="mt-3 flex min-h-0 flex-1 flex-col border-t border-[var(--rule)] pt-3">
            <p
              className="text-[0.88rem] leading-relaxed text-[var(--muted)]"
              style={{
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                display: "-webkit-box",
                overflow: "hidden",
              }}
            >
              {body}
            </p>
            <button
              aria-haspopup="dialog"
              className="mt-auto pt-3 text-left text-[0.88rem] font-semibold text-[var(--accent)]"
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
