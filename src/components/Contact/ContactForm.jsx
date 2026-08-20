import { useState } from "react";
import FormGroup from "./FormGroup"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT_EMAIL, whatsappUrl } from "../../constants/contact";

const MySwal = withReactContent(Swal)

// Tiene que coincidir con el name del form oculto en index.html.
const FORM_NAME = "contacto";

function ContactForm() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const isValid = form.name.length > 3 && form.email.includes('@') && form.message !== '';

  // Si el envio falla, la persona igual se tiene que poder ir con un canal de contacto.
  const showFallback = () => {
    const subject = encodeURIComponent(t("contact_form_fail_subject"));

    MySwal.fire({
      icon: 'warning',
      title: t("contact_form_fail_title"),
      text: t("contact_form_fail_text"),
      showCancelButton: true,
      confirmButtonText: t("contact_form_fail_whatsapp"),
      cancelButtonText: t("contact_form_fail_email"),
      confirmButtonColor: '#25D366',
      cancelButtonColor: '#004396',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(whatsappUrl(form.message), '_blank', 'noopener');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(form.message)}`;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      MySwal.fire({
        icon: 'error',
        title: t("contact_form_error_title"),
        text: t("contact_form_error_text"),
      });
      return;
    }

    setLoading(true);

    try {
      // Netlify Forms recibe un POST url-encoded en la raiz del sitio.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": FORM_NAME,
          "bot-field": "",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }).toString(),
      });

      // fetch no rechaza por status HTTP, hay que chequear ok a mano.
      if (!response.ok) {
        throw new Error(`Netlify Forms respondió ${response.status}`);
      }

      MySwal.fire({
        iconHtml: `<img src="/logo-voy-en-bici.svg" width="50px" height="50px"/>`,
        iconColor: '#004396',
        title: t("contact_form_success_title"),
        text: t("contact_form_success_text"),
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("No se pudo enviar el formulario:", error);
      showFallback();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      name={FORM_NAME}
      onSubmit={handleSubmit}
      className="rounded-xl shadow-[0_0_10px_7px_rgba(137,137,137,0.07)] max-w-[600px] md:max-w-[830px] h-auto flex flex-col md:m-auto py-6 px-10 items-center m-[20px]"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p hidden>
        <label>No completar<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <h2 className="text-[15px] lg:text-[20px] text-[#004396] mb-8 mx-4 text-center">
        {t("contact_form_intro")} <span className="font-bold">{t("contact_form_intro_bold")}</span>
      </h2>
      <FormGroup inputValue={form.name} inputName='name' label={t("contact_form_name")} handleChange={handleChange} />
      <FormGroup inputValue={form.email} inputName='email' label={t("contact_form_email")} handleChange={handleChange} />
      <FormGroup inputValue={form.phone} inputName='phone' label={t("contact_form_phone")} handleChange={handleChange} />
      <textarea className="rounded-xl py-2 px-4 mb-3 w-[90%] text-sm top-3 text-gray-400"
        style={{ border: '2px solid rgba(0,0,0,.5' }}
        name="message"
        id=""
        cols="30"
        rows="3"
        placeholder={t("contact_form_message")}
        value={form.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        disabled={loading}
        className="py-2.5 px-6 my-4 bg-[#004396] rounded-md text-white font-medium disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? t("contact_form_sending") : t("contact_form_send")}
      </button>
    </form>
  )
}

export default ContactForm
