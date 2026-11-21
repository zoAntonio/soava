import Image from "next/image";
import Link from "next/link";
import { dict, routeHref, type Lang } from "@/lib/i18n";

export const num = (i: number) => String(i + 1).padStart(2, "0");

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p data-reveal className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-brand-green" : "text-green-ink"}`}>
      {children}
    </p>
  );
}

export function Heading({
  children,
  as: Tag = "h2",
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  as?: "h1" | "h2";
  light?: boolean;
  className?: string;
}) {
  return (
    <Tag data-reveal className={`mt-3 text-[2.4rem] font-light leading-[1.05] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-navy"} ${className}`}>
      {children}
    </Tag>
  );
}

// Emplacement de photo. Passer `src` pour afficher une vraie photo (public/photos/...).
// Sans `src`, un panneau aux couleurs de SOAVA tient la place.
export function Visual({
  src,
  alt = "",
  className = "",
  children,
}: {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div data-reveal className={`relative overflow-hidden rounded-2xl bg-tint ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      ) : (
        <>
          <Image src="/emblem.png" alt="" width={320} height={320} className="absolute left-1/2 top-[40%] h-2/5 max-h-60 w-auto -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute inset-x-0 bottom-0 flex h-1.5">
            <span className="flex-1 bg-brand-red" />
            <span className="flex-1 bg-brand-green" />
          </div>
        </>
      )}
      {children}
    </div>
  );
}

export function Divisions({ lang }: { lang: Lang }) {
  const t = dict[lang].divisions;
  return (
    <section id="poles" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-14 sm:px-6 sm:py-24">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <Heading className="max-w-3xl">{t.title}</Heading>
      <div className="mt-10 grid overflow-hidden rounded-2xl border border-navy/15 bg-white sm:mt-14 md:grid-cols-[1fr_1.7fr]">
        <Visual className="min-h-56 rounded-none md:min-h-full" />
        <ol className="divide-y divide-navy/15">
          {t.items.map((d, i) => (
            <li key={d.title} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }} className="p-6 sm:p-8">
              <span className="text-xs text-navy/50">{num(i)}</span>
              <h3 className="mt-3 text-xl font-medium text-navy">{d.title}</h3>
              <p className="mt-2 leading-relaxed text-navy/70">{d.text}</p>
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
    <section id="valeurs" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-14 sm:px-6 sm:py-24">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <Heading className="max-w-xl">{t.title}</Heading>
      <div className="mt-10 grid overflow-hidden rounded-2xl border border-navy/15 bg-white sm:mt-14 md:grid-cols-[1fr_1.9fr]">
        <Visual className="min-h-56 rounded-none md:min-h-full" />
        <ol className="grid sm:grid-cols-2">
          {t.items.map((v, i) => (
            <li key={v.title} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }} className="border-b border-navy/15 p-6 last:border-b-0 sm:p-8 sm:odd:border-r sm:[&:nth-last-child(2)]:border-b-0">
              <span className="text-xs text-navy/50">{num(i)}</span>
              <h3 className="mt-3 text-xl font-medium text-navy">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{v.text}</p>
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
    <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-24">
      <div data-reveal className="rounded-2xl bg-tint px-6 py-16 text-center sm:py-24">
        <h2 className="mx-auto max-w-2xl text-[2.4rem] font-light leading-[1.05] text-navy sm:text-5xl lg:text-6xl">{t.title}</h2>
        <p className="mx-auto mt-5 max-w-md text-navy/70">{t.text}</p>
        <Link
          href={routeHref(lang, "contact")}
          className="mt-8 inline-block rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white hover:bg-navy/90"
        >
          {t.button}
        </Link>
      </div>
    </section>
  );
}
