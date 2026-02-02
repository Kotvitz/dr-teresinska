"use client";

import { useEffect, useRef } from "react";
import { setConsent as persistConsent, type ConsentState } from "./cookieConsent";

export default function CookieSettingsModal({
  open,
  onClose,
  consent,
  setConsent,
}: {
  open: boolean;
  onClose: () => void;
  consent: ConsentState;
  setConsent: React.Dispatch<React.SetStateAction<ConsentState>>;
}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const save = () => {
    persistConsent({ analytics: consent.analytics, marketing: consent.marketing });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-9992">
      <button
        aria-label="Zamknij okno ustawień cookies"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        type="button"
      />

      <div className="relative mx-auto mt-24 w-[92%] max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Ustawienia cookies"
          className="outline-none"
        >
          <h2 className="text-lg font-bold text-(--text)">Ustawienia cookies</h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Możesz zarządzać zgodami na pliki cookies. Niezbędne cookies są zawsze włączone.
          </p>

          <div className="mt-5 space-y-4 text-sm">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <span className="font-semibold text-(--text)">Niezbędne</span>
                <div className="text-(--text-muted)">Zapewniają prawidłowe i bezpieczne działanie strony internetowej.
                    Odpowiadają za jej funkcjonalność, poprawne wyświetlanie oraz zapamiętywanie ustawień i preferencji użytkownika,
                    co ułatwia korzystanie z serwisu przy kolejnych wizytach.</div>
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) => setConsent((v) => ({ ...v, analytics: e.target.checked }))}
                className="mt-1"
              />
              <span>
                <span className="font-semibold text-(--text)">Analityczne</span>
                <div className="text-(--text-muted)">Pomagają analizować ruch na stronie i zachowania użytkowników.
                    Dzięki nim zbieramy anonimowe dane dotyczące liczby odwiedzin, sposobu korzystania ze strony oraz
                    popularności treści, co pozwala nam optymalizować jej wydajność i użyteczność.</div>
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) => setConsent((v) => ({ ...v, marketing: e.target.checked }))}
                className="mt-1"
              />
              <span>
                <span className="font-semibold text-(--text)">Marketingowe</span>
                <div className="text-(--text-muted)">Marketingowe pliki cookie umożliwiają wyświetlanie reklam dopasowanych
                    do zainteresowań użytkownika. Służą do personalizacji treści reklamowych, remarketingu oraz analizy skuteczności
                    kampanii reklamowych na naszej stronie i w innych serwisach internetowych.</div>
              </span>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={save}
              className="cursor-pointer rounded-md bg-(--brand)
              px-5 py-2.5 text-sm font-semibold text-white
              transition hover:bg-(--brand-ink)"
            >
              Zapisz
            </button>

            <button
              type="button"
              onClick={() => setConsent({ necessary: true, analytics: true, marketing: true })}
              className="
              btn-outline
                cursor-pointer
                rounded-md
                border border-(--brand-ink)
                bg-white
                px-5 py-2.5
                text-sm font-semibold
                text-(--brand-ink)
                transition-colors
                hover:bg-(--surface-muted-strong)
              "
            >
              Zezwól na wszystkie pliki cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
