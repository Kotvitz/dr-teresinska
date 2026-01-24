export default function AboutPreview() {
  return (
    <section className="section-muted py-14">
      <div className="container-page">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold leading-tight text-(--text) md:text-4xl">
            Prywatny gabinet otorynolaryngologii i foniatryczny – Szczecin
          </h1>

          <p className="mt-4 text-lg font-semibold text-(--brand-ink) md:text-xl">
            Dr n. med. Elżbieta A. Teresińska
          </p>

          <p className="mt-4 text-sm leading-7 text-(--text-muted)">
            Konsultacje laryngologiczne i foniatryczne oraz diagnostyka słuchu i głosu
            u dzieci i dorosłych.
          </p>

          <a
            href="/o-mnie"
            className="mt-6 inline-block nav-link text-sm font-bold text-(--brand-ink)"
          >
            Dowiedz się więcej →
          </a>
        </div>
      </div>
    </section>
  );
}
