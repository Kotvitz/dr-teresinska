import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Teresińska - Tabela cookies",
  description:
    "Tabela plików cookies stosowanych w serwisie dr-teresinska.pl wraz z kategorią, rodzajem, źródłem, czasem przechowywania i opisem zastosowania.",
  robots: { index: true, follow: true },
};

const COOKIE_ROWS = [
  {
    name: "unikatowa nazwa generowana dynamicznie",
    category: "niezbędne",
    type: "sesyjne",
    source: "pliki własne strony",
    retention: "przez czas sesji",
    purpose:
      "Są niezbędne do poprawnego działania strony np. wyświetlania odpowiedniej wersji językowej.",
  },
  {
    name: "cookiesDirective",
    category: "niezbędne",
    type: "stały",
    source: "pliki własne strony",
    retention: "do 365 dni",
    purpose:
      "Służy do zapisywania informacji, czy dla danego użytkownika wyświetlać ponownie komunikat o plikach cookie w przypadku, kiedy użytkownik zaznaczył conajmniej jedną z opcjonalnych zgód.",
  },
  {
    name: "cpnb_cookiesSettings",
    category: "niezbędne",
    type: "stały",
    source: "pliki własne strony",
    retention: "do 365 dni",
    purpose:
      "Służy do zbierania informacji o statusie zgód na pliki cookie wyrażonych przez użytkownika podczas jego wizyty na stronie.",
  },
  {
    name: "cpnbCookiesDeclined",
    category: "niezbędne",
    type: "stały",
    source: "pliki własne strony",
    retention: "do 180 dni",
    purpose:
      "Ten plik służy do zapisywania informacji, czy dla danego użytkownika wyświetlać ponownie komunikat o plikach cookie w przypadku, kiedy użytkownik odrzucił wszytkie opcjonalne zgody.",
  },
  {
    name: "_GRECAPTCHA",
    category: "niezbędne",
    type: "stały",
    source: "Google",
    retention: "do 180 dni",
    purpose:
      "Ten plik pochodzi z narzędzia Google reCAPTCHA, które służy do ochrony przed spamem.",
  },
  {
    name: "_ga",
    category: "analityczne",
    type: "stały",
    source: "Google",
    retention: "do 2 lat",
    purpose:
      "Umożliwia rozróżnianie poszczególnych użytkowników i śledzenie, w jaki sposób korzystają oni z witryny. Dane są wykorzystywane do generowania statystyk bez identyfikowania użytkowników.",
  },
  {
    name: "_gac",
    category: "analityczne",
    type: "stały",
    source: "Google",
    retention: "do 90 dni",
    purpose:
      "Służy do mierzenia aktywności użytkowników oraz skuteczności kampanii reklamowych.",
  },
  {
    name: "_gcl_xxxx",
    category: "analityczne",
    type: "stały",
    source: "Google",
    retention: "do 90 dni",
    purpose:
      "Używane do informowania, ile razy użytkownicy, którzy kliknęli reklamy, wykonali działanie w witrynie (np. konwersję).",
  },
  {
    name: "_gid",
    category: "analityczne",
    type: "stały",
    source: "Google",
    retention: "do 24 godzin",
    purpose:
      "Służy do rozróżniania użytkowników oraz przechowywania identyfikatora sesji (odwiedzin).",
  },
  {
    name: "_gat",
    category: "analityczne",
    type: "stały",
    source: "Google",
    retention: "do 1 minuty",
    purpose:
      "Służy do ograniczania szybkości żądań (poprawa wydajności).",
  },
  {
    name: "fr",
    category: "reklamowe",
    type: "stały",
    source: "Facebook",
    retention: "do 90 dni",
    purpose:
      "Wykorzystywany do dostarczania odpowiednich reklam oraz pomiaru ich skuteczności.",
  },
  {
    name: "_fbp",
    category: "reklamowe",
    type: "stały",
    source: "Facebook",
    retention: "do 90 dni",
    purpose:
      "Służy do zliczania wyświetleń reklamy, obliczania kosztu oraz śledzenia zachowania użytkownika na stronach z pikselem Facebooka.",
  },
];

export default function CookiesTablePage() {
  return (
    <main className="container-page py-12">
      <div className="policy-content">
        <h1>Tabela cookies</h1>
        <div className="policy-table-wrap mt-6">
          <table>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Kategoria</th>
                <th>Rodzaj</th>
                <th>Źródło</th>
                <th>Czas przechowywania</th>
                <th>Opis zastosowania</th>
              </tr>
            </thead>
            <tbody>
              {COOKIE_ROWS.map((row) => (
                <tr key={`${row.name}-${row.source}`}>
                  <td className="font-medium text-(--text)">{row.name}</td>
                  <td>{row.category}</td>
                  <td>{row.type}</td>
                  <td>{row.source}</td>
                  <td>{row.retention}</td>
                  <td className="text-justify">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6">
          Szczegółowe informacje o plikach cookies znajdują się w{" "}
          <a href="/polityka-cookies">Polityce cookies</a>.
        </p>
      </div>
    </main>
  );
}
