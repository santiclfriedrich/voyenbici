import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const AchievementCard = ({ title, description, img, ig_post }) => {
  const { t } = useLanguage();
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
        <button className="mt-10 mx-auto w-[100px] bg-[#0C8CE9] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ">
          <Link to={ig_post} target="a_blank">{t("achievement_view_more")}</Link>
        </button>
      </div>
    </div>
  );
};

export default AchievementCard;
