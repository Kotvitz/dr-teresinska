import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";

const DEFAULT_ITEMS = [
  "Laryngologia",
  "Audiologia",
  "Foniatria",
  "Zaburzenia głosu",
  "Opieka nad dziećmi",
  "Opieka nad dorosłymi",
];

type Props = {
  data?: {
    title?: string;
    text?: string;
    cta?: { label?: string; href?: string };
    items?: string[];
    image?: unknown; 
    imageAlt?: string;
  };

  defaultImageSrc?: string;
  defaultImageAlt?: string;
};

export default function ServicesPreview({
  data,
  defaultImageSrc = "/section-image-1.webp",
  defaultImageAlt = "Ilustracja przedstawiająca zakres usług otolaryngologicznych i foniatrycznych",
}: Props) {
  const title = data?.title ?? "Specjalizacje";
  const text =
    data?.text ??
    "Krótki przegląd obszarów konsultacji. Szczegółowy opis znajduje się na stronie Specjalizacje.";
  const ctaLabel = data?.cta?.label ?? "Zobacz więcej →";
  const ctaHref = data?.cta?.href ?? "/specjalizacje";

  const items = (data?.items?.length ? data.items : DEFAULT_ITEMS) ?? DEFAULT_ITEMS;

  const sanityImageUrl = data?.image
    ? urlFor(data.image).width(1200).height(900).fit("max").quality(80).url()
    : null;

  const imgSrc = sanityImageUrl ?? defaultImageSrc;
  const imgAlt = data?.imageAlt ?? defaultImageAlt;

  return (
    <section className="section-muted py-14">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-start">
        <div className="md:order-2">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
            <Image
              src={imgSrc}
              alt={imgAlt}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 520px, 100vw"
              priority={false}
            />
          </div>
        </div>

        <div className="md:order-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-(--text)">{title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-(--text-muted)">
                {text}
              </p>
            </div>

            <a href={ctaHref} className="nav-link text-sm font-bold text-(--brand-ink)">
              {ctaLabel}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((label) => (
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
