import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";

type Props = {
  data?: {
    title?: string;
    subtitle?: string;
    paragraphs?: string[];
    photo?: {
      alt?: string;
      asset?: {
        _id: string;
      };
    };
  };
};

export default function AboutMain({ data }: Props) {
  const title = data?.title ?? "Otolaryngolog • foniatra • audiolog – Szczecin";
  const subtitle = data?.subtitle ?? "Dr n. med. Elżbieta A. Teresińska";

  const defaultParagraphs = [
    "Specjalistka otorynolaryngologii, foniatrii i audiologii z wieloletnim doświadczeniem klinicznym i dydaktycznym. Zajmuje się diagnostyką i leczeniem zaburzeń głosu, mowy, słuchu oraz chorób uszu, nosa i gardła — zarówno u dzieci, jak i dorosłych.",
    "W praktyce łączy podejście medyczne z holistycznym spojrzeniem na potrzeby pacjenta, współpracując z logopedami i terapeutami głosu. Specjalizuje się również w badaniach słuchu noworodków oraz opiece foniatrycznej dla osób zawodowo pracujących głosem.",
  ];

  const paragraphs =
    data?.paragraphs?.length ? data.paragraphs : defaultParagraphs;

  const defaultPhotoSrc = "/dr-teresinska-photo.webp";
  const defaultAlt = "Zdjęcie dr n. med. Elżbiety A. Teresińskiej";

  const cmsPhoto = data?.photo?.asset?._id ? data.photo : undefined;
  const photoAlt = cmsPhoto?.alt ?? defaultAlt;

  const cmsPhotoUrl = cmsPhoto
    ? urlFor(cmsPhoto).width(720).height(720).fit("crop").quality(85).url()
    : null;

  const photoSrc = cmsPhotoUrl ?? defaultPhotoSrc;

  return (
    <section>
      <h1 className="heading-underline">{title}</h1>

      <p className="mt-4 text-lg font-semibold text-(--brand-ink) md:text-xl">
        {subtitle}
      </p>

      <div className="mt-6">
        <div className="mb-6 md:hidden">
          <div className="relative mx-auto aspect-square w-full max-w-85 overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
            <Image
              src={photoSrc}
              alt={photoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 340px"
              priority
            />
          </div>
        </div>

        <div className="md:relative">
          <div className="hidden md:block md:float-right md:ml-8 md:mb-4">
            <div className="relative aspect-square w-70 overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
              <Image
                src={photoSrc}
                alt={photoAlt}
                fill
                className="object-cover"
                sizes="280px"
                priority
              />
            </div>
          </div>

          {paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "" : "mt-4"}>
              <span className="text-base leading-7 text-(--text-muted)">{p}</span>
            </p>
          ))}

          <div className="hidden md:block clear-both" />
        </div>
      </div>
    </section>
  );
}
