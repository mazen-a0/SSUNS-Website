import { pickImage } from "@/lib/images";

export type SecretariatMember = {
  name: string;
  role: string;
  email?: string;
  headshotSrc?: string;
  bio?: string;
};

const secretariatMembers: SecretariatMember[] = [
  {
    name: "Marcus Kelly",
    role: "Secretary-General",
    headshotSrc: "/headshots/marcus.jpg",
    bio: "Meet Marcus, our beloved Secretary General for SSUNS 2026. If you have not already met him through social media or running around the hotel, Marcus is a 4th year student majoring in International Management and minoring in Political Science. It goes without saying that our Secretary General knows it all about SSUNS and Model UN, from within the committee when he was Vice-chair at SSUNS 2024, to outside committees as SSUNS 2025 Director of Events, but also as a delegate from high-school to McGill’s very own competitive delegation team. Outside of SSUNS, you can see him running or biking around, looking for a place to read or a beach to relax on (most likely in Boston than Montreal). Marcus also enjoys getting involved in other activities on campus, so do not hesitate to give a read to articles from Bull and Bear, a McGill’s student run news magazine, where he is a Managing Editor! As SSUNS 2026 guiding torch, Marcus feels the utmost excitement leading an incredible team and conference for this year, hoping everyone gets to enjoy the full conference experience. His advice for you to have the bestest time? Learn to enjoy waiting for elevators at the Sheraton, it is part of the SSUNS journey. On a MUN related note: “True competition is about respect,” at SSUNS, disrespect will not be tolerated, competition is about respect, fairness, and growth.",
  },
  {
    name: "Costas Oreopoulos",
    role: "Chargé d’Affaires",
    headshotSrc: "/headshots/costas.jpg",
    bio: "Meet our awesome Chargée D’Affaires, Costas Oreopoulos (he/him/il). Costas is a second-year student, with a major in Political Science and a minor in International Development. Originally from Toronto, his journey at SSUNS began when he was in high school, travelling across North America to compete in conferences at Harvard, Georgetown, and Berkeley. His love for SSUNS led to him staying involved after high school, having been a Delegate Resource Center coordinator for its 2025 iteration and now Chargée for its 2026 edition! Outside of the serious stuff, Costas loves all things car-related, so feel free to come up to him during the conference with your hottest Formula 1 take. As a former crisis delegate, Costas’s piece of advice for delegates is use your creativity, as that is your superpower.",
  },
  {
    name: "Mazen Asali",
    role: "Director-General",
    headshotSrc: "/headshots/mazen.jpg",
    bio: "Meet our amazing Director-General, Mazen Asali (he/him/il). Originally from Amman, Jordan, Mazen is currently in his fourth year at McGill and is studying Computer Science and Biology with a minor in Entrepreneurship. Mazen's MUN journey began in high school, where he was a delegate and even organised his school's Model UN conference. He first became involved with SSUNS as a DRC Staffer in 2023 during his first year at McGill and later got involved with the Operations portfolio for both SSUNS and McMUN, serving as the Chief of Operations at SSUNS 2025. Outside of his academic pursuits, Mazen is actively involved in student governance at McGill through the Science Undergrad Society (SUS) and the McGill Biology Student Union. He also has a passion for policy writing and is currently learning French. When not studying, Mazen enjoys reading motivational books, swimming, playing video games, and coding the SSUNS website… Mazen is very excited to meet all the delegates at SSUNS 2026, and if he could give you one piece of advice, it would be: \"Take advantage of being in Montréal and explore this awesome city!\"",
  },
  {
    name: "Valeria Fonseca Ortega",
    role: "USG Committees",
    headshotSrc: "/headshots/vale.jpg",
    bio: "Introducing Valeria (she/her/elle), our amazing Under-Secretary-General of Committees, back for round two! She is currently in her fourth year, pursuing a joint honors degree in Economics and International Development Studies, with a minor in Urban Geography. Now in her third year at SSUNS, she first got involved as a Vice Chair for FEALAC before stepping into Secretariat. Before university, Valeria was heavily involved in public speaking and was selected to represent Mexico at the International Public Speaking Competition (IPSC) hosted by the English-Speaking Union in 2023, where she placed third in the world. At McGill, she has also been part of the delegation team, continuing her passion for MUN and international dialogue. Currently on exchange in Paris, she enjoys finding a good St-Germain Spritz, trying soupe à l’oignon, and stands by quesadillas as the perfect meal at any hour especially at 3 a.m. Valeria speaks “two and a half” languages (with French as the half!), so don’t hesitate to practice your French with her during the conference. Her advice to delegates: think of MUN as “socializing on steroids”. Put yourself out there and make new friends!",
  },
  {
    name: "Emma Ristic",
    role: "Dep GA/ECOSOCs",
    headshotSrc: "/headshots/emma.jpg",
    bio: "Introducing our amazing Undersecretary General of GAs and ECOSOCs, Emma Ristic (she/her/elle). Emma is a third-year student studying Political Science and started her journey with Model UN in university. She has competed across the collegiate circuit with McGill’s delegation team for the past year and a half, travelling to top conferences in Berkeley and Los Angeles while always making sure to find the nearest Chipotle. This year, she hopes to build off her wonderful experience chairing last year at both SSUNS and its sister conference, McMUN. Outside of school and Model UN, she loves going to live music events at Parc Jean-Drapeau and breaking a sweat at hot yoga, so feel free to ask her about her hot takes on pop culture (although she will not debate the cultural influence of 365 by Charli XCX). As a GA delegate her piece of advice for delegates is to be confident in your own speaking style because your personal touch is more important than fitting a checkbox!",
  },
  {
    name: "Eitan Pessin",
    role: "Dep Specs",
    headshotSrc: "/headshots/eitan.jpg",
    bio: "Presenting our passionate Undersecretary General of Specialized Agencies (Dep Spec for short) Eitan Pessin (he/him). Eitan is a second year History and Philosophy major, so you know his committees are crafted with great detail and enthusiasm! In his first semester at McGill, Eitan got rejected from the Ultimate Frisbee team and needed to find an extracurricular to be involved in, which is where he found IRSAM and got involved as part of the McGill Delegation Team, competing on the collegiate circuit and attending multiple conferences. After vice chairing at SSUNS 2025, Eitan knew he wanted to be more involved in the organization of the conference. Outside of IRSAM, Eitan enjoys reading, and although nowadays he only has time for class readings, he is currently reading through “On Photography.” Eitan’s advice to delegates is to never be afraid to ask questions.",
  },
  {
    name: "Will Greer",
    role: "Dep Crisis",
    headshotSrc: "/headshots/will.jpg",
    bio: "Meet Will (he/him/il), our outstanding Deputy USG Crisis. Born and raised in Point Edward, Ontario, Will is a second year student at McGill, where he is double majoring in political science and history. SSUNS 2026 will be Will’s 4th SSUNS, he competed twice in high school, gavelling in the ICJ, and was a committee staffer last year before becoming our Dep Crisis. In his free time, Will is a pitcher for the McGill Redbirds baseball team, an avid sports fan, and a major enthusiast of global politics. If you just so happen to have a problem throughout the weekend, just remember: when there’s a Will, there's a way. His advice to delegates: be authentic and consistent, it’s a marathon, not a sprint.",
  },
  {
    name: "Andrew Tobin",
    role: "USG Finance",
    headshotSrc: "/headshots/andrew.jpg",
    bio: "Introducing Andrew Tobin (he/him/il), our outstanding Undersecretary-General Finance for SSUNS 2026. Andrew is a fourth-year student at McGill, enrolled in the Honours Political Science program alongside a Minor in History. He first got involved with Model UN as an Operations Coordinator McMUN 2025, and then for SSUNS 2025 in November of that same year, and he credits Paul for telling him about the experience and convincing to join the team! He is on exchange in Lund, Sweden for the start of 2026, and then looking forward to returning to Montreal for his final year in the Fall. Andrew is a big hockey fan (Go Habs Go!) and has also been involved in the Political Science Students Association. His piece of advice for delegates is: don’t be afraid to ask questions, and meet as many people as you can, everyone is in the same boat as you so no need to be shy!",
  },
  {
    name: "Hortense Bonnet",
    role: "USG Admin",
    headshotSrc: "/headshots/hortense.jpg",
    bio: "Meet Hortense, our lovely Under-Secretary-General of Administration, the mind behind our beautiful merch, roses, and website. She is currently a third-year at McGill, studying Economics with not one, but two minors in International Development and Management. This is her second year stepping into the role at SSUNS. Last year, you may have seen her as a Registration Coordinator. So how did she end up in the (slightly chaotic) world of MUN? Her friends convinced her that SSUNS was the best way to find a welcoming community at McGill, and along the way, her interest in diplomacy quickly grew. Hortense doesn’t consider herself a “MUN kid,” but rather an “OG UN kid”! When she’s not busy helping out, you’ll likely find her enjoying tiramisu and fondant baulois. Her favorite restaurant? Keeping it very French: L’Entrecôte, where she always orders her steak rare. Her advice? “Connect with everyone. Try new things. Experiment with new debate techniques! In general… get out of your comfort zone…and of course, buy merch!”",
  },
  {
    name: "Julien Fournier",
    role: "Chief of HR",
    headshotSrc: "/headshots/julien.jpg",
    bio: "Meet Julien (he/him/il), our wonderful Chief of Human Resources. Hailing from Montreal, Quebec, he is in his second year of studying International Development and Economics at McGill. This will be his fourth SSUNS, having participated as a delegate and as a DRC coordinator in previous iterations. His MUN journey started at Cégep, where he oversaw the Public Relations, Marketing, and Communications for their high-school level conference and semi-collegiate delegation team. Julien continues to compete on the circuit with the McGill Delegation Team, and although he is ardently committed to Model UN, he has also been doing parliamentary debate for nearly seven years! Outside of academia, he is a \"professional\" barista, a voracious reader, and an architecture aficionado. Feel free to ask him for his opinion on the design of Le centre Sheraton (he's a big fan). Julien is also an assiduous language learner, boasting an incredible 1,200-day Duolingo streak. His advice to delegates is to debate in good faith; think before you speak and be confident in the ethics of your arguments, that is what makes good diplomacy!",
  },
  {
    name: "Léandre Noël",
    role: "Chief of Ops",
    headshotSrc: "/headshots/leandre.jpg",
    bio: "Meet Léandre, SSUNS’ wonderful Chief of Operations, in other words, the heartbeat of the SSUNS weekend! Léandre is in charge of coordinating and organizing every facet of the conference at the hotel, from the room you compete in to the chair you sit in. Léandre is a 5th year at McGill University where he is a Joint Honours Major in Political Science and Environment. Léandre began his SSUNS career in 2023, where he was the Vice-Chair of one of the JCC’s. At SSUNS 2025, Léandre was an Operations Coordinator where he honed his operations skills. When he is not organizing the conference goings, Léandre is playing intramural basketball, in the last tier, at the very bottom of the standings. Léandre believes that the most important thing is to have fun and keep improving in basketball, much like his advice for delegates at SSUNS 2026. Léandre says, “Don’t let others define what a successful conference can be for you, go one step at a time and make yourself proud!”",
  },
  {
    name: "Kiara Gilroy",
    role: "Director of Events",
    headshotSrc: "/headshots/kiara.jpg",
    bio: "Meet Kiara (she/her/elle), our outstanding director of events! Going from the island-life of the south-pacific to the island-life of Montreal, she hails from Tahiti, French Polynesia. She is currently focused on attaining her BA at McGill, majoring in Political Science as a 3rd year. This will be her second SSUNS, having excelled in her role as an Events coordinator in the last iteration of the conference and at McMUN, our sister event! Beyond her extensive MUN experience, Kiara is also an all-star track athlete, and is both on varsity and her national team. Beyond direct participation, she is also an outspoken advocate for sports, believing that they are beneficial for both personal health and community-building. Her advice for delegates is to be kind, be smart, and to think outside of the box! If you need help, reach out; the team is here to support you! And above all else, come to the del gala!!",
  },
  {
    name: "Tracy Jiang",
    role: "Director of PR",
    headshotSrc: "/headshots/tracy.jpg",
    bio: "Meet Tracy Jiang (she/her/elle), our fantastic Chief of Public Relations for SSUNS 2026! Hailing from Montreal, Tracy is a U4 student working towards a BA in Political Science with a minor in International Development Studies. She traces her Model UN roots back to SSUNS, having participated as a delegate before becoming a Branding Design Coordinator in 2025. She is also an active member of the McGill Model UN Delegation Team, having competed in a plethora of collegiate conferences. Beyond being an inspiring presence on the circuit, Tracy is also an avid traveller. She is soon returning from her exchange, which brought her all the way to Hong Kong to enrich her studies. Outside of academics and extracurriculars, she also has a passion for photography, chess, and music. She is one of singer-songwriter Malcolm Todd’s biggest fans, and can listen to hours of music on end. Her advice to SSUNS 2026 delegates is that feeling nervous is normal, but don’t let that stop you from speaking up and engaging with other delegates.",
  },
  {
    name: "Paul Malpartida Durroux",
    role: "Dep PR External Outreach",
    headshotSrc: "/headshots/paul.jpg",
    bio: "Meet Paul, one of our incredible secretariat members at SSUNS 2026! Originally from Panama City, Paul is in his fourth and final year at McGill, pursuing a Joint Honours degree in Political Science and Russian Studies. Despite discovering Model UN only after arriving at McGill, Paul has quickly made his mark on the collegiate circuit, competing with the McGill Delegation Team and awarding at NYUMUN. He has also been very involved behind the scenes, staffing our sister conference McMUN, and serving on the Secretariat last year for SSUNS. Outside of the MUN sphere, you can find Paul diving into Russian literature, keeping a close eye on global geopolitics, or dominating the dodgeball intramural scene as a proud four-time consecutive champion. He is also an active member of the McGill community as the VP Events for SLASA (Spanish and Latin American Student Association of McGill), where he brings people together through community. Paul’s advice to delegates: “The people you meet are as important as the lessons you learn during MUN conferences!”",
  },
  {
    name: "Hannah Regular",
    role: "Dep PR Brand Management",
    headshotSrc: "/headshots/hannah.jpg",
    bio: "Meet Hannah (she/her), our Deputy Director of Public Relations for Brand Management! Hailing from Moncton, New Brunswick, Hannah is going into her fourth year at McGill studying Linguistics and German. A woman of many languages and many talents, you can find her strumming a guitar or playing piano when she's not behind the camera. From crafting fun TikToks to capturing the magic of the opening and closing ceremonies, Hannah is the creative force making sure delegates arrive excited and leave with unforgettable memories. Having joined the team as a photographer for SSUNS and videographer for McMUN, she's no stranger to finding the perfect shot, so smile, because she's probably already got one of you. And to all delegates: four days go by faster than you think, so make every moment count! Come say hi to Hannah at SSUNS 2026!",
  },
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
        "Our coordinator team makes the SSUNS experience, and the conference would not be possible without their dedication and support.",
        "Stay tuned for coordinator profiles as we get closer to SSUNS 2026!",
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
        "In addition to SSUNS, IRSAM supports a wider set of student initiatives, including international relations publishing, youth outreach, policy engagement, and the McGill delegation team.",
        "For more information on IRSAM, its portfolios, and the countless opportunities it provides McGill students, please visit the website below.",
      ],
    },
    {
      href: "/about/faqs",
      title: "FAQs",
      summary: "Frequently asked questions for delegates, advisors, and families.",
      body: [
        "What is Model United Nations? Model United Nations (MUN) is an academic simulation where students represent countries or organizations and debate global issues through diplomacy and negotiation.",
        "How do schools register for SSUNS? Delegations register through MUNager, the official registration platform for SSUNS. Registration for SSUNS 2026 opens April 1, 2026.",
        "How can schools stay updated on conference announcements? Schools can subscribe to the SSUNS list-serv to receive updates about registration, resources, and conference announcements.",
      ],
    },
  ],
  mission:
    "SSUNS brings together secondary-school delegates from around the world to engage in thoughtful debate on global issues.",
  legacy:
    "Over the decades, SSUNS has grown into one of the largest Model United Nations conferences for high school students, welcoming delegates from across Canada and around the world.",
  legacyGlobalSection: {
    title: "Legacy is global",
    body: [
      "SSUNS has never felt confined to one city. Every November, Montréal turns into a meeting point, students arriving with different school cultures and political instincts, all taking diplomacy seriously.",
      "That mix is the point. Put delegates from across Canada in the same room as students from the U.S., Europe, Africa, and beyond, and debate becomes an exchange of perspective, what you value, what you prioritize, and how you persevere when the room pushes back.",
      "That international energy is what gives SSUNS its edge. Committees are global simulations. Friendships form across borders, blocs shift over lunch, and ideas get tested by people who don’t think like you.",
      "You leave sharper, more confident, and more aware of the world you’re stepping into.",
    ],
    locations: {
      canada: ["Toronto", "Vancouver"],
      unitedStates: ["New York", "Boston", "Washington DC", "Chicago"],
      widerWorld: [
        "Kenya",
        "Uganda",
        "Panama",
        "Trinidad and Tobago",
        "Belarus",
        "Ghana",
        "Nigeria",
        "Bahamas",
        "Nepal",
        "Cameroon",
        "Cuba",
        "Ethiopia",
        "Puerto Rico",
        "Burkina Faso",
        "Morocco",
        "Haiti",
        "Germany",
        "Nicaragua",
      ],
    },
  },
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
  secretariatMembers,
  faqCategories: [
    {
      title: "Conference Basics",
      items: [
        {
          question: "What is Model United Nations?",
          answer:
            "Model United Nations (MUN) is an academic simulation where students represent countries or organizations and debate global issues through diplomacy and negotiation. Delegates research their assigned country or character, participate in structured debate, and work together to draft resolutions or directives addressing the topics discussed in committee.",
        },
        {
          question: "What types of committees does SSUNS offer?",
          answer:
            "SSUNS offers three main categories of committees: General Assemblies and Economical and Social Councils (GAs and ECOSOCs) – our largest committees, focused on major international policy issues; Specialized Agencies (SPECs) – medium-sized committees that explore specific institutions, historical contexts, or unique policy topics; Crisis Committees – smaller, fast-paced simulations where events evolve throughout the committee session. SSUNS also offers several innovative committee formats. Some committees operate as double-delegate committees, where two delegates represent each country together. Our French Bilingual Committee allows francophone delegates to debate and collaborate en français. On the specialized and crisis sides, delegates may also encounter one of SSUNS’s most exciting traditions: the Ad Hoc committee, whose topic remains a mystery until the conference begins.",
        },
        {
          question: "Who can attend SSUNS?",
          answer: "SSUNS is open to secondary-school and Cégep students participating as part of a school delegation.",
        },
        {
          question: "When and where will SSUNS 2026 take place?",
          answer: "The 34th Itinerary of SSUNS will take place November 12–15, 2026 at the Sheraton Montreal Hotel in Montreal.",
        },
        {
          question: "Can university students attend SSUNS?",
          answer:
            "SSUNS is only open to high school and CEGEP students. University students interested in continuing with MUN are encouraged to explore university delegations and campus conference opportunities.",
        },
      ],
    },
    {
      title: "Registration & Delegations",
      items: [
        {
          question: "How do schools register for SSUNS?",
          answer:
            "Delegations register through MUNager, the official registration platform for SSUNS. Registration for SSUNS 2026 opens April 1, 2026.",
        },
        {
          question: "How much does SSUNS cost and is there financial assistance available?",
          answer:
            "The price for all delegates and delegations depends on the registration pricing you are registering under, for example Early Bird and Priority have different prices, please see registration information for more information. SSUNS recognizes the financial barriers inherent in participating in the conference. In light of this, we will be offering financial aid to both delegations and individual delegates. Please consult the Financial Aid page for more information.",
        },
        {
          question: "Are faculty advisors required for delegations?",
          answer: "Yes. Each school delegation must be accompanied by a faculty advisor or responsible adult.",
        },
        {
          question: "How can schools stay updated on conference announcements?",
          answer: "Schools can subscribe to the SSUNS list-serv to receive updates about registration, resources, and conference announcements.",
        },
      ],
    },
    {
      title: "Preparation & Conference Life",
      items: [
        {
          question: "Do delegates need prior MUN experience?",
          answer: "No. SSUNS welcomes both first-time delegates and experienced participants.",
        },
        {
          question: "When will committee assignments be released?",
          answer: "Committee assignments and character allocations will be shared with delegations following the registration process.",
        },
        {
          question: "Where can I find delegate resources or background guides?",
          answer:
            "Information and resources will be available under the tab “Delegates”. The Delegate Handbook, which will be released prior to the conference, should be reviewed alongside additional research on each assigned country or character.",
        },
        {
          question: "What should delegates wear to the conference?",
          answer: "Delegates are expected to dress in business attire during committee sessions.",
        },
      ],
    },
  ],
  metrics: [
    { label: "Delegates", value: "1300+" },
    { label: "Staff", value: "250+" },
    { label: "Schools", value: "60+" },
  ],
  image: {
    src: pickImage("delegates", "about-overview"),
    alt: "Delegates collaborating during moderated caucus",
    note: "delegates collaborating, 3:2, recommended 1600x1067",
  },
};
