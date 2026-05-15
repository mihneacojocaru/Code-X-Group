import { defineField, defineType } from "sanity";

export const pressType = defineType({
  name: "press",
  title: "Press & Media",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Podcast", value: "podcast" },
          { title: "Artikel", value: "article" },
        ],
        layout: "radio",
      },
      initialValue: "article",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Optional additional context (e.g. guest name, host, episode details)",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "linkText",
      title: "Link Text",
      type: "string",
      description: "Custom label for the link button (optional, falls back to title)",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first within a category",
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
    },
    prepare({ title, category }) {
      return {
        title,
        subtitle: category === "podcast" ? "🎙 Podcast" : "📰 Artikel",
      };
    },
  },
});
