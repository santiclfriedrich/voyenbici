import { Link } from "react-router-dom";
import { projects } from "../../constants/projects";
import { useLanguage } from "../../context/LanguageContext";

// Señal octogonal de PARE, como guiño al nombre. A tamaño chico el octogono se
// lee como un circulo, asi que necesita la palabra adentro: la combinacion de
// forma, rojo y texto blanco es lo que la vuelve inconfundible.
const StopSign = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9 shrink-0 drop-shadow" aria-hidden="true" focusable="false">
    <polygon
      points="8,0.8 16,0.8 23.2,8 23.2,16 16,23.2 8,23.2 0.8,16 0.8,8"
      fill="#C1272D"
      stroke="#FFFFFF"
      strokeWidth="1.4"
    />
    <text
      x="12"
      y="12.6"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#FFFFFF"
      fontSize="6.2"
      fontWeight="700"
      fontFamily="Helvetica, Arial, sans-serif"
      letterSpacing="-0.2"
    >
      PARE
    </text>
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();
  const cover = projects[0].image;

  return (
    // z-20 para que el cartel, que sobresale por abajo, se dibuje por encima
    // de la seccion siguiente.
    <section className="relative z-20 w-full h-[75vh]">
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
            className="group flex items-center gap-3 rounded-[10px] border-[3px] border-[#0E2547] bg-sign-yellow px-5 py-3 sm:px-7 sm:py-4 text-[17px] sm:text-[21px] font-bold leading-none text-[#0E2547] shadow-[0_10px_28px_-8px_rgba(0,0,0,.55)] transition-all duration-300 hover:scale-[1.05] hover:bg-sign-yellow-dark hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,.65)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <StopSign />
            <span className="whitespace-nowrap">{t("projects_hero_cta")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
