export type Committee = {
  id: string;
  slug: string;
  name: string;
  level: string;
  theme: string;
  size: string;
  blurb: string;
  overview: string;
  topic: string;
  difficulty: string;
  format: string;
  chairs: Array<{ name: string; bio: string }>;
  resources: string[];
  backgroundGuide: string;
  imageSrc?: string;
  isArchive?: boolean;
};

export const committeesPageContent = {
  title: "Committees",
  intro:
    "Featuring General Assemblies (GAs), Economic and Social Councils (ECOSOCs), Specialized Agencies (SPECs), and Crisis Committees.",
  chapters: [
    {
      href: "/committees",
      title: "Committee Slate",
      summary: "Committee descriptions, dais contacts, and programme notes for the 2026 slate.",
      body: [
        "Dear SSUNS 2026,",
        "My name is Valeria Fonseca Ortega, and I am back to serve my second year as Under-Secretary-General for Committee Affairs. Coming back a second time has made this iteration of SSUNS even more exciting, and I, alongside the rest of Team Committees: Emma Ristic, Deputy USG for GA and ECOSOCs; Eitan Pessin, Deputy USG for Specialized Agencies; and William Greer, Deputy USG for Crisis, have worked hard to carefully craft committees that are outside the box, push for perspectives that are often disregarded, and overall contain great educational material.",
        "We have aimed to showcase a diversity of subjects in both geographical, historical, and thematic spheres. This year, we are proud to bring forth the first iteration of the United Nations Security Council, alongside committees like the First Pan-Slavic Congress of 1848 and the Pan-African Film and Television Festival of Ouagadougou.",
        "Our goal is simple: foster debate, exchange ideas, challenge perceptions, and create meaningful dialogue. Above all, SSUNS stands not as a competition, but rather as a forum for young leaders to find their voices in a world where dialogue is often disregarded as one of the most powerful tools.",
        "SSUNS is not about who wins, but rather about how we can connect with others. For that matter, our awards are catered towards specific soft skills that include advocacy, ingenuity, leadership, and diplomacy. These are skills that are not taught in classrooms, but rather learned from experience.",
        "I first participated in a Model United Nations simulation at the age of 13, competing in English and engaging with differing perspectives, and that experience opened the world for me, leading me to study international development today and develop an ever-growing thirst for understanding the world around me.",
        "Faculty Advisors are the proponents of cultivating education and knowledge; delegates, you are the hope for us all. And so, I ask you to push your students, not conform, and recognize how dialogue is as powerful as any other tool.",
        "I look forward to developing all the details for this fascinating conference. If you feel SSUNS can expand educationally, do not hesitate to reach out. We are committed to growing and continuously improving.",
        "Thank you,",
      ],
    },
    {
      href: "/committees/awards",
      title: "Awards",
      summary: "Individual and delegation awards at SSUNS 2026.",
      body: [
        "SSUNS is first and foremost a friendly environment and collective learning experience. As such, awards at SSUNS are bestowed upon those delegates whose behaviour enriches the learning of their peers to an exceptional degree. Awards at SSUNS are granted under two broad categories: Individual Awards & Delegation Awards.",
        "Gavel.",
        "Viola Desmond Award for Advocacy — Presented to the delegate who embodies perseverance and advocacy.",
        "Hide Hyodo Shimizu Award for Peacemaking (only for GAs, ECOSOCs, & SAs) — Presented to the delegate who embodies peacemaking through leadership and civility in diplomatic conduct.",
        "Frederick Banting for Ingenuity (only for Crisis) — Presented to the delegate who demonstrates significant creativity and innovation.",
        "Sergeant Tommy Prince Award for Diplomacy — Presented to the delegate who demonstrates innovative and creative policy writing as well as an eloquent and persuasive manner of speech.",
        "All gavel awards are considered equivalent; there is no ranking between the individual gavel awards.",
        "Outstanding Delegate Award.",
        "SSUNS Outstanding Delegate Award — Presented to the delegate who displays the most in-depth knowledge and understanding of the committee and topics, both in their position paper and debate. The delegate will be presented with a committee-related book.",
        "Honourable Mention Certificate.",
        "Honourable Mention — Awarded to the delegate who displays the most promising qualities of a rising diplomat in the making.",
        "Large Delegation. Delegations whose size falls above the median size of SSUNS delegations are considered eligible for large delegation awards. The awards available are: Best Large Delegation and Outstanding Large Delegation.",
        "Small Delegation. Delegations whose size falls below the median size of SSUNS delegations are considered eligible for small delegation awards. The awards available are: Best Small Delegation and Outstanding Small Delegation.",
      ],
    },
    {
      href: "/committees/policies",
      title: "Committee Policies",
      summary: "Technology policy by committee size and format for SSUNS 2026.",
      body: [
        "Technology Policy SSUNS 2026.",
        "Please note that the SSUNS 2026 technology policy has changed and will vary by committee size and format. As SSUNS will run as a hybrid conference, the policies for GAs, ECOSOCs, Specialized Agencies, and Crisis committees will differ.",
        "Double-Delegate General Assemblies. Double-Delegate General Assemblies (FAO and UNHR) will operate as paperless committees, with Slack serving as the primary platform for communication between Dais and delegates. Delegates are allowed to use laptops and personal devices during committee sessions, both in-room and out-of-room. Despite this, delegates are expected to arrive fully prepared, with all research completed prior to the conference. During moderated caucuses, devices must only be for note-passing via Slack.",
        "Small General Assemblies, ECOSOCs, and Specialized Agencies. These committees will follow a tech-free format, with the exception of online draft writing. Notes must be passed physically, digital note-passing is not allowed. Laptops and personal devices must be put away during moderated caucuses, unless specific accommodations have been approved. Devices may be used only during unmoderated caucuses for drafting working papers or resolutions. Delegates should come prepared with printed copies of their research to minimize reliance on devices during sessions. For Specialized Agencies, directives will be written by hand on paper.",
        "Crises. Delegates are required to use paper for all in-committee functions. Additional crisis-specific policy updates will be communicated by dais as materials are finalized.",
      ],
    },
  ],
  heroImage: {
    src: "/committees/2026/who-2026.jpg",
    alt: "Delegates in active committee session",
    note: "delegates in active committee, 4:3, recommended 1200x900",
  },
  continueLabel: "Continue to Conference Program",
  searchLabel: "Search committees",
  searchHint: "Search by name, topic, format, or level",
  allOptionLabel: "All",
  filterThemeLabel: "Track",
  filterLevelLabel: "Level",
  sizeLabel: "Room Size",
  clearFiltersLabel: "Clear filters",
  openDetailsLabel: "Open dossier",
  noResults: "No committees match your filters.",
  detailBackLabel: "Back to all committees",
  detailCloseLabel: "Close dossier",
  groups: {
    ga: "General Assemblies",
    ecosoc: "ECOSOCs",
    specialized: "Specialized Agencies",
    crisis: "Crisis",
    jointCrisis: "Joint Crisis",
  },
  sections: {
    overview: "Overview",
    difficulty: "Difficulty",
    topic: "Topic",
    format: "Format",
    chairs: "Chair Bios",
    resources: "Resources",
    guide: "Background Guide",
  },
};

