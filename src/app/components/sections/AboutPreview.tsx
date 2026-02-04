type Props = {
  data?: {
    title?: string;
    subtitle?: string;
    text?: string;
    cta?: { label?: string; href?: string };
  };
};

export default function AboutPreview({ data }: Props) {
  const title = data?.title ?? "Otolaryngolog • foniatra • audiolog – Szczecin";
  const subtitle = data?.subtitle ?? "Dr n. med. Elżbieta A. Teresińska";
  const text =
    data?.text ??
    "Konsultacje laryngologiczne i foniatryczne oraz diagnostyka słuchu i głosu u dzieci i dorosłych.";
  const ctaLabel = data?.cta?.label ?? "Dowiedz się więcej →";
  const ctaHref = data?.cta?.href ?? "/o-mnie";

  return (
    <section className="section-muted py-14">
      <div className="container-page">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold leading-tight text-(--text) md:text-4xl">
            {title}
          </h1>

          <p className="mt-4 text-lg font-semibold text-(--brand-ink) md:text-xl">
            {subtitle}
          </p>

          <p className="mt-4 text-sm leading-7 text-(--text-muted)">{text}</p>

          <a
            href={ctaHref}
            className="mt-6 inline-block nav-link text-sm font-bold text-(--brand-ink)"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
