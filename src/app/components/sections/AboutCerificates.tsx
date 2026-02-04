import CertificationsGallery from "./CertificationsGallery";

type Props = {
  data?: {
    title?: string;
    text?: string;
  };
};

export default function AboutCertificates({ data }: Props) {
  const title = data?.title ?? "Certyfikaty";
  const text =
    data?.text ??
    "Poniżej znajduje się wybór certyfikatów i potwierdzeń uczestnictwa w szkoleniach oraz konferencjach.";

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-(--text)">{title}</h2>

      <p className="mt-4 text-(--text-muted) leading-7">{text}</p>

      <div className="mt-6">
        <CertificationsGallery />
      </div>
    </section>
  );
}
