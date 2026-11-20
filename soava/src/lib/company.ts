// Informations de l'entreprise. Seul fichier à modifier pour mettre à jour
// les contacts affichés sur le site et dans la fiche contact (.vcf).
// ⚠️ Valeurs d'exemple : à remplacer par les coordonnées réelles de SOAVA.

export const company = {
  name: "SOAVA Global Logistics Inc.",
  shortName: "SOAVA",
  tagline: "Beyond Borders",
  email: "contact@soava.example",
  canada: {
    label: "Canada",
    city: "Montréal, QC",
    phone: "+1 000 000 0000",
    address: "Adresse à renseigner",
  },
  madagascar: {
    label: "Madagascar",
    city: "Antananarivo",
    phone: "+261 00 00 000 00",
    address: "Adresse à renseigner",
  },
  hours: "Lundi – Vendredi · 9 h – 17 h",
} as const;
