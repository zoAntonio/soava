import Link from "next/link";
import Shell from "@/components/Shell";
import { Band, Divisions, Eyebrow, Heading, Visual } from "@/components/Sections";
import { dict, routeHref, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <Shell lang={lang} route="home">
      {/* Premier écran */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-2 lg:gap-14">
        <div className="self-center">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <Heading as="h1" className="!text-[2.6rem] sm:!text-6xl">{t.hero.title}</Heading>
          <p data-reveal className="mt-6 max-w-md leading-relaxed text-navy/70">{t.hero.text}</p>
          <div className="mt-8 flex flex-col gap-3 min-[460px]:flex-row">
            <Link href="#poles" className="rounded-full bg-navy px-8 py-3.5 text-center text-sm font-semibold text-white hover:bg-navy/90">
              {t.cta.divisions}
            </Link>
            <Link
              href={routeHref(lang, "about")}
              className="rounded-full border border-navy/30 px-8 py-3.5 text-center text-sm font-semibold text-navy hover:border-navy"
            >
              {t.nav.about}
            </Link>
          </div>
        </div>

        <Visual className="min-h-[26rem] lg:min-h-[34rem]">
          <div className="absolute inset-x-4 bottom-6 rounded-xl bg-white/95 p-5 text-navy sm:inset-x-6 sm:p-6">
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.18em] text-green-ink">{t.hero.tag}</p>
            <h2 className="mt-1.5 text-xl font-medium">{t.hero.featured}</h2>
            <p data-reveal className="mt-2 text-sm leading-relaxed text-navy/70">{t.hero.featuredText}</p>
            <a href="https://soavagroup.com" className="mt-3 inline-block border-b-2 border-brand-red pb-0.5 text-sm font-semibold hover:text-green-ink">
              soavagroup.com
            </a>
          </div>
        </Visual>
      </section>

      {/* Approche */}
      <section className="mx-auto max-w-4xl px-5 pb-14 text-center sm:px-6 sm:pb-24">
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
          <Visual className="min-h-56 rounded-none bg-white/10 lg:min-h-full" />
        </div>
      </section>

      <Divisions lang={lang} />
      <Band lang={lang} />
    </Shell>
  );
}
