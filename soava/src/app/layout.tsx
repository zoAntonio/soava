import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Public_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

// Montserrat reprend la forme des lettres du logo SOAVA pour les titres.
// Public Sans, très lisible sur petit écran, porte le texte courant.
const head = Montserrat({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const body = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Soava Group : une entreprise canadienne à ambition mondiale";
const description =
  "Soava Group, ancré au Canada, réunit logistique et livraison express, agroalimentaire et superfoods, mines et ressources stratégiques.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "SOAVA Global Logistics",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${head.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <Script id="js-reveal" strategy="beforeInteractive">{"document.documentElement.classList.add(\"js-reveal\")"}</Script>
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
