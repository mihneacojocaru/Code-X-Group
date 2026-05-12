import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "about",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "authorLink",
      title: "Author Link",
      type: "url",
      description: "Link to author website, GitHub, LinkedIn, etc.",
    }),
  ],
  preview: {
    select: { title: "name", media: "avatar" },
  },
});
