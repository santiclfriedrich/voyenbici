import Values from '../components/Values/Values'
import DonationCard from '../components/Donation/DonationCard';
import DonationData from '../../data/donation.json'

const Mision = () => {
  return (
    <section className="flex flex-col w-full box-border max-w-screen">
      <section className="mision__vision w-full flex flex-col items-center">
        <section className="content w-full flex flex-col lg:items-center h-auto justify-center items-center my-auto">

          {/* Mision - Vision */}
          <div className="w-full flex flex-col lg:flex-row">

            {/* Misión */}
            <div className="flex-1 flex flex-col bg-[#EEF4FB]">
              <div className="flex-1 px-10 lg:px-[74px] py-12">
                <h2 className="title mb-4 text-[32px] lg:text-[45px]">Misión</h2>
                <p className="text-[15px] text-[#5c5c5c] lg:text-[20px] leading-relaxed">
                  Generar una contribución social, inclusiva y económica mediante bicis de segunda mano recicladas para mejorar la calidad de vida de las personas vulnerables.
                </p>
              </div>
              <img src="/mision/mision.png" alt="Misión" className="w-full h-[280px] lg:h-[360px] object-cover" />
            </div>

            {/* Visión */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 px-10 lg:px-[74px] py-12">
                <h2 className="title mb-4 text-[32px] lg:text-[45px]">Visión</h2>
                <p className="text-[15px] text-[#5c5c5c] lg:text-[20px] leading-relaxed">
                  Impulsar la movilidad sustentable mediante las bicicletas recicladas por VOY EN BICI.
                </p>
              </div>
              <img src="/mision/vision.png" alt="Visión" className="w-full h-[280px] lg:h-[360px] object-cover" />
            </div>

          </div>

          {/* Estadísticas */}
          <article className="p-5 bg-[#FFF] w-full flex flex-col justify-center items-center gap-10 py-16">
            <h3 className="text-[#004396] text-center font-roboto text-xl font-normal w-[60%]">
              Ayúdanos a seguir cambiando realidades de manera equitativa, federal y sostenible.<br />
              <span className="font-bold">¡Con mejores oportunidades para todos!</span>
            </h3>
            {DonationData.map((data) => (
              <DonationCard
                key={data.id}
                content={data.text}
                img={data.logo}
              />
            ))}
          </article>

        </section>
      </section>
      <Values />
    </section>
  );
};

export default Mision
