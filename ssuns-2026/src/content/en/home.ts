export const homeContent = {
  hero: {
    eyebrow: "SSUNS 2026 • Montreal",
    title: "SSUNS 2026 is on the way! Stay tuned for website updates…",
    accent: "Canada's largest high-school level Model United Nations conference",
    description:
      "Secondary Schools’ United Nations Symposium (SSUNS) is Canada’s largest high-school level Model United Nations (MUN) conference, hosting over 1300 students every November in downtown Montreal.",
    statement:
      "Model United Nations allows delegates to place themselves in the shoes of world leaders and diplomats, using debate and public speaking to engage real world issues.",
    primaryCta: { label: "Register now", href: "https://munager.com" },
    secondaryCta: { label: "Explore Committees", href: "/committees" },
    stats: [
      { label: "Delegates", value: "1500+" },
      { label: "Schools", value: "90+" },
      { label: "Committees", value: "35" },
      { label: "Days", value: "4" },
    ],
    image: {
      src: "/placeholders/hero-1920x1080.jpg",
      alt: "Delegates entering plenary hall under blue conference lighting",
      note: "hero background image: delegates entering plenary hall, 16:9, recommended 1920x1080",
    },
  },

  sectionIndex: [
    { id: "hero", label: "Overview" },
    { id: "glance", label: "At A Glance" },
    { id: "mission", label: "Mission" },
    { id: "committees-preview", label: "Committees" },
    { id: "venue", label: "Venue" },
    { id: "register", label: "Register" },
  ],
  atGlance: {
    label: "At A Glance",
    items: [
      { label: "Dates", value: "March 2026", detail: "Four conference days with staged arrivals and closing ceremonies." },
      { label: "Venue", value: "Sheraton Montreal", detail: "Central hotel setting with committee, advisory, and plenary flow under one roof." },
      { label: "Committees", value: "35 Programmes", detail: "General assemblies, specialized rooms, and crisis formats with distinct pacing." },
      { label: "Delegations", value: "90+ Schools", detail: "Canadian and international delegations, faculty advisors, and student leaders." },
    ],
  },
  editorial: {
    label: "Institutional Profile",
    title: "What Is SSUNS?",
    subtitle: "A student-run diplomatic institution with the standards of a flagship annual programme.",
    strengthsTitle: "The Distinction",
    body: [
      "SSUNS is not a one-note debate event. It is a full diplomatic ecosystem where delegates build policy positions, negotiate amendments, and defend outcomes in rooms that reward discipline.",
      "Behind every session is a student production team coordinating chairing, crisis architecture, hospitality, faculty communication, and venue operations with uncommon precision.",
    ],
    points: [
      "Rigorous rules of procedure without performative friction",
      "Topics selected for geopolitical depth and educational value",
      "An atmosphere that feels ceremonial without becoming theatrical",
    ],
  },
  directorNote: {
    label: "Director's Letter",
    title: "A conference should feel both exacting and generous.",
    body: [
      "SSUNS is designed to reward serious preparation while remaining legible and welcoming to schools entering the circuit for the first time. The measure of quality is not volume, but composure.",
      "We want delegates to leave feeling they were held to a meaningful standard: one reflected in committee design, advisor communication, venue hospitality, and the cadence of every session.",
    ],
    signature: "Secretary-General Placeholder",
    role: "Secretary-General, SSUNS 2026",
    stamp: "Montreal • Organizing Office",
    image: {
      src: "/placeholders/portrait-800x1000.jpg",
      alt: "Portrait of the secretary-general placeholder",
      note: "portrait of secretary-general or conference director, 4:5, recommended 800x1000",
    },
  },
  conferenceStandard: {
    label: "Conference Standard",
    title: "Structured for trust, pace, and institutional clarity.",
    intro:
      "The programme is built like a well-run report: each section should feel intentional, legible, and worthy of the schools placing students in our care.",
    sections: [
      {
        label: "Committee Design",
        title: "Distinct rooms, not repeated templates",
        body: "Committees are written and staffed to feel materially different from one another in rhythm, complexity, and educational demand.",
      },
      {
        label: "Advisor Support",
        title: "Operational clarity from briefing to close",
        body: "Faculty advisors receive clear milestones, venue guidance, and escalation channels so delegation logistics remain calm and predictable.",
      },
      {
        label: "Hospitality",
        title: "Ceremonial without becoming theatrical",
        body: "Arrival, plenary moments, and informal circulation are designed to feel polished, dignified, and easy to navigate.",
      },
    ],
    policyCallout: {
      label: "Policy & Conduct",
      title: "Standards matter as much as aesthetics.",
      body:
        "Code of conduct, safeguarding, accessibility planning, and advisor coordination are treated as core conference architecture rather than add-ons.",
      cta: { label: "Review conference policies", href: "/resources#policies" },
    },
  },
  featuredCommittees: {
    label: "Featured Committees",
    title: "A curated programme, presented like a dossier.",
    intro:
      "From first-committee confidence building to technical strategy rooms, SSUNS is designed as a portfolio of experiences rather than a single repeated format.",
    ctaLabel: "View full committee catalogue",
    items: [
      { slug: "committee-1", note: "A measured introduction to drafting, caucusing, and coalition work." },
      { slug: "committee-3", note: "High-pressure crisis pacing with tight writing expectations and strategic adaptation." },
      { slug: "committee-6", note: "Technical, advanced, and sharply policy-driven in both language and tempo." },
    ],
  },
  timeline: {
    title: "Key Dates",
    intro: "A disciplined planning calendar for advisors, chairs, and delegates.",
    items: [
      { date: "Sept 2025", label: "School pre-registration opens" },
      { date: "Nov 2025", label: "Committee preferences window" },
      { date: "Jan 2026", label: "Background guides published" },
      { date: "Feb 2026", label: "Advisor briefing and delegate orientation" },
      { date: "Mar 2026", label: "Conference week in Montreal" },
    ],
  },
  gallery: {
    title: "Montreal & Venue",
    scrollHint: "Scroll the archive",
    label: "Brochure Plates",
    intro:
      "The conference atmosphere depends on setting as much as schedule: arrival, circulation, committee energy, and the city beyond the venue.",
    items: [
      {
        id: "gallery-montreal",
        title: "Montreal at Dusk",
        caption: "A bilingual city with civic gravity and a natural conference bearing.",
        src: "/placeholders/montreal-1600x900.jpg",
        alt: "Montreal skyline at dusk with river reflections",
        note: "Montreal skyline at dusk, 16:9, recommended 1600x900",
      },
      {
        id: "gallery-hotel",
        title: "Sheraton Arrival",
        caption: "A centralized hotel footprint supports delegation flow, advisory support, and evening transitions.",
        src: "/placeholders/hotel-1600x900.jpg",
        alt: "Sheraton exterior and conference entrance",
        note: "Sheraton exterior and conference arrival, 16:9, recommended 1600x900",
      },
      {
        id: "gallery-delegates",
        title: "Committee Floor",
        caption: "Debate, drafting, and procedural movement should feel disciplined rather than chaotic.",
        src: "/placeholders/delegates-1600x1067.jpg",
        alt: "Delegates debating in committee session",
        note: "delegates debating in committee, 3:2, recommended 1600x1067",
      },
      {
        id: "gallery-ballroom",
        title: "Plenary Setting",
        caption: "Opening and closing moments should carry ceremonial weight without excess.",
        src: "/placeholders/ballroom-1600x900.jpg",
        alt: "Conference ballroom prepared for plenary session",
        note: "conference ballroom prepared for plenary, 16:9, recommended 1600x900",
      },
    ],
  },

  landAcknowledgement: {
    title: "Land Acknowledgement",
    body: [
      "SSUNS 2026 will be held at the Sheraton Hotel, with preparatory work accomplished at McGill University. Both of these sites are located in Montréal, known as Tiohti:áke to the Kanien'kehá:ka Nation, a founding nation of the Haudenosaunee Confederacy.",
      "This territory is unceded land, and prior to colonization it served as a place of exchange and gathering for the Haudenosaunee and Anishinaabe nations.",
      "Owing to our use of such land, we must honor, recognise, and respect these nations as stewards of the lands and waters on which we meet.",
    ],
  },
  testimonials: {
    label: "School Impressions",
    title: "The conference should feel composed from first contact onward.",
    items: [
      {
        quote:
          "Placeholder quote: SSUNS felt polished, exacting, and genuinely welcoming from the first advisor briefing onward.",
        author: "Faculty Advisor Placeholder",
        role: "Returning delegation advisor",
      },
      {
        quote:
          "Placeholder quote: Committee staff struck the right balance between seriousness and accessibility for our delegates.",
        author: "Head Delegate Placeholder",
        role: "Senior delegation lead",
      },
    ],
  },
  registrationBand: {
    label: "Registration",
    title: "Registration for SSUNS 2026 will open on April 1st!",
    body:
      "The conference will take place from November 12-15, 2026. Additional details, including step-by-step instructions and important updates, will be posted throughout March.",
    cta: { label: "Register now", href: "https://munager.com" },
  },
};
