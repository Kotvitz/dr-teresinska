import Link from "next/link";

const DEFAULT_VISIT_FLOW = {
  title: "Jak wygląda wizyta?",
  steps: [
    {
      title: "1. Wywiad",
      text: "Pytania o objawy, historię leczenia i potrzeby pacjenta.",
    },
    {
      title: "2. Dobór badań",
      text: "Badania dobierane są do wieku i problemu (słuch / głos / drogi oddechowe).",
    },
    {
      title: "3. Omówienie wyników",
      text: "Wyniki są tłumaczone i omawiane wraz z dalszym planem postępowania.",
    },
  ],
  cta: { label: "Przejdź do kontaktu →", href: "/kontakt" },
};

type Props = {
  data?: {
    title?: string;
    steps?: Array<{ title?: string; text?: string }>;
    cta?: { label?: string; href?: string };
  };
};

export default function VisitFlow({ data }: Props) {
  const title = data?.title ?? DEFAULT_VISIT_FLOW.title;
  const steps =
    data?.steps?.length === 3 ? data.steps : DEFAULT_VISIT_FLOW.steps;

  const ctaLabel = data?.cta?.label ?? DEFAULT_VISIT_FLOW.cta.label;
  const ctaHref = data?.cta?.href ?? DEFAULT_VISIT_FLOW.cta.href;

  return (
    <section className="mt-14 rounded-2xl border border-(--border) bg-white p-6">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        {title}
      </h2>

      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s, idx) => (
          <li
            key={s.title ?? `step-${idx}`}
            className="rounded-xl border border-(--border) bg-(--surface-muted) p-4"
          >
            <div className="text-sm font-bold text-(--text)">{s.title}</div>
            <p className="mt-1 text-sm leading-6 text-(--text-muted)">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6">
        <Link href={ctaHref} className="nav-link text-sm font-bold text-(--brand-ink)">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
