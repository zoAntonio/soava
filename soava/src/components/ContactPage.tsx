import Shell, { icons, tel } from "@/components/Shell";
import QrCard from "@/components/QrCard";
import { Eyebrow, Heading } from "@/components/Sections";
import { addressLine, company } from "@/lib/company";
import { dict, type Lang } from "@/lib/i18n";

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const offices = company.offices;
  return (
    <Shell lang={lang} route="contact">
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16">
        <Eyebrow>{t.nav.contact}</Eyebrow>
        <Heading as="h1" className="!text-[2.6rem] sm:!text-6xl">{t.contactPage.title}</Heading>
        <p data-reveal className="mt-4 font-heading text-xl font-light text-green-ink sm:text-2xl">{t.contactPage.subtitle}</p>
        <p data-reveal className="mt-5 max-w-xl leading-relaxed text-body">{t.contactPage.text}</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-20">
        <Eyebrow>{t.contactPage.locations}</Eyebrow>
        <div className="mt-6 grid overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-3">
          {offices.map((o, i) => (
            <div key={o.label} className="border-b border-line p-6 last:border-b-0 sm:p-8 md:border-b-0 md:border-r md:last:border-r-0">
              <h2 className="text-xl font-medium text-navy">
                <span className={`mr-3 inline-block h-2.5 w-2.5 rounded-full ${["bg-brand-red", "bg-brand-green", "bg-navy"][i % 3]}`} aria-hidden />
                {o.label}
              </h2>
              <p data-reveal className="mt-3 text-body">{addressLine(o)}</p>
              <a href={tel(o.phone)} className="mt-3 flex items-center gap-3 font-semibold text-navy hover:text-green-ink hover:underline">
                {icons.phone}
                {o.phone}
              </a>
            </div>
          ))}
        </div>
        <ul className="mt-6 flex flex-col gap-3 text-navy sm:flex-row sm:gap-10">
          <li className="flex items-center gap-3">
            {icons.mail}
            <a href={`mailto:${company.email}`} className="break-all font-semibold hover:underline">{company.email}</a>
          </li>
          <li className="flex items-center gap-3 text-body">
            {icons.clock}
            {t.contactPage.hours}
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-24">
        <div className="rounded-2xl bg-tint p-5 sm:p-10">
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl bg-white p-6 text-center text-navy">
              <h2 className="text-xl font-medium">{t.contactPage.qrTitle}</h2>
              <p data-reveal className="mx-auto mb-5 mt-2 max-w-xs text-sm text-body">{t.contactPage.qrText}</p>
              <QrCard alt={t.contactPage.qrAlt} download={t.contactPage.qrDownload} />
            </div>
            <a
              href="/contact.vcf"
              className="mt-5 block rounded-full bg-cta px-7 py-3.5 text-center text-sm font-semibold text-white hover:bg-cta/90"
            >
              {t.contactPage.addToContacts}
            </a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
