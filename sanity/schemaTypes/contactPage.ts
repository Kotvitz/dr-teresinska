import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Kontakt",
  type: "document",

  initialValue: {
    header: {
      title: "Kontakt – umów się na wizytę!",
      text:
        "W gabinecie wykonuję szeroki zakres specjalistycznych badań diagnostycznych oraz oferuję konsultacje i terapię dostosowaną do indywidualnych potrzeb pacjentów – zarówno dzieci, jak i dorosłych.",
    },

    map: {
      title: "Lokalizacja",
      iframeTitle: "Mapa – dr n. med. Elżbieta Teresińska",
      embedUrl:
        "https://www.google.com/maps?q=Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog&output=embed",
      placeUrl:
        "https://www.google.com/maps/place/Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog/@53.37649,14.6550041,17z/data=!3m2!4b1!5s0x4700a7c7bf60c76d:0x9e983d254d991935!4m6!3m5!1s0x4700a7c7c0672d05:0x9ca1e80acb75c87a!8m2!3d53.37649!4d14.657579!16s%2Fg%2F1tks507p?entry=ttu",
      openLabel: "Otwórz w Google Maps →",
    },

    form: {
      title: "Formularz kontaktowy",
      requiredNote: "(*) - Pozycje obowiązkowe",
      submitIdle: "Wyślij wiadomość",
      submitSending: "Wysyłanie…",
      successMessage: "Dziękujemy! Wiadomość została wysłana.",
      errorMessage:
        "Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń.",
    },
  },

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
      name: "map",
      title: "Mapa",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Tytuł sekcji",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "iframeTitle",
          title: "Tytuł iframe (a11y)",
          type: "string",
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
        }),
        defineField({
          name: "requiredNote",
          title: "Notka o polach wymaganych",
          type: "string",
        }),
        defineField({
          name: "submitIdle",
          title: "Przycisk – domyślnie",
          type: "string",
        }),
        defineField({
          name: "submitSending",
          title: "Przycisk – wysyłanie",
          type: "string",
        }),
        defineField({
          name: "successMessage",
          title: "Komunikat sukcesu",
          type: "string",
        }),
        defineField({
          name: "errorMessage",
          title: "Komunikat błędu",
          type: "string",
        })
      ],
    }),
  ],

  preview: {
    prepare: () => ({ title: "Kontakt" }),
  },
});
