// Página generada a partir de la propuesta de rediseño (ver src/propuesta/LEEME.md).
import { useLanguage } from "../context/LanguageContext";
import { useVeb } from "../propuesta/useVeb";
import { IoLogoWhatsapp } from "react-icons/io";
import involvement from "../../data/involvement.json";
import { whatsappUrl } from "../constants/contact";
import VebContactForm from "../propuesta/VebContactForm";
import initInvolucrate from "../propuesta/scripts/involucrate";

const PARA_QUIEN = ["e", "e p", "e p", "e p", "p", "c"];

export default function Involvement() {
  const { t } = useLanguage();
  const root = useVeb(initInvolucrate);
  // Para quién es cada opción (filtro "Soy persona / empresa / colegio"): p = personas, e = empresas, c = colegios.
  return (
    <div ref={root}>
      <section className="ph">
        <img src="/involve/(116)SUMA A TU EMPRESA.jpg" alt="Voluntarios de una empresa reparando bicis con Voy en Bici" />
        <div className="wrap">
          <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: t("veb_116") }} />
        </div>
      </section>
      <section className="iv">
        <div className="wrap">
          <div className="iv-top">
            <div className="rv">
              <span className="ms-eye" dangerouslySetInnerHTML={{ __html: t("veb_123") }} />
              <div className="iv-tabs" id="tabs">
                <button className="sel" data-f="*" dangerouslySetInnerHTML={{ __html: t("veb_124") }} />
                <button data-f="p" dangerouslySetInnerHTML={{ __html: t("veb_125") }} />
                <button data-f="e" dangerouslySetInnerHTML={{ __html: t("veb_126") }} />
                <button data-f="c" dangerouslySetInnerHTML={{ __html: t("veb_127") }} />
              </div>
            </div>
            <div className="iv-guide rv d1" aria-live="polite">
              <span className="iv-say" id="say" dangerouslySetInnerHTML={{ __html: t("veb_128") }} />
              <img src="/veb/muli-walk.webp" alt="Muli, la mascota de Voy en Bici" />
            </div>
          </div>
          <div className="iv-grid" id="grid">
            {involvement.map((item, i) => (
              <article className="iv-card rv" data-f={PARA_QUIEN[i] || "p e c"} key={item.img2}>
                <div className="iv-img"><img src={encodeURI(item.img2)} alt="" loading="lazy" style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined} /><span className="iv-n">0{i + 1}</span></div>
                <div className="iv-body">
                  <div className="iv-tags">{(PARA_QUIEN[i] || "p e c").split(" ").map((k) => <span key={k}>{t(`veb_iv_tag_${k}`)}</span>)}</div>
                  <h3>{t(`veb_iv_titulo_${i + 1}`)}</h3>
                  <a className="btn iv-btn" href={whatsappUrl(t(`involvement_cta_msg_${i + 1}`))} target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className="wai" /><span>{t(`involvement_cta_label_${i + 1}`)}</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="iv-form" id="contacto">
        <div className="wrap">
          <div className="rv">
            <VebContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
