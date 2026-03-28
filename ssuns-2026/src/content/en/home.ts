export const homeContent = {
  hero: {
    eyebrow: "SSUNS 2026 • Montreal",
    title: "Canada's premier high school Model United Nations conference",
    accent: "Building on 33 years of excellence, our 34th conference will set a new standard.",
    description:
      "Each year, SSUNS welcomes over 1,300 delegates representing 60+ school delegations from around the world. Organized entirely by students and staffed by 250+ McGill volunteers, the conference provides a dynamic forum where high school and Cégep students develop leadership, negotiation, and public speaking skills while tackling complex global issues through committee debate and collaboration.",
    statement:
      "Hosted annually in Montreal, Quebec, SSUNS brings together students from across the globe for an unforgettable conference experience.",
    primaryCta: { label: "Register now", href: "https://www.munager.com/user/newApplication/SSUNS2026" },
    secondaryCta: { label: "Explore Committees", href: "/committees" },
    stats: [
      { label: "Delegates", value: "1300+" },
      { label: "Staff", value: "250+" },
      { label: "Schools", value: "60+" },
      { label: "Committees", value: "24" },
    ],
    /** Conference opens Nov 12, 2026 (Montreal); used by hero countdown */
    conferenceStartIso: "2026-11-12T00:00:00-05:00",
    countdownHeading: "Countdown to SSUNS 2026",
    countdownTarget: null,
    countdownLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
    },
    video: {
      webmSrc: "/video/montreal-panorama.webm",
      mp4Src: "/video/montreal-panorama.mp4",
    },
    image: {
      src: "/placeholders/hero-1920x1080.jpg",
      alt: "Delegates entering plenary hall under blue conference lighting",
      note: "hero background image: delegates entering plenary hall, 16:9, recommended 1920x1080",
    },
  },

  sectionIndex: [
    { id: "hero", label: "Overview" },
    { id: "glance", label: "At A Glance" },
    { id: "key-dates", label: "Key Dates" },
    { id: "mission", label: "Mission" },
    { id: "committees-preview", label: "Committees" },
    { id: "venue", label: "Venue" },
    { id: "register", label: "Register" },
  ],
  atGlance: {
    label: "At A Glance",
    items: [
      { label: "Delegates", value: "1300+", detail: "Attended by 1300+ delegates from around the world." },
      { label: "Venue", value: "Sheraton Montreal", detail: "Hosting SSUNS 34th itinerary from November 12–15." },
      { label: "Committees", value: "24", detail: "Featuring General Assemblies (GAs), Economic and Social Councils (ECOSOCs), Specialized Committees (SPECs), and Crisis Committees." },
      { label: "Schools", value: "60+", detail: "Representing delegations from Canada and around the world." },
    ],
  },
  editorial: {
    label: "Overview of SSUNS",
    title: "What Is SSUNS?",
    subtitle: "A student-run conference built on diplomacy, debate, and leadership development.",
    strengthsTitle: "The Distinction",
    body: [
      "In 1992, a group of students at McGill University came together with the goal of creating a space where high school students could explore global issues through diplomacy and debate. They envisioned an environment where young leaders could collaborate, think critically, and engage with the challenges facing the international community. Now in its 34th year, the Secondary Schools’ United Nations Symposium (SSUNS) has grown into one of Canada’s premier high school Model United Nations conferences.",
      "Hosted annually in Montreal, Quebec, SSUNS brings together students from across the globe for an unforgettable conference experience. This year, we are excited to welcome delegates back to the Sheraton Centre Montreal Hotel. From innovative committees to exciting delegate events, the Secretariat has worked tirelessly to create an extraordinary 34th iteration of SSUNS. We invite you to explore our website to learn more about what makes SSUNS a truly unique Model United Nations conference.",
    ],
    points: [
      "Youth leadership",
      "Substantive debates",
      "Student-led excellence",
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
      src: "/headshots/marcus.jpg",
      alt: "Portrait of the secretary-general",
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
      cta: { label: "Review conference policies", href: "/resources/policies" },
    },
  },
  featuredCommittees: {
    label: "Featured Committees",
    title: "A curated programme, presented like a dossier.",
    intro:
      "From first-committee confidence building to technical strategy rooms, SSUNS is designed as a portfolio of experiences rather than a single repeated format.",
    ctaLabel: "View full committee catalogue",
    items: [
      { slug: "who-2026", note: "A double-delegation room focused on public-health systems and worker protection." },
      { slug: "wto-2026", note: "An advanced room on climate diplomacy, trade tools, and market coordination." },
      { slug: "festival-rivalry-2026", note: "A joint-crisis format built around rivalry, pacing, and strategic decision-making." },
    ],
  },
  timeline: {
    title: "Key Dates",
    intro: "A disciplined planning calendar for advisors, chairs, and delegates.",
    items: [
      { date: "April 1, 2026", label: "Registration opens" },
      { date: "Nov 12-15, 2026", label: "Conference week in Montreal" },
    ],
  },
  gallery: {
    title: "Montreal & Venue",
    pageTitle: "Gallery",
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
    cta: {
      label: "View gallery",
      href: "/gallery",
    },
  },

  landAcknowledgement: {
    title: "Land Acknowledgement",
    body: [
      "SSUNS 2026 will be held at the Sheraton Hotel, with preparatory work accomplished at McGill University. Both sites are located in Montréal, known as Tiohti:áke to the Kanien'kehá:ka Nation, a founding nation of the Haudenosaunee Confederacy. This territory is unceded; not surrendered, not purchased, and not resolved by any legal or moral framework we can point to with integrity. The sovereignty of the Haudenosaunee and Anishinaabe nations was never extinguished. It has simply gone unrecognized by the colonial states that displaced them and the political and economic structures that have continued to benefit from that displacement.",
      "The dispossession of Indigenous peoples from these lands is not a historical rupture but an ongoing condition of settler-colonial states. That dispossession has never fallen equally: Indigenous women, girls, and Two-Spirit people continue to face disproportionate rates of violence and institutional neglect; a pattern the National Inquiry into Missing and Murdered Indigenous Women and Girls identified as genocide in 2019. Indigenous communities facing poverty, inadequate housing, and lack of clean water are not experiencing the failures of existing systems. They are experiencing those systems functioning exactly as designed.",
      "Land acknowledgements, as commonly practiced, warrant serious scrutiny. Indigenous scholarship has argued compellingly that recognition politics, the notion that naming colonial history constitutes meaningful justice, can reinforce settler power by substituting symbolic gestures for structural accountability. An acknowledgement that is read and set aside does not challenge the institutions or distributions of power that perpetuate Indigenous dispossession. SSUNS is not exempt from this critique.",
      "This statement marks not an achievement, but a starting point; one that demands more of us than words. Genuine reconciliation requires the restoration of Indigenous land, life, and self-determination on Indigenous terms, not settler ones. SSUNS is committed to approaching this as an ongoing institutional responsibility, one that implicates our programming, our partnerships, and the material choices we make as an organization.",
    ],
    resourcesTitle: "Further Resources",
    resources: [
      {
        label: "Allyship tools from the Montreal Indigenous Community NETWORK",
        href: "https://reseaumtlnetwork.com/en/being-an-ally/our-tools/",
      },
      {
        label: "Glen Coulthard, Red Skin, White Masks (2014)",
        href: "https://www.upress.umn.edu/book-division/books/red-skin-white-masks",
      },
      {
        label: "Leanne Betasamosake Simpson, As We Have Always Done (2017)",
        href: "https://www.upress.umn.edu/book-division/books/as-we-have-always-done",
      },
      {
        label: "National Inquiry into Missing and Murdered Indigenous Women and Girls, Final Report (2019)",
        href: "https://www.mmiwg-ffada.ca/final-report/",
      },
    ],
    contactLine: "For information on further initiatives, contact our Chief of Human Resources at hr@ssuns.org.",
    expandLabel: "Read more",
    collapseLabel: "Read less",
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
      "This year, we are introducing a new registration system designed to improve your experience and streamline the process. Additional details, including step-by-step instructions and important updates, will be posted here throughout March. We encourage all delegates and advisors to review this information in advance to ensure a smooth registration.",
    cta: { label: "Register now", href: "https://www.munager.com/user/newApplication/SSUNS2026" },
  },
};
