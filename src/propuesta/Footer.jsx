import { CONTACT_EMAIL, whatsappUrl } from "../constants/contact";
import { RedesSociales } from "./RedesSociales";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="f-line">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href="https://voyenbici.org">www.voyenbici.org</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">+54 9 11 5753-2148</a>
        </div>
        <div className="f-soc"><RedesSociales /></div>
      </footer>
      <a className="wa" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 .5C5.7.5.5 5.7.5 12c0 2 .5 4 1.5 5.7L.5 23.5l5.9-1.5c1.7.9 3.6 1.4 5.6 1.4 6.3 0 11.5-5.2 11.5-11.5S18.3.5 12 .5z" />
        </svg>
      </a>
    </>
  );
}
