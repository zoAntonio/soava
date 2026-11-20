import { company } from "@/lib/company";

// Fiche contact téléchargeable : s'ajoute directement au carnet d'adresses.
export async function GET() {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${company.name}`,
    `ORG:${company.name}`,
    `TITLE:${company.tagline}`,
    `EMAIL;TYPE=WORK:${company.email}`,
    `TEL;TYPE=WORK,VOICE:${company.canada.phone}`,
    `TEL;TYPE=WORK,VOICE:${company.madagascar.phone}`,
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
