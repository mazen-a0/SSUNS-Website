// Dates and times transcribed from the supplied SSUNS 2026 delegate schedule.
// Use printed time labels, not the approximate positions of blocks in the artwork.
// Meal windows are internal planning time and are omitted from the public schedule.
export type ScheduleLocale = "en" | "fr";
export type ScheduleDayId = "thursday" | "friday" | "saturday" | "sunday";
export type ScheduleKind = "session" | "program" | "workshop" | "ceremony" | "feedback" | "social" | "doors";
export type ScheduleBloc = "A" | "B" | "C";
export type ScheduleEvent = {
  id: string;
  day: ScheduleDayId;
  start: string;
  end: string;
  kind: ScheduleKind;
  title?: { en: string; fr: string };
  session?: number;
  bloc?: ScheduleBloc;
  // Four visual lanes allow staggered sessions and concurrent advisor events.
  lane: number;
  span: number;
  related?: string[];
};

export const scheduleDays: Array<{ id: ScheduleDayId; date: string; en: string; fr: string }> = [
  { id: "thursday", date: "2026-11-12", en: "Thursday", fr: "Jeudi" },
  { id: "friday", date: "2026-11-13", en: "Friday", fr: "Vendredi" },
  { id: "saturday", date: "2026-11-14", en: "Saturday", fr: "Samedi" },
  { id: "sunday", date: "2026-11-15", en: "Sunday", fr: "Dimanche" },
];

const event = (id: string, day: ScheduleDayId, start: string, end: string, kind: ScheduleKind, en: string, fr: string, lane = 0, span = 4, related?: string[]): ScheduleEvent =>
  ({ id, day, start, end, kind, title: { en, fr }, lane, span, related });
const session = (day: ScheduleDayId, number: number, bloc: ScheduleBloc, start: string, end: string, lane: number): ScheduleEvent =>
  ({ id: `${day}-session-${number}-${lane}`, day, start, end, kind: "session", session: number, bloc, lane, span: 1, related: ["/committees", "/committees/policies", "/committees/position-papers", "/conference/venue"] });

export const scheduleEvents: ScheduleEvent[] = [
  event("registration", "thursday", "11:00", "17:00", "program", "Delegate registration", "Inscription des délégués", 0, 1, ["/registration/how-to-register", "/conference/venue"]),
  event("fair", "thursday", "13:00", "16:30", "program", "SSUNS Fair", "Foire SSUNS", 1, 1),
  event("workshop-thursday", "thursday", "15:00", "16:30", "workshop", "Workshop I", "Atelier I", 2, 2),
  event("opening-doors", "thursday", "17:00", "17:15", "doors", "Opening Ceremony · Doors open", "Cérémonie d’ouverture · Ouverture des portes"),
  event("opening", "thursday", "17:15", "18:45", "ceremony", "Opening Ceremony", "Cérémonie d’ouverture", 0, 4, ["/conference/venue"]),
  session("thursday", 1, "A", "20:00", "21:30", 0),
  session("thursday", 1, "B", "20:15", "21:45", 1),
  session("thursday", 1, "C", "20:30", "22:00", 2),

  event("tours", "friday", "08:30", "11:00", "program", "McGill campus tours", "Visites du campus de McGill", 1, 1),
  // Friday Workshop II confirmed by the organizer.
  event("workshop-friday", "friday", "10:00", "11:00", "workshop", "Workshop II", "Atelier II", 2, 2),
  session("friday", 2, "A", "12:30", "14:45", 0),
  session("friday", 2, "B", "12:45", "15:00", 1),
  // Third lane corrected to Bloc C by the organizer.
  session("friday", 2, "C", "13:00", "15:15", 2),
  session("friday", 3, "A", "15:15", "17:30", 0),
  session("friday", 3, "B", "15:30", "17:45", 1),
  session("friday", 3, "C", "15:45", "18:00", 2),
  event("head-feedback-1", "friday", "18:00", "19:00", "feedback", "Head delegate feedback 1", "Retour des délégués en chef 1", 3, 1),
  session("friday", 4, "A", "19:30", "21:00", 0),
  session("friday", 4, "B", "19:45", "21:15", 1),
  session("friday", 4, "C", "20:00", "21:30", 2),
  event("faculty-feedback-friday", "friday", "20:15", "20:45", "feedback", "Faculty advisor feedback", "Retour des conseillers pédagogiques", 3, 1),

  session("saturday", 5, "A", "09:45", "12:00", 0),
  session("saturday", 5, "B", "10:00", "12:15", 1),
  session("saturday", 5, "C", "10:15", "12:30", 2),
  event("head-feedback-2", "saturday", "12:30", "13:30", "feedback", "Head delegate feedback 2", "Retour des délégués en chef 2", 3, 1),
  session("saturday", 6, "A", "14:00", "16:15", 0),
  session("saturday", 6, "B", "14:15", "16:30", 1),
  session("saturday", 6, "C", "14:30", "16:45", 2),
  session("saturday", 7, "A", "16:45", "19:00", 0),
  session("saturday", 7, "B", "17:00", "19:15", 1),
  session("saturday", 7, "C", "17:15", "19:30", 2),
  event("faculty-feedback-saturday", "saturday", "17:30", "18:15", "feedback", "Faculty advisor feedback", "Retour des conseillers pédagogiques", 3, 1),
  event("gala", "saturday", "21:00", "24:00", "social", "Delegate Gala", "Gala des délégués", 0, 3),
  event("faculty-cocktail", "saturday", "21:00", "22:30", "social", "Faculty advisor cocktail", "Cocktail des conseillers pédagogiques", 3, 1),

  session("sunday", 8, "A", "09:30", "11:00", 0),
  session("sunday", 8, "B", "09:45", "11:15", 1),
  session("sunday", 8, "C", "10:00", "11:30", 2),
  event("closing-doors", "sunday", "13:00", "13:15", "doors", "Closing Ceremony · Doors open", "Cérémonie de clôture · Ouverture des portes"),
  event("closing", "sunday", "13:15", "15:00", "ceremony", "Closing Ceremony", "Cérémonie de clôture", 0, 4, ["/committees/awards", "/conference/venue"]),
];

