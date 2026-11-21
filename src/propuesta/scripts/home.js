// Comportamiento de la home del rediseño: título animado, galería de fotos, mapa de los
// Bancos de Bicis con carrusel y recorrido automático, pasarela de logos y la bici del camino.
import MAP from "../data/argmap.json";
import BANCOS from "../data/bancos.json";
import SPONSORS from "../data/sponsors.json";
import ROADY from "../data/camino.json";

const FOTOS = "/veb/bancos/";

export default function initHome({ root, amb, T, alCambiarIdioma }) {
  const $ = (s) => root.querySelector(s);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* título de la portada: aparece palabra por palabra */
  const h = $("#h1");
  if (h && !h.querySelector(".w")) {
    let i = 0;
    const walk = (n) => [...n.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const f = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach((tx) => {
          if (!tx.trim()) { f.append(tx); return; }
          const s = document.createElement("span");
          s.className = "w"; s.textContent = tx; s.style.animationDelay = (0.15 + i++ * 0.035) + "s";
          f.append(s);
        });
        c.replaceWith(f);
      } else walk(c);
    });
    walk(h);
  }

  /* galería (lightbox) */
  let LB = [], LBi = 0;
  const lb = $("#lb"), lbImg = lb.querySelector("img"), lbCap = lb.querySelector("figcaption");
  const lbShow = (i) => { LBi = (i + LB.length) % LB.length; lbImg.src = FOTOS + LB[LBi].f + ".jpg"; lbImg.alt = LB[LBi].c; lbCap.textContent = LB[LBi].c + " · " + (LBi + 1) + "/" + LB.length; };
  const lbOpen = (list, i) => { LB = list; lbShow(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; lb.querySelector(".x").focus(); };
  const lbClose = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
  amb.alLimpiar(() => { document.body.style.overflow = ""; });
  amb.on(lb.querySelector(".x"), "click", lbClose);
  amb.on(lb.querySelector(".pv"), "click", () => lbShow(LBi - 1));
  amb.on(lb.querySelector(".nx"), "click", () => lbShow(LBi + 1));
  amb.on(lb, "click", (e) => { if (e.target === lb) lbClose(); });
  amb.on(window, "keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowLeft") lbShow(LBi - 1);
    if (e.key === "ArrowRight") lbShow(LBi + 1);
  });

  /* mapa + carrusel de bancos */
  {
    const svg = $("#argmap"), ns = "http://www.w3.org/2000/svg", tip = $("#tip"), scene = svg.parentElement, chips = $("#chips"), els = {};
    const PX = (lon) => 19.5214 * lon + 1444.40, PY = (lat) => -24.7586 * lat - 537.27;   // proyección del dibujo (calibrada)
    const cnt = {}; BANCOS.forEach((b) => { cnt[b.prov] = (cnt[b.prov] || 0) + 1; });
    const PROVS = Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a] || a.localeCompare(b));
    const north = (n) => Math.max(...BANCOS.filter((b) => b.prov === n).map((b) => b.lat));
    const TOUR = [...PROVS].sort((a, b) => north(b) - north(a));                         // recorrido de norte a sur
    svg.replaceChildren();
    MAP.p.forEach((p) => {
      const path = document.createElementNS(ns, "path"); path.setAttribute("d", p.d); path.dataset.n = p.n;
      if (cnt[p.n]) { path.classList.add("on"); path.setAttribute("tabindex", "0"); path.setAttribute("aria-label", p.n); }
      svg.append(path); els[p.n] = path;
    });
    const pins = BANCOS.map((b, i) => {
      const g = document.createElementNS(ns, "g"); g.setAttribute("class", "bpin");
      g.setAttribute("transform", `translate(${PX(b.lon).toFixed(1)} ${PY(b.lat).toFixed(1)})`);
      g.innerHTML = '<circle class="ring" r="9"/><circle class="dot" r="4.2"/>'; g.dataset.b = i; svg.append(g); return g;
    });
    chips.innerHTML = '<button class="chip tour" data-n="*">' + T("Recorrido") + "</button>" + PROVS.map((n) => `<button class="chip" data-n="${n}">${n}<i>${cnt[n]}</i></button>`).join("");

    const car = $("#car"), imgs = car.querySelectorAll(".car-v img"), cap = $("#car-pl"), num = $("#car-n"), bar = $("#car-bar"), pills = $("#pills");
    const link = $("#link"), lpath = link.querySelector("path"), ldot = link.querySelector("circle");
    const DUR = 4500, IDLE = 25000, PER = 5;
    let slides = [], idx = 0, front = -1, seq = 0, timer = null, vis = false, scope = "", tour = true, idleT = null, lastBi = -1;
    const ofProv = (n) => BANCOS.map((b, i) => ({ b, i })).filter((x) => x.b.prov === n);
    const build = (n, short) => {
      const list = ofProv(n);
      if (!short) return list.flatMap((x) => x.b.fotos.map((f) => ({ f, bi: x.i })));        // elegida: todas, agrupadas por banco
      const out = [], max = Math.max(...list.map((x) => x.b.fotos.length));                    // recorrido: intercaladas y pocas
      for (let k = 0; k < max; k++) list.forEach((x) => { if (x.b.fotos[k]) out.push({ f: x.b.fotos[k], bi: x.i }); });
      return out.slice(0, Math.max(PER, list.length));
    };
    const src = (f) => FOTOS + f + (car.clientWidth * (devicePixelRatio || 1) > 440 ? "" : "-t") + ".jpg";
    const center = (el, box) => { const r = el.getBoundingClientRect(), b = box.getBoundingClientRect(); return [r.left + r.width / 2 - b.left, r.top + r.height / 2 - b.top]; };

    const drawLink = (bi) => {
      const [px, py] = center(pins[bi].querySelector(".dot"), scene), c = car.getBoundingClientRect(), s = scene.getBoundingClientRect();
      const cl = c.left - s.left, ct = c.top - s.top, tx = Math.min(Math.max(px, cl + c.width * 0.2), cl + c.width * 0.8), ty = ct + c.height * 0.1;
      lpath.setAttribute("d", `M${px} ${py} Q${px} ${ty} ${tx} ${ty}`); ldot.setAttribute("cx", px); ldot.setAttribute("cy", py); link.classList.add("on");
    };
    const pop = (bi) => {
      if (reduce) return;
      const [ox, oy] = center(pins[bi].querySelector(".dot"), car), o = `${ox}px ${oy}px`;
      link.classList.remove("on");
      car.animate([{ transformOrigin: o, transform: "scale(.04)", opacity: 0 }, { transformOrigin: o, transform: "scale(1)", opacity: 1 }],
        { duration: 900, easing: "cubic-bezier(.2,.9,.25,1.04)" }).onfinish = () => drawLink(lastBi);
    };
    const run = () => {
      amb.clearTimeout(timer); bar.style.animation = "none"; void bar.offsetWidth;
      bar.style.animation = `carbar ${DUR}ms linear forwards`;
      const t = () => { if (!vis || document.hidden || lb.classList.contains("open")) { timer = amb.setTimeout(t, 400); return; } next(); };
      timer = amb.setTimeout(t, DUR);
    };
    const next = () => { if (tour && idx === slides.length - 1) select(TOUR[(TOUR.indexOf(scope) + 1) % TOUR.length], null, true); else show(idx + 1, 1); };
    const show = (i, dir) => {
      idx = (i + slides.length) % slides.length; const s = slides[idx], b = BANCOS[s.bi], tok = ++seq;
      const ni = front < 0 ? 0 : 1 - front, nx = imgs[ni], url = src(s.f);
      nx.onload = () => {
        if (tok !== seq) return;
        const old = front < 0 ? null : imgs[front], jump = s.bi !== lastBi; front = ni; lastBi = s.bi;
        nx.getAnimations().forEach((a) => a.cancel()); nx.classList.remove("on"); void nx.offsetWidth; nx.classList.add("on");
        if (!old || reduce || jump) { if (old) old.classList.remove("on"); if (jump) pop(s.bi); else drawLink(s.bi); if (reduce) drawLink(s.bi); }
        else {
          const d = dir || 1, o = { duration: 800, easing: "cubic-bezier(.65,0,.35,1)" };
          nx.animate([{ transform: `translateX(${d * 100}%)` }, { transform: "none" }], o);
          old.animate([{ transform: "none" }, { transform: `translateX(${-d * 100}%)` }], o).onfinish = () => { if (imgs[front] !== old) old.classList.remove("on"); };
          drawLink(s.bi);
        }
      };
      nx.alt = T("Banco de Bicis en ") + b.nombre;
      if (nx.getAttribute("src") === url && nx.complete) nx.onload(); else nx.src = url;
      cap.textContent = b.nombre; num.textContent = (idx + 1) + " / " + slides.length;
      pins.forEach((p, j) => p.classList.toggle("cur", j === s.bi));
      pills.querySelectorAll("button").forEach((p) => p.classList.toggle("sel", +p.dataset.b === s.bi));
      new Image().src = src(slides[(idx + 1) % slides.length].f); run();
    };
    const textoBancos = (k) => (k === 1 ? T("1 Banco de Bicis:") : k + T(" Bancos de Bicis:"));
    const chipTo = (c) => { if (c) chips.scrollTo({ left: c.offsetLeft - chips.clientWidth / 2 + c.offsetWidth / 2, behavior: "smooth" }); };
    const select = (n, bi, isTour) => {
      scope = n; svg.classList.add("scoped");
      Object.values(els).forEach((e) => e.classList.toggle("sel", e.dataset.n === n));
      chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("sel", c.dataset.n === n || (tour && c.dataset.n === "*")));
      chipTo(chips.querySelector(`.chip[data-n="${n}"]`));
      const list = ofProv(n);
      $("#pname").textContent = n;
      $("#ptext").textContent = textoBancos(list.length);
      pills.innerHTML = list.map((x) => `<button data-b="${x.i}">${x.b.lugar}</button>`).join("");
      slides = build(n, isTour); const k = bi == null ? 0 : slides.findIndex((s) => s.bi === bi); show(Math.max(0, k), 1);
    };
    // el usuario toma el control: se frena el recorrido y vuelve solo tras un rato sin tocar nada
    const user = () => {
      tour = false; chips.querySelector(".tour").classList.remove("sel"); amb.clearTimeout(idleT);
      idleT = amb.setTimeout(() => { tour = true; select(TOUR[(TOUR.indexOf(scope) + 1) % TOUR.length], null, true); }, IDLE);
    };

    const nameAt = (t) => { const g = t.closest(".bpin"); if (g) return BANCOS[g.dataset.b].nombre; return cnt[t.dataset.n] ? t.dataset.n : ""; };
    amb.on(svg, "click", (e) => {
      const g = e.target.closest(".bpin");
      if (g) { user(); select(BANCOS[g.dataset.b].prov, +g.dataset.b); return; }
      const n = e.target.dataset.n; if (cnt[n]) { user(); select(n); }
    });
    amb.on(svg, "keydown", (e) => { const n = e.target.dataset.n; if (e.key === "Enter" && cnt[n]) { user(); select(n); } });
    amb.on(svg, "mousemove", (e) => {
      const t = nameAt(e.target);
      if (t) { const r = scene.getBoundingClientRect(); tip.style.left = (e.clientX - r.left) + "px"; tip.style.top = (e.clientY - r.top) + "px"; tip.textContent = t; tip.style.opacity = 1; }
      else tip.style.opacity = 0;
    });
    amb.on(svg, "mouseleave", () => { tip.style.opacity = 0; });
    amb.on(chips, "click", (e) => {
      const c = e.target.closest(".chip"); if (!c) return;
      if (c.dataset.n === "*") { amb.clearTimeout(idleT); tour = true; select(scope || TOUR[0], null, true); } else { user(); select(c.dataset.n); }
    });
    amb.on(pills, "click", (e) => {
      const p = e.target.closest("button"); if (!p) return; user();
      slides = build(scope); show(slides.findIndex((s) => s.bi === +p.dataset.b), 1);
    });
    amb.on(car.querySelector(".pv"), "click", (e) => { e.stopPropagation(); user(); show(idx - 1, -1); });
    amb.on(car.querySelector(".nx"), "click", (e) => { e.stopPropagation(); user(); show(idx + 1, 1); });
    amb.on(car, "click", () => { user(); lbOpen(slides.map((s) => ({ f: s.f, c: T("Banco de Bicis · ") + BANCOS[s.bi].nombre })), idx); });
    let x0 = null;
    amb.on(car, "touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    amb.on(car, "touchend", (e) => {
      if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { e.preventDefault(); user(); show(idx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1); }
    });
    amb.observer((es) => { vis = es[0].isIntersecting; car.classList.toggle("hold", !vis); }, { threshold: 0.2 }).observe(car);
    amb.on(window, "resize", () => { if (lastBi >= 0) drawLink(lastBi); }, { passive: true });
    select(TOUR[0], null, true);
    alCambiarIdioma(() => {
      const t = chips.querySelector(".chip.tour"); if (t) t.textContent = T("Recorrido");
      const k = pills.querySelectorAll("button").length; if (k) $("#ptext").textContent = textoBancos(k);
    });
  }

  /* pasarela de logos */
  const card = (s) => `<div class="logo-c nm"><img src="${s.src}" alt="${s.name}" loading="lazy"><span aria-hidden="true">${s.name}</span></div>`;
  const fill = (id, list, dur) => { const t = $(id); const html = list.map(card).join(""); t.innerHTML = html + html.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"'); t.style.setProperty("--dur", dur + "s"); };
  const half = Math.ceil(SPONSORS.length / 2);
  fill("#mq1", SPONSORS.slice(0, half), 70);
  fill("#mq2", SPONSORS.slice(half), 80);

  /* bici que avanza con el scroll */
  {
    const ride = $("#ride"), rider = $("#rider"), trail = $("#trail"), hint = $("#rhint");
    const wheels = rider.querySelectorAll(".wheel"), crank = rider.querySelector(".crank");
    const upd = () => {
      const r = ride.getBoundingClientRect(), vh = innerHeight;
      let p = (vh * 0.95 - r.bottom) / (vh * 0.75); p = Math.max(0, Math.min(1, p)); if (reduce) p = 1;
      const W = ride.clientWidth, bw = rider.clientWidth, school = ride.querySelector(".school").clientWidth;
      const max = W - bw - school * 0.9 - W * 0.02;
      const x = p * max;
      const k = 1000 / W, sy = 56 / 60, wb = bw * 0.477;
      const yr = ROADY[Math.min(1000, Math.round((x + bw * 0.307) * k))], yf = ROADY[Math.min(1000, Math.round((x + bw * 0.784) * k))];
      const ty = ((yr + yf) / 2 - 30) * sy, ang = Math.atan2((yf - yr) * sy, wb) * 180 / Math.PI;
      rider.style.transform = `translate(${x}px,${ty}px) rotate(${ang}deg)`;
      trail.style.width = (x + bw * 0.25) + "px";
      trail.style.setProperty("--rw", W + "px");
      const deg = x / (Math.PI * bw * 0.28) * 360;
      wheels.forEach((w) => { w.style.transform = `rotate(${deg}deg)`; });
      crank.style.transform = `rotate(${deg * 0.55}deg)`;
      hint.style.opacity = p > 0.05 ? 0 : 0.8;
    };
    amb.on(window, "scroll", upd, { passive: true });
    amb.on(window, "resize", upd);
    upd();
  }

  /* si se llegó con #mapa u otra ancla (por ejemplo desde Proyectos), bajar hasta ahí */
  if (location.hash) {
    const destino = root.querySelector(location.hash);
    if (destino) amb.setTimeout(() => destino.scrollIntoView(), 50);
  }
}
