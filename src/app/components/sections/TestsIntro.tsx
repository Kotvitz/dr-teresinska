import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";

type Props = {
  data?: {
    title?: string;
    text?: string;
    image?: unknown;
    imageAlt?: string;
  };
  defaultImageSrc?: string;
  defaultImageAlt?: string;
};

export default function TestsIntro({
  data,
  defaultImageSrc = "/photo-tests.webp",
  defaultImageAlt = "Ilustracja przedstawiająca badania słuchu i diagnostykę",
}: Props) {
  const title =
    data?.title ?? "Badania audiologiczne i laryngologiczne – Szczecin";

  const text =
    data?.text ??
    "W gabinecie wykonywana jest diagnostyka słuchu, głosu oraz dróg oddechowych. Dobór badań zależy od objawów i wieku pacjenta – każde badanie poprzedza wywiad, a wyniki są omawiane wraz z zaleceniami.";

  const sanityImageUrl = data?.image
    ? urlFor(data.image).width(1200).height(900).fit("max").quality(80).url()
    : null;

  const imageSrc = sanityImageUrl ?? defaultImageSrc;
  const imageAlt = data?.imageAlt ?? defaultImageAlt;

  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-start">
      <div>
        <h1 className="heading-underline text-4xl font-extrabold tracking-tight text-(--text)">
          {title}
        </h1>

        <p className="mt-5 text-sm leading-7 text-(--text-muted)">{text}</p>
      </div>

      <div>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(min-width: 768px) 520px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
