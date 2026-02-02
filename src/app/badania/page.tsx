import type { Metadata } from "next";
import TestsIntro from "../components/sections/TestsIntro";
import TestsScope from "../components/sections/TestsScope";
import MostCommonTests from "../components/sections/MostCommonTests";
import VisitFlow from "../components/sections/VisitFlow";

export const metadata: Metadata = {
  title: "Zakres dostępnych badań – diagnostyka i leczenie słuchu i głosu - Dr Teresińska",
  description:
    "Badania audiologiczne i foniatryczne w Szczecinie: audiometria, tympanometria, OAE, BERA oraz diagnostyka narządu głosu. Dobór badań po wywiadzie i omówienie wyników.",
  robots: { index: true, follow: true },
};

export default function TestsPage() {
  return (
    <main className="container-page py-12">
      <TestsIntro />
      <TestsScope />
      <MostCommonTests />
      <VisitFlow />
    </main>
  );
}
