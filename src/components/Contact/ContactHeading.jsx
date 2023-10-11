import SVGsContainer from "../UI/SVGsContainer";

export default function ContactHeading() {
  return (
    <div className="w-full flex flex-col items-center mb-20">
        <h1 className="text-[#004396] text-5xl font-bold mb-4">Contactanos</h1>
        <p className="text-[#5c5c5c] text-lg mb-4 max-w-[430px] text-center"><span className="font-bold">Gracias a las donaciones</span> el Banco de Bicicletas recibe semanalmente bicicletas usadas, antiguas y nuevas de diversos tamaños.</p>
        <p className="text-[#5c5c5c] text-lg mb-6">
            <span className="font-bold">Si queres:</span>     
        </p>
        <SVGsContainer/>
    </div>
  )
}
