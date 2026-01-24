export default function VisitCta() {
  return (
    <section className="bg-white py-12">
      <div className="container-page flex flex-col gap-4 rounded-xl border border-(--border) bg-(--surface) p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-bold text-(--text)">
            Zapytaj o szczegóły wizyty!
          </h2>
          <p className="mt-1 text-sm text-(--text-muted)">
            Skontaktuj się z nami — odpowiemy, jakie badania mogą być potrzebne.
          </p>
        </div>

        <a
          href="tel:+48501008509"
          className="cursor-pointer rounded-md bg-(--brand) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--brand-ink)"
        >
          Szczegóły kontaktu
        </a>
      </div>
    </section>
  );
}
