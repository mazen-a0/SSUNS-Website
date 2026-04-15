import "server-only";

import { cache } from "react";
import type { ContentBundle, Locale } from "@/content/registry";
import { getLocalContent } from "@/content/registry";
import { getSanityClient, isSanityConfigured } from "@/sanity/lib/client";
import {
  type LocalizedValue,
  type SanityChapter,
  type SanityCommittee,
  type SanityPage,
  type SanityResourceLink,
  type SanitySecretariatMember,
  type SanitySiteSettings,
  getAllChaptersQuery,
  getCommitteesQuery,
  getPagesQuery,
  getResourceLinksQuery,
  getSecretariatMembersQuery,
  getSiteSettingsQuery,
} from "@/sanity/lib/queries";

function cloneBundle(locale: Locale): ContentBundle {
  return structuredClone(getLocalContent(locale));
}

function localized(value: LocalizedValue | null | undefined, locale: Locale, fallback = ""): string {
  if (!value) return fallback;
  const selected = locale === "fr" ? value.fr : value.en;
  const alternate = locale === "fr" ? value.en : value.fr;
  return selected || alternate || fallback;
}

function paragraphs(value: string | null | undefined): string[] {
  if (!value) return [];
  return value
    .split(/\n{2,}/)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function chapterHref(parentSlug: string, slug: string) {
  if (!slug || slug === "index" || slug === "overview" || slug === parentSlug) {
    return `/${parentSlug}`;
  }

  return `/${parentSlug}/${slug}`;
}

function applySiteSettings(bundle: ContentBundle, settings: SanitySiteSettings | null, locale: Locale) {
  if (!settings) return bundle;

  const instagramUrl = settings.socials?.instagramUrl || bundle.footerContent.socialLinks.find((link) => link.label === "Instagram")?.href;
  const tiktokUrl = settings.socials?.tiktokUrl || bundle.footerContent.socialLinks.find((link) => link.label === "TikTok")?.href;
  const socialLinks = [
    instagramUrl ? { label: locale === "fr" ? "Instagram" : "Instagram", href: instagramUrl } : null,
    tiktokUrl ? { label: "TikTok", href: tiktokUrl } : null,
  ].filter((entry): entry is { label: string; href: string } => entry !== null);

  bundle.siteMeta = {
    ...bundle.siteMeta,
    title: localized(settings.title, locale, bundle.siteMeta.title),
  };

  bundle.footerContent = {
    ...bundle.footerContent,
    socialLinks: socialLinks.length ? socialLinks : bundle.footerContent.socialLinks,
  };

  bundle.homeContent.hero = {
    ...bundle.homeContent.hero,
    primaryCta: {
      ...bundle.homeContent.hero.primaryCta,
      href: settings.munagerUrl || bundle.homeContent.hero.primaryCta.href,
    },
    video: {
      ...bundle.homeContent.hero.video,
      mp4Src: settings.heroVideoUrl || bundle.homeContent.hero.video.mp4Src,
    },
    image: {
      ...bundle.homeContent.hero.image,
      src: settings.heroPosterUrl || bundle.homeContent.hero.image.src,
    },
  };

  bundle.registrationContent = {
    ...bundle.registrationContent,
    cta: {
      ...bundle.registrationContent.cta,
      href: settings.munagerUrl || bundle.registrationContent.cta.href,
    },
    currentTier: {
      ...bundle.registrationContent.currentTier,
      detail: settings.munagerUrl ? bundle.registrationContent.currentTier.detail : bundle.registrationContent.currentTier.detail,
    },
  };

  bundle.sponsorContent = {
    ...bundle.sponsorContent,
    cta: {
      ...bundle.sponsorContent.cta,
      href: settings.munagerUrl || bundle.sponsorContent.cta.href,
    },
  };

  return bundle;
}

function applyPageDocuments(bundle: ContentBundle, pages: SanityPage[], locale: Locale) {
  const bySlug = new Map(pages.filter((page) => page.slug).map((page) => [page.slug as string, page]));

  const homePage = bySlug.get("home");
  if (homePage) {
    const homeSections = new Map((homePage.sections || []).filter((section) => section.key).map((section) => [section.key as string, section]));
    bundle.homeContent.hero = {
      ...bundle.homeContent.hero,
      title: localized(homePage.title, locale, bundle.homeContent.hero.title),
      accent: localized(homePage.subtitle, locale, bundle.homeContent.hero.accent),
      description: localized(homePage.intro, locale, bundle.homeContent.hero.description),
      statement: localized(homePage.body, locale, bundle.homeContent.hero.statement),
    };

    const editorialSection = homeSections.get("editorial");
    if (editorialSection) {
      bundle.homeContent.editorial = {
        ...bundle.homeContent.editorial,
        title: localized(editorialSection.title, locale, bundle.homeContent.editorial.title),
        subtitle: localized(editorialSection.summary, locale, bundle.homeContent.editorial.subtitle),
        body: paragraphs(localized(editorialSection.body, locale)).length
          ? paragraphs(localized(editorialSection.body, locale))
          : bundle.homeContent.editorial.body,
      };
    }

    const registrationSection = homeSections.get("registration");
    if (registrationSection) {
      bundle.homeContent.registrationBand = {
        ...bundle.homeContent.registrationBand,
        title: localized(registrationSection.title, locale, bundle.homeContent.registrationBand.title),
        body: localized(registrationSection.body, locale, bundle.homeContent.registrationBand.body),
        cta: {
          label: localized(registrationSection.ctaLabel, locale, bundle.homeContent.registrationBand.cta.label),
          href: registrationSection.ctaHref || bundle.homeContent.registrationBand.cta.href,
        },
      };
    }
  }

  const mapping: Array<[string, keyof Pick<ContentBundle, "aboutContent" | "conferenceContent" | "registrationContent" | "resourcesPageContent" | "sponsorContent" | "contactContent" | "committeesPageContent">, string, string]> = [
    ["about", "aboutContent", "title", "intro"],
    ["conference", "conferenceContent", "title", "intro"],
    ["registration", "registrationContent", "title", "intro"],
    ["resources", "resourcesPageContent", "title", "intro"],
    ["sponsor-us", "sponsorContent", "title", "intro"],
    ["contact", "contactContent", "title", "intro"],
    ["committees", "committeesPageContent", "title", "intro"],
  ];

  for (const [slug, key, titleField, introField] of mapping) {
    const page = bySlug.get(slug);
    if (!page) continue;

    const target = bundle[key] as Record<string, unknown>;
    target[titleField] = localized(page.title, locale, String(target[titleField] || ""));
    target[introField] = localized(page.intro, locale, String(target[introField] || ""));
  }

  return bundle;
}

function applyChapterDocuments(bundle: ContentBundle, chapters: SanityChapter[], locale: Locale) {
  const chapterCollections = [
    bundle.aboutContent.chapters,
    bundle.conferenceContent.chapters,
    bundle.registrationContent.chapters,
    bundle.resourcesPageContent.chapters,
    bundle.committeesPageContent.chapters,
  ];

  for (const chapterDoc of chapters) {
    const parentSlug = chapterDoc.parentSlug;
    const slug = chapterDoc.slug;
    if (!parentSlug || !slug) continue;

    const href = chapterHref(parentSlug, slug);
    const title = localized(chapterDoc.title, locale);
    const summary = localized(chapterDoc.summary, locale);
    const body = paragraphs(localized(chapterDoc.body, locale));

    for (const collection of chapterCollections) {
      const index = collection.findIndex((chapter) => chapter.href === href);
      if (index !== -1) {
        collection[index] = {
          ...collection[index],
          title: title || collection[index].title,
          summary: summary || collection[index].summary,
          body: body.length ? body : collection[index].body,
        };
        break;
      }
    }
  }

  return bundle;
}

function applySecretariatMembers(bundle: ContentBundle, members: SanitySecretariatMember[], locale: Locale) {
  if (!members.length) return bundle;

  const mappedMembers = members
    .filter((member) => member.name)
    .map((member) => ({
      name: member.name as string,
      role: localized(member.role, locale),
      email: member.email || undefined,
      headshotSrc: member.headshotUrl || undefined,
      bio: localized(member.bio, locale),
    }));

  if (mappedMembers.length) {
    bundle.aboutContent.secretariatMembers = mappedMembers;

    const directory = mappedMembers
      .filter((member) => member.email)
      .map((member) => ({
        name: member.name,
        role: member.role,
        email: member.email as string,
      }));

    if (directory.length) {
      bundle.contactContent = {
        ...bundle.contactContent,
        directory,
      };
    }
  }

  return bundle;
}

function committeeTheme(type: string | null | undefined, locale: Locale) {
  if (type === "GA") {
    return locale === "fr" ? "Assemblées générales" : "General Assemblies";
  }
  if (type === "Specialized") {
    return locale === "fr" ? "Agences spécialisées" : "Specialized Agencies";
  }
  if (type === "Crisis") {
    return "Crisis";
  }
  return locale === "fr" ? "Agences spécialisées" : "Specialized Agencies";
}

function committeeFormat(type: string | null | undefined) {
  if (type === "GA") return "General Assembly";
  if (type === "Specialized") return "Specialized";
  if (type === "Crisis") return "Crisis";
  return "Committee";
}

function applyCommittees(bundle: ContentBundle, committees: SanityCommittee[], locale: Locale, usingArchivePreview: boolean) {
  if (!committees.length) return bundle;

  bundle.committees = committees
    .filter((committee) => committee.slug)
    .map((committee, index) => ({
      id: committee.slug || `committee-${index}`,
      slug: committee.slug || `committee-${index}`,
      name: localized(committee.name, locale, `Committee ${index + 1}`),
      level: localized(committee.quickFacts?.level || committee.level, locale, "TBD"),
      theme: committeeTheme(committee.type, locale),
      size: localized(committee.quickFacts?.roomSize, locale, "TBD"),
      blurb: localized(committee.blurb, locale, ""),
      overview: localized(committee.overview, locale, localized(committee.blurb, locale, "")),
      topic: localized(committee.quickFacts?.topic, locale, ""),
      difficulty: localized(committee.quickFacts?.difficulty, locale, ""),
      format: localized(committee.quickFacts?.format, locale, committeeFormat(committee.type)),
      chairs: (committee.chairs || [])
        .filter((chair) => chair.name)
        .map((chair) => ({
          name: chair.name as string,
          bio: localized(chair.bio, locale, ""),
        })),
      resources: (committee.quickFacts?.resources || [])
        .map((resource) => localized(resource, locale))
        .filter(Boolean),
      backgroundGuide: usingArchivePreview ? "2025 preview committee." : "Guide to be published.",
      imageSrc: committee.imageUrl || undefined,
      isArchive: committee.isArchive || undefined,
    }));

  if (usingArchivePreview) {
    bundle.committeesPageContent = {
      ...bundle.committeesPageContent,
      intro:
        locale === "fr"
          ? "Aucun comité 2026 n'est encore publié dans Sanity. Les comités archivés servent donc d'aperçu."
          : "No 2026 committees are published in Sanity yet, so archived committees are being used as the preview programme.",
    };
  }

  return bundle;
}

function applyResourceLinks(bundle: ContentBundle, resources: SanityResourceLink[], locale: Locale) {
  if (!resources.length) return bundle;

  bundle.commonResources = resources
    .filter((resource) => resource.href)
    .map((resource, index) => ({
      id: `sanity-resource-${index}`,
      title: localized(resource.title, locale, `Resource ${index + 1}`),
      description: localized(resource.description, locale, ""),
      href: resource.href as string,
      category: localized(resource.category, locale, "Library"),
      details: localized(resource.details, locale, ""),
    }));

  return bundle;
}

type SanitySnapshot = {
  siteSettings: SanitySiteSettings | null;
  pages: SanityPage[];
  chapters: SanityChapter[];
  secretariatMembers: SanitySecretariatMember[];
  committees: SanityCommittee[];
  archivedCommittees: SanityCommittee[];
  resources: SanityResourceLink[];
};

const getSanitySnapshot = cache(async (): Promise<SanitySnapshot | null> => {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    const sanityClient = getSanityClient(false);
    const [siteSettings, pages, chapters, secretariatMembers, committees, archivedCommittees, resources] = await Promise.all([
      sanityClient.fetch<SanitySiteSettings | null>(getSiteSettingsQuery),
      sanityClient.fetch<SanityPage[]>(getPagesQuery),
      sanityClient.fetch<SanityChapter[]>(getAllChaptersQuery),
      sanityClient.fetch<SanitySecretariatMember[]>(getSecretariatMembersQuery),
      sanityClient.fetch<SanityCommittee[]>(getCommitteesQuery, { archive: false }),
      sanityClient.fetch<SanityCommittee[]>(getCommitteesQuery, { archive: true }),
      sanityClient.fetch<SanityResourceLink[]>(getResourceLinksQuery),
    ]);

    return {
      siteSettings,
      pages,
      chapters,
      secretariatMembers,
      committees,
      archivedCommittees,
      resources,
    };
  } catch {
    return null;
  }
});

export const getContentBundle = cache(async (locale: Locale): Promise<ContentBundle> => {
  const bundle = cloneBundle(locale);
  const snapshot = await getSanitySnapshot();

  if (!snapshot) {
    return bundle;
  }

  applySiteSettings(bundle, snapshot.siteSettings, locale);
  applyPageDocuments(bundle, snapshot.pages, locale);
  applyChapterDocuments(bundle, snapshot.chapters, locale);
  applySecretariatMembers(bundle, snapshot.secretariatMembers, locale);
  applyResourceLinks(bundle, snapshot.resources, locale);

  if (snapshot.committees.length) {
    applyCommittees(bundle, snapshot.committees, locale, false);
  } else if (snapshot.archivedCommittees.length) {
    applyCommittees(bundle, snapshot.archivedCommittees, locale, true);
  }

  return bundle;
});

export const getAllContentBundles = cache(async () => {
  const [en, fr] = await Promise.all([getContentBundle("en"), getContentBundle("fr")]);
  return { en, fr };
});
