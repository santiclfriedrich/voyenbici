const Values = () => {

  const imgRoutes = [{img:'../../public/values/inclusion_icon.jpg', text:'Inclusion Social' },{img:'../../public/values/economia_icon.jpg', text:'Economia Circular' },{img:'../../public/values/movilidad_icon.jpg', text:'Movilidad Sustentable y Compartida' },{img:'../../public/values/salud_icon.jpg', text:'Cuidad de Salud' },{img:'../../public/values/descarbonizacion_icon.jpg', text:'Descarbonización del Transporte' },{img:'../../public/values/empoderamiento_icon.jpg', text:'Empoderamiento de Colectivos Sociales Vulnerables' },]

  return (
    <section className='values w-full h-screen flex flex-col justify-center items-center my-[5rem]'>
      <img src="/Equipo-VEB-1.jpeg" alt="" className='z-[-10] h-1/2 w-screen object-cover' />
      <h2 className='title'>Nuestros Valores</h2>
      <section className="values__content w-11/12 md:w-3/4 lg:w-9/10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {imgRoutes.map((item, i) => (
          <div key={i} className="value--icon flex flex-col items-center text-center">
            <img className="object-cover w-[120px] h-[120px]" src={item.img} alt="salud" />
            <p className='text-[20px] text-[#5c5c5c] font-semibold mt-2'>{item.text}</p>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Values;
