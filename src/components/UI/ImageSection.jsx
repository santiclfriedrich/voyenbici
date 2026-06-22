import { useState, useLayoutEffect } from "react"
import ImageBicis from "../../../public/home/img-home-desktop.png";
import imageBicisMobile from '../../../public/home/img-home-mobile.png'

export default function ImageSection() {

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 568);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const imageContent = isMobile ? imageBicisMobile : ImageBicis

  return (
    <div className="w-full relative">
      <div className="bg-[#C4D8F0] w-full h-[50%] absolute top-0" />
      <div
        className="w-full h-[280px] sm:h-[380px] lg:h-[480px] bg-cover bg-center relative z-10"
        style={{ backgroundImage: `url(${imageContent})` }}
      />
    </div>
  )
}
