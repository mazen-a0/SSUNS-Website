import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

// Transpile only the pure schedule data module; no server or browser is required.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "src/content/schedule.ts"), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { scheduleEvents, scheduleDays, scheduleCommitteeBlocs, timeToMinutes, eventTitle, eventDescription } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
assert.equal(new Set(scheduleEvents.map((event) => event.id)).size, scheduleEvents.length, "Duplicate event IDs");
for (const event of scheduleEvents) {
  const start = timeToMinutes(event.start);
  const end = timeToMinutes(event.end);
  assert(scheduleDays.some((day) => day.id === event.day), `Unknown day: ${event.id}`);
  assert(start >= 480 && end <= 1440 && start < end, `Invalid time range: ${event.id}`);
  assert(start % 15 === 0 && end % 15 === 0, `Time outside quarter-hour grid: ${event.id}`);
  assert(event.lane >= 0 && event.span >= 1 && event.lane + event.span <= 4, `Invalid lanes: ${event.id}`);
  for (const locale of ["en", "fr"]) {
    assert(eventTitle(event, locale)?.trim(), `Missing ${locale} title: ${event.id}`);
    assert(eventDescription(event, locale)?.trim(), `Missing ${locale} description: ${event.id}`);
  }
  for (const href of event.related ?? []) {
    assert(fs.existsSync(path.join(root, "src/app", href, "page.tsx")), `Missing related route: ${href}`);
  }
  for (const other of scheduleEvents) {
    if (event === other || event.day !== other.day) continue;
    const overlapsTime = start < timeToMinutes(other.end) && timeToMinutes(other.start) < end;
    const overlapsLane = event.lane < other.lane + other.span && other.lane < event.lane + event.span;
    assert(!(overlapsTime && overlapsLane), `Events obscure each other: ${event.id} / ${other.id}`);
  }
}
const committeeSource = fs.readFileSync(path.join(root, "src/content/en/committees.ts"), "utf8");
const committeeSlugs = [...committeeSource.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
for (const entry of scheduleCommitteeBlocs) {
  assert(["A", "B", "C"].includes(entry.bloc), `Unknown committee bloc: ${entry.bloc}`);
  if (entry.slug) assert(committeeSlugs.includes(entry.slug), `Unknown committee: ${entry.slug}`);
}
for (const slug of committeeSlugs) assert(scheduleCommitteeBlocs.some((entry) => entry.slug === slug), `Missing committee bloc: ${slug}`);
for (const bloc of ["A", "B", "C"]) {
  assert.equal(scheduleEvents.filter((event) => event.bloc === bloc).length, 8, `Expected eight sessions for Bloc ${bloc}`);
}
for (const day of scheduleDays) {
  const weekday = new Intl.DateTimeFormat("en", {weekday:"long", timeZone:"UTC"}).format(new Date(`${day.date}T12:00:00Z`));
  assert.equal(weekday, day.en, `Date and weekday disagree: ${day.date}`);
}
console.log(`Schedule checks passed: ${scheduleEvents.length} events across ${scheduleDays.length} days; valid times, lanes, bilingual details, and related routes.`);
