import Image from "next/image";

const TESTS = [
  "Audiometria tonalna",
  "Audiometria mowy",
  "Tympanometria",
  "OAE",
  "BERA",
  "Badania przesiewowe słuchu",
];

type Props = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function DiagnosticsPreview({
  imageSrc,
  imageAlt = "Ilustracja przedstawiająca diagnostykę słuchu i badania audiologiczne",
}: Props) {
  return (
    <section className="py-14">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-start">
        <div className="md:order-1">
          {imageSrc ? (
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 520px, 100vw"
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="aspect-4/3 w-full rounded-2xl border border-(--border) bg-(--surface-muted)"
            />
          )}
        </div>

        <div className="md:order-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-(--text)">Badania</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-(--text-muted)">
                Najczęściej wykonywane badania. Pełna lista badań wraz z opisem
                znajduje się na stronie Badania.
              </p>
            </div>

            <a
              href="/badania"
              className="nav-link text-sm font-bold text-(--brand-ink)"
            >
              Pełna lista →
            </a>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {TESTS.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-(--border) bg-white px-4 py-3 text-sm text-(--text)"
              >
                <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
