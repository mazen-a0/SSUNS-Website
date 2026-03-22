import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site title", type: "localizedString" }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "object",
      fields: [
        defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
        defineField({ name: "tiktokUrl", title: "TikTok URL", type: "url" }),
      ],
    }),
    defineField({ name: "munagerUrl", title: "Munager URL", type: "url" }),
    defineField({ name: "venueAddress", title: "Venue address", type: "string" }),
    defineField({ name: "googleMapsUrl", title: "Google Maps URL", type: "url" }),
    defineField({ name: "heroVideo", title: "Hero video", type: "file", options: { accept: "video/*" } }),
    defineField({ name: "heroPoster", title: "Hero poster", type: "image" }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
