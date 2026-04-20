
const InvolvementCard = ({ title, img2, reverse, centered, index }) => {
  const bg = index % 2 === 0 ? 'bg-[#EEF4FB]' : 'bg-white';
  const num = String(index + 1).padStart(2, '0');

  if (centered) {
    return (
      <article className="flex justify-center items-center py-16 px-8 bg-white">
        <div className="text-center">
          <h2 className="text-[26px] lg:text-[38px] font-[700] text-[#0054BE] leading-tight">
            {title}
          </h2>
        </div>
      </article>
    );
  }

  return (
    <article className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${bg} md:items-stretch`}>
      <div className="flex-1 flex flex-col justify-between px-8 lg:px-[78px] py-6 lg:py-10">
        <div className="pt-6">
          <div className="w-10 h-[4px] bg-[#0054BE] mb-5 rounded-full"></div>
          <h2 className="text-[26px] lg:text-[38px] font-[700] text-[#0054BE] leading-tight">
            {title}
          </h2>
        </div>
        <span className={`text-[100px] lg:text-[140px] font-[700] text-[#0054BE] opacity-[0.06] leading-none select-none pointer-events-none text-right ${!reverse ? 'mr-[-40px] lg:mr-[-78px]' : ''}`}>
          {num}
        </span>
      </div>
      <div className={`md:w-[45%] flex-shrink-0 flex items-center justify-center p-6 lg:p-10 ${bg}`}>
        <img
          src={img2}
          className="w-full h-[240px] lg:h-[300px] object-cover rounded-2xl shadow-md"
          alt=""
        />
      </div>
    </article>
  );
};

export default InvolvementCard;
