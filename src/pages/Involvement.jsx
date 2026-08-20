import InvolvementCard from "../components/Involvement/InvolvementCard";
import involvementData from '../../data/involvement.json'
import { useLanguage } from "../context/LanguageContext";

const Involvement = () => {
  const { t } = useLanguage();

  return (
    <section className="ivolvement">
      <div className="bg-[#C4D8F0] lg:bg-bg-wave-blue-down h-[30vh] bg-cover bg-no-repeat pt-[38px]">
        <h2 className="ml-3 lg:ml-[74px] text-[32px] w-[70%] lg:w-[300px] text-custom-blue lg:text-[40px] font-[700]">
          {t("involvement_title")}
        </h2>
      </div>

      {involvementData.map((item, index) => (
        <div key={index}>
          {index > 0 && <div style={{ height: '2px', backgroundColor: '#0054BE', opacity: 0.2 }} />}
          <InvolvementCard
            index={index}
            title={t(`involvement_${index + 1}`)}
            img2={item.img2}
            reverse={index % 2 !== 0}
            centered={item.centered}
            objectPosition={item.objectPosition}
            objectFit={item.objectFit}
            ctaLabel={t(`involvement_cta_label_${index + 1}`)}
            ctaMessage={t(`involvement_cta_msg_${index + 1}`)}
          />
        </div>
      ))}
    </section>
  );
};

export default Involvement;
