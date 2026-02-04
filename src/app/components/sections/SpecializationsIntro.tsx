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

export default function SpecializationsIntro({
  data,
  defaultImageSrc = "/photo-specializations.webp",
  defaultImageAlt = "Ilustracja przedstawiająca zakres konsultacji laryngologicznych i audiologicznych",
}: Props) {
  const title =
    data?.title ?? "Specjalizacje – otolaryngologia, audiologia i foniatria";

  const text =
    data?.text ??
    "Poniżej znajduje się przegląd najczęstszych problemów, z którymi pacjenci zgłaszają się do gabinetu. Każdego pacjenta traktuję indywidualnie, starannie analizując objawy i dobierając najlepszą metodę leczenia. Zapraszam na konsultację – wspólnie znajdziemy skuteczne rozwiązanie Twojego problemu.";

  const sanityImageUrl = data?.image
    ? urlFor(data.image).width(1400).height(1050).fit("max").quality(80).url()
    : null;

  const imgSrc = sanityImageUrl ?? defaultImageSrc;
  const imgAlt = data?.imageAlt ?? defaultImageAlt;

  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <h1 className="heading-underline text-3xl font-extrabold text-(--text) md:text-4xl">
          {title}
        </h1>

        <p className="mt-5 text-base leading-7 text-(--text-muted)">{text}</p>
      </div>

      <div
        className="
          aspect-4/3 w-full overflow-hidden
          rounded-2xl border border-(--border)
          bg-(--surface-muted)
        "
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
