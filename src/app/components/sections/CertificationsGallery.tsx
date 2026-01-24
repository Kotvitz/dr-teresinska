const PLACEHOLDERS = Array.from({ length: 6 });

export default function CertificationsGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {PLACEHOLDERS.map((_, index) => (
        <div
          key={index}
          aria-hidden="true"
          className="
            flex aspect-4/3 items-center justify-center
            rounded-xl border border-(--border)
            bg-(--surface-muted)
            text-sm font-semibold text-(--text-muted)
          "
        >
          Certyfikat
        </div>
      ))}

      <div className="sm:col-span-2 mt-2 text-sm text-(--text-muted)">
        *Certyfikaty zostaną uzupełnione po dostarczeniu materiałów graficznych.
      </div>
    </div>
  );
}
