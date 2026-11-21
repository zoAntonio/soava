import Image from "next/image";
import Link from "next/link";
import Shell from "@/components/Shell";
import { Band, Divisions, Eyebrow, TriBar, num } from "@/components/Sections";
import { dict, routeHref, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <Shell lang={lang} route="home">
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-14">
          <div>
            <Eyebrow light>{t.hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[2.15rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.3rem]">{t.hero.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{t.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row">
              <Link href="#poles" className="rounded-md bg-white px-7 py-3.5 text-center font-semibold text-navy hover:bg-white/90">
                {t.cta.divisions}
              </Link>
              <Link
                href={routeHref(lang, "about")}
                className="rounded-md border-2 border-white/60 px-7 py-3.5 text-center font-semibold text-white hover:border-white"
              >
                {t.nav.about}
              </Link>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 text-navy sm:p-8">
            <Image src="/emblem.png" alt="" width={120} height={120} className="h-16 w-auto" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-green-ink">{t.hero.tag}</p>
            <h2 className="mt-2 text-2xl font-bold">{t.hero.featured}</h2>
            <p className="mt-3 leading-relaxed text-navy/75">{t.hero.featuredText}</p>
            <a href="https://soavaexpress.com" className="mt-5 inline-block border-b-2 border-brand-red pb-0.5 font-semibold hover:text-green-ink">
              soavaexpress.com
            </a>
          </div>
        </div>
        <TriBar />
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Eyebrow>{t.about.dna}</Eyebrow>
          <p className="mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug text-navy sm:text-4xl">{t.about.dnaText}</p>
          <Link
            href={routeHref(lang, "about")}
            className="mt-8 inline-block border-b-2 border-brand-red pb-0.5 font-semibold text-navy hover:text-green-ink"
          >
            {t.cta.learnMore}
          </Link>
        </div>
      </section>

      <Divisions lang={lang} />

      <section className="bg-navy py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Eyebrow light>{t.values.eyebrowHome}</Eyebrow>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.items.map((v, i) => (
              <li key={v.title} className={`border-t-4 pt-4 ${i % 2 === 0 ? "border-brand-red" : "border-brand-green"}`}>
                <span className="font-heading text-sm font-bold text-white/60">{num(i)}</span>
                <h3 className="mt-2 text-lg font-bold">{v.title}</h3>
              </li>
            ))}
          </ol>
          <Link
            href={routeHref(lang, "about")}
            className="mt-10 inline-block border-b-2 border-white/60 pb-0.5 font-semibold hover:border-white"
          >
            {t.cta.learnMore}
          </Link>
        </div>
      </section>

      <Band lang={lang} />
    </Shell>
  );
}
