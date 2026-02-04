import type { Metadata } from "next";
import AboutMain from "../components/sections/AboutMain";
import AboutCertificates from "../components/sections/AboutCerificates";
import { client } from "../../../sanity/lib/client";
import { aboutPageQuery } from "../../../sanity/queries/aboutPage";

export const metadata: Metadata = {
  title: "O mnie – Dr Teresińska",
  description:
    "Dr n. med. Elżbieta A. Teresińska – otorynolaryngolog, foniatra i audiolog w Szczecinie. Informacje o gabinecie, podejściu do pacjenta oraz certyfikatach.",
  robots: { index: true, follow: true },
};

export default async function AboutPage() {
  const data = await client.fetch(aboutPageQuery).catch(() => null);
  
  return (
    <main className="container-page py-12">
      <article className="mx-auto max-w-3xl">
        <AboutMain data={data?.main} />
        <AboutCertificates data={data?.certificates} />
      </article>
    </main>
  );
}
