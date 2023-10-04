import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";

export default function Contact() {
  return (
    <section id="contact" className="max-w-screen h-auto flex flex-col py-20 px-32 box-border overflow-hidden">
      <ContactHeading/>
      <ContactForm/>
    </section>
  )
}
