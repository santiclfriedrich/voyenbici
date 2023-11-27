import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

function Header() {
  // Define state to track the active link
  const [activeLink, setActiveLink] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const navigate = useNavigate();

  // Function to handle click events on links
  const handleLinkClick = (index) => {
    setActiveLink(index);
    setMobileMenuVisible(false);
    if (index == 3) {
      navigate("/");

      // Luego, desplaza suavemente a la sección de contacto
      setTimeout(() => {
        scroller.scrollTo("contact", {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 50);
    }
    if (index == 4) {
      navigate("/");

      // Luego, desplaza suavemente a la sección de contacto
      setTimeout(() => {
        scroller.scrollTo("dona-btn", {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 50);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
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

      {/* Por si quieren agregar el logo en el navbar */}
      {/* <img src="/logo-voy-en-bici-mobile.png" alt="logo" className={`${mobileMenuVisible ? 'flex z-[1000] w-[100px] h-[75px] absolute right-[60%]' : 'hidden'}`} /> */}

      <button
        className="lg:hidden focus:outline-none relative z-[1000]"
        onClick={toggleMobileMenu}
      >
        {
          mobileMenuVisible
            ?
            <img src="/close-menu-hamburger.svg" alt="" />
            :
            <img src="/menu-hamburguer.svg" className="relative z-[1000]" alt="" />
        }
      </button>

      <nav
        className={`flex lg:items-center list-none text-lg lg:flex ${
          mobileMenuVisible
            ? " w-[86%] flex flex-col pt-[106px] gap-10 absolute h-[100vh] right-0 top-[0px] bg-[#FFF] border-t-[#0054be] z-900"
            : "hidden"
        }`}
      >
        <li
          className={`${
            mobileMenuVisible ? "w-[100%] text-left pl-10" : "mr-10"
          }`}
        >
          <Link
            to="/mision"
            onClick={() => handleLinkClick(0)}
            style={{
              borderBottom: activeLink === 0 ? "2px solid #0054BE" : "none",
              color: activeLink === 0 ? "#0054BE" : "#868686",
              paddingBottom: "6px",
              marginBottom: "-6px",
              fontWeight: activeLink === 0 ? "500" : "400",
            }}
          >
            Misión
          </Link>
        </li>
        <li
          className={`${
            mobileMenuVisible ? "w-[100%] text-left pl-10" : "mr-10"
          }`}
        >
          <Link
            to="/logros"
            onClick={() => handleLinkClick(1)}
            style={{
              borderBottom: activeLink === 1 ? "2px solid #0054BE" : "none",
              color: activeLink === 1 ? "#0054BE" : "#868686",
              paddingBottom: "6px",
              marginBottom: "-6px",
              fontWeight: activeLink === 1 ? "500" : "400",
            }}
          >
            Logros
          </Link>
        </li>
        <li
          className={`${
            mobileMenuVisible ? "w-[100%] text-left pl-10" : "mr-10"
          }`}
        >
          <Link
            to="/involucrate"
            onClick={() => handleLinkClick(2)}
            style={{
              borderBottom: activeLink === 2 ? "2px solid #0054BE" : "none",
              color: activeLink === 2 ? "#0054BE" : "#868686",
              paddingBottom: "6px",
              marginBottom: "-6px",
              fontWeight: activeLink === 2 ? "500" : "400",
            }}
          >
            ¿Cómo puedo involucrarme?
          </Link>
        </li>
        <li
          className={`${
            mobileMenuVisible ? "w-[100%] text-left pl-10" : "mr-10"
          }`}
        >
          <ScrollLink
            to="contact"
            onClick={() => handleLinkClick(3)}
            style={{
              borderBottom: activeLink === 3 ? "2px solid #0054BE" : "none",
              color: activeLink === 3 ? "#0054BE" : "#868686",
              paddingBottom: "6px",
              marginBottom: "-6px",
              fontWeight: activeLink === 3 ? "500" : "400",
              cursor: "pointer",
            }}
          >
            Contactanos
          </ScrollLink>
        </li>
        <li
          className={`${
            mobileMenuVisible ? "w-[100%] text-left pl-10" : "mr-10"
          }`}
          onClick={() => setMobileMenuVisible(false)}
        >
          <Link
            to="/dona"
            className="inline-flex bg-[#0054BE] text-white py-[10px] px-[24px] rounded-[6px] text-[18px] w-auto h-[48px] gap-2"
          >
            Dona Ahora
          </Link>
        </li>

        <div className="bg-[#868686] w-[100px] h-[.51px] absolute left-[40px] top-[71%] lg:hidden " />
        <div>
          <p
            className={`lg:hidden text-[18px] font-[500] w-full pl-10 mt-[50px] `}
          >
            Seguinos
          </p>

          <img
            src="/navbar-icons-mobile.svg"
            className="pl-10 lg:hidden"
            alt="icons social media"
          />
        </div>
      </nav>
      {/* empty div for background on mobile menu with black opacity*/}
      <div
        className={`w-full left-0 top-0 mt-[80px] h-[100vh] bg-[#212121ba] absolute z-[-4] ${
          mobileMenuVisible ? "flex" : "hidden"
        }`}
      />
    </header>
  );
}

export default Header;
