const TESTS = [
  "Audiometria tonalna",
  "Audiometria mowy",
  "Tympanometria",
  "OAE",
  "BERA",
  "Badania przesiewowe słuchu",
];

export default function DiagnosticsPreview() {
  return (
    <section className="container-page py-14">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-(--text)">Badania</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-(--text-muted)">
            Najczęściej wykonywane badania. Pełna lista badań wraz z opisem znajduje się na stronie Badania.
          </p>
        </div>

        <a
          href="/badania"
          className="nav-link text-sm font-bold text-(--brand-ink)"
        >
          Pełna lista →
        </a>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {TESTS.map((t) => (
          <li
            key={t}
            className="rounded-lg border border-(--border) bg-white px-4 py-3 text-sm text-(--text)"
          >
            <span className="font-semibold">{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
