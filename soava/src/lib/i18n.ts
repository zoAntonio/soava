import type { Metadata } from "next";

export type Lang = "fr" | "en";
export type Route = "home" | "about" | "contact";

type Item = { title: string; text: string };
type PageMeta = { title: string; description: string };

export type Dict = {
  htmlLang: string;
  locale: string;
  meta: Record<Route, PageMeta>;
  skip: string;
  nav: { poles: string; about: string; contact: string };
  menuOpen: string;
  switchLabel: string;
  cta: { divisions: string; contact: string; learnMore: string };
  hero: { eyebrow: string; title: string; text: string; featured: string; tag: string; featuredText: string };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    badge: string;
    storyEyebrow: string;
    storyTitle: string;
    vision: string;
    visionText: string;
    mission: string;
    missionText: string;
    dna: string;
    dnaText: string;
  };
  values: { eyebrow: string; eyebrowHome: string; title: string; items: Item[] };
  divisions: { eyebrow: string; title: string; items: Item[] };
  band: { title: string; text: string; button: string };
  contactPage: {
    title: string;
    subtitle: string;
    text: string;
    locations: string;
    offices: string;
    hours: string;
    addToContacts: string;
    qrTitle: string;
    qrText: string;
    qrAlt: string;
    qrDownload: string;
  };
  footer: { tagline: string; offices: string; navigate: string; rights: string };
  logoAlt: string;
};

