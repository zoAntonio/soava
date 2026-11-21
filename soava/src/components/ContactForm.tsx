"use client";

import { useState } from "react";

type Labels = {
  name: string;
  company: string;
  email: string;
  division: string;
  placeholder: string;
  other: string;
  message: string;
  submit: string;
  required: string;
  invalidEmail: string;
  sent: string;
  subject: string;
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "mt-1.5 block w-full rounded-md border border-navy/30 bg-white px-4 py-3 text-navy placeholder:text-navy/40";

// Pas de serveur d'envoi pour l'instant : le message est préparé dans l'application
// de messagerie du visiteur. Les champs sont validés et limités en longueur.
export default function ContactForm({
  labels,
  email,
  divisions,
}: {
  labels: Labels;
  email: string;
  divisions: string[];
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = labels.required;
    if (!v("email")) next.email = labels.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) next.email = labels.invalidEmail;
    if (!v("message")) next.message = labels.required;
    setErrors(next);
    setSent(false);
    if (Object.keys(next).length) return;

    const lines = [`${labels.name}: ${v("name")}`];
    if (v("company")) lines.push(`${labels.company}: ${v("company")}`);
    lines.push(`${labels.email}: ${v("email")}`);
    if (v("division")) lines.push(`${labels.division}: ${v("division")}`);
    lines.push("", v("message"));
    const body = lines.join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(labels.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-err`} role="alert" className="mt-1.5 text-sm font-semibold text-brand-red">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Errors) =>
    errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-err` } : {};

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="font-semibold text-navy">{labels.name} *</label>
        <input id="name" name="name" type="text" autoComplete="name" maxLength={120} className={field} {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="company" className="font-semibold text-navy">{labels.company}</label>
        <input id="company" name="company" type="text" autoComplete="organization" maxLength={120} className={field} />
      </div>
      <div>
        <label htmlFor="email" className="font-semibold text-navy">{labels.email} *</label>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={160} className={field} {...aria("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="division" className="font-semibold text-navy">{labels.division}</label>
        <select id="division" name="division" defaultValue="" className={field}>
          <option value="">{labels.placeholder}</option>
          {divisions.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
          <option value={labels.other}>{labels.other}</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="font-semibold text-navy">{labels.message} *</label>
        <textarea id="message" name="message" rows={6} maxLength={2000} className={field} {...aria("message")} />
        {err("message")}
      </div>
      <button type="submit" className="w-full rounded-md bg-navy px-7 py-3.5 font-semibold text-white hover:bg-navy/90 sm:w-auto">
        {labels.submit}
      </button>
      {sent && (
        <p role="status" className="border-l-4 border-brand-green bg-navy/[0.04] p-4 font-semibold text-navy">
          {labels.sent}
        </p>
      )}
    </form>
  );
}
