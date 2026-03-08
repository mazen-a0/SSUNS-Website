import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div" | "section" | "aside";
};

export function GlassCard({ children, className, as = "article" }: GlassCardProps) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "glass-card theme-panel paper-grain relative overflow-hidden rounded-[10px] p-6 transition duration-300",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(20,32,130,0.25),transparent)]"
      />
      <span aria-hidden className="glass-noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
