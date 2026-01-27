import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Teresińska - Obowiązek informacyjny",
  description: "Obowiązek informacyjny dotyczący przetwarzania danych osobowych przez Administratora serwisu dr-teresinska.pl, zgodnie z przepisami RODO.",
  robots: { index: true, follow: true },
};

export default function InformationObligationPage() {
  const filePath = path.join(process.cwd(), "src/content/obowiazek-informacyjny.html");
  const html = fs.readFileSync(filePath, "utf8");

  return (
    <main className="container-page py-12">
      <article
        className="policy-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
