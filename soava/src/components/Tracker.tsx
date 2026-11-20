"use client";

import { useState } from "react";

type Step = { label: string; place: string; date: string };

const STEPS = [
  "Colis collecté",
  "Vérifié par l'équipe",
  "Remis au transporteur",
  "En transit international",
  "Dédouanement Madagascar",
  "Livré",
];

type Parcel = {
  code: string;
  item: string;
  carrier: string;
  progress: number;
  steps: Step[];
};

const PARCELS: Parcel[] = [
  {
    code: "SOA-2026-0142",
    item: "Ordinateur portable",
    carrier: "DHL Express",
    progress: 4,
    steps: [
      { label: STEPS[0], place: "Point de collecte · Montréal, QC", date: "12 nov. · 10:24" },
      { label: STEPS[1], place: "Entrepôt SOAVA · Montréal, QC", date: "13 nov. · 15:02" },
      { label: STEPS[2], place: "DHL · Aéroport de Mirabel", date: "14 nov. · 08:40" },
      { label: STEPS[3], place: "Vol vers Antananarivo (via Paris)", date: "16 nov. · 22:15" },
      { label: STEPS[4], place: "Antananarivo, Madagascar", date: "Prévu 21 nov." },
      { label: STEPS[5], place: "Adresse du destinataire", date: "Prévu 23 nov." },
    ],
  },
  {
    code: "SOA-2026-0087",
    item: "Vêtements & chaussures",
    carrier: "FedEx",
    progress: 6,
    steps: [
      { label: STEPS[0], place: "Point de collecte · Laval, QC", date: "28 oct. · 14:10" },
      { label: STEPS[1], place: "Entrepôt SOAVA · Montréal, QC", date: "29 oct. · 11:30" },
      { label: STEPS[2], place: "FedEx · Montréal", date: "30 oct. · 09:05" },
      { label: STEPS[3], place: "Transit via Dubaï", date: "02 nov. · 03:20" },
      { label: STEPS[4], place: "Antananarivo, Madagascar", date: "08 nov. · 13:45" },
      { label: STEPS[5], place: "Antananarivo · remis au client", date: "10 nov. · 16:30" },
    ],
  },
];

export default function Tracker() {
  const [input, setInput] = useState("SOA-2026-0142");
  const [parcel, setParcel] = useState<Parcel | null>(PARCELS[0]);
  const [notFound, setNotFound] = useState(false);

  function search(code: string) {
    const found = PARCELS.find((p) => p.code === code.trim().toUpperCase());
    setParcel(found ?? null);
    setNotFound(!found);
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-navy/10 ring-1 ring-navy/10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(input);
        }}
        className="flex flex-col gap-3 border-b border-navy/10 p-5 sm:flex-row sm:p-6"
      >
        <label className="sr-only" htmlFor="code">
          Numéro de suivi
        </label>
        <input
          id="code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex. SOA-2026-0142"
          className="flex-1 rounded-xl border border-navy/15 bg-soft px-4 py-3 font-mono text-sm outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        />
        <button className="rounded-xl bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy/90">
          Suivre mon colis
        </button>
      </form>

      <div className="flex flex-wrap items-center gap-2 px-5 pt-3 text-xs text-navy/60 sm:px-6">
        Essayez :
        {PARCELS.map((p) => (
          <button
            key={p.code}
            type="button"
            onClick={() => {
              setInput(p.code);
              search(p.code);
            }}
            className="rounded-full bg-soft px-3 py-1 font-mono hover:bg-navy/10"
          >
            {p.code}
          </button>
        ))}
      </div>

      {notFound && (
        <p className="p-6 font-medium text-brand-red">
          Aucun colis trouvé pour ce numéro. Vérifiez la saisie.
        </p>
      )}

      {parcel && (
        <div className="p-5 sm:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-sm text-navy/60">{parcel.item}</p>
              <p className="font-mono font-semibold">{parcel.code}</p>
            </div>
            <span className="rounded-full bg-brand-green/10 px-3 py-1 text-sm font-semibold text-brand-green">
              {parcel.steps[parcel.progress - 1].label}
            </span>
            <span className="text-sm text-navy/60">
              Transporteur : <b className="text-navy">{parcel.carrier}</b>
            </span>
          </div>

          <ol key={parcel.code} className="relative ml-3 space-y-5 border-l-2 border-navy/10">
            {parcel.steps.map((s, i) => {
              const done = i < parcel.progress;
              const current = i === parcel.progress - 1 && parcel.progress < 6;
              return (
                <li key={s.label} style={{ "--d": i * 90 + 100 + "ms" } as React.CSSProperties} className="step-in relative pl-6">
                  <span
                    className={`absolute -left-[11px] top-0.5 grid h-5 w-5 place-items-center rounded-full text-[10px] text-white ${
                      done ? "bg-brand-green" : "bg-navy/15"
                    } ${current ? "pulse-ring" : ""}`}
                  >
                    {done ? "✓" : ""}
                  </span>
                  <p className={`font-semibold ${done ? "" : "text-navy/40"}`}>{s.label}</p>
                  <p className={`text-sm ${done ? "text-navy/70" : "text-navy/40"}`}>
                    {s.place} · {s.date}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}
