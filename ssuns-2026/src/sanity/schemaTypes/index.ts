import type { SchemaTypeDefinition } from "sanity";
import { chapter } from "@/sanity/schemaTypes/documents/chapter";
import { committee } from "@/sanity/schemaTypes/documents/committee";
import { page } from "@/sanity/schemaTypes/documents/page";
import { resourceLink } from "@/sanity/schemaTypes/documents/resourceLink";
import { secretariatMember } from "@/sanity/schemaTypes/documents/secretariatMember";
import { siteSettings } from "@/sanity/schemaTypes/documents/siteSettings";
import { sponsor } from "@/sanity/schemaTypes/documents/sponsor";
import { localizedString } from "@/sanity/schemaTypes/objects/localizedString";
import { localizedText } from "@/sanity/schemaTypes/objects/localizedText";
import { pageSection } from "@/sanity/schemaTypes/objects/pageSection";
import { quickFacts } from "@/sanity/schemaTypes/objects/quickFacts";

export const schemaTypes: SchemaTypeDefinition[] = [
  localizedString,
  localizedText,
  pageSection,
  quickFacts,
  siteSettings,
  page,
  chapter,
  secretariatMember,
  committee,
  resourceLink,
  sponsor,
];

export const schema = {
  types: schemaTypes,
};
