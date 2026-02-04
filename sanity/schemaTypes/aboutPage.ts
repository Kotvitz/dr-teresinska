import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "O mnie",
  type: "document",
  fields: [
    defineField({
      name: "main",
      title: "Sekcja: Główna",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Podtytuł",
          type: "string",
        }),
        defineField({
          name: "paragraphs",
          title: "Akapity",
          type: "array",
          of: [{ type: "text", rows: 4 }],
          validation: (Rule) => Rule.min(1),
          description: "Każdy element listy to osobny akapit.",
        }),
      ],
    }),

    defineField({
      name: "certificates",
      title: "Sekcja: Certyfikaty",
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
          title: "Tekst wprowadzający",
          type: "text",
          rows: 4,
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "O mnie" }) },
});
