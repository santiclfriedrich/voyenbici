const DonationCard = ({ content, img }) => {
  return (
    <article className="w-full md:w-[60%] flex flex-col md:flex-row md:items-center md:justify-center items-center justify-center h-auto rounded-lg bg-white border-2 border-opacity-12 border-[rgba(0,67,150,0.12)] shadow-md px-4">
      <p className="w-full md:w-[70%] m-auto flex justify-center items-center text-[#8A8A8A] text-center font-roboto text-lg font-semibold">
        {content}
      </p>

      <img src={img} alt="" className="w-[150px] " />
    </article>
  );
};


export default DonationCard;
