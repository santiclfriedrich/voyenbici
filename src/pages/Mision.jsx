import Values from '../components/Values/Values'
import DonationCard from '../components/Donation/DonationCard';
import DonationData from '../../data/donation.json'
import { useLanguage } from '../context/LanguageContext';

const Mision = () => {
  const { t } = useLanguage();

  const factors = [
    t('mision_factor_1'),
    t('mision_factor_2'),
    t('mision_factor_3'),
    t('mision_factor_4'),
  ];

  const donationKeys = ['donation_1', 'donation_2', 'donation_3'];

  return (
    <section className="flex flex-col w-full box-border max-w-screen">
      <section className="mision__vision w-full flex flex-col items-center">
        <section className="content w-full flex flex-col lg:items-center h-auto justify-center items-center my-auto">

          {/* Mision - Vision */}
          <div className="w-full flex flex-col lg:flex-row">

            <div className="flex-1 flex flex-col bg-[#EEF4FB]">
              <div className="flex-1 px-10 lg:px-[74px] py-12">
                <h2 className="title mb-4 text-[32px] lg:text-[45px]">{t('mision_title')}</h2>
                <p className="text-[15px] text-[#5c5c5c] lg:text-[20px] leading-relaxed">
                  {t('mision_text')}
                </p>
              </div>
              <img src="/mision/mision.jpg" alt={t('mision_title')} className="w-full h-[280px] lg:h-[360px] object-cover" />
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex-1 px-10 lg:px-[74px] py-12">
                <h2 className="title mb-4 text-[32px] lg:text-[45px]">{t('vision_title')}</h2>
                <p className="text-[15px] text-[#5c5c5c] lg:text-[20px] leading-relaxed">
                  {t('vision_text')}
                </p>
              </div>
              <img src="/mision/vision.jpg" alt={t('vision_title')} className="w-full h-[280px] lg:h-[360px] object-cover" />
            </div>

          </div>

          <article className="p-5 bg-[#FFF] w-full flex flex-col justify-center items-center gap-10 py-16">
            <h3 className="text-[#004396] text-center font-roboto text-xl font-normal w-[60%]">
              {t('mision_help_title')}<br />
              <span className="font-bold">{t('mision_help_subtitle')}</span>
            </h3>
            {DonationData.map((data, idx) => (
              <DonationCard
                key={data.id}
                content={t(donationKeys[idx])}
                img={data.logo}
              />
            ))}
          </article>

          <article className="w-full bg-[#EEF4FB] px-8 lg:px-[74px] py-14">
            <p className="text-[#5c5c5c] text-[16px] lg:text-[20px] mb-2">
              {t('mision_dropout_intro')}
            </p>
            <p className="text-[#5c5c5c] text-[16px] lg:text-[20px] mb-10">
              {t('mision_dropout_factors')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {factors.map((factor, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0D2B5E] flex items-center justify-center">
                    <span className="text-white text-xl font-bold">›</span>
                  </div>
                  <p className="text-[#1a1a1a] text-[16px] lg:text-[18px] font-bold leading-snug">{factor}</p>
                </div>
              ))}
            </div>
          </article>

        </section>
      </section>
      <Values />
    </section>
  );
};

export default Mision
