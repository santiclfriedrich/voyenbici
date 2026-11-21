// Utilidades para los scripts de las páginas del rediseño.
// Todo lo que un script engancha (eventos, timers, observers, animaciones) queda registrado
// y se limpia al salir de la página, para que no se acumule al navegar por el sitio.

export function crearAmbito() {
  const limpiezas = [];
  const timers = new Set();
  const frames = new Set();

  const amb = {
    on(el, evento, fn, opciones) {
      el.addEventListener(evento, fn, opciones);
      limpiezas.push(() => el.removeEventListener(evento, fn, opciones));
    },
    setTimeout(fn, ms) {
      const id = window.setTimeout(() => { timers.delete(id); fn(); }, ms);
      timers.add(id);
      return id;
    },
    clearTimeout(id) {
      window.clearTimeout(id);
      timers.delete(id);
    },
    raf(fn) {
      const id = window.requestAnimationFrame((t) => { frames.delete(id); fn(t); });
      frames.add(id);
      return id;
    },
    observer(callback, opciones) {
      const o = new IntersectionObserver(callback, opciones);
      limpiezas.push(() => o.disconnect());
      return o;
    },
    alLimpiar(fn) {
      limpiezas.push(fn);
    },
    limpiar() {
      timers.forEach((id) => window.clearTimeout(id));
      frames.forEach((id) => window.cancelAnimationFrame(id));
      timers.clear();
      frames.clear();
      while (limpiezas.length) limpiezas.pop()();
    },
  };
  return amb;
}

// Ejecuta fn una sola vez cuando el elemento entra en pantalla.
export function alAparecer(amb, el, fn, umbral = 0.5) {
  if (!el) return;
  const o = amb.observer((es) => {
    if (es[0].isIntersecting) {
      o.disconnect();
      fn();
    }
  }, { threshold: umbral });
  o.observe(el);
}

// Anima un número de 0 al valor final.
export function contar(amb, el, hasta, ms, formato) {
  const t0 = performance.now();
  const paso = (t) => {
    const p = Math.min(1, (t - t0) / ms);
    el.textContent = formato(Math.round(hasta * (1 - Math.pow(1 - p, 3))));
    if (p < 1) amb.raf(paso);
  };
  amb.raf(paso);
}
