import { groq } from "next-sanity";

export type LocalizedValue = {
  en?: string | null;
  fr?: string | null;
};

export type SanitySiteSettings = {
  title?: LocalizedValue | null;
  socials?: {
    instagramUrl?: string | null;
    tiktokUrl?: string | null;
  } | null;
  munagerUrl?: string | null;
  venueAddress?: string | null;
  googleMapsUrl?: string | null;
  heroVideoUrl?: string | null;
  heroPosterUrl?: string | null;
};

export type SanityPageSection = {
  key?: string | null;
  title?: LocalizedValue | null;
  summary?: LocalizedValue | null;
  body?: LocalizedValue | null;
  ctaLabel?: LocalizedValue | null;
  ctaHref?: string | null;
  links?: Array<{
    label?: LocalizedValue | null;
    href?: string | null;
  }> | null;
};

export type SanityPage = {
  slug?: string | null;
  navLabel?: LocalizedValue | null;
  title?: LocalizedValue | null;
  subtitle?: LocalizedValue | null;
  intro?: LocalizedValue | null;
  body?: LocalizedValue | null;
  sections?: SanityPageSection[] | null;
};

export type SanityChapter = {
  parentSlug?: string | null;
  slug?: string | null;
  order?: number | null;
  navLabel?: LocalizedValue | null;
  title?: LocalizedValue | null;
  summary?: LocalizedValue | null;
  body?: LocalizedValue | null;
};

export type SanitySecretariatMember = {
  name?: string | null;
  role?: LocalizedValue | null;
  order?: number | null;
  email?: string | null;
  headshotUrl?: string | null;
  bio?: LocalizedValue | null;
};

export type SanityCommittee = {
  slug?: string | null;
  name?: LocalizedValue | null;
  type?: string | null;
  level?: LocalizedValue | null;
  blurb?: LocalizedValue | null;
  overview?: LocalizedValue | null;
  imageUrl?: string | null;
  isArchive?: boolean | null;
  quickFacts?: {
    level?: LocalizedValue | null;
    format?: LocalizedValue | null;
    roomSize?: LocalizedValue | null;
    difficulty?: LocalizedValue | null;
    topic?: LocalizedValue | null;
    resources?: LocalizedValue[] | null;
  } | null;
  chairs?: Array<{
    name?: string | null;
    bio?: LocalizedValue | null;
  }> | null;
};

export type SanityResourceLink = {
  title?: LocalizedValue | null;
  description?: LocalizedValue | null;
  details?: LocalizedValue | null;
  href?: string | null;
  category?: LocalizedValue | null;
  order?: number | null;
};

export type SanitySponsor = {
  name?: string | null;
  website?: string | null;
  summary?: LocalizedValue | null;
  logoUrl?: string | null;
  order?: number | null;
  isPast?: boolean | null;
};

const localizedProjection = `{
  en,
  fr,
}`;

export const getSiteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title ${localizedProjection},
  socials,
  munagerUrl,
  venueAddress,
  googleMapsUrl,
  "heroVideoUrl": heroVideo.asset->url,
  "heroPosterUrl": heroPoster.asset->url,
}`;

export const getPageQuery = groq`*[_type == "page" && slug == $slug][0]{
  slug,
  navLabel ${localizedProjection},
  title ${localizedProjection},
  subtitle ${localizedProjection},
  intro ${localizedProjection},
  body ${localizedProjection},
  sections[]{
    key,
    title ${localizedProjection},
    summary ${localizedProjection},
    body ${localizedProjection},
    ctaLabel ${localizedProjection},
    ctaHref,
    links[]{
      label ${localizedProjection},
      href,
    },
  },
}`;

export const getPagesQuery = groq`*[_type == "page"] | order(slug asc) {
  slug,
  navLabel ${localizedProjection},
  title ${localizedProjection},
  subtitle ${localizedProjection},
  intro ${localizedProjection},
  body ${localizedProjection},
  sections[]{
    key,
    title ${localizedProjection},
    summary ${localizedProjection},
    body ${localizedProjection},
    ctaLabel ${localizedProjection},
    ctaHref,
    links[]{
      label ${localizedProjection},
      href,
    },
  },
}`;

export const getChaptersQuery = groq`*[_type == "chapter" && parentSlug == $parentSlug] | order(order asc, slug asc) {
  parentSlug,
  slug,
  order,
  navLabel ${localizedProjection},
  title ${localizedProjection},
  summary ${localizedProjection},
  body ${localizedProjection},
}`;

export const getAllChaptersQuery = groq`*[_type == "chapter"] | order(parentSlug asc, order asc, slug asc) {
  parentSlug,
  slug,
  order,
  navLabel ${localizedProjection},
  title ${localizedProjection},
  summary ${localizedProjection},
  body ${localizedProjection},
}`;

export const getSecretariatMembersQuery = groq`*[_type == "secretariatMember"] | order(order asc, name asc) {
  name,
  role ${localizedProjection},
  order,
  email,
  "headshotUrl": headshot.asset->url,
  bio ${localizedProjection},
}`;

export const getCommitteesQuery = groq`*[_type == "committee" && (!defined($archive) || isArchive == $archive)] | order(type asc, name.en asc) {
  slug,
  name ${localizedProjection},
  type,
  level ${localizedProjection},
  blurb ${localizedProjection},
  overview ${localizedProjection},
  "imageUrl": image.asset->url,
  isArchive,
  quickFacts {
    level ${localizedProjection},
    format ${localizedProjection},
    roomSize ${localizedProjection},
    difficulty ${localizedProjection},
    topic ${localizedProjection},
    resources[] ${localizedProjection},
  },
  chairs[]{
    name,
    bio ${localizedProjection},
  },
}`;

export const getResourceLinksQuery = groq`*[_type == "resourceLink"] | order(order asc, title.en asc) {
  title ${localizedProjection},
  description ${localizedProjection},
  details ${localizedProjection},
  href,
  category ${localizedProjection},
  order,
}`;

export const getSponsorsQuery = groq`*[_type == "sponsor"] | order(order asc, name asc) {
  name,
  website,
  summary ${localizedProjection},
  "logoUrl": logo.asset->url,
  order,
  isPast,
}`;
