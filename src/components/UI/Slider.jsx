function Slider() {
  return (
    <section className='w-full h-[572px] relative'>
        <img src="/slider1.jpeg" alt="slider" className='w-full h-full object-cover' />
        <section className="flex w-full h-full absolute top-0 left-0 z-20">
            <div className="flex flex-col justify-center w-[30%] px-[84px] items-start bg-transparent">
                <h2 className="text-white text-[32px] font-bold mb-[30px]">Doná una bicicleta nueva o usada</h2>
                <p className="text-[20px] text-[#F8F7FA] mb-[80px]">Envías la foto de la bicicleta que donás al WhatsApp 1138970475 y nos contactamos.</p>
                <button 
                style={{border: '1px solid white'}} 
                className="bg-transparent rounded-[6px] text-white text-lg  w-[150px] h-[48px] z-5 hover:bg-[#c8c8c8]">Conocé más</button>
            </div>
        </section>
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
    </section>
  )
}

export default Slider