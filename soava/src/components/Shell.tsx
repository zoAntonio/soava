import Image from "next/image";
import Link from "next/link";
import LangSync from "@/components/LangSync";
import { company } from "@/lib/company";
import { dict, routeHref, type Lang, type Route } from "@/lib/i18n";

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

export const icons = {
  mail: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  phone: icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />),
  clock: icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  card: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M15 10h3M15 13h3" /></>),
};

export const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;

function LangSwitch({ lang, route, label }: { lang: Lang; route: Route; label: string }) {
  const base = "rounded-md px-2.5 py-1.5 text-sm font-bold";
  const on = "bg-navy text-white";
  const off = "text-navy hover:bg-navy/5";
  return (
    <div role="group" aria-label={label} className="flex items-center rounded-md border border-navy/20 p-0.5">
      {(["fr", "en"] as const).map((l) => (
        <Link
          key={l}
          href={routeHref(l, route)}
          hrefLang={l}
          lang={l}
          aria-current={lang === l ? "true" : undefined}
          className={`${base} ${lang === l ? on : off}`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export default function Shell({
  lang,
  route,
  children,
}: {
  lang: Lang;
  route: Route;
  children: React.ReactNode;
}) {
  const t = dict[lang];
  const offices = [company.canada, company.madagascar];
  const nav = [
    { key: "poles", href: routeHref(lang, "home", "#poles"), label: t.nav.poles },
    { key: "about", href: routeHref(lang, "about"), label: t.nav.about },
    { key: "contact", href: routeHref(lang, "contact"), label: t.nav.contact },
  ];
  const contactHref = routeHref(lang, "contact");

  return (
    <>
      <LangSync lang={t.htmlLang} />
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {t.skip}
      </a>

      <header className="sticky top-0 z-30 border-b border-navy/15 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
          <Link href={routeHref(lang, "home")} aria-label={t.logoAlt} className="shrink-0">
            <Image src="/logo.jpg" alt={t.logoAlt} width={1600} height={533} className="h-9 w-auto sm:h-11" preload />
          </Link>
          <nav aria-label="Navigation" className="ml-auto mr-4 hidden gap-8 text-sm font-semibold text-navy md:flex">
            {nav.map((n) => (
              <Link
                key={n.key}
                href={n.href}
                aria-current={n.key === route ? "page" : undefined}
                className={`hover:text-green-ink hover:underline hover:underline-offset-4 ${n.key === route ? "underline decoration-brand-red decoration-2 underline-offset-8" : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <LangSwitch lang={lang} route={route} label={t.switchLabel} />
          <Link href={contactHref} className="hidden rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 md:inline-block">
            {t.cta.contact}
          </Link>
          <details className="relative md:hidden">
            <summary
              aria-label={t.menuOpen}
              className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md bg-navy text-white [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Menu" className="absolute right-0 top-12 w-56 border border-navy/20 bg-white text-sm font-semibold text-navy shadow-lg">
              {nav.map((n) => (
                <Link key={n.key} href={n.href} className="block border-b border-navy/10 px-5 py-3.5 last:border-0 active:bg-navy/5">
                  {n.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main id="contenu">{children}</main>

      <footer className="border-t border-navy/15 pb-20 md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-navy/75 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image src="/logo.jpg" alt={t.logoAlt} width={1600} height={533} className="h-10 w-auto" />
            <p className="mt-3 max-w-xs">{t.footer.tagline}</p>
          </div>
          <div>
            <p className="font-bold text-navy">{t.footer.offices}</p>
            <ul className="mt-2 space-y-1">
              {offices.map((o) => (
                <li key={o.label}>{o.label} · {o.city}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-navy">{t.footer.navigate}</p>
            <ul className="mt-2 space-y-1">
              {nav.map((n) => (
                <li key={n.key}><Link href={n.href} className="hover:underline">{n.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <p className="border-t border-navy/15 px-5 py-4 text-center text-xs text-navy/60 sm:px-6">
          © 2026 {company.name}. {t.footer.rights}
        </p>
      </footer>

      <nav
        aria-label={t.bar.label}
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy/20 bg-white text-xs font-semibold text-navy md:hidden"
      >
        <a href={tel(company.canada.phone)} className="flex flex-col items-center gap-1 py-2.5 active:bg-navy/5">
          <span className="text-green-ink">{icons.phone}</span>{t.bar.call}
        </a>
        <a href={`mailto:${company.email}`} className="flex flex-col items-center gap-1 py-2.5 active:bg-navy/5">
          <span className="text-navy">{icons.mail}</span>{t.bar.email}
        </a>
        <a href="/contact.vcf" className="flex flex-col items-center gap-1 py-2.5 active:bg-navy/5">
          <span className="text-navy">{icons.card}</span>{t.bar.contact}
        </a>
      </nav>
    </>
  );
}
