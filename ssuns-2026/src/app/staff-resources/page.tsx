import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function StaffResourcesPage() {
  return (
    <>
      <PageHero intro="A private space for the SSUNS Secretariat and staff team." title="Staff Resources" />
      <section className="page-shell">
        <div className="theme-panel-strong paper-grain rounded-[8px] p-8 sm:p-10">
          <p className="section-kicker">Restricted Access</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--text)] sm:text-base">
            This area is reserved for SSUNS staff. Conference materials for delegates and faculty advisors are available
            through the Delegate Resource Center.
          </p>
          <Link
            className="mt-6 inline-flex border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]"
            href="/conference/delegate-resource-center"
          >
            Visit the Delegate Resource Center
          </Link>
        </div>
      </section>
    </>
  );
}
