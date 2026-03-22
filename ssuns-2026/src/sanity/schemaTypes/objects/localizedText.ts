import { defineField, defineType } from "sanity";

export const localizedText = defineType({
  name: "localizedText",
  title: "Localized text",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "text", rows: 6 }),
    defineField({ name: "fr", title: "French", type: "text", rows: 6 }),
  ],
});
