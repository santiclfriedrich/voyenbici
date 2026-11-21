// Página generada a partir de la propuesta de rediseño (ver src/propuesta/LEEME.md).
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useVeb } from "../propuesta/useVeb";
import projects from "../../data/projects.json";
import { whatsappUrl } from "../constants/contact";
import initProyectos from "../propuesta/scripts/proyectos";

export default function Projects() {
  const { t, language } = useLanguage();
  const root = useVeb(initProyectos);
  return (
    <div ref={root}>
      <section className="ph">
        <img src="/donaBici2.jpg" alt="Estudiantes andando en bici por un camino rural" />
        <div className="wrap">
          <h1 className="rv d1" dangerouslySetInnerHTML={{ __html: t("veb_119") }} />
          <p className="rv d2" dangerouslySetInnerHTML={{ __html: t("veb_120") }} />
        </div>
      </section>
      <nav className="pr-idx" aria-label="Proyectos">
      <div className="wrap">
        {projects.map((p, i) => (
          <a href={`#proyecto-${i + 1}`} key={p.image}><b>0{i + 1}</b>{(p[language] ?? p.es).corto ?? (p[language] ?? p.es).title}</a>
        ))}
      </div>
      </nav>
      <section className="pr-list">
      <div className="wrap">
        {projects.map((p, i) => {
          const tx = p[language] ?? p.es;
          const accion = p.accion && { href: p.accion.whatsapp ? whatsappUrl(t(p.accion.whatsapp)) : p.accion.href, texto: p.accion[language] ?? p.accion.es };
          const externo = (href) => /^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <article className="pr-row" id={`proyecto-${i + 1}`} key={p.image}>
              <figure className="rv"><img className="ms-fade" src={p.image} alt="" loading="lazy" /></figure>
              <div className="rv d1">
                <span className="pr-n">0{i + 1}</span>
                <h2 className="ms-h2">{tx.title}</h2>
                <p className="ms-lead">{tx.text}</p>
                <div className="pr-ctas">
                  {accion && <a className="btn btn-b" href={accion.href} {...externo(accion.href)}>{accion.texto}</a>}
                  {p.instagram && (accion
                    ? <a className="ms-link" href={p.instagram} target="_blank" rel="noopener noreferrer">{tx.cta} <span aria-hidden="true">→</span></a>
                    : <a className="btn btn-b" href={p.instagram} target="_blank" rel="noopener noreferrer">{tx.cta}</a>)}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      </section>
      <section className="endcta side">
        <div className="wrap rv">
          <h2 dangerouslySetInnerHTML={{ __html: t("veb_116") }} />
          <div className="ctas">
            <Link to="/involucrate" className="btn btn-y"><span dangerouslySetInnerHTML={{ __html: t("veb_121") }} /></Link>
            <a className="btn btn-w" href="https://wa.me/5491157532148" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: t("veb_122") }} />
          </div>
        </div>
      </section>
    </div>
  );
}
