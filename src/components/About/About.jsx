export default function About() {
  return (
    <>
      <section className="flex w-[100%] bg-[#C4D8F0] m-auto">
        <article className="w-[90%] m-auto flex">
          <div className="article__content w-[70%] flex flex-col justify-center items-start">
            <h2 className="title">
              ¿Qué es Voy en Bici?
            </h2>
            <p className="text-[20px] text-[#5c5c5c] w-[70%] ">
              Somos un Proyecto de inclusión sustentable que brinda una solución
              al transporte y a la movilidad activa de las personas de bajos
              recursos. <br></br><br></br>Buscamos que ciudadanos de bajos recursos tengan acceso
              a un medio de locomoción útil, económico y sustentable, cómo lo es
              la bici. A su vez, promovemos la igualdad de oportunidades para
              que las personas puedan ir a sus escuelas y empleos.
            </p>
          </div>
          <img className="m-auto w-[30%]" src="/bici.svg" alt="bici" />
        </article>
      </section>
      <img src="/wave1.svg" alt="waves" style={{position:'absolute'}}/>
      <section className="flex w-[100%] m-auto my-[200px]">
        <article className="w-[90%] m-auto flex">
          <img className="m-auto w-[30%]" src="/bici.svg" alt="bici" />
          <div className="article__content w-[70%] flex flex-col justify-center items-end">
            <h2 className="title w-[70%]">
              Reciclamos Bicicletas Donadas
            </h2>
            <p className="text-[20px] text-[#5c5c5c] w-[70%] ">
              Somos un Proyecto de inclusión sustentable que brinda una solución
              al transporte y a la movilidad activa de las personas de bajos
              recursos.
              <br></br><br></br>
              Buscamos que ciudadanos de bajos recursos tengan acceso
              a un medio de locomoción útil, económico y sustentable, cómo lo es
              la bici. A su vez, promovemos la igualdad de oportunidades para
              que las personas puedan ir a sus escuelas y empleos.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
