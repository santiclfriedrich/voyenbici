import { useEffect } from 'react';
import useSlider from '../../custom-hooks/useSlider'; 

function Slider() {
  const sliderContent = [
    {
      image: "/DonaBici.jpeg",
      title: "Doná una bicicleta nueva o usuada ",
      text: "Envías la foto de la bicicleta que donas al WhatsApp y nos contactamos.",
    },
    {
      image: "/Penal-de-Magdalena.png",
      title: "Talleres en cárceles ",
      text: "Estos proyectos promueven la igualdad de oportunidades para aquellas personas privadas de su libertad, que buscan tener una segunda posibilidad en la vida.",
    },
    {
      image: "/Banco-de-Bicis-en-Santiago.png",
      title: "Movilidad sostenible en escuelas rurales",
      text: "Protegemos el acceso a la educación de adolescentes mediante las bicis.                  ",
    },
  ];

  const { getCurrentImage, setCurrentImageIndex, currentImageIndex } = useSlider(sliderContent.map(item => item.image));

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [sliderContent.length, setCurrentImageIndex]);

  return (
    <section className='w-full h-[75vh] relative'>
      <img 
        src={getCurrentImage()} 
        alt="slider" 
        className='w-full h-full object-cover transition duration-500 ease-in-out' 
      />
      <section className="flex w-full h-full absolute top-0 left-0 z-20">
        <div className="flex flex-col justify-center px-2 lg:w-[30%] lg:px-[84px] items-start bg-transparent">
          <h2 className="text-white text-[32px] font-bold mb-[25px] leading-9">{sliderContent[currentImageIndex].title}</h2>
          <p className="text-[20px] text-[#F8F7FA] mb-[25px]">{sliderContent[currentImageIndex].text}</p>
          <button
            style={{ border: '1px solid white' }}
            className="bg-transparent rounded-[6px] text-white text-lg w-[150px] h-[48px] z-5 hover:bg-[rgba(255,255,255,0.38)] hover:border-[#fff]  hover:font-[500] mb-[100px]"
          >
            Conocé más
          </button>

          <div className='flex'>
            {sliderContent .map((_, index) => (
              <button 
                onClick={() => handleDotClick(index)}
                key={index}
                className={`mx-2 w-[10px] h-[10px] rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-20"></div>
    </section>
  )
}

export default Slider;
