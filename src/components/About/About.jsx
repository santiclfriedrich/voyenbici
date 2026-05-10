import bgImg from '../../../public/home/onda-home-desktop-1.png'
import { useLanguage } from '../../context/LanguageContext'

export default function About() {
  const { t } = useLanguage();
  return (
    <>
      <section
        className="flex w-full h-auto m-auto bg-no-repeat bg-cover bg-center px-6 py-12 lg:px-10 lg:py-16"
        style={{
          zIndex: '2',
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <article className="w-[90%] max-w-[1400px] m-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="article__content w-full lg:w-[70%] py-4 lg:py-10 flex flex-col justify-center items-start">
            <h2 className="mb-[12px] text-[24px] lg:mb-[48px] lg:text-[40px] title text-left">
              {t("about_title_1")}
            </h2>

            <p className="text-[15px] lg:text-[20px] text-[#5c5c5c] w-full lg:w-[70%] text-start leading-relaxed">
              {t("about_text_1_a")}<b>{t("about_text_1_b")}</b>{t("about_text_1_c")}<b>{t("about_text_1_d")}</b>{t("about_text_1_e")}
              <br /><br />
              {t("about_text_2_a")}<b>{t("about_text_2_b")}</b>{t("about_text_2_c")}<b>{t("about_text_2_d")}</b>{t("about_text_2_e")}
              <br /><br />
              {t("about_text_3_a")}<b>{t("about_text_3_b")}</b>{t("about_text_3_c")}<b>{t("about_text_3_d")}</b>{t("about_text_3_e")}<b>{t("about_text_3_f")}</b>
            </p>
          </div>

          <img
            className="w-[70%] max-w-[260px] lg:max-w-none lg:w-[30%] h-auto object-contain"
            src="/Bycicle_svg.png"
            alt="Bicicleta Voy en Bici"
          />
        </article>
      </section>

      <section className="w-full py-12 px-6 lg:px-10 lg:py-16">
        <article className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] items-center gap-10 lg:gap-16">
          <div className="flex justify-center">
            <img
              className="w-[75%] max-w-[280px] lg:w-full lg:max-w-[320px] h-auto object-contain"
              src="/home/manos-corazon-rojo.svg"
              alt="Reciclamos bicicletas donadas"
            />
          </div>

          <div className="w-full max-w-[880px]">
            <h2 className="text-[24px] lg:text-[40px] lg:mb-[48px] title text-left mb-6">
              {t("about_title_2")}
            </h2>

            <p className="text-[15px] lg:text-[20px] text-[#5c5c5c] text-left leading-relaxed">
              {t("about_text_4_a")}<b>{t("about_text_4_b")}</b>{t("about_text_4_c")}<b>{t("about_text_4_d")}</b>{t("about_text_4_e")}<b>{t("about_text_4_f")}</b>{t("about_text_4_g")}<b>{t("about_text_4_h")}</b>{t("about_text_4_i")}
            </p>
          </div>
        </article>
      </section>

      <section className="w-full py-12 px-6 lg:px-10 lg:py-16 bg-white">
        <article className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] items-center gap-10 lg:gap-16">
          <div className="flex justify-center">
            <img
              className="w-[55%] max-w-[200px] lg:w-full lg:max-w-[240px] h-auto object-contain"
              src="/home/mapa-chaco-mendoza.png"
              alt="Mapa con Chaco y Mendoza destacados"
            />
          </div>

          <div className="w-full max-w-[880px]">
            <h2 className="text-[24px] lg:text-[40px] lg:mb-[48px] title text-left mb-6">
              {t("about_title_3")}
            </h2>

            <p className="text-[15px] lg:text-[20px] text-[#5c5c5c] text-left leading-relaxed">
              {t("about_text_5_a")}<b>{t("about_text_5_b")}</b>{t("about_text_5_c")}<b>{t("about_text_5_d")}</b>{t("about_text_5_e")}<b>{t("about_text_5_f")}</b>{t("about_text_5_g")}
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
