import BackgroundSVG from "../../assets/svgs/BackgroundSVG"

export default function SVG({ svg, description }) {
  return (
    <div className="relative max-w-[97px] max-h-[95px]">
      <BackgroundSVG />
      <div className="flex flex-col items-center">
        {svg}
        <p className="text-center text-sm text-[#5c5c5c]">{description}</p>
      </div>
    </div>
  )
}
