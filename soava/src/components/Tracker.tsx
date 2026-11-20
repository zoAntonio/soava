"use client";

import { useState } from "react";

type Step = { label: string; place: string; date: string };

const STEPS = [
  "Colis collecté",
  "Vérifié par l'équipe",
  "Remis au transporteur",
  "En transit international",
  "Dédouanement à Madagascar",
  "Livré",
];

type Parcel = {
  code: string;
  item: string;
  carrier: string;
  progress: number;
  steps: Step[];
};

// Exemples de démonstration, pas de vrais colis.
const PARCELS: Parcel[] = [
  {
    code: "SOA-2026-0142",
    item: "Ordinateur portable",
    carrier: "Transporteur partenaire",
    progress: 4,
    steps: [
      { label: STEPS[0], place: "Point de collecte, Montréal", date: "12 nov. 10:24" },
      { label: STEPS[1], place: "Entrepôt SOAVA, Montréal", date: "13 nov. 15:02" },
      { label: STEPS[2], place: "Aéroport de Mirabel", date: "14 nov. 08:40" },
      { label: STEPS[3], place: "Vol vers Antananarivo", date: "16 nov. 22:15" },
      { label: STEPS[4], place: "Antananarivo", date: "Prévu 21 nov." },
      { label: STEPS[5], place: "Adresse du destinataire", date: "Prévu 23 nov." },
    ],
  },
  {
    code: "SOA-2026-0087",
    item: "Vêtements et chaussures",
    carrier: "Transporteur partenaire",
    progress: 6,
    steps: [
      { label: STEPS[0], place: "Point de collecte, Laval", date: "28 oct. 14:10" },
      { label: STEPS[1], place: "Entrepôt SOAVA, Montréal", date: "29 oct. 11:30" },
      { label: STEPS[2], place: "Montréal", date: "30 oct. 09:05" },
      { label: STEPS[3], place: "En vol", date: "02 nov. 03:20" },
      { label: STEPS[4], place: "Antananarivo", date: "08 nov. 13:45" },
      { label: STEPS[5], place: "Remis au destinataire", date: "10 nov. 16:30" },
    ],
  },
];

export default function Tracker() {
  const [input, setInput] = useState("");
  const [parcel, setParcel] = useState<Parcel | null>(PARCELS[0]);
  const [error, setError] = useState("");

  function search(code: string) {
    const clean = code.trim().toUpperCase();
    if (!clean) {
      setError("Saisissez un numéro de suivi.");
      return;
    }
    const found = PARCELS.find((p) => p.code === clean);
    if (!found) {
      setParcel(null);
      setError("Aucun colis ne correspond à ce numéro. Vérifiez la saisie et réessayez.");
      return;
    }
    setError("");
    setParcel(found);
  }

  return (
    <section aria-labelledby="suivi-titre" className="rounded-xl border border-navy/20 bg-white">
      <div className="border-b border-navy/15 p-5 sm:p-6">
        <h2 id="suivi-titre" className="text-lg font-bold text-navy">
          Suivre un colis
        </h2>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            search(input);
          }}
          className="mt-4 flex flex-col gap-3 sm:flex-row"
        >
          <label className="sr-only" htmlFor="code">
            Numéro de suivi
          </label>
          <input
            id="code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="SOA-2026-0142"
            aria-invalid={!!error}
            aria-describedby={error ? "code-erreur" : undefined}
            className="min-w-0 flex-1 rounded-md border border-navy/30 px-4 py-3 font-mono text-sm outline-none focus:border-brand-green"
          />
          <button className="rounded-md bg-navy px-6 py-3 font-semibold text-white hover:bg-navy/90">
            Rechercher
          </button>
        </form>
        {error && (
          <p id="code-erreur" role="alert" className="mt-3 text-sm font-medium text-brand-red">
            {error}
          </p>
        )}
        <p className="mt-3 text-xs text-navy/60">
          Exemple de suivi avec des données fictives. Essayez{" "}
          {PARCELS.map((p, i) => (
            <span key={p.code}>
              <button
                type="button"
                onClick={() => {
                  setInput(p.code);
                  search(p.code);
                }}
                className="font-mono underline underline-offset-2 hover:text-navy"
              >
                {p.code}
              </button>
              {i < PARCELS.length - 1 ? " ou " : "."}
            </span>
          ))}
        </p>
      </div>

      {parcel && (
        <div className="p-5 sm:p-6">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <div>
              <p className="text-sm text-navy/60">{parcel.item}</p>
              <p className="font-mono font-semibold">{parcel.code}</p>
            </div>
            <p className="rounded-md bg-brand-green px-3 py-1 text-sm font-semibold text-white">
              {parcel.steps[parcel.progress - 1].label}
            </p>
          </div>

          <ol key={parcel.code} className="ml-2.5 space-y-5 border-l-2 border-navy/15">
            {parcel.steps.map((s, i) => {
              const done = i < parcel.progress;
              return (
                <li
                  key={s.label}
                  style={{ "--d": i * 70 + "ms" } as React.CSSProperties}
                  className="step-in relative pl-6"
                >
                  <span
                    aria-hidden
                    className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 ${
                      done ? "border-brand-green bg-brand-green" : "border-navy/25 bg-white"
                    }`}
                  />
                  <p className={`font-semibold ${done ? "text-navy" : "text-navy/45"}`}>
                    {s.label}
                    <span className="sr-only">{done ? " (terminé)" : " (à venir)"}</span>
                  </p>
                  <p className={`text-sm ${done ? "text-navy/70" : "text-navy/45"}`}>
                    {s.place}, {s.date}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </section>
  );
}
