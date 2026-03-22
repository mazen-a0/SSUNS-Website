import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "slug", title: "Slug", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "navLabel", title: "Navigation label", type: "localizedString" }),
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (Rule) => Rule.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "localizedString" }),
    defineField({ name: "intro", title: "Intro", type: "localizedText" }),
    defineField({ name: "body", title: "Body", type: "localizedText" }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [defineArrayMember({ type: "pageSection" })],
    }),
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "slug",
    },
    prepare({ title, subtitle }) {
      return { title: title || "Untitled page", subtitle };
    },
  },
});
