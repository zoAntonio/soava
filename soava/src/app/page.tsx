import Image from "next/image";
import QrCard from "@/components/QrCard";
import { company } from "@/lib/company";

const icon = (d: React.ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {d}
  </svg>
);

const icons = {
  plane: icon(<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />),
  mail: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  phone: icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />),
  clock: icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  card: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M15 10h3M15 13h3" /></>),
};

const navLinks = [
  ["#services", "Services"],
  ["#reseau", "Notre réseau"],
  ["#valeurs", "Valeurs"],
  ["#contact", "Contact"],
];

const services = [
  {
    title: "Collecte au Canada",
    text: "Vos achats arrivent à l'un de nos points de collecte. Nous les réceptionnons, les enregistrons et leur donnons un numéro de suivi.",
  },
  {
    title: "Vérification",
    text: "Nos équipes contrôlent l'état et le contenu de chaque colis avant son départ, pour éviter les mauvaises surprises à l'arrivée.",
  },
  {
    title: "Transport international",
    text: "Le colis voyage avec un transporteur international partenaire, choisi pour sa fiabilité sur cette liaison.",
  },
  {
    title: "Livraison à Madagascar",
    text: "À l'arrivée, nous prenons en charge les formalités et remettons le colis à son destinataire.",
  },
];

const values = [
  { title: "Fiabilité", text: "Chaque colis suit les mêmes contrôles, de la réception à la remise." },
  { title: "Transparence", text: "Nous vous tenons informé de l'avancement de votre colis, étape après étape." },
  { title: "Proximité", text: "Une équipe au Canada, une équipe à Madagascar, joignables des deux côtés." },
  { title: "Engagement", text: "Nous voulons relier durablement deux pays, un colis après l'autre." },
];

