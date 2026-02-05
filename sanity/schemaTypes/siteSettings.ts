import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Ustawienia strony",
  type: "document",
  fields: [
    defineField({
      name: "clinicName",
      title: "Nazwa gabinetu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "addressLine",
      title: "Adres – ulica",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "addressCity",
      title: "Adres – kod i miasto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "nip",
      title: "NIP",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "openingHours",
      title: "Godziny przyjęć",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Ustawienia strony (globalne)" };
    },
  },
});
