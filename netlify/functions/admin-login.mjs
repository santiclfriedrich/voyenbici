import { verificarClave, emitirToken, json, errorConfig } from "./_auth.mjs";

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Método no permitido" }, 405);

  const { ADMIN_USER, ADMIN_PASSWORD_HASH, SESSION_SECRET } = process.env;
  if (!ADMIN_USER || !ADMIN_PASSWORD_HASH || !SESSION_SECRET) {
    return errorConfig(["ADMIN_USER", "ADMIN_PASSWORD_HASH", "SESSION_SECRET"]);
  }

  let cuerpo;
  try { cuerpo = await req.json(); } catch { return json({ error: "Pedido inválido" }, 400); }
  const { usuario = "", clave = "" } = cuerpo;

  const usuarioOk = usuario === ADMIN_USER;
  // Se verifica la clave aunque el usuario no coincida, para que el tiempo de
  // respuesta no revele si el usuario existe.
  const claveOk = verificarClave(clave, ADMIN_PASSWORD_HASH);

  if (!usuarioOk || !claveOk) {
    return json({ error: "Usuario o contraseña incorrectos." }, 401);
  }
  return json({ token: emitirToken(usuario, SESSION_SECRET) });
};
