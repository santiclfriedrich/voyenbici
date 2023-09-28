import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";

export default function Contact() {
  return (
    <section id="contact" className="max-w-screen h-screen flex flex-col py-14 px-32 box-border overflow-hidden">
      <ContactHeading/>
      <ContactForm/>
    </section>
  )
}
