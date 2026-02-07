export default function Footer() {
  return (
    <footer className="border-t border-(--border) py-6">
      <div className="container-page flex flex-col gap-4 text-sm text-(--text-muted) md:flex-row md:items-center md:justify-between">
        <span>
          Wszelkie prawa zastrzeżone © {new Date().getFullYear()} Elżbieta Teresińska
        </span>

        <nav className="flex gap-4">
          <a
            href="/polityka-prywatnosci"
            className="hover:text-(--brand)"
          >
            Polityka prywatności
          </a>
          <a
            href="/polityka-cookies"
            className="hover:text-(--brand)"
          >
            Polityka cookies
          </a>
        </nav>
      </div>
    </footer>
  );
}
