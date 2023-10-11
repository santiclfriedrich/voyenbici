import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";

export default function Contact() {
  return (
    <section id="contact" className="max-w-screen bg-white h-auto flex flex-col justify-center sm:px-8 md:px-16 lg:px-32 py-8 sm:py-8 md:py-16 lg:py-32 box-border overflow-hidden">
      <ContactHeading/>
      <ContactForm/>
    </section>

  )
}
