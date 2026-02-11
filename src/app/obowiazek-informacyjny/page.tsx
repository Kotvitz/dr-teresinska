import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { client } from "../../../sanity/lib/client";
import { legalPageBySlugQuery } from "../../../sanity/queries/legalPage";

const SLUG = "obowiazek-informacyjny";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(legalPageBySlugQuery, { slug: SLUG }).catch(() => null);

  return {
    title: data?.metaTitle ?? "Dr Teresińska - Obowiązek informacyjny",
    description:
      data?.metaDescription ??
      "Obowiązek informacyjny dotyczący przetwarzania danych osobowych przez Administratora serwisu dr-teresinska.pl, zgodnie z przepisami RODO.",
    robots: { index: true, follow: true },
  };
}

export default async function InformationObligationPage() {
  const filePath = path.join(process.cwd(), "src/content/obowiazek-informacyjny.html");
  const data = await client.fetch(legalPageBySlugQuery, { slug: SLUG }).catch(() => null);

  const html = data?.contentHtml ?? fs.readFileSync(filePath, "utf8");

  return (
    <main className="container-page py-12">
      <article className="policy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
