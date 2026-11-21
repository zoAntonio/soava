import Image from "next/image";
import Shell from "@/components/Shell";
import { Band, Eyebrow, TriBar, Values } from "@/components/Sections";
import { dict, routeHref, type Lang } from "@/lib/i18n";
import Link from "next/link";

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <Shell lang={lang} route="about">
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow light>{t.about.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[2.15rem] font-extrabold leading-[1.08] sm:text-5xl">{t.about.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{t.about.text}</p>
            <Link
              href={routeHref(lang, "contact")}
              className="mt-8 inline-block rounded-md bg-white px-7 py-3.5 font-semibold text-navy hover:bg-white/90"
            >
              {t.cta.contact}
            </Link>
          </div>
          <div className="relative rounded-xl bg-white p-8">
            <Image src="/emblem.png" alt="" width={240} height={240} className="mx-auto h-40 w-auto sm:h-52" />
            <span className="absolute bottom-4 left-4 rounded-md bg-navy px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
              {t.about.badge}
            </span>
          </div>
        </div>
        <TriBar />
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Eyebrow>{t.about.storyEyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-bold text-navy sm:text-4xl">{t.about.storyTitle}</h2>
          <div className="mt-10 grid gap-10 border-t-2 border-navy pt-10 md:grid-cols-2 md:gap-14">
            <div>
              <h3 className="text-xl font-bold text-navy">{t.about.vision}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">{t.about.visionText}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">{t.about.mission}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">{t.about.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      <Values lang={lang} />
      <Band lang={lang} />
    </Shell>
  );
}
