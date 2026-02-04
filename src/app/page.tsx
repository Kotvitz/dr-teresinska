import { client } from "../../sanity/lib/client";
import { homePageQuery } from "../../sanity/queries/homePage";
import AboutPreview from "./components/sections/AboutPreview";
import DiagnosticsPreview from "./components/sections/DiagnosticsPreview";
import Hero from "./components/sections/Hero";
import ServicesPreview from "./components/sections/ServicesPreview";
import VisitCta from "./components/sections/VisitCta";

export default async function HomePage() {
  const data = await client.fetch(homePageQuery).catch(() => null);

  return (
    <>
      <main className="scroll-smooth">
        <Hero data={data?.hero}/>
        <AboutPreview data={data?.aboutPreview} />
        <ServicesPreview data={data?.servicesPreview} />
        <DiagnosticsPreview data={data?.diagnosticsPreview} />
        <VisitCta data={data?.visitCta} />
      </main>
    </>
  );
}
