"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { ScrollSpyStepper } from "@/components/ScrollSpyStepper";
import { useSiteContent } from "@/lib/useSiteContent";

function getPhaseHeadline(title: string) {
  const parts = title.split(":");
  return parts.length > 1 ? parts.slice(1).join(":").trim() : title;
}

export default function RegistrationHowToRegisterPage() {
  const { language, registrationContent } = useSiteContent();
  const chapter = registrationContent.chapters.find((item) => item.href === "/registration/how-to-register");
  const feesChapter = registrationContent.chapters.find((item) => item.href === "/registration/fees");
  const aidChapter = registrationContent.chapters.find((item) => item.href === "/registration/financial-aid");
  const isFrench = language === "fr";
  const guide = registrationContent.howToGuide;

  if (!chapter) return null;

  const steps = guide.phases.map((phase) => ({
    id: phase.id,
    label: String(phase.number),
    title: `${isFrench ? "Phase" : "Phase"} ${phase.number}`,
  }));

  const labels = {
    phase: isFrench ? "Phase" : "Phase",
    openGuide: guide.openGuideLabel,
    launchRegistration: isFrench ? "Ouvrir l'inscription" : "Open registration",
    watchOnYoutube: isFrench ? "Voir sur YouTube" : "Watch on YouTube",
    afterGuide: isFrench ? "Après le guide" : "After the guide",
    afterGuideCopy: isFrench
      ? "Passez ensuite à l'inscription, aux frais et à l'aide financière afin de finaliser votre délégation."
      : "Then move into registration, fees, and financial aid to finish your delegation setup.",
    fees: feesChapter?.title ?? (isFrench ? "Frais" : "Fees"),
    feesCopy: feesChapter?.summary ?? (isFrench ? "Consultez les frais et les dates d'inscription." : "Review the registration fees and dates."),
    aid: aidChapter?.title ?? (isFrench ? "Aide financière" : "Financial Aid"),
    aidCopy:
      aidChapter?.summary ??
      (isFrench ? "Vérifiez les fenêtres d'aide financière et les échéances de facturation." : "Review financial-aid windows and invoice deadlines."),
  };

  return (
    <Section className="bg-white pb-16 pt-10 sm:pt-12" spacing="none">
      <Container className="max-w-[1220px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--rule)] bg-[var(--panel)] px-4 py-2 text-center text-sm text-[var(--muted)] shadow-[var(--shadow-soft)]">
            <span className="font-semibold text-[var(--accent)]">{guide.courtesy}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--accent-2)]" />
            <Image alt="MUNager logo" height={20} src="/logos/munager.png" width={92} />
          </div>
          <h1 className="mt-6 font-display text-[2.4rem] leading-[0.96] text-[var(--accent)] sm:text-6xl">{guide.title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{guide.intro}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Link
              className="inline-flex items-center justify-center rounded-[8px] border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#1b2ea3]"
              href={registrationContent.cta.href}
              rel="noreferrer"
              target="_blank"
            >
              {labels.launchRegistration}
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-[8px] border border-[var(--rule)] bg-white px-4 py-2.5 font-semibold text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)]"
              href="https://munager.com/apply-guide/"
              rel="noreferrer"
              target="_blank"
            >
              {labels.openGuide}
            </Link>
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <ScrollSpyStepper steps={steps} />
        </div>

        <div className="mt-10 md:grid md:grid-cols-[6.5rem_minmax(0,1fr)] md:items-start md:gap-8 lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden md:block md:h-fit md:self-start md:sticky md:top-[calc(var(--site-sticky-top)+2.1rem)]">
            <div className="flex justify-center border-r border-[var(--rule)] pr-4 lg:pr-6">
              <ScrollSpyStepper steps={steps} />
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mx-auto max-w-[980px]">
              {guide.phases.map((phase) => {
                const phaseHeadline = getPhaseHeadline(phase.title);

                return (
                  <section className="scroll-mt-28 pb-14 last:pb-0" id={phase.id} key={phase.id}>
                    <div className="border-b border-[var(--rule)] pb-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                        {labels.phase} {phase.number}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold leading-tight text-[var(--heading)] sm:text-[2rem]">{phaseHeadline}</h2>
                    </div>

                    <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,31rem)_minmax(0,1fr)] xl:items-start">
                      <div>
                        <div className="overflow-hidden rounded-[16px] border border-[var(--rule)] bg-[var(--paper)] shadow-[var(--shadow-soft)]">
                          <div className="video-embed rounded-none border-0 bg-[var(--paper-deep)]">
                            <iframe
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              referrerPolicy="strict-origin-when-cross-origin"
                              src={`https://www.youtube.com/embed/${phase.videoId}`}
                              title={`${phase.title} video`}
                            />
                          </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Link
                            className="inline-flex items-center border-b border-[var(--accent-2)] pb-1 text-sm font-semibold text-[var(--accent)]"
                            href={`https://www.youtube.com/watch?v=${phase.videoId}`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {labels.watchOnYoutube}
                          </Link>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {phase.steps.map((step, index) => (
                          <article
                            className="rounded-[12px] border border-[var(--rule)] bg-white p-4 shadow-[var(--shadow-soft)]"
                            key={`${phase.id}-${step.title}`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--rule)] bg-[var(--panel)] text-sm font-semibold text-[var(--accent)]">
                                {index + 1}
                              </span>
                              <div className="min-w-0">
                                <h3 className="text-base font-semibold leading-tight text-[var(--heading)]">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </section>
                );
              })}

              <section className="mt-2 grid gap-4 rounded-[16px] border border-[var(--rule)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)] sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(15rem,0.9fr)] lg:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">{labels.afterGuide}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">{labels.afterGuideCopy}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <Link
                    className="rounded-[12px] border border-[var(--rule)] bg-white px-4 py-3 text-sm font-semibold text-[var(--heading)] shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--accent)]"
                    href={registrationContent.cta.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {labels.launchRegistration}
                  </Link>
                  <Link
                    className="rounded-[12px] border border-[var(--rule)] bg-white px-4 py-3 text-sm font-semibold text-[var(--heading)] shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--accent)]"
                    href={feesChapter?.href ?? "/registration/fees"}
                  >
                    <span className="block">{labels.fees}</span>
                    <span className="mt-1 block text-xs font-normal leading-relaxed text-[var(--muted)]">{labels.feesCopy}</span>
                  </Link>
                  <Link
                    className="rounded-[12px] border border-[var(--rule)] bg-white px-4 py-3 text-sm font-semibold text-[var(--heading)] shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--accent)]"
                    href={aidChapter?.href ?? "/registration/financial-aid"}
                  >
                    <span className="block">{labels.aid}</span>
                    <span className="mt-1 block text-xs font-normal leading-relaxed text-[var(--muted)]">{labels.aidCopy}</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
