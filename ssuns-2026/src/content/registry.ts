import { aboutContent as aboutContentEn } from "@/content/en/about";
import { committees as committeesEn, committeesPageContent as committeesPageContentEn } from "@/content/en/committees";
import { conferenceContent as conferenceContentEn } from "@/content/en/conference";
import { contactContent as contactContentEn } from "@/content/en/contact";
import { homeContent as homeContentEn } from "@/content/en/home";
import { registrationContent as registrationContentEn } from "@/content/en/registration";
import { commonResources as commonResourcesEn, resourcesPageContent as resourcesPageContentEn } from "@/content/en/resources";
import { footerContent as footerContentEn, navItems as navItemsEn, siteMeta as siteMetaEn, uiText as uiTextEn } from "@/content/en/site";
import { aboutContent as aboutContentFr } from "@/content/fr/about";
import { committees as committeesFr, committeesPageContent as committeesPageContentFr } from "@/content/fr/committees";
import { conferenceContent as conferenceContentFr } from "@/content/fr/conference";
import { contactContent as contactContentFr } from "@/content/fr/contact";
import { homeContent as homeContentFr } from "@/content/fr/home";
import { registrationContent as registrationContentFr } from "@/content/fr/registration";
import { commonResources as commonResourcesFr, resourcesPageContent as resourcesPageContentFr } from "@/content/fr/resources";
import { footerContent as footerContentFr, navItems as navItemsFr, siteMeta as siteMetaFr, uiText as uiTextFr } from "@/content/fr/site";

export type Locale = "en" | "fr";

export const contentByLocale = {
  en: {
    siteMeta: siteMetaEn,
    navItems: navItemsEn,
    uiText: uiTextEn,
    footerContent: footerContentEn,
    homeContent: homeContentEn,
    aboutContent: aboutContentEn,
    conferenceContent: conferenceContentEn,
    registrationContent: registrationContentEn,
    resourcesPageContent: resourcesPageContentEn,
    commonResources: commonResourcesEn,
    contactContent: contactContentEn,
    committeesPageContent: committeesPageContentEn,
    committees: committeesEn,
  },
  fr: {
    siteMeta: siteMetaFr,
    navItems: navItemsFr,
    uiText: uiTextFr,
    footerContent: footerContentFr,
    homeContent: homeContentFr,
    aboutContent: aboutContentFr,
    conferenceContent: conferenceContentFr,
    registrationContent: registrationContentFr,
    resourcesPageContent: resourcesPageContentFr,
    commonResources: commonResourcesFr,
    contactContent: contactContentFr,
    committeesPageContent: committeesPageContentFr,
    committees: committeesFr,
  },
};

export type ContentBundle = (typeof contentByLocale)[Locale];

export function getContent(locale: Locale): ContentBundle {
  return contentByLocale[locale] ?? contentByLocale.en;
}

export function getCommitteeBySlug(locale: Locale, slug: string) {
  return (contentByLocale[locale] ?? contentByLocale.en).committees.find((committee) => committee.slug === slug);
}
