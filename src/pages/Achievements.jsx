// Página generada a partir de la propuesta de rediseño (ver src/propuesta/LEEME.md).
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useVeb } from "../propuesta/useVeb";
import achievements from "../../data/achievements.json";
import initLogros from "../propuesta/scripts/logros";

export function Achievements() {
  const { t, language } = useLanguage();
  const root = useVeb(initLogros);
  // Los "primeros" van destacados arriba; el resto, agrupado por año (los que no tienen año, en "Otros").
  const primeros = achievements.filter((a) => a.primero);
  const linea = achievements.filter((a) => !a.primero);
  const anios = [...new Set(linea.map((a) => a.anio || "Otros"))].sort((a, b) => (a === "Otros") - (b === "Otros") || b.localeCompare(a));
  return (
    <div ref={root}>
      <section className="ph">
        <img src="/logros/premio-bbva-raci.jpeg" alt="El equipo de Voy en Bici recibiendo el Premio a la Inclusión Social BBVA" />
        <div className="wrap">
          <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: t("veb_106") }} />
          <p className="rv d2" dangerouslySetInnerHTML={{ __html: t("veb_107") }} />
        </div>
      </section>
      <section className="lg-firsts">
        <div className="wrap">
          <div className="lg-fhead">
            <h2 className="ms-h2 rv" dangerouslySetInnerHTML={{ __html: t("veb_108") }} />
            <div className="mon rv " style={{right: '0', bottom: '-8px', '--mw': '82px'}} aria-hidden="true">
              <span className="muli-say" dangerouslySetInnerHTML={{ __html: t("veb_109") }} />
              <img src="/veb/muli.webp" alt="" loading="lazy" />
            </div>
          </div>
          <div className="lg-fgrid">
            {primeros.map((a) => {
              const tx = a[language] ?? a.es;
              return (
                <article className="lg-first rv" key={a.image}>
                  <img src={a.image} alt="" loading="lazy" />
                  <div>
                    <span className="lg-medal">{t(a.primero === "mundo" ? "veb_lg_primero_mundo" : "veb_lg_primero_latam")}</span>
                    <h3>{tx.title}</h3>
                    <p>{tx.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="lg-tl">
        <div className="wrap">
          <h2 className="ms-h2 rv" dangerouslySetInnerHTML={{ __html: t("veb_110") }} />
          <div className="lg-filters rv">
            <button className="sel" data-f="*" dangerouslySetInnerHTML={{ __html: t("veb_111") }} />
            <button data-f="premio" dangerouslySetInnerHTML={{ __html: t("veb_112") }} />
            <button data-f="congreso" dangerouslySetInnerHTML={{ __html: t("veb_113") }} />
            <button data-f="reco" dangerouslySetInnerHTML={{ __html: t("veb_110") }} />
          </div>
          {anios.map((y) => (
            <div className="lg-year" data-y={y} key={y}>
              <div className="lg-y"><span>{y === "Otros" ? t("veb_lg_otros") : y}</span></div>
              <div className="lg-cards">
                {linea.filter((a) => (a.anio || "Otros") === y).map((a) => {
                  const tx = a[language] ?? a.es;
                  const lugar = a.lugar && (a.lugar[language] ?? a.lugar.es);
                  return (
                    <article className="lg-card rv" data-t={a.tipo || "premio"} key={a.image}>
                      <div className="lg-img"><img src={a.image} alt={tx.title} loading="lazy" style={a.objectPosition ? { objectPosition: a.objectPosition } : undefined} /></div>
                      <div className="lg-b">
                        <span className={`lg-tag ${a.tipo || "premio"}`}>{t(`veb_lg_tipo_${a.tipo || "premio"}`)}</span>
                        <h3>{tx.title}</h3>
                        <p>{tx.description}</p>
                        {lugar && <span className="lg-loc"><Pin /><span>{lugar}</span></span>}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
          
          
          
          
        </div>
      </section>
      <section className="endcta side">
        <div className="wrap rv">
          <h2 dangerouslySetInnerHTML={{ __html: t("veb_114") }} />
          <div className="ctas">
            <Link to="/involucrate" className="btn btn-y">
              Quiero sumarme
            </Link>
            <Link to="/proyectos" className="btn btn-w">
              Ver los proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
