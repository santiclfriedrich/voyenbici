import { Link } from "react-router-dom";
import { projects } from "../../constants/projects";
import { useLanguage } from "../../context/LanguageContext";

// Señal de tránsito de bicicletas: rombo amarillo con borde y pictograma negros.
// Dibujada a medida en un viewBox de 24 porque el SVG de bici que ya existe en
// assets pesa 12 KB, trae un mask y tiene el color hardcodeado.
const BikeSign = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" aria-hidden="true" focusable="false">
    {/* el rombo es un cuadrado rotado 45 grados */}
    <rect
      x="4.2"
      y="4.2"
      width="15.6"
      height="15.6"
      rx="2.2"
      transform="rotate(45 12 12)"
      fill="#FFD400"
      stroke="#111111"
      strokeWidth="1.1"
    />
    {/* la bici va apenas sobre el centro, donde el rombo es mas ancho, y con
        margen respecto del borde: si toca los lados se empasta a tamano chico */}
    <g fill="none" stroke="#111111" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8.9" cy="13.9" r="1.95" />
      <circle cx="15.1" cy="13.9" r="1.95" />
      <path d="M8.9 13.9 L10.9 10.5 L13.9 10.5 L15.1 13.9" />
      <path d="M12 13.9 L13.9 10.5" />
      <path d="M10.1 10.1 L11.5 10.1" />
      <path d="M13.2 9.7 L14.8 10.1" />
    </g>
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();
  const cover = projects[0].image;

  return (
    // Alto = ventana - header (86px) - la mitad del cartel (30px).
    // Ese segundo descuento es el que importa: el cartel va a caballo del borde
    // inferior, asi que si el hero ocupara los 100svh completos su mitad de
    // abajo caeria fuera de la pantalla al cargar. Restando 30px el borde del
    // hero sube lo justo para que el cartel entre entero y siga partido entre
    // la foto y la seccion de abajo.
    // Se usa svh y no vh porque en mobile vh cuenta la barra del navegador
    // cuando esta colapsada.
    // z-20 para que la mitad que sobresale se dibuje sobre la seccion siguiente.
    <section className="relative z-20 w-full h-[calc(100svh-116px)]">
      <img
        src={cover}
        alt="Chicas y chicos andando en bicicleta por un camino rural."
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-25" />

      {/* Mitad adentro, mitad afuera: el centro del cartel cae sobre el borde. */}
      <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 translate-y-1/2 px-4">
        {/* Capas separadas para que el balanceo y el hover no se peleen por transform. */}
        <div className="animate-sign-sway motion-reduce:animate-none">
          <Link
            to="/proyectos"
            className="group flex items-center gap-2.5 rounded-[8px] border-2 border-[#0E2547] bg-sign-yellow px-4 py-2.5 sm:px-5 sm:py-3 text-[15px] sm:text-[17px] font-bold leading-none text-[#0E2547] shadow-[0_8px_22px_-8px_rgba(0,0,0,.55)] transition-all duration-300 hover:scale-[1.05] hover:bg-sign-yellow-dark hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,.65)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="whitespace-nowrap">{t("projects_hero_cta")}</span>
            <BikeSign />
          </Link>
        </div>
      </div>
    </section>
  );
}
