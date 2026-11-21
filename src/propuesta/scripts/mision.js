// Comportamiento de Misión: carrera de tiempos, barras por provincia, caminito de etapas
// (la bici avanza con el scroll) y comparador antes/después.
import { alAparecer, contar } from "../runtime";

export default function initMision({ root, amb }) {
  const $ = (s) => root.querySelector(s);
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;

  // carrera de tiempos
  const race = $("#race");
  alAparecer(amb, race, () => {
    race.classList.add("go");
    race.querySelectorAll("[data-to]").forEach((b) =>
      contar(amb, b, +b.dataset.to, +(b.dataset.dur || 2400), (n) => (b.dataset.pre || "") + n + " min"));
  }, 0.4);
  const bars = $("#bars");
  alAparecer(amb, bars, () => bars.classList.add("go"), 0.4);

  // caminito de etapas: la bici avanza con el scroll
  const path = $("#path"), fill = path.querySelector(".fill"), rider = path.querySelector(".rider"), steps = [...path.querySelectorAll(".ms-step")];
  const upd = () => {
    const r = path.getBoundingClientRect(), h = r.height, y = Math.min(h, Math.max(0, innerHeight * 0.6 - r.top));
    fill.style.height = y + "px"; rider.style.top = y + "px";
    steps.forEach((s) => s.classList.toggle("done", s.offsetTop + s.offsetHeight / 2 <= y));
  };
  amb.on(window, "scroll", upd, { passive: true });
  amb.on(window, "resize", upd);
  upd();

  // antes / después
  const c = $("#cmp"), r = c.querySelector("input");
  const set = (v) => c.style.setProperty("--p", v + "%");
  amb.on(r, "input", () => set(r.value));
  // pequeña pista: el divisor se mueve solo una vez al aparecer
  alAparecer(amb, c, () => {
    if (reduce) return;
    let t0 = null;
    const f = (t) => { t0 = t0 || t; const p = (t - t0) / 1800; if (p >= 1) { set(50); return; } set(50 + Math.sin(p * Math.PI * 2) * 22); amb.raf(f); };
    amb.raf(f);
  }, 0.6);
}
