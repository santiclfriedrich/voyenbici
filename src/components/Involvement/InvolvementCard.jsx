
const InvolvementCard = ({ title, img1, p1, p2, img2 }) => {
  
  // Funcion para identificar textos a marcar en negrita y color azul
  const renderHighlightedText = (text) => {
    const parts = text.split('**');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index} className="font-bold text-[#0054BE]">{part}</span>;
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <article className="relative mb-[2rem]">
      <img className="h-[315px] lg:h-[400px] w-full mb-[2rem]" src={img1} alt="" />
      <h2 className="absolute ml-3 lg:ml-[78px] top-[210px] text-[24px] lg:text-[36px] font-[700] text-[#fff] lg:w-[450px] ">{title}</h2>
      <div className=" flex flex-col md:flex-row items-center involvement_header w-full bg-cover bg-no-repeat relative z-[100]">
        <div className="card_content md:flex md:flex-col lg:w-[55%]">
          <p className="text-center lg:text-left lg:ml-[78px]  mb-4 text-[15px] lg:text-[20px] text-[#5C5C5C] font-[400] leading-[23.5px] px-[16px]">
            {renderHighlightedText(p1)}
          </p>
          <p className="text-center lg:text-left lg:ml-[78px] text-[15px] lg:text-[20px] text-[#5C5C5C] font-[400] leading-[23.5px] px-[16px]">
          {renderHighlightedText(p2)}
          </p>
        </div>
        <img
          src={img2}
          className="w-[253px] h-[173px] lg:w-[368.524px] lg:h-[252.507px] mx-auto"
          alt=""
        />
      </div>
    </article>
  );
};

export default InvolvementCard;
