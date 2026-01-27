const MAP_PLACE_URL =
  "https://www.google.com/maps/place/Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog/@53.3765028,14.6575629,17z";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog&output=embed";

export default function ContactMap() {
  return (
    <section className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        Lokalizacja
      </h2>

      <div className="mt-6 overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
        <div className="aspect-16/10 w-full">
          <iframe
            title="Mapa – Teresińska Elżbieta, dr n. med."
            src={MAP_EMBED_URL}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <a
        href={MAP_PLACE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block nav-link text-sm font-bold text-(--brand-ink)"
      >
        Otwórz w Google Maps →
      </a>
    </section>
  );
}
