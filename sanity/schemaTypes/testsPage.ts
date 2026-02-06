import { defineType, defineField } from "sanity";

export default defineType({
  name: "testsPage",
  title: "Badania",
  type: "document",

  initialValue: {
    intro: {
      title: "Badania audiologiczne i laryngologiczne – Szczecin",
      text:
        "W gabinecie wykonywana jest diagnostyka słuchu, głosu oraz dróg oddechowych. " +
        "Dobór badań zależy od objawów i wieku pacjenta – każde badanie poprzedza wywiad, " +
        "a wyniki są omawiane wraz z zaleceniami.",
      imageAlt: "Ilustracja przedstawiająca badania słuchu i diagnostykę",
    },

    scope: {
      title: "Zakres badań i konsultacji",
      cards: [
        {
          title: "Diagnostyka słuchu",
          items: [
            "Audiometria i tympanometria",
            "Badania obiektywne: BERA i OAE",
            "Badania przesiewowe słuchu",
          ],
        },
        {
          title: "Diagnostyka głosu i dróg oddechowych",
          items: [
            "Videostroboskopia krtani",
            "Videoendoskopia (krtań/nos/uszy)",
            "Nasofaryngoskopia (nosogardło)",
          ],
        },
        {
          title: "Najczęstsze wskazania",
          items: [
            "Niedosłuch, szumy uszne",
            "Chrypka i zaburzenia głosu",
            "Nawracające infekcje, zatoki",
            "Zawroty głowy",
          ],
        },
      ],
    },

    mostCommon: {
      title: "Najczęściej wykonywane badania",
      left: {
        title: "Badania słuchu i dróg oddechowych",
        items: [
          {
            name: "Audiometria tonalna",
            desc: "Ocena progu słyszenia na różnych częstotliwościach (audiogram).",
          },
          {
            name: "Audiometria mowy",
            desc: "Ocena rozumienia mowy – przydatna m.in. w dalszej diagnostyce i zaleceniach.",
          },
          {
            name: "Tympanometria",
            desc: "Ocena ucha środkowego i ruchomości błony bębenkowej.",
          },
          {
            name: "OAE",
            desc: "Obiektywna ocena funkcji ślimaka (komórek słuchowych) – także u dzieci.",
          },
          {
            name: "BERA",
            desc: "Obiektywna ocena drogi słuchowej – możliwa również u najmłodszych pacjentów.",
          },
        ],
      },
      right: {
        title: "Badania głosu",
        items: [
          {
            name: "Videoendoskopia",
            desc: "Ocena krtani/nosa/uszu w badaniu endoskopowym.",
          },
          {
            name: "Videostroboskopia krtani",
            desc: "Ocena pracy fałdów głosowych (np. przy chrypce i przeciążeniu głosu).",
          },
          {
            name: "Nasofaryngoskopia",
            desc: "Ocena nosogardła (m.in. u dzieci – np. w kierunku przerostu migdałka gardłowego).",
          },
        ],
        note:
          "W przypadku problemów z głosem (np. chrypka, zmęczenie głosu, przeciążenia u osób mówiących zawodowo) " +
          "dobierana jest diagnostyka oraz dalsze zalecenia.",
      },
    },

    visitFlow: {
      title: "Jak wygląda wizyta?",
      steps: [
        {
          title: "1. Wywiad",
          text: "Pytania o objawy, historię leczenia i potrzeby pacjenta.",
        },
        {
          title: "2. Dobór badań",
          text: "Badania dobierane są do wieku i problemu (słuch / głos / drogi oddechowe).",
        },
        {
          title: "3. Omówienie wyników",
          text: "Wyniki są tłumaczone i omawiane wraz z dalszym planem postępowania.",
        },
      ],
      cta: {
        label: "Przejdź do kontaktu →",
        href: "/kontakt",
      },
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
