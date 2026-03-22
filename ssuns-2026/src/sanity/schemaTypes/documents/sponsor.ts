import { defineField, defineType } from "sanity";

export const sponsor = defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "website", title: "Website", type: "url" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "summary", title: "Summary", type: "localizedText" }),
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "isPast", title: "Past sponsor", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "website",
      media: "logo",
    },
  },
});
