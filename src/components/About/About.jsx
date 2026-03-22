import bgImg from '../../../public/home/onda-home-desktop-1.png'

export default function About() {
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
              ¿Qué es Voy en Bici?
            </h2>

            <p className="text-[15px] lg:text-[20px] text-[#5c5c5c] w-full lg:w-[70%] text-start leading-relaxed">
              Somos un <b>Programa de inclusión sustentable</b> que brinda una <b>solución al transporte</b> y a la movilidad activa de las personas de bajos recursos.
              <br /><br />
              Nuestro objetivo es que miles de <b>ciudadanos</b> puedan acceder a un <b>medio de locomoción útil, versátil y sustentable</b>, como lo es la bicicleta.
              <br /><br />
              Desde <b>VOY EN BICI</b> promovemos la <b>igualdad de oportunidades</b> para que las personas puedan trasladarse a su <b>escuela, empleo o plaza más cercana.</b>
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
              Reciclamos Bicicletas Donadas
            </h2>

            <p className="text-[15px] lg:text-[20px] text-[#5c5c5c] text-left leading-relaxed">
              A través de una <b>economía circular</b>, recolectamos <b>bicicletas de segunda mano</b> donadas por personas particulares. Luego reciclamos y reparamos las bicis mediante nuestros <b>mecánicos e insumos nuevos</b>, para finalmente entregarlas en instituciones donde generamos <b>Bancos de Bicicletas</b>.
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
              ¡Creamos los primeros Bancos de Bicicletas de Argentina!
            </h2>

            <p className="text-[15px] lg:text-[20px] text-[#5c5c5c] text-left leading-relaxed">
              Los <b>Bancos de Bicis</b> son lugares estratégicos dentro de comunidades, que sirven de <b>refugio para las bicis recicladas y renovadas</b>, donde también se dan <b>talleres de enseñanza de seguridad vial</b> para las comunidades.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}