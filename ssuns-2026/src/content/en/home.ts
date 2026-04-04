import { pickImage } from "@/lib/images";

export const homeContent = {
  hero: {
    eyebrow: "SSUNS 2026 • Montréal",
    title: "Secondary Schools’ United Nations Symposium",
    accent: "Canada’s premier high school Model United Nations conference",
    description:
      "Each year, SSUNS welcomes 1300+ delegates representing 60+ school delegations from around the world. Organized entirely by students and staffed by 250+ McGill volunteers, the conference provides a dynamic forum where high school and Cégep students develop leadership, negotiation, and public speaking skills while tackling complex global issues through committee debate and collaboration.",
    statement:
      "Hosted annually in Montréal, Quebec, SSUNS brings together students from across the globe for an unforgettable conference experience.",
    primaryCta: { label: "Register now", href: "/registration" },
    secondaryCta: { label: "Explore Committees", href: "/committees" },
    stats: [
      { label: "Delegates", value: "1300+" },
      { label: "Staff", value: "250+" },
      { label: "Schools", value: "60+" },
      { label: "Committees", value: "26" },
    ],
    /** Conference opens Nov 12, 2026 (Montréal); used by hero countdown */
    conferenceStartIso: "2026-11-12T00:00:00-05:00",
    countdownHeading: "Countdown to SSUNS 2026",
    countdownTarget: null,
    countdownLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
    },
    /** Used when `countdownTarget` is set and that date has passed (replaces an empty countdown). */
    countdownEndedMessage: "The countdown has ended — see the conference schedule for SSUNS 2026.",
    countdownEndedCta: { label: "Conference schedule", href: "/conference/schedule" },
    video: {
      webmSrc: "/video/montreal-panorama.webm",
      mp4Src: "/video/montreal-panorama.mp4",
    },
    image: {
      src: pickImage("delegates", "home-hero-poster"),
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
      { label: "Venue", value: "Sheraton Montréal", detail: "Hosting SSUNS 34th itinerary from November 12–15." },
      { label: "Committees", value: "26", detail: "Featuring General Assemblies (GAs), Economic and Social Councils (ECOSOCs), Specialized Agencies (SPECs), and Crisis Committees." },
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
      "Hosted annually in Montréal, Quebec, SSUNS brings together students from across the globe for an unforgettable conference experience. This year, we are excited to welcome delegates back to the Sheraton Centre Montréal Hotel. From innovative committees to exciting delegate events, the Secretariat has worked tirelessly to create an extraordinary 34th iteration of SSUNS. We invite you to explore our website to learn more about what makes SSUNS a truly unique Model United Nations conference.",
    ],
    points: [
      "Youth leadership",
      "Substantive debates",
      "Student-led excellence",
    ],
  },
  directorNote: {
    label: "A Letter from the Secretary-General",
    title: "Welcome to SSUNS 2026.",
    body: [
      "Welcome to SSUNS 2026! My name is Marcus C. Kelly and I have the pleasure of serving as the Secretary-General of SSUNS 2026, the 34th iteration of our conference.",
      "Each November, our conference executes a tremendous mandate. Our team, run by 250+ MUN-trained McGill University students, carries out one of Canada’s, and the world's, largest and most prestigious Model United Nations conferences. Working for months, the SSUNS staff curates a conference weekend full of collaboration, leadership, education, and healthy competition in a bid to execute a values-based experience - one that can set the tone for how students, delegates, and leaders interact in their budding journeys.",
      "I view SSUNS as a powerful facilitator which brings together 1300+ of the most brilliant young high school, middle school, and CEGEP minds. In addition, I know SSUNS 2026 will be a unique year: one that defines our conference for years to come. The past few iterations of SSUNS have experienced growth and change; this year, my staff and I seek to cement our values-based conference into every corner of work we complete and deliver to our Delegations. This year, I am emphasizing success through trust, coordination, and academic excellence when creating our committee content and other delegation services - one that mirrors our responsibilities as students at McGill University.",
      "Model United Nations in itself is a simulation, a model of real world diplomacy and global interaction. However, when engaging in this simulation, one must recognize its tangible ability to inspire and light a spark in the mind of a young leader. This is a very real feat and a very real accomplishment.",
      "SSUNS 2026 will be held in our usual meeting space, the beautiful Le Centre Sheraton Hotel in downtown Montréal - its prestige matching that of our conference. We are extremely grateful for this space and I look forward to the day SSUNS 2026 commences, and our delegates enter the hotel with purpose. It is standard for our delegations to stay at Le Centre Sheraton Hotel, allowing for delegates the ease of connection with Montréal and their committee.",
      "SSUNS 2026 is proud to boast an impressive committee slate, defined by diverse topics and a genuine mission of educating and empowering our youth delegates. For those who frequent MUN, we offer our advanced committees that will hone and challenge your depth of skill as you advance your MUN career, a necessary step as you look forward to the collegiate circuit. For those who have never done MUN before, do not fret - SSUNS 2026 is the place to begin. Registering for a beginner committee will provide our budding delegates with the opportunity to settle into the beginning of their MUN career. It is our sole mission to extend an experience that is fulfilling and challenging to all types of delegates.",
      "SSUNS Events hold a special place in my heart. As Director of Events for SSUNS 2025, I saw firsthand how these moments help create a truly well-rounded experience for our delegates.",
      "During the day, delegates will have the opportunity to explore presentations from the International Civil Aviation Organization (ICAO), Canada’s largest United Nations organization, as well as the SSUNS Fair, where participants can discover opportunities that extend far beyond secondary school. In the evening, be sure not to miss our Delegate Gala - an absolute SSUNS staple and one of the most memorable moments of the conference.",
      "This year, we are proud to introduce two major enhancements to the SSUNS experience: a completely redesigned website and our new registration platform, MUNager. These tools will allow us to communicate more effectively and ensure a smoother experience for Faculty Advisors and delegates alike. Stay tuned for these changes.",
      "So what are you waiting for? Secure your place at SSUNS 2026 while space remains limited.",
      "As always, please follow us on LinkedIn, Instagram, and Facebook to follow along as SSUNS 2026 unfolds. If you have any questions or concerns, please do not hesitate to reach out to me at sg@ssuns.org. Your experience matters to us, we are here to ensure it is nothing short of fantastic.",
    ],
    signature: "Marcus C. Kelly",
    role: "Secretary-General, SSUNS 2026",
    stamp: "Montréal • Organizing Office",
    image: {
      src: "/headshots/marcus.jpg",
      alt: "Portrait of the secretary-general",
      note: "portrait of secretary-general or conference director, 4:5, recommended 800x1000",
    },
  },
  conferenceStandard: {
    label: "CONFERENCE STANDARD",
    sections: [
      {
        label: "Committee Design",
        title: "Distinct rooms, offering unique experiences",
        body: "Each committee is built to feel genuinely different, from pace, difficulty, and style of debate, delegates in each committee are curating their own experience and challanging themselves to excel.",
      },
      {
        label: "Advisor Support",
        title: "Clear milestones throughout the entire process",
        body: "Advisors get a straightforward run-of-show: what matters when, where to be, and who to contact if anything shifts. We want to make supervising at SSUNS as easy as possible.",
      },
      {
        label: "Hospitality",
        title: "Polished and up to standards",
        body: "From arrival to plenary moments to the in-between committee sessions, SSUNS is designed to give delegates a professional, dignified, and easy to navigate experience.",
      },
    ],
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
      { date: "Nov 12-15, 2026", label: "Conference week in Montréal" },
    ],
  },
  gallery: {
    title: "Montréal & Venue",
    pageTitle: "Gallery",
    scrollHint: "Scroll the archive",
    label: "Brochure Plates",
    intro:
      "The conference atmosphere depends on setting as much as schedule: arrival, circulation, committee energy, and the city beyond the venue.",
    items: [
      {
        id: "gallery-montreal",
        title: "Montréal at Dusk",
        caption: "A bilingual city with civic gravity and a natural conference bearing.",
        src: pickImage("montreal", "gallery-montreal"),
        alt: "Montréal skyline at dusk with river reflections",
        note: "Montréal skyline at dusk, 16:9, recommended 1600x900",
      },
      {
        id: "gallery-hotel",
        title: "Sheraton Arrival",
        caption: "A centralized hotel footprint supports delegation flow, advisory support, and evening transitions.",
        src: pickImage("sheraton", "gallery-hotel"),
        alt: "Sheraton exterior and conference entrance",
        note: "Sheraton exterior and conference arrival, 16:9, recommended 1600x900",
      },
      {
        id: "gallery-delegates",
        title: "Committee Floor",
        caption: "Debate, drafting, and procedural movement should feel disciplined rather than chaotic.",
        src: pickImage("delegates", "gallery-delegates"),
        alt: "Delegates debating in committee session",
        note: "delegates debating in committee, 3:2, recommended 1600x1067",
      },
      {
        id: "gallery-ballroom",
        title: "Plenary Setting",
        caption: "Opening and closing moments should carry ceremonial weight without excess.",
        src: pickImage("events", "gallery-ballroom"),
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
        label: "Allyship tools from the Montréal Indigenous Community NETWORK",
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
        quote: "Registration, venue flow, and committee expectations should all feel clear before delegates ever arrive.",
        author: "Faculty Advisor",
        role: "Returning delegation advisor",
      },
      {
        quote: "A strong conference feels welcoming, well-run, and academically serious from start to finish.",
        author: "Head Delegate",
        role: "Senior delegation lead",
      },
    ],
  },
  registrationBand: {
    label: "Registration",
    title: "Registration for SSUNS 2026 is now open.",
    body:
      "Registration for SSUNS 2026 is open through MUNager. Delegations can now review the step-by-step guide, current fees, deadlines, and financial aid information before finalizing their roster.",
    cta: { label: "Register now", href: "/registration" },
  },
};
