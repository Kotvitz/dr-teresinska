type Props = {
  data?: { title?: string; text?: string };
};

export default function ContactHeader({ data }: Props) {
  const title = data?.title ?? "Kontakt – umów się na wizytę!";
  const text =
    data?.text ??
    "W gabinecie wykonuję szeroki zakres specjalistycznych badań diagnostycznych oraz oferuję konsultacje i terapię dostosowaną do indywidualnych potrzeb pacjentów – zarówno dzieci, jak i dorosłych.";

  return (
    <header>
      <h1 className="heading-underline text-3xl font-extrabold text-(--text) md:text-4xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-7 text-(--text-muted)">
        {text}
      </p>
    </header>
  );
}
