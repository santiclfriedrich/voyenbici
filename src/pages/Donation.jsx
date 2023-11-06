import { donation_bg, unicef, arg_por_educacion, bunge_born } from "../assets";
import DonationCard from "../components/Donation/DonationCard";
import DonationIcon from '../../public/dona/dona-ilus-manos.svg'
import DonationData from '../../data/donation.json'

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
        <h2 className="m-auto lg:m-0 w-[90%] lg:text-4xl font-bold text-[#FFF] lg:px-[74px] lg:w-[500px] text-[40px] relative xsm:top-[-100px] md:top-[100px] ">
          Sigamos rodando juntos
        </h2>
        <img src="./white-wave.svg" alt="" className="w-full" />
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

        <button className="inline-flex bg-[#0054BE] text-white py-[10px] px-[24px] rounded-[6px] text-[18px] w-auto h-[48px] gap-2 my-[2rem]">
          Doná ahora
        </button>
      </article>
    </section>
  );
};

export default Donation;
