import Image from "next/image";
import Link from "next/link";
import LangSync from "@/components/LangSync";
import RevealInit from "@/components/RevealInit";
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

function Flag({ lang }: { lang: Lang }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 rounded-full" aria-hidden>
      <defs>
        <clipPath id={`flag-${lang}`}><circle cx="12" cy="12" r="12" /></clipPath>
      </defs>
      <g clipPath={`url(#flag-${lang})`}>
        {lang === "fr" ? (
          <>
            <rect width="8" height="24" fill="#0055a4" />
            <rect x="8" width="8" height="24" fill="#ffffff" />
            <rect x="16" width="8" height="24" fill="#ef4135" />
          </>
        ) : (
          <>
            <rect width="24" height="24" fill="#012169" />
            <path d="M0 0L24 24M24 0L0 24" stroke="#ffffff" strokeWidth="4.5" />
            <path d="M0 0L24 24M24 0L0 24" stroke="#c8102e" strokeWidth="1.6" />
            <path d="M12 0V24M0 12H24" stroke="#ffffff" strokeWidth="7" />
            <path d="M12 0V24M0 12H24" stroke="#c8102e" strokeWidth="4" />
          </>
        )}
      </g>
    </svg>
  );
}

const langNames: Record<Lang, string> = { fr: "Français", en: "English" };

function LangSwitch({ lang, route, label }: { lang: Lang; route: Route; label: string }) {
  return (
    <details className="group relative">
      <summary
        aria-label={`${label} : ${langNames[lang]}`}
        className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-navy/25 bg-white px-3 py-2 text-sm font-semibold text-navy hover:border-navy [&::-webkit-details-marker]:hidden"
      >
        <Flag lang={lang} />
        {lang.toUpperCase()}
        <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <ul className="absolute right-0 top-12 z-40 w-28 overflow-hidden rounded-xl border border-navy/15 bg-white text-sm font-semibold text-navy shadow-lg">
        {(["fr", "en"] as const).map((l) => (
          <li key={l}>
            <Link
              href={routeHref(l, route)}
              hrefLang={l}
              lang={l}
              aria-current={lang === l ? "true" : undefined}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-navy/5 ${lang === l ? "bg-tint" : ""}`}
            >
              <Flag lang={l} />
              <span aria-label={langNames[l]}>{l.toUpperCase()}</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
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
      <RevealInit />
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {t.skip}
      </a>

      <header className="sticky top-3 z-30 px-3 pt-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl bg-tint px-4 py-2.5 shadow-sm sm:px-6">
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
          <Link href={contactHref} className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 md:inline-block">
            {t.cta.contact}
          </Link>
          <details className="relative md:hidden">
            <summary
              aria-label={t.menuOpen}
              className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full bg-navy text-white [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Menu" className="absolute right-0 top-12 w-56 overflow-hidden rounded-xl border border-navy/15 bg-white text-sm font-semibold text-navy shadow-lg">
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

      <footer className="px-3 pb-6 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-navy text-white">
          <div className="grid gap-10 p-6 text-sm text-white/75 sm:p-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-0">
            <div className="md:border-r md:border-white/15 md:pr-10">
              <span className="inline-block rounded-lg bg-white px-3 py-2">
                <Image src="/logo.jpg" alt={t.logoAlt} width={1600} height={533} className="h-9 w-auto" />
              </span>
              <p className="mt-4 max-w-xs">{t.footer.tagline}</p>
            </div>
            <div className="md:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{t.footer.offices}</p>
              <ul className="mt-4 space-y-4">
                {offices.map((o) => (
                  <li key={o.label}>
                    <p className="font-semibold text-white">{o.label}</p>
                    <p>{o.city}</p>
                    <a href={tel(o.phone)} className="hover:underline">{o.phone}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{t.footer.navigate}</p>
              <ul className="mt-4 space-y-3">
                {nav.map((n) => (
                  <li key={n.key}><Link href={n.href} className="hover:text-white hover:underline">{n.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="border-t border-white/15 px-6 py-4 text-xs text-white/55 sm:px-10">
            © 2026 {company.name}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
