import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

type ContactDetailsData = {
  title?: string;
  addressLine?: string;
  addressCity?: string;
  phone?: string;
  email?: string;
  openingHours?: string[];
};

type Props = {
  data?: ContactDetailsData;
};

const FALLBACK = {
  title: "Prywatny gabinet laryngologiczny i audiologiczny - Dr n. med. Elżbieta A. Teresińska",
  addressLine: "ul. Kostki Napierskiego 6c",
  addressCity: "70-783 Szczecin",
  phone: "+48 501 008 509",
  email: "info@dr-teresinska.pl",
  openingHours: ["Pn – Pt: 9:00 – 17:00"],
};

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

export default function ContactDetails({ data }: Props) {
  const title = data?.title ?? FALLBACK.title;

  const addressLine = data?.addressLine ?? FALLBACK.addressLine;
  const addressCity = data?.addressCity ?? FALLBACK.addressCity;

  const phone = data?.phone ?? FALLBACK.phone;
  const email = data?.email ?? FALLBACK.email;

  const openingHours =
    data?.openingHours?.length ? data.openingHours : FALLBACK.openingHours;

  const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${email}`;

  return (
    <section className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        {title}
      </h2>

      <address className="mt-6 space-y-5 not-italic">
        <Row icon={<MapPinIcon className="h-5 w-5" />} label="Adres">
          <div className="font-semibold text-(--text)">{addressLine}</div>
          <div>{addressCity}</div>
        </Row>

        <Row icon={<PhoneIcon className="h-5 w-5" />} label="Telefon">
          <a className="nav-link font-semibold text-(--brand-ink)" href={phoneHref}>
            {phone}
          </a>
        </Row>

        <Row icon={<EnvelopeIcon className="h-5 w-5" />} label="E-mail">
          <a className="nav-link font-semibold text-(--brand-ink)" href={emailHref}>
            {email}
          </a>
        </Row>

        <Row icon={<ClockIcon className="h-5 w-5" />} label="Godziny przyjęć">
          <div className="space-y-1">
            {openingHours.map((line, idx) => (
              <div key={`${line}-${idx}`}>{line}</div>
            ))}
          </div>
        </Row>
      </address>
    </section>
  );
}
