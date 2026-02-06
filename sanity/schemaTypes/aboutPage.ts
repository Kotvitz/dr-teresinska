import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "O mnie",
  type: "document",

  initialValue: {
    main: {
      title: "Otolaryngolog • foniatra • audiolog – Szczecin",
      subtitle: "Dr n. med. Elżbieta A. Teresińska",
      paragraphs: [
        "Specjalistka otorynolaryngologii, foniatrii i audiologii z wieloletnim doświadczeniem klinicznym i dydaktycznym. Zajmuje się diagnostyką i leczeniem zaburzeń głosu, mowy, słuchu oraz chorób uszu, nosa i gardła — zarówno u dzieci, jak i dorosłych.",
        "W praktyce łączy podejście medyczne z holistycznym spojrzeniem na potrzeby pacjenta, współpracując z logopedami i terapeutami głosu. Specjalizuje się również w badaniach słuchu noworodków oraz opiece foniatrycznej dla osób zawodowo pracujących głosem.",
      ],
    },

    certificates: {
      title: "Certyfikaty",
      text:
        "Poniżej znajduje się wybór certyfikatów i potwierdzeń uczestnictwa w szkoleniach oraz konferencjach.",
    },
  },

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
          name: "photo",
          title: "Zdjęcie profilowe",
          type: "image",
          options: { hotspot: true },
          description:
            "Opcjonalnie. Jeśli jest puste, użyte zostanie domyślne zdjęcie z /public.",
          fields: [
            defineField({
              name: "alt",
              title: "Alt (SEO)",
              type: "string",
              validation: (Rule) => Rule.max(120),
            }),
          ],
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

  preview: {
    prepare: () => ({ title: "O mnie" }),
  },
});
