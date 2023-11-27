export default function About() {
  return (
    <>
      <section
        className="flex w-[100%] bg-[#C4D8F0] m-auto"
        style={{ zIndex: "2" }}
      >
        <article className="w-[90%] m-auto flex">
          <div className="article__content w-[100%] lg:w-[70%] py-10 flex flex-col justify-center items-start">
            <h2 className="mb-[12px] text-[24px] lg:mb-[48px] lg:text-[40px] title text-center">
              ¿Qué es Voy en Bici?
            </h2>
            <p className="text-[15px] lg:text-[20px] text-[#5c5c5c] w-[100%] lg:w-[70%] text-start ">
              Somos un Proyecto de <b>inclusión sustentable</b> que brinda una <b>solución
              al transporte</b> y a la movilidad activa de las personas de bajos
              recursos. <br></br>
              <br></br>Buscamos que <b>ciudadanos</b> de bajos recursos <b>tengan acceso a
              un medio de locomoción útil</b>, económico y sustentable, cómo lo es
              la bici. A su vez, <b>promovemos la igualdad</b> de oportunidades para
              que las <b>personas puedan ir a sus escuelas y empleos.</b>
            </p>
          </div>
          <img
            className="hidden lg:flex m-auto w-[30%]"
            src="/Bycicle_svg.png"
            alt="bici"
          />
        </article>
      </section>
      <img
        className="hidden lg:flex"
        src="/wave1.svg"
        alt="waves"
        style={{ position: "relative", top: "-30px", zIndex: "1" }}
      />
      <section className="flex w-[100%] m-auto pt-10 lg:p-[0]  bg-white">
        <article className="w-[90%] m-auto flex">
          <img
            className="hidden lg:flex m-auto w-[30%]"
            src="/home/home-ilus-2-manos.svg"
            alt="bici"
          />
          <div className="article__content w-[100%] flex flex-col justify-center lg:items-end mb-10">
            <h2 className="mb-[12px] text-[24px] lg:text-[40px] lg:mb-[48px] title w-[100%] lg:w-[70%] text-left">
              Reciclamos Bicicletas Donadas
            </h2>
            <p className="text-[15px] lg:text-[20px] text-[#5c5c5c] w-[100%] lg:w-[70%] text-left">
              A través de una <b>economía circular</b>, reciclamos y <b>reparamos
              bicicletas de segunda mano</b>, donadas por particulares para <b>luego
              entregarlas a los colectivos sociales de bajos ingresos.</b>
              <br></br>
              <br></br>
              <b>Creamos los primeros Bancos de Bicicletas de Argentina y
              Latinoamérica.</b> Son <b>lugares estratégicos</b> dentro de comunidades, que
              sirven de <b>refugio para las bicis</b> recicladas y renovadas, dónde
              también <b>se dan talleres de enseñanza de seguridad vial para los
              jóvenes.</b>
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
