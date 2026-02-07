import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";

type SiteSettings = {
  clinicName?: string;
  addressLine?: string;
  addressCity?: string;
  nip?: string;
  phone?: string;
  email?: string;
  openingHours?: string[];
};

const FALLBACK: Required<Pick<
  SiteSettings,
  "clinicName" | "addressLine" | "addressCity" | "phone" | "email" | "openingHours"
>> & { nip?: string } = {
  clinicName: "Prywatny gabinet laryngologiczny i audiologiczny - Dr n. med. Elżbieta A. Teresińska",
  addressLine: "ul. Kostki Napierskiego 6c",
  addressCity: "70-783 Szczecin",
  nip: "8512038228",
  phone: "+48 501 008 509",
  email: "info@dr-teresinska.pl",
  openingHours: ["Pn – Pt: 9:00 – 17:00"],
};

export default function ContactInfo({ data }: { data?: SiteSettings }) {
  const clinicName = data?.clinicName ?? FALLBACK.clinicName;
  const addressLine = data?.addressLine ?? FALLBACK.addressLine;
  const addressCity = data?.addressCity ?? FALLBACK.addressCity;
  const nip = data?.nip ?? FALLBACK.nip;

  const phone = data?.phone ?? FALLBACK.phone;
  const email = data?.email ?? FALLBACK.email;
  const openingHours =
    data?.openingHours?.length ? data.openingHours : FALLBACK.openingHours;

  const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${email}`;

  return (
    <section className="bg-(--surface-muted) py-14">
      <div className="container-page">
        <h2 className="text-xl font-bold text-(--text)">Kontakt</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <address className="not-italic text-sm text-(--text-muted)">
            <strong className="text-(--text)">{clinicName}</strong>
            <br />
            {addressLine}
            <br />
            {addressCity}
            {nip && (
              <>
                <br />
                NIP: {nip}
              </>
            )}
          </address>

          <div className="space-y-1 text-sm text-(--text-muted)">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6 text-(--brand)" />
              <a href={phoneHref}>{phone}</a>
            </div>

            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-6 w-6 text-(--brand)" />
              <a href={emailHref}>{email}</a>
            </div>

            {openingHours.length > 0 && (
              <div className="flex items-start gap-2">
                <ClockIcon className="h-6 w-6 text-(--brand)" />
                <div>
                  {openingHours.map((line, idx) => (
                    <div key={`${line}-${idx}`}>{line}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
