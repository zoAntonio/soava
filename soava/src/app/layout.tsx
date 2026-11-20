import type { Metadata } from "next";
import { Montserrat, Public_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

// Montserrat reprend la forme des lettres du logo SOAVA pour les titres.
// Public Sans, très lisible sur petit écran, porte le texte courant.
const head = Montserrat({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "SOAVA Global Logistics : colis du Canada vers Madagascar";
const description =
  "SOAVA collecte vos achats au Canada, les vérifie, les expédie vers Madagascar et vous montre où ils sont à chaque étape.";

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
      className={`${head.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
