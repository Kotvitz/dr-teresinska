import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: "dr-teresinska.pl",
  description: "…",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
