import type { ContentBundle } from "@/content/registry";

export type SearchEntry = {
  id: string;
  title: string;
  snippet: string;
  href: string;
  group: "navigation" | "content";
  breadcrumb?: string;
};

type Chapter = {
  href: string;
  title: string;
  summary: string;
  body: string[];
};


function chapterEntries(prefix: string, parentTitle: string, chapters: Chapter[]): SearchEntry[] {
  return chapters.map((chapter, index) => ({
    id: `${prefix}-${index}`,
    title: chapter.title,
    snippet: `${chapter.summary} ${chapter.body.join(" ")}`,
    href: chapter.href,
    group: "content" as const,
    breadcrumb: `${parentTitle} → ${chapter.title}`,
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
      breadcrumb: "Home",
    },
    ...content.navItems.map((item) => ({
      id: `nav-${item.href}`,
      title: item.label,
      snippet: `Go to ${item.label}`,
      href: item.href,
      group: "navigation" as const,
      breadcrumb: item.label,
    })),
  ];

  const contentEntries: SearchEntry[] = [
    {
      id: "home-hero",
      title: content.homeContent.hero.title,
      snippet: `${content.homeContent.hero.accent} ${content.homeContent.hero.description}`,
      href: "/",
      group: "content",
      breadcrumb: "Home",
    },
    {
      id: "home-editorial",
      title: content.homeContent.editorial.title,
      snippet: content.homeContent.editorial.subtitle,
      href: "/#mission",
      group: "content",
      breadcrumb: "Home → Mission",
    },
    {
      id: "home-timeline",
      title: content.homeContent.timeline.title,
      snippet: content.homeContent.timeline.items.map((item) => `${item.date} ${item.label}`).join(" | "),
      href: "/#key-dates",
      group: "content",
      breadcrumb: "Home → Key Dates",
    },
    {
      id: "home-gallery",
      title: content.homeContent.gallery.pageTitle ?? content.homeContent.gallery.title,
      snippet: `${content.homeContent.gallery.intro} ${content.homeContent.gallery.items.map((item) => `${item.title} ${item.caption}`).join(" | ")}`,
      href: "/gallery",
      group: "content",
      breadcrumb: "Home → Gallery",
    },
    ...chapterEntries("about-chapter", content.aboutContent.title, content.aboutContent.chapters),
    ...content.aboutContent.pillars.map((pillar, index) => ({
      id: `about-pillar-${index}`,
      title: pillar.title,
      snippet: pillar.body,
      href: "/about",
      group: "content" as const,
      breadcrumb: `${content.aboutContent.title} → ${pillar.title}`,
    })),
    ...chapterEntries("conference-chapter", content.conferenceContent.title, content.conferenceContent.chapters),
    ...content.conferenceContent.tracks.map((track, index) => ({
      id: `conference-${index}`,
      title: track.title,
      snippet: track.body,
      href: "/conference",
      group: "content" as const,
      breadcrumb: `${content.conferenceContent.title} → ${track.title}`,
    })),
    ...content.conferenceContent.scheduleBand.items.map((item, index) => ({
      id: `conference-schedule-${index}`,
      title: `${content.conferenceContent.scheduleBand.title} ${item.label}`,
      snippet: item.text,
      href: "/conference/schedule",
      group: "content" as const,
      breadcrumb: `${content.conferenceContent.title} → ${content.conferenceContent.chapters.find((chapter) => chapter.href === "/conference/schedule")?.title ?? "Schedule"}`,
    })),
    ...chapterEntries("registration-chapter", content.registrationContent.title, content.registrationContent.chapters),
    ...content.registrationContent.tracks.map((track, index) => ({
      id: `registration-${index}`,
      title: track.title,
      snippet: `${track.body} ${content.registrationContent.steps.join(" ")}`,
      href: "/registration",
      group: "content" as const,
      breadcrumb: `${content.registrationContent.title} → ${track.title}`,
    })),
    ...chapterEntries("resources-chapter", content.resourcesPageContent.title, content.resourcesPageContent.chapters),
    ...content.commonResources.map((resource) => ({
      id: `resource-${resource.id}`,
      title: resource.title,
      snippet: `${resource.description} ${resource.details}`,
      href: resource.href,
      group: "content" as const,
      breadcrumb: `${content.resourcesPageContent.title} → ${resource.title}`,
    })),
    ...chapterEntries("committees-chapter", content.committeesPageContent.title, content.committeesPageContent.chapters),
    ...content.committees.map((committee) => ({
      id: `committee-${committee.slug}`,
      title: committee.name,
      snippet: `${committee.topic} ${committee.overview} ${committee.difficulty} ${committee.chairs
        .map((chair) => `${chair.name} ${chair.bio}`)
        .join(" ")} ${committee.resources.join(" ")}`,
      href: `/committees/${committee.slug}`,
      group: "content" as const,
      breadcrumb: `${content.committeesPageContent.title} → ${committee.name}`,
    })),
    ...content.contactContent.directory.map((item, index) => ({
      id: `contact-${index}`,
      title: `${item.name} ${item.role}`,
      snippet: item.email,
      href: "/contact",
      group: "content" as const,
      breadcrumb: `${content.contactContent.title} → ${item.name}`,
    })),
    ...content.sponsorContent.reasons.map((reason, index) => ({
      id: `sponsor-${index}`,
      title: reason.title,
      snippet: reason.body,
      href: "/sponsor-us",
      group: "content" as const,
      breadcrumb: `${content.sponsorContent.title} → ${reason.title}`,
    })),
    {
      id: "sponsor-title",
      title: content.sponsorContent.title,
      snippet: content.sponsorContent.intro,
      href: "/sponsor-us",
      group: "content",
      breadcrumb: content.sponsorContent.title,
    },
  ];

  return [...navigationEntries, ...contentEntries];
}
