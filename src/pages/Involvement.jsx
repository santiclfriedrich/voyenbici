import InvolvementCard from "../components/Involvement/InvolvementCard";
import involvementData from '../../data/involvement.json'

const Involvement = () => {
  return (
    <section className="ivolvement">
      <div className="bg-[#C4D8F0] lg:bg-bg-wave-blue-down h-[30vh] bg-cover bg-no-repeat pt-[38px]">
        <h2 className="ml-3 lg:ml-[74px] text-[32px] w-[70%] lg:w-[300px] text-custom-blue lg:text-[40px] font-[700]">
          ¿Como puedo involucrarme?
        </h2>
      </div>

      {involvementData.map((item, index) => (
        <div key={index}>
          {index > 0 && <div style={{ height: '2px', backgroundColor: '#0054BE', opacity: 0.2 }} />}
          <InvolvementCard
            index={index}
            title={item.title}
            img2={item.img2}
            reverse={index % 2 !== 0}
            centered={item.centered}
          />
        </div>
      ))}
    </section>
  );
};

export default Involvement;
