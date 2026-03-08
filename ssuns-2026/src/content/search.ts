export type SearchEntry = {
  id: string;
  title: string;
  snippet: string;
  href: string;
  group: "navigation" | "content";
};

type Chapter = {
  href: string;
  title: string;
  summary: string;
  body: string[];
};

type ContentBundle = {
  navItems: Array<{ label: string; href: string }>;
  homeContent: {
    hero: { title: string; accent: string; description: string };
    editorial: { title: string; subtitle: string };
    timeline: { title: string; items: Array<{ date: string; label: string }> };
  };
  aboutContent: {
    chapters: Chapter[];
    pillars: Array<{ title: string; body: string }>;
  };
  conferenceContent: {
    chapters: Chapter[];
    tracks: Array<{ title: string; body: string }>;
    scheduleBand: { title: string; items: Array<{ label: string; text: string }> };
  };
  registrationContent: {
    chapters: Chapter[];
    steps: string[];
    tracks: Array<{ title: string; body: string }>;
  };
  resourcesPageContent: {
    title: string;
    chapters: Chapter[];
  };
  commonResources: Array<{
    id: string;
    title: string;
    description: string;
    href: string;
    details: string;
  }>;
  committees: Array<{
    slug: string;
    name: string;
    topic: string;
    overview: string;
    difficulty: string;
    chairs: Array<{ name: string; bio: string }>;
    resources: string[];
  }>;
  contactContent: {
    items: Array<{ label: string; value: string }>;
  };
};

function chapterEntries(prefix: string, chapters: Chapter[]): SearchEntry[] {
  return chapters.map((chapter, index) => ({
    id: `${prefix}-${index}`,
    title: chapter.title,
    snippet: `${chapter.summary} ${chapter.body.join(" ")}`,
    href: chapter.href,
    group: "content" as const,
  }));
}

export function buildSearchIndex(content: ContentBundle): SearchEntry[] {
  const navigationEntries: SearchEntry[] = [
    {
      id: "nav-home",
      title: "Home",
      snippet: "Return to homepage",
      href: "/",
      group: "navigation",
    },
    ...content.navItems.map((item) => ({
      id: `nav-${item.href}`,
      title: item.label,
      snippet: `Go to ${item.label}`,
      href: item.href,
      group: "navigation" as const,
    })),
  ];

  const contentEntries: SearchEntry[] = [
    {
      id: "home-hero",
      title: content.homeContent.hero.title,
      snippet: `${content.homeContent.hero.accent} ${content.homeContent.hero.description}`,
      href: "/",
      group: "content",
    },
    {
      id: "home-editorial",
      title: content.homeContent.editorial.title,
      snippet: content.homeContent.editorial.subtitle,
      href: "/#what-is-ssuns",
      group: "content",
    },
    {
      id: "home-timeline",
      title: content.homeContent.timeline.title,
      snippet: content.homeContent.timeline.items.map((item) => `${item.date} ${item.label}`).join(" | "),
      href: "/#key-dates",
      group: "content",
    },
    ...chapterEntries("about-chapter", content.aboutContent.chapters),
    ...content.aboutContent.pillars.map((pillar, index) => ({
      id: `about-pillar-${index}`,
      title: pillar.title,
      snippet: pillar.body,
      href: "/about",
      group: "content" as const,
    })),
    ...chapterEntries("conference-chapter", content.conferenceContent.chapters),
    ...content.conferenceContent.tracks.map((track, index) => ({
      id: `conference-${index}`,
      title: track.title,
      snippet: track.body,
      href: "/conference",
      group: "content" as const,
    })),
    ...content.conferenceContent.scheduleBand.items.map((item, index) => ({
      id: `conference-schedule-${index}`,
      title: `${content.conferenceContent.scheduleBand.title} ${item.label}`,
      snippet: item.text,
      href: "/conference/schedule",
      group: "content" as const,
    })),
    ...chapterEntries("registration-chapter", content.registrationContent.chapters),
    ...content.registrationContent.tracks.map((track, index) => ({
      id: `registration-${index}`,
      title: track.title,
      snippet: `${track.body} ${content.registrationContent.steps.join(" ")}`,
      href: "/registration",
      group: "content" as const,
    })),
    ...chapterEntries("resources-chapter", content.resourcesPageContent.chapters),
    ...content.commonResources.map((resource) => ({
      id: `resource-${resource.id}`,
      title: resource.title,
      snippet: `${resource.description} ${resource.details}`,
      href: `/resources${resource.href}`,
      group: "content" as const,
    })),
    ...content.committees.map((committee) => ({
      id: `committee-${committee.slug}`,
      title: committee.name,
      snippet: `${committee.topic} ${committee.overview} ${committee.difficulty} ${committee.chairs
        .map((chair) => `${chair.name} ${chair.bio}`)
        .join(" ")} ${committee.resources.join(" ")}`,
      href: `/committees/${committee.slug}`,
      group: "content" as const,
    })),
    ...content.contactContent.items.map((item, index) => ({
      id: `contact-${index}`,
      title: `${item.label} Contact`,
      snippet: item.value,
      href: "/contact",
      group: "content" as const,
    })),
    {
      id: "resources-title",
      title: content.resourcesPageContent.title,
      snippet: content.commonResources.map((resource) => resource.title).join(" | "),
      href: "/resources",
      group: "content",
    },
  ];

  return [...navigationEntries, ...contentEntries];
}
