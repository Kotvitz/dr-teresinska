"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";

const MAPS_URL =
  "https://www.google.com/maps/place/Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog/@53.37649,14.6550041,17z/data=!3m2!4b1!5s0x4700a7c7bf60c76d:0x9e983d254d991935!4m6!3m5!1s0x4700a7c7c0672d05:0x9ca1e80acb75c87a!8m2!3d53.37649!4d14.657579!16s%2Fg%2F1tks507p?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D";

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
