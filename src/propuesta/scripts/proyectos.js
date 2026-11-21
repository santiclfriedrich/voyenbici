// Proyectos: el índice de arriba marca el proyecto que se está viendo.
export default function initProyectos({ root, amb }) {
  const links = [...root.querySelectorAll(".pr-idx a")], rows = [...root.querySelectorAll(".pr-row")], end = root.querySelector(".endcta");
  const upd = () => {
    const mid = innerHeight * 0.5; let cur = null;
    rows.forEach((r) => { if (r.getBoundingClientRect().top < mid) cur = r.id; });
    if (end && end.getBoundingClientRect().top < mid) cur = null;
    links.forEach((l) => l.classList.toggle("on", cur !== null && l.getAttribute("href") === "#" + cur));
  };
  amb.on(window, "scroll", upd, { passive: true });
  upd();
}
