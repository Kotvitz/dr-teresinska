"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const CERT_COUNT = 28;
const CERTS = Array.from({ length: CERT_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/certifications/cert-${n}.webp`, alt: `Certyfikat ${i + 1}` };
});

const ANIM_MS = 220;

export default function CertificationsGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const closeTimer = useRef<number | null>(null);
  const fadeTimer = useRef<number | null>(null);

  const gridClass = useMemo(
    () => ["grid gap-4", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4"].join(" "),
    []
  );

  const isOpen = mounted && openIndex !== null;
  const current = CERTS[activeIndex];

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < CERTS.length - 1;

  const openLightbox = (idx: number) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    if (fadeTimer.current) window.clearTimeout(fadeTimer.current);

    setOpenIndex(idx);
    setActiveIndex(idx);
    setMounted(true);

    requestAnimationFrame(() => setOpen(true));
  };

  const closeLightbox = () => {
    setOpen(false);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setMounted(false);
      setOpenIndex(null);
      setFading(false);
    }, ANIM_MS);
  };

  const goTo = (idx: number) => {
    if (idx === activeIndex) return;
    setFading(true);

    if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    fadeTimer.current = window.setTimeout(() => {
      setActiveIndex(idx);
      requestAnimationFrame(() => setFading(false));
    }, ANIM_MS);
  };

  const prev = () => {
    if (!canPrev) return;
    goTo(activeIndex - 1);
  };

  const next = () => {
    if (!canNext) return;
    goTo(activeIndex + 1);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, activeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, []);

  return (
    <>
      <div className={gridClass}>
        {CERTS.map((c, idx) => (
          <button
            key={c.src}
            type="button"
            onClick={() => openLightbox(idx)}
            className="
              group relative overflow-hidden rounded-xl
              border border-(--border) bg-(--surface-muted)
              cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-(--brand)
            "
            aria-label={`Otwórz ${c.alt}`}
          >
            <div className="relative aspect-4/3 w-full">
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-black/5" />
          </button>
        ))}
      </div>

      {mounted && openIndex !== null && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Zamknij podgląd"
            onClick={closeLightbox}
            className={[
              "absolute inset-0 transition-opacity duration-200",
              open ? "opacity-100 bg-black/70" : "opacity-0 bg-black/70",
            ].join(" ")}
          />

          <div className="pointer-events-none absolute inset-0 z-20">
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Zamknij"
              className="
                pointer-events-auto fixed
                right-[max(1rem,env(safe-area-inset-right))] 
                top-[max(1rem,env(safe-area-inset-top))]
                inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center
                rounded-md bg-white/95 text-(--text) shadow-lg
                cursor-pointer transition hover:bg-(--surface-muted)
              "
            >
              ✕
            </button>

            {canPrev && (
              <button
                type="button"
                onClick={prev}
                aria-label="Poprzedni certyfikat"
                className="
                  pointer-events-auto fixed
                  left-[max(1rem,env(safe-area-inset-left))]
                  top-1/2 -translate-y-1/2
                  inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center
                  rounded-md bg-white/95 text-(--text) shadow-lg
                  cursor-pointer transition hover:bg-(--surface-muted)
                "
              >
                <span className="text-[2.25rem] md:text-[2.5rem] leading-none">‹</span>
              </button>
            )}

            {canNext && (
              <button
                type="button"
                onClick={next}
                aria-label="Następny certyfikat"
                className="
                  pointer-events-auto fixed
                  right-[max(1rem,env(safe-area-inset-right))]
                  top-1/2 -translate-y-1/2
                  inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center
                  rounded-md bg-white/95 text-(--text) shadow-lg
                  cursor-pointer transition hover:bg-(--surface-muted)
                "
              >
                <span className="text-[2.25rem] md:text-[2.5rem] leading-none">›</span>
              </button>
            )}
          </div>

          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-8 pointer-events-none">
            <div
              className={[
                "pointer-events-auto relative w-full max-w-5xl",
                "transition-all duration-200",
                open ? "opacity-100 scale-100" : "opacity-0 scale-[0.985]",
              ].join(" ")}
            >
              <div className="relative h-[82vh] w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  priority
                  sizes="90vw"
                  className={[
                    "object-contain transition-opacity duration-200",
                    fading ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
              </div>

              <div className="mt-3 text-center text-xs text-white/80">
                {activeIndex + 1} / {CERTS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
