import React from 'react'
import Values from '../components/Values/Values'

const Mision = () => {
  return (
    <section className='flex flex-col w-full h-full'>
      <div className="mision__vision">
        <img src="../../public/mision_1.jpg" alt="" className='w-[100vw] z-[-10]' />
        <div className="content">
          <div className='flex justify-between p-[3rem] '>
            {/* <img src="../../public/wave_up.svg" alt="" className='absolute' /> */}
            <div className="mision w-[50%] flex flex-col items-center justify-center">
              <h2 className='title w-[70%]'>Mision</h2>
              <p className='text-[20px] text-[#5c5c5c] w-[70%]'>Generar una contribución social responsable, inclusiva, económica, mejorando el entorno social y la calidad de vida de los más desfavorecidos.</p>
            </div>
            <div className="vision w-[50%] flex flex-col items-center justify-center">
              <h2 className='title w-[70%]'>Vision</h2>
              <p className='text-[20px] text-[#5c5c5c] w-[70%]'>Desde VOY EN BICI Argentina creemos firmemente que las oportunidades laborales, las interacciones y la vida digna en un territorio dependen del movimiento de las personas del lugar.</p>
            </div>
          </div>
        </div>
        <img src="" alt="" />
      </div>
      <Values/>
    </section>
  )
}

export default Mision