import { useState, useLayoutEffect } from "react";
import desktopBgImg from '../../../public/home/onda-home-desktop-2.png'
import mobileBgImg from '../../../public/home/onda-home-mobile-2.png'

export default function Articles() {

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 568);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const bgImg = isMobile ? mobileBgImg : desktopBgImg;

  return (
    <div className="relative bg-cover bg-no-repeat "
    style={{
      backgroundImage: `url(${bgImg})`,
    }}>
      <section className={`w-full min-h-[80vh]  pt-28 sm:px-8 lg:px-20 xl:px-28 2xl:px-34`}>
        <div className="w-[90%] flex flex-col justify-center m-auto items-center ">
          <h2 className="text-[32px]  lg:text-[36px] w-[100%] title leading-normal pt-10">
            Novedades
          </h2>
          <section className="flex flex-col sm:flex-row  gap-4 h-full w-[100%] justify-between items-center py-4 place-items-center">
            <article className="w-[325px] h-[480px] bg-[#fff] rounded-[10px]">
              <img
                className="h-[50%] w-full rounded-t-[10px]"
                src="/Banco-de-Bicis-en-Santiago.jpeg"
                alt=""
              />
              <div className="w-full flex flex-col h-[50%] p-4">
                <h3 className="h-[48px] leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                    Banco de bicis en escuelas rurales
                  
                </h3>
                <p className="h-[75px] text-[#8a8a8a] text-[16px] mb-[15px]">
                  Poblacion Beneficiada: Niñas, Niños y Adolescentes.
                </p>
                <div className="w-full flex justify-center items-end">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    <a href="https://www.instagram.com/p/CwfMwBlu9Pr/?hl=es" target="a_blank">
                    Ver más
                  </a>
                  </button>
                </div>
              </div>
            </article>
            <article className="w-[325px] h-[480px] bg-[#fff] rounded-[10px]">
              <img
                className="h-[50%] w-full rounded-t-[10px]"
                src="/embajadora-y-chicas-de-la-cárcel.JPG"
                alt=""
              />
              <div className="w-full h-[50%] p-4">
                <h3 className="h-[48px] leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                  Banco de bicis en cárceles
                </h3>
                <p className="h-[75px] text-[#8a8a8a] text-[16px] mb-[15px]">
                  Poblacion Beneficiada: Mujeres y Hombres privados de su libertad de buen comportamiento.
                </p>
                <div className="w-full flex justify-center items-center">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    <a href="https://www.instagram.com/p/CnqAP2FO9-1/?hl=es" target="a_blank" >
                    Ver más
                    </a>
                  </button>
                </div>
              </div>
            </article>
            <article className="w-[325px] h-[480px] bg-[#fff] rounded-[10px]">
              <img
                className="h-[50%] w-full rounded-t-[10px]"
                src="/Banco-Barrio-Marginal.png"
                alt=""
              />
              <div className="w-full h-[50%] p-4">
                <h3 className="h-[48px] leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                  Banco de bicis centros comunitarios
                </h3>
                <p className="h-[75px] text-[#8a8a8a] text-[16px] mb-[15px]">
                  Poblacion Beneficiada: Niñas, Niños, Adolescentes y Adultos
                </p>
                <div className="w-full flex justify-center items-center">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    <a href="https://www.instagram.com/p/CecfDv9jl92/?hl=es" target="a_blank">
                    Ver más
                    </a>
                  </button>
                </div>
              </div>
            </article>
          </section>
          <button className="rounded-[6px] bg-[#0C8CE9] text-white mt-10 mb-10 py-2 px-4 font-medium text-[18px] m-auto">
            <a target="a_blank" href="https://www.instagram.com/p/CyRCF6wIBhq/?hl=es">Ver más Proyectos</a>
          </button>
        </div>
      </section>
    </div>
  );
}
