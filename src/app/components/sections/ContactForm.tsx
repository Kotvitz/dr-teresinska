"use client";

import { useMemo, useState } from "react";

const TO_EMAIL = "kontakt@dr-teresinska.pl";

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-(--text)">
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim() || !email.includes("@")) return false;
    if (!message.trim()) return false;
    if (!consent) return false;
    return true;
  }, [name, email, message, consent]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const subject = encodeURIComponent("Wiadomość z dr-teresinska.pl");
    const body = encodeURIComponent(
      [
        `Imię i nazwisko: ${name}`,
        `E-mail: ${email}`,
        phone.trim() ? `Telefon: ${phone}` : null,
        "",
        "Wiadomość:",
        message,
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        Formularz kontaktowy
      </h2>

      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <FieldLabel htmlFor="name">Imię i nazwisko *</FieldLabel>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-(--border) bg-white px-3 py-2 text-sm text-(--text) outline-none focus:border-(--brand)"
              required
            />
          </div>

          <div className="space-y-2">
            <FieldLabel htmlFor="email">E-mail *</FieldLabel>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-(--border) bg-white px-3 py-2 text-sm text-(--text) outline-none focus:border-(--brand)"
              required
            />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <FieldLabel htmlFor="phone">Telefon (opcjonalnie)</FieldLabel>
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-(--border) bg-white px-3 py-2 text-sm text-(--text) outline-none focus:border-(--brand)"
            />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <FieldLabel htmlFor="message">Wiadomość *</FieldLabel>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-(--border) bg-white px-3 py-2 text-sm text-(--text) outline-none focus:border-(--brand)"
              required
            />
          </div>
        </div>

        <p className="text-sm text-(--text-muted)">
          (*) - Pozycje obowiązkowe
        </p>

        <label className="flex cursor-pointer items-start gap-3 text-sm text-(--text-muted)">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 accent-(--brand)"
            required
          />
          <span>
            Zapoznałem się z Polityką prywatności serwisu <strong>dr-teresinska.pl</strong> oraz wyrażam zgodę na przetwarzanie przez <strong>ELŻBIETA TERESIŃSKA</strong>, <strong>ul. Aleksandra Kostki Napierskiego 6C, 70-783 Szczecin</strong>, udostępnionych
            przeze mnie danych osobowych na zasadach opisanych w Polityce prywatności dostępnej w Serwisie. Oświadczam, że są mi znane
            cele przetwarzania danych oraz moje uprawnienia. Niniejsza zgoda może być wycofana w dowolnym czasie poprzez kontakt z
            Administratorem pod adresem info@dr-teresinska.pl, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na
            podstawie zgody przed jej cofnięciem. Więcej informacji dotyczących przetwarzania danych osobowych - Obowiązek Informacyjny.
          </span>
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className={[
            "w-full rounded-md px-6 py-3 text-sm font-semibold text-white transition",
            isValid
              ? "cursor-pointer bg-(--brand) hover:bg-(--brand-ink)"
              : "cursor-not-allowed bg-gray-300",
          ].join(" ")}
        >
          Wyślij wiadomość
        </button>
      </form>
    </section>
  );
}
