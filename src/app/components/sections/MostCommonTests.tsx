const HEARING_TESTS = [
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
];

const VOICE_AIRWAY_TESTS = [
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
];

export default function MostCommonTests() {
  return (
    <section className="mt-14">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        Najczęściej wykonywane badania
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-(--border) bg-white p-6">
          <h3 className="text-base font-bold text-(--text)">Badania słuchu i dróg oddechowych</h3>
          <ul className="mt-4 space-y-3">
            {HEARING_TESTS.map((t) => (
              <li
                key={t.name}
                className="rounded-lg border border-(--border) bg-(--surface-muted) px-4 py-3"
              >
                <div className="text-sm font-semibold text-(--text)">{t.name}</div>
                <div className="mt-1 text-sm leading-6 text-(--text-muted)">{t.desc}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-(--border) bg-white p-6">
          <h3 className="text-base font-bold text-(--text)">Badania głosu</h3>
          <ul className="mt-4 space-y-3">
            {VOICE_AIRWAY_TESTS.map((t) => (
              <li
                key={t.name}
                className="rounded-lg border border-(--border) bg-(--surface-muted) px-4 py-3"
              >
                <div className="text-sm font-semibold text-(--text)">{t.name}</div>
                <div className="mt-1 text-sm leading-6 text-(--text-muted)">{t.desc}</div>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm leading-7 text-(--text-muted)">
            W przypadku problemów z głosem (np. chrypka, zmęczenie głosu, przeciążenia u osób mówiących zawodowo)
            dobierana jest diagnostyka oraz dalsze zalecenia.
          </p>
        </div>
      </div>
    </section>
  );
}
