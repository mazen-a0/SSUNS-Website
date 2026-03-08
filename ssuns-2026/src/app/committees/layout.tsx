export default function CommitteesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(20,32,130,0.22),transparent)]" />
      <div className="relative">{children}</div>
    </div>
  );
}