export const dict: Record<Lang, Dict> = {
  fr: {
    htmlLang: "fr",
    locale: "fr_CA",
    meta: {
      home: {
        title: "Soava Group : une entreprise canadienne à ambition mondiale",
        description:
          "Soava Group, ancré au Canada, réunit logistique et livraison express, agroalimentaire et superfoods, mines et ressources stratégiques.",
      },
      about: {
        title: "À propos | Soava Group",
        description:
          "Notre vision, notre mission et nos valeurs : rigueur, fiabilité et engagement total envers le service client.",
      },
      contact: {
        title: "Contact | Soava Group",
        description: "Écrivez à Soava Group ou appelez notre bureau au Canada ou à Madagascar.",
      },
    },
    skip: "Aller au contenu",
    nav: { poles: "Pôles d'activités", about: "À propos", contact: "Contact" },
    menuOpen: "Ouvrir le menu",
    switchLabel: "Changer la langue",
    cta: { divisions: "Nos pôles d'activités", contact: "Nous contacter", learnMore: "En savoir plus" },
    hero: {
      eyebrow: "Soava Group · Beyond Borders",
      title: "Une entreprise canadienne portée par une ambition mondiale",
      text: "Ancré au Canada avec une orientation commerciale internationale, Soava Group s'engage avec rigueur, fiabilité et un souci total du service client.",
      featured: "Soava Express",
      tag: "Pôle d'activité",
      featuredText:
        "Envoi rapide et sécurisé de colis internationaux, fret et solutions de messagerie reliant l'Amérique du Nord, l'Afrique et les grands carrefours commerciaux.",
    },
    about: {
      eyebrow: "Notre entreprise",
      title: "Une entreprise canadienne portée par une ambition mondiale",
      text: "Ancré au Canada avec une orientation commerciale internationale, Soava Group déploie une ambition mondiale fondée sur la rigueur, la fiabilité et un engagement total envers le service client.",
      badge: "Canada",
      storyEyebrow: "Notre vision et notre mission",
      storyTitle: "Pourquoi nous existons",
      vision: "Notre vision",
      visionText:
        "Figurer parmi les entreprises de services les plus reconnues pour la satisfaction durable de leurs partenaires et clients, en les accompagnant vers la croissance, l'épanouissement et la longévité.",
      mission: "Notre mission",
      missionText:
        "Contribuer à la fluidité des transactions, des mouvements et des échanges mondiaux en facilitant les services d'expédition et de livraison express, en rendant accessibles des produits et superfoods d'exception pour une vie longue et saine, et en améliorant continuellement la qualité de nos services haut de gamme.",
      dna: "Notre ADN",
      dnaText:
        "Ancré au Canada avec une orientation commerciale internationale, Soava Group déploie une ambition mondiale fondée sur la rigueur, la fiabilité et un engagement total envers le service client.",
    },
    values: {
      eyebrow: "Ce qui nous guide",
      eyebrowHome: "Nos valeurs",
      title: "Nos valeurs fondamentales",
      items: [
        {
          title: "Respect et intégrité",
          text: "Nous bâtissons des relations durables fondées sur l'éthique, la transparence, le respect des engagements et la confiance mutuelle avec nos clients, partenaires et communautés.",
        },
        {
          title: "Service excellent en amélioration continue",
          text: "L'excellence opérationnelle est notre standard. Nous innovons et perfectionnons chaque jour nos processus pour offrir une qualité de service supérieure et irréprochable.",
        },
        {
          title: "Valorisation",
          text: "Nous révélons et maximisons le potentiel de chaque produit, ressource et collaboration afin de générer une valeur ajoutée durable pour nos partenaires et consommateurs.",
        },
        {
          title: "Expérience",
          text: "Nous mettons notre savoir-faire terrain et notre maîtrise des échanges internationaux au service d'une expérience client fluide, rassurante et mémorable à chaque étape.",
        },
      ],
    },
    divisions: {
      eyebrow: "Pôles d'activités",
      title: "Des pôles intégrés au service des marchés internationaux",
      items: [
        {
          title: "Logistique et livraison express",
          text: "Envoi rapide et sécurisé de colis internationaux, fret et solutions de messagerie reliant l'Amérique du Nord, l'Afrique et les grands carrefours commerciaux.",
        },
        {
          title: "Agroalimentaire et superfoods",
          text: "Sélection, valorisation et exportation de superfoods riches en nutriments et de denrées agroalimentaires d'exception favorisant la santé et la longévité.",
        },
        {
          title: "Mines et ressources stratégiques",
          text: "Développement responsable et négoce international de ressources minières dans le respect strict des normes environnementales, sociales et de gouvernance.",
        },
      ],
    },
    band: {
      title: "Parlons de votre projet",
      text: "Écrivez-nous ou appelez le bureau le plus proche de vous.",
      button: "Nous contacter",
    },
    contactPage: {
      title: "Contactez-nous",
      subtitle: "Démarrons la conversation.",
      text: "Pour un envoi, un partenariat ou une question sur nos pôles d'activités, écrivez-nous ou appelez le bureau le plus proche de vous.",
      locations: "Nos bureaux",
      offices: "Bureaux",
      hours: "Lundi – Vendredi · 9 h – 17 h",
      addToContacts: "Ajouter Soava à mes contacts",
      qrTitle: "Retrouvez-nous plus tard",
      qrText: "Scannez ce code avec votre téléphone pour enregistrer le site.",
      qrAlt: "QR code vers le site Soava",
      qrDownload: "Télécharger le QR code",
    },
    footer: {
      tagline: "Soava Group, ancré au Canada, tourné vers le monde.",
      offices: "Bureaux",
      navigate: "Navigation",
      rights: "Tous droits réservés.",
    },
    logoAlt: "Soava Global Logistics Inc., Beyond Borders",
  },
  en: {
    htmlLang: "en",
    locale: "en_CA",
    meta: {
      home: {
        title: "Soava Group: a Canadian enterprise driven by global ambition",
        description:
          "Soava Group, grounded in Canada, brings together express logistics and delivery, agri-food and superfoods, mining and strategic resources.",
      },
      about: {
        title: "About | Soava Group",
        description:
          "Our vision, our mission and our values: rigor, reliability and an unwavering commitment to customer service.",
      },
      contact: {
        title: "Contact | Soava Group",
        description: "Write to Soava Group or call our office in Canada or Madagascar.",
      },
    },
    skip: "Skip to content",
    nav: { poles: "Divisions", about: "About", contact: "Contact" },
    menuOpen: "Open menu",
    switchLabel: "Change language",
    cta: { divisions: "Our divisions", contact: "Contact us", learnMore: "Learn more" },
    hero: {
      eyebrow: "Soava Group · Beyond Borders",
      title: "A Canadian Enterprise Driven by Global Ambition",
      text: "Grounded in Canada with a strong international business orientation, Soava Group is committed to rigor, reliability and customer service.",
      featured: "Soava Express",
      tag: "Division",
      featuredText:
        "Fast, secure international parcel shipping, freight, and courier solutions connecting North America, Africa, and major global trade hubs.",
    },
    about: {
      eyebrow: "Our company",
      title: "A Canadian Enterprise Driven by Global Ambition",
      text: "Grounded in our Canadian identity with a strong international business orientation, Soava Group combines global commercial ambition with an unwavering commitment to customer service.",
      badge: "Canada",
      storyEyebrow: "Our vision and mission",
      storyTitle: "Why we exist",
      vision: "Our vision",
      visionText:
        "To stand among the leading service enterprises renowned for delighting partners and customers, accompanying them toward sustainable growth, fulfillment, and a long, prosperous life.",
      mission: "Our mission",
      missionText:
        "To power global transactions, movement, and exchange by streamlining express shipping and delivery services, expanding access to exceptional goods and superfoods for lasting vitality, and continuously elevating our high-end service standards.",
      dna: "Our DNA",
      dnaText:
        "Grounded in our Canadian identity with a strong international business orientation, Soava Group combines global commercial ambition with an unwavering commitment to customer service.",
    },
    values: {
      eyebrow: "What guides us",
      eyebrowHome: "Our values",
      title: "Our core values",
      items: [
        {
          title: "Respect and integrity",
          text: "We build lasting relationships anchored in ethics, transparency, honored commitments, and mutual trust with every client, partner, and community.",
        },
        {
          title: "Service excellence and continuous improvement",
          text: "Operational excellence is our baseline. We innovate and refine our processes every day to deliver superior, seamless service quality.",
        },
        {
          title: "Value creation",
          text: "We unlock and maximize the potential of every product, resource, and partnership to generate lasting added value for clients and stakeholders.",
        },
        {
          title: "Experience",
          text: "We leverage our hands-on expertise and international trade mastery to deliver a smooth, reassuring, and memorable experience at every touchpoint.",
        },
      ],
    },
    divisions: {
      eyebrow: "Divisions",
      title: "Integrated divisions serving international markets",
      items: [
        {
          title: "Express logistics and delivery",
          text: "Fast, secure international parcel shipping, freight, and courier solutions connecting North America, Africa, and major global trade hubs.",
        },
        {
          title: "Agri-food and superfoods",
          text: "Sourcing, value-added processing, and export of nutrient-dense superfoods and premium agricultural goods promoting health and longevity.",
        },
        {
          title: "Mining and strategic resources",
          text: "Responsible development and international trade of strategic mineral resources adhering to strict environmental, social, and governance standards.",
        },
      ],
    },
    band: {
      title: "Let's talk about your project",
      text: "Write to us or call the office closest to you.",
      button: "Contact us",
    },
    contactPage: {
      title: "Get in touch",
      subtitle: "Let's start a conversation.",
      text: "For a shipment, a partnership or a question about our divisions, write to us or call the office closest to you.",
      locations: "Our locations",
      offices: "Offices",
      hours: "Monday – Friday · 9 am – 5 pm",
      addToContacts: "Add Soava to my contacts",
      qrTitle: "Find us later",
      qrText: "Scan this code with your phone to save the site.",
      qrAlt: "QR code to the Soava website",
      qrDownload: "Download the QR code",
    },
    footer: {
      tagline: "Soava Group, grounded in Canada, facing the world.",
      offices: "Offices",
      navigate: "Navigate",
      rights: "All rights reserved.",
    },
    logoAlt: "Soava Global Logistics Inc., Beyond Borders",
  },
};

const paths: Record<Route, string> = { home: "", about: "/about", contact: "/contact" };

export function routeHref(lang: Lang, route: Route, hash = "") {
  const base = lang === "en" ? "/en" : "";
  const p = `${base}${paths[route]}` || "/";
  return `${p}${hash}`;
}

export function pageMetadata(lang: Lang, route: Route): Metadata {
  const t = dict[lang];
  const { title, description } = t.meta[route];
  return {
    title,
    description,
    openGraph: { title, description, locale: t.locale },
  };
}
