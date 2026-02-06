import { defineType, defineField } from "sanity";

export default defineType({
  name: "homePage",
  title: "Strona główna",
  type: "document",

  initialValue: {
    hero: {
      alt: "Gabinet otolaryngologiczny – Szczecin",
    },

    aboutPreview: {
      title: "Otolaryngolog • foniatra • audiolog – Szczecin",
      subtitle: "Dr n. med. Elżbieta A. Teresińska",
      text:
        "Konsultacje laryngologiczne i foniatryczne oraz diagnostyka słuchu i głosu u dzieci i dorosłych.",
      cta: {
        label: "Dowiedz się więcej →",
        href: "/o-mnie",
      },
    },

    servicesPreview: {
      title: "Specjalizacje",
      text:
        "Krótki przegląd obszarów konsultacji. Szczegółowy opis znajduje się na stronie Specjalizacje.",
      items: [
        "Laryngologia",
        "Audiologia",
        "Foniatria",
        "Zaburzenia głosu",
        "Opieka nad dziećmi",
        "Opieka nad dorosłymi",
      ],
      cta: {
        label: "Zobacz więcej →",
        href: "/specjalizacje",
      },
      imageAlt:
        "Ilustracja przedstawiająca zakres usług otolaryngologicznych i foniatrycznych",
    },

    diagnosticsPreview: {
      title: "Badania",
      text:
        "Najczęściej wykonywane badania. Pełna lista badań wraz z opisem znajduje się na stronie Badania.",
      items: [
        "Audiometria tonalna",
        "Audiometria mowy",
        "Tympanometria",
        "OAE",
        "BERA",
        "Badania przesiewowe słuchu",
      ],
      cta: {
        label: "Pełna lista →",
        href: "/badania",
      },
      imageAlt:
        "Ilustracja przedstawiająca diagnostykę słuchu i badania audiologiczne",
    },

    visitCta: {
      title: "Zapytaj o szczegóły wizyty!",
      text:
        "Skontaktuj się z nami — odpowiemy, jakie badania mogą być potrzebne.",
      button: {
        label: "Szczegóły kontaktu",
        href: "/kontakt",
      },
    },
  },

  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Zdjęcie hero (opcjonalnie)",
          type: "image",
          options: { hotspot: true },
          description:
            "Opcjonalne. Jeśli jest puste, używane jest domyślne zdjęcie z folderu /public.",
        }),
        defineField({
          name: "alt",
          title: "Alt (SEO)",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "aboutPreview",
      title: "Sekcja: O mnie (preview)",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Tytuł",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Podtytuł",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Tekst",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "cta",
          title: "Przycisk",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etykieta",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              description: "Np. /o-mnie",
              validation: (Rule) =>
                Rule.regex(
                  /^\/[a-z0-9\-\/]*$/i,
                  "Podaj ścieżkę zaczynającą się od /"
                ),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "servicesPreview",
      title: "Sekcja: Specjalizacje (preview)",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Tytuł",
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
          name: "items",
          title: "Lista elementów (opcjonalnie)",
          type: "array",
          of: [{ type: "string" }],
          description:
            "Jeśli jest puste, wyświetlana jest domyślna lista zdefiniowana w kodzie.",
        }),
        defineField({
          name: "cta",
          title: "Przycisk",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etykieta",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              description: "Np. /specjalizacje",
            }),
          ],
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
      name: "diagnosticsPreview",
      title: "Sekcja: Badania (preview)",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Tytuł",
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
          name: "items",
          title: "Lista badań (opcjonalnie)",
          type: "array",
          of: [{ type: "string" }],
          description:
            "Jeśli jest puste, wyświetlana jest domyślna lista zdefiniowana w kodzie.",
        }),
        defineField({
          name: "cta",
          title: "Przycisk",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etykieta",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              description: "Np. /badania",
            }),
          ],
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
      name: "visitCta",
      title: "Sekcja: Umów wizytę (CTA)",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Tytuł",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Tekst",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "button",
          title: "Przycisk",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etykieta",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              description: "Np. /kontakt lub tel: +48...",
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return { title: "Strona główna" };
    },
  }
});
