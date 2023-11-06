export default function About() {
  return (
    <>
      <section className="flex w-[100%] bg-[#C4D8F0] m-auto" style={{zIndex: '2'}}>
        <article className="w-[90%] m-auto flex">
          <div className="article__content w-[100%] lg:w-[70%] py-10 flex flex-col justify-center items-start">
            <h2 className="title text-center">
              ¿Qué es Voy en Bici?
            </h2>
            <p className="text-[20px] text-[#5c5c5c] w-[100%] lg:w-[70%] text-center lg:text-start ">
              Somos un Proyecto de inclusión sustentable que brinda una solución
              al transporte y a la movilidad activa de las personas de bajos
              recursos. <br></br><br></br>Buscamos que ciudadanos de bajos recursos tengan acceso
              a un medio de locomoción útil, económico y sustentable, cómo lo es
              la bici. A su vez, promovemos la igualdad de oportunidades para
              que las personas puedan ir a sus escuelas y empleos.
            </p>
          </div>
          <img className="hidden lg:flex m-auto w-[30%]" src="/Bycicle_svg.png" alt="bici" />
        </article>
      </section>
      <img className="hidden lg:flex" src="/wave1.svg" alt="waves" style={{position:'relative', top:'-30px', zIndex: '1'}}/>
      <section className="flex w-[100%] m-auto pt-10  bg-white">
        <article className="w-[90%] m-auto flex">
          <img className="hidden lg:flex m-auto w-[30%]" src="/home/home-ilus-2-manos.svg" alt="bici" />
          <div className="article__content w-[100%] flex flex-col justify-center lg:items-end mb-10">
            <h2 className="title w-[100%] lg:w-[70%] text-center lg:text-left">
              Reciclamos Bicicletas Donadas
            </h2>
            <p className="text-[20px] text-[#5c5c5c] w-[100%] lg:w-[70%] text-center lg:text-start">
            A través de una economía circular, reciclamos y reparamos bicicletas de segunda mano, donadas por particulares para luego entregarlas a los colectivos sociales de bajos ingresos.
            
            <br></br><br></br>
            Creamos los primeros Bancos de Bicicletas de Argentina y Latinoamérica. Son lugares estratégicos dentro de comunidades, que sirven de refugio para las bicis recicladas y renovadas, dónde también se dan talleres de enseñanza de seguridad vial para los jóvenes.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
