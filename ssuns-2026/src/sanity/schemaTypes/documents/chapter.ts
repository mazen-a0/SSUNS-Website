import { defineField, defineType } from "sanity";

export const chapter = defineType({
  name: "chapter",
  title: "Chapter",
  type: "document",
  fields: [
    defineField({ name: "parentSlug", title: "Parent slug", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "navLabel", title: "Navigation label", type: "localizedString" }),
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "localizedText" }),
    defineField({ name: "body", title: "Body", type: "localizedText" }),
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "parentSlug",
    },
  },
});
