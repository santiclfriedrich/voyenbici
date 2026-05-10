import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useLanguage } from "../../context/LanguageContext";

function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setMobileMenuVisible(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const navItems = [
    { to: "/mision", label: t("nav_mision") },
    { to: "/logros", label: t("nav_logros") },
    { to: "/involucrate", label: t("nav_involucrate") },
    { to: "/equipo", label: t("nav_equipo") },
  ];

  const getLinkColor = (index) => {
    if (activeLink === index) return "#0054BE";
    if (hoveredLink === index) return "#0054BE";
    return "#868686";
  };

  const getLinkBorder = (index) => {
    if (activeLink === index) return "2px solid #0054BE";
    if (hoveredLink === index) return "2px solid #0054BE";
    return "2px solid transparent";
  };

  return (
    <header className="w-full h-[86px] bg-white z-[550] sticky top-0 border-t-6 border-[#0054BE] px-[20px] lg:px-[74px] flex items-center justify-between">
      <Link to={"/"} onClick={() => handleLinkClick(-1)}>
        <img
          src="/logo-voy-en-bici-mobile.png"
          alt="logo"
          className="w-[100px] h-[75px] relative z-[1200]"
        />
      </Link>

      <button
        className="lg:hidden focus:outline-none relative z-[1000]"
        onClick={toggleMobileMenu}
      >
        {mobileMenuVisible ? (
          <img src="/close-menu-hamburger.svg" alt="" />
        ) : (
          <img src="/menu-hamburguer.svg" className="relative z-[1000]" alt="" />
        )}
      </button>

      <nav
        className={`flex lg:items-center list-none text-lg lg:flex ${
          mobileMenuVisible
            ? " w-[86%] flex flex-col pt-[106px] gap-10 absolute h-[100vh] right-0 top-[0px] bg-[#FFF] border-t-[#0054be] z-900"
            : "hidden"
        }`}
      >
        {navItems.map((item, index) => (
          <li
            key={item.to}
            className={`${
              mobileMenuVisible ? "w-[100%] text-left pl-10" : "mr-10"
            }`}
          >
            <Link
              to={item.to}
              onClick={() => handleLinkClick(index)}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                borderBottom: getLinkBorder(index),
                color: getLinkColor(index),
                paddingBottom: "6px",
                marginBottom: "-6px",
                fontWeight: activeLink === index ? "500" : "400",
                transition: "color 0.2s ease, border-bottom-color 0.2s ease",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}

        <li
          className={`${
            mobileMenuVisible ? "w-[100%] text-left pl-10" : "mr-6"
          }`}
        >
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="group inline-flex items-center gap-1.5 rounded-[6px] px-2.5 py-1.5 text-xs font-bold tracking-wide text-white shadow-md hover:shadow-lg ring-1 ring-white/30 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundImage: "linear-gradient(135deg, #0054BE 0%, #0C8CE9 100%)",
            }}
          >
            <HiOutlineGlobeAlt className="text-base transition-transform duration-500 group-hover:rotate-[360deg]" />
            <span>{language === "es" ? "EN" : "ES"}</span>
          </button>
        </li>

        <li className="hidden lg:flex items-center gap-3">
          <a
            href="https://www.instagram.com/voyenbici_argentina/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#868686] hover:text-[#0054BE] transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/@voyenbici"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#868686] hover:text-[#0054BE] transition-colors"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/voy-en-bici-argentina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#868686] hover:text-[#0054BE] transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>
        </li>

        <div className="bg-[#868686] w-[100px] h-[.51px] absolute left-[40px] top-[71%] lg:hidden " />
        <div>
          <p className={`lg:hidden text-[18px] font-[500] w-full pl-10 mt-[50px] `}>
            {t("nav_follow")}
          </p>

          <img
            src="/navbar-icons-mobile.svg"
            className="pl-10 lg:hidden"
            alt="icons social media"
          />
        </div>
      </nav>
      <div
        className={`w-full left-0 top-0 mt-[80px] h-[100vh] bg-[#212121ba] absolute z-[-4] ${
          mobileMenuVisible ? "flex" : "hidden"
        }`}
      />
    </header>
  );
}

export default Header;
