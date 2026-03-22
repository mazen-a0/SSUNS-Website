import { defineArrayMember, defineField, defineType } from "sanity";

export const committee = defineType({
  name: "committee",
  title: "Committee",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localizedString", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "GA / ECOSOC", value: "GA" },
          { title: "Specialized", value: "Specialized" },
          { title: "Crisis", value: "Crisis" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "level", title: "Level", type: "localizedString" }),
    defineField({ name: "blurb", title: "Blurb", type: "localizedText" }),
    defineField({ name: "overview", title: "Overview", type: "localizedText" }),
    defineField({ name: "quickFacts", title: "Quick facts", type: "quickFacts" }),
    defineField({
      name: "chairs",
      title: "Chair bios",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "bio", title: "Bio", type: "localizedText" }),
          ],
        }),
      ],
    }),
    defineField({ name: "image", title: "Image", type: "image" }),
    defineField({ name: "isArchive", title: "Archive / preview item", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: {
      title: "name.en",
      subtitle: "type",
      media: "image",
    },
  },
});
