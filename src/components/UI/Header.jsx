import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom'



function Header() {
  // Define state to track the active link
  const [activeLink, setActiveLink] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to handle click events on links
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };


  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header className="w-full h-[86px] border-t-6 border-[#0054BE] px-[74px] flex items-center justify-between">
      <Link
        to={'/'}
        onClick={() => handleLinkClick(-1)}
      >
      <img src="/logo-voy-en-bici.svg" alt="logo" />
      </Link>
      <button
        className="lg:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          className={`w-6 h-6 text-[#0054BE] ${mobileMenuVisible ? 'hidden' : 'block'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className={`w-6 h-6 text-[#0054BE] ${mobileMenuVisible ? 'block' : 'hidden'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      
      <nav className={`flex items-center list-none text-lg lg:flex ${mobileMenuVisible ? 'block' : 'hidden'}`}>
        <li className="mr-10">
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
        <li className="mr-10">
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
        <li className="mr-10">
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
        <li className="mr-10">
          <ScrollLink
            to="contact"
            onClick={() => handleLinkClick(3)}
            style={{
              borderBottom: activeLink === 3 ? "2px solid #0054BE" : "none",
              color: activeLink === 3 ? "#0054BE" : "#868686",
              paddingBottom: "6px",
              marginBottom: "-6px",
              fontWeight: activeLink === 3 ? "500" : "400",
            }}
          >
            Contactanos
          </ScrollLink>
        </li>
        <li className="mr-10">
          <Link to="/dona" className="inline-flex bg-[#0054BE] text-white py-[10px] px-[24px] rounded-[6px] text-[18px] w-auto h-[48px] gap-2">
            Doná Ahora
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;
