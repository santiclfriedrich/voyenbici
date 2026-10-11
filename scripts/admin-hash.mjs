// Genera el valor de ADMIN_PASSWORD_HASH para cargar en Netlify.
// Uso:  node scripts/admin-hash.mjs "la-contraseña-elegida"
import { generarHash } from "../netlify/functions/_auth.mjs";

const clave = process.argv[2];
if (!clave || clave.length < 12) {
  console.error("Pasá una contraseña de al menos 12 caracteres, entre comillas.");
  process.exit(1);
}
console.log("\nADMIN_PASSWORD_HASH=" + generarHash(clave) + "\n");
