import Image from "next/image";

type Props = {
  imageSrc?: string;
};

export default function TestsIntro({ imageSrc }: Props) {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-start">
      <div>
        <h1 className="heading-underline text-4xl font-extrabold tracking-tight text-(--text)">
          Badania audiologiczne i laryngologiczne – Szczecin
        </h1>

        <p className="mt-5 text-sm leading-7 text-(--text-muted)">
          W gabinecie wykonywana jest diagnostyka słuchu, głosu oraz dróg oddechowych.
          Dobór badań zależy od objawów i wieku pacjenta – każde badanie poprzedza wywiad,
          a wyniki są omawiane wraz z zaleceniami.
        </p>
      </div>

      <div>
        {imageSrc ? (
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-(--border) bg-(--surface-muted)">
            <Image
              src={imageSrc}
              alt="Ilustracja przedstawiająca badania słuchu i diagnostykę"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 520px, 100vw"
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="aspect-4/3 w-full rounded-2xl border border-(--border) bg-(--surface-muted)"
          />
        )}
      </div>
    </section>
  );
}
