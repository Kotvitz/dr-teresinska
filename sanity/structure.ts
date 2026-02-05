import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Zarządzanie treścią")
    .items([
      S.listItem()
        .title("Ustawienia strony")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),

      S.divider(),

      S.listItem()
        .title("Strona główna")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),

      S.listItem()
        .title("O mnie")
        .id("aboutPage")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),

      S.listItem()
        .title("Specjalizacje")
        .id("specializationsPage")
        .child(
          S.document()
            .schemaType("specializationsPage")
            .documentId("specializationsPage")
        ),

      S.listItem()
        .title("Badania")
        .id("testsPage")
        .child(S.document().schemaType("testsPage").documentId("testsPage")),

      S.listItem()
        .title("Kontakt")
        .id("contactPage")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),

      S.listItem()
        .title("Strony prawne")
        .id("legalPages")
        .child(S.documentTypeList("legalPage").title("Strony prawne")),
    ]);
