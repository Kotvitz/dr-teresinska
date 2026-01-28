import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Teresińska - Polityka prywatności",
  description: "Informacje o przetwarzaniu danych osobowych i prawach użytkownika serwisu dr-teresinska.pl.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), "src/content/policies/polityka-prywatnosci.html");
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
