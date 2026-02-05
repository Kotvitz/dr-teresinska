import { defineType, defineField } from "sanity";

export default defineType({
  name: "legalPage",
  title: "Strony prawne",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
      description: "Np. obowiazek-informacyjny",
    }),
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "html",
      title: "Treść (HTML)",
      type: "text",
      rows: 25,
      validation: (Rule) => Rule.required(),
      description: "Wklej gotowy HTML. Renderowane przez dangerouslySetInnerHTML.",
    }),
    defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
