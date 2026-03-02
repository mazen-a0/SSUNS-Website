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
  "liquid-button group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-blue)]";

export function LiquidButton({
  label,
  href,
  onClick,
  className,
  variant = "solid",
}: LiquidButtonProps) {
  const variantClass =
    variant === "solid"
      ? "bg-[linear-gradient(140deg,var(--color-brand-blue),#80c6ff)] text-white shadow-[0_14px_30px_-14px_rgba(36,102,188,0.95)]"
      : "border border-white/55 bg-white/35 text-[var(--color-brand-navy)] backdrop-blur-lg";

  const content = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.45)_50%,transparent_75%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="relative z-10">{label}</span>
    </>
  );

  if (href) {
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
