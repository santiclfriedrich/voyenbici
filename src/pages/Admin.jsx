import { useCallback, useEffect, useState } from "react";

// Panel de administración. La seguridad NO está en que la ruta sea poco
// conocida: está en que la contraseña se verifica en una función de Netlify,
// y en que la credencial de GitHub vive en el servidor y nunca llega acá.

const COLECCIONES = [
  {
    id: "achievements",
    nombre: "Logros",
    conImagen: true,
    campos: [
      { k: "title", label: "Título", tipo: "input" },
      { k: "description", label: "Descripción", tipo: "textarea" },
    ],
  },
  {
    id: "projects",
    nombre: "Proyectos",
    conImagen: true,
    campos: [
      { k: "title", label: "Título", tipo: "input" },
      { k: "text", label: "Texto", tipo: "textarea" },
      { k: "cta", label: "Texto del botón", tipo: "input" },
    ],
  },
  { id: "stats", nombre: "Números de la portada", conImagen: false, campos: [] },
];

const ANCHO_MAX = 1600;

// Redimensiona en el navegador: el archivo pesado nunca se sube.
function redimensionar(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const escala = Math.min(1, ANCHO_MAX / img.width);
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * escala);
      c.height = Math.round(img.height * escala);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      const url = c.toDataURL("image/jpeg", 0.82);
      URL.revokeObjectURL(img.src);
      resolve({ base64: url.split(",")[1], tipo: "image/jpeg", ancho: c.width, alto: c.height });
    };
    img.onerror = () => reject(new Error("No se pudo leer la imagen."));
    img.src = URL.createObjectURL(file);
  });
}

const vacio = (col) => {
  if (col.id === "stats") return { number: "", es: "", en: "" };
  const porIdioma = () => Object.fromEntries(col.campos.map((c) => [c.k, ""]));
  return { image: "", instagram: "", es: porIdioma(), en: porIdioma() };
};

