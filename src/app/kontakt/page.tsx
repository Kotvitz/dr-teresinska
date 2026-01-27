import type { Metadata } from "next";
import ContactHeader from "../components/sections/ContactHeader";
import ContactDetails from "../components/sections/ContactDetails";
import ContactMap from "../components/sections/ContactMap";
import ContactForm from "../components/sections/ContactForm";


export const metadata: Metadata = {
  title: "Kontakt – Dr n. med. Elżbieta A. Teresińska (Szczecin)",
  description:
    "Kontakt do gabinetu: adres, telefon, godziny przyjęć oraz formularz kontaktowy. Umów wizytę w Szczecinie.",
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="container-page py-12">
      <article className="mx-auto max-w-5xl">
        <ContactHeader />

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <ContactDetails />
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
