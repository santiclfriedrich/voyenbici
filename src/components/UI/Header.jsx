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
      navigate('/');

      // Luego, desplaza suavemente a la sección de contacto
      setTimeout(() => {
        scroller.scrollTo('contact', {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }, 50); 
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header className="w-full h-[86px] bg-white z-50 sticky top-0 border-t-6 border-[#0054BE] px-[20px] lg:px-[74px] flex items-center justify-between">
      <Link to={"/"} onClick={() => handleLinkClick(-1)}>
        <img src="/logo-voy-en-bici.svg" alt="logo" />
      </Link>
      <button
        className="lg:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      <nav
        className={`flex items-center list-none text-lg lg:flex ${
          mobileMenuVisible
            ? "flex flex-col pt-10 gap-10 items-center w-full absolute h-[100vh] left-0 top-[80px] bg-[#FFF] border-t-[#0054be]"
            : "hidden"
        }`}
      >
        <li
          className={`${mobileMenuVisible ? "w-[100%] text-center" : "mr-10"}`}
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
          className={`${mobileMenuVisible ? "w-[100%] text-center" : "mr-10"}`}
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
          className={`${mobileMenuVisible ? "w-[100%] text-center" : "mr-10"}`}
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
          className={`${mobileMenuVisible ? "w-[100%] text-center" : "mr-10"}`}
        >
          <ScrollLink
            to="contact"
            onClick={() =>  handleLinkClick(3)}
            style={{
              borderBottom: activeLink === 3 ? "2px solid #0054BE" : "none",
              color: activeLink === 3 ? "#0054BE" : "#868686",
              paddingBottom: "6px",
              marginBottom: "-6px",
              fontWeight: activeLink === 3 ? "500" : "400",
              cursor: 'pointer'
            }}
          >
            Contactanos
          </ScrollLink>
        </li>
        <li
          className={`${mobileMenuVisible ? "w-[100%] text-center" : "mr-10"}`}
          onClick={() => setMobileMenuVisible(false)}
        >
          <Link
            to="/dona"
            className="inline-flex bg-[#0054BE] text-white py-[10px] px-[24px] rounded-[6px] text-[18px] w-auto h-[48px] gap-2"
          >
            Doná Ahora
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;
