import type { Metadata } from "next";
import ContactHeader from "../components/sections/ContactHeader";
import ContactDetails from "../components/sections/ContactDetails";
import ContactMap from "../components/sections/ContactMap";
import ContactForm from "../components/sections/ContactForm";
import { client } from "../../../sanity/lib/client";
import { siteSettingsQuery } from "../../../sanity/queries/siteSettings";
import { contactPageQuery } from "../../../sanity/queries/contactPage";

export const metadata: Metadata = {
  title: "Kontakt - Dr Teresińska",
  description:
    "Szukasz specjalisty w Szczecinie? Skontaktuj się z dr n. med. Elżbietą A. Teresińską, oferującą diagnostykę i leczenie chrypek, badania głosu i słuchu.",
  robots: { index: true, follow: true },
};

export default async function ContactPage() {
  const siteSettings = await client.fetch(siteSettingsQuery);
  const contactPage = await client.fetch(contactPageQuery);

  const contactDetailsData = {
    ...siteSettings,
    emails: contactPage?.emails,
  };

  return (
    <main className="container-page py-12">
      <article className="mx-auto max-w-5xl">
        <ContactHeader />

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <ContactDetails data={contactDetailsData} />
            <ContactMap />
          </div>

          <div>
            <ContactForm />
          </div>
        </section>
      </article>
    </main>
  );
}
