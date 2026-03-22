import Image from "next/image";

type ProfileCardProps = {
  name: string;
  role: string;
  imageSrc?: string;
};

export function ProfileCard({ name, role, imageSrc }: ProfileCardProps) {
  return (
    <article className="theme-panel paper-grain overflow-hidden rounded-[8px] p-3">
      {/* TODO(photo): Replace with the correct secretariat member headshot (4:5, 800x1000). Currently using the shared placeholder portrait for all profiles. */}
      <Image
        alt={`${name} portrait placeholder`}
        className="aspect-[4/5] w-full object-cover"
        height={1000}
        src={imageSrc || "/placeholders/portrait-800x1000.jpg"}
        width={800}
      />
      <div className="border-t border-[var(--rule)] px-2 py-4">
        <h3 className="font-display text-2xl leading-none text-[var(--text)]">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{role}</p>
      </div>
    </article>
  );
}
