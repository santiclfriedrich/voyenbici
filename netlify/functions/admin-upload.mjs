import { validarToken, json } from "./_auth.mjs";

const MAX_BYTES = 1_500_000; // el navegador ya redimensiona; esto es el tope duro
const TIPOS = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

export default async (req) => {
  const { SESSION_SECRET, GITHUB_TOKEN, GITHUB_REPO, GITHUB_BRANCH = "main" } = process.env;
  if (!SESSION_SECRET || !GITHUB_TOKEN || !GITHUB_REPO) {
    return json({ error: "El panel no está configurado en el servidor." }, 500);
  }
  if (req.method !== "POST") return json({ error: "Método no permitido" }, 405);

  const usuario = validarToken(req.headers.get("authorization")?.replace(/^Bearer /, ""), SESSION_SECRET);
  if (!usuario) return json({ error: "Sesión vencida. Volvé a entrar." }, 401);

  let cuerpo;
  try { cuerpo = await req.json(); } catch { return json({ error: "Pedido inválido" }, 400); }
  const { nombre, tipo, base64 } = cuerpo;

  const ext = TIPOS[tipo];
  if (!ext) return json({ error: "Formato no permitido. Usá JPG, PNG o WebP." }, 400);
  if (typeof base64 !== "string") return json({ error: "Falta la imagen." }, 400);

  const bytes = Buffer.from(base64, "base64");
  if (bytes.length > MAX_BYTES) {
    return json({ error: `La imagen pesa ${Math.round(bytes.length / 1024)} KB y el máximo es ${MAX_BYTES / 1024} KB.` }, 413);
  }

  // nombre seguro: sin rutas, sin espacios, sin acentos
  const base = String(nombre || "imagen")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/\.[^.]+$/, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "imagen";
  const archivo = `${base}-${Date.now().toString(36)}.${ext}`;
  const ruta = `public/logros/${archivo}`;

  const r = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${ruta}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
      accept: "application/vnd.github+json",
      "user-agent": "voy-en-bici-admin",
    },
    body: JSON.stringify({
      message: `contenido: imagen ${archivo} subida desde el panel`,
      content: bytes.toString("base64"),
      branch: GITHUB_BRANCH,
    }),
  });
  if (!r.ok) return json({ error: `No se pudo subir la imagen (${r.status}).` }, 502);

  return json({ ok: true, ruta: `/logros/${archivo}` });
};
