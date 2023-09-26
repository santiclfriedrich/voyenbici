import Values from '../components/Values/Values'

const Mision = () => {
  return (
    <section className='flex flex-col max-w-screen'>
      <section className="mision__vision max-w-screen h-screen">
        <img src="/Equipo-VEB-2.jpeg" alt="" className='z-[-10] h-1/2 w-screen object-cover ' />
        <section className="content maxw-screen flex h-1/2 justify-center items-center">
            {/* <img src="../../public/wave_up.svg" alt="" className='absolute' /> */}
            <article className="mision max-w-1/2 flex flex-col items-center justify-center text-center">
              <h2 className='title w-[70%]'>Mision</h2>
              <p className='text-[20px] text-[#5c5c5c] w-[70%]'>Generar una contribución social responsable, inclusiva, económica, mejorando el entorno social y la calidad de vida de los más desfavorecidos.</p>
            </article>
            <article className="vision max-w-1/2 flex flex-col items-center justify-center text-center">
              <h2 className='title w-[70%]'>Vision</h2>
              <p className='text-[20px] text-[#5c5c5c] w-[70%]'>Desde VOY EN BICI Argentina creemos firmemente que las oportunidades laborales, las interacciones y la vida digna en un territorio dependen del movimiento de las personas del lugar.</p>
            </article>
        </section>
      </section>
      <Values/>
    </section>
  )
}

export default Mision