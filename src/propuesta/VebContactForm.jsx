import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLanguage } from "../context/LanguageContext";
import { CONTACT_EMAIL, whatsappUrl } from "../constants/contact";

const MySwal = withReactContent(Swal);

// Tiene que coincidir con el name del form oculto en index.html (Netlify Forms).
const FORM_NAME = "contacto";
const VACIO = { name: "", email: "", phone: "", message: "" };

// Formulario de contacto con el diseño del rediseño. El envío es el mismo que el de
// components/Contact/ContactForm.jsx: POST a Netlify Forms y, si falla, ofrece WhatsApp o mail.
export default function VebContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(VACIO);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const isValid = form.name.length > 3 && form.email.includes("@") && form.message !== "";

  const showFallback = () => {
    const subject = encodeURIComponent(t("contact_form_fail_subject"));
    MySwal.fire({
      icon: "warning",
      title: t("contact_form_fail_title"),
      text: t("contact_form_fail_text"),
      showCancelButton: true,
      confirmButtonText: t("contact_form_fail_whatsapp"),
      cancelButtonText: t("contact_form_fail_email"),
      confirmButtonColor: "#25D366",
      cancelButtonColor: "#004396",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(whatsappUrl(form.message), "_blank", "noopener");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(form.message)}`;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      MySwal.fire({ icon: "error", title: t("contact_form_error_title"), text: t("contact_form_error_text") });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": FORM_NAME, "bot-field": "", ...form }).toString(),
      });
      if (!response.ok) throw new Error(`Netlify Forms respondió ${response.status}`);
      MySwal.fire({
        iconHtml: `<img src="/logo-voy-en-bici.svg" width="50px" height="50px"/>`,
        iconColor: "#004396",
        title: t("contact_form_success_title"),
        text: t("contact_form_success_text"),
      });
      setForm(VACIO);
    } catch (error) {
      console.error("No se pudo enviar el formulario:", error);
      showFallback();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="cf" name={FORM_NAME} onSubmit={handleSubmit} noValidate>
      <h4>{t("veb_form_titulo")}</h4>
      <p>{t("veb_form_intro")}</p>
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hp" hidden><label>No completar <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="row2">
        <div className="field">
          <label htmlFor="f-name">{t("veb_form_nombre")} <i>*</i></label>
          <input id="f-name" name="name" required autoComplete="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="f-phone">{t("veb_form_telefono")}</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-email">{t("veb_form_email")} <i>*</i></label>
        <input id="f-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} />
      </div>
      <div className="field">
        <label htmlFor="f-msg">{t("veb_form_mensaje")} <i>*</i></label>
        <textarea id="f-msg" name="message" required placeholder={t("veb_form_placeholder")} value={form.message} onChange={handleChange} />
      </div>
      <button className="btn" type="submit" disabled={loading}>
        {loading ? t("contact_form_sending") : `${t("contact_form_send")} →`}
      </button>
    </form>
  );
}
