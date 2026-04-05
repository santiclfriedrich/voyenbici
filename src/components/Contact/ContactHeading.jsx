import SVGsContainer from "../UI/SVGsContainer";

export default function ContactHeading() {
  return (
    <div className="w-full flex flex-col items-center mb-20">
        <p className="text-[#5c5c5c] text-[20px] lg:text-[25px] my-[16px]">
            <span className="font-bold">Si queres:</span>
        </p>
        <SVGsContainer/>
    </div>
  )
}
