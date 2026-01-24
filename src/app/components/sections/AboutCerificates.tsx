import CertificationsGallery from "./CertificationsGallery";

export default function AboutCertificates() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-(--text)">Certyfikaty</h2>

      <p className="mt-4 text-(--text-muted) leading-7">
        Poniżej znajduje się wybór certyfikatów i potwierdzeń uczestnictwa w szkoleniach
        oraz konferencjach.
      </p>

      <div className="mt-6">
        <CertificationsGallery />
      </div>
    </section>
  );
}
