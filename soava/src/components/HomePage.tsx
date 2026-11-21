import Image from "next/image";
import Link from "next/link";
import Shell from "@/components/Shell";
import { Band, Divisions, Eyebrow, Heading, Visual } from "@/components/Sections";
import { dict, routeHref, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <Shell lang={lang} route="home">
      {/* Premier écran, plein écran, sous l'en-tête flottant */}
      <section className="relative -mt-[5.25rem] flex min-h-[100svh] items-end overflow-hidden bg-navy text-white sm:-mt-[5.5rem]">
        <Image src="/photos/hero.jpg" alt="" fill priority quality={90} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy/60" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 pb-12 pt-28 sm:px-6 sm:pb-16 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-14">
          <div>
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">{t.hero.eyebrow}</p>
            <Heading as="h1" light className="!text-[2.6rem] sm:!text-6xl lg:!text-[4.25rem]">{t.hero.title}</Heading>
            <p data-reveal className="mt-6 max-w-md leading-relaxed text-white/85">{t.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row">
              <Link href="#poles" className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold text-navy hover:bg-white/90">
                {t.cta.divisions}
              </Link>
              <Link
                href={routeHref(lang, "about")}
                className="rounded-full border border-white/60 px-8 py-3.5 text-center text-sm font-semibold text-white hover:border-white"
              >
                {t.nav.about}
              </Link>
            </div>
          </div>

          <div data-reveal className="rounded-2xl border border-white/30 bg-navy/55 p-5 backdrop-blur-md sm:p-6 lg:ml-auto lg:max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">{t.hero.tag}</p>
            <h2 className="mt-1.5 text-xl font-medium">{t.hero.featured}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{t.hero.featuredText}</p>
            <a href="https://soavagroup.com" className="mt-3 inline-block border-b-2 border-brand-red pb-0.5 text-sm font-semibold hover:text-white/80">
              soavagroup.com
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-1.5" aria-hidden>
          <span className="flex-1 bg-brand-red" />
          <span className="flex-1 bg-brand-green" />
        </div>
      </section>

      {/* Approche */}
      <section className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 sm:py-24">
        <Eyebrow>{t.about.dna}</Eyebrow>
        <p data-reveal className="mt-5 font-heading text-2xl font-light leading-snug text-navy sm:text-4xl">{t.about.dnaText}</p>
        <Link href={routeHref(lang, "about")} className="mt-8 inline-block border-b-2 border-brand-red pb-0.5 text-sm font-semibold text-navy hover:text-green-ink">
          {t.cta.learnMore}
        </Link>
      </section>

      {/* Valeurs en accordéon, sur panneau sombre */}
      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-24">
        <div className="grid overflow-hidden rounded-2xl bg-navy text-white lg:grid-cols-2">
          <div className="p-6 sm:p-12">
            <Eyebrow light>{t.values.eyebrowHome}</Eyebrow>
            <Heading light>{t.values.title}</Heading>
            <div className="mt-8 border-t border-white/20">
              {t.values.items.map((v, i) => (
                <details key={v.title} name="valeurs" open={i === 0} className="group border-b border-white/20">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg text-white/70 group-open:text-white [&::-webkit-details-marker]:hidden">
                    {v.title}
                    <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/40 text-sm leading-none group-open:hidden">+</span>
                    <span aria-hidden className="hidden h-6 w-6 shrink-0 place-items-center rounded-full border border-white/40 text-sm leading-none group-open:grid">×</span>
                  </summary>
                  <p data-reveal className="pb-5 text-sm leading-relaxed text-white/75">{v.text}</p>
                </details>
              ))}
            </div>
          </div>
          <Visual src="/photos/fenetre.jpg" className="min-h-56 rounded-none lg:min-h-full" />
        </div>
      </section>

      <Divisions lang={lang} />
      <Band lang={lang} />
    </Shell>
  );
}
