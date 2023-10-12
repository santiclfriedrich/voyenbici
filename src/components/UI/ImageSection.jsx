export default function ImageSection({img}) {
  return (
    <div className="w-full relative">
      <div className="bg-[#C4D8F0] w-full h-[50%] absolute top-0"></div>
        <img src={img} alt="imagen" className="w-full relative z-10" />
    </div>
  )
}
