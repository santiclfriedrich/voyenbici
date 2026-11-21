// Página generada a partir de la propuesta de rediseño (ver src/propuesta/LEEME.md).
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useVeb } from "../propuesta/useVeb";
import stats from "../../data/stats.json";
import VebContactForm from "../propuesta/VebContactForm";
import initHome from "../propuesta/scripts/home";

export default function Home() {
  const { t, language } = useLanguage();
  const root = useVeb(initHome);
  return (
    <div ref={root}>
      <section className="hero" aria-label="Presentación">
        <div className="hero-bg" role="img" aria-label="Chicas y chicos andando en bicicleta por un camino rural" />
        <div className="wrap">
          <h1 id="h1" dangerouslySetInnerHTML={{ __html: t("veb_001") }} />
          <div className="ctas">
            <a className="btn btn-hero" href="#proyectos" dangerouslySetInnerHTML={{ __html: t("veb_002") }} />
            <a className="btn btn-w" href="#sumate" dangerouslySetInnerHTML={{ __html: t("veb_003") }} />
          </div>
        </div>
      </section>
      <section className="que" id="que">
        <div className="wrap">
          <div className="rv">
            <h2 className="t" dangerouslySetInnerHTML={{ __html: t("veb_004") }} />
            <p className="tx" dangerouslySetInnerHTML={{ __html: t("veb_005") }} />
            <p className="tx" dangerouslySetInnerHTML={{ __html: t("veb_006") }} />
          </div>
        </div>
        <div className="ride" id="ride">
          <span className="hint" id="rhint" dangerouslySetInnerHTML={{ __html: t("veb_007") }} />
          <svg className="road base" viewBox="0 0 1000 60" overflow="visible" preserveAspectRatio="none" aria-hidden="true">
            <path d="M-10,24.4 C31,9.5 81,31.7 139,32.4 M135,32.0 C189,33.7 219,25.0 272,37.2 M278,28.0 C323,9.0 415,8.9 464,30.8 M463,30.4 C534,41.0 575,19.8 642,36.0 M648,27.0 C710,34.5 813,33.8 863,33.1 M870,33.2 C900,53.7 949,45.5 987,32.4 M984,28.3 C1027,9.9 1092,27.6 1010,35.9" />
            <path className="sk" d="M1,27.8 Q57,27.1 113,37.0 M248,34.7 Q278,31.6 331,35.2 M302,33.2 Q363,7.4 424,37.5 M506,35.8 Q567,14.4 628,42.0 M953,29.7 Q983,27.8 1011,34.0" />
          </svg>
          <div className="trail" id="trail">
            <svg className="road done" viewBox="0 0 1000 60" overflow="visible" preserveAspectRatio="none" aria-hidden="true">
              <path d="M-10,24.4 C31,9.5 81,31.7 139,32.4 M135,32.0 C189,33.7 219,25.0 272,37.2 M278,28.0 C323,9.0 415,8.9 464,30.8 M463,30.4 C534,41.0 575,19.8 642,36.0 M648,27.0 C710,34.5 813,33.8 863,33.1 M870,33.2 C900,53.7 949,45.5 987,32.4 M984,28.3 C1027,9.9 1092,27.6 1010,35.9" />
              <path className="sk" d="M1,27.8 Q57,27.1 113,37.0 M248,34.7 Q278,31.6 331,35.2 M302,33.2 Q363,7.4 424,37.5 M506,35.8 Q567,14.4 628,42.0 M953,29.7 Q983,27.8 1011,34.0" />
            </svg>
          </div>
          <svg className="school" viewBox="-5 -8 130 115" role="img" aria-label="Escuela">
            <path className="bk thin" d="M60,15 L60,-2" />
            <path d="M60,-4 L80,2 L60,8 Z" fill="#FFD21F" stroke="#0054BE" strokeWidth="3" strokeLinejoin="round" />
            <path className="bk thin" d="M8,50 Q35,30 60,15 Q86,31 112,50" />
            <path className="bk thin" d="M20,47 L19,100 Q60,102 101,100 L100,47" />
            <path className="bk thin" d="M50,100 L50,76 Q60,68 70,76 L70,100" />
            <circle className="bk thin" cx="60" cy="40" r="7" />
            <path className="bk thin" d="M28,62 L40,62 L40,74 L28,74 Z M80,62 L92,62 L92,74 L80,74 Z" />
          </svg>
          <div className="rider" id="rider">
            <svg viewBox="-40 40 440 210" role="img" aria-label="Ilustración de una bicicleta">
              <g className="body">
                <g className="wheel">
                  <circle className="rg" cx="95" cy="175" r="40" />
                  <circle className="rg" cx="95" cy="175" r="24" />
                  <line className="bk thin" x1="124.3" y1="181.2" x2="143.9" y2="185.4" />
                  <line className="bk thin" x1="111.3" y1="200.2" x2="122.2" y2="216.9" />
                  <line className="bk thin" x1="88.8" y1="204.3" x2="84.6" y2="223.9" />
                  <line className="bk thin" x1="69.8" y1="191.3" x2="53.1" y2="202.2" />
                  <line className="bk thin" x1="65.7" y1="168.8" x2="46.1" y2="164.6" />
                  <line className="bk thin" x1="78.7" y1="149.8" x2="67.8" y2="133.1" />
                  <line className="bk thin" x1="101.2" y1="145.7" x2="105.4" y2="126.1" />
                  <line className="bk thin" x1="120.2" y1="158.7" x2="136.9" y2="147.8" />
                  <circle className="bk" cx="95" cy="175" r="62" />
                  <circle className="sad" cx="95" cy="175" r="7" />
                </g>
                <g className="wheel">
                  <circle className="rg" cx="305" cy="175" r="40" />
                  <circle className="rg" cx="305" cy="175" r="24" />
                  <line className="bk thin" x1="334.3" y1="181.2" x2="353.9" y2="185.4" />
                  <line className="bk thin" x1="321.3" y1="200.2" x2="332.2" y2="216.9" />
                  <line className="bk thin" x1="298.8" y1="204.3" x2="294.6" y2="223.9" />
                  <line className="bk thin" x1="279.8" y1="191.3" x2="263.1" y2="202.2" />
                  <line className="bk thin" x1="275.7" y1="168.8" x2="256.1" y2="164.6" />
                  <line className="bk thin" x1="288.7" y1="149.8" x2="277.8" y2="133.1" />
                  <line className="bk thin" x1="311.2" y1="145.7" x2="315.4" y2="126.1" />
                  <line className="bk thin" x1="330.2" y1="158.7" x2="346.9" y2="147.8" />
                  <circle className="bk" cx="305" cy="175" r="62" />
                  <circle className="sad" cx="305" cy="175" r="7" />
                </g>
                <path className="bk" d="M185,180 Q170,135 158,90" />
                <path className="bk" d="M162,100 Q215,90 270,96" />
                <path className="bk" d="M185,180 Q228,142 276,108" />
                <path className="bk" d="M185,180 Q140,182 95,175" />
                <path className="bk" d="M162,100 Q125,140 95,175" />
                <path className="bk" d="M272,92 Q292,132 305,175" />
                <path className="bk" d="M272,92 L264,66" />
                <path className="bk" d="M260,64 Q280,52 294,60 Q302,68 289,77" />
                <ellipse className="sad" cx="146" cy="82" rx="27" ry="10" transform="rotate(-4 146 82)" />
                <g className="crank">
                  <circle className="bk thin" cx="185" cy="180" r="15" />
                  <path className="bk thin" d="M165,156 L205,204" />
                  <path className="bk thin" d="M195,206 L217,202" />
                  <path className="bk thin" d="M153,158 L175,154" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section className="recic">
        <div className="wrap">
          <div className="ill rv">
            <img src="/veb/recic.webp" alt="Manos alrededor de un corazón" />
          </div>
          <div className="rv d1">
            <h2 className="t" dangerouslySetInnerHTML={{ __html: t("veb_008") }} />
            <p className="tx" dangerouslySetInnerHTML={{ __html: t("veb_009") }} />
          </div>
        </div>
      </section>
      <section className="bancos" id="mapa">
        <div className="wrap">
          <div className="bk-head rv">
            <h2 className="t" dangerouslySetInnerHTML={{ __html: t("veb_010") }} />
            <p className="tx" dangerouslySetInnerHTML={{ __html: t("veb_011") }} />
          </div>
          <div className="chips rv d1" id="chips" aria-label="Elegí una provincia" />
          <div className="scene rv">
            <svg id="argmap" viewBox="0 0 400 830" role="img" aria-label="Mapa de Argentina con la ubicación de los Bancos de Bicis" />
            <div className="map-tip" id="tip" />
            <svg className="link" id="link" aria-hidden="true">
              <path />
              <circle r="3.5" />
            </svg>
            <div className="car" id="car" role="region" aria-roledescription="carrusel" aria-label="Fotos de los Bancos de Bicis">
              <div className="car-v">
                <img alt="" />
                <img alt="" />
              </div>
              <span className="car-bar" id="car-bar" />
              <div className="car-cap" aria-live="polite">
                <span className="car-pl" id="car-pl" />
                <span className="car-n" id="car-n" />
              </div>
              <button className="pv" aria-label="Foto anterior">
                &#8249;
              </button>
              <button className="nx" aria-label="Foto siguiente">
                &#8250;
              </button>
            </div>
          </div>
          <div className="prov rv d1">
            <div className="mon rv " style={{right: '18px', bottom: '0', '--mw': '66px'}} aria-hidden="true">
              <img src="/veb/muli.webp" alt="" loading="lazy" />
            </div>
            <b id="pname" />
            <span id="ptext" />
            <div className="pills" id="pills" />
          </div>
        </div>
      </section>
      <section aria-label="Nuestro impacto" className="stats">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <b data-count={String(s.number).replace(/\D/g, "")}>0</b>
            <span>{s[language] ?? s.es}</span>
          </div>
        ))}
      </section>
      <section className="video">
        <div className="vframe rv">
          <video controls preload="none" poster="/veb/video-poster.webp" src="/video-landing.mp4" aria-label="Video de Voy en Bici" />
        </div>
      </section>
      <section className="otros" id="proyectos">
        <div className="wrap">
          <div className="o-head rv">
            <h2 className="t" dangerouslySetInnerHTML={{ __html: t("veb_012") }} />
            <p dangerouslySetInnerHTML={{ __html: t("veb_013") }} />
          </div>
          <div className="o-grid">
            <a className="pj rv" href="https://www.instagram.com/p/DT8tKRzARePh9b7kBjBTHuZ5RQMKlJtZTS2lZY0/" target="_blank" rel="noopener noreferrer">
              <img src="/veb/otros-1.webp" alt="Consultoría de movilidad activa con jóvenes" loading="lazy" />
              <div className="in">
                <h3 dangerouslySetInnerHTML={{ __html: t("veb_014") }} />
                <p dangerouslySetInnerHTML={{ __html: t("veb_015") }} />
                <span className="go" dangerouslySetInnerHTML={{ __html: t("veb_016") }} />
              </div>
            </a>
            <a className="pj rv d1" href="https://www.instagram.com/p/C6ZmHvMLfqL/" target="_blank" rel="noopener noreferrer">
              <img src="/veb/otros-2.webp" alt="Chicos andando en bicicleta en un hogar" loading="lazy" />
              <div className="in">
                <h3 dangerouslySetInnerHTML={{ __html: t("veb_017") }} />
                <p dangerouslySetInnerHTML={{ __html: t("veb_018") }} />
                <span className="go" dangerouslySetInnerHTML={{ __html: t("veb_016") }} />
              </div>
            </a>
            <a className="pj rv d2" href="https://www.instagram.com/p/CnqAP2FO9-1/" target="_blank" rel="noopener noreferrer">
              <img src="/veb/otros-3.webp" alt="Taller de mecánica de bicicletas en una cárcel" loading="lazy" />
              <div className="in">
                <h3 dangerouslySetInnerHTML={{ __html: t("veb_019") }} />
                <p dangerouslySetInnerHTML={{ __html: t("veb_020") }} />
                <span className="go" dangerouslySetInnerHTML={{ __html: t("veb_016") }} />
              </div>
            </a>
          </div>
          <div className="all rv">
            <Link to="/proyectos" className="btn btn-line">
              Ver todos los proyectos →
            </Link>
          </div>
        </div>
      </section>
      <section className="ods">
        <div className="wrap rv">
          <img src="/veb/ods.webp" alt="Los Bancos de Bicicletas presentan una gran oportunidad para garantizar el derecho a la educación, igualar oportunidades y cumplir con 10 Objetivos de Desarrollo Sostenible: fin de la pobreza, salud y bienestar, educación de calidad, igualdad de género, trabajo decente, reducción de las desigualdades, ciudades sostenibles, producción y consumo responsables, acción por el clima y alianzas." loading="lazy" />
        </div>
      </section>
      <div className="lb" id="lb" role="dialog" aria-modal="true" aria-label="Fotos del Banco de Bicis">
        <button className="x" aria-label="Cerrar">
          &times;
        </button>
        <button className="pv" aria-label="Foto anterior">
          &#8249;
        </button>
        <figure>
          <img alt="" />
          <figcaption />
        </figure>
        <button className="nx" aria-label="Foto siguiente">
          &#8250;
        </button>
      </div>
      <section className="sponsors" aria-label="Sponsors">
        <div className="wrap sp-top rv">
          <span className="eyebrow" dangerouslySetInnerHTML={{ __html: t("veb_021") }} />
          <h2 dangerouslySetInnerHTML={{ __html: t("veb_022") }} />
        </div>
        <div className="marquee">
          <div className="mq" id="mq1" />
        </div>
        <div className="marquee">
          <div className="mq" id="mq2" />
        </div>
        <div className="sp-cta rv">
          <a className="btn btn-b" href="#sumate" dangerouslySetInnerHTML={{ __html: t("veb_023") }} />
        </div>
      </section>
      <section className="sumate" id="sumate">
        <div className="wrap">
          <div className="s-grid rv">
            <div className="s-left">
              <h3 dangerouslySetInnerHTML={{ __html: t("veb_024") }} />
              <p dangerouslySetInnerHTML={{ __html: t("veb_025") }} />
              <a className="opt" href="https://wa.me/5491157532148?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20sumar%20a%20mi%20empresa%20como%20aliada%20de%20Voy%20en%20Bici." target="_blank" rel="noopener noreferrer">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                </span>
                <span dangerouslySetInnerHTML={{ __html: t("veb_026") }} />
                <span className="ar">
                  →
                </span>
              </a>
              <a className="opt" href="https://wa.me/5491157532148?text=%C2%A1Hola!%20Quiero%20formar%20parte%20del%20voluntariado." target="_blank" rel="noopener noreferrer">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                  </svg>
                </span>
                <span dangerouslySetInnerHTML={{ __html: t("veb_027") }} />
                <span className="ar">
                  →
                </span>
              </a>
              <a className="opt" href="https://wa.me/5491157532148?text=%C2%A1Hola!%20Quiero%20donar%20mi%20bicicleta." target="_blank" rel="noopener noreferrer">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                </span>
                <span dangerouslySetInnerHTML={{ __html: t("veb_028") }} />
                <span className="ar">
                  →
                </span>
              </a>
              <a className="opt" href="https://wa.me/5491157532148?text=%C2%A1Hola!%20Quiero%20colaborar%20con%20insumos." target="_blank" rel="noopener noreferrer">
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </span>
                <span dangerouslySetInnerHTML={{ __html: t("veb_029") }} />
                <span className="ar">
                  →
                </span>
              </a>
            </div>
            <VebContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
