import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { client } from "../../../sanity/lib/client";
import { legalPageBySlugQuery } from "../../../sanity/queries/legalPage";

const SLUG = "polityka-prywatnosci";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(legalPageBySlugQuery, { slug: SLUG }).catch(() => null);

  return {
    title: data?.metaTitle ?? "Dr Teresińska – Polityka prywatności",
    description:
      data?.metaDescription ??
      "Informacje o przetwarzaniu danych osobowych i prawach użytkownika serwisu dr-teresinska.pl.",
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), "src/content/policies/polityka-prywatnosci.html");
  const data = await client.fetch(legalPageBySlugQuery, { slug: SLUG }).catch(() => null);

  const html = data?.contentHtml ?? fs.readFileSync(filePath, "utf8");

  return (
    <main className="container-page py-12">
      <article className="policy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
