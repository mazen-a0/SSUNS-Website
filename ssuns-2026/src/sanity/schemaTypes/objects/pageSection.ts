import { defineArrayMember, defineField, defineType } from "sanity";

export const pageSection = defineType({
  name: "pageSection",
  title: "Page section",
  type: "object",
  fields: [
    defineField({ name: "key", title: "Section key", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Title", type: "localizedString" }),
    defineField({ name: "summary", title: "Summary", type: "localizedText" }),
    defineField({ name: "body", title: "Body", type: "localizedText" }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "localizedString" }),
    defineField({ name: "ctaHref", title: "CTA href", type: "string" }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "localizedString" }),
            defineField({ name: "href", title: "Href", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});
