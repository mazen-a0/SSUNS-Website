"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ScholarshipApplication, scholarshipApplicationUrl } from "@/components/scholarship/ScholarshipApplication";
import { useSiteContent } from "@/lib/useSiteContent";

const deadline = "2026-11-06T23:59:00-05:00";
const sectionIds = ["eligibility", "selection", "process"] as const;
const panelLayout = "grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14";
const panelHeading = "font-display max-w-lg text-3xl leading-tight text-[var(--accent)] sm:text-4xl";
const actionStyle = "inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0e185e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] motion-reduce:transition-none";

export default function ExcellenceScholarshipPage() {
  const { conferenceContent, language } = useSiteContent();
  const copy = conferenceContent.excellenceScholarship;
  const [activeSection, setActiveSection] = useState<(typeof sectionIds)[number]>("eligibility");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const informationRef = useRef<HTMLDivElement>(null);

  function selectSection(id: (typeof sectionIds)[number]) {
    setActiveSection(id);
    const information = informationRef.current;
    if (information && information.getBoundingClientRect().top < 0) {
      information.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % sectionIds.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + sectionIds.length - 1) % sectionIds.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = sectionIds.length - 1;
    else return;
    event.preventDefault();
    selectSection(sectionIds[next]);
    tabRefs.current[next]?.focus({ preventScroll: true });
  }

  return (
    <div className="page-shell pt-6 sm:pt-8" lang={language}>
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--rule)] pb-4">
        <Link className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" href="/conference">← {conferenceContent.title}</Link>
        <p className="section-kicker">{copy.navTitle}</p>
      </header>

      <section aria-labelledby="scholarship-title" className="grid gap-8 py-8 sm:py-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12">
        <div>
          <p className="section-kicker mb-4">SSUNS 2026</p>
          <h1 aria-label={copy.title} className="font-display text-[clamp(2.25rem,7.3vw,6rem)] leading-[0.98] text-[var(--accent)]" id="scholarship-title">
            <span className="block">{copy.headline.first}</span>
            <span className="block text-[#2f70c5]">{copy.headline.second}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">{copy.intro}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a className={actionStyle} href={scholarshipApplicationUrl} rel="noopener noreferrer" target="_blank">{copy.applyLabel}<span className="sr-only"> — {copy.application.openForm}</span></a>
            <a className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--accent)] underline decoration-[var(--accent-2)] underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" href="#apply">{copy.application.onPageLabel}</a>
          </div>
        </div>
        <aside aria-label={copy.award} className="rounded-tl-lg rounded-tr-[3.5rem] rounded-b-lg bg-[var(--accent)] px-6 py-7 text-white sm:px-8 sm:py-9 lg:rounded-tr-[5rem]">
          <p className="text-sm font-semibold text-[#c6dcff]">{copy.awardDetail.label}</p>
          <p className="font-display mt-2 text-[clamp(3.8rem,7.8vw,7rem)] leading-none tracking-tight">{copy.awardDetail.amount}</p>
          <p className="mt-1 text-lg text-[#c6dcff]">{copy.awardDetail.each}</p>
          <p className="mt-5 max-w-md text-base leading-7 text-white/90">{copy.awardDescription}</p>
          <div className="mt-6 border-t border-white/25 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#c6dcff]">{copy.deadlineLabel}</p>
            <time className="mt-2 block text-sm leading-6" dateTime={deadline}>{copy.deadline}</time>
          </div>
        </aside>
      </section>

      <div ref={informationRef} style={{ scrollMarginTop: "calc(var(--site-sticky-top) + 2rem)" }}>
        <div aria-label={copy.sectionsLabel} className="sticky top-[calc(var(--site-sticky-top)+2rem)] z-20 flex border-y border-[var(--rule)] bg-[var(--bg)]" role="tablist">
          {sectionIds.map((id, index) => <button
            aria-controls={`scholarship-panel-${id}`}
            aria-selected={activeSection === id}
            className={`min-h-14 flex-1 border-b-2 px-2 py-3 text-center text-xs font-semibold leading-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--accent)] sm:flex-none sm:px-6 sm:text-sm ${activeSection === id ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--muted)] hover:text-[var(--accent)]"}`}
            id={`scholarship-tab-${id}`}
            key={id}
            onClick={() => selectSection(id)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
            ref={(node) => { tabRefs.current[index] = node; }}
            role="tab"
            tabIndex={activeSection === id ? 0 : -1}
            type="button"
          >{copy.tabs[id]}</button>)}
        </div>

        <div className="py-7 sm:py-9">
          <section aria-labelledby="scholarship-tab-eligibility" hidden={activeSection !== "eligibility"} id="scholarship-panel-eligibility" role="tabpanel" tabIndex={0} className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
            <div className={panelLayout}>
              <div>
                <h2 className={panelHeading}>{copy.eligibility.title}</h2>
                <p className="mt-4 max-w-lg text-lg leading-8 text-[var(--accent)]">{copy.eligibility.intro}</p>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--muted)]">{copy.eligibility.criteriaIntro}</p>
              </div>
              <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {copy.eligibility.criteria.map((criterion) => <li key={criterion.title}>
                  <Reveal className="border-t border-[var(--rule)] pt-4">
                    <h3 className="text-base font-semibold leading-6 text-[var(--accent)]">{criterion.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)] sm:text-base">{criterion.description}</p>
                  </Reveal>
                </li>)}
              </ul>
            </div>
          </section>

          <section aria-labelledby="scholarship-tab-selection" hidden={activeSection !== "selection"} id="scholarship-panel-selection" role="tabpanel" tabIndex={0} className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
            <div className={panelLayout}>
              <div>
                <h2 className={panelHeading}>{copy.fairness.title}</h2>
                <p className="mt-4 max-w-lg text-lg leading-8 text-[var(--accent)]">{copy.fairness.lead}</p>
              </div>
              <div className="max-w-3xl space-y-4 text-base leading-7 text-[var(--text)]">{copy.fairness.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </div>
          </section>

          <section aria-labelledby="scholarship-tab-process" hidden={activeSection !== "process"} id="scholarship-panel-process" role="tabpanel" tabIndex={0} className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
            <div className={panelLayout}>
              <h2 className={panelHeading}>{copy.process.title}</h2>
              <ol className="max-w-3xl divide-y divide-[var(--rule)]">
                {copy.process.stages.map((stage, index) => <li className="py-5 first:pt-0 last:pb-0" key={stage.title}>
                  <h3 className="text-lg font-semibold leading-7 text-[var(--accent)]">{stage.title}</h3>
                  <div className="mt-2 space-y-3 text-base leading-7 text-[var(--text)]">{stage.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                  {index === 0 ? <time className="mt-3 block text-base font-semibold leading-7 text-[var(--accent)]" dateTime={deadline}>{copy.deadline}</time> : null}
                </li>)}
              </ol>
            </div>
          </section>
        </div>
      </div>

      <section aria-labelledby="application-title" className="border-t border-[var(--rule)] pt-8 sm:pt-10" id="apply" style={{ scrollMarginTop: "calc(var(--site-sticky-top) + 2rem)" }}>
        <div className={panelLayout}>
          <h2 className={panelHeading} id="application-title">{copy.application.title}</h2>
          <div>
            <p className="max-w-3xl text-base leading-7 text-[var(--text)]">{copy.application.intro}</p>
            <a className={`${actionStyle} mt-5`} href={scholarshipApplicationUrl} rel="noopener noreferrer" target="_blank">{copy.application.openForm}</a>
          </div>
        </div>
        <div className="mx-auto mt-7 max-w-5xl sm:mt-8"><ScholarshipApplication copy={copy.application} /></div>
      </section>
    </div>
  );
}
