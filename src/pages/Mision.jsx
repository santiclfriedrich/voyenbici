// Página generada a partir de la propuesta de rediseño (ver src/propuesta/LEEME.md).
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useVeb } from "../propuesta/useVeb";
import initMision from "../propuesta/scripts/mision";

export default function Mision() {
  const { t } = useLanguage();
  const root = useVeb(initMision);
  return (
    <div ref={root}>
      <section className="ms-hero" aria-label="Nuestra misión">
        <img src="/veb/mision/hero.jpg" alt="Una estudiante pedalea por un camino rural de tierra" />
        <div className="wrap">
          <span className="ms-eye rv" dangerouslySetInnerHTML={{ __html: t("veb_031") }} />
          <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: t("veb_032") }} />
        </div>
      </section>
      <div className="wrap ms-mv">
        <article className="rv">
          <h2 dangerouslySetInnerHTML={{ __html: t("veb_033") }} />
          <p dangerouslySetInnerHTML={{ __html: t("veb_034") }} />
        </article>
        <article className="rv d1">
          <h2 dangerouslySetInnerHTML={{ __html: t("veb_035") }} />
          <p dangerouslySetInnerHTML={{ __html: t("veb_036") }} />
        </article>
      </div>
      <section className="ms-road">
        <div className="wrap">
          <div className="rv">
            <span className="ms-eye" dangerouslySetInnerHTML={{ __html: t("veb_037") }} />
            <h2 className="ms-h2" dangerouslySetInnerHTML={{ __html: t("veb_038") }} />
            <p className="ms-lead" dangerouslySetInnerHTML={{ __html: t("veb_039") }} />
            <div className="ms-race" id="race">
              <div>
                <div className="lbl">
                  <span dangerouslySetInnerHTML={{ __html: t("veb_040") }} />
                  <b data-to="12" data-dur="1200">
                    0 min
                  </b>
                </div>
                <div className="ms-track" style={{'--d': '1.2s'}}>
                  <i style={{'--w': '9.4%'}} />
                </div>
              </div>
              <div className="walk">
                <div className="lbl">
                  <span dangerouslySetInnerHTML={{ __html: t("veb_041") }} />
                  <b data-to="128" data-dur="7500">
                    0 min
                  </b>
                </div>
                <div className="ms-track" style={{'--d': '7.5s', '--w': '100%'}}>
                  <i style={{'--w': '100%', '--c': '#9AA8BE'}} />
                  <img className="mw" src="/veb/muli-walk.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="ms-save rv">
              <b dangerouslySetInnerHTML={{ __html: t("veb_042") }} />
              <span dangerouslySetInnerHTML={{ __html: t("veb_043") }} />
            </div>
            <p className="ms-src" dangerouslySetInnerHTML={{ __html: t("veb_044") }} />
          </div>
          <figure className="rv d1">
            <img className="ms-fade" src="/veb/mision/camino.jpg" alt="Camino rural de tierra" loading="lazy" />
          </figure>
        </div>
      </section>
      <section className="ms-nums">
        <img src="/veb/mision/bn.jpg" alt="" loading="lazy" />
        <div className="wrap">
          <span className="ms-eye rv" dangerouslySetInnerHTML={{ __html: t("veb_045") }} />
          <h2 className="ms-h2 rv" dangerouslySetInnerHTML={{ __html: t("veb_046") }} />
          <div className="ms-ngrid">
            <div className="ms-n rv">
              <b>
                <span data-count="2">
                  0
                </span>
                <small dangerouslySetInnerHTML={{ __html: t("veb_047") }} />
                3
              </b>
              <p dangerouslySetInnerHTML={{ __html: t("veb_048") }} />
              <cite>
                UNICEF Argentina (2023)
              </cite>
            </div>
            <div className="ms-n rv d1">
              <b>
                <span data-count="35">
                  0
                </span>
                <small>
                  %
                </small>
              </b>
              <p dangerouslySetInnerHTML={{ __html: t("veb_049") }} />
              <cite dangerouslySetInnerHTML={{ __html: t("veb_050") }} />
            </div>
          </div>
          <blockquote className="ms-quote rv" dangerouslySetInnerHTML={{ __html: t("veb_051") }} />
        </div>
      </section>
      <section className="ms-gap">
        <div className="wrap">
          <div className="rv">
            <span className="ms-eye">
              Argentinos por la Educación (2025)
            </span>
            <h2 className="ms-h2" dangerouslySetInnerHTML={{ __html: t("veb_052") }} />
            <p className="ms-lead" dangerouslySetInnerHTML={{ __html: t("veb_053") }} />
            <a className="ms-link" href="/#mapa" dangerouslySetInnerHTML={{ __html: t("veb_054") }} />
          </div>
          <div className="rv d1">
            <ul className="ms-bars" id="bars" aria-label="Estudiantes que terminan la secundaria en tiempo y forma, cada 100">
              <li className="avg">
                <div dangerouslySetInnerHTML={{ __html: t("veb_055") }} />
                <div className="bar">
                  <i style={{'--w': '100%'}} />
                  <span>
                    10 %
                  </span>
                </div>
              </li>
              <li>
                <div>
                  Catamarca
                </div>
                <div className="bar">
                  <i style={{'--w': '40%'}} />
                  <span>
                    4 %
                  </span>
                </div>
              </li>
              <li className="here">
                <div>
                  Misiones
                  <br />
                  <span className="tag" dangerouslySetInnerHTML={{ __html: t("veb_056") }} />
                </div>
                <div className="bar">
                  <i style={{'--w': '40%'}} />
                  <span>
                    4 %
                  </span>
                </div>
              </li>
              <li className="here">
                <div>
                  Santiago del Estero
                  <br />
                  <span className="tag" dangerouslySetInnerHTML={{ __html: t("veb_056") }} />
                </div>
                <div className="bar">
                  <i style={{'--w': '40%'}} />
                  <span>
                    4 %
                  </span>
                </div>
              </li>
              <li className="here">
                <div>
                  Chaco
                  <br />
                  <span className="tag" dangerouslySetInnerHTML={{ __html: t("veb_056") }} />
                </div>
                <div className="bar">
                  <i style={{'--w': '30%'}} />
                  <span>
                    3 %
                  </span>
                </div>
              </li>
            </ul>
            <p className="ms-src" dangerouslySetInnerHTML={{ __html: t("veb_057") }} />
          </div>
        </div>
      </section>
      <section className="ms-why">
        <div className="wrap">
          <div className="head rv">
            <span className="ms-eye" dangerouslySetInnerHTML={{ __html: t("veb_058") }} />
            <h2 className="ms-h2" dangerouslySetInnerHTML={{ __html: t("veb_059") }} />
            <p className="ms-lead" dangerouslySetInnerHTML={{ __html: t("veb_060") }} />
          </div>
          <ul className="ms-fgrid">
            <li className="key rv">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <h3 dangerouslySetInnerHTML={{ __html: t("veb_061") }} />
            </li>
            <li className="rv d1">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 11l9-7 9 7" />
                <path d="M5 10v10h14V10" />
                <path d="M10 20v-5h4v5" />
              </svg>
              <h3 dangerouslySetInnerHTML={{ __html: t("veb_062") }} />
            </li>
            <li className="rv d1">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M14.8 9.2c-.5-.9-1.6-1.4-2.8-1.4-1.6 0-2.8.8-2.8 2s1.2 1.7 2.8 2.1 2.8.9 2.8 2.1-1.2 2.1-2.8 2.1c-1.3 0-2.4-.6-2.9-1.5M12 6.2v1.6M12 16.2v1.6" />
              </svg>
              <h3 dangerouslySetInnerHTML={{ __html: t("veb_063") }} />
            </li>
            <li className="rv d2">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10l9-5 9 5-9 5-9-5z" />
                <path d="M7 12.2V16c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-3.8" />
                <path d="M21 10v5" />
              </svg>
              <h3 dangerouslySetInnerHTML={{ __html: t("veb_064") }} />
            </li>
          </ul>
        </div>
      </section>
      <section className="ms-lend">
        <div className="wrap">
          <figure className="rv">
            <div className="mon rv l" style={{left: '-5%', bottom: '3%', '--mw': '150px'}} aria-hidden="true">
              <span className="muli-say" dangerouslySetInnerHTML={{ __html: t("veb_065") }} />
              <img src="/veb/muli-walk.webp" alt="" loading="lazy" />
            </div>
            <img className="ms-fade" src="/veb/mision/presta.jpg" alt="Estudiantes de una escuela rural con el instructivo para arreglar su bici" loading="lazy" />
          </figure>
          <div className="rv d1">
            <span className="ms-eye" dangerouslySetInnerHTML={{ __html: t("veb_066") }} />
            <h2 className="ms-h2" dangerouslySetInnerHTML={{ __html: t("veb_067") }} />
            <p className="ms-lead" dangerouslySetInnerHTML={{ __html: t("veb_068") }} />
            <ul className="ms-deals">
              <li>
                <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
                  <path d="M3.5 10h17M8 3v4M16 3v4" />
                  <path d="M9 15l2 2 4-4" />
                </svg>
                <div>
                  <b dangerouslySetInnerHTML={{ __html: t("veb_069") }} />
                </div>
              </li>
              <li>
                <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 3h7l4 4v14H7z" />
                  <path d="M14 3v4h4" />
                  <path d="M9.5 13l2 2 3.5-3.5" />
                </svg>
                <div>
                  <b dangerouslySetInnerHTML={{ __html: t("veb_070") }} />
                </div>
              </li>
              <li>
                <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-2.6-.6-.6-2.6z" />
                </svg>
                <div>
                  <b dangerouslySetInnerHTML={{ __html: t("veb_071") }} />
                </div>
              </li>
            </ul>
            <p className="ms-kit">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-2.6-.6-.6-2.6z" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: t("veb_072") }} />
            </p>
          </div>
        </div>
      </section>
      <section className="ms-steps">
        <div className="wrap">
          <div className="head rv">
            <span className="ms-eye" dangerouslySetInnerHTML={{ __html: t("veb_073") }} />
            <h2 className="ms-h2" dangerouslySetInnerHTML={{ __html: t("veb_074") }} />
          </div>
          <ol className="ms-path" id="path">
            <span className="fill" aria-hidden="true" />
            <span className="rider" aria-hidden="true">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="6" cy="16" r="3.6" />
                <circle cx="18" cy="16" r="3.6" />
                <path d="M6 16l4-7h5l3 7M10 9l3 7h-7M13.5 6.5H16" />
              </svg>
            </span>
            <li className="ms-step rv">
              <span className="ms-num">
                1
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e1.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_075") }} />
                </div>
              </div>
            </li>
            <li className="ms-step rv">
              <span className="ms-num">
                2
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e2.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_076") }} />
                </div>
              </div>
            </li>
            <li className="ms-step rv">
              <span className="ms-num">
                3
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e3.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_077") }} />
                </div>
              </div>
            </li>
            <li className="ms-step rv">
              <span className="ms-num">
                4
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e4.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_078") }} />
                </div>
              </div>
            </li>
            <li className="ms-step rv">
              <span className="ms-num">
                5
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e5.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_079") }} />
                </div>
              </div>
            </li>
            <li className="ms-step rv">
              <span className="ms-num">
                6
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e6.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_080") }} />
                </div>
              </div>
            </li>
            <li className="ms-step rv">
              <span className="ms-num">
                7
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e7.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_081") }} />
                </div>
              </div>
            </li>
            <li className="ms-step rv">
              <span className="ms-num">
                8
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e8.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_082") }} />
                </div>
              </div>
            </li>
            <li className="ms-step rv">
              <span className="ms-num">
                9
              </span>
              <div className="ms-sc">
                <img src="/veb/mision/e9.jpg" alt="" loading="lazy" />
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: t("veb_083") }} />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="ms-proof">
        <div className="wrap">
          <div className="rv">
            <div className="ms-cmp" id="cmp">
              <img src="/veb/mision/antes.jpg" alt="Inauguración del Banco de Bicis en la Escuela Nº 399, noviembre de 2022" loading="lazy" />
              <img className="after" src="/veb/mision/despues.jpg" alt="Estudiantes con sus bicis en la Escuela Nº 399, junio de 2025" loading="lazy" />
              <span className="line" />
              <span className="knob" aria-hidden="true">
                ‹›
              </span>
              <span className="tg l" dangerouslySetInnerHTML={{ __html: t("veb_084") }} />
              <span className="tg r" dangerouslySetInnerHTML={{ __html: t("veb_085") }} />
              <input type="range" min="0" max="100" defaultValue="50" aria-label="Comparar la foto de noviembre de 2022 con la de junio de 2025" />
            </div>
          </div>
          <div className="rv d1">
            <span className="ms-eye" dangerouslySetInnerHTML={{ __html: t("veb_086") }} />
            <h2 className="ms-h2" dangerouslySetInnerHTML={{ __html: t("veb_087") }} />
            <p className="ms-lead" dangerouslySetInnerHTML={{ __html: t("veb_088") }} />
            <ul className="ms-res">
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t("veb_089") }} />
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t("veb_090") }} />
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t("veb_091") }} />
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t("veb_092") }} />
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t("veb_093") }} />
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: t("veb_094") }} />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="ms-vals">
        <div className="wrap">
          <span className="ms-eye rv" dangerouslySetInnerHTML={{ __html: t("veb_095") }} />
          <h2 className="ms-h2 rv" dangerouslySetInnerHTML={{ __html: t("veb_096") }} />
          <ul className="ms-vgrid">
            <li className="rv">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="8" r="3.2" />
                <path d="M3.5 20c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M15.5 14.6c2.8-.4 5 1.6 5 4.4" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: t("veb_097") }} />
            </li>
            <li className="rv">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7" />
                <path d="M20 4v4.7h-4.7" />
                <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.3" />
                <path d="M4 20v-4.7h4.7" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: t("veb_098") }} />
            </li>
            <li className="rv">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="6" cy="16" r="3.6" />
                <circle cx="18" cy="16" r="3.6" />
                <path d="M6 16l4-7h5l3 7M10 9l3 7h-7M13.5 6.5H16" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: t("veb_099") }} />
            </li>
            <li className="rv">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z" />
                <path d="M8 12h2l1.2-2 1.6 4 1.2-2h2" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: t("veb_100") }} />
            </li>
            <li className="rv">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
                <path d="M5 19c3-4 6-7 10-9" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: t("veb_101") }} />
            </li>
            <li className="rv">
              <svg className="ms-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l2.5 5.2 5.7.8-4.1 4 1 5.6L12 16l-5.1 2.6 1-5.6-4.1-4 5.7-.8z" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: t("veb_102") }} />
            </li>
          </ul>
        </div>
      </section>
      <section className="ms-end">
        <img src="/veb/mision/cierre.jpg" alt="Estudiantes rurales andando en bicicleta por un camino de tierra" loading="lazy" />
        <div className="wrap rv">
          <blockquote dangerouslySetInnerHTML={{ __html: t("veb_103") }} />
          <p dangerouslySetInnerHTML={{ __html: t("veb_104") }} />
          <div className="ctas">
            <a className="btn btn-y" href="https://wa.me/5491157532148?text=%C2%A1Hola!%20Quiero%20donar%20una%20bici%20a%20Voy%20en%20Bici." target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: t("veb_105") }} />
            <Link to="/involucrate" className="btn btn-w"><span dangerouslySetInnerHTML={{ __html: t("veb_106") }} /></Link>
            <a className="btn btn-w" href="/#mapa" dangerouslySetInnerHTML={{ __html: t("veb_107") }} />
          </div>
        </div>
      </section>
    </div>
  );
}
