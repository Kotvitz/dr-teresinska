const GROUPS = [
  {
    title: "Choroby uszu",
    items: [
      "Choroby ucha zewnętrznego",
      "Choroby ucha środkowego",
      "Choroby ucha wewnętrznego",
      "Niedosłuchy przewodzeniowe i odbiorcze",
      "Głuchota przewodzeniowa i czuciowo-nerwowa",
      "Nagła głuchota",
      "Zawroty głowy",
      "Szumy uszne (gwizdy, dzwonienie)",
    ],
  },
  {
    title: "Zaburzenia głosu i mowy",
    items: [
      "Chrypka i zanikanie głosu",
      "Zaburzenia głosu u dzieci i dorosłych",
      "Ostre i przewlekłe zapalenia krtani i tchawicy",
    ],
  },
];

export default function SpecializationsGroups() {
  return (
    <section className="mt-12">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        Zakres konsultacji
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {GROUPS.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-(--text)">{g.title}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-(--text-muted)">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
