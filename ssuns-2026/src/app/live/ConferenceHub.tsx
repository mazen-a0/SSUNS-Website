"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, MapPin } from "lucide-react";
import { useContentBundles } from "@/components/providers/SiteContentProvider";
import { CharityDonateButton } from "@/components/CharityDonateButton";
import { HotelNavigator } from "@/components/venue/HotelNavigator";
import { venueRooms } from "@/content/venueRooms";
import { eventDescription, eventTime, eventTitle, scheduleCommitteeBlocs, scheduleDays, scheduleEvents, type ScheduleDayId } from "@/content/schedule";
import styles from "./live.module.css";
import { committeeSessions, conferenceTime, eventState } from "./liveSchedule";

const tabs = [
  { id: "schedule", label: "Schedule" },
  { id: "committee", label: "Your committee" },
  { id: "charity", label: "Charity" },
  { id: "venue", label: "Hotel map" },
  { id: "gallery", label: "Gallery" },
] as const;
type Tab = typeof tabs[number]["id"];

const storageKey = "ssuns-live-committee";
function subscribeSelection(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("ssuns:committee", callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener("ssuns:committee", callback); };
}
function readSelection() {
  try { return localStorage.getItem(storageKey) ?? ""; } catch { return ""; }
}
function subscribeClock(callback: () => void) {
  const timer = window.setInterval(callback, 15_000);
  window.addEventListener("focus", callback);
  document.addEventListener("visibilitychange", callback);
  return () => {
    window.clearInterval(timer);
    window.removeEventListener("focus", callback);
    document.removeEventListener("visibilitychange", callback);
  };
}
// A primitive snapshot stays stable between ticks and hydrates without a date mismatch.
const clockSnapshot = () => Math.floor(Date.now() / 15_000) * 15_000;
const serverClock = () => 0;

