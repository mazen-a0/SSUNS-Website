import Link from "next/link";
import { cn } from "@/lib/cn";

type LiquidButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "solid" | "ghost";
};

const baseClass =
  "liquid-button ui-copy group relative inline-flex items-center justify-center overflow-hidden rounded-[6px] border px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-blue)]";

export function LiquidButton({
  label,
  href,
  onClick,
  className,
  variant = "solid",
}: LiquidButtonProps) {
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  const variantClass =
    variant === "solid"
      ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[var(--shadow-soft)] hover:border-[#1a2a98] hover:bg-[#1a2a98]"
      : "border-[var(--accent)] bg-white text-[var(--accent)] hover:bg-[rgba(20,32,130,0.06)]";

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
