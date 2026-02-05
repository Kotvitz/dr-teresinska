import type { Metadata } from "next";
import TestsIntro from "../components/sections/TestsIntro";
import TestsScope from "../components/sections/TestsScope";
import MostCommonTests from "../components/sections/MostCommonTests";
import VisitFlow from "../components/sections/VisitFlow";
import { client } from "../../../sanity/lib/client";
import { testsPageQuery } from "../../../sanity/queries/testsPage";

export const metadata: Metadata = {
  title: "Zakres dostępnych badań – diagnostyka i leczenie słuchu i głosu - Dr Teresińska",
  description:
    "Badania audiologiczne i foniatryczne w Szczecinie: audiometria, tympanometria, OAE, BERA oraz diagnostyka narządu głosu. Dobór badań po wywiadzie i omówienie wyników.",
  robots: { index: true, follow: true },
};

export default async function TestsPage() {
  const data = await client.fetch(testsPageQuery).catch(() => null);

  return (
    <main className="container-page py-12">
      <TestsIntro data={data?.intro} />
      <TestsScope data={data?.scope} />
      <MostCommonTests data={data?.mostCommon} />
      <VisitFlow data={data?.visitFlow} />
    </main>
  );
}
