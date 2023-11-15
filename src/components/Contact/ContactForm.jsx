import { useState } from "react";
import FormGroup from "./FormGroup"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from "@emailjs/browser";

const MySwal = withReactContent(Swal)

function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone:"",
    message: "",
  });

  console.log(form);

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
    if (validation) {
      ""
    }else{
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal 😒',
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    if(form.name.length > 3 && form.email.includes('@') && form.message !== ''){
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
            empresa: form.company,
            to_email: "ramiro.sarasola@gmail.com",
            message: form.message,
          },
          'SvwDBI_MBsyvGFvu9'
        )
        .then(
          () => {
            setLoading(false);
            MySwal.fire({
              icon: 'success',
              title: 'Gracias por tu mensaje!',
              text: 'Nos pondremos en contacto :)',
            });
  
            setForm({
              name: "",
              email: "",
              company: "",
              phone:"",
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
    <form onSubmit={handleSubmit} className="rounded-xl shadow-[0_0_10px_7px_rgba(137,137,137,0.07)] max-w-[830px] h-auto flex flex-col m-auto py-6 px-10 items-center">
        <h2 className="text-[15px] lg:text-[20px] text-[#004396] mb-8 mx-4 text-center">Llena el formulario con tus datos y acerca tu consulta o propuesta. <span className="font-bold">¡Responderemos en breve!</span></h2>
        <FormGroup inputValue={form.name} inputName='name' label="Nombre y Apellido" handleChange={handleChange} />
        <FormGroup inputValue={form.email} inputName='email' label="Email" handleChange={handleChange}/>
        <FormGroup inputValue={form.company} inputName='company' label="Empresa" handleChange={handleChange}/>
        <FormGroup inputValue={form.phone} inputName='phone' label="Telefono" handleChange={handleChange}/>
        <textarea className="rounded-xl py-2 px-4 mb-3 w-[90%] text-sm top-3 text-gray-400"
        style={{border: '2px solid rgba(0,0,0,.5'}} 
        name="message" 
        id="" 
        cols="30" 
        rows="3"
        placeholder="Escribí un mensaje"
        value={form.message}
        onChange={handleChange}  
      />
        <button className="py-2.5 px-6 my-4 bg-[#004396] rounded-md text-white font-medium">Enviar Mensaje</button>
    </form>
  )
}

export default ContactForm