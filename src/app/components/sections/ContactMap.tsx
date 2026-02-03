const MAP_PLACE_URL =
  "https://www.google.com/maps/place/Teresi%C5%84ska+El%C5%BCbieta,+dr+nauk+med.+otolaryngolog.+Spec.+foniatra,+audiolog/@53.37649,14.6550041,17z/data=!3m2!4b1!5s0x4700a7c7bf60c76d:0x9e983d254d991935!4m6!3m5!1s0x4700a7c7c0672d05:0x9ca1e80acb75c87a!8m2!3d53.37649!4d14.657579!16s%2Fg%2F1tks507p?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D";

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
