const ITEMS = [
  "Laryngologia",
  "Audiologia",
  "Foniatria",
  "Zaburzenia głosu",
  "Opieka nad dziećmi",
  "Opieka nad dorosłymi",
];

export default function ServicesPreview() {
  return (
    <section className="section-muted py-14">
      <div className="container-page">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-(--text)">
              Specjalizacje
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-(--text-muted)">
              Krótki przegląd obszarów konsultacji. Szczegółowy opis znajduje się na stronie
              Specjalizacje.
            </p>
          </div>

          <a
            href="/specjalizacje"
            className="nav-link text-sm font-bold text-(--brand-ink)"
          >
            Zobacz więcej →
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {ITEMS.map((label) => (
            <div
              key={label}
              className="rounded-lg border border-(--border) bg-white px-4 py-3 text-sm font-semibold text-(--text)"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
