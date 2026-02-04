const DEFAULT_GROUPS = [
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
      "Zaburzenia mowy",
      "Zaburzenia rozwoju mowy i języka",
      "Dysleksja",
      "Dysfagia (zaburzenia połykania)",
    ],
  },
  {
    title: "Inne schorzenia",
    items: ["Choroby górnych dróg oddechowych"],
  },
];

type Props = {
  data?: {
    title?: string;
    groups?: Array<{ title?: string; items?: string[] }>;
  };
};

export default function SpecializationsGroups({ data }: Props) {
  const title = data?.title ?? "Zakres specjalizacji";
  const groups =
    data?.groups?.length ? data.groups : DEFAULT_GROUPS;

  return (
    <section className="mt-12">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        {title}
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {groups.map((g, idx) => (
          <div
            key={g.title ?? `group-${idx}`}
            className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-(--text)">{g.title}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-(--text-muted)">
              {(g.items ?? []).map((item, itemIdx) => (
                <li key={`${g.title ?? `group-${idx}`}-${itemIdx}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
