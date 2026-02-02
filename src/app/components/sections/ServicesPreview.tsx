import Image from "next/image";

const ITEMS = [
  "Laryngologia",
  "Audiologia",
  "Foniatria",
  "Zaburzenia głosu",
  "Opieka nad dziećmi",
  "Opieka nad dorosłymi",
];

type Props = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function ServicesPreview({
  imageSrc,
  imageAlt = "Ilustracja przedstawiająca zakres usług otolaryngologicznych i foniatrycznych",
}: Props) {
  return (
    <section className="section-muted py-14">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-start">
        <div className="md:order-2">
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

        <div className="md:order-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-(--text)">Specjalizacje</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-(--text-muted)">
                Krótki przegląd obszarów konsultacji. Szczegółowy opis znajduje
                się na stronie Specjalizacje.
              </p>
            </div>

            <a
              href="/specjalizacje"
              className="nav-link text-sm font-bold text-(--brand-ink)"
            >
              Zobacz więcej →
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
