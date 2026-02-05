const DEFAULT_MOST_COMMON = {
  title: "Najczęściej wykonywane badania",
  left: {
    title: "Badania słuchu i dróg oddechowych",
    items: [
      {
        name: "Audiometria tonalna",
        desc: "Ocena progu słyszenia na różnych częstotliwościach (audiogram).",
      },
      {
        name: "Audiometria mowy",
        desc: "Ocena rozumienia mowy – przydatna m.in. w dalszej diagnostyce i zaleceniach.",
      },
      {
        name: "Tympanometria",
        desc: "Ocena ucha środkowego i ruchomości błony bębenkowej.",
      },
      {
        name: "OAE",
        desc: "Obiektywna ocena funkcji ślimaka (komórek słuchowych) – także u dzieci.",
      },
      {
        name: "BERA",
        desc: "Obiektywna ocena drogi słuchowej – możliwa również u najmłodszych pacjentów.",
      },
    ],
  },
  right: {
    title: "Badania głosu",
    items: [
      {
        name: "Videoendoskopia",
        desc: "Ocena krtani/nosa/uszu w badaniu endoskopowym.",
      },
      {
        name: "Videostroboskopia krtani",
        desc: "Ocena pracy fałdów głosowych (np. przy chrypce i przeciążeniu głosu).",
      },
      {
        name: "Nasofaryngoskopia",
        desc: "Ocena nosogardła (m.in. u dzieci – np. w kierunku przerostu migdałka gardłowego).",
      },
    ],
    note:
      "W przypadku problemów z głosem (np. chrypka, zmęczenie głosu, przeciążenia u osób mówiących zawodowo) dobierana jest diagnostyka oraz dalsze zalecenia.",
  },
};

type TestItem = { name?: string; desc?: string };

type Props = {
  data?: {
    title?: string;
    left?: { title?: string; items?: TestItem[] };
    right?: { title?: string; items?: TestItem[]; note?: string };
  };
};

export default function MostCommonTests({ data }: Props) {
  const title = data?.title ?? DEFAULT_MOST_COMMON.title;

  const left = {
    title: data?.left?.title ?? DEFAULT_MOST_COMMON.left.title,
    items: data?.left?.items?.length ? data.left.items : DEFAULT_MOST_COMMON.left.items,
  };

  const right = {
    title: data?.right?.title ?? DEFAULT_MOST_COMMON.right.title,
    items: data?.right?.items?.length ? data.right.items : DEFAULT_MOST_COMMON.right.items,
    note: data?.right?.note ?? DEFAULT_MOST_COMMON.right.note,
  };

  return (
    <section className="mt-14">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        {title}
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-(--border) bg-white p-6">
          <h3 className="text-base font-bold text-(--text)">{left.title}</h3>
          <ul className="mt-4 space-y-3">
            {left.items.map((t, idx) => (
              <li
                key={t.name ?? `left-${idx}`}
                className="rounded-lg border border-(--border) bg-(--surface-muted) px-4 py-3"
              >
                <div className="text-sm font-semibold text-(--text)">{t.name}</div>
                {t.desc ? (
                  <div className="mt-1 text-sm leading-6 text-(--text-muted)">{t.desc}</div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-(--border) bg-white p-6">
          <h3 className="text-base font-bold text-(--text)">{right.title}</h3>
          <ul className="mt-4 space-y-3">
            {right.items.map((t, idx) => (
              <li
                key={t.name ?? `right-${idx}`}
                className="rounded-lg border border-(--border) bg-(--surface-muted) px-4 py-3"
              >
                <div className="text-sm font-semibold text-(--text)">{t.name}</div>
                {t.desc ? (
                  <div className="mt-1 text-sm leading-6 text-(--text-muted)">{t.desc}</div>
                ) : null}
              </li>
            ))}
          </ul>

          {right.note ? (
            <p className="mt-5 text-sm leading-7 text-(--text-muted)">{right.note}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
