const Values = () => {

  const imgRoutes = [{img:'/values/inclusion_icon.jpg', text:'Inclusion Social' },{img:'/values/economia_icon.jpg', text:'Economia Circular' },{img:'/values/movilidad_icon.jpg', text:'Movilidad Sustentable y Compartida' },{img:'/values/salud_icon.jpg', text:'Cuidad de Salud' },{img:'/values/descarbonizacion_icon.jpg', text:'Descarbonización del Transporte' },{img:'/values/empoderamiento_icon.jpg', text:'Empoderamiento de Colectivos Sociales Vulnerables' },]

  return (
    <section className='w-full h-screen flex flex-col justify-center items-center my-[5rem]'>
      <img src="/Equipo-VEB-1.jpeg" alt="" className='z-[-10] h-1/2 w-screen object-cover' />
      <h2 className='title'>Nuestros Valores</h2>
      <section className="grid md:flex md:justify-evenly grid-cols-2 md:flex w-full">
        {imgRoutes.map((item, i) => (
          <div key={i} className="value--icon flex flex-col items-center text-center">
            <img className="object-cover w-[120px] h-[120px]" src={item.img} alt="salud" />
            <p className="text-[20px] text-[#5c5c5c] text-center h-auto max-w-[200px] font-semibold mt-2">{item.text}</p>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Values;
