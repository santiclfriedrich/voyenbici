import useSlider from '../../custom-hooks/useSlider';

function Slider() {
  const sliderContent = [
    {
      image: "/donaBici2.png",
      title: "Bancos de Bicicletas en Escuelas Rurales",
      text: "Acompañamos la igualdad de oportunidades de las personas vulnerables mediante la reparación y reciclaje de bicicletas en desuso.",
      ctaText: "Conocé Más",
      ctaUrl: "https://www.instagram.com/p/ClTnpfqug3y/?igshid=MTc4MmM1YmI2Ng%3D%3D"
    },
    {
      image: "/workshop-empresas.jpeg",
      title: "Workshop para Empresas",
      text: "Acercamos workshops para empresas que inspiran nuevas formas de trabajo en equipo, compromiso social y movilidad sostenible.",
      ctaText: "Ver Video",
      ctaUrl: "https://www.youtube.com/watch?v=Ck_fJuM_Y2I"
    },
    {
      image: "/mujeres-empoderadas.jpeg",
      title: "Talleres de Empoderamiento de Mujeres",
      text: "Creamos espacios donde las mujeres pueden aprender mecánica, compartir experiencias y fortalecer su autonomía a través de la bicicleta.",
      ctaText: "Conocé Más",
      ctaUrl: "https://www.instagram.com/reel/CmOxobxDxhv/?igshid=MTc4MmM1YmI2Ng%3D%3D"
    },
    {
      image: "/colegios.jpeg",
      title: "Talleres de Mecánica en Colegios",
      text: "Brindamos talleres de mecánica en colegios para que más jóvenes ganen autonomía y se acerquen al mundo de la bicicleta.",
      ctaText: "Ver Video",
      ctaUrl: "https://www.youtube.com/watch?v=Ck_fJuM_Y2I"
    },
  ];

  const { getCurrentImage, setCurrentImageIndex, currentImageIndex } = useSlider(sliderContent.map(item => item.image));

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className='w-full h-[75vh] relative'>
      <img 
        src={getCurrentImage()} 
        alt="slider" 
        className='w-full h-full object-cover transition duration-500 ease-in-out' 
      />
      <section className="flex w-full h-full absolute top-0 left-0 z-20">
        <div className="flex flex-col justify-center px-4 lg:w-[35%] lg:px-[84px] items-start bg-transparent h-full">
        <h2 className="text-white text-[32px] font-bold mb-[25px] leading-9 min-h-[80px] flex items-end">
          {sliderContent[currentImageIndex].title}
        </h2>

        <p className="text-[20px] text-[#F8F7FA] mb-[25px] leading-relaxed min-h-[140px]">
          {sliderContent[currentImageIndex].text}
        </p>

        <a
          href={sliderContent[currentImageIndex].ctaUrl}
          target="_blank"
          rel="noreferrer"
          style={{ border: '1px solid white' }}
          className="bg-transparent rounded-[6px] text-white text-lg w-[150px] h-[48px] z-5 hover:bg-[rgba(255,255,255,0.38)] hover:border-[#fff] hover:font-[500] mb-[100px] flex items-center justify-center"
        >
          {sliderContent[currentImageIndex].ctaText}
        </a>

        <div className="flex">
          {sliderContent.map((_, index) => (
            <button
              onClick={() => handleDotClick(index)}
              key={index}
              className={`mx-2 w-[10px] h-[10px] rounded-full ${
                currentImageIndex === index ? 'bg-white' : 'bg-gray-300'
              }`}
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