// Organizer-supplied bloc assignments. Labels normally come from current committee
// content. Joint committees retain separate sides; Backroom (X) is not a delegate bloc.
export const scheduleCommitteeBlocs: Array<{ bloc: ScheduleBloc; slug?: string; label?: { en: string; fr: string } }> = [
  { bloc: "A", slug: "unhrc-2026" },
  { bloc: "A", slug: "fespaco-2026" },
  { bloc: "A", slug: "ad-hoc-2026" },
  { bloc: "A", slug: "versace-2026" },
  { bloc: "A", slug: "unsc-2026" },
  { bloc: "A", slug: "mof-2026" },
  { bloc: "A", slug: "who-2026" },
  { bloc: "A", slug: "pour-decisions-2026" },
  { bloc: "A", slug: "newsboys-2026" },
  { bloc: "B", slug: "nhl-2026" },
  { bloc: "B", slug: "icj-2026" },
  { bloc: "B", slug: "tyre-siege-2026" },
  { bloc: "B", slug: "ad-hoc-sg-2026" },
  { bloc: "B", slug: "sdg-12-2026" },
  { bloc: "B", slug: "praguematic-2026" },
  { bloc: "B", slug: "ccpcj-2026" },
  { bloc: "B", slug: "penguins-2026" },
  { bloc: "C", slug: "wto-2026" },
  { bloc: "C", slug: "chess-2026", label: { en: "The Great Game · Russia", fr: "Le Grand Jeu · Russie" } },
  { bloc: "C", slug: "chess-2026", label: { en: "The Great Game · Great Britain", fr: "Le Grand Jeu · Grande-Bretagne" } },
  { bloc: "C", slug: "dam-right-2026" },
  { bloc: "C", slug: "ifad-2026" },
  { bloc: "C", slug: "khanflict-2026" },
  { bloc: "C", slug: "icao-2026" },
  { bloc: "C", slug: "festival-rivalry-2026", label: { en: "Setlist Sabotage · Osheaga", fr: "Setlist Sabotage · Osheaga" } },
  { bloc: "C", slug: "festival-rivalry-2026", label: { en: "Setlist Sabotage · Lollapalooza", fr: "Setlist Sabotage · Lollapalooza" } },
];

export const scheduleCategories: Record<ScheduleKind, { en: string; fr: string }> = {
  session: { en: "Committee sessions", fr: "Séances de comité" },
  program: { en: "Conference programme", fr: "Programme de la conférence" },
  workshop: { en: "Workshops", fr: "Ateliers" },
  ceremony: { en: "Ceremonies", fr: "Cérémonies" },
  feedback: { en: "Feedback", fr: "Retours" },
  social: { en: "Social events", fr: "Événements sociaux" },
  doors: { en: "Doors open", fr: "Ouverture des portes" },
};

