const DEFAULT_SCOPE = {
  title: "Zakres badań i konsultacji",
  cards: [
    {
      title: "Diagnostyka słuchu",
      items: [
        "Audiometria i tympanometria",
        "Badania obiektywne: BERA i OAE",
        "Badania przesiewowe słuchu",
      ],
    },
    {
      title: "Diagnostyka głosu i dróg oddechowych",
      items: [
        "Videostroboskopia krtani",
        "Videoendoskopia (krtań/nos/uszy)",
        "Nasofaryngoskopia (nosogardło)",
      ],
    },
    {
      title: "Najczęstsze wskazania",
      items: [
        "Niedosłuch, szumy uszne",
        "Chrypka i zaburzenia głosu",
        "Nawracające infekcje, zatoki",
        "Zawroty głowy",
      ],
    },
  ],
};

type Props = {
  data?: {
    title?: string;
    cards?: Array<{ title?: string; items?: string[] }>;
  };
};

export default function TestsScope({ data }: Props) {
  const title = data?.title ?? DEFAULT_SCOPE.title;

  const cards =
    data?.cards?.length === 3
      ? data.cards
      : DEFAULT_SCOPE.cards;

  return (
    <section className="mt-14">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        {title}
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={card.title ?? `scope-${idx}`}
            className="rounded-2xl border border-(--border) bg-white p-6"
          >
            <h3 className="text-base font-bold text-(--text)">{card.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-(--text-muted)">
              {(card.items ?? []).map((item, itemIdx) => (
                <li key={`${card.title ?? `scope-${idx}`}-${itemIdx}`}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
