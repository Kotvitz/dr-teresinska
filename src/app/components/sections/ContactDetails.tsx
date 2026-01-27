import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const PHONE = "+48 501 008 509";
const PHONE_HREF = "tel:+48501008509";

const EMAIL = "kontakt@dr-teresinska.pl";
const EMAIL_HREF = "mailto:kontakt@dr-teresinska.pl";

const ADDRESS_LINE = "ul. Kostki Napierskiego 6c";
const ADDRESS_CITY = "70-783 Szczecin";

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface-muted) text-(--brand-ink)">
        {icon}
      </span>
      <div>
        <div className="text-sm font-bold text-(--text)">{label}</div>
        <div className="mt-1 text-sm text-(--text-muted)">{children}</div>
      </div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <section className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        Dane kontaktowe
      </h2>

      <address className="mt-6 space-y-5 not-italic">
        <Row icon={<MapPinIcon className="h-5 w-5" />} label="Adres">
          <div className="font-semibold text-(--text)">{ADDRESS_LINE}</div>
          <div>{ADDRESS_CITY}</div>
        </Row>

        <Row icon={<PhoneIcon className="h-5 w-5" />} label="Telefon">
          <a
            className="nav-link font-semibold text-(--brand-ink)"
            href={PHONE_HREF}
          >
            {PHONE}
          </a>
        </Row>

        <Row icon={<EnvelopeIcon className="h-5 w-5" />} label="E-mail">
          <a className="nav-link font-semibold text-(--brand-ink)" href={EMAIL_HREF}>
            {EMAIL}
          </a>
        </Row>

        <Row icon={<ClockIcon className="h-5 w-5" />} label="Godziny przyjęć">
          <div>
            <span className="font-semibold text-(--text)">Pn–Pt:</span> 9:00–17:00
          </div>
        </Row>
      </address>
    </section>
  );
}
