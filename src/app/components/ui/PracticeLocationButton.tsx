"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";

const MAPS_URL =
  "https://www.google.com/maps/place/Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog/@53.3765028,14.6575629,17z";

export default function PracticeLocationButton() {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener nofollow"
      aria-label="Zobacz lokalizację gabinetu na mapie"
      title="Zobacz lokalizację gabinetu"
      className="
        fixed right-0 top-1/2 z-40
        -translate-y-1/2
        flex h-14 w-14 items-center justify-center
        bg-(--brand)
        text-white
        border-l border-(--brand-ink)
        shadow-md
        transition
        hover:bg-(--brand-ink)
        focus:outline-none focus:ring-2 focus:ring-(--brand)
        cursor-pointer
      "
    >
      <MapPinIcon className="h-7 w-7" />
    </a>
  );
}
