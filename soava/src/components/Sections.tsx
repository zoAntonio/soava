import Link from "next/link";
import { dict, routeHref, type Lang } from "@/lib/i18n";

export const num = (i: number) => String(i + 1).padStart(2, "0");

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.18em] sm:text-sm ${light ? "text-brand-green" : "text-green-ink"}`}>
      {children}
    </p>
  );
}

export function TriBar() {
  return (
    <div className="mx-auto flex h-1.5 max-w-6xl">
      <span className="flex-1 bg-brand-red" />
      <span className="flex-1 bg-brand-green" />
    </div>
  );
}

export function Divisions({ lang }: { lang: Lang }) {
  const t = dict[lang].divisions;
  return (
    <section id="poles" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-navy sm:text-4xl">{t.title}</h2>
        <ol className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
          {t.items.map((d, i) => (
            <li key={d.title} className="border-t-4 border-navy bg-white pt-5">
              <span className="font-heading text-sm font-bold text-green-ink">{num(i)}</span>
              <h3 className="mt-2 text-xl font-bold text-navy">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">{d.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Values({ lang }: { lang: Lang }) {
  const t = dict[lang].values;
  return (
    <section id="valeurs" className="scroll-mt-20 border-y border-navy/15 bg-navy/[0.03] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-navy sm:text-4xl">{t.title}</h2>
        <ol className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2">
          {t.items.map((v, i) => (
            <li key={v.title} className="rounded-md border border-navy/15 bg-white p-6">
              <span className="font-heading text-sm font-bold text-brand-red">{num(i)}</span>
              <h3 className="mt-2 text-xl font-bold text-navy">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-navy/75">{v.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Band({ lang }: { lang: Lang }) {
  const t = dict[lang].band;
  return (
    <section className="bg-navy py-14 text-center text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-4xl">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">{t.text}</p>
        <Link
          href={routeHref(lang, "contact")}
          className="mt-8 inline-block rounded-md bg-white px-7 py-3.5 font-semibold text-navy hover:bg-white/90"
        >
          {t.button}
        </Link>
      </div>
    </section>
  );
}
