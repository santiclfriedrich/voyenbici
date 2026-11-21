import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { crearAmbito, alAparecer, contar } from "./runtime";
import { textosVeb } from "./textos";

// Textos que arma el código (no el JSX): mapa de la home, guía de Involucrate.
// En inglés solo se traducen los que tienen traducción oficial; el resto queda en español.
export const traducirDinamico = (texto, idioma) =>
  (idioma === "en" && textosVeb.dinamicos[texto]) || texto;

// Hook común de las páginas del rediseño:
//  - aparición suave de los bloques .rv al hacer scroll,
//  - contadores ([data-count]),
//  - corre el script propio de la página (init) y lo limpia al salir.
// init recibe { root, amb, T, alCambiarIdioma } y puede devolver nada.
export function useVeb(init) {
  const root = useRef(null);
  const { language } = useLanguage();
  const idioma = useRef(language);
  const oyentes = useRef([]);
  idioma.current = language;

  useEffect(() => {
    const el = root.current;
    if (!el) return undefined;
    const amb = crearAmbito();

    const io = amb.observer((es) => es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }), { threshold: 0.12 });
    el.querySelectorAll(".rv").forEach((x) => io.observe(x));

    el.querySelectorAll("[data-count]").forEach((x) =>
      alAparecer(amb, x, () => contar(amb, x, +x.dataset.count, 1600, (n) => n.toLocaleString("es-AR"))));

    if (init) {
      init({
        root: el,
        amb,
        T: (texto) => traducirDinamico(texto, idioma.current),
        alCambiarIdioma: (fn) => oyentes.current.push(fn),
      });
    }
    return () => {
      amb.limpiar();
      oyentes.current = [];
    };
    // init es un import fijo de cada página: el efecto corre una vez por montaje.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    oyentes.current.forEach((fn) => fn(language));
  }, [language]);

  return root;
}
