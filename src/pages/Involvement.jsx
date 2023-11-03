import { useState, useEffect } from 'react'
import cpiOndaMobile from '../../public/involvement/cpi-mobile-onda.svg'
import cpiOndaDesktop from '../../public/involvement/cpi-des-onda.svg'
import cpiDesktop from '../../public/involvement/cpi-des-1.png'

const Involvement = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let imageSource = '';

  if (windowWidth <= 700) {
    imageSource = cpiOndaMobile;
  } else {
    imageSource = cpiOndaDesktop;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${imageSource})`,
  };

  return (
    <section className="min-h-[100vh]">
      <div className="flex items-center h-auto min-h-[350px] text-4xl md:text-[40px] font-bold text-[#004396] md:min-h-[380px] bg-no-repeat bg-cover p-20" style={backgroundImageStyle}>
        <h1 className='max-w-[270px] leading-[47px]'>¿Cómo puedo involucrarme?</h1>
      </div>
      <img src={cpiDesktop} alt=""  className='w-full'/>
    </section>
  );
}

export default Involvement