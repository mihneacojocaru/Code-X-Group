import { defineArrayMember, defineField, defineType } from "sanity";

export const tableType = defineType({
  name: "table",
  title: "Table",
  type: "object",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "headerRow",
      title: "Header Row",
      description: "Column headers (leave empty if no header row needed)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        defineArrayMember({
          name: "tableRow",
          title: "Row",
          type: "object",
          fields: [
            defineField({
              name: "cells",
              title: "Cells",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: { cells: "cells" },
            prepare({ cells }) {
              return {
                title: Array.isArray(cells) ? cells.join(" | ") : "Row",
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { rows: "rows", caption: "caption" },
    prepare({ rows, caption }) {
      const rowCount = Array.isArray(rows) ? rows.length : 0;
      return {
        title: caption || "Table",
        subtitle: `${rowCount} row${rowCount !== 1 ? "s" : ""}`,
      };
    },
  },
});
