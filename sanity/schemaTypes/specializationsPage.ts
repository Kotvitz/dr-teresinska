import { defineType, defineField } from "sanity";

export default defineType({
  name: "specializationsPage",
  title: "Specjalizacje",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Sekcja: Wstęp",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "text",
          title: "Tekst",
          type: "text",
          rows: 5,
        }),
        defineField({
          name: "image",
          title: "Obrazek (opcjonalnie)",
          type: "image",
          options: { hotspot: true },
          description:
            "Opcjonalny. Jeśli jest puste, używany jest obrazek z folderu /public.",
        }),
        defineField({
          name: "imageAlt",
          title: "Alt obrazka",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "groupsSection",
      title: "Sekcja: Zakres specjalizacji",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "groups",
          title: "Grupy",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Tytuł grupy",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "items",
                  title: "Elementy",
                  type: "array",
                  of: [{ type: "string" }],
                  validation: (Rule) => Rule.min(1),
                }),
              ],
              preview: { select: { title: "title" } },
            },
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Specjalizacje" }) },
});
