import Link from "next/link";
import { cn } from "@/lib/cn";

type SocialPlatform = "instagram" | "tiktok";

type SocialIconButtonProps = {
  platform: SocialPlatform;
  href?: string;
  label: string;
  className?: string;
  disabled?: boolean;
};

type SocialIconRowProps = {
  items: Array<SocialIconButtonProps>;
  className?: string;
};

function TikTokIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
      <path
        d="M14 4c.95 2.02 2.53 3.28 5 3.73"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.55"
      />
      <path
        d="M14 4v9.25a3.25 3.25 0 1 1-3.05-3.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.55"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
      <rect height="15" rx="4" stroke="currentColor" strokeWidth="1.55" width="15" x="4.5" y="4.5" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.55" />
      <circle cx="17.2" cy="6.8" fill="currentColor" r="1" />
    </svg>
  );
}

function getIcon(platform: SocialPlatform) {
  switch (platform) {
    case "instagram":
      return <InstagramIcon />;
    case "tiktok":
      return <TikTokIcon />;
    default:
      return null;
  }
}

export function SocialIconButton({ platform, href, label, className, disabled = false }: SocialIconButtonProps) {
  const content = (
    <>
      {getIcon(platform)}
      <span className="sr-only">{label}</span>
    </>
  );

  const classes = cn(
    "inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] text-[var(--accent)] transition duration-200 hover:scale-105 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-2)] disabled:pointer-events-none disabled:opacity-45",
    className,
  );

  if (!href || disabled) {
    return (
      <button aria-label={label} className={classes} disabled type="button">
        {content}
      </button>
    );
  }

  return (
    <Link aria-label={label} className={classes} href={href} rel="noreferrer" target="_blank">
      {content}
    </Link>
  );
}

export function SocialIconRow({ items, className }: SocialIconRowProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <SocialIconButton key={`${item.platform}-${item.label}`} {...item} />
      ))}
    </div>
  );
}
