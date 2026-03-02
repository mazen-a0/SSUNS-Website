import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div" | "section";
};

export function GlassCard({ children, className, as = "article" }: GlassCardProps) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "glass-card relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 shadow-[var(--glass-shadow)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_56px_-26px_rgba(14,24,70,0.65)]",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
      />
      <span aria-hidden className="glass-noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
