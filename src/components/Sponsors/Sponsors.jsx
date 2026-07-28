import { useLanguage } from "../../context/LanguageContext";

const categories = [
  {
    titleKey: "sponsors_empresas",
    band: "from-[#7fa8b5] to-[#3f7bc0]",
    logos: [
      {
        src: "/sponsors/penetrit-1.png",
        alt: "Penetrit",
        // recorte ajustado (sin margen interno): se compensa la altura
        imgHeight: "h-[46px] sm:h-[58px] lg:h-[64px]",
      },
      { src: "/sponsors/kuwauit.png", alt: "Kuwait" },
      { src: "/sponsors/bayer.png", alt: "Bayer" },
      { src: "/sponsors/dhl.png", alt: "DHL" },
      { src: "/sponsors/bailogistica.png", alt: "BAI Logística" },
    ],
  },
  {
    titleKey: "sponsors_internacionales",
    band: "from-[#5bb85b] to-[#2e8b3d]",
    logos: [
      { src: "/sponsors/reinopaises.PNG", alt: "Reino de los Países Bajos" },
      { src: "/sponsors/afd.png", alt: "Agence Française de Développement" },
      { src: "/sponsors/unioneuropea.png", alt: "Unión Europea" },
      { src: "/sponsors/embajada-de-belgica.png", alt: "Embajada de Bélgica" },
    ],
  },
  {
    titleKey: "sponsors_colegios",
    band: "from-[#f0a04b] to-[#e07b1a]",
    logos: [
      { src: "/sponsors/lyceefranco.png", alt: "Liceo Francés" },
      { src: "/sponsors/nordbridge-school.png", alt: "Nordbridge School" },
    ],
  },
  {
    titleKey: "sponsors_universidades",
    band: "from-[#f5d34b] to-[#e8c020]",
    logos: [
      { src: "/sponsors/usal.png", alt: "Universidad del Salvador" },
      { src: "/sponsors/uni-austral.png", alt: "Universidad Austral" },
      { src: "/sponsors/uni-siglo21.png", alt: "Universidad Siglo 21" },
    ],
  },
];

const otrosSponsors = [
  { src: "/sponsors/baciudad.png", alt: "Buenos Aires Ciudad" },
  { src: "/sponsors/577EACF7-370A-4581-A401-2EF9A27AFE1D.png", alt: "Sponsor" },
  { src: "/sponsors/591BA6CD-3EAC-4038-883A-1D834BB7017C.png", alt: "Sponsor" },
  { src: "/sponsors/IMG_6053.PNG", alt: "Sponsor" },
  { src: "/sponsors/apaer.png", alt: "APAER" },
  { src: "/sponsors/brubank.png", alt: "Brubank" },
  { src: "/sponsors/crecer.png", alt: "Crecer" },
  { src: "/sponsors/lahiguera.png", alt: "La Higuera" },
  { src: "/sponsors/mamis-solidarias.png", alt: "Mamis Solidarias" },
  { src: "/sponsors/pedaleandosuenios.png", alt: "Pedaleando Sueños" },
  { src: "/sponsors/potenciar-solidario.png", alt: "Potenciar Solidario" },
  { src: "/sponsors/senacyt.png", alt: "SENACYT" },
  { src: "/sponsors/smart-city.png", alt: "Smart City" },
  { src: "/sponsors/trendsmartcities.png", alt: "Trend Smart Cities" },
  { src: "/sponsors/unasolafamily.png", alt: "Una Sola Familia" },
  { src: "/sponsors/uni-azuay.png", alt: "Universidad del Azuay" },
];

function Logo({ src, alt, label, fixed, imgHeight }) {
  const sizing = fixed
    ? "w-[140px] sm:w-[170px] lg:w-[190px]"
    : "w-[110px] sm:w-auto sm:flex-1 sm:min-w-0 sm:max-w-[190px]";
  const height = imgHeight || "h-[80px] sm:h-[100px] lg:h-[110px]";
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${sizing}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${height} w-full object-contain`}
      />
      {label && (
        <span className="text-[12px] sm:text-[13px] font-medium text-[#333] text-center leading-tight">
          {label}
        </span>
      )}
    </div>
  );
}

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-gradient-to-b from-[#1559b0] via-[#2f74c9] to-[#1559b0] py-10 lg:py-14">
      <div className="w-[90%] max-w-[1100px] mx-auto">
        {/* Encabezado */}
        <div className="bg-custom-blue text-white text-center px-6 py-8 lg:py-12">
          <img
            src="/logo-veb-negro-crop.png"
            alt="Voy en Bici"
            className="h-[90px] lg:h-[130px] w-auto mx-auto mb-4 object-contain"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <h2 className="text-[26px] sm:text-[34px] lg:text-[44px] font-extrabold uppercase leading-tight tracking-wide">
            {t("sponsors_title")}
          </h2>
        </div>

        {/* Categorías */}
        {categories.map((cat) => (
          <div key={cat.titleKey}>
            <div
              className={`bg-gradient-to-r ${cat.band} py-3 px-4 text-center`}
            >
              <h3 className="text-[20px] sm:text-[26px] lg:text-[30px] font-bold italic text-[#1a1a1a]">
                {t(cat.titleKey)}
              </h3>
            </div>
            <div className="bg-white py-8 lg:py-10 px-4">
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-6 gap-y-8 lg:gap-x-10">
                {cat.logos.map((logo) => (
                  <Logo key={logo.src} {...logo} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Otros sponsors */}
        <div>
          <div className="bg-gradient-to-r from-[#9aa0a6] to-[#5c6066] py-3 px-4 text-center">
            <h3 className="text-[20px] sm:text-[26px] lg:text-[30px] font-bold italic text-white">
              {t("sponsors_otros")}
            </h3>
          </div>
          <div className="bg-white py-8 lg:py-10 px-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 lg:gap-x-10">
              {otrosSponsors.map((logo) => (
                <Logo key={logo.src} {...logo} fixed />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
