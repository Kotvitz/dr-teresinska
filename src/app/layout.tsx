import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ContactInfo from "./components/sections/ContactInfo";
import CookieSettingsButton from "./components/cookies/CookieSettingsButton";
import ConsentScripts from "./components/cookies/ConsentScripts";

export const metadata: Metadata = {
  title: "dr-teresinska.pl",
  description: "…",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <ContactInfo />
        <Footer />
        <CookieSettingsButton />
        <ConsentScripts />
      </body>
    </html>
  );
}
