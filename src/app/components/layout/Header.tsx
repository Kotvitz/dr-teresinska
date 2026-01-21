"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Strona główna", href: "/" },
  { label: "O mnie", href: "/o-mnie" },
  { label: "Specjalizacje", href: "/specjalizacje" },
  { label: "Badania", href: "/badania" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const closeMobile = () => setMobileOpen(false);

  const handleClick = (href: string) => {
    closeMobile();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

  const onPointerDown = (e: PointerEvent) => {
    const target = e.target as Node;

    if (buttonRef.current?.contains(target)) return;

    if (panelRef.current?.contains(target)) return;

    closeMobile();
  };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 header-tint">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="Strona główna">
            <img src="/logo.webp" alt="Elżbieta A. Teresińska" className="h-11 md:h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className="nav-link text-sm font-bold"
            >
                {item.label}
            </Link>
            ))}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="btn-outline inline-flex cursor-pointer items-center justify-center rounded-md border p-2 hover:bg-gray-50 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        ref={panelRef}
        id="mobile-nav"
        className="md:hidden mobile-menu-tint"
      >
        <div
          className={[
            "grid transition-[grid-template-rows] duration-200 ease-out",
            mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          ].join(" ")}
        >
          <div className="overflow-hidden">
            <nav className="mx-auto max-w-7xl px-6 py-4" aria-label="Mobile">
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => handleClick(item.href)}
                        className="nav-link font-bold block w-full px-2 py-2 text-sm"
                    >
                        {item.label}
                    </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-accent" />
    </header>
  );
}
