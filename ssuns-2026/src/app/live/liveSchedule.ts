import { scheduleDays, scheduleEvents, timeToMinutes, type ScheduleBloc, type ScheduleEvent } from "@/content/schedule";

const conferenceClock = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Toronto", year: "numeric", month: "2-digit", day: "2-digit",
  hour: "2-digit", minute: "2-digit", hourCycle: "h23",
});

/** Compare local calendar dates and minutes in the conference's timezone,
 * including 24:00 as the end of the event's scheduled day. */
export function conferenceTime(now: number) {
  const parts = conferenceClock.formatToParts(new Date(now));
  const part = (name: Intl.DateTimeFormatPartTypes) => parts.find((item) => item.type === name)!.value;
  return { date: `${part("year")}-${part("month")}-${part("day")}`, minutes: Number(part("hour")) * 60 + Number(part("minute")) };
}

export function eventState(item: ScheduleEvent, now: number): "upcoming" | "now" | "ended" {
  const clock = conferenceTime(now);
  const date = scheduleDays.find((day) => day.id === item.day)!.date;
  if (clock.date < date) return "upcoming";
  if (clock.date > date || clock.minutes >= timeToMinutes(item.end)) return "ended";
  return clock.minutes >= timeToMinutes(item.start) ? "now" : "upcoming";
}

export function committeeSessions(bloc: ScheduleBloc | undefined, now: number) {
  const sessions = bloc ? scheduleEvents.filter((item) => item.kind === "session" && item.bloc === bloc)
    .sort((a, b) => scheduleDays.findIndex((day) => day.id === a.day) - scheduleDays.findIndex((day) => day.id === b.day) || a.start.localeCompare(b.start)) : [];
  return {
    current: sessions.find((item) => eventState(item, now) === "now"),
    next: sessions.find((item) => eventState(item, now) === "upcoming"),
    finished: sessions.length > 0 && sessions.every((item) => eventState(item, now) === "ended"),
  };
}

export function chronological(a: ScheduleEvent, b: ScheduleEvent) {
  return scheduleDays.findIndex((day) => day.id === a.day) - scheduleDays.findIndex((day) => day.id === b.day)
    || a.start.localeCompare(b.start);
}

export function happeningNow(now: number, bloc?: ScheduleBloc) {
  const relevant = scheduleEvents.filter((event) => event.kind !== "session" || !bloc || event.bloc === bloc).sort(chronological);
  const active = relevant.filter((event) => eventState(event, now) === "now");
  if (active.length) return { status: "now" as const, events: active };
  const upcoming = relevant.filter((event) => eventState(event, now) === "upcoming");
  if (upcoming.length) return { status: "upcoming" as const, events: upcoming.filter((event) => chronological(event, upcoming[0]) === 0) };
  return { status: "ended" as const, events: [] };
}
