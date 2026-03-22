export type SecretariatMember = {
  name: string;
  role: string;
  email?: string;
  headshotSrc?: string;
  bio?: string;
};

const secretariatMembers: SecretariatMember[] = [
    { name: "Marcus Kelly", role: "Secretary-General" },
    { name: "Costas Oreopoulos", role: "Chargée d’Affaires" },
    { name: "Mazen Asali", role: "Director-General" },
    { name: "Andrew Tobin", role: "USG Finance" },
    { name: "Hortense Bonnet", role: "USG Admin" },
    { name: "Julien Fournier", role: "Chief of HR" },
    { name: "Léandre Noël", role: "Chief of Ops" },
    { name: "Kiara Gilroy", role: "Director of Events" },
    { name: "Tracy Jiang", role: "Director of PR" },
    { name: "Paul Malpartida Durroux", role: "Dep PR External Outreach" },
    { name: "Hannah Regular", role: "Dep PR Brand Management" },
    { name: "Valeria Fonseca Ortega", role: "USG Committees" },
    { name: "Emma Ristic", role: "Dep GA/ECOSOCs" },
    { name: "Eitan Pessin", role: "Dep Specs" },
    { name: "Will Greer", role: "Dep Crisis" },
];

export const aboutContent = {
  title: "About SSUNS",
  intro:
    "Founded in 1992 by a group of McGill students, the Secondary Schools’ United Nations Symposium (SSUNS) was created to provide secondary-school students with a space to explore global issues through diplomacy and debate.",
  sections: {
    mission: "Mission",
    legacy: "Legacy",
    team: "Team",
    glance: "At A Glance",
  },
  chapters: [
    {
      href: "/about",
      title: "Overview",
      summary: "Institutional profile, legacy, and the mission of SSUNS.",
      body: [
        "Founded in 1992 by a group of McGill students, the Secondary Schools’ United Nations Symposium (SSUNS) was created to provide secondary-school students with a space to explore global issues through diplomacy and debate.",
        "Over the decades, SSUNS has grown into one of the largest Model United Nations conferences for high school students, welcoming delegates from across Canada and around the world. Today, the conference continues to build on this legacy by bringing together students for thoughtful debate, collaboration, and leadership development.",
      ],
    },
    {
      href: "/about/mission",
      title: "Mission",
      summary: "Why SSUNS exists and what it asks of delegates and staff.",
      body: [
        "SSUNS brings together secondary-school delegates from around the world to engage in thoughtful debate on global issues. Through structured diplomacy and collaboration, the conference encourages students to develop critical thinking, communication, and leadership skills while working toward meaningful solutions.",
        "Organized by McGill University students, SSUNS provides both delegates and staff with opportunities to grow as leaders, engage with diverse perspectives, and participate in a conference built on preparation, respect, and intellectual curiosity.",
      ],
    },
    {
      href: "/about/secretariat",
      title: "Secretariat",
      summary: "The student leadership structure responsible for the conference.",
      body: [
        "OUR 15-PEOPLE LEADERSHIP TEAM WORKS YEAR-ROUND TO BUILD THE SSUNS EXPERIENCE.",
        "Throughout the year, the Secretariat works to shape every aspect of the conference from developing committees and guiding the academic program to coordinating logistics and events. Working alongside hundreds of McGill student volunteers, the team brings together the people and ideas that make SSUNS possible.",
        "As students, organizers, and leaders, the Secretariat is proud to help build a conference that challenges delegates, fosters collaboration, and brings the global MUN community together in Montreal.",
        "WE LOOK FORWARD TO WELCOMING YOU TO SSUNS!",
      ],
    },
    {
      href: "/about/coordinators",
      title: "Coordinators",
      summary: "Operational portfolios that translate planning into conference delivery.",
      body: [
        "Meet the coordinators who help make the SSUNS experience possible!",
        "SSUNS would not be possible without their dedication and support.",
      ],
    },
    {
      href: "/about/legacy",
      title: "SSUNS Legacy",
      summary: "A longer view of SSUNS as an institution and annual tradition.",
      body: [
        "Founded in 1992 by a group of McGill students, the Secondary Schools’ United Nations Symposium (SSUNS) was created to provide secondary-school students with a space to explore global issues through diplomacy and debate.",
        "Over the decades, SSUNS has grown into one of the largest Model United Nations conferences for high school students, welcoming delegates from across Canada and around the world. Today, the conference continues to build on this legacy by bringing together students for thoughtful debate, collaboration, and leadership development.",
      ],
    },
    {
      href: "/about/irsam",
      title: "IRSAM",
      summary: "The parent organization behind SSUNS and its wider student programming.",
      body: [
        "SSUNS is part of a larger organisation known as the International Relations Students’ Association of McGill (IRSAM). This federally incorporated, not-for-profit corporation is composed of over 300 student members at McGill University. IRSAM aims to facilitate youth empowerment, leadership and awareness through its multiple portfolios. Furthermore, IRSAM has special consultative status with the Economic and Social Council of the United Nations (ECOSOC), making it one of the only student-run university-affiliated organisations in the world to hold this status at the United Nations.",
        "In addition to SSUNS, there are six other portfolios under IRSAM. These are: McMUN (SSUNS’s sister conference for inter-collegiate competition), the McGill Delegation Team (McGill’s travelling competitive Model UN team), Flux (a peer-reviewed academic journal for student International Relations research), the McGill International Review (An academic online journal for international affairs, news, and culture), Junior Peacemakers (a student-run NGO), and the McGill Youth Advisory Delegation (IRSAM’s delegation in policy-making).",
        "For more information on IRSAM, its portfolios, and the countless opportunities it provides McGill students, please visit the website below.",
      ],
    },
    {
      href: "/about/faqs",
      title: "FAQs",
      summary: "Frequently asked questions for delegates, advisors, and families.",
      body: [
        "What is Model United Nations? Model United Nations (MUN) is an academic simulation where students represent countries or organizations and debate global issues through diplomacy and negotiation. Delegates research their assigned country or character, participate in structured debate, and work together to draft resolutions or directives addressing the topics discussed in committee.",
        "What types of committees does SSUNS offer? SSUNS offers three main categories of committees: General Assemblies and Economical and Social Councils (GAs and ECOSOCs) – our largest committees, focused on major international policy issues; Specialized Committees (SPECs) – medium-sized committees that explore specific institutions, historical contexts, or unique policy topics; Crisis Committees – smaller, fast-paced simulations where events evolve throughout the committee session.",
        "SSUNS also offers several innovative committee formats. Some committees operate as double-delegate committees, where two delegates represent each country together. Our French Bilingual Committee allows francophone delegates to debate and collaborate en français. On the specialized and crisis sides, delegates may also encounter one of SSUNS’s most exciting traditions: the Ad Hoc committee, whose topic remains a mystery until the conference begins.",
        "Who can attend SSUNS? SSUNS is open to secondary-school and Cégep students participating as part of a school delegation.",
        "When and where will SSUNS 2026 take place? The 34th Itinerary of SSUNS will take place November 12–15, 2026 at the Sheraton Montreal Hotel in Montreal.",
        "Can university students attend SSUNS? SSUNS is only open to high school and CEGEP students. University students interested in continuing with MUN are encouraged to attend McMUN, McGill’s university-level conference held each January at the Sheraton Montreal.",
        "How do schools register for SSUNS? Delegations register through MUNager, the official registration platform for SSUNS. Registration for SSUNS 2026 opens April 1, 2026.",
        "How much does SSUNS cost and is there financial assistance available? The price for all delegates and delegations depends on the registration pricing you are registering under. SSUNS recognizes the financial barriers inherent in participating in the conference. In light of this, we will be offering financial aid to both delegations and individual delegates. Please consult the Financial Aid page for more information.",
        "Do delegates need prior MUN experience? No. SSUNS welcomes both first-time delegates and experienced participants.",
        "When will committee assignments be released? Committee assignments and character allocations will be shared with delegations following the registration process.",
        "Where can I find delegate resources or background guides? Information and resources will be available under the tab “Delegates” Delegate Handbook, which will be released prior to the conference, and conduct additional research on their assigned country or character.",
        "What should delegates wear to the conference? Delegates are expected to dress in business attire during committee sessions.",
        "Are faculty advisors required for delegations? Yes. Each school delegation must be accompanied by a faculty advisor or responsible adult.",
        "How can schools stay updated on conference announcements? Schools can subscribe to the SSUNS list-serv to receive updates about registration, resources, and conference announcements.",
      ],
    },
  ],
  mission:
    "SSUNS brings together secondary-school delegates from around the world to engage in thoughtful debate on global issues.",
  legacy:
    "Over the decades, SSUNS has grown into one of the largest Model United Nations conferences for high school students, welcoming delegates from across Canada and around the world.",
  pillars: [
    {
      title: "Student-Led Excellence",
      body: "SSUNS is designed and delivered by McGill University students who organize the conference with professionalism and care.",
    },
    {
      title: "Substantive Rigor",
      body: "Committees explore complex global issues through thoughtful policy discussion and negotiation.",
    },
    {
      title: "Youth Leadership",
      body: "SSUNS empowers young leaders to bring their perspectives and ideas to discussions on global challenges.",
    },
  ],
  teamPlaceholders: [
    { name: "Secretary-General Placeholder", role: "Overall conference leadership and vision." },
    { name: "Director-General Placeholder", role: "Operations, logistics, and venue execution." },
    { name: "USG Committees Placeholder", role: "Committee recruitment, training, and quality control." },
  ],
  secretariatMembers,
  metrics: [
    { label: "Years Running", value: "28+" },
    { label: "Annual Volunteers", value: "300+" },
    { label: "Partner Schools", value: "90+" },
  ],
  image: {
    src: "/placeholders/delegates-1600x1067.jpg",
    alt: "Delegates collaborating during moderated caucus",
    note: "delegates collaborating, 3:2, recommended 1600x1067",
  },
};
