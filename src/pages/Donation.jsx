import React from "react";
import { donation_bg, unicef, arg_por_educacion, bunge_born } from "../assets";
import DonationCard from "../components/Donation/DonationCard";

const Donation = () => {
  return (
    <section className="flex flex-col">
      <div
        className="h-[80vh] w-full flex flex-col justify-end"
        style={{
          backgroundImage: `url(${donation_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-4xl font-bold text-[#FFF] px-[74px] w-[500px] text-[40px] relative top-[100px]">
          Sigamos rodando juntos
        </h2>
        <img src="./white-wave.svg" alt="" className="w-full" />
      </div>

      <article className="pb-5 bg-[#FFF] w-full h-full flex flex-col justify-center items-center gap-10">
        <h3 className="text-[#004396] text-center font-roboto text-xl font-normal w-[60%]">
          Ayúdanos a seguir cambiando realidades de manera equitativa, federal y
          sostenible.<br></br>{" "}
          <span className="font-bold">
            ¡Con mejores oportunidades para todos!
          </span>
        </h3>
        <DonationCard
          content={
            '"2 de cada 3 niñas y niños en Argentina son pobres" UNICEF Argentina (2023)'
          }
          img={unicef}
        />
        <DonationCard
          content={
            "“ El derecho a la educación de los niños y adolescentes de comunidades rurales, suele estar obstruido debido a las grandes distancias que deben transitar para acceder a las escuelas rurales ”Fundación Bunge y Born - Programa Sembrador - (2022) "
          }
          img={bunge_born}
        />
        <DonationCard
          content={
            "“ El derecho a la educación de los niños y adolescentes de comunidades rurales, suele estar obstruido debido a las grandes distancias que deben transitar para acceder a las escuelas rurales ”Fundación Bunge y Born - Programa Sembrador - (2022)"
          }
          img={arg_por_educacion}
        />

        <button className="inline-flex bg-[#0054BE] text-white py-[10px] px-[24px] rounded-[6px] text-[18px] w-auto h-[48px] gap-2 my-[2rem]">
          Doná ahora
        </button>
      </article>
    </section>
  );
};

export default Donation;