export default function Admin() {
  // robots.txt ya bloquea /admin, pero el meta cubre a los crawlers que lo ignoren.
  useEffect(() => {
    const m = document.createElement("meta");
    m.name = "robots";
    m.content = "noindex, nofollow";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  const [token, setToken] = useState(() => sessionStorage.getItem("admin_token") || "");
  const [colId, setColId] = useState("achievements");
  const [datos, setDatos] = useState(null);
  const [sha, setSha] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");
  const [guardando, setGuardando] = useState(false);

  const col = COLECCIONES.find((c) => c.id === colId);

  const salir = useCallback(() => {
    sessionStorage.removeItem("admin_token");
    setToken(""); setDatos(null);
  }, []);

  const cargar = useCallback(async () => {
    setError(""); setEstado("Cargando…"); setDatos(null);
    try {
      const r = await fetch(`/api/admin-content?collection=${colId}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const j = await r.json();
      if (r.status === 401) { salir(); setError(j.error); return; }
      if (!r.ok) throw new Error(j.error || "No se pudo cargar.");
      setDatos(j.datos); setSha(j.sha); setEstado("");
    } catch (e) { setError(e.message); setEstado(""); }
  }, [colId, token, salir]);

  useEffect(() => { if (token) cargar(); }, [token, cargar]);

  const guardar = async () => {
    setGuardando(true); setError(""); setEstado("Guardando…");
    try {
      const r = await fetch(`/api/admin-content?collection=${colId}`, {
        method: "PUT",
        headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
        body: JSON.stringify({ datos, sha }),
      });
      const j = await r.json();
      if (r.status === 401) { salir(); setError(j.error); return; }
      if (!r.ok) throw new Error(j.error || "No se pudo guardar.");
      setSha(j.sha);
      setEstado("Guardado. El sitio se actualiza en un par de minutos.");
    } catch (e) { setError(e.message); setEstado(""); }
    finally { setGuardando(false); }
  };

  const subirImagen = async (file, i) => {
    setError(""); setEstado("Procesando imagen…");
    try {
      const { base64, tipo, ancho, alto } = await redimensionar(file);
      setEstado(`Subiendo (${ancho}×${alto})…`);
      const r = await fetch("/api/admin-upload", {
        method: "POST",
        headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
        body: JSON.stringify({ nombre: file.name, tipo, base64 }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "No se pudo subir.");
      actualizar(i, (e) => ({ ...e, image: j.ruta }));
      setEstado("Imagen subida. Acordate de guardar.");
    } catch (e) { setError(e.message); setEstado(""); }
  };

  const actualizar = (i, fn) => setDatos((d) => d.map((e, j) => (j === i ? fn(e) : e)));
  const mover = (i, delta) => setDatos((d) => {
    const n = [...d]; const j = i + delta;
    if (j < 0 || j >= n.length) return d;
    [n[i], n[j]] = [n[j], n[i]]; return n;
  });

  if (!token) return <Login onEntrar={(t) => { sessionStorage.setItem("admin_token", t); setToken(t); }} />;

  return (
    <div className="min-h-screen bg-[#F4F7FB] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-[26px] font-bold text-[#0054BE]">Panel de contenido</h1>
          <button onClick={salir} className="rounded-md border-[1px] border-[#0054BE] px-4 py-2 text-sm font-medium text-[#0054BE] hover:bg-[#0054BE] hover:text-white">
            Salir
          </button>
        </header>

        <nav className="mb-5 flex flex-wrap gap-2">
          {COLECCIONES.map((c) => (
            <button key={c.id} onClick={() => setColId(c.id)}
              className={`rounded-md px-4 py-2 text-sm font-semibold ${colId === c.id ? "bg-[#0054BE] text-white" : "bg-white text-[#0054BE] border-[1px] border-[#DDE5EF]"}`}>
              {c.nombre}
            </button>
          ))}
        </nav>

        {error && <p className="mb-4 rounded-md border-l-[4px] border-[#C1272D] bg-[#FDEDEC] px-4 py-3 text-sm text-[#8A1C16]">{error}</p>}
        {estado && <p className="mb-4 text-sm text-[#47586E]">{estado}</p>}

        {datos && (
          <>
            <ul className="flex flex-col gap-4">
              {datos.map((entrada, i) => (
                <li key={i} className="rounded-md border-[1px] border-[#DDE5EF] bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7C8CA1]">
                      {col.nombre} · {i + 1}
                    </span>
                    <div className="flex gap-1">
                      <BotonChico onClick={() => mover(i, -1)} disabled={i === 0} titulo="Subir">↑</BotonChico>
                      <BotonChico onClick={() => mover(i, 1)} disabled={i === datos.length - 1} titulo="Bajar">↓</BotonChico>
                      <BotonChico onClick={() => setDatos((d) => d.filter((_, j) => j !== i))} peligro titulo="Eliminar">✕</BotonChico>
                    </div>
                  </div>

                  {col.id === "stats" ? (
                    <div className="grid gap-3 sm:grid-cols-3">
                      <Campo label="Número" valor={entrada.number} onChange={(v) => actualizar(i, (e) => ({ ...e, number: v }))} />
                      <Campo label="Etiqueta (español)" valor={entrada.es} onChange={(v) => actualizar(i, (e) => ({ ...e, es: v }))} />
                      <Campo label="Etiqueta (inglés)" valor={entrada.en} onChange={(v) => actualizar(i, (e) => ({ ...e, en: v }))} />
                    </div>
                  ) : (
                    <>
                      <div className="mb-4 flex flex-wrap items-center gap-4">
                        {entrada.image && <img src={entrada.image} alt="" className="h-20 w-28 rounded object-cover" />}
                        <div className="flex-1 min-w-[220px]">
                          <Campo label="Ruta de la imagen" valor={entrada.image} onChange={(v) => actualizar(i, (e) => ({ ...e, image: v }))} />
                          <label className="mt-2 inline-block cursor-pointer text-sm font-medium text-[#0054BE] underline">
                            Subir una imagen nueva
                            <input type="file" accept="image/*" className="hidden"
                              onChange={(ev) => ev.target.files[0] && subirImagen(ev.target.files[0], i)} />
                          </label>
                        </div>
                      </div>
                      <Campo label="Link de Instagram (opcional)" valor={entrada.instagram || ""} onChange={(v) => actualizar(i, (e) => ({ ...e, instagram: v }))} />
                      <div className="mt-4 grid gap-5 md:grid-cols-2">
                        {["es", "en"].map((lang) => (
                          <fieldset key={lang} className="rounded border-[1px] border-[#E7EFFA] bg-[#FAFCFE] p-3">
                            <legend className="px-1 text-xs font-bold uppercase tracking-wider text-[#0054BE]">
                              {lang === "es" ? "Español" : "Inglés"}
                            </legend>
                            {col.campos.map((c) => (
                              <Campo key={c.k} label={c.label} tipo={c.tipo}
                                valor={entrada[lang]?.[c.k] || ""}
                                onChange={(v) => actualizar(i, (e) => ({ ...e, [lang]: { ...e[lang], [c.k]: v } }))} />
                            ))}
                          </fieldset>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button onClick={() => setDatos((d) => [...d, vacio(col)])}
                className="rounded-md border-[1px] border-[#0054BE] px-4 py-2 text-sm font-semibold text-[#0054BE] hover:bg-[#E7EFFA]">
                + Agregar
              </button>
              <button onClick={guardar} disabled={guardando}
                className="rounded-md bg-[#0054BE] px-6 py-2 text-sm font-semibold text-white hover:bg-[#004396] disabled:opacity-60">
                {guardando ? "Guardando…" : "Guardar cambios"}
              </button>
              <button onClick={cargar} className="text-sm text-[#47586E] underline">Descartar y recargar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const BotonChico = ({ children, peligro, titulo, ...p }) => (
  <button title={titulo} aria-label={titulo} {...p}
    className={`h-7 w-7 rounded border text-sm leading-none disabled:opacity-30 ${peligro ? "border-[#E3B9B6] text-[#C1272D] hover:bg-[#FDEDEC]" : "border-[#DDE5EF] text-[#47586E] hover:bg-[#F4F7FB]"}`}>
    {children}
  </button>
);

const Campo = ({ label, valor, onChange, tipo = "input" }) => (
  <label className="mb-3 block text-sm">
    <span className="mb-1 block font-medium text-[#47586E]">{label}</span>
    {tipo === "textarea" ? (
      <textarea value={valor} onChange={(e) => onChange(e.target.value)} rows={4}
        className="w-full rounded border-[1px] border-[#C9D0DA] px-3 py-2 text-[#16202E] focus:border-[#0054BE] focus:outline-none" />
    ) : (
      <input value={valor} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded border-[1px] border-[#C9D0DA] px-3 py-2 text-[#16202E] focus:border-[#0054BE] focus:outline-none" />
    )}
  </label>
);

function Login({ onEntrar }) {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviar = async (ev) => {
    ev.preventDefault();
    setEnviando(true); setError("");
    try {
      const r = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ usuario, clave }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "No se pudo entrar.");
      onEntrar(j.token);
    } catch (e) { setError(e.message); }
    finally { setEnviando(false); }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F4F7FB] px-4">
      <form onSubmit={enviar} className="w-full max-w-sm rounded-lg border-[1px] border-[#DDE5EF] bg-white p-7 shadow-sm">
        <h1 className="mb-1 text-[22px] font-bold text-[#0054BE]">Panel de contenido</h1>
        <p className="mb-5 text-sm text-[#7C8CA1]">Voy en Bici</p>
        <Campo label="Usuario" valor={usuario} onChange={setUsuario} />
        <label className="mb-4 block text-sm">
          <span className="mb-1 block font-medium text-[#47586E]">Contraseña</span>
          <input type="password" value={clave} onChange={(e) => setClave(e.target.value)}
            className="w-full rounded border-[1px] border-[#C9D0DA] px-3 py-2 focus:border-[#0054BE] focus:outline-none" />
        </label>
        {error && <p className="mb-4 rounded border-l-[4px] border-[#C1272D] bg-[#FDEDEC] px-3 py-2 text-sm text-[#8A1C16]">{error}</p>}
        <button type="submit" disabled={enviando}
          className="w-full rounded-md bg-[#0054BE] py-2.5 font-semibold text-white hover:bg-[#004396] disabled:opacity-60">
          {enviando ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
