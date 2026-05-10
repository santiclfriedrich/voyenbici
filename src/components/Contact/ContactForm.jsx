import { useState } from "react";
import FormGroup from "./FormGroup"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";

const MySwal = withReactContent(Swal)

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

  const validate = () => {
    const validation = form.name.length > 3 && form.email.includes('@') && form.message !== '';
    if (!validation) {
      MySwal.fire({
        icon: 'error',
        title: t("contact_form_error_title"),
        text: t("contact_form_error_text"),
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    if (form.name.length > 3 && form.email.includes('@') && form.message !== '') {
      setLoading(true);
      emailjs
        .send(
          'service_rxba605',
          'template_fks5926',
          {
            from_name: form.name,
            to_name: "Juan Cruz Gregorini",
            from_email: form.email,
            phone: form.phone,
            to_email: "argentina@voyenbici.org",
            message: form.message,
          },
          'SvwDBI_MBsyvGFvu9'
        )
        .then(
          () => {
            setLoading(false);
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
          },
          (error) => {
            setLoading(false);
            console.error(error);
          }
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl shadow-[0_0_10px_7px_rgba(137,137,137,0.07)] max-w-[600px] md:max-w-[830px] h-auto flex flex-col md:m-auto py-6 px-10 items-center m-[20px]">
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
      <button className="py-2.5 px-6 my-4 bg-[#004396] rounded-md text-white font-medium">
        {t("contact_form_send")}
      </button>
    </form>
  )
}

export default ContactForm
