import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

type Props = {
  data?: {
    title?: string;
    addressLine?: string;
    addressCity?: string;
    phoneLabel?: string;
    phoneHref?: string;
    emailLabel?: string;
    emailHref?: string;
    hours?: string[];
  };
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
  const title = data?.title ?? "Dane kontaktowe";

  const addressLine = data?.addressLine ?? "ul. Kostki Napierskiego 6c";
  const addressCity = data?.addressCity ?? "70-783 Szczecin";

  const phoneLabel = data?.phoneLabel ?? "+48 501 008 509";
  const phoneHref = data?.phoneHref ?? "tel:+48501008509";

  const emailLabel = data?.emailLabel ?? "kontakt@dr-teresinska.pl";
  const emailHref = data?.emailHref ?? "mailto:kontakt@dr-teresinska.pl";

  const hours = data?.hours?.length ? data.hours : ["Pn–Pt: 9:00–17:00"];

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
            {phoneLabel}
          </a>
        </Row>

        <Row icon={<EnvelopeIcon className="h-5 w-5" />} label="E-mail">
          <a className="nav-link font-semibold text-(--brand-ink)" href={emailHref}>
            {emailLabel}
          </a>
        </Row>

        <Row icon={<ClockIcon className="h-5 w-5" />} label="Godziny przyjęć">
          <div className="space-y-1">
            {hours.map((line, idx) => (
              <div key={`${line}-${idx}`}>
                <span className="font-semibold text-(--text)">{line.split(":")[0]}:</span>{" "}
                {line.includes(":") ? line.split(":").slice(1).join(":").trim() : ""}
              </div>
            ))}
          </div>
        </Row>
      </address>
    </section>
  );
}
