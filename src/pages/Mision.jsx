import { useEffect } from 'react';
import Values from '../components/Values/Values'
import { useState } from 'react';

const Mision = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agrega un listener de cambio de tamaño para actualizar el ancho de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col w-full box-border max-w-screen ">
      <section className="mision__vision w-full flex flex-col items-center">
        <img src="/img-desktop-mision-1.png" alt="" className="z-[-10] w-screen object-cover " />
        <section className="content w-full flex flex-col lg:items-center h-auto justify-center items-center my-auto">

          {/* Nuestro Objetivo */}
          <article className="mision max-w-1/2 flex flex-col items-center justify-center text-center mx-auto my-auto gap-5 lg:flex-row lg:justify-evenly  lg:w-full lg:px-[86px]">
            <div className='w-[80%] lg:w-[100%] lg:mb-[5rem] flex flex-col items-start justify-center lg:justify-between'>
              <h2 className="title mb-2 w-full text-[32px] mx-auto lg:text-[45px] lg:text-left ">Nuestro objetivo</h2>
              <p className="text-[15px] text-[#5c5c5c] w-full lg:text-[20px] lg:text-left lg:w-[680px] ">Nuestro objetivo reside en que <span className='text-[700]' >miles</span> de ciudadanos de bajos recursos puedan acceder a un medio de locomoción útil, versátil y sustentable como lo es la bicicleta.</p>
              <p className="text-[15px] text-[#5c5c5c] w-full  lg:text-[20px] lg:text-left lg:mt-[2rem] lg:w-[680px] ">Ya sea por una cuestión de salud, social, medio ambiental o económica, la bicicleta es una actividad muy beneficiosa y completa para adquirir como hábito de vida. De esta manera, solucionamos la movilidad urbana de las personas más desfavorecidas.</p>
            </div>
            <img src="/bici-mision.png" 
            className='lg:w-[288px] lg:h-[288px]' 
            alt="bici_svg"
            />
          </article>

          {/* Mision - Vision */}

          <article className="vision max-w-1/2 flex flex-col items-center justify-center text-center mx-auto my-auto bg-[#c3d7ef] lg:bg-transparent gap-5 lg:bg-[url('/onda-mision-desktop.png')] lg:bg-cover">
            <div className='lg:flex lg:px-[86px] lg:justify-between lg:w-full lg:bg-[#c3d7ef] lg:pt-5'>
              <div className='lg:w-[400px] '>
                <h2 className="title mb-2 w-full text-[32px] mx-auto lg:text-[45px] lg:text-left">Misión</h2>
                <p className="text-[15px] text-[#5c5c5c] w-[80%] lg:w-[380px] mx-auto lg:text-[20px] lg:text-left lg:mx-0">Generar una contribución social responsable, inclusiva, económica, mejorando el entorno social y la calidad de vida de los más desfavorecidos.</p>
              </div>
              <div className='lg:w-[400px]'>
                <h2 className="title mb-2 w-full text-[32px] mx-auto lg:text-[45px] lg:text-left">Visión</h2>
                <p className="text-[15px] text-[#5c5c5c] w-[80%] lg:w-[380px] mx-auto lg:text-[20px] lg:text-left lg:mx-0">Desde VOY EN BICI Argentina creemos firmemente que las oportunidades laborales, las interacciones y la vida digna en un territorio dependen del movimiento de las personas del lugar.</p>
              </div>
            </div>

            {
              windowWidth > 1024 
              ?
              <img className='z-[10] w-screen object-cover ' src="/img-mision-2.png" alt="" />
              :
              <img className='z-[10] w-screen object-cover ' src="/mision-mobile2.png" alt="" />
            }

          </article>
        </section>
      </section>
      <Values />
    </section>
  );
};


export default Mision