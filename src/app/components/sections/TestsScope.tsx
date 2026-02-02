export default function TestsScope() {
  return (
    <section className="mt-14">
      <h2 className="heading-underline text-2xl font-bold text-(--text)">
        Zakres badań i konsultacji
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-(--border) bg-white p-6">
          <h3 className="text-base font-bold text-(--text)">Diagnostyka słuchu</h3>
          <ul className="mt-4 space-y-2 text-sm text-(--text-muted)">
            <li>• Audiometria i tympanometria</li>
            <li>• Badania obiektywne: BERA i OAE</li>
            <li>• Badania przesiewowe słuchu</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-(--border) bg-white p-6">
          <h3 className="text-base font-bold text-(--text)">Diagnostyka głosu i dróg oddechowych</h3>
          <ul className="mt-4 space-y-2 text-sm text-(--text-muted)">
            <li>• Videostroboskopia krtani</li>
            <li>• Videoendoskopia (krtań/nos/uszy)</li>
            <li>• Nasofaryngoskopia (nosogardło)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-(--border) bg-white p-6">
          <h3 className="text-base font-bold text-(--text)">Najczęstsze wskazania</h3>
          <ul className="mt-4 space-y-2 text-sm text-(--text-muted)">
            <li>• Niedosłuch, szumy uszne</li>
            <li>• Chrypka i zaburzenia głosu</li>
            <li>• Nawracające infekcje, zatoki</li>
            <li>• Zawroty głowy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
