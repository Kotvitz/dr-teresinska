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
  const data = await client.fetch(legalPageBySlugQuery, { slug: SLUG }).catch(() => null);

  const html =
    data?.html ??
    "<h1>Polityka prywatności</h1><p>Treść w przygotowaniu.</p>";

  return (
    <main className="container-page py-12">
      <article className="policy-content" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
