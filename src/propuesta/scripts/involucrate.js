// Involucrate: selector "Soy persona / empresa / colegio" con la guía de Muli.
const SAY = {
  "*": "Contame quién sos y te muestro cómo podés ayudar.",
  p: "¡Genial! Podés donar tu bici, insumos o apadrinar bicis para una escuela.",
  e: "Estas son las opciones para empresas.",
  c: "¡Llevanos a tu colegio!",
};

export default function initInvolucrate({ root, amb, T, alCambiarIdioma }) {
  const tabs = root.querySelector("#tabs"), say = root.querySelector("#say");
  let actual = "*";
  amb.on(tabs, "click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    actual = b.dataset.f;
    tabs.querySelectorAll("button").forEach((x) => x.classList.toggle("sel", x === b));
    root.querySelectorAll(".iv-card").forEach((c) => {
      const on = actual === "*" || c.dataset.f.split(" ").includes(actual);
      c.classList.toggle("off", !on); c.classList.remove("show");
      if (on) { c.classList.add("in"); void c.offsetWidth; c.classList.add("show"); }
    });
    say.textContent = T(SAY[actual]);
    say.classList.remove("pop"); void say.offsetWidth; say.classList.add("pop");
  });
  alCambiarIdioma(() => { if (actual !== "*") say.textContent = T(SAY[actual]); });
}
