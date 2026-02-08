# dr-teresinska.pl

Strona internetowa gabinetu lekarskiego dr n. med. Elżbiety A. Teresińskiej  
(oparta o Next.js + Sanity CMS).

Projekt umożliwia edycję treści strony przez system CMS (Sanity Studio),  
przy jednoczesnym zachowaniu bezpiecznych wartości domyślnych w kodzie.

---

## 🧱 Stack technologiczny

- Next.js (App Router)
- React + TypeScript
- Sanity CMS (v4)
- Tailwind CSS
- Nodemailer (formularz kontaktowy)

---

## 📁 Struktura projektu

- `src/app` – routing i komponenty UI
- `sanity/`
  - `schemaTypes/` – schematy CMS
  - `queries/` – zapytania GROQ
  - `lib/` – klient Sanity
  - `structure.ts` – struktura panelu CMS
- `src/content/` – statyczne treści prawne (HTML)

---

## 🧠 CMS (Sanity)

- Każda podstrona ma jeden dokument w CMS
- Treści posiadają:
  - `initialValue` – wartości startowe w CMS
  - fallback w kodzie – gdy CMS nie został jeszcze uzupełniony
- Dane globalne (kontakt, dane gabinetu) znajdują się w `siteSettings`

Sanity Studio dostępne lokalnie pod:
```
/studio
```

---

## ▶️ Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja:
```
http://localhost:3000
```

CMS:
```
http://localhost:3000/studio
```

---

## 🔐 Zmienne środowiskowe

Wymagane m.in.:

- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_API_VERSION
- zmienne SMTP (formularz kontaktowy)

---

## 📝 Uwagi

- Dokumenty prawne (RODO, polityka prywatności, cookies) nie są edytowalne
- CMS służy wyłącznie do redagowania treści

