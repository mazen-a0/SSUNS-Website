import { committeeDaisBySlug, type StaffProfile } from "@/content/en/staff";

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
  chairs: StaffProfile[];
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
      title: "Committees Policies + Resources",
      summary: "Committee expectations, procedure resources, and resolution-writing support.",
      body: [
        "This page houses committee expectations, procedure resources, and resolution-writing support for delegates preparing for SSUNS 2026.",
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
  openDetailsLabel: "Open Committee File",
  noResults: "No committees match your filters.",
  detailBackLabel: "Back to all committees",
  detailCloseLabel: "Close file",
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

const noResources: string[] = [];

function committeeImage(slug: string) {
  return `/committees/2026/${slug}.jpg`;
}

function makeCommittee(input: Omit<Committee, "id" | "chairs" | "resources" | "backgroundGuide" | "imageSrc">): Committee {
  return {
    ...input,
    id: input.slug,
    chairs: committeeDaisBySlug[input.slug] ?? [],
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
      "Established in 1948, the World Health Organization remains a vital UN body regarding international public health and global health crises. Yet within its domain, also lies the protection of the very people who hold these health institutions together: the healthcare workers. While their position is vital for the protection and wellbeing of our society, the conditions of the workers themselves are often dismissed. In emerging markets, healthcare workers operate in fragile healthcare systems characterized by funding shortages, inadequate infrastructure, and resource shortages. These environments expose workers to overwhelming patient loads, long working hours, and insufficient institutional support. Consequently, many healthcare workers face significant risks to their physical safety, mental health, and economic stability. The vulnerability of healthcare workers becomes visible during crises such as pandemics, humanitarian emergencies, and political instability. Structural weakness in healthcare systems can leave workers exposed to unsafe facilities, workplace violence, limited legal protection and inadequate compensation. Moreover, stigma around mental health in medical culture discourages workers from seeking support, leading to burnout, anxiety, and emotional exhaustion. These conditions not only endanger healthcare workers, but also the stability of the entire healthcare system. In this committee, delegates will examine mental health support access and barriers, legal protections in workplace culture, and physical safety of workers in emerging markets. With collaborative discussion and debate, delegates will contribute innovative strategies to strengthen the healthcare system, while prioritizing the protection and wellbeing of healthcare workers in emerging markets. This committee aims to foster solutions that promote safe, equitable, and more resilient healthcare environments in emerging markets, while ensuring that the workers dedicating their lives to protecting global health will receive the recognition and care they deserve.",
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
      "The Commission on Crime Prevention and Criminal Justice (CCPCJ) is a functional commission of the Economic and Social Council (ECOSOC), established through ECOSOC resolution 1992/1 upon request of General Assembly resolution 46/152. Focused on crime prevention, criminal justice, and the rule of law, the CCPCJ serves as a central forum where member states can collectively address criminal challenges. In this iteration, the committee will focus on three pressing environmental crimes: the illegal trafficking of wildlife, illicit mining and resource extraction, and the unlawful dumping of hazardous waste. While the CCPCJ functions primarily as a policy-making rather than an enforcement body, its core objective is to facilitate international cooperation among member states in promoting a safer world and preventing crime. Through capacity-building initiatives and information-sharing, the commission works to generate timely responses to crime, particularly when the environmental integrity of countless ecosystems is at stake. The illegal trafficking of wildlife represents one of the most destructive forms of transnational organized crime, threatening not only biodiversity but also global security. It encompasses the illicit trade of animal and plant species, as well as high-demand materials such as ivory. Similarly, illicit mining and resource extraction have grown into some of the most lucrative criminal activities in the world, frequently interlinked with corruption and serving as a key source of financing for transnational criminal networks and terrorist organizations. The unlawful dumping of toxic waste compounds these threats further, posing severe risks to ecosystems and human health by contaminating soil and water in ways that are often irreversible. These crimes do not operate in isolation. Criminal networks increasingly exploit online platforms and weak border controls to traffic wildlife, extract resources illegally, and dispose of hazardous waste across the globe. They tend to concentrate in regions marked by corruption, fragile legal systems, poverty, and limited state presence: compounding existing vulnerabilities and deepening social, economic, and political instability for the communities affected. Delegates must therefore consider how stronger legal frameworks, enhanced international cooperation, targeted community intervention, and more effective policy can work in concert to combat environmental crime and protect vulnerable populations worldwide.",
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
      "The World Trade Organization (WTO) oversees and manages the rules of trade between nations. The Trade and Environment Committee serves as a forum for dialogue between governments on how environmental policies intersect with international trade. As climate change accelerates unprecedentedly, the WTO has become increasingly relevant, as ecological and trade policies become increasingly interconnected. Member states face increasing pressure on the international stage to shift and adapt their markets and trade dynamics to current environmental realities. Although trade liberalization can help address climate change, for instance through reducing tariffs on environmental goods to accelerate the diffusion of renewable energy technologies, there is no universal solution. What benefits developed countries could disadvantage developing economies in the Global South. In order to achieve climate targets, exploitative trade policies must be changed; however, new agreements must equally shield countries from ecological or economic crises. This committee's main task is to balance these conflicting interests. By controlling what gets produced, shipped, and what becomes affordable, the WTO has immense power to shape environmental outcomes. This WTO Committee will also focus on how those reforms are implemented through the creation of green subsidies as tools to shift member states' policies. Delegates will examine methods to reform trade agreements to strengthen enforceable environmental standards. However, subsidies could lead to trade disputes if certain nations perceive that others possess an unfair advantage. Thus, delegates must manage these tensions while ensuring that marginalized populations and economically exploited nations are not left behind. Ultimately, delegates must address these current inequalities while navigating potential developments in trade policy and practices with regards to climate change. How can trade policy better adapt countries to current environmental expectations? What reforms are most urgent and how can they be implemented equitably? More importantly, how can this committee ensure that the transition to green trade is both inclusive and protective of those most at risk from climate change?",
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
      "The International Fund for Agricultural Development (IFAD) is an international financial institution and a United Nations specialized agency. It aims to invest in the lives of rural people and tackle hunger and poverty by increasing income, improving food security, and providing mechanisms to build resilience. Delegates will work specifically on the Asia-Pacific region, with the opportunity to create innovative resolutions tailored to the region’s unique obstacles and challenges. Founded in 1977, the IFAD began with the goal of financing and supporting agricultural development in low-income, rural communities, aiming to address global food shortages at the time. Through revolutionizing microfinance and leveraging financial innovation, the IFAD has taken a farmer-first approach. As an international financial institution, the IFAD uses tools such as investment income, special contributions, loan repayments, and the mobilisation of resources to provide assistance to rural development projects with the mandate of eradicating poverty. Now, five decades after its creation, the IFAD has widened its scope and adopted an interdisciplinary approach to the complex agricultural problems of our world, emphasizing inclusion and equity. While underlining the role of gender equality and the importance of bottom-up approaches, the IFAD focuses on Indigenous Peoples, rural youth, women, and people with disabilities. The Asia-Pacific region, specifically, faces food insecurity driven by drastic changes in weather patterns, rising costs of energy and farming tools, and the scarcity of natural resources. As one of the most vulnerable regions in the world to climate change, Asia and the Pacific requires the building of climate-resilient infrastructure, climate-smart agriculture tools, and nature-based solutions. As global temperatures rise and disastrous weather events become increasingly unpredictable, early warning systems are vital and rural populations must be empowered to build resilience in the face of these crises. The IFAD’s goal is to find strong, sustainable strategies for tackling these issues. Delegates must explore feasible solutions that lead to the sustainable management of natural resources, the strengthening of rural economies, the development of new infrastructure, and the assurance of a healthy population. Resolutions to food shortage and agricultural crises must be made with IFAD's strong values in mind, with emphasis on the cooperation of numerous facets of society. IFAD specializes in working together across governments, private and public sectors, as well as civil society groups and farmers. Delegates must directly address these complex problems while considering the complexity of factors such as biotechnology, the use of pesticides, and, importantly, how to ensure these solutions are sustainable and maintainable for future generations.",
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
      "The Panafrican Film and Television Festival of Ouagadougou (FESPACO), the largest and most influential film festival dedicated to African filmmaking, has played a significant role in promoting the development of Africa’s cinema, while also serving as a means of cultural expression, education, and identity. Founded in 1969, the FESPACO, has taken place biannually in Ouagadougou, Burkina Faso. By its 29th edition in 2025, and after showcasing over 230 films, the FESPACO has become critical for Africa’s cultural fabric. Despite its remarkable legacy, the Festival faces threats to its authenticity and funding constraints. Delegates in this committee will discuss approaches to facilitate the reach of African cinema on the global stage, in order to ensure that African stories are represented on the international level. Film is a powerful cultural tool, and in the context of Pan-Africanism, it’s also one of decolonization. Pan-Africanism is a political project aiming to unite all African people and promote both their liberation and sovereignty. Pan-Africanism functions as an active decolonizing force by transcending geographic boundaries, challenging both territorial divisions and the psychological constraints imposed by oppression. The FESPACO represents more than a film festival, it is a platform through which Pan-African ideas of self-rule and self-determination can be illustrated Therefore, while the visibility of African cinema is critical, its integrity is key to maintaining its purport. As African films gain international recognition and access to wider audiences, they face increasing pressure to conform to external expectations of mass appeal and marketability. Above its title as a film festival, the FESPACO serves as a cultural and political platform; one that highlights the diversity, resilience, and complexity of African societies, which have long been overlooked or misrepresented in global media. However, the growing interest in the FESPACO creates a paradox: the very uniqueness that makes this festival and its features appealing also exposes it to pressure of standardization and commercialization by external powers looking to invest in a “niche market.” As for financial constraints, the current film funding landscape in Africa relies primarily on foreign grants and institutions. Large portions of African film funding are attributed to international partnerships and corporate patronage. According to UNESCO, the estimated and currently untapped potential of the African film industry is its ability to contribute US$20 billion to the continent’s GDP. In comparison to other global film industries, such as Hollywood or Bollywood, that rely heavily on studio equity and bank loans, filmmaking in Africa depends on government bodies, such as the government of Burkina Faso and the European Union. This key difference in funding outlines a few of the reasons why sustainable funding is hard to achieve. Delegates in this committee will be tasked with addressing the challenge of expanding the global reach of African cinema while safeguarding its authenticity and political purpose. Ultimately, this committee must consider how the FESPACO can continue to serve as both a celebration of African film and a vehicle for decolonization and cultural sovereignty in an increasingly globalized film industry.",
    topic: "Expanding the Global Reach of African Cinema",
    difficulty: "This is a regular committee.",
    format: "ECOSOC",
  }),
  makeCommittee({
    slug: "sdg-12-2026",
    name: "SDG 12 - Global Fashion Summit, Copenhagen 2027",
    level: "Regular",
    theme: "Economic and Social Councils",
    size: "Single Delegation",
    blurb: "Addressing Environmental Extraction and Labour Exploitation in the Fast Fashion Industry.",
    overview:
      "Welcome to the Global Fashion Summit 2027, a yearly summit held in Copenhagen to address fast fashion's destructive impact on the planet, workers, and the invisible labour forces that sustain the industry. The ever-growing fast fashion industry causes tremendous environmental damage, from freshwater reserves to our oceans, contributing significantly to environmental degradation due to its high levels of production and waste. Each year, billions of kilograms of textiles are discarded, with a large portion ending up in landfills where they can take over 200 years to decompose. Garment production also requires vast amounts of water, as the fashion industry is the world’s second-largest water consumer, with a single pair of jeans requiring over 3,781 litres. Furthermore, synthetic materials contribute to microplastic pollution, harming marine ecosystems and human health. Delegates in this committee will have to consider solutions related to waste management, water consumption as well as environmental pollution. This industry also exists to the demise of its workers, with a strong burden placed on the most vulnerable in global supply chains. The fast fashion industry relies heavily on low-cost labour, often concentrated in the Global South where regulations and enforcement are weak. Workers are faced with poor conditions, including low wages, long working hours, wage theft and gender-based harassment. Informal employment worsens the issue by reducing accountability for employers and making it more difficult to monitor labour standards. The Rana Plaza disaster in 2013, among many others, brought to light the poor working conditions and severe risks faced by workers in these global supply chains. In order to address these issues, the committee will need to consider international labour standards, supply chain transparency, and corporate responsibility. These social and environmental crises result from the deliberate blurring of formal and informal boundaries. The fast fashion sector operates within both the formal and informal economies, where the multinational companies operate as registered corporations, yet the bulk of their manufacturing is carried out through unregistered sweatshops or home-based workers paid by the piece. The tier-1 factories that undergo audit and formal agreements subcontract any surplus labour to informal operations beyond the purview and reach of labour legislation. The informal sector is not incidental to fast fashion but is fundamental to the business model since piece-rate pay and lack of formal contracts drive down manufacturing costs more effectively than conventional wage work. Workers in these informal tiers have little access to social protections or enforceable labour rights. To tackle this problem, delegates need to look into the regulation of global supply chains through due diligence legislation, along with the formalisation of informal labour and corporate accountability across global production networks.",
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
      "The United Nations Human Rights Council (UNHRC) is the principal intergovernmental body responsible for human rights within the UN. Established by the UN General Assembly in 2006, it is tasked with the promotion and protection of human rights and fundamental freedoms, as well as addressing and remedying human rights violations around the world. Since its founding, the UNHRC has made significant contributions to global human rights, establishing universal periodic reviews for member states and strengthening accountability mechanisms in the face of serious violations. This committee will focus on human rights within the context of Indigenous resistance to government-backed land and resource extraction projects. Indigenous populations have historically been marginalized, their ancestral ties and territorial rights consistently disrespected and undermined by government policy; giving rise to land defender movements and organized resistance across the globe. These movements have increasingly become targets of the state, with participants criminalized and subjected to heightened surveillance as a consequence of their resistance. This committee will examine the issues surrounding the criminalization of Indigenous land defenders through a three-phase lens: the tactical use of force during mobilizations, the corporate-state relationships which incentivize the mistreatment of protesters, and the extensive surveillance imposed in the aftermath of protest activity. Each of these three phases addresses distinct human rights violations at different stages of Indigenous land movements. In the first phase, the use of physical force to suppress or disperse protesters raises concerns regarding violations of the right to freedom of assembly and the right to security of person, while illuminating a broader systemic failure that has enabled violent state retaliation against peaceful Indigenous demonstrations. The second phase examines how corporate-state relationships have incentivized the mistreatment of land defenders, relationships that not only create structural barriers to Indigenous sovereignty, but that frequently yield economic and political benefits from the suppression of Indigenous resistance. The third phase considers how post-protest surveillance of land defenders constitutes a violation of the right to privacy. Protesters are routinely designated as threats to the state and subjected to disproportionate monitoring, which not only infringes upon privacy rights but engenders a climate of fear that deters future assembly and resistance. Delegates will examine these three dimensions, exploring how each infringes upon the human rights of protesters and deliberating on the development of stronger international frameworks to advance the decriminalization and protection of Indigenous land defenders.",
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
      "The International Civil Aviation Organization (ICAO) plays a vital role in coordinating global airspace and technological advancement, increasingly serving as a humanitarian lifeline in both disaster and conflict contexts. Within a framework of global governance, this committee will explore how aviation technologies can improve risk assessment and preparedness, while addressing concerns over misuse. Delegates will examine air-based aid delivery and evacuation efforts, with attention to logistics, access, and vulnerable populations, while respecting state sovereignty. Through innovative and cooperative solutions, participants will develop practical recommendations to strengthen aviation's role in global humanitarian response. This committee will address these issues across three interconnected subtopics. Preparedness and Prediction, explores proactive disaster preparedness through aviation systems, from predictive mapping and satellite monitoring to early warning mechanisms and resource pre-positioning, examining how these tools can shift response from reactive to preventative, while building accountable, equitable systems of global readiness. Aid Delivery and Air-Based Relief Operations examines how aviation can serve as a critical lifeline when ground infrastructure fails, addressing bureaucratic delays in airspace authorization and customs clearance that continue to hinder timely relief, and developing frameworks for emergency air corridors and unmanned aerial systems deployment to accelerate last-mile delivery. Evacuation and Displacement addresses the use of aviation technology, infrastructure, and vehicles in humanitarian crises, exploring how countries can establish shared standards, obligations, and procedures for the preservation of life during natural disasters and armed conflicts, while addressing resource disparities between nations. Delegates must address current challenges while anticipating future developments in aviation. Are international systems prepared for emerging technologies and evolving crises? Most importantly, how can global cooperation ensure that aviation remains a safe, effective, and equitable tool for humanitarian response, while respecting the sovereignty of states?",
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
      "A room without books is like a body without a soul- Marcus Tullius Welcome, delegates to the Penguin Random House specialized agency! In an increasingly polarized and technologically driven world, delegates will be tasked with protecting the sacred art of writing. With the rise of censorship, artificial intelligence, and the growing demand for digital alternatives in publishing, the future of both storytelling and physical media rests on your shoulders. As Penguin Random House stakeholders and workers, it is your task to not just return the print media company back to its former glory, but to navigate how the power of the pen can be restored against literature endangerment and electronic media giants. Preserving the sanctity of printed publishing while embracing a rapidly evolving, technology-driven literary feature will be no easy task. In this 21-st century committee, delegates will need to situate their solutions with the context of the modern day, innovating beyond purely historical precedents. Just as stories evolve, so too must the ways in which they are created, shared and preserved. As such, delegates will need to critically engage with all the factors impacting the publishing house simultaneously, from the accelerating pace of technological evolution to the decline of originality due to automation and the rise of censorship. At its core, Penguin Random House is not just a “house” but a “home,” making it imperative that delegates work together to protect the company by sharing, adjusting and innovating from each other’s ideas. Success in this committee and the fate of the publishing company will rely on collective cooperation and teamwork. Working in the shadow of literature’s impending doom, delegates will be challenged to craft fast and dynamic solutions against plot twists and changing circumstances in their quest to save Penguin Random House. As a specialized committee, delegates will face enormous pressure, bearing the weight of the future of not just this publishing company, but the future of print as well. Decisions made will shape the new era of literature in modern day. In this new chapter, the future is in your hands. Will Penguin Random House be saved and endure the literary transition, or will a fate where books fade into obscurity come to pass?",
    topic: "Responding to the Generational Shift in Media Consumption",
    difficulty: "Low General Assembly, High Crisis.",
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
      "THE NHL IS ON THIN ICE! (get it…) In the rinks of North America’s most famous arenas, a new match commences, not one of skates, sticks and pucks but dollars and contracts. The teams; management vs. players. Although they have very similar players the goals they're shooting for couldn’t be more different. On one side, the management and league ownership is proposing to crack down on overspending and implement a hard salary cap in the league. On the other side; a rag tag team of players and lawyers arguing that a salary cap would destroy competition and devalue years of professional dedication given by so many players. Although the teams have been clearly drawn, fans and outside voices cannot be ignored. Media outlets speculate endlessly about the future of the NHL. Is the NHL still reliable? Will my favorite team still play this year? If a salary cap isn’t agreed upon will the league be disbanded? None of these questions are unreasonable to be asking. Additionally, sponsors fearing an unstable future have pulled detrimental amounts of money out of the NHL accelerating even more anxiousness. As each side clings to its interests the foundations of the league begin to crumble. New opportunities stir abroad as international leagues sense a chance to seize power from the coveted NHL. Quietly making deals, signing contracts and stealing players, many European leagues seem increasingly poised to take power. Delegates in this committee must find solutions to end the crisis and settle the salary cap dispute. They will represent varying interests from players to coaches and from lawyers to management to attempt to strike a deal and hopefully rebuild the NHL bigger, better, and stronger than ever. Through debate and creative diplomacy, delegates must decide which league policies need to go and how they can ensure financial sustainability while safeguarding the integrity of North American professional hockey. As these debates play out, the fate of the future of the once beloved NHL hangs in the balance: Will it emerge unified under a new financial order, or will it shift to a B-tier league followed by only die- hard aficionados of the sport?",
    topic: "2004-2005 NHL Lockout",
    difficulty: "Low General Assembly, High Crisis.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "icj-2026",
    name: "Temple Turmoil - International Court of Justice",
    level: "Advanced",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "Temple of Preah Vihear (Cambodia v. Thailand).",
    overview:
      "At The Hague, history and law collide over a centuries-old temple perched atop the Dangrek Mountains. Cambodia and Thailand stand before the International Court of Justice in a dispute over the sovereignty of the Temple of Preah Vihear, an ancient Khmer sanctuary that has become a flashpoint of nationalism, diplomacy, and international law. Colonial-era maps, contested borders, and decades of political tension will face judicial scrutiny as the Court weighs the legal status of the territory and the authority of past decisions. The dispute begins with jurisdiction. Thailand challenges the Court's authority to hear the case at all, citing the dissolution of the Permanent Court of International Justice in 1946 and disputing whether its prior declarations carry forward to the ICJ. Delegates must grapple with what it means for a state to accept the jurisdiction of an international court, and whether procedural arguments can shield a state from legal accountability. At the center of the case sits the Dangrek Map, produced during the French colonial administration of Cambodia. Thailand argues that receiving a map does not constitute consent to the borders it draws. Cambodia argues that decades of silence amount to acquiescence. The doctrines of acquiescence and estoppel will be tested rigorously here. Did Thailand's failure to challenge the map, including the symbolic visit of Prince Damrong to the temple under French administration in 1930, constitute an implied acceptance of Cambodian sovereignty? Or does the power asymmetry of the colonial era make applying these doctrines structurally unjust? Delegates will also weigh what actually establishes sovereignty over disputed land. Cambodia points to cultural and religious ties stretching back centuries. Thailand points to physical administration of the territory, including the posting of guards and performance of state functions, drawing on precedents from the Island of Palmas and the Minquiers and Ecrehos cases. The Court must determine whether a symbolic connection or a physical administration carries greater legal weight. This committee functions as a simulation of the ICJ proceedings. Delegates represent the legal teams of Cambodia and Thailand, as well as the Court itself. Arguments will be built on case law, treaty interpretation, and the foundational principles of international law. The decisions reached here will not only resolve a bilateral dispute; they will shape how international law approaches colonial-era borders, the limits of state consent, and the reach of judicial authority for years to come.",
    topic: "Temple of Preah Vihear (Cambodia v. Thailand)",
    difficulty: "Differing Rules of Procedure.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "praguematic-2026",
    name: "Prague-matic Unity - First Pan-Slavic Congress of 1848",
    level: "Beginner",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "Constructing the Slavic Identity.",
    overview:
      "It is 1848, and revolution is sweeping through the heart of Europe. France rises against its last king to establish the Second Republic, and revolutionary fervor spreads rapidly across the imperial continent. It is above all in Eastern Europe, however, that the upheaval strikes deepest. From Prague to Bucharest to Vienna, Slavic peoples are mobilizing in pursuit of greater freedom and self-determination, and delegates from across these lands gather in Prague for an event unprecedented in the history of the region: the First Pan-Slavic Congress. Czechs, Poles, Slovaks, South Slavs, and many others convene with a shared purpose. Their differences are numerous, but their goals converge: to confront their common adversary, the Austrian Empire, and to build a future rooted in the autonomy of Slavic peoples rather than imperial domination. To that end, there is no shortage of contentious issues to resolve. Delegates will debate which languages to recognize, which nations are to be granted autonomy, and above all, the promise of a democratic future for peoples long suppressed by imperial structures. Yet even as these deliberations unfold, revolution rages in the streets below, and the Austrian army stands at the city gates, poised to reassert control. Delegates will thus navigate a volatile confluence of hope and tension. Conservative voices call for caution, restraint, and negotiation, wary of provoking imperial retaliation. Liberal and radical factions, meanwhile, push for sweeping and immediate change. Despite their shared identity and common adversary, opinions diverge sharply, and the risk of fracture is ever-present. All delegates, however, share an acute awareness that Eastern Europe stands at a decisive turning point in its history. There are decades when nothing happens, and there are weeks when decades happen, and this is unmistakably one of the latter. Will the Congress succeed in forging a united vision for Slavic nationalism, laying the groundwork for lasting autonomy and democratic governance? Or will the aspirations of its delegates be extinguished by imperial repression and political compromise? In the streets of Prague, and within the halls of the Congress, the future of Central and Eastern Europe hangs in the balance.",
    topic: "Constructing the Slavic Identity",
    difficulty: "Low Crisis, High General Assembly.",
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
      "Welcome, delegates, to Outre-Mer en Outrage,the Ministry of Overseas France. The year is 2009, and the French Caribbean is on fire, not with flames, but with something far more combustible: decades of accumulated anger, economic despair, and colonial wounds torn open in the middle of a global recession. You are not here to observe history. You are here to make it. Le 20 janvier 2009, une grève générale éclate en Guadeloupe, organisée par le LKP le Liyannaj Kont Pwofitasyon, une coalition de 48 syndicats, partis politiques et associations culturelles unis contre l'exploitation outrancière. Dès le 5 février, le mouvement s'étend à la Martinique, paralysant les deux îles. Au cœur des revendications: une augmentation mensuelle de 200€ mais derrière elle, des siècles d'inégalités coloniales: un coût de la vie supérieur de 30% à celui de la métropole, un chômage dépassant 27%, et une économie toujours dominée par les békés, descendants blancs des esclavagistes, qui représentent 1% de la population mais contrôlent l'essentiel de ses richesses. In this committee, delegates embody the real actors of the crisis: union leaders, government officials, béké employers, elected representatives, and civil society figures re-enacting the most critical days of the 44-day strike. The committee opens on February 18, 2009, the night union activist Jacques Bino is shot dead near a barricade in Pointe-à-Pitre, transforming a tense negotiation into an explosive political crisis. Delegates will face interlocking battles that cannot be separated from one another. Any wage agreement drags with it the deeper question of who actually controls these islands' economies and who bears the cost of fixing them. Every statement made at the negotiating table echoes in the streets, where thousands chant \"Gwadloup sé tan nou\" Guadeloupe is ours. Every delay risks the movement spreading to French Guiana and Réunion, and resonating dangerously with mainland French workers already living through the worst recession since 1929. And looming over every discussion is the fundamental paradox of French republicanism: these are full French citizens, EU passport holders, yet governed from Paris, thousands of miles away, by a state that has largely looked the other way. Le succès pourrait marquer un tournant historique dans les relations entre la France et ses citoyens d'outre-mer. L'échec pourrait prouver, une fois de plus, que la promesse républicaine de liberté et d'égalité s'arrête au bord de l'eau. C'est aux délégués qu'il reviendra de décider quelle histoire sera écrite. Gwadloup sé tan nou, Guadeloupe is ours.",
    topic: "2009 Guadeloupe and Martinique Labor Strikes",
    difficulty: "Low Crisis, High General Assembly.",
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
      "November, 1973. In the frozen heart of Northern Quebec, a nation within a nation is fighting for its future. For decades, the Cree and Inuit of James Bay have lived off rivers and caribou herds their ancestors have known for centuries. Now, bulldozers and blueprints threaten to bury that history under billions of gallons of water, all in the name of \"progress.\" But these communities aren't going down without a fight. Their legal challenge has already done what no one thought possible, it's stopped Premier Robert Bourassa's massive hydroelectric project dead in its tracks, dragging Quebec's boldest economic gamble into the courtroom and the headlines. This committee will run into that exact moment: a province in crisis, a legal system under pressure, and Indigenous leadership refusing to be an afterthought in decisions about their own land. Delegates will step into the shoes of Cree and Inuit leaders fighting to force a renegotiation of what sovereignty actually means in modern Canada, alongside provincial and federal officials searching for a path forward that doesn't repeat the colonial playbook seen at Churchill Falls and the Columbia River. Together, delegates will wrestle with whether energy independence and Indigenous self-determination have to be opposites, or whether a different future is possible. Debate will unfold across two urgent fronts. Environmentalism will confront the ecological stakes head-on: shattered caribou migration routes, drowned boreal forest, and a mercury contamination crisis quietly poisoning entire communities through the fish they've relied on for generations. Globalism will dig into the economics of power, literally, tracing how energy exports, transboundary deals, and corporate interests have historically been built on land taken without consent. Running on light crisis mechanics, this committee will move fast, demanding sharp argumentation and sharper policy from every delegate at the table. At its core, this is a fight over land, law, and legacy, one that will ask delegates to reckon with a history that's far from finished.",
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
      "Delegates, welcome to 332 BCE. Prepare for action: your ingenuity, strategy, and collaboration will be tested in the Eastern Mediterranean. Alexander the Great has his eyes set on conquering the Levant (Syria/Phoenicia) - the Macedonian King has a maximum of even months to complete this part of his campaign. However, the small island fortress Tyre stands in his way as it is both a trade and maritime powerhouse, famous for its impenetrable walls, navy, and wealthy population. It is a formidable opponent in the region. Nonetheless, Alexander demands that he and his troops be let into the city to sacrifice to the god Melqart. However, the Tyrians refused his demands, opting to maintain their alliance with Persian King Darius III and remain “neutral”. With the Tyraines having the naval advantage. Alexander and his army must overcome Tyre's defences with innovative action before time, resources, and morale disappear. While the Tyrainians ought to protect their home against the greatest conqueror of their time. In this committee, delegates will form Alexander the Great’s generals and army, leaders of Tyre, and mercenaries, all working toward their own goals of becoming the victors. The success of the siege in this committee will depend on the effective integration of five core dimensions: military and naval strategy, climate and environmental constraints, social and cultural dynamics, and logistics and engineering innovation. Delegates should apply concepts such as deterrence, alliance-building, and resource management when collaborating to adapt to uncertainty and crises. This is a specialized crisis committee which introduces an interactive simulation based on a large-scale physical strategy map of the Eastern Mediterranean. Delegates will be assigned roles such as Macedonian generals, Tyrannian leaders, mercenary actors and more, each with distinct strategic strengths and objectives. The maps feature game pieces representing military forces, civilian populations, infrastructure and defensive systems. Through directives, delegates will control troop movements, naval positioning, and siege construction ect, with these actions reflected on the board. As a Specialized Committee, it will be up to the delegates to further Alexander's greatness and the ultimate conqueror of the time, by developing innovative plans to fuel the ancient Greek war machine and to further reset the balance of power in the region. Or will the Tyraines maintain their strong hold, defeating Alexander and stopping his campaign in its tracks? Delegates, you have the chance to change the course of history. The fate of the Mediterranean lies in the balance. Are you ready for the challenge?",
    topic: "The Siege of Tyre",
    difficulty: "Low General Assembly, High Crisis.",
    format: "Specialized",
  }),
  makeCommittee({
    slug: "ad-hoc-2026",
    name: "Ad-Hoc Specialized Agency",
    level: "Advanced",
    theme: "Specialized Agencies",
    size: "Single Delegation",
    blurb: "Topic revealed at conference check-in.",
    overview:
      "SSUNS’ Ad-Hoc Specialized Agency is intentionally kept under wraps until the conference begins. Delegates should expect a surprise briefing, a room that rewards adaptable research habits, and a committee experience that asks them to think quickly once the full mandate is unveiled.",
    topic: "To be revealed at the conference",
    difficulty: "Ad Hoc Specialized Agency.",
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
      "Post-Napoleonic wars, newly developed military technology heightens the threat of war and destruction… but maps, not muskets, may be your best path to controlling Central Asia, all without a single drop of bloodshed. The British value their crown jewel of India above all else, and London fears that any hint of Russian expansion southward may threaten both their colonial authority and their dominance over crucial trade routes linking Europe to Asia. Meanwhile, the Russian Empire seeks to expand its influence across Central Asia through military presence, political alliances, and territorial expansion, hoping to solidify itself as a dominant continental power. Czar Nikolai I is determined to pursue an aggressive expansionist policy, especially along the somber Caspian shores and within the snow-covered peaks of the Caucasus. Although no formal war has been declared, tensions between the two empires continue to intensify in what will later become known as “The Great Game”: a silent struggle fought along the rugged highlands of Afghanistan, the expansive deserts of Persia, and the lively trade routes along the Central Asian steppe. Espionage, diplomacy, cartography, and intelligence gathering have become weapons just as valuable as armies themselves. Explorers, diplomats, military officers, merchants, and local rulers all play critical roles in shaping the balance of power throughout the region, often with unintended consequences for both empires. As Russia and Britain compete for influence, the political future of Central Asia grows increasingly unstable. Local leaders must decide whether to cooperate with imperial powers, resist foreign intervention, or exploit a (for now) cold geopolitical rivalry for their own ambitions. In this crisis committee, delegates will assume the roles of key political, military, and regional figures navigating one of the nineteenth century’s most dangerous imperial rivalries. One must manage fragile alliances, secret operations, territorial disputes, and shifting political interests, all while determining the future of Central Asia and the global balance of power itself. Just as grandmasters in a high-stakes chess match, they must anticipate opponents’ strategies, all while protecting their own assets and position. A single mistake- whether it be a failed negotiation, border dispute, or military expedition- could quickly catalyse open conflict; a well-timed gambit may prophesy a secured victory and a position of hegemony. In this game, Central Asia is the chessboard, its rulers the pieces, and its fate the prize.",
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
      "In the summer of 2027, two festival giants are set to collide. Osheaga and Lollapalooza are both scheduled to take place from August 1–3, 2027, within just miles of each other; competing for the same artists, audiences, and headlines. With overlapping lineups and clashing schedules, the race is on to see which festival can draw the biggest crowds and dominate the summer music scene. On one hand, Osheaga has become a Montréal summer icon, hosting headlining artists such as Tate McRae and Lorde in recent years and earning praise from major performers like Noah Kahan, who called it one of the “best music festivals.” On the other, Lollapalooza brings the legacy of a global festival powerhouse, featuring chart-topping artists such as Olivia Rodrigo, Sabrina Carpenter, and RÜFÜS DU SOL. Will the iconic Canadian festival hold its ground, or will the Chicago-born classic steal the spotlight? In this Joint Crisis Committee, delegates will step into the roles of the two festivals’ management teams, competing to secure artists, attract fans, and ultimately determine which festival will reign supreme.",
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
      "Versace: a name synonymous with the pinnacle of haute couture and unparalleled luxury. From Hollywood’s elite to the world’s most formidable political figures, to wear Versace was to drape oneself in an armour of power, elegance, and opulent wealth. At the absolute center of this empire lay the man himself: Gianni Versace. Gianni was far more than the founder of this fashion empire, he was the master architect of a global cultural phenomenon. For two decades, his fearless creativity, masterful marketing, and fierce leadership transformed a modest Italian family business into a mulit-milliosn-dollar dynasty. Yet, on the fateful morning of July 15th, 1997, this brilliant trajectory was violently cut short by assination. Gianni's sudden death plunged the company into an era of vulnerability, leaving the future of his life’s work hanging in the balance. Upon the news of his assassination, the Board of Directors immediately convened in a state of emergency to decide how to proceed. Who should succeed Gianni? Family, friends, and investors all held their breath as the shocking murder outside his Miami mansion threatened to dismantle the powerful empire overnight. The board’s immediate mandate is critical: they must stabilize fluctuating financial markets, placate anxious shareholders, and manage a suffocating wave of international scrutiny. Delegates will control the most powerful fashion brand in the world and decide its approach into the new era. Can Versace truly survive without its founding genius or is the magic of the house uniquely tied to Gianni’s personal touch. All the while, rival luxury houses stand ready to capitalize on any sign of corporate weakness. The field of fashion is a cutthroat one, and with the Versace house standing unstable, many other actors would like to claim its place. Ultimately, Versace is more than a label. It is a cultural powerhouse. The strategy deployed by the board will dictate the fate of a legendary legacy.",
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
      "EXTRA! EXTRA! Read all about it! While the sun rises upon a peaceful day in July 1899, something’s a-brewing in the foggy streets of New York City. On a typical day, only one sound would be heard amongst the noisy pedestrian footsteps of Brooklyn: Click. Clack. Click. Clack. However, it seems this noise may soon be drowned out by New Yorkers' cries of protest. Access to information becomes scarcer as prices rise for America’s top-selling newspapers, causing not only sellers across the nation to suffer but also the public to be misinformed. While writing a paper is only the first step, distribution of these articles is key, and this role has been passed on to the youth of New York. For many working-class families, the youngest members; The Newsies, brought in the necessary income to feed every mouth at the table. And while there ain’t no crime to being poor, without these extra pennies, these families face risk to their well-being and survival, especially considering the rise in tuberculosis cases throughout the city. The primary treatment for this disease, often called ‘consumption’, requires well-rounded nutrition and bed rest, but this remains a privilege that only the richest can afford. Armed with courage and a bustling stack of papers, these young workers must consider their families' health while challenging the status quo and reinventing the narrative of workers’ rights amid a changing world. Though inflation remains at a steady rate, America’s economy is bustling, and the largest corporations are desperate to fight for the largest profit. Two of the largest newspapers, The New York Evening Journal and The Evening World, face ongoing tensions as they vie for sales leadership. How can the American public, the Newsies, and the struggling employees of the newspaper companies all remedy the situation before it reaches a tipping point? Will a strike start meaningful change, or be forgotten by history? Whatever happens, it rests in the hands of Newsies, reporters, media representatives, and officials to rewrite the past (or not). In this committee, delegates will debate workers’ rights, explore access to information, and negotiate with newspaper tycoons. Above it all, one question remains: Who will carry the banner?",
    topic: "Newsboys' Strike of 1899",
    difficulty: "This is a regular committee.",
    format: "Crisis",
  }),
  makeCommittee({
    slug: "unsc-2026",
    name: "Las Malvinas or the Falklands? - United Nations Security Council",
    level: "Advanced",
    theme: "Crisis Committees",
    size: "Double Delegation",
    blurb: "The Falklands War (1982).",
    overview:
      "A note on the committee format: The United Nations Security Council (UNSC) is a fast-paced double delegate committee that starts off as a crisis committee on the Thursday and Friday sessions and moves into GA procedures on the Saturday. It is made up of 15 member states (the 5 Permanent states and the current 10 rotating members). The Falklands War 1982 and Resolution 502 The Falklands are an archipelago in the South Atlantic Ocean named by the British in 1690. The Falklands are …also called the Islas Malvinas by Argentina and both countries claim these islands as their own. Argentina claims the Falkland Islands primarily based on the legal principle of territorial inheritance from the Spanish Empire and the islands' geographic proximity to the shores of Argentina (the principal island being about 500km from the Argentinian shore). After Argentina's independence from Spain (1816), they regained full control of their country which, according to Argentina, included the Falklands. The British claim the Falklands as their own based on the historical right of discovery. In 1833, the British were the first power to settle the islands and have served as the continuous administration since. Further, the British rely on the principle of self-determination, as the islanders are overwhelmingly British citizens who wish to remain under UK jurisdiction. On April 2nd, 1982, armed forces from Argentina invaded and occupied the Falkland Islands. As British naval vessels headed toward the islands, the world watched as diplomacy raced against armed conflict. The day of the invasion, the UNSC started drafting Resolution 502 and passed it on April 3rd, requesting the immediate withdrawal of Argentinian troops and a ceasefire, to no avail. The UNSC must navigate the tensions following the passing and the aftermath of Resolution 502 and the fallout between the two nations to prevent further escalation and resolve the conflict. However, the question remains: Will the Council succeed in preserving peace in time, or will the conflict come to characterize a broken and divided geopolitical order?",
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
      "With seemingly eternal feud between French and English crowns coming to a close, the dukes of Bourgogne have seized the opportunity turning their lands into the cultural and economic center of western Europe. Tales of this prosperous land travel far and wide with lavish feasts, grand jousts and the creation of the Arthurian Order of the Golden Fleece for its aristocracy. The marriage of Philip the Good and Isabella of Portugal in 1430 was heralded the high watermark for the Duchy of Bourgogne uniting lands from the Low countries in Flanders to the Alpen lands of Switzerland. However in the fifteen years since, Philip’s declining health and lack of a successor has many European powers circling around the ducal court. The growing French power under the reign of Charles VII eyes the heartland of the dutchy’s french speaking territory to the south and seeks revenge for Burgundian alliance with the English Crown and siege of Paris. In the east the Habsburg court of the Holy Roman Empire seeks to reintegrate its German holdings back into the empire. Imperial princes whisper that Burgundy’s rise has upset the balance of the Reich, and many now call for the duchy to be humbled before it rivals the Emperor himself. Meanwhile, the Low Countries, united only through the personal union of Phillip, have seized this moment to gain greater autonomy from the crown, with the merchants and guilds of Bruges, Ghent, and Antwerp growing ever more defiant of ducal authority. While our realm may appear outwardly prosperous, a committee of vultures circle both within our walls and in the grand courts of Europe. Can you right this ship and reclaim the inheritance of Lothair and dominion over Europe!",
    topic: "The War of the Burgundian Succession, 1477",
    difficulty: "This is a regular committee.",
    format: "Crisis",
  }),
  makeCommittee({
    slug: "ad-hoc-sg-2026",
    name: "Ad Hoc of the Secretary General",
    level: "Advanced",
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
