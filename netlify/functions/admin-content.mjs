import { validarToken, json } from "./_auth.mjs";

const COLECCIONES = {
  achievements: "data/achievements.json",
  projects: "data/projects.json",
  stats: "data/stats.json",
};

const API = "https://api.github.com";

function gh(path, token, init = {}) {
  return fetch(`${API}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${token}`,
      accept: "application/vnd.github+json",
      "user-agent": "voy-en-bici-admin",
      ...(init.headers || {}),
    },
  });
}

// --- validacion de forma: nunca commitear lo que llegue sin mirar ---
const texto = (v, max) => typeof v === "string" && v.trim().length > 0 && v.length <= max;
const idiomas = (o, campos) =>
  o && ["es", "en"].every((l) => o[l] && campos.every((c) => texto(o[l][c], 4000)));

function validar(coleccion, datos) {
  if (!Array.isArray(datos)) return "Se esperaba una lista.";
  if (datos.length > 200) return "Demasiadas entradas.";
  for (const [i, e] of datos.entries()) {
    const n = i + 1;
    if (coleccion === "stats") {
      if (!texto(e.number, 20)) return `Entrada ${n}: falta el número.`;
      if (!texto(e.es, 120) || !texto(e.en, 120)) return `Entrada ${n}: falta la etiqueta en algún idioma.`;
      continue;
    }
    if (!texto(e.image, 300) || !e.image.startsWith("/")) return `Entrada ${n}: imagen inválida.`;
    if (e.instagram && !/^https:\/\/(www\.)?instagram\.com\//.test(e.instagram))
      return `Entrada ${n}: el link de Instagram no parece válido.`;
    const campos = coleccion === "achievements" ? ["title", "description"] : ["title", "text", "cta"];
    if (!idiomas(e, campos)) return `Entrada ${n}: faltan textos en español o en inglés.`;
  }
  return null;
}

export default async (req) => {
  const { SESSION_SECRET, GITHUB_TOKEN, GITHUB_REPO, GITHUB_BRANCH = "main" } = process.env;
  if (!SESSION_SECRET || !GITHUB_TOKEN || !GITHUB_REPO) {
    return json({ error: "El panel no está configurado en el servidor." }, 500);
  }

  const usuario = validarToken(req.headers.get("authorization")?.replace(/^Bearer /, ""), SESSION_SECRET);
  if (!usuario) return json({ error: "Sesión vencida. Volvé a entrar." }, 401);

  const url = new URL(req.url);
  const coleccion = url.searchParams.get("collection");
  const ruta = COLECCIONES[coleccion];
  if (!ruta) return json({ error: "Colección desconocida." }, 400);

  // --- leer lo que hay hoy en el repositorio ---
  if (req.method === "GET") {
    const r = await gh(`/repos/${GITHUB_REPO}/contents/${ruta}?ref=${GITHUB_BRANCH}`, GITHUB_TOKEN);
    if (!r.ok) return json({ error: `No se pudo leer el contenido (${r.status}).` }, 502);
    const meta = await r.json();
    return json({ datos: JSON.parse(Buffer.from(meta.content, "base64").toString("utf8")), sha: meta.sha });
  }

  if (req.method !== "PUT") return json({ error: "Método no permitido" }, 405);

  let cuerpo;
  try { cuerpo = await req.json(); } catch { return json({ error: "Pedido inválido" }, 400); }
  const { datos, sha } = cuerpo;

  const problema = validar(coleccion, datos);
  if (problema) return json({ error: problema }, 400);
  if (!sha) return json({ error: "Falta la referencia del archivo. Recargá el panel." }, 400);

  const contenido = JSON.stringify(datos, null, 2) + "\n";
  const r = await gh(`/repos/${GITHUB_REPO}/contents/${ruta}`, GITHUB_TOKEN, {
    method: "PUT",
    body: JSON.stringify({
      message: `contenido: ${coleccion} actualizado desde el panel`,
      content: Buffer.from(contenido, "utf8").toString("base64"),
      sha,
      branch: GITHUB_BRANCH,
    }),
  });

  if (r.status === 409) {
    return json({ error: "Alguien más guardó cambios mientras editabas. Recargá el panel." }, 409);
  }
  if (!r.ok) return json({ error: `No se pudo guardar (${r.status}).` }, 502);

  const guardado = await r.json();
  return json({ ok: true, sha: guardado.content.sha });
};
