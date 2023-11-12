import SVGsContainer from "../UI/SVGsContainer";

export default function ContactHeading() {
  return (
    <div className="w-full flex flex-col items-center mb-20">
        <h1 className="text-[32px] lg:text-[40px] text-[#004396] text-5xl font-bold mb-[16px]">Contactanos</h1>
        <p className="w-[76%] text-[15px] lg:text-[20px] text-[#5c5c5c] mb-4 lg:max-w-[430px] text-center"><span className="font-bold">Gracias a las donaciones</span> el Banco de Bicicletas recibe semanalmente bicicletas usadas, antiguas y nuevas de diversos tamaños.</p>
        <p className="text-[#5c5c5c] text-[20px] lg:text-[25px] my-[48px]">
            <span className="font-bold">Si queres:</span>
        </p>
        <SVGsContainer/>
    </div>
  )
}
