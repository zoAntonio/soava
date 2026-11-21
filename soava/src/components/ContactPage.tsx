import Shell, { icons, tel } from "@/components/Shell";
import ContactForm from "@/components/ContactForm";
import QrCard from "@/components/QrCard";
import { Eyebrow } from "@/components/Sections";
import { company } from "@/lib/company";
import { dict, type Lang } from "@/lib/i18n";

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const offices = [company.canada, company.madagascar];
  return (
    <Shell lang={lang} route="contact">
      <section className="border-b border-navy/15 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Eyebrow>{t.nav.contact}</Eyebrow>
          <h1 className="mt-3 text-[2.15rem] font-extrabold leading-[1.08] text-navy sm:text-5xl">{t.contactPage.title}</h1>
          <p className="mt-3 font-heading text-xl font-bold text-green-ink sm:text-2xl">{t.contactPage.subtitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy/75 sm:text-lg">{t.contactPage.text}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Eyebrow>{t.contactPage.locations}</Eyebrow>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {offices.map((o, i) => (
              <div key={o.label} className={`border-t-4 pt-4 ${i === 0 ? "border-brand-red" : "border-brand-green"}`}>
                <h2 className="text-xl font-bold text-navy">{o.label}</h2>
                <p className="text-sm text-navy/70">{o.city}</p>
                <p className="mt-2 text-navy/75">{o.address}</p>
                <a href={tel(o.phone)} className="mt-3 flex items-center gap-3 font-semibold text-navy hover:text-green-ink hover:underline">
                  {icons.phone}
                  {o.phone}
                </a>
              </div>
            ))}
          </div>
          <ul className="mt-8 flex flex-col gap-3 text-navy sm:flex-row sm:gap-10">
            <li className="flex items-center gap-3">
              {icons.mail}
              <a href={`mailto:${company.email}`} className="break-all font-semibold hover:underline">{company.email}</a>
            </li>
            <li className="flex items-center gap-3 text-navy/75">
              {icons.clock}
              {t.contactPage.hours}
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-navy py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-xl bg-white p-6 text-navy sm:p-8">
            <h2 className="text-2xl font-bold">{t.form.title}</h2>
            <p className="mt-1 font-heading font-bold text-green-ink">{t.form.subtitle}</p>
            <p className="mb-6 mt-3 text-sm text-navy/70">{t.form.note}</p>
            <ContactForm
              labels={t.form}
              email={company.email}
              divisions={t.divisions.items.map((d) => d.title)}
            />
          </div>

          <div className="self-start">
            <div className="rounded-xl bg-white p-6 text-center text-navy">
              <h2 className="text-xl font-bold">{t.contactPage.qrTitle}</h2>
              <p className="mx-auto mb-5 mt-2 max-w-xs text-sm text-navy/70">{t.contactPage.qrText}</p>
              <QrCard alt={t.contactPage.qrAlt} download={t.contactPage.qrDownload} />
            </div>
            <a
              href="/contact.vcf"
              className="mt-6 block rounded-md border-2 border-white/60 px-7 py-3.5 text-center font-semibold hover:border-white"
            >
              {t.contactPage.addToContacts}
            </a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
