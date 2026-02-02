import AboutPreview from "./components/sections/AboutPreview";
import DiagnosticsPreview from "./components/sections/DiagnosticsPreview";
import Hero from "./components/sections/Hero";
import ServicesPreview from "./components/sections/ServicesPreview";
import VisitCta from "./components/sections/VisitCta";

export default function HomePage() {
  return (
    <>
      <main className="scroll-smooth">
        <Hero />
        <AboutPreview />
        <ServicesPreview imageSrc="/section-image-1.webp"/>
        <DiagnosticsPreview imageSrc="/section-image-2.webp" />
        <VisitCta />
      </main>
    </>
  );
}
