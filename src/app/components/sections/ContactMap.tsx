type Props = {
  data?: {
    title?: string;
    iframeTitle?: string;
    embedUrl?: string;
    placeUrl?: string;
    openLabel?: string;
  };
};

const DEFAULT_PLACE_URL =
  "https://www.google.com/maps/place/Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog/@53.37649,14.6550041,17z/data=!3m2!4b1!5s0x4700a7c7bf60c76d:0x9e983d254d991935!4m6!3m5!1s0x4700a7c7c0672d05:0x9ca1e80acb75c87a!8m2!3d53.37649!4d14.657579!16s%2Fg%2F1tks507p?entry=ttu";

const DEFAULT_EMBED_URL =
  "https://www.google.com/maps?q=Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog&output=embed";

export default function ContactMap({ data }: Props) {
  const title = data?.title ?? "Lokalizacja";
  const iframeTitle = data?.iframeTitle ?? "Mapa – Teresińska Elżbieta, dr n. med.";
  const embedUrl = data?.embedUrl ?? DEFAULT_EMBED_URL;
  const placeUrl = data?.placeUrl ?? DEFAULT_PLACE_URL;
  const openLabel = data?.openLabel ?? "Otwórz w Google Maps →";

  return (
    <section className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        {title}
      </h2>

      <div className="mt-6 overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
        <div className="aspect-16/10 w-full">
          <iframe
            title={iframeTitle}
            src={embedUrl}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <a
        href={placeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block nav-link text-sm font-bold text-(--brand-ink)"
      >
        {openLabel}
      </a>
    </section>
  );
}
