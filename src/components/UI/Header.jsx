function Header() {
  return (
    <header className="w-full h-[86px] border-t-6 border-[#0054BE] px-[74px] flex items-center justify-between">
        <img src="/logo-voy-en-bici.svg" alt="logo" />
        <nav className="flex items-center list-none text-[#868686] ">
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
                <button className="bg-[#0054BE] text-white p-[10px] rounded-[10px] text-lg w-[98px] h-[48px]">DONA</button>
            </li>
        </nav>
    </header>
  )
}

export default Header