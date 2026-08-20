// Unico lugar donde viven los datos de contacto.
// Estaban duplicados en Home.jsx, Footer.jsx y ContactForm.jsx, y el numero
// de WhatsApp no coincidia con el que muestra el footer (+549 1157532148).
// Si los links de WhatsApp no abren la conversacion, probar agregando el 9:
// para Argentina el formato de wa.me suele ser 549 + area + numero.
export const CONTACT_PHONE = "541157532148";
export const CONTACT_EMAIL = "argentina@voyenbici.org";

export const whatsappUrl = (message) =>
  `https://api.whatsapp.com/send?phone=${CONTACT_PHONE}` +
  (message ? `&text=${encodeURIComponent(message)}` : "");
