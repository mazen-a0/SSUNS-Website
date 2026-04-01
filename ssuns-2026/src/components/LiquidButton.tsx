import Link from "next/link";
import { cn } from "@/lib/cn";

type LiquidButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "solid" | "ghost" | "inverse" | "inverseGhost";
};

const baseClass =
  "liquid-button ui-copy group relative inline-flex items-center justify-center overflow-hidden rounded-[6px] border px-5 py-2.5 text-center text-sm font-semibold whitespace-normal sm:whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

export function LiquidButton({
  label,
  href,
  onClick,
  className,
  variant = "solid",
}: LiquidButtonProps) {
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  const variantTokens = {
    solid:
      "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[var(--shadow-soft)] hover:border-[#1a2a98] hover:bg-[#1a2a98] hover:text-white",
    ghost:
      "border-[var(--accent)] bg-transparent text-[var(--accent)] shadow-none hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.08)] hover:text-[var(--accent)]",
    inverse:
      "border-white bg-white text-[var(--accent)] shadow-[var(--shadow-soft)] hover:border-[#d9e3ff] hover:bg-[#eef3ff] hover:text-[var(--accent)]",
    inverseGhost:
      "border-white/36 bg-[rgba(8,14,44,0.34)] text-white shadow-none hover:border-white/60 hover:bg-[rgba(255,255,255,0.14)] hover:text-white",
  } as const;
  const variantClass = variantTokens[variant];

  const content = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)]"
      />
      <span className="relative z-10">{label}</span>
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a className={cn(baseClass, variantClass, className)} href={href} rel="noreferrer" target="_blank">
          {content}
        </a>
      );
    }

    return (
      <Link className={cn(baseClass, variantClass, className)} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClass, variantClass, className)} onClick={onClick} type="button">
      {content}
    </button>
  );
}
