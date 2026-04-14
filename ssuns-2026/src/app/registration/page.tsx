"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DossierNav } from "@/components/DossierNav";
import { SecretaryLetterModal } from "@/components/home/SecretaryLetterModal";
import { ListservSignupForm } from "@/components/ListservSignupForm";
import { LiquidButton } from "@/components/LiquidButton";
import { PageHero } from "@/components/PageHero";
import { RegistrationTimelineModule } from "@/components/registration/RegistrationTimelineModule";
import { useSiteContent } from "@/lib/useSiteContent";

const visibleRegistrationHrefs = new Set(["/registration", "/registration/how-to-register", "/registration/financial-aid"]);

function getRegistrationStatus(now: Date) {
  const openDate = new Date("2026-04-01T00:00:00-04:00");
  const closeDate = new Date("2026-10-16T23:59:59-04:00");

  if (now < openDate) {
    return {
      label: "Not open",
      detail: "Registration opens April 1, 2026.",
    };
  }

  if (now > closeDate) {
    return {
      label: "Closed",
      detail: "Registration closed on October 16, 2026 or earlier upon reaching capacity.",
    };
  }

  return {
    label: "Open",
    detail: "Registration closes October 16, 2026 or earlier upon reaching capacity.",
  };
}

export default function RegistrationPage() {
  const { contactContent, registrationContent } = useSiteContent();
  const chapter = registrationContent.chapters.find((item) => item.href === "/registration");
  const navItems = registrationContent.chapters.filter((item) => visibleRegistrationHrefs.has(item.href));
  const status = getRegistrationStatus(new Date());
  const isFrench = registrationContent.title === "Inscription";
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const registrationCapacity = 27;
  const letterOpeningPreview = registrationContent.letter.body.slice(0, 3);
  const letterClosingPreview = registrationContent.letter.body.slice(-2);
  const chargeeEmail =
    contactContent.directory.find((entry) => entry.name === registrationContent.letter.signature)?.email ?? null;

  if (!chapter) return null;

  return (
    <>
      <PageHero intro={chapter.summary} title={chapter.title} />
      <section className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-12">
          <aside className="sticky-below-header">
            <DossierNav currentHref={chapter.href} items={navItems} />
          </aside>

          <div className="min-w-0 space-y-8">
            <article className="overflow-hidden rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-5 py-7 text-white sm:px-8">
              <div className="grid gap-4 lg:grid-cols-[0.52fr_0.48fr] lg:items-end">
                <div className="min-w-0">
                  <div className="mb-5">
                    <LiquidButton href="/registration/how-to-register" label={isFrench ? "S'inscrire ici" : "Register Here"} variant="inverse" />
                  </div>
                  <p className="section-kicker text-[#b4caff]">{isFrench ? "Statut actuel des inscriptions" : "Current registration status"}</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight">{status.label}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#e4eeff]">{status.detail}</p>
                  <div className="mt-6 max-w-md border-t border-white/14 pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{isFrench ? "Capacité d'inscription actuelle" : "Live Registration Capacity"}</p>
                      <p className="text-sm font-semibold text-[#d7e3ff]">{registrationCapacity}%</p>
                    </div>
                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/12">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#8bb1ff_0%,#4f78ef_100%)]"
                        style={{ width: `${registrationCapacity}%` }}
                      />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#d7e3ff]">
                      {isFrench ? `${registrationCapacity} % de la capacité actuelle est remplie.` : `${registrationCapacity}% of current capacity is filled.`}
                    </p>
                  </div>
                </div>
                <div className="min-w-0 grid gap-3 border-t border-white/14 pt-4 lg:border-t-0 lg:border-l lg:pl-5 lg:pt-0">
                  {chapter.body.map((paragraph) => (
                    <p className="text-sm leading-relaxed text-[#eef4ff]" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            <RegistrationTimelineModule
              labels={{
                title: registrationContent.pricingTimelineText.title,
                currentPrefix: isFrench ? "Actuel" : "Current",
                currentWindow: registrationContent.pricingTimelineText.current,
                selectHint: isFrench ? "Sélectionnez un palier pour afficher les détails" : "Select a phase to view details",
                openDetails: isFrench ? "Voir les détails" : "View details",
                detailsVisible: isFrench ? "Détails affichés" : "Details shown",
                registrationOpens: isFrench ? "Ouverture" : "Registration opens",
                registrationCloses: isFrench ? "Clôture" : "Closes",
                refundCutoff: isFrench ? "Date limite de remboursement" : "Refund cutoff",
                lastPayment: isFrench ? "Dernier paiement" : "Last payment",
                delegationFee: registrationContent.pricingTimelineText.delegationFee,
                perDelegate: registrationContent.pricingTimelineText.delegateFee,
                financialAid: isFrench ? "Aide financière" : "Financial Aid",
                invoice: isFrench ? "Facturation" : "Invoice",
                current: isFrench ? "Actuel" : "Current",
                completed: isFrench ? "Terminé" : "Completed",
                upcoming: isFrench ? "À venir" : "Upcoming",
                to: registrationContent.pricingTimelineText.to,
              }}
              phases={registrationContent.pricingTimeline.map((stage, index) => ({
                id: stage.id,
                title: stage.label,
                start: stage.start,
                end: stage.end,
                delegationFee: stage.delegationFee,
                perDelegate: stage.delegateFee,
                financialAidDeadline: registrationContent.financialAidDeadlines[index],
                invoiceDeadline: registrationContent.invoiceDeadlines[index],
              }))}
            />

            <section className="grid gap-8 xl:grid-cols-[0.56fr_0.44fr]">
              <article className="theme-panel-strong paper-grain min-w-0 overflow-hidden rounded-[8px] p-5 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--rule)] pb-4">
                  <div className="min-w-0">
                    <p className="section-kicker">{isFrench ? "Frais et dates" : "Fees & Dates"}</p>
                    <h2 className="font-display mt-3 text-4xl leading-tight text-[var(--accent)]">{isFrench ? "Frais d'inscription" : "Registration fees"}</h2>
                  </div>
                  <p className="w-full text-sm leading-relaxed text-[var(--muted)] sm:max-w-xl">{registrationContent.feeNotes[0]?.body}</p>
                </div>
                <div className="mt-5 max-w-full overflow-x-auto border border-[var(--rule)]">
                  <table className="w-full min-w-[39rem] border-collapse text-left text-sm sm:min-w-0 sm:text-base">
                    <thead className="bg-[var(--paper-deep)] text-[var(--accent)]">
                      <tr>
                        <th className="px-4 py-3 font-semibold">{isFrench ? "Palier" : "Stage"}</th>
                        <th className="px-4 py-3 font-semibold">{isFrench ? "Dates" : "Dates"}</th>
                        <th className="px-4 py-3 font-semibold">{isFrench ? "Frais de délégation" : "Delegation Fee"}</th>
                        <th className="px-4 py-3 font-semibold">{isFrench ? "Par délégué" : "Per Delegate"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrationContent.pricingTimeline.map((stage) => (
                        <tr className="border-t border-[var(--rule)]" key={stage.id}>
                          <td className="px-4 py-3 font-semibold text-[var(--text)]">{stage.label}</td>
                          <td className="px-4 py-3 text-[var(--muted)]">{stage.start} {isFrench ? "au" : "to"} {stage.end}</td>
                          <td className="px-4 py-3 text-[var(--text)]">{stage.delegationFee}</td>
                          <td className="px-4 py-3 text-[var(--text)]">{stage.delegateFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-5 border-t border-[var(--rule)] pt-5">
                  <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {isFrench
                      ? "Vous voudrez peut-être aussi consulter les tarifs et les chambres du Sheraton."
                      : "You might also want to check out the Sheraton rates and rooms."}
                  </p>
                  <div className="mt-4">
                    <Link
                      className="inline-flex items-center rounded-full border border-[var(--rule-strong)] bg-[var(--panel-strong)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-colors duration-150 hover:bg-[var(--paper)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)]"
                      href="/conference/venue"
                    >
                      {isFrench ? "Voir la page du lieu" : "Open venue page"}
                    </Link>
                  </div>
                </div>
              </article>

              <article className="theme-panel min-w-0 rounded-[8px] p-5 sm:p-8">
                <p className="section-kicker">{isFrench ? "Comment s'inscrire" : "How to Register"}</p>
                <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--accent)]">
                  {isFrench ? "Complétez l'inscription de votre délégation dans MUNager" : "Complete your delegation registration in MUNager"}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {registrationContent.chapters.find((item) => item.href === "/registration/how-to-register")?.summary}
                </p>
                <ol className="mt-5 space-y-3 border-t border-[var(--rule)] pt-5 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                  {registrationContent.steps.map((step, index) => (
                    <li className="grid gap-3 sm:grid-cols-[1.75rem_minmax(0,1fr)]" key={step}>
                      <span className="font-semibold text-[var(--accent)]">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--rule)] pt-5">
                  <LiquidButton href="/registration/how-to-register" label={isFrench ? "Ouvrir le guide" : "Open the guide"} />
                  <Link className="inline-flex items-center border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]" href="/registration/financial-aid">
                    {isFrench ? "Voir l'aide financière" : "View financial aid"}
                  </Link>
                </div>
              </article>
            </section>

            <article className="theme-panel-strong paper-grain min-w-0 rounded-[8px] p-5 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                <div className="mx-auto w-full max-w-[9.5rem] overflow-hidden rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] sm:hidden">
                  <Image
                    alt="Costas Oreopoulos"
                    className="h-auto w-full object-cover"
                    height={210}
                    sizes="(max-width: 639px) 9.5rem, 168px"
                    src="/headshots/costas.jpg"
                    width={168}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="section-kicker">{registrationContent.letter.label}</p>
                  <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--accent)]">{registrationContent.letter.title}</h2>
                  <div className="mt-5 space-y-4 border-t border-[var(--rule)] pt-5 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                    {letterOpeningPreview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <button
                    aria-haspopup="dialog"
                    className="mt-4 text-sm font-semibold text-[var(--accent)]"
                    onClick={() => setIsLetterOpen(true)}
                    type="button"
                  >
                    {isFrench ? "Lire la suite" : "Read more"}
                  </button>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--text)] sm:text-base">
                    {letterClosingPreview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-1 hidden w-[9.5rem] max-w-[28vw] shrink-0 self-start overflow-hidden rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] sm:block sm:mt-2 sm:w-[10.5rem]">
                  <Image
                    alt="Costas Oreopoulos"
                    className="h-auto w-full object-cover"
                    height={210}
                    sizes="(min-width: 1280px) 168px, 28vw"
                    src="/headshots/costas.jpg"
                    width={168}
                  />
                </div>
              </div>

              <div className="mt-6 border-t border-[var(--rule)] pt-4">
                <p className="font-accent text-2xl text-[var(--accent)]">{registrationContent.letter.signature}</p>
                <p className="mt-2 text-xs font-semibold text-[var(--muted)]">{registrationContent.letter.role}</p>
              </div>

              <div className="mt-6 rounded-[8px] border border-[#23379f] bg-[var(--panel-inverse)] px-4 py-5 text-white sm:px-6">
                <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                  <div>
                    <p className="section-kicker text-[#b4caff]">{registrationContent.sections.listserv}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight">
                      {isFrench ? "Recevez les mises à jour de SSUNS directement dans votre boîte de réception" : "Get SSUNS updates straight to your inbox"}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#e4eeff]">{registrationContent.listserv.body}</p>
                  </div>
                  <div className="rounded-[8px] border border-white/14 bg-white/5 p-4 sm:p-5">
                    <ListservSignupForm text={registrationContent.listservForm} />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <SecretaryLetterModal
        body={registrationContent.letter.body}
        email={chargeeEmail}
        imageAlt="Costas Oreopoulos"
        imageSrc="/headshots/costas.jpg"
        kicker={registrationContent.letter.label}
        onClose={() => setIsLetterOpen(false)}
        open={isLetterOpen}
        role={registrationContent.letter.role}
        signature={registrationContent.letter.signature}
        title={registrationContent.letter.title}
      />
    </>
  );
}
