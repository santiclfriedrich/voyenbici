import { IoLogoWhatsapp } from "react-icons/io";
import { whatsappUrl } from "../../constants/contact";

const CtaButton = ({ label, message }) => (
  <a
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 self-start bg-[#0054BE] text-white rounded-[6px] py-[10px] px-[24px] text-[16px] font-medium mt-6 hover:bg-[#004396] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0054BE] transition-colors"
  >
    <IoLogoWhatsapp className="h-5 w-5 shrink-0" />
    {label}
  </a>
);

const InvolvementCard = ({ title, img2, reverse, centered, index, objectPosition, objectFit, ctaLabel, ctaMessage }) => {
  const bg = index % 2 === 0 ? 'bg-[#EEF4FB]' : 'bg-white';
  const num = String(index + 1).padStart(2, '0');
  const cta = ctaLabel && ctaMessage ? <CtaButton label={ctaLabel} message={ctaMessage} /> : null;

  if (centered) {
    return (
      <article className="flex justify-center items-center py-16 px-8 bg-white">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-[26px] lg:text-[38px] font-[700] text-[#0054BE] leading-tight">
            {title}
          </h2>
          {cta}
        </div>
      </article>
    );
  }

  return (
    <article className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${bg} md:items-stretch`}>
      <div className="flex-1 flex flex-col justify-between px-8 lg:px-[78px] py-6 lg:py-10">
        <div className="pt-6 flex flex-col">
          <div className="w-10 h-[4px] bg-[#0054BE] mb-5 rounded-full"></div>
          <h2 className="text-[26px] lg:text-[38px] font-[700] text-[#0054BE] leading-tight">
            {title}
          </h2>
          {cta}
        </div>
        <span className={`text-[100px] lg:text-[140px] font-[700] text-[#0054BE] opacity-[0.06] leading-none select-none pointer-events-none text-right ${!reverse ? 'mr-[-40px] lg:mr-[-78px]' : ''}`}>
          {num}
        </span>
      </div>
      <div className={`md:w-[45%] flex-shrink-0 flex items-center justify-center p-6 lg:p-10 ${bg}`}>
        <img
          src={img2}
          className={`w-full h-[240px] lg:h-[300px] rounded-2xl shadow-md ${objectFit === 'contain' ? 'object-contain bg-white' : 'object-cover'}`}
          style={objectPosition ? { objectPosition } : undefined}
          alt=""
        />
      </div>
    </article>
  );
};

export default InvolvementCard;
