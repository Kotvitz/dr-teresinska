"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { getConsent } from "../cookies/cookieConsent";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
  version: number;
};

const CONSENT_VERSION = 1;
const STORAGE_KEY = "cookie_consent_v1";

function writeConsent(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event("consent:update"));
}

function subscribe(onStoreChange: () => void) {
  const onUpdate = () => onStoreChange();
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onUpdate();
  };

  window.addEventListener("consent:update", onUpdate);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener("consent:update", onUpdate);
    window.removeEventListener("storage", onStorage);
  };
}

export default function CookieBanner() {
  const hasDecision = useSyncExternalStore(
    subscribe,
    () => getConsent() !== null,
    () => true 
  );

  const visible = !hasDecision;

  const acceptAll = () => {
    writeConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    });
  };

  const rejectAll = () => {
    writeConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    });
  };

  const openSettings = () => {
    window.dispatchEvent(new Event("cookie:open-settings"));
  };

  const classes = useMemo(
    () =>
      [
        "fixed inset-x-0 bottom-0 z-9991",
        "border-t border-(--border)",
        "bg-white",
      ].join(" "),
    [],
  );

  if (!visible) return null;

  return (
    <div
      className={classes}
      role="dialog"
      aria-label="Informacja o plikach cookies"
      aria-live="polite"
    >
      <div className="container-page py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-6 text-(--text-muted)">
            W naszym serwisie używamy plików cookies (tzw. ciasteczek), które
            zapisują się w przeglądarce internetowej Twojego urządzenia. Dzięki
            nim zapewniamy prawidłowe działanie strony internetowej, a także
            możemy lepiej dostosować ją do preferencji użytkowników. Pliki
            cookies umożliwiają nam analizę zachowania użytkowników na stronie,
            a także pozwalają na odpowiednie dopasowanie treści reklamowych.
            Zgodę możesz wycofać w dowolnym momencie. Więcej informacji
            znajdziesz w naszej{" "}
            <Link
              href="/polityka-cookies"
              className="font-semibold text-(--brand) hover:text-(--brand-ink)"
            >
              Polityce cookies
            </Link>
            .
          </p>

          <div className="flex flex-col gap-2 sm:flex-row md:shrink-0">
            <button
              type="button"
              onClick={openSettings}
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
              Ustawienia
            </button>

            <button
              type="button"
              onClick={rejectAll}
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
              Odrzuć wszystkie
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="cursor-pointer rounded-md bg-(--brand) px-4 py-2 text-sm font-bold text-white transition hover:bg-(--brand-ink)"
            >
              Akceptuj wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
