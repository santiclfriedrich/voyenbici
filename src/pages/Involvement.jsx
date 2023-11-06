import InvolvementCard from "../components/Involvement/InvolvementCard";
import { useLayoutEffect, useState } from "react";
import involvementData from '../../data/involvement.json'

const Involvement = () => {

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 568);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="ivolvement">
      <div className="bg-[#C4D8F0] lg:bg-bg-wave-blue-down h-[30vh] bg-cover bg-no-repeat pt-[38px]">
        <h2 className="ml-3 lg:ml-[74px] text-[32px] w-[70%] lg:w-[300px] text-custom-blue lg:text-[40px] font-[700]">
          ¿Como puedo involucrarme?
        </h2>
      </div>

      {/* Los textos que se encuentran encerrados entre **text** se van a renderiza en color azul y negrita */}

      {involvementData.map((item, index) => (
        <InvolvementCard
          key={index}
          title={item.title}
          img1={isMobile ? item.imgMobile : item.imgDesktop}
          p1={item.p1}
          p2={item.p2}
          img2={item.img2}
        />
      ))}


    </section>
  );
};

export default Involvement;
