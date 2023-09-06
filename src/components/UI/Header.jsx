function Header() {
  return (
    <header className="w-full h-[86px] border-t-6 border-[#0054BE] px-[74px] flex items-center justify-between">
        <img src="/logo-voy-en-bici.svg" alt="logo" />
        <nav className="flex items-center list-none text-[#868686] text-lg ">
            <li className="mr-10">
                <a href="">Misión</a>
            </li>
            <li className="mr-10">
                <a href="">Logros</a>
            </li>
            <li className="mr-10">
                <a href="">¿Cómo puedo involucrarme?</a>
            </li>
            <li className="mr-10">
                <a href="">Contactanos</a>
            </li>
            <li className="mr-10">
                <button className="inline-flex bg-[#0054BE] text-white py-[10px] px-[24px] rounded-[6px] text-[18px] w-auto h-[48px] gap-2">Doná ahora</button>
            </li>
        </nav>
    </header>
  )
}

export default Header