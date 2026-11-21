import { company } from "@/lib/company";

// Fiche contact téléchargeable : s'ajoute directement au carnet d'adresses.
export async function GET() {
  const digits = (p: string) => `+1${p.replace(/\D/g, "")}`;
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${company.name}`,
    `ORG:${company.name}`,
    `TITLE:${company.tagline}`,
    `EMAIL;TYPE=WORK:${company.email}`,
    ...company.offices.flatMap((o) => [
      `TEL;TYPE=WORK,VOICE:${digits(o.phone)}`,
      `ADR;TYPE=WORK:;;${o.street};${o.city};${o.region};${o.postal};Canada`,
    ]),
    "END:VCARD",
    "",
  ].join("\r\n");

  return new Response(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="soava.vcf"',
    },
  });
}
