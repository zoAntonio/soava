import Image from "next/image";
import Tracker from "@/components/Tracker";
import QrCard from "@/components/QrCard";
import RevealInit from "@/components/RevealInit";
import { company } from "@/lib/company";

const icon = (d: React.ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
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
  pin: icon(<><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  shield: icon(<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  plane: icon(<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />),
  box: icon(<><path d="M3 7l9-4 9 4v10l-9 4-9-4z" /><path d="M3 7l9 4 9-4M12 11v10" /></>),
  eye: icon(<><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>),
  handshake: icon(<><path d="M3 12l4-4 4 2 3-2 4 3 3-1" /><path d="M7 8v8l5 3 5-3v-5" /></>),
  leaf: icon(<><path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" /><path d="M5 19c3-5 6-8 10-10" /></>),
  mail: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  phone: icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />),
  clock: icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
};

const navLinks = [
  ["#services", "Services"],
  ["#reseau", "Notre réseau"],
  ["#valeurs", "Valeurs"],
  ["#contact", "Contact"],
];

const highlights = [
  { icon: icons.plane, title: "Canada ↔ Madagascar", text: "Une liaison dédiée entre les deux pays.", color: "bg-navy" },
  { icon: icons.eye, title: "Suivi de bout en bout", text: "Votre colis visible à chaque étape.", color: "bg-brand-green" },
  { icon: icons.shield, title: "Colis vérifiés", text: "Contrôle avant chaque expédition.", color: "bg-navy" },
];

const services = [
  {
    icon: icons.pin,
    title: "Collecte au Canada",
    text: "Un réseau de points de collecte où vos achats sont réceptionnés, enregistrés et pris en charge dès leur arrivée.",
  },
  {
    icon: icons.shield,
    title: "Contrôle & vérification",
    text: "Chaque colis est inspecté par nos équipes : conformité, état et contenu sont validés avant tout départ.",
  },
  {
    icon: icons.plane,
    title: "Transport international",
    text: "Acheminement vers Madagascar avec des transporteurs internationaux de référence, sélectionnés pour leur fiabilité.",
  },
  {
    icon: icons.box,
    title: "Livraison à Madagascar",
    text: "Prise en charge à l’arrivée, formalités et remise du colis à son destinataire.",
  },
];

const network = ["Collecte", "Vérification", "Expédition", "Livraison"];

const values = [
  { icon: icons.shield, title: "Fiabilité", text: "Des processus rigoureux, de la réception à la remise finale.", color: "bg-navy" },
  { icon: icons.eye, title: "Transparence", text: "Un statut clair à chaque étape, accessible à tout moment.", color: "bg-brand-green" },
  { icon: icons.handshake, title: "Proximité", text: "Une équipe présente des deux côtés, à l’écoute de ses clients.", color: "bg-brand-green" },
  { icon: icons.leaf, title: "Engagement", text: "Des racines canadiennes, un cap sur Madagascar : relier durablement deux pays.", color: "bg-navy" },
];

const d = (ms: number) => ({ "--d": ms + "ms" }) as React.CSSProperties;

export default function Home() {
  const phoneHref = `tel:${company.canada.phone.replace(/\s/g, "")}`;

  return (
    <>
      {/* Barre utilitaire (masquée sur très petit écran) */}
      <div className="hidden bg-navy text-xs text-white/80 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
          <span>Canada&nbsp;↔&nbsp;Madagascar</span>
          <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-navy/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-5 sm:py-3">
          <a href="#top" aria-label="SOAVA Global Logistics" className="min-w-0">
            <Image
              src="/logo.jpg"
              alt="SOAVA Global Logistics Inc. — Beyond Borders"
              width={1600}
              height={533}
              className="h-9 w-auto sm:h-11"
              preload
            />
          </a>
          <nav className="ml-auto mr-6 hidden gap-8 text-sm font-semibold text-navy md:flex">
            {navLinks.filter(([h]) => h !== "#contact").map(([h, l]) => (
              <a key={h} href={h} className="hover:text-brand-green">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white hover:bg-navy/90 md:inline-block">
            Nous contacter
          </a>
          <div className="flex shrink-0 items-center gap-2">
            
            <details className="relative md:hidden">
              <summary
                aria-label="Menu"
                className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full bg-navy text-white [&::-webkit-details-marker]:hidden"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </summary>
              <nav className="absolute right-0 top-12 w-56 overflow-hidden rounded-2xl bg-white text-sm font-semibold text-navy shadow-2xl ring-1 ring-navy/10">
                {navLinks.map(([h, l]) => (
                  <a key={h} href={h} className="block border-b border-navy/5 px-5 py-3.5 active:bg-soft">{l}</a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="top" className="overflow-x-clip">
        {/* Hero */}
        <section className="relative bg-soft">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-10 sm:gap-12 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p style={d(0)} className="hero-in text-xs font-bold uppercase tracking-[0.2em] text-brand-green sm:text-sm">
                Global Logistics
              </p>
              <h1 style={d(100)} className="hero-in mt-4 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
                Le Canada et Madagascar,
                <br />
                <span className="text-brand-red">sans frontières.</span>
              </h1>
              <p style={d(220)} className="hero-in mt-5 max-w-xl text-base leading-relaxed text-navy/70 sm:mt-6 sm:text-lg">
                SOAVA Global Logistics prend en charge vos colis de bout en bout : collecte,
                contrôle, transport international et livraison, avec un suivi précis à chaque étape.
              </p>
              <div style={d(340)} className="hero-in mt-7 grid gap-3 min-[460px]:flex min-[460px]:flex-wrap">
                <a href="#services" className="rounded-full bg-navy px-7 py-3.5 text-center font-semibold text-white hover:bg-navy/90">
                  Découvrir nos services
                </a>
                <a href={phoneHref} className="rounded-full bg-white px-7 py-3.5 text-center font-semibold text-navy ring-1 ring-navy/20 hover:ring-navy/50">
                  Nous contacter
                </a>
              </div>
              <div style={d(460)} className="hero-in mt-9 flex max-w-md items-center gap-3" aria-hidden>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-red text-xs font-bold text-white">CA</span>
                <span className="relative h-0 flex-1 border-t-2 border-dashed border-navy/30">
                  <span className="plane-fly -translate-x-1/2 rotate-90 rounded-full bg-soft p-0.5 text-navy">
                    {icons.plane}
                  </span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-green text-xs font-bold text-white">MG</span>
              </div>
            </div>

            <div id="suivi" style={d(300)} className="hero-in scroll-mt-24">
              <Tracker />
              <p className="mt-3 text-center text-xs text-navy/50">
                Aperçu du service de suivi — données de démonstration.
              </p>
            </div>
          </div>
          <div className="bar-in flex h-1.5">
            <span className="flex-[6] bg-navy" />
            <span className="flex-[3] bg-brand-green" />
            <span className="flex-[1] bg-brand-red" />
          </div>
        </section>

        {/* En un coup d'œil */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <div key={h.title} data-reveal style={d(i * 120)} className="flex items-center gap-4">
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white ${h.color}`}>
                  {h.icon}
                </span>
                <div>
                  <p className="font-bold text-navy">{h.title}</p>
                  <p className="text-sm text-navy/60">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 bg-soft py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green sm:text-sm">Nos services</p>
            <h2 data-reveal className="mt-3 max-w-2xl text-2xl font-bold text-navy sm:text-4xl">
              Une chaîne logistique maîtrisée, d’un pays à l’autre.
            </h2>
            <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  data-reveal
                  style={d(i * 110)}
                  className="group flex gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-green hover:shadow-xl sm:block sm:p-7"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center self-start rounded-xl bg-navy text-white transition group-hover:bg-brand-green">
                    {s.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy sm:mt-5">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy/70">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Réseau */}
        <section id="reseau" className="scroll-mt-20 bg-navy py-14 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green sm:text-sm">Notre réseau</p>
            <h2 data-reveal className="mt-3 max-w-2xl text-2xl font-bold sm:text-4xl">
              Deux pays, une seule équipe, un suivi continu.
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Nos équipes d’administration opèrent au Canada comme à Madagascar et travaillent avec
              des transporteurs internationaux partenaires pour garantir un acheminement sûr et traçable.
            </p>

            <ol className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4">
              {network.map((n, i) => (
                <li key={n} data-reveal style={d(i * 130)} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-green text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="mt-4 text-lg font-bold">{n}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Valeurs */}
        <section id="valeurs" className="scroll-mt-20 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green sm:text-sm">Nos valeurs</p>
            <h2 data-reveal className="mt-3 max-w-2xl text-2xl font-bold text-navy sm:text-4xl">
              Ce qui guide chacun de nos envois.
            </h2>
            <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <div key={v.title} data-reveal style={d(i * 110)} className={`rounded-2xl p-6 text-white ${v.color}`}>
                  <span className="mb-4 block h-1 w-10 rounded-full bg-brand-red" />
                  <span className="text-white/90">{v.icon}</span>
                  <h3 className="mt-3 text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact + QR */}
        <section id="contact" className="scroll-mt-20 bg-soft py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green sm:text-sm">Contact</p>
              <h2 data-reveal className="mt-3 text-2xl font-bold text-navy sm:text-4xl">Parlons de vos envois.</h2>
              <p className="mt-4 max-w-xl text-navy/70">
                Notre équipe vous répond au Canada et à Madagascar.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
                {[company.canada, company.madagascar].map((o, i) => (
                  <div
                    key={o.label}
                    data-reveal
                    style={d(i * 130)}
                    className={`rounded-2xl border-t-4 bg-white p-6 ring-1 ring-navy/10 ${i === 0 ? "border-brand-red" : "border-brand-green"}`}
                  >
                    <p className="text-lg font-bold text-navy">{o.label}</p>
                    <p className="text-sm text-navy/60">{o.city}</p>
                    <a
                      href={`tel:${o.phone.replace(/\s/g, "")}`}
                      className="mt-4 flex items-center gap-3 text-sm font-semibold text-navy"
                    >
                      <span className="text-brand-green">{icons.phone}</span>
                      {o.phone}
                    </a>
                    <p className="mt-2 text-sm text-navy/70">{o.address}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-3 text-navy">
                <li className="flex items-center gap-3">
                  <span className="text-brand-green">{icons.mail}</span>
                  <a href={`mailto:${company.email}`} className="break-all font-semibold hover:text-brand-green">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-green">{icons.clock}</span>
                  {company.hours}
                </li>
              </ul>

              <a
                href="/contact.vcf"
                className="mt-8 block rounded-full bg-navy px-7 py-3.5 text-center font-semibold text-white hover:bg-navy/90 sm:inline-block"
              >
                Ajouter SOAVA à mes contacts
              </a>
            </div>

            <div data-reveal style={d(150)} className="rounded-3xl bg-navy p-6 text-center text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green sm:text-sm">Restez connecté</p>
              <h3 className="mt-2 text-2xl font-bold">Scannez, retrouvez-nous.</h3>
              <p className="mx-auto mb-6 mt-2 max-w-xs text-sm text-white/70">
                Enregistrez ce site pour plus tard grâce à ce QR code.
              </p>
              <QrCard />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy pb-16 text-white md:pb-0">
        <div className="flex h-1.5">
          <span className="flex-[6] bg-white/20" />
          <span className="flex-[3] bg-brand-green" />
          <span className="flex-[1] bg-brand-red" />
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center text-sm text-white/70 sm:flex-row sm:text-left">
          <Image
            src="/emblem.png"
            alt="SOAVA"
            width={540}
            height={500}
            className="h-12 w-auto rounded-lg bg-white p-1"
          />
          <p>© 2026 {company.name} — {company.tagline}</p>
        </div>
      </footer>

      {/* Barre d’actions mobile : la carte de visite à portée de pouce */}
      <RevealInit />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy/10 bg-white text-xs font-semibold text-navy shadow-[0_-4px_20px_rgba(10,22,51,0.12)] md:hidden">
        <a href={phoneHref} className="flex flex-col items-center gap-1 py-2.5 active:bg-soft">
          <span className="text-brand-green [&>svg]:h-5 [&>svg]:w-5">{icons.phone}</span>Appeler
        </a>
        <a href={`mailto:${company.email}`} className="flex flex-col items-center gap-1 py-2.5 active:bg-soft">
          <span className="text-navy [&>svg]:h-5 [&>svg]:w-5">{icons.mail}</span>E-mail
        </a>
        <a href="/contact.vcf" className="flex flex-col items-center gap-1 py-2.5 active:bg-soft">
          <span className="text-navy [&>svg]:h-5 [&>svg]:w-5">{icons.handshake}</span>Contact
        </a>
      </div>
    </>
  );
}