export default function Home() {
  const phoneHref = `tel:${company.canada.phone.replace(/\s/g, "")}`;

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>

      <header className="sticky top-0 z-30 border-b border-navy/15 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
          <a href="#top" aria-label="SOAVA Global Logistics, retour en haut" className="min-w-0">
            <Image
              src="/logo.jpg"
              alt="SOAVA Global Logistics Inc., Beyond Borders"
              width={1600}
              height={533}
              className="h-9 w-auto sm:h-11"
              preload
            />
          </a>
          <nav aria-label="Navigation principale" className="ml-auto mr-6 hidden gap-8 text-sm font-semibold text-navy md:flex">
            {navLinks.filter(([h]) => h !== "#contact").map(([h, l]) => (
              <a key={h} href={h} className="hover:text-green-ink hover:underline hover:underline-offset-4">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 md:inline-block">
            Nous contacter
          </a>
          <details className="relative md:hidden">
            <summary
              aria-label="Ouvrir le menu"
              className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md bg-navy text-white [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Menu mobile" className="absolute right-0 top-12 w-56 border border-navy/20 bg-white text-sm font-semibold text-navy shadow-lg">
              {navLinks.map(([h, l]) => (
                <a key={h} href={h} className="block border-b border-navy/10 px-5 py-3.5 last:border-0 active:bg-navy/5">{l}</a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main id="contenu">
        <span id="top" />

        {/* Hero */}
        <section className="border-b border-navy/15">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="self-center">
              <h1 className="text-[2.15rem] font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[3.3rem]">
                Vos colis du <span className="text-brand-red">Canada</span> à{" "}
                <span className="text-green-ink">Madagascar</span>, pris en charge de bout en bout.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/75 sm:text-lg">
                SOAVA reçoit vos achats au Canada, les vérifie, les confie à un transporteur
                international et les remet à Madagascar. Une équipe vous répond des deux côtés.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row">
                <a href="#contact" className="rounded-md bg-navy px-7 py-3.5 text-center font-semibold text-white hover:bg-navy/90">
                  Nous contacter
                </a>
                </div>
              <div className="mt-10 flex max-w-md items-center gap-3 text-sm font-semibold text-navy" aria-label="Trajet de Montréal à Antananarivo">
                <span>Montréal</span>
                <span className="flex flex-1 items-center gap-2 text-navy/40" aria-hidden>
                  <span className="h-px flex-1 bg-navy/30" />
                  {icons.plane}
                  <span className="h-px flex-1 bg-navy/30" />
                </span>
                <span>Antananarivo</span>
              </div>
            </div>

            <aside aria-labelledby="direct-titre" className="rounded-xl border border-navy/20 bg-white p-6 sm:p-8">
              <h2 id="direct-titre" className="text-lg font-bold text-navy">Joignez-nous directement</h2>
              <div className="mt-6 space-y-6">
                {[company.canada, company.madagascar].map((o, i) => (
                  <div key={o.label} className={`border-l-4 pl-4 ${i === 0 ? "border-brand-red" : "border-brand-green"}`}>
                    <p className="font-bold text-navy">{o.label}</p>
                    <p className="text-sm text-navy/70">{o.city}</p>
                    <a href={`tel:${o.phone.replace(/s/g, "")}`} className="mt-1 inline-block text-lg font-semibold text-navy underline underline-offset-4 hover:text-green-ink">
                      {o.phone}
                    </a>
                  </div>
                ))}
              </div>
              <a href={`mailto:${company.email}`} className="mt-6 block break-all font-semibold text-navy underline underline-offset-4 hover:text-green-ink">
                {company.email}
              </a>
              <a href="/contact.vcf" className="mt-6 block rounded-md bg-navy px-6 py-3 text-center font-semibold text-white hover:bg-navy/90">
                Ajouter SOAVA à mes contacts
              </a>
            </aside>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-ink sm:text-sm">Services</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold text-navy sm:text-4xl">
              De la collecte à la livraison, une seule équipe s&apos;occupe de tout.
            </h2>

            <ol className="mt-10 border-t-2 border-navy sm:mt-14">
              {services.map((s, i) => (
                <li key={s.title} className="grid gap-2 border-b border-navy/15 py-6 sm:grid-cols-[4rem_1fr_1.4fr] sm:gap-8 sm:py-8">
                  <span className="font-heading text-sm font-bold text-green-ink sm:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                  <p className="leading-relaxed text-navy/75">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Réseau */}
        <section id="reseau" className="scroll-mt-20 bg-navy py-14 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green sm:text-sm">Notre réseau</p>
                <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
                  Deux pays, une équipe de chaque côté.
                </h2>
              </div>
              <p className="self-end leading-relaxed text-white/80">
                Nos équipes d&apos;administration travaillent au Canada et à Madagascar. Elles
                s&apos;appuient sur des transporteurs internationaux partenaires pour que chaque colis
                arrive en bon état et que chaque étape du trajet soit contrôlée.
              </p>
            </div>

            <div className="mt-12 flex items-stretch gap-4 sm:mt-16">
              <div className="flex-1 border-t-4 border-brand-red pt-4">
                <p className="text-sm text-white/60">Départ</p>
                <p className="mt-1 text-xl font-bold sm:text-2xl">Canada</p>
                <p className="text-white/80">{company.canada.city}</p>
              </div>
              <div className="flex-1 border-t-4 border-brand-green pt-4 text-right">
                <p className="text-sm text-white/60">Arrivée</p>
                <p className="mt-1 text-xl font-bold sm:text-2xl">Madagascar</p>
                <p className="text-white/80">{company.madagascar.city}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section id="valeurs" className="scroll-mt-20 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-ink sm:text-sm">Valeurs</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold text-navy sm:text-4xl">
              Ce qui guide chaque envoi.
            </h2>
            <dl className="mt-10 grid gap-x-12 gap-y-8 sm:mt-14 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="border-l-4 border-navy pl-5">
                  <dt className="text-xl font-bold text-navy">{v.title}</dt>
                  <dd className="mt-1.5 leading-relaxed text-navy/75">{v.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-navy py-14 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green sm:text-sm">Contact</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-4xl">Parlons de vos envois.</h2>
              <p className="mt-4 max-w-xl text-white/80">
                Écrivez-nous ou appelez le bureau le plus proche de vous.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[company.canada, company.madagascar].map((o, i) => (
                  <div key={o.label} className={`border-t-4 pt-4 ${i === 0 ? "border-brand-red" : "border-brand-green"}`}>
                    <p className="text-lg font-bold">{o.label}</p>
                    <p className="text-sm text-white/70">{o.city}</p>
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="mt-3 flex items-center gap-3 font-semibold hover:underline">
                      {icons.phone}
                      {o.phone}
                    </a>
                    <p className="mt-2 text-sm text-white/70">{o.address}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  {icons.mail}
                  <a href={`mailto:${company.email}`} className="break-all font-semibold hover:underline">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  {icons.clock}
                  {company.hours}
                </li>
              </ul>

              <a
                href="/contact.vcf"
                className="mt-8 block rounded-md bg-white px-7 py-3.5 text-center font-semibold text-navy hover:bg-white/90 sm:inline-block"
              >
                Ajouter SOAVA à mes contacts
              </a>
            </div>

            <div className="self-start rounded-xl bg-white p-6 text-center text-navy">
              <h3 className="text-xl font-bold">Retrouvez-nous plus tard</h3>
              <p className="mx-auto mb-5 mt-2 max-w-xs text-sm text-navy/70">
                Scannez ce code avec votre téléphone pour enregistrer le site.
              </p>
              <QrCard />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-navy/15 pb-20 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center text-sm text-navy/70 sm:flex-row sm:px-6 sm:text-left">
          <Image
            src="/logo.jpg"
            alt="SOAVA Global Logistics Inc."
            width={1600}
            height={533}
            className="h-10 w-auto"
          />
          <p>© 2026 {company.name}. {company.tagline}.</p>
        </div>
      </footer>

      {/* Barre d'actions mobile */}
      <nav
        aria-label="Actions rapides"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy/20 bg-white text-xs font-semibold text-navy md:hidden"
      >
        <a href={phoneHref} className="flex flex-col items-center gap-1 py-2.5 active:bg-navy/5">
          <span className="text-green-ink">{icons.phone}</span>Appeler
        </a>
        <a href={`mailto:${company.email}`} className="flex flex-col items-center gap-1 py-2.5 active:bg-navy/5">
          <span className="text-navy">{icons.mail}</span>E-mail
        </a>
        <a href="/contact.vcf" className="flex flex-col items-center gap-1 py-2.5 active:bg-navy/5">
          <span className="text-navy">{icons.card}</span>Contact
        </a>
      </nav>
    </>
  );
}
