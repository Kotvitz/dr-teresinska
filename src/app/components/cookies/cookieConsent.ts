export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const KEY = "cookie_consent_v1";

export function getConsent(): ConsentState {
  if (typeof window === "undefined") return { necessary: true, analytics: false, marketing: false };

  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { necessary: true, analytics: false, marketing: false };
    const parsed = JSON.parse(raw);
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return { necessary: true, analytics: false, marketing: false };
  }
}

export function setConsent(consent: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(consent));
}
