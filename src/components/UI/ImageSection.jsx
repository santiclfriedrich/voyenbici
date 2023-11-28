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
      <div className={` bg-[#C4D8F0] w-full h-[50%] absolute top-0`}></div>
        <img src={imageContent} alt="imagen" className="w-full relative z-10" />
    </div>
  )
}
