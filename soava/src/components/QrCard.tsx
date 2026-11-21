"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

// QR code généré à partir de l'adresse réelle du site (marche en local comme en ligne).
export default function QrCard({ alt, download }: { alt: string; download: string }) {
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
    <div className="flex flex-col items-center text-navy">
      <div className="grid h-52 w-52 place-items-center rounded-xl border border-line">
        {png ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={png} alt={alt} className="h-full w-full" />
        ) : (
          <span className="text-sm text-navy/40">…</span>
        )}
      </div>
      <p className="mt-3 break-all text-center font-mono text-xs text-body">{url}</p>
      {png && (
        <a
          href={png}
          download="soava-qr.png"
          className="mt-4 rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white hover:bg-cta/90"
        >
          {download}
        </a>
      )}
    </div>
  );
}
