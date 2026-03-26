import Image from "next/image";

type ProfileCardProps = {
  name: string;
  role: string;
  imageSrc?: string;
  bio?: string;
};

export function ProfileCard({ name, role, imageSrc, bio }: ProfileCardProps) {
  return (
    <article className="theme-panel paper-grain overflow-hidden rounded-[8px] p-3">
      {/* TODO(photo): Replace with the correct secretariat member headshot (4:5, 800x1000). Current file should live at /public/headshots/<name>.jpg. */}
      <div className="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-start">
        <div className="relative overflow-hidden rounded-[6px] border border-[var(--rule)]">
          <Image alt={`${name} headshot`} className="aspect-[4/5] w-full object-cover" height={1000} src={imageSrc || "/headshots/marcus.jpg"} width={800} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-[var(--text)]">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{role}</p>
          <details className="mt-4 border-t border-[var(--rule)] pt-4">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Bio</summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{bio?.trim() || "Coming soon"}</p>
          </details>
        </div>
      </div>
    </article>
  );
}
