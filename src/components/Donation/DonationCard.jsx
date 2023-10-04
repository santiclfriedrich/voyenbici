import React from "react";

const DonationCard = ({ content, img }) => {
  return (
    <article className="w-[60%] flex justify-between items-center h-[170px] rounded-lg bg-white border-2 border-opacity-12 border-[rgba(0,67,150,0.12)] shadow-md px-4">
      <p className="w-[70%] m-auto flex justify-center items-center text-[#8A8A8A] text-center font-roboto text-lg font-semibold">{content}</p>

      <img src={img} alt="" className="w-[150px]" />
    </article>
  );
};

export default DonationCard;
