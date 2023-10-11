import BackgroundSVG from "../../assets/svgs/BackgroundSVG"

export default function SVG({ svg, description }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="max-w-[97px] max-h-[95px] relative">
        <BackgroundSVG />
        <div className="absolute top-0 left-0 w-full h-full">
          {svg}
        </div>
      </div>
      <div className="flex flex-col items-center mt-2 max-w-[100px]">
        <p className="text-center text-sm text-[#5c5c5c]">{description}</p>
      </div>
    </div>
  )
}

