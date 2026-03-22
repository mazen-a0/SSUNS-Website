import { defineField, defineType } from "sanity";

export const resourceLink = defineType({
  name: "resourceLink",
  title: "Resource Link",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "localizedText" }),
    defineField({ name: "details", title: "Details", type: "localizedText" }),
    defineField({ name: "href", title: "Href", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "category", title: "Category", type: "localizedString" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "href",
    },
  },
});
