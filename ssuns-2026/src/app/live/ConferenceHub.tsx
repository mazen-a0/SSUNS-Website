"use client";

import { useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, ChevronRight, CircleHelp, Map, MapPin, Search, UsersRound, Utensils, X, HeartHandshake } from "lucide-react";
import { useContentBundles } from "@/components/providers/SiteContentProvider";
import { CharityDonateButton } from "@/components/CharityDonateButton";
import { HotelNavigator } from "@/components/venue/HotelNavigator";
import { charityPartner } from "@/content/charityPartner";
import { venueRooms } from "@/content/venueRooms";
import { eventDescription, eventTime, eventTitle, scheduleCommitteeBlocs, scheduleDays, scheduleEvents, type ScheduleDayId, type ScheduleEvent } from "@/content/schedule";
import { diningGroups, walkingDirections } from "./dining";
import { eventDestinations, mapHref, readMapDestination } from "./destinations";
import { closeGuideSheet, GuideLink, useGuideHash } from "./guideNavigation";
import { chronological, committeeSessions, conferenceTime, eventState, happeningNow } from "./liveSchedule";
import styles from "./live.module.css";

const tabs = [
  { id: "schedule", label: "Schedule", Icon: CalendarDays },
  { id: "hotel-map", label: "Map", Icon: Map },
  { id: "home", label: "Home", Icon: null },
  { id: "dining", label: "Food", Icon: Utensils },
  { id: "charity", label: "Charity", Icon: HeartHandshake },
] as const;
type Screen = typeof tabs[number]["id"];

const storageKey = "ssuns-live-committee";
const selectionEvent = "ssuns:committee";
const emptySnapshot = () => "";
const dayFor = (event: ScheduleEvent) => scheduleDays.find((item) => item.id === event.day)!;
const dateFormat = new Intl.DateTimeFormat("en-CA", { month: "long", day: "numeric", timeZone: "UTC" });
const localDate = (date: string) => dateFormat.format(new Date(date));
const eventDate = (event: ScheduleEvent) => `${dayFor(event).en}, ${localDate(dayFor(event).date)}`;
const orderedEvents = [...scheduleEvents].sort(chronological);
const noEvents: ScheduleEvent[] = [];

function subscribeSelection(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(selectionEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(selectionEvent, callback);
  };
}
function readSelection() {
  try { return localStorage.getItem(storageKey) ?? ""; } catch { return ""; }
}
function subscribeClock(callback: () => void) {
  const timer = window.setInterval(callback, 5_000);
  window.addEventListener("focus", callback);
  document.addEventListener("visibilitychange", callback);
  return () => {
    window.clearInterval(timer);
    window.removeEventListener("focus", callback);
    document.removeEventListener("visibilitychange", callback);
  };
}
const clockSnapshot = () => Math.floor(Date.now() / 60_000) * 60_000;
const serverClock = () => 0;
const sheetHref = (screen: Screen, sheet: "committee" | "resources") => `#${screen}?sheet=${sheet}`;

