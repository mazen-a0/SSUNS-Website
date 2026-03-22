import { defineField, defineType } from "sanity";

export const secretariatMember = defineType({
  name: "secretariatMember",
  title: "Secretariat Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "localizedString", validation: (Rule) => Rule.required() }),
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "headshot", title: "Headshot", type: "image" }),
    defineField({ name: "bio", title: "Bio", type: "localizedText" }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role.en",
      media: "headshot",
    },
  },
});
