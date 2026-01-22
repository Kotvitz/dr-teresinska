import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";


export default function ContactInfo() {
  return (
    <section className="bg-(--surface-muted) py-14">
      <div className="container-page">
        <h2 className="text-xl font-bold text-(--text)">
          Kontakt
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <address className="not-italic text-sm text-(--text-muted)">
            <strong className="text-(--text)">
              Prywatny gabinet laryngologiczny i audiologiczny - Dr n. med. Elżbieta A. Teresińska
            </strong>
            <br />
            ul. Kostki Napierskiego 6c
            <br />
            70-783 Szczecin
            <br />
            NIP: 8512038228
          </address>

          <div className="text-sm text-(--text-muted) space-y-1">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6 text-(--brand)" />
              <a href="tel:+48501008509">+48 501 008 509</a>
            </div>

            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-6 w-6 text-(--brand)" />
              <a href="mailto:kontakt@dr-teresinska.pl">kontakt@dr-teresinska.pl</a>
            </div>

            <div className="flex items-center gap-2">
              <ClockIcon className="h-6 w-6 text-(--brand)" />
              <span>Pn–Pt: 9:00–17:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
