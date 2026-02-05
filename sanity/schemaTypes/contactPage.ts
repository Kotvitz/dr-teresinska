import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Kontakt",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Nagłówek strony",
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
          title: "Opis",
          type: "text",
          rows: 4,
        }),
      ],
    }),

    defineField({
      name: "details",
      title: "Dane kontaktowe",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Tytuł sekcji",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "Dane kontaktowe",
        }),
        defineField({
          name: "addressLine",
          title: "Adres – linia 1",
          type: "string",
        }),
        defineField({
          name: "addressCity",
          title: "Adres – miasto / kod",
          type: "string",
        }),
        defineField({
          name: "phoneLabel",
          title: "Telefon – etykieta",
          type: "string",
          initialValue: "+48 501 008 509",
        }),
        defineField({
          name: "phoneHref",
          title: "Telefon – link (tel:)",
          type: "string",
          initialValue: "tel:+48501008509",
        }),
        defineField({
          name: "emailLabel",
          title: "E-mail – etykieta",
          type: "string",
          initialValue: "kontakt@dr-teresinska.pl",
        }),
        defineField({
          name: "emailHref",
          title: "E-mail – link (mailto:)",
          type: "string",
          initialValue: "mailto:kontakt@dr-teresinska.pl",
        }),
        defineField({
          name: "hours",
          title: "Godziny przyjęć",
          type: "array",
          of: [{ type: "string" }],
          description: 'Np. "Pn–Pt: 9:00–17:00"',
        }),
      ],
    }),

    defineField({
      name: "map",
      title: "Mapa",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Tytuł sekcji",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "Lokalizacja",
        }),
        defineField({
          name: "iframeTitle",
          title: "Tytuł iframe (a11y)",
          type: "string",
          initialValue: "Mapa – dr n. med. Elżbieta Teresińska",
        }),
        defineField({
          name: "embedUrl",
          title: "URL osadzenia (iframe)",
          type: "url",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "placeUrl",
          title: "Link do Google Maps",
          type: "url",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "openLabel",
          title: "Tekst linku",
          type: "string",
          initialValue: "Otwórz w Google Maps →",
        }),
      ],
    }),

    defineField({
      name: "form",
      title: "Formularz (teksty)",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Tytuł sekcji",
          type: "string",
          initialValue: "Formularz kontaktowy",
        }),
        defineField({
          name: "requiredNote",
          title: "Notka o polach wymaganych",
          type: "string",
          initialValue: "(*) - Pozycje obowiązkowe",
        }),
        defineField({
          name: "submitIdle",
          title: "Przycisk – domyślnie",
          type: "string",
          initialValue: "Wyślij wiadomość",
        }),
        defineField({
          name: "submitSending",
          title: "Przycisk – wysyłanie",
          type: "string",
          initialValue: "Wysyłanie…",
        }),
        defineField({
          name: "successMessage",
          title: "Komunikat sukcesu",
          type: "string",
          initialValue: "Dziękujemy! Wiadomość została wysłana.",
        }),
        defineField({
          name: "errorMessage",
          title: "Komunikat błędu",
          type: "string",
          initialValue: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń.",
        }),

        defineField({
          name: "consentText",
          title: "Zgoda (RODO)",
          type: "array",
          of: [{ type: "text", rows: 2 }],
          description:
            "Każda linia zostanie wyświetlona jako część zgody. Link do obowiązku informacyjnego zostaje w kodzie.",
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Kontakt" }) },
});
