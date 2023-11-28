import { useState, useLayoutEffect } from "react";
import donaMobile from '../../public/dona/dona-mobile-1.png'
import donaDesktop from '../../public/dona/dona_desktop_1.png'
import DonationCard from "../components/Donation/DonationCard";
import DonationIcon from '../../public/dona/dona-ilus-manos.svg'
import DonationData from '../../data/donation.json'
import { Link } from "react-scroll";

const Donation = () => {

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 568);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  //{isMobile ? item.imgMobile : item.imgDesktop}


  return (
    <section className="flex flex-col">
      <div
        className="h-[80vh] w-full flex flex-col justify-end lg:min-h-[760px]"
        style={{
          backgroundImage: `url(${isMobile ? donaMobile : donaDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="m-auto lg:m-0 w-[90%] lg:text-4xl font-bold text-[#FFF] lg:px-[74px] lg:w-[500px] text-[40px] relative xsm:top-[-100px] md:top-[100px] lg:top-[-5rem] ">
          Sigamos rodando juntos
        </h2>
        {/* <img src="./white-wave.svg" alt="" className="w-full" /> */}
      </div>

      <article className="p-5 bg-[#FFF] w-full h-full flex flex-col justify-center items-center gap-10">
        <h3 className="text-[#004396] text-center font-roboto text-xl font-normal w-[60%]">
          Ayúdanos a seguir cambiando realidades de manera equitativa, federal y
          sostenible.<br></br>{" "}
          <span className="font-bold">
            ¡Con mejores oportunidades para todos!
          </span>
        </h3>

        {DonationData.map((data) => (
            <DonationCard
            key={data.id}
            content={data.text}
            img={data.logo}
          />
        ))}

        <img src={DonationIcon} alt="dona-icon" />

          <a id="dona-btn" className="inline-flex bg-[#0054BE] text-white py-[10px] px-[24px] rounded-[6px] text-[18px] w-auto h-[48px] gap-2 my-[2rem]" target="a_blank" href="https://donaronline.org/voy-en-bici-banco-mundial-de-bicicletas/voy-en-bici-argentina">
            Doná ahora
          </a>
      </article>
    </section>
  );
};

export default Donation;
