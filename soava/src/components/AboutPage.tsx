import Link from "next/link";
import Shell from "@/components/Shell";
import { Band, Eyebrow, Heading, Values, Visual } from "@/components/Sections";
import { dict, routeHref, type Lang } from "@/lib/i18n";

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <Shell lang={lang} route="about">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-2 lg:gap-14">
        <div className="self-center">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <Heading as="h1" className="!text-[2.6rem] sm:!text-6xl">{t.about.title}</Heading>
          <p data-reveal className="mt-6 max-w-md leading-relaxed text-body">{t.about.text}</p>
          <Link
            href={routeHref(lang, "contact")}
            className="mt-8 inline-block rounded-full bg-cta px-8 py-3.5 text-sm font-semibold text-white hover:bg-cta/90"
          >
            {t.cta.contact}
          </Link>
        </div>
        <Visual src="/photos/ottawa.jpg" className="min-h-[22rem] lg:min-h-[32rem]">
          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
            {t.about.badge}
          </span>
        </Visual>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>{t.about.storyEyebrow}</Eyebrow>
            <Heading className="max-w-sm">{t.about.storyTitle}</Heading>
          </div>
          <div className="space-y-6 leading-relaxed text-body">
            <div>
              <h3 data-reveal className="text-lg font-medium text-navy">{t.about.vision}</h3>
              <p data-reveal className="mt-1">{t.about.visionText}</p>
            </div>
            <div>
              <h3 data-reveal className="text-lg font-medium text-navy">{t.about.mission}</h3>
              <p data-reveal className="mt-1">{t.about.missionText}</p>
            </div>
          </div>
        </div>
        <Visual src="/photos/avion.jpg" className="mt-12 min-h-64 sm:min-h-96" />
      </section>

      <Values lang={lang} />
      <Band lang={lang} />
    </Shell>
  );
}
