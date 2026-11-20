import Image from "next/image";
import Tracker from "@/components/Tracker";

const steps = [
  { n: "01", title: "Vous achetez", text: "Commandez vos produits chez vos marchands canadiens et faites-les livrer à un point de collecte SOAVA." },
  { n: "02", title: "Nous collectons", text: "Nos équipes réceptionnent votre colis et l'enregistrent avec un numéro de suivi unique." },
  { n: "03", title: "Nous vérifions", text: "Contrôle de conformité et de l'état du colis par l'équipe d'administration avant tout envoi." },
  { n: "04", title: "Nous expédions", text: "Le colis est confié à un transporteur partenaire (DHL, FedEx…) pour la traversée vers Madagascar." },
  { n: "05", title: "Vous recevez", text: "Suivez chaque étape en direct jusqu'à la livraison à Madagascar." },
];

const pin = (<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>);
const shield = (<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>);
const truck = (<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>);
const bell = (<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 21h4"/></svg>);

const features = [
  { icon: pin, title: "Suivi en temps réel", text: "Chaque changement de statut est visible instantanément dans votre espace." },
  { icon: shield, title: "Colis vérifiés", text: "Des équipes dédiées contrôlent le contenu et l'état avant l'expédition." },
  { icon: truck, title: "Transporteurs de confiance", text: "Nous travaillons avec des fournisseurs internationaux reconnus." },
  { icon: bell, title: "Toujours informé", text: "Sachez où se trouve votre colis, sans avoir à nous écrire." },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-navy/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" aria-label="SOAVA Global Logistics">
            <Image
              src="/logo.jpg"
              alt="SOAVA Global Logistics Inc. — Beyond Borders"
              width={1600}
              height={533}
              className="h-11 w-auto"
              preload
            />
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-navy/80 md:flex">
            <a href="#suivi" className="hover:text-brand-green">Suivi</a>
            <a href="#parcours" className="hover:text-brand-green">Parcours</a>
            <a href="#roles" className="hover:text-brand-green">Espaces</a>
            <a href="#avantages" className="hover:text-brand-green">Avantages</a>
          </nav>
          <a href="#suivi" className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white hover:brightness-110">
            Suivre un colis
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-soft to-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium ring-1 ring-navy/10">
                <span className="h-2 w-2 rounded-full bg-brand-green" /> Canada → Madagascar
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Votre colis, suivi
                <br />
                <span className="text-brand-red">de Montréal</span> à{" "}
                <span className="text-brand-green">Antananarivo</span>.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-navy/70">
                Achetez au Canada, nous nous occupons du reste : collecte, vérification, expédition.
                Et vous suivez chaque étape du voyage, en toute transparence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#suivi" className="rounded-full bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90">
                  Suivre mon colis
                </a>
                <a href="#parcours" className="rounded-full px-7 py-3.5 font-semibold ring-1 ring-navy/20 hover:bg-white">
                  Comment ça marche
                </a>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
                {[
                  ["5", "étapes suivies"],
                  ["2", "pays reliés"],
                  ["24/7", "suivi en ligne"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="text-2xl font-bold">{v}</dt>
                    <dd className="text-sm text-navy/60">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Route visual */}
            <div className="relative rounded-3xl bg-navy p-8 text-white shadow-2xl shadow-navy/30">
              <Image
                src="/emblem.png"
                alt=""
                width={540}
                height={500}
                className="absolute -right-4 -top-8 h-28 w-auto rotate-6 rounded-2xl bg-white p-2 shadow-xl"
              />
              <p className="text-sm uppercase tracking-widest text-white/60">Trajet type</p>
              <div className="mt-8 flex items-center justify-between text-center">
                <div>
                  <p className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-red text-sm font-bold">CA</p>
                  <p className="mt-1 font-semibold">Canada</p>
                  <p className="text-xs text-white/60">Point de collecte</p>
                </div>
                <div className="relative mx-3 h-px flex-1 border-t-2 border-dashed border-white/40">
                  <span
                    className="absolute -top-3 text-xl"
                    style={{ animation: "drive 4s ease-in-out infinite alternate" }}
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>
                  </span>
                </div>
                <div>
                  <p className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-green text-sm font-bold">MG</p>
                  <p className="mt-1 font-semibold">Madagascar</p>
                  <p className="text-xs text-white/60">Livraison</p>
                </div>
              </div>
              <ul className="mt-10 space-y-3 text-sm">
                {[
                  "Collecte au point relais",
                  "Vérification par nos équipes",
                  "Transporteur partenaire",
                  "Livraison finale",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-green text-[10px]">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tracker demo */}
        <section id="suivi" className="scroll-mt-16 py-20">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-center text-3xl font-bold">Suivez votre colis</h2>
            <p className="mt-3 text-center text-navy/70">
              Saisissez votre numéro de suivi pour voir où se trouve votre colis.
            </p>
            <div className="mt-10">
              <Tracker />
            </div>
            <p className="mt-4 text-center text-xs text-navy/50">Démonstration avec des données fictives.</p>
          </div>
        </section>

        {/* Journey */}
        <section id="parcours" className="scroll-mt-16 bg-soft py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-3xl font-bold">Le parcours de votre colis</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-navy/70">
              Cinq étapes simples, chacune visible dans votre espace client.
            </p>
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl bg-white p-6 ring-1 ring-navy/10">
                  <span className="text-3xl font-bold text-brand-red/80">{s.n}</span>
                  <h3 className="mt-3 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-navy/70">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="scroll-mt-16 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-3xl font-bold">Deux espaces, un seul objectif</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border-t-4 border-brand-green p-8 ring-1 ring-navy/10">
                <p className="text-sm font-semibold text-brand-green">ESPACE CLIENT</p>
                <h3 className="mt-2 text-2xl font-bold">Je commande, je suis</h3>
                <ul className="mt-5 space-y-3 text-navy/80">
                  <li>✓ Voir tous mes colis en un coup d&apos;œil</li>
                  <li>✓ Suivre l&apos;historique détaillé de chaque étape</li>
                  <li>✓ Connaître le transporteur et la date estimée</li>
                  <li>✓ Être informé de chaque changement de statut</li>
                </ul>
              </div>
              <div className="rounded-3xl border-t-4 border-brand-red p-8 ring-1 ring-navy/10">
                <p className="text-sm font-semibold text-brand-red">ESPACE ADMINISTRATEUR</p>
                <h3 className="mt-2 text-2xl font-bold">Je gère, je vérifie</h3>
                <ul className="mt-5 space-y-3 text-navy/80">
                  <li>✓ Enregistrer les colis reçus aux points de collecte</li>
                  <li>✓ Vérifier le contenu et l&apos;état des colis</li>
                  <li>✓ Assigner un transporteur (DHL, FedEx…)</li>
                  <li>✓ Mettre à jour les statuts tout au long du trajet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="avantages" className="scroll-mt-16 bg-navy py-20 text-white">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-3xl font-bold">Pourquoi SOAVA ?</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-xl bg-brand-green text-white">{f.icon}</span>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <Image src="/emblem.png" alt="" width={540} height={500} className="mx-auto h-24 w-auto" />
            <h2 className="mt-6 text-3xl font-bold">Prêt à voyager sans frontières ?</h2>
            <p className="mt-3 text-navy/70">
              Rejoignez SOAVA et suivez vos colis du Canada jusqu&apos;à Madagascar.
            </p>
            <a href="#suivi" className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3.5 font-semibold text-white hover:brightness-110">
              Essayer le suivi
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-navy/10 py-8 text-center text-sm text-navy/60">
        <Image
          src="/logo.jpg"
          alt="SOAVA Global Logistics"
          width={1600}
          height={533}
          className="mx-auto mb-3 h-10 w-auto"
        />
        © 2026 SOAVA Global Logistics Inc. — Beyond Borders
      </footer>
    </>
  );
}
