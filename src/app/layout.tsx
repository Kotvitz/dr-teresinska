import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ContactInfo from "./components/sections/ContactInfo";
import CookieSettingsButton from "./components/ui/CookieSettingsButton";
import CookieBanner from "./components/ui/CookieBanner";
import CookieBlockingOverlay from "./components/cookies/CookieBlockingOverlay";
import ConsentScripts from "./components/cookies/ConsentScripts";
import PracticeLocationButton from "./components/ui/PracticeLocationButton";

export const metadata: Metadata = {
  title: "Dr Teresińska - Specjalistka otorynolaryngologii, foniatrii i audiologii",
  description: "Dr n. med. Elżbieta A. Teresińska w Szczecinie to laryngolog, foniatra, audiolog, logopeda. Zapraszamy do kontaktu!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <ContactInfo />
        <Footer />
        <CookieBlockingOverlay />
        <CookieBanner />
        <CookieSettingsButton />
        <ConsentScripts />
        <PracticeLocationButton />
      </body>
    </html>
  );
}
