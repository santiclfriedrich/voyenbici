import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { RedesSociales } from "./RedesSociales";

const NAV = [
  ["/mision", "nav_mision"],
  ["/logros", "nav_logros"],
  ["/involucrate", "nav_involucrate"],
  ["/equipo", "nav_equipo"],
];

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const botonIdioma = (clase) => (
    <button className={clase} onClick={toggleLanguage}
      aria-label={language === "es" ? "Switch language to English" : "Cambiar idioma a español"}>
      {"\u{1F310}"} {language === "es" ? "EN" : "ES"}
    </button>
  );
  const claseLink = ({ isActive }) => (isActive ? "on" : undefined);
  const cerrar = () => setAbierto(false);

  return (
    <>
      <header className={scrolled ? "scrolled" : undefined}>
        <div className="wrap nav">
          <Link className="logo" to="/" aria-label="Voy en Bici, inicio">
            <img src="/veb/logo.webp" alt="Voy en Bici" />
          </Link>
          <div className="nav-r">
            <ul>
              {NAV.map(([to, clave]) => (
                <li key={to}><NavLink to={to} className={claseLink}>{t(clave)}</NavLink></li>
              ))}
            </ul>
            {botonIdioma("lang")}
            <div className="soc"><RedesSociales /></div>
            <button className="burger" onClick={() => setAbierto(true)} aria-label={t("veb_menu_abrir")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
          </div>
        </div>
      </header>
      <nav className={`mmenu${abierto ? " open" : ""}`} aria-label="Menú">
        <button className="x" onClick={cerrar} aria-label={t("veb_menu_cerrar")}>×</button>
        {NAV.map(([to, clave]) => (
          <NavLink key={to} to={to} className={claseLink} onClick={cerrar}>{t(clave)}</NavLink>
        ))}
        <div className="m-soc"><RedesSociales /></div>
        {botonIdioma("lang m-lang")}
      </nav>
    </>
  );
}
