const Values = () => {

  const imgRoutes = [{img:'/values/inclusion_icon.jpg', text:'Inclusión Social' },{img:'/values/economia_icon.jpg', text:'Economía Circular' },{img:'/values/movilidad_icon.jpg', text:'Movilidad Sustentable y Compartida' },{img:'/values/salud_icon.jpg', text:'Cuidado de Salud' },{img:'/values/descarbonizacion_icon.jpg', text:'Descarbonización del Transporte' },{img:'/values/empoderamiento_icon.jpg', text:'Empoderamiento de Colectivos Sociales Vulnerables' },]

  return (
    <section className='w-full flex flex-col justify-center items-center my-[5rem]'>
      <h2 className='title w-full text-[32px] mx-auto lg:text-[45px] text-center mb-5 lg:mb-[48px]'>Nuestros Valores</h2>
      <section className="grid gap-5 md:flex md:justify-evenly grid-cols-2 w-full">
        {imgRoutes.map((item, i) => (
          <div key={i} className="value--icon flex flex-col items-center text-center">
            <img className="object-cover w-[78.8px] h-[76.4px] lg:w-[111px] lg:h-[107px]" src={item.img} alt="salud" />
            <p className="text-[15px] text-[#5c5c5c] text-center h-auto max-w-[200px] font-semibold mt-2 lg:text-[20px]">{item.text}</p>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Values;
