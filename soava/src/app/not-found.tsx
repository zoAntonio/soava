import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page introuvable | SOAVA Global Logistics",
  description: "Cette page n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-start justify-center px-6 py-16">
      <Image src="/logo-soava.png" alt="SOAVA Global Logistics Inc." width={1385} height={402} className="h-12 w-auto" />
      <p className="mt-12 font-heading text-sm font-bold uppercase tracking-[0.18em] text-green-ink">Erreur 404</p>
      <h1 className="mt-3 text-4xl font-extrabold text-navy">Ce colis s&apos;est égaré.</h1>
      <p className="mt-4 text-lg text-navy/75">
        La page que vous cherchez n&apos;existe pas ou a changé d&apos;adresse. Revenez à l&apos;accueil
        pour suivre un colis ou nous contacter.
      </p>
      <Link href="/" className="mt-8 rounded-md bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
