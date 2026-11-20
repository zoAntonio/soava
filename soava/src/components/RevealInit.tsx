"use client";

import { useEffect } from "react";

// Fait apparaître en douceur les blocs [data-reveal] quand ils entrent à l'écran.
// Les blocs déjà visibles au chargement ne sont jamais masqués.
export default function RevealInit() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = e.target as HTMLElement;
            t.classList.add("in");
            // Une fois affiché, on retire les classes pour ne pas ralentir les survols
            t.addEventListener(
              "transitionend",
              () => t.classList.remove("pre", "in"),
              { once: true },
            );
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("pre");
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);
  return null;
}
