import crypto from "node:crypto";

const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 64 };
const SESION_HORAS = 8;

// scrypt es deliberadamente lento: cada intento de login cuesta ~100ms de CPU,
// lo que limita por si solo un ataque de fuerza bruta.
export function hashClave(clave, salt) {
  return crypto.scryptSync(clave, salt, SCRYPT.keylen, SCRYPT).toString("hex");
}

export function generarHash(clave) {
  const salt = crypto.randomBytes(16).toString("hex");
  return `${salt}:${hashClave(clave, salt)}`;
}

export function verificarClave(clave, guardado) {
  const [salt, esperado] = String(guardado || "").split(":");
  if (!salt || !esperado) return false;
  const calculado = hashClave(clave, salt);
  const a = Buffer.from(calculado, "hex");
  const b = Buffer.from(esperado, "hex");
  // comparacion de tiempo constante: no filtra informacion por cuanto tarda
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function firmar(datos, secreto) {
  return crypto.createHmac("sha256", secreto).update(datos).digest("base64url");
}

export function emitirToken(usuario, secreto) {
  const exp = Date.now() + SESION_HORAS * 3600 * 1000;
  const datos = `${Buffer.from(usuario).toString("base64url")}.${exp}`;
  return `${datos}.${firmar(datos, secreto)}`;
}

export function validarToken(token, secreto) {
  const partes = String(token || "").split(".");
  if (partes.length !== 3) return null;
  const [u, exp, firma] = partes;
  const datos = `${u}.${exp}`;
  const esperada = firmar(datos, secreto);
  const a = Buffer.from(firma);
  const b = Buffer.from(esperada);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  if (Number(exp) < Date.now()) return null;
  return Buffer.from(u, "base64url").toString();
}

export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
