import { defineArrayMember, defineField, defineType } from "sanity";

export const quickFacts = defineType({
  name: "quickFacts",
  title: "Quick facts",
  type: "object",
  fields: [
    defineField({ name: "level", title: "Level", type: "localizedString" }),
    defineField({ name: "format", title: "Format", type: "localizedString" }),
    defineField({ name: "roomSize", title: "Room size", type: "localizedString" }),
    defineField({ name: "difficulty", title: "Difficulty", type: "localizedText" }),
    defineField({ name: "topic", title: "Topic", type: "localizedText" }),
    defineField({
      name: "resources",
      title: "Resources",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
    }),
  ],
});
