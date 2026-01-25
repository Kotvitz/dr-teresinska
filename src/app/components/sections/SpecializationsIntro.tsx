export default function SpecializationsIntro() {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <h1 className="heading-underline text-3xl font-extrabold text-(--text) md:text-4xl">
          Specjalizacje – laryngologia, audiologia i foniatria
        </h1>

        <p className="mt-5 text-base leading-7 text-(--text-muted)">
          Poniżej znajduje się przegląd najczęstszych problemów, z którymi pacjenci zgłaszają
          się do gabinetu. Każdego pacjenta traktuję indywidualnie, starannie analizując objawy i
          dobierając najlepszą metodę leczenia. Zapraszam na konsultację – wspólnie znajdziemy
          skuteczne rozwiązanie Twojego problemu.
        </p>
      </div>

      <div
        className="
          aspect-4/3 w-full overflow-hidden
          rounded-2xl border border-(--border)
          bg-(--surface-muted)
        "
      >
        <img
          src="/photo-specializations.webp"
          alt="Ilustracja przedstawiająca zakres konsultacji laryngologicznych i audiologicznych"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

    </section>
  );
}
