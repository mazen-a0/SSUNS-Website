import { PageHero } from "@/components/PageHero";

export default function StaffResourcesPage() {
  return (
    <>
      <PageHero intro="This is a protected test area for staff-facing materials. Public delegates should not have access." title="Staff Resources" />
      <section className="mx-auto max-w-[96rem] px-5 sm:px-8">
        <div className="theme-panel-strong paper-grain rounded-[8px] p-8 sm:p-10">
          <p className="section-kicker">Restricted Access</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--text)] sm:text-base">
            This area exists to confirm routing and access control for staff documents before private content is published.
          </p>
        </div>
      </section>
    </>
  );
}
