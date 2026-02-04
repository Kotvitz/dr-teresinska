import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";

const DEFAULT_TESTS = [
  "Audiometria tonalna",
  "Audiometria mowy",
  "Tympanometria",
  "OAE",
  "BERA",
  "Badania przesiewowe słuchu",
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

export default function DiagnosticsPreview({
  data,
  defaultImageSrc = "/section-image-2.webp",
  defaultImageAlt = "Ilustracja przedstawiająca diagnostykę słuchu i badania audiologiczne",
}: Props) {
  const title = data?.title ?? "Badania";
  const text =
    data?.text ??
    "Najczęściej wykonywane badania. Pełna lista badań wraz z opisem znajduje się na stronie Badania.";
  const ctaLabel = data?.cta?.label ?? "Pełna lista →";
  const ctaHref = data?.cta?.href ?? "/badania";

  const items = (data?.items?.length ? data.items : DEFAULT_TESTS) ?? DEFAULT_TESTS;

  const sanityImageUrl = data?.image
    ? urlFor(data.image).width(1200).height(900).fit("max").quality(80).url()
    : null;

  const imgSrc = sanityImageUrl ?? defaultImageSrc;
  const imgAlt = data?.imageAlt ?? defaultImageAlt;

  return (
    <section className="py-14">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-start">
        <div className="md:order-1">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
            <Image
              src={imgSrc}
              alt={imgAlt}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 520px, 100vw"
            />
          </div>
        </div>

        <div className="md:order-2">
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

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((t) => (
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
