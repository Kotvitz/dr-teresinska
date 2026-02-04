import type { Metadata } from "next";
import SpecializationsIntro from "../components/sections/SpecializationsIntro";
import SpecializationsGroups from "../components/sections/SpecializationsGroups";
import { client } from "../../../sanity/lib/client";
import { specializationsPageQuery } from "../../../sanity/queries/specializationsPage";

export const metadata: Metadata = {
  title: "Specjalizacje - Dr Teresińska",
  description:
    "Zakres konsultacji i leczenia: choroby uszu, zaburzenia słuchu, zawroty głowy i szumy uszne oraz zaburzenia głosu i mowy.",
};

export default async function SpecializationsPage() {
  const data = await client.fetch(specializationsPageQuery).catch(() => null);

  return (
    <main className="container-page py-12">
      <article className="mx-auto max-w-5xl">
        <SpecializationsIntro data={data?.intro} />
        <SpecializationsGroups data={data?.groupsSection} />
      </article>
    </main>
  );
}
