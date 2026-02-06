import { defineType, defineField } from "sanity";

export default defineType({
  name: "specializationsPage",
  title: "Specjalizacje",
  type: "document",

  initialValue: {
    intro: {
      title: "Specjalizacje – otolaryngologia, audiologia i foniatria",
      text:
        "Poniżej znajduje się przegląd najczęstszych problemów, z którymi pacjenci zgłaszają się do gabinetu. Każdego pacjenta traktuję indywidualnie, starannie analizując objawy i dobierając najlepszą metodę leczenia. Zapraszam na konsultację – wspólnie znajdziemy skuteczne rozwiązanie Twojego problemu.",
    },
    groupsSection: {
      title: "Zakres specjalizacji",
      groups: [
        {
          title: "Choroby uszu",
          items: [
            "Choroby ucha zewnętrznego",
            "Choroby ucha środkowego",
            "Choroby ucha wewnętrznego",
            "Niedosłuchy przewodzeniowe i odbiorcze",
            "Głuchota przewodzeniowa i czuciowo-nerwowa",
            "Nagła głuchota",
            "Zawroty głowy",
            "Szumy uszne (gwizdy, dzwonienie)",
          ],
        },
        {
          title: "Zaburzenia głosu i mowy",
          items: [
            "Chrypka i zanikanie głosu",
            "Zaburzenia głosu u dzieci i dorosłych",
            "Ostre i przewlekłe zapalenia krtani i tchawicy",
            "Zaburzenia mowy",
            "Zaburzenia rozwoju mowy i języka",
            "Dysleksja",
            "Dysfagia (zaburzenia połykania)",
          ],
        },
        {
          title: "Inne schorzenia",
          items: ["Choroby górnych dróg oddechowych"],
        },
      ],
    },
  },

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

  preview: {
    prepare: () => ({ title: "Specjalizacje" }),
  },
});
