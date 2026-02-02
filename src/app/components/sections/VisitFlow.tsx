import Link from "next/link";

export default function VisitFlow() {
  return (
    <section className="mt-14 rounded-2xl border border-(--border) bg-white p-6">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        Jak wygląda wizyta?
      </h2>

      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        <li className="rounded-xl border border-(--border) bg-(--surface-muted) p-4">
          <div className="text-sm font-bold text-(--text)">1. Wywiad</div>
          <p className="mt-1 text-sm leading-6 text-(--text-muted)">
            Pytania o objawy, historię leczenia i potrzeby pacjenta.
          </p>
        </li>

        <li className="rounded-xl border border-(--border) bg-(--surface-muted) p-4">
          <div className="text-sm font-bold text-(--text)">2. Dobór badań</div>
          <p className="mt-1 text-sm leading-6 text-(--text-muted)">
            Badania dobierane są do wieku i problemu (słuch / głos / drogi oddechowe).
          </p>
        </li>

        <li className="rounded-xl border border-(--border) bg-(--surface-muted) p-4">
          <div className="text-sm font-bold text-(--text)">3. Omówienie wyników</div>
          <p className="mt-1 text-sm leading-6 text-(--text-muted)">
            Wyniki są tłumaczone i omawiane wraz z dalszym planem postępowania.
          </p>
        </li>
      </ol>

      <div className="mt-6">
        <Link href="/kontakt" className="nav-link text-sm font-bold text-(--brand-ink)">
          Przejdź do kontaktu →
        </Link>
      </div>
    </section>
  );
}
