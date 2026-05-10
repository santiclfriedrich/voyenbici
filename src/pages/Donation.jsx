import { useState, useLayoutEffect } from "react";
import donaMobile from '../../public/dona/dona-mobile-1.png'
import donaDesktop from '../../public/dona/dona_desktop_1.png'
import DonationCard from "../components/Donation/DonationCard";
import DonationIcon from '../../public/dona/dona-ilus-manos.svg'
import DonationData from '../../data/donation.json'
import { useLanguage } from "../context/LanguageContext";

const Donation = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 568);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const donationKeys = ['donation_1', 'donation_2', 'donation_3'];

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
          {t("donation_hero_title")}
        </h2>
      </div>

      <article className="p-5 bg-[#FFF] w-full h-full flex flex-col justify-center items-center gap-10">
        <h3 className="text-[#004396] text-center font-roboto text-xl font-normal w-[60%]">
          {t("mision_help_title")}<br />
          <span className="font-bold">{t("mision_help_subtitle")}</span>
        </h3>

        {DonationData.map((data, idx) => (
          <DonationCard
            key={data.id}
            content={t(donationKeys[idx])}
            img={data.logo}
          />
        ))}

        <img src={DonationIcon} alt="" />

        <a id="dona-btn" className="inline-flex bg-[#0054BE] text-white py-[10px] px-[24px] rounded-[6px] text-[18px] w-auto h-[48px] gap-2 my-[2rem]" target="a_blank" href="https://donaronline.org/voy-en-bici-banco-mundial-de-bicicletas/voy-en-bici-argentina">
          {t("donation_btn")}
        </a>
      </article>
    </section>
  );
};

export default Donation;
