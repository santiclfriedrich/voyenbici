import { useEffect } from 'react';
import useSlider from '../../custom-hooks/useSlider'; 

function Slider() {
  const images = ["/slider1.jpeg", "/Banco-Barrio-Marginal.png", "embajadora-y-chicas-de-la-cárcel.JPG"];
  const { getCurrentImage, setCurrentImageIndex, currentImageIndex } = useSlider(images);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    // Clear the automatic interval when a dot is clicked or the component unmounts
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length, setCurrentImageIndex]);

  return (
    <section className='w-full h-[572px] relative'>
      <img 
        src={getCurrentImage()} 
        alt="slider" 
        className='w-full h-full object-cover transition duration-500 ease-in-out' 
      />
      <section className="flex w-full h-full absolute top-0 left-0 z-20">
        <div className="flex flex-col justify-center w-[30%] px-[84px] items-start bg-transparent">
          <h2 className="text-white text-[32px] font-bold mb-[30px]">Doná una bicicleta nueva o usada</h2>
          <p className="text-[20px] text-[#F8F7FA] mb-[80px]">Envías la foto de la bicicleta que donás al WhatsApp 1138970475 y nos contactamos.</p>
          <button 
            style={{border: '1px solid white'}} 
            className="bg-transparent rounded-[6px] text-white text-lg  w-[150px] h-[48px] z-5 hover:bg-[#c8c8c8] mb-[15px]">Conocé más
          </button>
          <div className='flex'>
            {images.map((_, index) => (
              <button 
                onClick={() => handleDotClick(index)}
                key={index}
                className={`mx-2 w-[10px] h-[10px] rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
    </section>
  )
}

export default Slider;