export function eventTitle(item: ScheduleEvent, language: ScheduleLocale): string {
  return item.kind === "session"
    ? `${language === "fr" ? "Séance" : "Session"} ${item.session} · Bloc ${item.bloc}`
    : item.title![language];
}
export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}
export function eventTime(item: ScheduleEvent): string {
  return `${item.start}–${item.end === "24:00" ? "00:00" : item.end}`;
}
export function scheduleDayLabel(day: typeof scheduleDays[number], language: ScheduleLocale): string {
  return `${day[language]} ${Number(day.date.slice(-2))} ${language === "fr" ? "novembre" : "November"}`;
}

export function scheduleDayHighlights(day: ScheduleDayId, language: ScheduleLocale): string {
  const items = scheduleEvents.filter((item) => item.day === day);
  const titles = [...new Set(items.filter((item) => !["session", "doors"].includes(item.kind)).map((item) => eventTitle(item, language)))];
  const sessions = items.flatMap((item) => item.session ? [item.session] : []);
  if (sessions.length) {
    const first = Math.min(...sessions);
    const last = Math.max(...sessions);
    titles.push(`${scheduleCategories.session[language]} ${first}${first === last ? "" : `–${last}`}`);
  }
  return titles.join(" · ");
}

// Only title-derived descriptions or supplied site facts are used. Programme details
// (workshop topics, speakers, tours meeting points) need confirmation.
// Confirmed committee rooms are maintained in venueRooms for the in-conference guide.
export function eventDescription(item: ScheduleEvent, language: ScheduleLocale): string {
  const fr = language === "fr";
  if (item.kind === "session") return fr
    ? `Séance de comité ${item.session} pour le bloc ${item.bloc}. Consultez le guide de conférence pour votre salle et votre étage, et les pages des comités pour les guides préparatoires et les ressources de préparation.`
    : `Committee session ${item.session} for Bloc ${item.bloc}. Check the in-conference guide for your room and floor, and the committee pages for background guides and preparation resources.`;
  if (item.id === "opening" || item.id === "closing") {
    const doors = scheduleEvents.find((event) => event.id === `${item.id}-doors`);
    const start = `${eventTitle(item, language)} ${fr ? "à" : "at"} ${item.start}.`;
    return `${start}${doors ? (fr ? ` Les portes ouvrent à ${doors.start}.` : ` Doors open at ${doors.start}.`) : ""}`;
  }
  const copy: Record<string, { en: string; fr: string }> = {
    registration: { en: "Delegate registration is open during this window on Thursday. Review the registration instructions and venue information before arrival.", fr: "L’inscription des délégués est ouverte pendant cette période le jeudi. Consultez les instructions d’inscription et les renseignements sur le lieu avant votre arrivée." },
    fair: { en: "Explore the SSUNS Fair during Thursday’s afternoon programme. Exhibitor and room details will follow.", fr: "Découvrez la foire SSUNS pendant le programme du jeudi après-midi. Les exposants et la salle seront précisés ultérieurement." },
    tours: { en: "McGill campus tours are scheduled for Friday morning. Meeting point and tour arrangements will follow.", fr: "Les visites du campus de McGill sont prévues le vendredi matin. Le point de rencontre et les modalités seront précisés ultérieurement." },
    gala: { en: "The Delegate Gala takes place on Saturday evening, ending at midnight. Further event details will follow.", fr: "Le gala des délégués a lieu le samedi soir et se termine à minuit. D’autres renseignements suivront." },
    "faculty-cocktail": { en: "Saturday evening’s cocktail event for faculty advisors. Further event details will follow.", fr: "Le cocktail du samedi soir est destiné aux conseillers pédagogiques. D’autres renseignements suivront." },
  };
  if (copy[item.id]) return copy[item.id][language];
  if (item.kind === "doors") return fr ? "Ouverture des portes avant le début de la cérémonie." : "Doors open ahead of the ceremony’s scheduled start.";
  if (item.kind === "workshop") return fr ? "Atelier prévu au programme de la conférence. Le sujet, les intervenants et la salle seront précisés ultérieurement." : "A workshop in the conference programme. Topic, speakers and room details will follow.";
  return item.id.startsWith("head-")
    ? (fr ? "Séance de retour destinée aux délégués en chef." : "A feedback session for head delegates.")
    : (fr ? "Séance de retour destinée aux conseillers pédagogiques." : "A feedback session for faculty advisors.");
}
