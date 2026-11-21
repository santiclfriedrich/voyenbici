// Página generada a partir de la propuesta de rediseño (ver src/propuesta/LEEME.md).
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useVeb } from "../propuesta/useVeb";

export default function Equipo() {
  const { t } = useLanguage();
  const root = useVeb();
  return (
    <div ref={root}>
      <section className="eq-hero">
        <div className="wrap">
          <div>
            <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: t("veb_129") }} />
            <blockquote className="rv d2" dangerouslySetInnerHTML={{ __html: t("veb_130") }} />
          </div>
          <div className="eq-muli">
            <span className="say" dangerouslySetInnerHTML={{ __html: t("veb_131") }} />
            <img src="/veb/muli.webp" alt="Muli, el armadillo mascota de Voy en Bici, saludando" />
          </div>
        </div>
      </section>
      <section className="eq-grid">
        <div className="wrap">
          <div className="eq-m">
            <figure className="eq-c a rv">
              <img src="/equipo/julio-coco.JPG" alt="Julio Coco" loading="lazy" />
              <figcaption>
                Julio Coco
              </figcaption>
            </figure>
            <figure className="eq-c w rv">
              <img src="/equipo/mariano-ator.jpeg" alt="Mariano Ator" loading="lazy" />
              <figcaption>
                Mariano Ator
              </figcaption>
            </figure>
            <figure className="eq-c t rv">
              <img src="/equipo/nico-pereira.jpeg" alt="Nico Pereira" loading="lazy" />
              <figcaption>
                Nico Pereira
              </figcaption>
            </figure>
            <figure className="eq-c  rv">
              <img src="/equipo/pablo-castillo.jpeg" alt="Pablo Castillo" loading="lazy" />
              <figcaption>
                Pablo Castillo
              </figcaption>
            </figure>
            <figure className="eq-c  rv">
              <img src="/equipo/romina-roger-ivan.jpeg" alt="Romina, Roger e Iván" loading="lazy" />
              <figcaption>
                Romina, Roger e Iván
              </figcaption>
            </figure>
            <figure className="eq-c w rv">
              <img src="/equipo/roxana-arizzi.jpeg" alt="Roxana Arizzi" loading="lazy" />
              <figcaption>
                Roxana Arizzi
              </figcaption>
            </figure>
            <figure className="eq-c w rv">
              <img src="/equipo/seba-fede-gise.jpg" alt="Seba, Fede y Gise" loading="lazy" />
              <figcaption>
                Seba, Fede y Gise
              </figcaption>
            </figure>
            <figure className="eq-c w rv">
              <img src="/equipo/juan-y-ale.jpeg" alt="Juan y Ale" loading="lazy" />
              <figcaption>
                Juan y Ale
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="endcta">
        <div className="wrap rv">
          <h2 dangerouslySetInnerHTML={{ __html: t("veb_132") }} />
          <div className="ctas">
            <Link to="/involucrate" className="btn btn-y"><span dangerouslySetInnerHTML={{ __html: t("veb_133") }} /></Link>
            <Link to="/mision" className="btn btn-w"><span dangerouslySetInnerHTML={{ __html: t("veb_134") }} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
