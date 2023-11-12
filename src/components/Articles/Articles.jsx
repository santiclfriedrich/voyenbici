export default function Articles() {
  return (
    <div className="relative">
      <img src="/wave_up.svg" alt="waves" className="absolute top-[-269px] z-[-10]" />
      <section className="w-full min-h-[80vh] bg-[#C4D8F0] sm:px-8 lg:px-20 xl:px-28 2xl:px-34">
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
                  <button className="rounded-[6px] bg-[#0557BD] text-white py-2 px-4 font-medium text-[18px] m-auto">
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
                  <button className="rounded-[6px] bg-[#0557BD] text-white py-2 px-4 font-medium text-[18px] m-auto">
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
                  <button className="rounded-[6px] bg-[#0557BD] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    Ver más
                  </button>
                </div>
              </div>
            </article>
          </section>
          <button className="rounded-[6px] bg-[#0557BD] text-white mt-10 mb-10 py-2 px-4 font-medium text-[18px] m-auto">
            Ver más Proyectos
          </button>
        </div>
      </section>
    </div>
  );
}
