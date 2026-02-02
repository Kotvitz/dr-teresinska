"use client";

import { useSyncExternalStore } from "react";
import { getConsent } from "./cookieConsent";

function subscribe(onChange: () => void) {
  window.addEventListener("consent:update", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("consent:update", onChange);
    window.removeEventListener("storage", onChange);
  };
}

export default function CookieBlockingOverlay() {
  const hasDecision = useSyncExternalStore(
    subscribe,
    () => getConsent() !== null,
    () => true 
  );

  if (hasDecision) return null;

  return (
    <div
      aria-hidden="true"
      className="
        fixed inset-0 z-9990
        bg-black/40
        backdrop-blur-[1px]
      "
    />
  );
}
