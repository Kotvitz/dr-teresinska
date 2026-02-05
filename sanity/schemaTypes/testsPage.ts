import { defineType, defineField } from "sanity";

export default defineType({
  name: "testsPage",
  title: "Badania",
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
          rows: 4,
        }),
        defineField({
          name: "image",
          title: "Obrazek (opcjonalnie)",
          type: "image",
          options: { hotspot: true },
          description:
            "Opcjonalny. Jeśli puste, używany jest obrazek z /public (photo-tests.webp).",
        }),
        defineField({ name: "imageAlt", title: "Alt obrazka", type: "string" }),
      ],
    }),

    defineField({
      name: "scope",
      title: "Sekcja: Zakres badań i konsultacji",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "cards",
          title: "Kafelki",
          type: "array",
          validation: (Rule) => Rule.min(3).max(3),
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Tytuł",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "items",
                  title: "Punkty",
                  type: "array",
                  of: [{ type: "string" }],
                  validation: (Rule) => Rule.min(1),
                  description: "Wpisuj tekst bez '•' — zostanie dodana w UI.",
                }),
              ],
              preview: { select: { title: "title" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "mostCommon",
      title: "Sekcja: Najczęściej wykonywane badania",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: "left",
          title: "Kolumna lewa",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Tytuł kolumny",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "items",
              title: "Badania",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Nazwa",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "desc",
                      title: "Opis",
                      type: "text",
                      rows: 2,
                    }),
                  ],
                  preview: { select: { title: "name" } },
                },
              ],
              validation: (Rule) => Rule.min(1),
            }),
          ],
        }),

        defineField({
          name: "right",
          title: "Kolumna prawa",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Tytuł kolumny",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "items",
              title: "Badania",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Nazwa",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "desc",
                      title: "Opis",
                      type: "text",
                      rows: 2,
                    }),
                  ],
                  preview: { select: { title: "name" } },
                },
              ],
              validation: (Rule) => Rule.min(1),
            }),
            defineField({
              name: "note",
              title: "Dodatkowy akapit pod listą (opcjonalnie)",
              type: "text",
              rows: 3,
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "visitFlow",
      title: "Sekcja: Jak wygląda wizyta?",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "steps",
          title: "Kroki (3)",
          type: "array",
          validation: (Rule) => Rule.min(3).max(3),
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Tytuł kroku",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "text",
                  title: "Opis",
                  type: "text",
                  rows: 2,
                }),
              ],
              preview: { select: { title: "title" } },
            },
          ],
        }),
        defineField({
          name: "cta",
          title: "Link pod sekcją",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Tekst linku", type: "string" }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              description: "Np. /kontakt",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Badania" }) },
});
