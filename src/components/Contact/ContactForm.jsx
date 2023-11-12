import FormGroup from "./FormGroup"

function ContactForm() {
  return (
    <form className="rounded-xl shadow-[0_0_10px_7px_rgba(137,137,137,0.07)] max-w-[830px] h-auto flex flex-col m-auto py-6 px-10 items-center">
        <h2 className="text-[15px] lg:text-[20px] text-[#004396] mb-8 mx-4 text-center">Llena el formulario con tus datos y acerca tu consulta o propuesta. <span className="font-bold">¡Responderemos en breve!</span></h2>
        <FormGroup label="Nombre y Apellido" />
        <FormGroup label="Email" />
        <FormGroup label="Empresa" />
        <FormGroup label="Telefono" />
        <textarea className="rounded-xl py-2 px-4 mb-3 w-[90%] text-sm top-3 text-gray-400"
        style={{border: '2px solid rgba(0,0,0,.5'}} 
        name="" 
        id="" 
        cols="30" 
        rows="3"
        placeholder="Escribí un mensaje"></textarea>
        <button className="py-2.5 px-6 my-4 bg-[#004396] rounded-md text-white font-medium">Enviar Mensaje</button>
    </form>
  )
}

export default ContactForm