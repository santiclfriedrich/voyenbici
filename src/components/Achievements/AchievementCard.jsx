const AchievementCard = ({ title, description, img, objectPosition }) => {
  return (
    <div className="achievement__card group h-full md:w-[400px] lg:w-[350px] bg-white shadow-md hover:shadow-2xl rounded-md flex flex-col m-[15px] md:m-[0px] overflow-hidden border-t-4 border-custom-blue transition-all duration-300 ease-out hover:-translate-y-1">
      <div className="img overflow-hidden">
        <img
          className="w-full h-[245px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          style={objectPosition ? { objectPosition } : undefined}
          src={img}
          alt={title}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="content flex-grow">
          <h3 className="text-lg lg:text-xl font-semibold mb-3 text-custom-blue leading-snug">
            {title}
          </h3>
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
