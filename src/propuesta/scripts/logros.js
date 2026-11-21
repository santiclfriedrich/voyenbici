// Logros: filtros Todos / Premios / Congresos / Reconocimientos.
export default function initLogros({ root, amb }) {
  const filtros = root.querySelector(".lg-filters");
  amb.on(filtros, "click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const f = b.dataset.f;
    filtros.querySelectorAll("button").forEach((x) => x.classList.toggle("sel", x === b));
    root.querySelectorAll(".lg-card").forEach((c) => { c.classList.toggle("off", f !== "*" && c.dataset.t !== f); c.classList.add("in"); });
    root.querySelectorAll(".lg-year").forEach((y) => y.classList.toggle("off", !y.querySelector(".lg-card:not(.off)")));
  });
}
