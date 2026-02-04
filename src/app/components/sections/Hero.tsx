import { urlFor } from "../../../../sanity/lib/image";

type Props = {
  data?: {
    image?: unknown;
    alt?: string;
  };
};

export default function Hero({ data }: Props) {
  const sanityImageUrl = data?.image ? urlFor(data.image).width(2400).quality(80).url() : null;

  return (
    <section aria-hidden="true" className="w-full">
      <div
        className="
          h-80 md:h-105 lg:h-130
          w-full
          bg-(--surface-muted)
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: sanityImageUrl
            ? `url('${sanityImageUrl}')`
            : "url('hero-background.webp')",
        }}
      />
    </section>
  );
}
