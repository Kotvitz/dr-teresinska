type Props = {
  data?: {
    title?: string;
    text?: string;
    button?: { label?: string; href?: string };
  };
};

export default function VisitCta({ data }: Props) {
  const title = data?.title ?? "Zapytaj o szczegóły wizyty!";
  const text =
    data?.text ?? "Skontaktuj się z nami — odpowiemy, jakie badania mogą być potrzebne.";
  const buttonLabel = data?.button?.label ?? "Szczegóły kontaktu";
  const buttonHref = data?.button?.href ?? "/kontakt";

  const isTel = /^tel:/i.test(buttonHref);

  return (
    <section className="bg-white py-12">
      <div className="container-page flex flex-col gap-4 rounded-xl border border-(--border) bg-(--surface) p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-bold text-(--text)">{title}</h2>
          <p className="mt-1 text-sm text-(--text-muted)">{text}</p>
        </div>

        <a
          href={isTel ? buttonHref : buttonHref}
          className="cursor-pointer rounded-md bg-(--brand) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--brand-ink)"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
