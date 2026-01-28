import type { Metadata } from "next";
import SpecializationsIntro from "../components/sections/SpecializationsIntro";
import SpecializationsGroups from "../components/sections/SpecializationsGroups";

export const metadata: Metadata = {
  title: "Specjalizacje - Dr Teresińska",
  description:
    "Zakres konsultacji i leczenia: choroby uszu, zaburzenia słuchu, zawroty głowy i szumy uszne oraz zaburzenia głosu i mowy.",
};

export default function SpecializationsPage() {
  return (
    <main className="container-page py-12">
      <article className="mx-auto max-w-5xl">
        <SpecializationsIntro />
        <SpecializationsGroups />
      </article>
    </main>
  );
}
