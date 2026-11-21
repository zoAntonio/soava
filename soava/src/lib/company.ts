// Informations de l'entreprise. Seul fichier à modifier pour mettre à jour
// les contacts affichés sur le site et dans la fiche contact (.vcf).
// Le courriel et les adresses sont les coordonnées réelles de Soava.

type Office = {
  label: string;
  street: string;
  city: string;
  region: string;
  postal: string;
  phone: string;
};

const offices: Office[] = [
  {
    label: "Ottawa",
    street: "174 St Malo Pl",
    city: "Embrun",
    region: "ON",
    postal: "K0A 1W0",
    phone: "(514) 237-2257",
  },
  {
    label: "Montréal",
    street: "10082 Av. de Paris",
    city: "Montréal",
    region: "QC",
    postal: "H1H 4J9",
    phone: "(581) 446-7766",
  },
  {
    label: "Québec",
    street: "1071 Rue St Gérard",
    city: "L'Ancienne-Lorette",
    region: "QC",
    postal: "G2E 2B2",
    phone: "(514) 815-6979",
  },
];

export const company = {
  name: "SOAVA Global Logistics Inc.",
  shortName: "SOAVA",
  tagline: "Beyond Borders",
  email: "falitianandisa@gmail.com",
  offices,
};

export const addressLine = (o: Office) => `${o.street}, ${o.city}, ${o.region} ${o.postal}`;

// Numéro nord-américain en lien tel: (ex. "(514) 237-2257" devient "+15142372257").
export const telHref = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return `tel:${digits.length === 10 ? "+1" : "+"}${digits}`;
};