const noChairs: Array<{ name: string; bio: string }> = [];
const noResources: string[] = [];

function committeeImage(slug: string) {
  return `/committees/2026/${slug}.jpg`;
}

function makeCommittee(input: Omit<Committee, "id" | "chairs" | "resources" | "backgroundGuide" | "imageSrc">): Committee {
  return {
    ...input,
    id: input.slug,
    chairs: noChairs,
    resources: noResources,
    backgroundGuide: "Background guides will be released closer to the conference.",
    imageSrc: committeeImage(input.slug),
  };
}

export const committees: Committee[] = [
  makeCommittee({
    slug: "who-2026",
    name: "World Health Organization (WHO)",
    level: "Regular",
    theme: "General Assemblies",
    size: "Double Delegation",
    blurb: "Strengthening Support for Healthcare Workers in Emerging Markets.",
    overview:
      "As the frontline responders to everyday public health issues, pandemics, and humanitarian crises, healthcare workers form the very backbone of society’s well-being. However, the unique environment these individuals work in increases their vulnerability to physical deterioration, psychological fatigue, and workplace issues. This World Health Organization double delegation committee will explore the distinctive obstacles these vital people face, specifically in the context of emerging markets. The healthcare systems of emerging markets experience resource limitations, higher disease burdens, and increased workplace risks. Discussions will dive into the particular experiences of these workers, the structural challenges that shape these, and the need for stronger protection, support, and long-term sustainability within these healthcare workforces. Delegates will bring solutions to life with the ultimate goal of supporting those who protect global health.",
    topic: "Strengthening Support for Healthcare Workers in Emerging Markets",
    difficulty: "This is a Double Delegate Committee.",
    format: "General Assembly",
  }),
  makeCommittee({
    slug: "ccpcj-2026",
    name: "Commission on Crime Prevention and Criminal Justice (CCPCJ)",
    level: "Regular",
    theme: "General Assemblies",
    size: "Double Delegation",
    blurb: "Combatting Environmental Crime Worldwide.",
    overview:
      "Environmental crime has long been a profitable form of transnational organized crime worldwide, threatening ecosystems, undermining governance, and endangering the lives of vulnerable communities. This form of crime manifests in many ways, including through the illegal trafficking of wildlife, the illicit mining and resource extraction, and the unlawful dumping of hazardous waste and environmental hazards. Delegates will explore dynamics in situations like poaching networks in Africa, Indigenous land right violations through gold mining in the Amazon, and the Campania Toxic Waste Crisis by the Camorra Mafia. This Commission on Crime Prevention and Criminal Justice double delegation committee will examine these growing networks of crime, the particular obstacles faced in trying to prevent them, and the unique solutions required to dismantle these industries. Operating at the international level, delegates will develop strategies to strengthen environmental governance and accountability mechanisms.",
    topic: "Combatting Environmental Crime Worldwide",
    difficulty: "This is a Double Delegate Committee.",
    format: "General Assembly",
  }),
  makeCommittee({
    slug: "wto-2026",
    name: "World Trade Organization (WTO)",
    level: "Advanced",
    theme: "Economic and Social Councils",
    size: "Single Delegation",
    blurb: "Integrating Climate Change Mitigation Into Global Trade Policy.",
    overview:
      "As climate change accelerates at an unprecedented rate, states are increasingly facing the pressure of adapting their markets to current ecological conditions. International trade plays a major role in the modern world and this influence inextricably links trade to other sectors, namely the environment. As countries attempt a transition toward lower-carbon economies, trade must begin to integrate climate change mitigation to smoothen the shift. Delegates must consider how different countries can support initiatives such as adjusting carbon border mechanisms, including environmental standards in trade agreements, or providing green subsidies. At the same time, they should remain cautious about emerging economic tools, like the carbon credit market, which can be misused. This World Trade Organization committee will explore how climate diplomacy and trade in today’s markets can intertwine to produce a better future. The ultimate goal of this committee is to recognize the diversity of global markets and the uneven impacts of climate change worldwide to craft nuanced resolutions that integrate climate mitigation into international trade.",
    topic: "Integrating Climate Change Mitigation Into Global Trade Policy",
    difficulty: "This is an Advanced Committee.",
    format: "ECOSOC",
  }),
  makeCommittee({
    slug: "ifad-2026",
    name: "International Fund for Agricultural Development (IFAD), Asia-Pacific Office",
    level: "Beginner",
    theme: "Economic and Social Councils",
    size: "Single Delegation",
    blurb: "Advancing Sustainable Agricultural Innovation in the Asia-Pacific Region.",
    overview:
      "The Asia-Pacific region faces unique agricultural challenges due to its extreme population density, high vulnerability to natural disasters and soil degradation. The prominence of agrarian economies and the important role of agriculture in GDP raises questions surrounding the sustainability of agricultural practices in the region. This International Fund for Agricultural Development committee for beginner delegates will explore agricultural practice and pesticide use. Additionally, the role of genetically modified crops and agricultural biotechnology will be analyzed, ensuring that both their potential to improve food security and their ethical concerns are addressed. The ultimate goal of discussions should be practice solutions that can meet the distinct needs of the Asia-Pacific, without compromising long-term ecological sustainability.",
    topic: "Advancing Sustainable Agricultural Innovation in the Asia-Pacific Region",
    difficulty: "This is a Beginner Committee.",
    format: "ECOSOC",
  }),
  makeCommittee({
    slug: "fespaco-2026",
    name: "Pan-African Film and Television Festival of Ouagadougou (FESPACO)",
    level: "Regular",
    theme: "Economic and Social Councils",
    size: "Single Delegation",
    blurb: "Expanding the Global Reach of African Cinema.",
    overview:
      "The Pan-African Film and Television Festival of Ouagadougou is the largest and most influential film festival dedicated to African cinema. Held biannually in Ouagadougou in Burkina Faso, it showcases African cinema and diaspora films. Its 29th edition was held in 2025 and its next iteration is scheduled for February of 2027. Despite the richness and diversity of African cinema, structural barriers like limited distribution networks and unequal access to global media markets frequently prevent these movies from reaching broader international audiences. This FESPACO committee will explore how African states and cultural institutions can collaborate to expand the visibility of these films, while maintaining the integrity of the domestic industries that produce them. Delegates will have discussions on strategies to facilitate these films’ screenings worldwide. The final goal of this committee is solutions ensuring African stories are represented and accessible at the international level.",
    topic: "Expanding the Global Reach of African Cinema",
    difficulty: "This is a regular committee.",
    format: "ECOSOC",
  }),
  makeCommittee({
    slug: "sdg-12-2026",
    name: "SDG 12 - Global Fashion Summit, Copenhagen 2026",
    level: "Regular",
    theme: "Economic and Social Councils",
    size: "Single Delegation",
    blurb: "Addressing Environmental Extraction and Labour Exploitation in the Fast Fashion Industry.",
    overview:
      "With over 92 million tonnes of textile waste produced annually, the rapid growth of the fast fashion industry has become a critical factor in global development. The Global Fashion Summit, held yearly in Copenhagen, is a conference that convenes key stakeholders globally to discuss the evolution of the fashion industry. As one of the world’s most resource-intensive industries, fashion faces pressure to address its environmental and social impacts. This Global Fashion Summit committee will explore persistent labour exploitation within fast fashion garment supply chains, the environmental consequences of cotton cultivation and chemical pollution, and the regulatory gaps that allow these practices to prevail. Delegates’ strategies must acknowledge both the social and environmental aspects of the industry, with the goal of these discussions to encourage sustainable garment production.",
    topic: "Addressing Environmental Extraction and Labour Exploitation in the Fast Fashion Industry",
    difficulty: "This is a regular committee.",
    format: "ECOSOC",
  }),
  makeCommittee({
    slug: "unhrc-2026",
    name: "United Nations Human Rights Council (UNHRC)",
    level: "Regular",
    theme: "Economic and Social Councils",
    size: "Single Delegation",
    blurb: "Preventing the Criminalization of Indigenous Land Defenders in Resource Extraction Conflicts.",
    overview:
      "Indigenous Peoples are no strangers to government-backed resource extraction projects like pipelines and hydroelectric developments. Between the Coastal GasLink Pipeline and Mapuche land defense, Indigenous land defenders have continuously mobilized to protect their ancestral territories from projects threatening their security, survival, and sovereignty. Participation in these movements often makes Indigenous protesters targets of the state, as they are perceived as criminals and surveilled intensively. This United Nations Human Rights Council committee will dive into the criminalization of Indigenous land defenders in its three phases: the tactical use of force during mobilizations themselves, corporate-state relationships incentivizing the poor treatment of defenders, and the extreme levels of surveillance post-protest. Delegates will examine how international human rights frameworks and mechanisms can better protect Indigenous land defenders, while addressing the social and political circumstances that enabled these processes.",
    topic: "Preventing the Criminalization of Indigenous Land Defenders in Resource Extraction Conflicts",
    difficulty: "This is a regular committee.",
    format: "ECOSOC",
  }),
  makeCommittee({
    slug: "icao-2026",
    name: "International Civil Aviation Organization (ICAO)",
    level: "Regular",
    theme: "Economic and Social Councils",
    size: "Single Delegation",
    blurb: "Leveraging Aviation Technology in Disaster Relief.",
    overview:
      "With natural disasters increasing in both frequency and intensity, immense pressure is being placed on global emergency response systems. Simultaneously, aviation has become a critical tool in delivering humanitarian aid, conducting search-and-rescue missions, and restoring stability in affected regions when ground infrastructure is not accessible. This International Civil Aviation Organization committee will dive into how aviation technology can strengthen disaster response through initiatives like quicker airspace coordination, the establishment of emergency air corridors, and the deployment of unmanned aerial systems for damage assessment. Delegates will work to develop resolutions international authorities can adapt to coordinate air space response more effectively, alleviating the damage in social, economic, and cultural facets in the lives of those most affected.",
    topic: "Leveraging Aviation Technology in Disaster Relief",
    difficulty: "Some sessions might take place outside the Sheraton Hotel.",
    format: "ECOSOC",
  }),
  makeCommittee({
    slug: "penguins-2026",
    name: "Waddle We Do Now? - Penguin Random House, Board of Directors",
    level: "Regular",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "Responding to the Generational Shift in Media Consumption.",
    overview:
      "In an era where screens compete with shelves, the art of storytelling faces a generational reckoning. Young readers increasingly consume stories through digital platforms, audiobooks, and something the adults keep calling TikTok, and with literacy development and reading rates rapidly falling. For the Penguin Random House Board of Directors, this challenge must become opportunity if the company is to survive. While print remains iconic, the future demands innovation in formats, distribution, and marketing, and a strong response to the challenges of contemporary publishing. From book banning to content mills and endlessly recycled online storytelling, Penguin Random House must find the balance between honoring its literary heritage and adapting to the desires of an online generation, otherwise its future may remain unwritten.",
    topic: "Responding to the Generational Shift in Media Consumption",
    difficulty: "This is a regular committee.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "nhl-2026",
    name: "On Thin Ice - The National Hockey League",
    level: "Regular",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "2004-2005 NHL Lockout.",
    overview:
      "On the ice of North America’s most famous arenas, a cold war erupts, not of skates and sticks, but dollars and contracts. The 2004-2005 NHL faces an unprecedented shutdown as owners and players clash over salaries, revenue sharing, and the implementation of a hard salary cap. Owners argue that financial stability demands tough reforms, while players insist that their decades of skill and training deserve fair compensation. Media speculations run rampant, sponsors grow anxious and international leagues begin to see opportunities for growth. Across the months of tense negotiations, teams fracture, arenas remain silent, and loyal fans are left staring at empty rinks. Will the league emerge with a new financial order that preserves the sport’s integrity, or will the game’s players, fans, and culture suffer irreparable damage?",
    topic: "2004-2005 NHL Lockout",
    difficulty: "This is a regular committee.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "icj-2026",
    name: "Temple Turmoil - International Court of Justice",
    level: "Regular",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "Temple of Preah Vihear (Cambodia v. Thailand).",
    overview:
      "At The Hague, history and law collide over a centuries-old temple perched atop the Dangrek Mountains. Cambodia and Thailand face one another before the International Court of Justice in a dispute over sovereignty of the Temple of Preah Vihear, an ancient Khmer sanctuary that has become a flashpoint of nationalism, diplomacy, and international law. Colonial-era maps, contested borders, and decades of political tension will be placed under judicial scrutiny as the Court weighs the legal status of the territory and the authority of past rulings. Yet the case extends beyond the temple’s stone walls. At stake are questions of territorial sovereignty, the power of international adjudication, and the lingering consequences of borders drawn in another era. Will the Court deliver a decisive legal precedent that settles the dispute, or will the echoes of history continue to challenge the reach of international law?",
    topic: "Temple of Preah Vihear (Cambodia v. Thailand)",
    difficulty: "This is a regular committee.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "praguematic-2026",
    name: "Prague-matic Unity - First Pan-Slavic Congress of 1848",
    level: "Regular",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "Constructing the Slavic Identity.",
    overview:
      "In the heart of Europe, revolution is in the air. It’s 1848, and the streets of Prague buzz with the energy of change. Delegates from across the Slavic lands; Czechs, Poles, Slovaks, and South Slavs, gather for the inaugural First Pan Slavic Congress, to cooperate and develop a vision for the future of Slavic peoples. They will debate language rights, national autonomy, empire, and the promise of democracy, even as violent revolutions sweep through central Europe. The air is thick with both hope and tension: can diverse peoples, long suppressed by imperial structures, find common cause? Conservative forces beg caution while liberal and radical movements push for bold change. Will the outcomes of the Congress shape the future of nationalist movements across Central and Eastern Europe? Or will they might be diluted and drowned in a sea of repression and political compromise?",
    topic: "Constructing the Slavic Identity",
    difficulty: "This is a regular committee.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "mof-2026",
    name: "Outre-Mer or Outrage? - Ministry of Overseas France, French Bilingual",
    level: "Regular",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "2009 Guadeloupe and Martinique Labor Strikes.",
    overview:
      "In the Caribbean, islands of vibrant culture erupt with unrest. It’s 2009, and Guadeloupe and Martinique are facing labor strikes that are shaking their economies and societies. Workers, angered by soaring living costs, stagnant wages, and entrenched inequality, shut down ports, factories and streets, turning protests into a vivid display of local identity. Carnival rhythms, folk songs, and Creole slogans echoed through the demonstrations, integrating cultural pride with political demands. The strikes are the outcome of long-standing tensions between the islands and metropolitan France, occurring against a backdrop of cultural dissonance and colonial legacy. With each passing day, the situation grows worse, as food shortages, disrupted tourism and high-stakes negotiations threaten the island's already fragile economy. Can the islands secure meaningful reforms, or will the protests deepen fractures between citizens and government? Amid chants, barricades, and impassioned speeches, the 2009 strikes reveal the delicate balance between justice, survival, and the weight of history in postcolonial societies.",
    topic: "2009 Guadeloupe and Martinique Labor Strikes",
    difficulty: "Debate will be in French and English.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "dam-right-2026",
    name: "Dam Right - Cree & Inuit Summit",
    level: "Regular",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "The James Bay Hydroelectric Project.",
    overview:
      "In the early 1970s, the rivers of northern Quebec became the focus of one of the world’s most ambitious hydroelectric plans: the James Bay Project. Massive dams promised to generate huge amounts of electricity and transform Quebec into an energy powerhouse. However, the project advanced without consulting the Indigenous peoples whose lands would be flooded. For the Cree and Inuit communities, the development threatened hunting territories, migration routes, and fragile northern ecosystems. In response, Indigenous leaders organized politically and legally through groups such as the Grand Council of the Crees, the Northern Quebec Inuit Association. Their actions brought the project to court, forcing governments and developers to confront Indigenous land rights. In this committee, delegates represent Cree and Inuit leadership gathering to coordinate a response to the rapid development of the James Bay hydroelectric project. Should they attempt to halt construction through legal and political action, negotiate protections and recognition of rights, or pursue new strategies to defend their lands, cultures, and futures? The decisions made here could reshape the balance between development, Indigenous sovereignty, and environmental stewardship in northern Quebec.",
    topic: "The James Bay Hydroelectric Project",
    difficulty: "This is a General Assembly Heavy Specialized Agency.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "tyre-siege-2026",
    name: "Great Expectations - War Council of Alexander the Great, 332 BC",
    level: "Regular",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "The Siege of Tyre.",
    overview:
      "On the rocky shores of the eastern Mediterranean, a small island fortress has the gall to defy the greatest conqueror of their age. The city of Tyre, with towering walls, powerful navy, and wealthy merchants, is one of the most formidable strongholds in the region, yet it stands directly in the path of Alexander the Great, and his relentless campaign against the Achaemenid Kingdom. After a Tyrian refusal to let Alexander sacrifice at a temple in their city, a siege unlike any other is set in motion. With no fleet strong enough to challenge Tyre at sea, Alexander and his army must overcome Tyre’s defenses through creativity and ingenuity, before time, resources, and morale run out. In a struggle of resourcefulness, endurance, and ambition, the fate of a city and the legend of a conqueror hang in the balance.",
    topic: "The Siege of Tyre",
    difficulty: "This is a Crisis Heavy Specialized Agency.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "ad-hoc-2026",
    name: "Ad-Hoc Specialized Agency",
    level: "Regular",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "Topic revealed at conference check-in.",
    overview:
      "SSUNS’ Ad-Hoc Specialized Agency is intentionally kept under wraps until the conference begins. Delegates should expect a surprise briefing, a room that rewards adaptable research habits, and a committee experience that asks them to think quickly once the full mandate is unveiled.",
    topic: "To be revealed at the conference",
    difficulty: "This is an Ad Hoc Specialized Agency.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "chess-2026",
    name: "Shadows on the Chessboard - The Great Game, 1837",
    level: "Regular",
    theme: "Joint Crisis Committees",
    size: "Single Delegation",
    blurb: "Russian Empire vs. British Empire.",
    overview:
      "Throughout the 19th century, the Central Asian arena became the focal point of a silent war, a cold war, based on geopolitical rivalry and regional dominance. Across the mountains and deserts of the region, the Russian and British empires were quietly playing chess. As the Russian Empire pursued regional hegemony, often through the conquest of Central Asian khanates, the British Empire feared the loss of its colonial crown jewel, India. Considering both Empires feared major war, delegates will take on the role of the intelligence apparatus for each empire, focusing on espionage, mapping, and diplomacy to achieve their respective Empire’s goals. The question now remains: will one empire quietly checkmate the other? Or will the analogies and shadows break, bringing both empires to the brink of a direct conflict neither can control?",
    topic: "Russian Empire vs. British Empire",
    difficulty: "This is a Joint-Crisis Committee.",
    format: "Joint Crisis",
  }),
  makeCommittee({
    slug: "festival-rivalry-2026",
    name: "Setlist Sabotage - The Festival Rivalry, 2027",
    level: "Regular",
    theme: "Joint Crisis Committees",
    size: "Single Delegation",
    blurb: "Osheaga vs Lollapalooza.",
    overview:
      "In the summer of 2027, two festival giants are set to collide. Osheaga and Lollapalooza are both scheduled to take place from August 1–3, 2027, within just miles of each other; competing for the same artists, audiences, and headlines. With overlapping lineups and clashing schedules, the race is on to see which festival can draw the biggest crowds and dominate the summer music scene. On one hand, Osheaga has become a Montreal summer icon, hosting headlining artists such as Tate McRae and Lorde in recent years and earning praise from major performers like Noah Kahan, who called it one of the “best music festivals.” On the other, Lollapalooza brings the legacy of a global festival powerhouse, featuring chart-topping artists such as Olivia Rodrigo, Sabrina Carpenter, and RÜFÜS DU SOL. Will the iconic Canadian festival hold its ground, or will the Chicago-born classic steal the spotlight? In this Joint Crisis Committee, delegates will step into the roles of the two festivals’ management teams, competing to secure artists, attract fans, and ultimately determine which festival will reign supreme.",
    topic: "Osheaga vs Lollapalooza",
    difficulty: "This is a Joint-Crisis Committee.",
    format: "Joint Crisis",
  }),
  makeCommittee({
    slug: "versace-2026",
    name: "The Last Stitch - The Fall of the House of Versace, 1997",
    level: "Regular",
    theme: "Crisis Committees",
    size: "Single Delegation",
    blurb: "Board of Directors.",
    overview:
      "On July 15th, 1997, news of the assassination of Gianni Versace spread across newspapers and television screens around the world. The founder and creative force behind Versace, one of the most prominent Italian luxury fashion houses, had been brutally murdered outside his home in Miami. For decades, Versace had been held together by Gianni’s bold vision, creativity, and leadership. Now, the company faces its most turbulent moment. His sister, Donatella Versace, is expected to step into a leading role, yet the question remains whether the house can survive without its founder. As members of the Board of Directors, delegates must navigate a company in crisis. Versace is not merely a brand, it is a cultural symbol and a defining force within the fashion industry. The board must stabilize the company, manage intense global media scrutiny, preserve the brand’s iconic identity, and determine the future direction of the house. At the same time, the global fashion industry watches closely. Rival houses, investors, and the media all wait to see who will take command of the Versace legacy. Will Donatella inherit the brand and continue Gianni’s daring vision, or will the House of Versace take a new and unexpected direction?",
    topic: "The Fall of the House of Versace, 1997",
    difficulty: "This is a regular committee.",
    format: "Crisis",
  }),
  makeCommittee({
    slug: "newsboys-2026",
    name: "Extra! Extra! Read All About It - Newsboys' Strike of 1899",
    level: "Regular",
    theme: "Crisis Committees",
    size: "Single Delegation",
    blurb: "Newsboys' Strike of 1899.",
    overview:
      "The daily morning newspaper in 1899 was the heartbeat of every American city, until it stopped arriving. What if the most vital link in the supply chain refused to work? In early August 1899, the newsboys, children who hawked papers on street corners, went on strike to demand fair pay from the powerful newspaper companies that were profiting from their labor. Armed with courage, cleverness, and street smarts, these young workers challenged economic giants and showed that even the smallest voices could make a big impact. In this committee, delegates will debate the rights of these newsboys, negotiate with newspaper owners, and explore strategies to give young workers recognition and leverage. Will the strike spark reform, inspire future entrepreneurs, or be crushed by the media tycoons? The outcome rests in the hands of the board, and every decision has the power to rewrite history.",
    topic: "Newsboys' Strike of 1899",
    difficulty: "This is a regular committee.",
    format: "Crisis",
  }),
  makeCommittee({
    slug: "unsc-2026",
    name: "Las Malvinas or the Falklands? - United Nations Security Council",
    level: "Regular",
    theme: "Crisis Committees",
    size: "Double Delegation",
    blurb: "The Falklands War (1982).",
    overview:
      "On April 2nd, 1982, armed forces from Argentina invaded and occupied the Falkland Islands, a British territory 300 miles off the southeastern coast of South America in the Atlantic Ocean. Argentina’s claim argued that it had inherited the islands, known as the Islas Malvinas in Argentina, from Spain upon independence. However, the British had maintained peaceful administration of the islands since 1833. Furthermore, the British claimed that the islands’ inhabitants had exercised their right to self-determination. As British naval vessels head toward the islands, the world watches as diplomacy races against armed conflict. The Security Council must navigate the tensions between the two nations to prevent further escalation and resolve the conflict. However, the question remains: Will the Council succeed in preserving peace in time, or will the conflict come to characterize a broken and divided geopolitical order?",
    topic: "The Falklands War (1982)",
    difficulty: "This is a Double Delegate Committee.",
    format: "Crisis",
  }),
  makeCommittee({
    slug: "khanflict-2026",
    name: "Khanflict - The Great Kurultai of the Mongol Empire, 1290",
    level: "Regular",
    theme: "Crisis Committees",
    size: "Single Delegation",
    blurb: "Collapse of the Pax Mongolica and the struggle to control Eurasian trade.",
    overview:
      "For most of the 13th century, the empire founded by Genghis Khan controlled a majority of Eurasia, a period often referred to as the Pax Mongolica. During this time, trade flourished along the Silk Roads, allowing merchants to travel relatively safely from China to the Mediterranean. Taxes were often standardized across routes, and cultural exchange expanded across regions and civilizations. However, by the late 13th century (1270–1290), the empire had begun to fragment into rival states. Stability was weakening as competing khans fought for legitimacy. As a result, the question arises: which of the main Mongol successor states will dominate the future of Eurasia? Will it be the Yuan Dynasty in China, the Ilkhanate in Iran and the Middle East, the Chagatai Khanate in Central Asia, or the Golden Horde in the western steppe? Delegates will step into the roles of leaders, merchants, and power brokers across Eurasia, competing to restore stability and reestablish control over the Silk Roads.",
    topic: "Collapse of the Pax Mongolica and the struggle to control Eurasian trade",
    difficulty: "This is a regular committee.",
    format: "Crisis",
  }),
  makeCommittee({
    slug: "pour-decisions-2026",
    name: "Pour Decisions - Burgundian Ministry",
    level: "Regular",
    theme: "Crisis Committees",
    size: "Single Delegation",
    blurb: "The War of the Burgundian Succession, 1477.",
    overview:
      "The Battle of Nancy marked a significant end to a chapter in Europe: the defeat and death of Charles the Bold, Duke of Burgundy. Following his death, a power vacuum ensued in the powerful Burgundian state, with no male heir. As Charles’s daughter Mary became the sole heir, the death of the Duke left a moment of opportunity for the Habsburgs and France to seize control of Burgundian lands, as well as other foreign adversaries. In this committee, delegates will take the roles of nobles, royals, and foreign envoys to preserve the Burgundian state. Will Burgundy survive as an independent power, or will it fall victim to the expansionary ambitions of Europe’s hungry monarchs?",
    topic: "The War of the Burgundian Succession, 1477",
    difficulty: "This is a regular committee.",
    format: "Crisis",
  }),
  makeCommittee({
    slug: "ad-hoc-sg-2026",
    name: "Ad Hoc of the Secretary General",
    level: "Regular",
    theme: "Crisis Committees",
    size: "Single Delegation",
    blurb: "Topic revealed during conference opening.",
    overview:
      "The Secretary-General’s Ad Hoc remains confidential until delegates are on-site. This room is designed for delegates who enjoy uncertainty, rapid adaptation, and high-attention crisis pacing once the scenario is formally introduced.",
    topic: "To be revealed at the conference",
    difficulty: "This is an Ad Hoc Crisis committee.",
    format: "Crisis",
  }),
];
