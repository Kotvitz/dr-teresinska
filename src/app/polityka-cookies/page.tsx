import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Teresińska - Polityka cookies",
  description: "Informacje o stosowaniu plików cookies w serwisie dr-teresinska.pl, ich rodzajach, celach wykorzystania oraz możliwościach zarządzania ich ustawieniami.",
  robots: { index: true, follow: true },
};

export default function CookiesPolicyPage() {
  const filePath = path.join(process.cwd(), "src/content/policies/polityka-cookies.html");
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
