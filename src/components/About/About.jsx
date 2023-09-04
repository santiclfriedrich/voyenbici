export default function About() {
  return (
    <section className="grid grid-cols-[50%,50%] w-full h-[400px] px-[84px] py-[80px] bg-[#dee9f7]">
        <article className="w-full">
            <h2 className="text-[#0054BE] text-[40px] font-bold mb-[30px]">¿Qué es Voy en Bici?</h2>
            <p className="text-[20px] text-[#5c5c5c]">Somos un Proyecto de inclusión sustentable que brinda una solución al transporte y a la movilidad activa de las personas de bajos recursos.
               Buscamos que ciudadanos de bajos recursos tengan acceso a un medio de locomoción útil, económico y sustentable, cómo lo es la bici. A su vez, promovemos la igualdad de oportunidades para que las personas puedan ir a sus escuelas y empleos.</p>
        </article>
        <img className="m-auto" src="/bici.svg" alt="bici" />
    </section>
  )
}
