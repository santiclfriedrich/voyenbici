import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";

export default function Contact() {
  return (
    <section id="contact" className="max-w-screen bg-white h-auto flex flex-col justify-center sm:px-8 md:px-16 lg:px-32 pt-4 pb-8 md:pb-16 box-border overflow-hidden">
      <ContactHeading/>
      <ContactForm/>
    </section>

  )
}