export function ConferenceHub() {
  const { committees, committeesPageContent, registrationContent, conferenceContent, homeContent } = useContentBundles().en;
  const [tab, setTab] = useState<Tab | null>(null);
  const [destinationId, setDestinationId] = useState<string | undefined>();
  const previousTab = useRef(tab);
  useEffect(() => {
    if (previousTab.current !== tab) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("guide-screen-title")?.focus({ preventScroll: true });
    }
    previousTab.current = tab;
  }, [tab]);
  const now = useSyncExternalStore(subscribeClock, clockSnapshot, serverClock);
  const initialDay = now ? scheduleDays.find((item) => item.date === conferenceTime(now).date)?.id ?? "thursday" : "thursday";
  const [selectedDay, setDay] = useState<ScheduleDayId | null>(null);
  const day = selectedDay ?? initialDay;
  const storedSlug = useSyncExternalStore(subscribeSelection, readSelection, () => "");
  const [temporarySlug, setTemporarySlug] = useState<string | null>(null);
  const slug = temporarySlug ?? storedSlug;
  const [mine, setMine] = useState(true);
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState(false);
  const committee = committees.find((item) => item.slug === slug && !item.isArchive);
  const committeeRooms = venueRooms.filter((item) => item.committeeSlug === committee?.slug && committee);
  const showSelection = tab === "schedule" || tab === "committee";
  const bloc = scheduleCommitteeBlocs.find((item) => item.slug === committee?.slug)?.bloc;
  const events = scheduleEvents.filter((item) => item.day === day && (!mine || !bloc || item.kind !== "session" || item.bloc === bloc)).sort((a, b) => a.start.localeCompare(b.start));
  const sessions = committeeSessions(bloc, now);
  const currentDay = now ? scheduleDays.find((item) => item.date === conferenceTime(now).date) : undefined;
  const visibleCommittees = committees.filter((item) => !item.isArchive && `${item.name} ${item.topic}`.toLowerCase().includes(query.toLowerCase()));
  const relatedChapters = [...conferenceContent.chapters, ...committeesPageContent.chapters, ...registrationContent.chapters];
  function selectCommittee(value: string) {
    setTemporarySlug(value); setSaved(false); setDestinationId(undefined);
    setMine(Boolean(scheduleCommitteeBlocs.find((item) => item.slug === value)));
    try { localStorage.setItem(storageKey, value); window.dispatchEvent(new Event("ssuns:committee")); setTemporarySlug(null); setSaved(Boolean(value)); } catch { /* Do not promise persistence when storage is unavailable. */ }
  }
  if (tab === null) return <div className={`${styles.hub} ${styles.welcome}`}>
    <div className={styles.welcomeContent}>
      <Image className={styles.welcomeLogo} src="/logos/ssuns-dove-white.png" alt="SSUNS dove and laurel logo" width={500} height={500} sizes="90px" priority />
      <h1 id="guide-screen-title" tabIndex={-1}><span>Welcome to</span>SSUNS 2026</h1>
      <p>What can we help you with?</p>
      <nav className={styles.welcomeChoices} aria-label="Conference guide">
        {tabs.map(({ id, label }) => <button key={id} onClick={() => setTab(id)}><span>{label}</span><ChevronRight aria-hidden="true" size={19} strokeWidth={1.5} /></button>)}
      </nav>
    </div>
  </div>;
  return <div className={styles.hub}>
    <header className={`${styles.header} ${styles.guideHeader}`}>
      <button className={styles.backToGuide} onClick={() => setTab(null)}><ArrowLeft aria-hidden="true" size={16} strokeWidth={1.5} /> Back to guide</button>
      <h1 id="guide-screen-title" tabIndex={-1} className={styles.detailTitle}>{tabs.find((item) => item.id === tab)?.label}</h1>
    </header>
    <div className={`${styles.workspace} ${!showSelection ? styles.singlePanel : ""}`}>
      {showSelection && <aside className={styles.selection}>
        <p className={styles.eyebrow}>DELEGATE INFORMATION</p>
        <label htmlFor="my-committee">{committee ? "Your committee" : "Select your committee"}</label>
        <select id="my-committee" value={committee?.slug ?? ""} onChange={(e) => selectCommittee(e.target.value)}><option value="">Choose a committee</option>{committees.filter((item) => !item.isArchive).map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select>
        <p className={styles.storageMessage} aria-live="polite">{committee ? `${bloc ? `Bloc ${bloc}` : "No delegate bloc listed"}${saved ? " · Saved on this device" : ""}` : "See your session times and committee resources."}</p>
        {committee && <div className={styles.committeeStatus}>
          <h2>{committee.name}</h2>
          <div className={styles.committeeRooms}>{committeeRooms.length ? committeeRooms.map((item) => <button key={item.id} onClick={() => { setDestinationId(item.id); setTab("venue"); }}><MapPin size={16} aria-hidden="true" /><span><strong>{item.room} · Level {item.floor}</strong>{item.side && <small>{item.side}</small>}</span><span aria-hidden="true">↗</span></button>) : <p className={styles.storageMessage}>Room assignment to be confirmed</p>}</div>
          <div className={styles.liveInfo} aria-live="polite" aria-atomic="true">
            {now > 0 && sessions.current ? <><p className={styles.statusLabel}><span className={styles.liveDot} />In session</p><h3>{eventTitle(sessions.current, "en")}</h3><p>Until {sessions.current.end} · Montréal</p></> : <><p className={styles.statusLabel}>{sessions.finished ? "Sessions complete" : sessions.next ? "Next session" : "Session information"}</p>{sessions.next ? <><h3>{eventTitle(sessions.next, "en")}</h3><p>{scheduleDays.find((item) => item.id === sessions.next?.day)?.en} {scheduleDays.find((item) => item.id === sessions.next?.day)?.date.slice(-2)} Nov · {eventTime(sessions.next)}</p></> : <p>{sessions.finished ? "All scheduled sessions for your bloc have ended." : "See your committee page for further information."}</p>}</>}
          </div>
          <Link className={styles.resource} href={`/committees/${committee.slug}`}>Committee details & resources ↗</Link>
        </div>}
        <div className={styles.asideLinks}><Link href="/conference/delegate-resource-center">Delegate Resource Centre <span>↗</span></Link><Link href="/committees/policies">Committee policies <span>↗</span></Link></div>
      </aside>}
      <section id="guide-content" className={styles.panel} aria-label={tabs.find((item) => item.id === tab)?.label}>
        {tab === "schedule" && <><div className={styles.heading}><div><p className={styles.eyebrow}>CONFERENCE PROGRAMME</p><h2>Schedule</h2></div><Link href="/conference/schedule">Full timetable ↗</Link></div><p className={styles.muted}>All times Montréal · Eastern Time{currentDay ? " · Session status updates automatically" : ""}</p><div className={styles.days} aria-label="Conference day">{scheduleDays.map((item) => <button key={item.id} aria-pressed={day === item.id} onClick={() => setDay(item.id)}>{item.en.slice(0, 3)}<strong>{Number(item.date.slice(-2))}</strong></button>)}</div><label className={styles.filter}><input type="checkbox" checked={mine && Boolean(bloc)} disabled={!bloc} onChange={(e) => setMine(e.target.checked)} /> My bloc + shared events</label>{!bloc && <p className={styles.muted}>Select a committee with an assigned delegate bloc to filter sessions.</p>}<div>{events.map((item) => <details className={styles.event} data-status={now ? eventState(item, now) : "upcoming"} key={item.id}><summary><span className={styles.time}>{eventTime(item)}</span><span>{eventTitle(item, "en")}<small>{now && eventState(item, now) === "now" ? "Happening now" : now && eventState(item, now) === "ended" ? "Ended" : item.kind === "session" ? "Committee session" : item.kind}</small></span><span aria-hidden="true">+</span></summary><p>{eventDescription(item, "en")}</p>{item.related?.map((href) => <Link className={styles.resource} href={href} key={href}>{relatedChapters.find((chapter) => chapter.href === href)?.title ?? "Event information"} ↗</Link>)}</details>)}</div></>}
        {tab === "committee" && <><p className={styles.eyebrow}>COMMITTEE INFORMATION</p><h2>{committee?.name ?? "Find your committee"}</h2>{committee ? <><p>{committee.blurb}</p><Link className={styles.action} href={`/committees/${committee.slug}`}>Committee details & resources ↗</Link><button className={styles.secondary} onClick={() => { setMine(Boolean(bloc)); setTab("schedule"); }}>View schedule</button></> : <p>Use the committee selector above to bring your committee details and session bloc together.</p>}<details className={styles.directory} key={committee?.slug ?? "none"} open={!committee}><summary>Browse committees</summary><label className={styles.search}>Search all committees<input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Committee name or topic" /></label><div className={styles.committees}>{visibleCommittees.length === 0 && <p>No committees match “{query}”.</p>}{visibleCommittees.map((item) => <button aria-pressed={slug === item.slug} key={item.slug} onClick={() => selectCommittee(item.slug)}>{item.name}<small>{item.level}</small></button>)}</div></details></>}
        {tab === "charity" && <div className={styles.charitySection}>
          <div className={styles.charityIntro}><Image src="/logos/warchild.png" alt="War Child" width={1500} height={784} className={styles.charityLogo} /><p className={styles.eyebrow}>OUR 2026 CHARITY PARTNER</p><h2>War Child</h2><p>Community-driven humanitarian action for war-affected women and children.</p><Link className={styles.resource} href="/conference/charity-partner">Meet our charity partner ↗</Link></div>
          <div className={styles.donationPanel}><p className={styles.eyebrow}>SSUNS × WAR CHILD</p><h3>Support our fundraiser.</h3><CharityDonateButton /></div>
        </div>}
        {tab === "venue" && <HotelNavigator key={destinationId ?? committee?.slug ?? "all"} committees={committees} initialRoomId={destinationId ?? committeeRooms[0]?.id} />}
        {tab === "gallery" && <><p className={styles.eyebrow}>PHOTOGRAPHS</p><h2>Gallery</h2><p>From the SSUNS photo archive.</p><div className={styles.gallery}>{homeContent.gallery.items.map((item) => <figure key={item.id}><Image src={item.src} alt={item.alt} width={700} height={460} loading="lazy" /><figcaption>{item.caption}</figcaption></figure>)}</div></>}
      </section>
    </div>
    <footer className={styles.footer}><span>SSUNS 2026 · Montréal</span><Link href="/">Visit the SSUNS website ↗</Link></footer>
  </div>;
}
