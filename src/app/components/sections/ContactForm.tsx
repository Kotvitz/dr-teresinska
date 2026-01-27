"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

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

  const [website, setWebsite] = useState("");

  const [status, setStatus] = useState<Status>("idle");


  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim() || !email.includes("@")) return false;
    if (!message.trim()) return false;
    if (!consent) return false;
    return true;
  }, [name, email, message, consent]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          consent,
          website,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setConsent(false);
      setWebsite("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        Formularz kontaktowy
      </h2>

      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

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

        <label className="flex items-start gap-3 text-sm text-(--text-muted)">
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
            podstawie zgody przed jej cofnięciem. Więcej informacji dotyczących przetwarzania danych osobowych - <a className="font-medium text-(--brand) hover:text-(--brand-ink) hover:underline underline-offset-4 transition-colors duration-150" href="/obowiazek-informacyjny">Obowiązek Informacyjny</a>.
          </span>
        </label>

        <button
          type="submit"
          disabled={!isValid || status === "sending"}
          className={[
            "w-full rounded-md px-6 py-3 text-sm font-semibold text-white transition",
            isValid && status !== "sending"
              ? "cursor-pointer bg-(--brand) hover:bg-(--brand-ink)"
              : "cursor-not-allowed bg-gray-300",
          ].join(" ")}
        >
          {status === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}
        </button>
        
         {status === "success" && (
          <p className="text-sm font-semibold text-(--brand-ink)">
            Dziękujemy! Wiadomość została wysłana.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm font-semibold text-red-600">
            Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń.
          </p>
        )}
      </form>
    </section>
  );
}
