const Values = () => {

  const imgRoutes = [{img:'/mision/nuestros-valores-1.svg', text:'Inclusión Social' },{img:'/mision/nuestros-valores-2.png', text:'Economía Circular' },{img:'/mision/nuestros-valores-3.png', text:'Movilidad Sustentable y Compartida' },{img:'/mision/nuestros-valores-4.png', text:'Cuidado de Salud' },{img:'/mision/nuestros-valores-5.png', text:'Descarbonización del Transporte' },{img:'/mision/nuestros-valores-6.png', text:'Empoderamiento de Colectivos Sociales Vulnerables' },]

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
