const AchievementCard = ({ title, description, img }) => {
  return (
    <div className="achievement__card md:h-[600px]  md:w-[400px] lg:w-[350px] bg-white shadow-lg rounded-md flex flex-col m-[15px] md:m-[0px]">
      <div className="img mb-4">
        <img className="rounded-tl-md rounded-tr-md w-full h-[245px] object-cover" src={img} alt={title} />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="content flex-grow">
          <h3 className="text-lg font-semibold mb-2 text-[#1E3A8A]">{title}</h3>
          <p className="text-sm lg:text-base text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
