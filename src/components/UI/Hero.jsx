import { Link } from "react-router-dom";
import { projects } from "../../constants/projects";
import { useLanguage } from "../../context/LanguageContext";

// Señal octogonal de PARE, como guiño al nombre. A tamaño chico el octogono
// se lee como un circulo, asi que va a 40px y con la palabra adentro: la
// combinacion de forma + rojo + texto blanco es lo que la vuelve inconfundible.
const StopSign = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 shrink-0" aria-hidden="true" focusable="false">
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
    <section className="relative w-full h-[75vh]">
      <img
        src={cover}
        alt="Chicas y chicos andando en bicicleta por un camino rural."
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-25" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <Link
          to="/proyectos"
          className="group inline-flex items-center gap-3 rounded-[8px] bg-white/95 px-6 py-4 text-[18px] lg:text-[20px] font-semibold text-[#0054BE] shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <StopSign />
          {t("projects_hero_cta")}
        </Link>
      </div>
    </section>
  );
}
