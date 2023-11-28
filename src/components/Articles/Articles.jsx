import { useState, useLayoutEffect } from "react";

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

  return (
    <div className="relative bg-[#C4D8F0]">
      <section className={`w-full min-h-[80vh] ${isMobile ? 'bg-[url(\'../../public/home/onda-home-mobile-2.png\')]' : 'bg-[url(\'../../public/home/onda-home-desktop-2.png\')]' } bg-cover bg-no-repeat pt-28 sm:px-8 lg:px-20 xl:px-28 2xl:px-34`}>
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
              <div className="w-full h-[50%] p-4">
                <h3 className="leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                  Banco de bicis en centros comunitarios
                </h3>
                <p className="text-[#8a8a8a] text-[16px] mb-[15px]">
                  Poblacion Beneficiada: Niñas, Niños, Adolescentes y Adultos
                </p>
                <div className="w-full flex justify-center items-center p-4">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    Ver más
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
                <h3 className="leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                  Banco de bicis centros comunitarios
                </h3>
                <p className="text-[#8a8a8a] text-[16px] mb-[15px]">
                  Poblacion Beneficiada: Niñas, Niños, Adolescentes y Adultos
                </p>
                <div className="w-full flex justify-center items-center p-4">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    Ver más
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
                <h3 className="leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                  Banco de bicis centros comunitarios
                </h3>
                <p className="text-[#8a8a8a] text-[16px] mb-[15px]">
                  Poblacion Beneficiada: Niñas, Niños, Adolescentes y Adultos
                </p>
                <div className="w-full flex justify-center items-center p-4">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    Ver más
                  </button>
                </div>
              </div>
            </article>
          </section>
          <button className="rounded-[6px] bg-[#0C8CE9] text-white mt-10 mb-10 py-2 px-4 font-medium text-[18px] m-auto">
            Ver más Proyectos
          </button>
        </div>
      </section>
    </div>
  );
}
