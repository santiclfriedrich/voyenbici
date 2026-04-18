
const InvolvementCard = ({ title, img2, reverse, centered, index }) => {
  const bg = index % 2 === 0 ? 'bg-white' : 'bg-[#EEF4FB]';
  const num = String(index + 1).padStart(2, '0');

  if (centered) {
    return (
      <article className={`flex justify-center items-center py-16 px-8 ${bg}`}>
        <div className="text-center">
          <h2 className="text-[26px] lg:text-[38px] font-[700] text-[#0054BE] leading-tight">
            {title}
          </h2>
        </div>
      </article>
    );
  }

  return (
    <article className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${bg}`}>
      <div className="flex-1 flex items-center py-10 px-8 lg:px-[78px] relative overflow-hidden">
        <span className="absolute right-4 bottom-[-10px] text-[120px] lg:text-[160px] font-[700] text-[#0054BE] opacity-[0.06] leading-none select-none pointer-events-none">
          {num}
        </span>
        <div className="relative z-10">
          <div className="w-10 h-[4px] bg-[#0054BE] mb-5 rounded-full"></div>
          <h2 className="text-[26px] lg:text-[38px] font-[700] text-[#0054BE] leading-tight">
            {title}
          </h2>
        </div>
      </div>
      <div className="hidden md:block w-[2px] bg-[#0054BE] opacity-20 self-stretch flex-shrink-0"></div>
      <div className="md:w-[45%] flex-shrink-0 overflow-hidden">
        <img
          src={img2}
          className="w-full h-[260px] lg:h-[340px] object-cover transition-transform duration-500 hover:scale-105"
          alt=""
        />
      </div>
    </article>
  );
};

export default InvolvementCard;
