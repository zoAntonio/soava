"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

// QR code généré à partir de l'adresse réelle du site (marche en local comme en ligne).
export default function QrCard() {
  const [url, setUrl] = useState("");
  const [png, setPng] = useState("");

  useEffect(() => {
    const u = window.location.origin;
    setUrl(u);
    QRCode.toDataURL(u, {
      width: 640,
      margin: 1,
      errorCorrectionLevel: "H",
      color: { dark: "#0a1633", light: "#ffffff" },
    }).then(setPng);
  }, []);

  return (
    <div className="flex flex-col items-center rounded-3xl bg-white p-6 text-navy shadow-xl">
      <div className="grid h-52 w-52 place-items-center rounded-xl ring-1 ring-navy/10">
        {png ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={png} alt="QR code vers le site SOAVA" className="h-full w-full" />
        ) : (
          <span className="text-sm text-navy/40">…</span>
        )}
      </div>
      <p className="mt-3 break-all text-center font-mono text-xs text-navy/60">{url}</p>
      {png && (
        <a
          href={png}
          download="soava-qr.png"
          className="mt-4 rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white hover:brightness-110"
        >
          Télécharger le QR code
        </a>
      )}
    </div>
  );
}
