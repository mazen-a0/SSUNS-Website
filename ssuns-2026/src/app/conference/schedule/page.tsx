"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, List, X } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";
import { eventDescription, eventTime, eventTitle, scheduleCategories, scheduleCommitteeBlocs, scheduleDayLabel, scheduleDays, scheduleEvents, timeToMinutes, type ScheduleBloc, type ScheduleDayId, type ScheduleEvent } from "@/content/schedule";
import styles from "./schedule.module.css";

export default function ConferenceSchedulePage() {
  return <Suspense fallback={<div className="page-shell py-12" role="status">SSUNS 2026 · Schedule / Horaire…</div>}><InteractiveSchedule /></Suspense>;
}

function InteractiveSchedule() {
  const { language, conferenceContent, committeesPageContent, registrationContent, aboutContent, committees } = useSiteContent();
  const searchParams = useSearchParams();
  const linkedEventId = searchParams.get("event");
  const fr = language === "fr";
  const [activeDay, setActiveDay] = useState<ScheduleDayId>(() => scheduleEvents.find((item) => item.id === linkedEventId)?.day ?? "thursday");
  const [weekend, setWeekend] = useState(false);
  const [agenda, setAgenda] = useState(false);
  const [bloc, setBloc] = useState<ScheduleBloc | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dismissedLink, setDismissedLink] = useState<string | null>(null);
  const modal = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const selectedEvent = scheduleEvents.find((item) => item.id === (selectedId ?? (linkedEventId !== dismissedLink ? linkedEventId : null)));
  const openId = selectedEvent?.id;
  const days = weekend ? scheduleDays : scheduleDays.filter((day) => day.id === activeDay);
  const visibleEvents = scheduleEvents.filter((item) => bloc === "all" || item.kind !== "session" || item.bloc === bloc);
  const chapter = conferenceContent.chapters.find((item) => item.href === "/conference/schedule");
  // Link labels and summaries follow existing localized content automatically.
  const relatedPages = [...conferenceContent.chapters, ...committeesPageContent.chapters, ...registrationContent.chapters, ...aboutContent.chapters];
  const selectedDay = scheduleDays.find((day) => day.id === selectedEvent?.day);

  useEffect(() => {
    if (!openId) return;
    const dialog = modal.current;
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openId]);

  function openEvent(item: ScheduleEvent, button: HTMLButtonElement) {
    opener.current = button;
    setSelectedId(item.id);
  }

  function blocCommittees(value: ScheduleBloc) {
    return <ul className="space-y-2 text-sm leading-6">{scheduleCommitteeBlocs.filter((entry) => entry.bloc === value).map((entry, index) => {
      const committee = committees.find((item) => item.slug === entry.slug);
      const label = entry.label?.[language] ?? committee?.name;
      return label ? <li key={`${entry.slug ?? "unlinked"}-${index}`}>{committee ? <Link className="text-[var(--accent)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-current" href={`/committees/${committee.slug}`} onClick={() => modal.current?.close()}>{label}</Link> : label}</li> : null;
    })}</ul>;
  }

  function eventButton(item: ScheduleEvent) {
    const minutes = timeToMinutes(item.end) - timeToMinutes(item.start);
    return (
      <button
        aria-haspopup="dialog"
        aria-label={[eventTitle(item, language), eventTime(item), item.location?.[language]].filter(Boolean).join(", ")}
        className={`${styles.event} ${styles[item.kind]} ${item.featured ? styles.featured : ""} ${minutes <= 45 && item.kind !== "doors" ? styles.short : ""}`}
        key={item.id}
        onClick={(event) => openEvent(item, event.currentTarget)}
        style={{ gridRow: `${(timeToMinutes(item.start) - 480) / 15 + 1} / span ${minutes / 15}`, gridColumn: `${item.lane + 1} / span ${item.span}` }}
        type="button"
      >
        <span>{item.kind === "session" ? `${item.session} · BLOC ${item.bloc}` : item.kind === "doors" ? (fr ? "Portes ouvertes" : "Doors open") : eventTitle(item, language)}</span>
        <time>{eventTime(item)}</time>
        {item.location ? <span className={styles.eventLocation}>{item.location[language]}</span> : null}
      </button>
    );
  }

  return (
    <div className="page-shell pt-8 sm:pt-12">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--rule)] pb-5">
        <Link className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href="/conference">← {conferenceContent.title}</Link>
        <p className="section-kicker">SSUNS 2026 / {chapter?.title}</p>
      </header>
      <section className="grid gap-6 py-9 sm:py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p className="section-kicker">12–15 {fr ? "novembre" : "November"} 2026 · Montréal</p>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.7rem,6vw,5.8rem)] leading-[0.98] text-[var(--accent)]">{fr ? "Votre week-end," : "Your weekend,"}<br /><span className="text-[#3478d1]">{fr ? "en un coup d’œil." : "at a glance."}</span></h1>
        </div>
        <div className="max-w-lg lg:pb-1">
          <p className="text-base leading-7 text-[var(--muted)]">{fr ? "Des premières rencontres à la cérémonie de clôture. Sélectionnez un événement pour voir ses détails et les ressources utiles." : "From your first arrivals to the final ceremony. Select any event for details and useful resources."}</p>
          <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-[var(--accent)]"><Clock3 aria-hidden="true" className="h-4 w-4" />{fr ? "Heure locale de Montréal · Format 24 heures" : "Montréal local time · 24-hour clock"}</p>
        </div>
      </section>

      <section aria-label={fr ? "Horaire interactif de la conférence" : "Interactive conference schedule"}>
        <div className="mb-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div aria-label={fr ? "Choisir le jour" : "Choose day"} className="flex flex-wrap gap-2" role="group">
              {scheduleDays.map((day) => <button aria-pressed={!weekend && activeDay === day.id} className={`min-h-12 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${!weekend && activeDay === day.id ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--rule)] bg-white text-[var(--accent)] hover:bg-[#e9effb]"}`} key={day.id} onClick={() => { setActiveDay(day.id); setWeekend(false); }} type="button">{day[language]} <span className="ml-1 opacity-70">{Number(day.date.slice(-2))}</span></button>)}
              <button aria-pressed={weekend} className={`min-h-12 rounded-full border px-4 py-2 text-sm font-semibold ${weekend ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--rule)] bg-white text-[var(--accent)]"}`} onClick={() => setWeekend(true)} type="button">{fr ? "Tout le week-end" : "Full weekend"}</button>
            </div>
            <div aria-label={fr ? "Affichage de l’horaire" : "Schedule display"} className="inline-flex rounded-full border border-[var(--rule)] bg-white p-1" role="group">
              <button aria-pressed={!agenda} className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold ${!agenda ? "bg-[#e1eaff] text-[#142082]" : "text-[var(--muted)]"}`} onClick={() => setAgenda(false)} type="button"><CalendarDays aria-hidden="true" className="h-4 w-4" />{fr ? "Grille" : "Timetable"}</button>
              <button aria-pressed={agenda} className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold ${agenda ? "bg-[#e1eaff] text-[#142082]" : "text-[var(--muted)]"}`} onClick={() => setAgenda(true)} type="button"><List aria-hidden="true" className="h-4 w-4" />Agenda</button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--rule)] pt-4">
            <label className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">{fr ? "Séances de comité" : "Committee sessions"}
              <select className="min-h-11 rounded-lg border border-[var(--rule)] bg-white px-3 text-sm" onChange={(event) => setBloc(event.target.value as ScheduleBloc | "all")} value={bloc}>
                <option value="all">{fr ? "Tous les blocs" : "All blocs"}</option>
                {["A", "B", "C"].map((value) => <option key={value} value={value}>Bloc {value}</option>)}
              </select>
            </label>
            <p className="text-xs text-[var(--muted)]">{fr ? "Les événements communs restent visibles pour tous les blocs." : "Shared events stay visible for every bloc."}</p>
          </div>
        </div>

        <details className="mb-5 rounded-xl border border-[var(--rule)] bg-white px-5 py-4">
          <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">{fr ? "Trouver le bloc de mon comité" : "Find my committee’s bloc"}</summary>
          <div className="mt-5 grid gap-6 md:grid-cols-3">{(["A", "B", "C"] as const).map((value) => <section key={value}><h2 className="mb-3 text-sm font-bold text-[var(--accent)]">Bloc {value}</h2>{blocCommittees(value)}</section>)}</div>
        </details>

        <p aria-live="polite" className="sr-only">{weekend ? (fr ? "Tout le week-end" : "Full weekend") : scheduleDays.find((day) => day.id === activeDay)?.[language]} · {agenda ? "Agenda" : (fr ? "Grille" : "Timetable")}</p>
        {agenda ? (
          <div className={`grid items-start gap-5 ${weekend ? "lg:grid-cols-2" : ""}`}>
            {days.map((day) => <section aria-label={scheduleDayLabel(day, language)} className="overflow-hidden rounded-2xl border border-[var(--rule)] bg-white" key={day.id}>
              <h2 className="bg-[#192181] px-5 py-4 text-lg font-bold text-white">{scheduleDayLabel(day, language)}</h2>
              <ul className="space-y-2 p-3 sm:p-5">{visibleEvents.filter((item) => item.day === day.id).sort((a,b) => timeToMinutes(a.start) - timeToMinutes(b.start)).map((item) => <li key={item.id}><button aria-haspopup="dialog" className={`${styles.agendaEvent} flex min-h-16 w-full items-center justify-between gap-4 rounded-lg bg-[#f2f5fc] px-4 py-3 text-left hover:bg-[#e6edfc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142082]`} data-kind={item.kind} data-featured={item.featured || undefined} onClick={(event) => openEvent(item, event.currentTarget)} type="button"><span><span className="block text-sm font-semibold text-[var(--accent)]">{eventTitle(item, language)}</span><time className="mt-1 block text-xs tabular-nums text-[var(--muted)]">{eventTime(item)}</time>{item.location ? <span className="mt-1 block text-sm font-medium text-[var(--accent)]">{item.location[language]}</span> : null}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--accent)]" /></button></li>)}</ul>
            </section>)}
          </div>
        ) : (
          <div className={styles.board}>
            {!weekend ? <p className="mb-4 pl-3 text-xs text-white/85 sm:hidden">{fr ? "Faites défiler la grille horizontalement, ou choisissez Agenda pour une liste." : "Swipe the timetable sideways, or choose Agenda for a list."}</p> : null}
            {weekend ? <p className="mb-4 pl-3 text-xs text-white/85">{fr ? "Faites défiler horizontalement pour voir tous les jours. Pour un affichage plus grand, choisissez un jour." : "Scroll sideways to see every day. Choose a day for a larger view."}</p> : null}
            <div aria-label={fr ? "Grille horaire de 08:00 à minuit" : "Timetable from 08:00 to midnight"} className={styles.scrollArea} role="region" tabIndex={0}>
              <div className={`${styles.calendar} ${weekend ? styles.weekend : ""}`}>
                <div aria-hidden="true" className={styles.axis}>{Array.from({length:17},(_,i) => <span className={styles.tick} key={i} style={{top:`${i / 16 * 100}%`}}>{i === 16 ? "00:00" : `${String(i+8).padStart(2,"0")}:00`}</span>)}</div>
                {days.map((day) => <section aria-label={scheduleDayLabel(day, language)} className={styles.day} key={day.id}>
                  <div className={styles.dayHeader}><h2>{day[language]}</h2><span>{Number(day.date.slice(-2))} {fr ? "nov." : "Nov"}</span></div>
                  <div className={styles.grid}>{visibleEvents.filter((item) => item.day === day.id).map(eventButton)}</div>
                </section>)}
              </div>
            </div>
          </div>
        )}
        <ul aria-label={fr ? "Légende" : "Legend"} className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[var(--muted)]">{(["session","program","workshop","ceremony","feedback","social"] as const).map((kind) => <li className="flex items-center gap-2" key={kind}><span aria-hidden="true" className={`${styles[kind]} h-3 w-3 rounded-sm`} />{scheduleCategories[kind][language]}</li>)}</ul>
        <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{fr ? "Les heures indiquées suivent l’horaire des délégués. Les salles et les détails du programme seront ajoutés à mesure qu’ils seront confirmés." : "Times follow the delegate schedule. Rooms and programme details will be added as they are confirmed."}</p>
      </section>

      <dialog aria-labelledby="schedule-event-title" className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-2xl border border-[var(--rule)] bg-[var(--panel-strong)] p-0 text-[var(--text)] shadow-2xl backdrop:bg-[#080e30]/70" onClose={() => { setSelectedId(null); setDismissedLink(linkedEventId); opener.current?.focus(); }} ref={modal}>
        {selectedEvent && selectedDay ? <>
          <div className="flex items-start justify-between gap-4 border-b border-[var(--rule)] bg-[#e6edfc] p-5 sm:p-7">
            <div><p className="section-kicker">{scheduleCategories[selectedEvent.kind][language]}</p><h2 className="font-display mt-3 text-3xl leading-tight text-[var(--accent)]" id="schedule-event-title">{eventTitle(selectedEvent, language)}</h2></div>
            <button aria-label={fr ? "Fermer les détails" : "Close event details"} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--accent)] hover:bg-[#d5e1fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142082]" onClick={() => modal.current?.close()} type="button"><X aria-hidden="true" className="h-5 w-5" /></button>
          </div>
          <div className="space-y-6 p-5 sm:p-7">
            <dl className="grid grid-cols-2 gap-4 text-sm"><div><dt className="text-xs text-[var(--muted)]">{fr ? "Jour" : "Day"}</dt><dd className="mt-1 font-semibold">{scheduleDayLabel(selectedDay, language)}</dd></div><div><dt className="text-xs text-[var(--muted)]">{fr ? "Heure de Montréal" : "Montréal time"}</dt><dd className="mt-1 font-semibold tabular-nums">{eventTime(selectedEvent)}</dd></div>{selectedEvent.location ? <div className="col-span-2"><dt className="text-xs text-[var(--muted)]">{fr ? "Lieu" : "Location"}</dt><dd className="mt-1 font-semibold">{selectedEvent.location[language]}</dd></div> : null}</dl>
            <p className="text-base leading-7">{eventDescription(selectedEvent, language)}</p>
            {selectedEvent.bloc ? <div className="rounded-lg bg-[#eaf0fb] p-4"><h3 className="mb-3 text-sm font-bold text-[var(--accent)]">{fr ? "Comités du bloc" : "Committees in Bloc"} {selectedEvent.bloc}</h3>{blocCommittees(selectedEvent.bloc)}</div> : null}
            {selectedEvent.related?.length ? <div className="space-y-3 border-t border-[var(--rule)] pt-5"><p className="section-kicker">{fr ? "Pour préparer cet événement" : "Explore related information"}</p>{selectedEvent.related.map((href) => { const page = relatedPages.find((item) => item.href === href); return page ? <Link className="group block rounded-xl border border-[var(--rule)] p-4 transition-colors hover:bg-[#eaf0fb]" href={href} key={href} onClick={() => modal.current?.close()}><span className="flex items-center justify-between gap-3 text-sm font-semibold text-[var(--accent)]">{page.title}<ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></span><span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{page.summary}</span></Link> : null; })}</div> : null}
          </div>
        </> : null}
      </dialog>
    </div>
  );
}
