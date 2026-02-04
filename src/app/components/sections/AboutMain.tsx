type Props = {
  data?: {
    title?: string;
    subtitle?: string;
    paragraphs?: string[];
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

  return (
    <section>
      <h1 className="heading-underline">{title}</h1>

      <p className="mt-4 text-lg font-semibold text-(--brand-ink) md:text-xl">
        {subtitle}
      </p>

      {paragraphs.map((p, idx) => (
        <p key={idx} className={idx === 0 ? "mt-5" : "mt-4"} style={{}}>
          <span className="text-base leading-7 text-(--text-muted)">{p}</span>
        </p>
      ))}
    </section>
  );
}