function GuideSheet({ title, children, close, opener }: {
  title: string; children: ReactNode; close: () => void; opener: HTMLElement | null;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useLayoutEffect(() => {
    const modal = ref.current;
    if (!modal) return;
    modal.showModal();
    return () => {
      modal.close();
      if (opener?.isConnected && !opener.closest("[inert]")) opener.focus({ preventScroll: true });
    };
  }, [opener]);
  return <dialog ref={ref} className={styles.sheet} aria-labelledby="guide-sheet-title"
    onCancel={(event) => { event.preventDefault(); close(); }}
    onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
    <div className={styles.sheetSurface}>
      <header className={styles.sheetHeader}>
        <h2 id="guide-sheet-title">{title}</h2>
        <button type="button" className={styles.iconButton} onClick={close} aria-label="Close"><X size={22} aria-hidden="true" /></button>
      </header>
      <div className={styles.sheetBody}>{children}</div>
    </div>
  </dialog>;
}

export function ConferenceHub() {
  const { committees, committeesPageContent, registrationContent, conferenceContent } = useContentBundles().en;
  const hash = useGuideHash();
  const [route, rawParams] = hash.split("?", 2);
  const params = new URLSearchParams(rawParams);
  const screen = tabs.find(({ id }) => id === (route === "venue" ? "hotel-map" : route))?.id ?? "home";
  const selectedEvent = orderedEvents.find((item) => item.id === params.get("event"));
  const showPicker = route === "committee" || params.get("sheet") === "committee";
  const showResources = params.get("sheet") === "resources";
  const sheetKey = selectedEvent?.id ?? (showPicker ? "committee" : showResources ? "resources" : "");
  const now = useSyncExternalStore(subscribeClock, clockSnapshot, serverClock);
  const storedSlug = useSyncExternalStore(subscribeSelection, readSelection, emptySnapshot);
  const [temporarySlug, setTemporarySlug] = useState<string | null>(null);
  const [selectedDay, setDay] = useState<ScheduleDayId | null>(null);
  const [mine, setMine] = useState(true);
  const [query, setQuery] = useState("");
  const [foodGroup, setFoodGroup] = useState(0);
  const [mapOpened, setMapOpened] = useState(false);
  if (screen === "hotel-map" && !mapOpened) setMapOpened(true);
  const panes = useRef<Partial<Record<Screen, HTMLElement | null>>>({});
  const previousScreen = useRef<Screen>("home");
  const mapNavigation = useRef("");
  const [sheetOpener, setSheetOpener] = useState<HTMLElement | null>(null);

  const committee = committees.find((item) => item.slug === (temporarySlug ?? storedSlug) && !item.isArchive);
  const rooms = committee ? venueRooms.filter((item) => item.committeeSlug === committee.slug) : [];
  const bloc = committee ? scheduleCommitteeBlocs.find((item) => item.slug === committee.slug)?.bloc : undefined;
  const today = now ? conferenceTime(now).date : "";
  const currentDay = scheduleDays.find((item) => item.date === today);
  const day = selectedDay ?? currentDay?.id ?? (today > scheduleDays.at(-1)!.date ? scheduleDays.at(-1)!.id : scheduleDays[0].id);
  const displayedDay = scheduleDays.find((item) => item.id === day)!;
  const live = now ? happeningNow(now, bloc) : null;
  const sessions = committeeSessions(bloc, now);
  const nextSession = sessions.next ?? sessions.current;
  const events = orderedEvents.filter((item) => item.day === day && (!mine || !bloc || item.kind !== "session" || item.bloc === bloc));
  const upcoming = live?.status === "now" ? orderedEvents.find((item) =>
    (item.kind !== "session" || !bloc || item.bloc === bloc) && eventState(item, now) === "upcoming") : undefined;
  const upcomingGroup = upcoming ? orderedEvents.filter((item) => chronological(item, upcoming) === 0 &&
    (item.kind !== "session" || !bloc || item.bloc === bloc)) : noEvents;
  const lead = live?.events[0];
  const additional = live?.events.slice(1) ?? noEvents;
  const relatedPages = [...conferenceContent.chapters, ...committeesPageContent.chapters, ...registrationContent.chapters];
  const destination = readMapDestination(screen === "hotel-map" ? params : new URLSearchParams());
  const mapTarget = destination.floor ? mapHref({ floor: destination.floor, room: destination.room }) : "";
  const baseHref = mapTarget || `#${screen}`;
  const resourcesHref = `${baseHref}${baseHref.includes("?") ? "&" : "?"}sheet=resources`;
  const committeeMatches = showPicker
    ? committees.filter((item) => !item.isArchive && `${item.name} ${item.topic}`.toLowerCase().includes(query.trim().toLowerCase()))
    : [];
  const leadPlace = lead ? location(lead) : undefined;
  const leadMaps = lead ? eventDestinations(lead, rooms, bloc) : [];
  const defaultRoom = !destination.floor && rooms.length === 1 ? rooms[0] : undefined;

  useLayoutEffect(() => {
    const pane = panes.current[screen];
    if (mapTarget && mapTarget !== mapNavigation.current && pane) pane.scrollTop = 0;
    mapNavigation.current = mapTarget;
    if (previousScreen.current !== screen && !sheetKey) {
      const title = pane?.querySelector<HTMLElement>("h1");
      (pane?.scrollTop ? pane : title ?? pane)?.focus({ preventScroll: true });
    }
    previousScreen.current = screen;
  }, [screen, mapTarget, sheetKey]);

  function selectCommittee(slug: string) {
    setMine(true);
    try {
      localStorage.setItem(storageKey, slug);
      setTemporarySlug(null);
      window.dispatchEvent(new Event(selectionEvent));
    } catch {
      setTemporarySlug(slug);
    }
    closeGuideSheet(baseHref);
  }

  function location(event: ScheduleEvent) {
    if (event.location?.en) {
      const place = event.location.en;
      const match = eventDestinations(event, [])[0];
      return match?.room && !/floor|level/i.test(place) ? `${place} · Level ${match.floor}` : place;
    }
    if (event.kind !== "session" || event.bloc !== bloc || !rooms.length) return undefined;
    const names = rooms.map((room) => room.room).join(" / ");
    return rooms.every((room) => room.floor === rooms[0].floor) ? `${names} · Level ${rooms[0].floor}` : names;
  }

  function rememberOpener(event: React.MouseEvent<HTMLAnchorElement>) {
    setSheetOpener(event.currentTarget);
  }
  function pickerLink(from: Screen, label: string, className?: string, replace = false) {
    return <GuideLink href={sheetHref(from, "committee")} mode={replace ? "switch-sheet" : "sheet"} className={className}
      onClick={(event) => { setQuery(""); if (!replace) rememberOpener(event); }}>{label}</GuideLink>;
  }
  function eventLink(event: ScheduleEvent, from: Screen, children: ReactNode, className?: string, keepOpener = false) {
    return <GuideLink href={`#${from}?event=${encodeURIComponent(event.id)}`} mode="sheet" className={className}
      onClick={keepOpener ? undefined : rememberOpener}>{children}</GuideLink>;
  }
  function eventList(items: ScheduleEvent[], from: Screen, insideSheet = false) {
    return <ol className={styles.eventList}>{items.map((event) => {
      const active = now > 0 && eventState(event, now) === "now";
      const place = location(event);
      return <li key={event.id} data-live={active || undefined}>
        {eventLink(event, from, <>
          <span className={styles.eventTime}><strong>{event.start}</strong><small>{event.end === "24:00" ? "00:00" : event.end}</small></span>
          <span className={styles.eventText}>
            <strong>{eventTitle(event, "en")}</strong>
            {place && <small>{place}</small>}
            {active && from === "schedule" && <small className={styles.inProgress}>In progress</small>}
          </span>
          <ChevronRight aria-hidden="true" size={16} />
        </>, styles.eventRow, insideSheet)}
      </li>;
    })}</ol>;
  }
  function pane(id: Screen, children: ReactNode) {
    return <section id={`guide-${id}`} ref={(element) => { panes.current[id] = element; }}
      tabIndex={-1} aria-labelledby={`guide-${id}-title`} inert={screen !== id} data-current={screen === id}
      className={`${styles.pane} ${id === "home" ? styles.homePane : ""}`}>{children}</section>;
  }

  return <div className={styles.guide}>
    <header className={styles.masthead}>
      <GuideLink href="#home" className={styles.lockup} aria-label="SSUNS Pocket Guide home">
        <span className={styles.wordmark}><Image src="/logos/ssuns2026-woodmark-white.png" alt="SSUNS 2026" width={500} height={500} sizes="142px" priority /></span>
        <span className={styles.productName}>Pocket Guide</span>
      </GuideLink>
      <GuideLink href={resourcesHref} mode="sheet" onClick={rememberOpener} className={styles.resourcesAction}>
        <CircleHelp size={17} aria-hidden="true" /> Resources
      </GuideLink>
    </header>

    <div className={styles.stage}>
      {pane("home", <div className={styles.home}>
        <div className={styles.liveSpread}>
          <div className={styles.livePrimary}>
            <h1 id="guide-home-title" tabIndex={-1} className={styles.liveHeading}>
              {live?.status === "now" && <span className={styles.signal} aria-hidden="true" />}
              {live?.status === "now" ? "Happening now" : live?.status === "ended" ? "Conference complete" : "Up next"}
            </h1>
            {lead ? <>
              {eventLink(lead, "home", <>{eventTitle(lead, "en")}<ArrowRight size={21} aria-hidden="true" /></>, styles.leadTitle)}
              <p className={styles.leadTime}>{live?.status === "upcoming" && dayFor(lead).date !== today ? `${dayFor(lead).en} · ` : ""}{eventTime(lead)}</p>
              {leadPlace && (leadMaps.length === 1 ? <GuideLink className={styles.leadPlace} href={mapHref(leadMaps[0])}>
                <MapPin size={15} aria-hidden="true" />{leadPlace}<ArrowUpRight size={13} aria-hidden="true" />
              </GuideLink> : leadMaps.length > 1 ? eventLink(lead, "home", <><MapPin size={15} aria-hidden="true" />{leadPlace}<ChevronRight size={13} aria-hidden="true" /></>, styles.leadPlace)
                : <p className={styles.leadPlace}>{leadPlace}</p>)}
            </> : <p className={styles.emptyLive}>{live ? "There are no more scheduled events." : "Checking the Montréal schedule…"}</p>}
          </div>
          <div className={styles.conferencePhoto}>
            <Image src="/photos/delegates-1600x1067.jpg" alt="" fill sizes="(min-width: 900px) 330px, (min-width: 500px) 33vw, 34vw" priority />
          </div>
          {additional.length > 0 && <div className={styles.liveFollow}>
            <h2>{live?.status === "now" ? "Also on now" : "Starting at the same time"}</h2>
            {eventList(additional, "home")}
          </div>}
        </div>
        <section className={styles.committee} aria-labelledby="guide-committee-title">
          <div className={styles.committeeTop}>
            <h2 id="guide-committee-title"><UsersRound size={18} aria-hidden="true" /> Your committee</h2>
            {committee && pickerLink("home", "Change committee", styles.changeCommittee)}
          </div>
          {committee ? <>
            <p className={styles.committeeName}>{committee.name}</p>
            <p className={styles.committeeBloc}>{bloc ? `Bloc ${bloc}` : "No delegate bloc listed"}</p>
            <div className={styles.committeeFacts}>
              <div className={styles.committeeSession}>
                <h3>{sessions.next ? "Next session" : sessions.current ? "In session" : "Sessions"}</h3>
                {nextSession ? eventLink(nextSession, "home", <><strong>{eventTime(nextSession)}</strong><small>{eventDate(nextSession)} · Session {nextSession.session}</small><ChevronRight size={16} aria-hidden="true" /></>, styles.committeeAction)
                  : <p className={styles.meta}>{sessions.finished ? "All scheduled sessions for your bloc have ended." : "No session listed."}</p>}
                {sessions.current && sessions.next && eventLink(sessions.current, "home", `In session until ${sessions.current.end}`, styles.textAction)}
              </div>
              <div>
                <h3>{rooms.length > 1 ? "Assigned rooms" : "Assigned room"}</h3>
                {rooms.length ? <ul className={styles.roomLinks}>{rooms.map((room) => <li key={room.id}>
                  <GuideLink className={styles.committeeAction} href={mapHref({ floor: room.floor, room })}
                    aria-label={`Show ${room.room}, Level ${room.floor}${room.side ? `, ${room.side}` : ""} on the hotel map`}>
                    <strong>{room.room}</strong><small>Level {room.floor}{room.side ? ` · ${room.side}` : ""}</small><ArrowUpRight size={15} aria-hidden="true" />
                  </GuideLink>
                </li>)}</ul> : <p className={styles.meta}>No room assignment listed.</p>}
              </div>
            </div>
          </> : <GuideLink href={sheetHref("home", "committee")} mode="sheet" onClick={(event) => { setQuery(""); rememberOpener(event); }} className={styles.chooseCommittee}>
            <span><strong>Choose your committee</strong><small>See your session times and room.</small></span><ArrowRight size={20} aria-hidden="true" />
          </GuideLink>}
        </section>
        {upcoming && <section className={`${styles.liveFollow} ${styles.homeNext}`} aria-labelledby="guide-next-title">
          <h2 id="guide-next-title">Up next{dayFor(upcoming).date !== today ? ` · ${dayFor(upcoming).en}` : ""}</h2>
          {eventList(upcomingGroup, "home")}
        </section>}
      </div>)}

      {pane("schedule", <div className={styles.programme}>
        <header className={styles.programmeHeader}>
          <div className={styles.titleRow}><h1 id="guide-schedule-title" tabIndex={-1}>Schedule</h1><span>Montréal time</span></div>
          <div className={styles.days} role="group" aria-label="Conference day">
            {scheduleDays.map((item) => <button key={item.id} aria-pressed={day === item.id} aria-label={`${item.en}, ${localDate(item.date)}`} onClick={() => setDay(item.id)}>
              <span>{item.en.slice(0, 3)}</span><strong>{Number(item.date.slice(-2))}</strong>
            </button>)}
          </div>
          <div className={styles.scheduleTools}>
            <span>{localDate(displayedDay.date)}</span>
            {bloc ? <div className={styles.filter} role="group" aria-label="Filter schedule">
              <button aria-pressed={!mine} onClick={() => setMine(false)}>All events</button>
              <button aria-pressed={mine} onClick={() => setMine(true)}>Bloc {bloc} + shared</button>
            </div> : pickerLink("schedule", "Filter by committee", styles.textAction)}
          </div>
        </header>
        {eventList(events, "schedule")}
        <Link href="/conference/schedule" className={styles.timetable}>Full timetable <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>)}

      {pane("hotel-map", <div className={styles.mapPage}>
        <div className={styles.titleRow}><h1 id="guide-hotel-map-title" tabIndex={-1}>Hotel map</h1></div>
        {mapOpened && <HotelNavigator compact committees={committees} initialFloor={destination.floor}
          initialRoomId={destination.room?.id ?? defaultRoom?.id}
          destination={destination.floor ? { floor: destination.floor, roomId: destination.room?.id } : undefined} />}
      </div>)}

      {pane("dining", <div className={styles.dining}>
        <header className={styles.diningCover}>
          <div><h1 id="guide-dining-title" tabIndex={-1}>Food &amp; dining</h1><p>Near Le Centre Sheraton Montréal</p></div>
          <div className={styles.cityPhoto}><Image src="/photos/montreal-1600x900.jpg" alt="" fill sizes="(min-width: 880px) 320px, 90vw" /></div>
        </header>
        <div className={styles.foodTabs} role="group" aria-label="Dining category">
          {diningGroups.map((group, index) => <button key={group.title} aria-pressed={index === foodGroup} onClick={() => setFoodGroup(index)}>{group.title}</button>)}
        </div>
        {diningGroups.map((group, index) => <section key={group.title} hidden={index !== foodGroup} aria-label={group.title} className={styles.diningGroup}>
          <ul>{group.places.map((place) => <li key={place.name}>
            <details name="guide-dining" className={styles.restaurant}>
              <summary aria-label={`Details for ${place.name}`}>
                <strong>{place.name}</strong><small>{place.address}</small><ChevronDown aria-hidden="true" size={15} />
              </summary>
              <div className={styles.restaurantDetails}>
                <p>{place.note}</p>
                {"hours" in place && <p className={styles.meta}>{place.hours}</p>}
                {"price" in place && <p className={styles.meta}>{place.price} CAD</p>}
                <div className={styles.inlineLinks}>
                  <a href={place.source} target="_blank" rel="noopener noreferrer">Official details <ArrowUpRight size={14} aria-hidden="true" /></a>
                  {"menu" in place && <a href={place.menu} target="_blank" rel="noopener noreferrer">Menu <ArrowUpRight size={14} aria-hidden="true" /></a>}
                </div>
              </div>
            </details>
            <a className={styles.directions} href={walkingDirections(place.name, place.address)} target="_blank" rel="noopener noreferrer" aria-label={`Walking directions to ${place.name} (opens in a new tab)`}>
              <ArrowUpRight aria-hidden="true" size={15} /> Directions
            </a>
          </li>)}</ul>
        </section>)}
      </div>)}

      {pane("charity", <div className={styles.charity}>
        <div className={styles.charityStory}>
          <p className={styles.partnerLabel}>2026 Charity partner</p>
          <div className={styles.charityIdentity}>
            <h1 id="guide-charity-title" tabIndex={-1}>War Child</h1>
            <Image src="/logos/warchild.png" alt="" width={1500} height={784} sizes="112px" />
          </div>
          <p className={styles.charityIntro}>War Child supports community-driven humanitarian action for war-affected women and children.</p>
          <CharityDonateButton appearance="guide" />
          <Link className={styles.textAction} href="/conference/charity-partner">Meet our charity partner <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
        <figure className={styles.charityFigure}>
          <div><Image alt="Hands preparing vegetables together around a table" fill sizes="(min-width: 900px) 460px, 100vw" src="/photos/war-child/community.webp" /></div>
          <figcaption>Photography: <a href={charityPartner.website} rel="noopener noreferrer" target="_blank">War Child Canada</a></figcaption>
        </figure>
      </div>)}
    </div>

    <nav className={styles.dock} aria-label="Pocket Guide">
      {tabs.map(({ id, label, Icon }) => <GuideLink key={id} href={`#${id}`} aria-current={screen === id ? "page" : undefined}
        className={id === "home" ? styles.homeTab : undefined}>
        {Icon ? <Icon size={21} strokeWidth={1.65} aria-hidden="true" /> : <span className={styles.dove}>
          <Image src="/logos/ssuns-dove-white.png" width={500} height={500} alt="" sizes="46px" priority />
        </span>}
        <span>{label}</span>
      </GuideLink>)}
    </nav>

    {selectedEvent ? <GuideSheet title={eventTitle(selectedEvent, "en")} close={() => closeGuideSheet(baseHref)} key={sheetKey} opener={sheetOpener}>
      <p className={styles.sheetDate}>{eventDate(selectedEvent)} · {eventTime(selectedEvent)}</p>
      {location(selectedEvent) && <p><strong>{location(selectedEvent)}</strong></p>}
      {selectedEvent.kind === "session" && selectedEvent.bloc === bloc && committee && <p>{committee.name}</p>}
      {selectedEvent.kind === "session" && !committee && pickerLink(screen, "Choose your committee for room details", styles.textAction, true)}
      {eventDestinations(selectedEvent, rooms, bloc).map((item) => <GuideLink mode="from-sheet"
        className={styles.mapAction} key={item.room?.id ?? item.floor} href={mapHref(item)}>
        <MapPin aria-hidden="true" size={18} />
        <span>{item.room ? `Show ${item.room.room}${item.room.side ? ` · ${item.room.side}` : ""} on map` : `Open Level ${item.floor} map`}</span>
        <ChevronRight aria-hidden="true" size={16} />
      </GuideLink>)}
      <p className={styles.description}>{eventDescription(selectedEvent, "en")}</p>
      {orderedEvents.some((item) => item.parentId === selectedEvent.id) && <section className={styles.sessionPreview}>
        <h3>Programme activities</h3>
        {eventList(orderedEvents.filter((item) => item.parentId === selectedEvent.id), screen, true)}
      </section>}
      {!!selectedEvent.related?.length && <details className={styles.disclosure}>
        <summary>Related resources</summary>
        <ul className={styles.resourceList}>
          {selectedEvent.related.map((href) => <li key={href}><Link href={href}>{relatedPages.find((page) => page.href === href)?.title ?? "Event information"} <ArrowUpRight aria-hidden="true" size={15} /></Link></li>)}
        </ul>
      </details>}
    </GuideSheet> : showPicker ? <GuideSheet title="Your committee" close={() => closeGuideSheet(baseHref)} key={sheetKey} opener={sheetOpener}>
      <label className={styles.search}><Search size={18} aria-hidden="true" /><span className="sr-only">Find a committee</span>
        <input type="search" placeholder="Find a committee" value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      {committee && <button className={styles.textAction} onClick={() => selectCommittee("")}>Clear committee selection</button>}
      <ul className={styles.committeeList}>
        {committeeMatches.map((item) => <li key={item.slug}>
          <button aria-pressed={item.slug === committee?.slug} onClick={() => selectCommittee(item.slug)}>
            <span><strong>{item.name}</strong><small>{item.level}</small></span><ChevronRight size={16} aria-hidden="true" />
          </button>
        </li>)}
      </ul>
      {query.trim() && !committeeMatches.length && <p>No matching committees.</p>}
    </GuideSheet> : showResources ? <GuideSheet title="Conference resources" close={() => closeGuideSheet(baseHref)} key={sheetKey} opener={sheetOpener}>
      <ul className={styles.resourceList}>
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxn4aRC7V5QMybj5k5kJT7dtUMssBZ6fKX39_V119w8lwGKQ/viewform" rel="noopener noreferrer" target="_blank">
            Equity Disclosure and Feedback Form <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </li>
        {committee && <>
          <li><Link href={`/committees/${committee.slug}`}>Committee details &amp; resources <ArrowUpRight size={15} aria-hidden="true" /></Link></li>
          <li><GuideLink href="#schedule" mode="from-sheet" onClick={() => { setMine(Boolean(bloc)); setDay(nextSession?.day ?? null); }}>My committee schedule <ChevronRight size={16} aria-hidden="true" /></GuideLink></li>
        </>}
        <li><Link href="/conference/delegate-resource-center">Delegate Resource Centre <ArrowUpRight size={15} aria-hidden="true" /></Link></li>
        <li><Link href="/committees/policies">Committee policies <ArrowUpRight size={15} aria-hidden="true" /></Link></li>
        <li><Link href="/">SSUNS website <ArrowUpRight size={15} aria-hidden="true" /></Link></li>
      </ul>
    </GuideSheet> : null}
  </div>;
}
