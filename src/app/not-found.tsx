import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page py-16">
      <section className="mx-auto max-w-3xl text-center">
        <div className="mx-auto inline-flex items-center justify-center rounded-2xl border border-(--border) bg-(--surface-muted) px-4 py-2">
          <span className="text-sm font-semibold text-(--brand-ink)">
            Błąd 404
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-(--text) md:text-5xl">
          Nie znaleziono strony
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-(--text-muted)">
          Strona, której szukasz, nie istnieje lub została przeniesiona. Sprawdź adres
          w przeglądarce albo wróć na stronę główną.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-(--brand) px-5 py-3 text-sm font-bold text-white transition hover:bg-(--brand-ink) sm:w-auto"
          >
            Przejdź do strony głównej
          </Link>
        </div>

        <div className="mt-12 rounded-2xl border border-(--border) bg-white p-6 text-left">
          <h2 className="heading-underline text-xl font-bold text-(--text)">
            Co możesz zrobić?
          </h2>

          <ul className="mt-5 space-y-2 text-sm text-(--text-muted)">
            <li>• Skorzystaj z menu na górze strony.</li>
            <li>• Jeśli problem się powtarza, skontaktuj się z administratorem witryny.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
