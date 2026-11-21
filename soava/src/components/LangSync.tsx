"use client";

import { useEffect } from "react";

// Le layout racine déclare lang="fr". Sur la version anglaise, on aligne l'attribut.
export default function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
