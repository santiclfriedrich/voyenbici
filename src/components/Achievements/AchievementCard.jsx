import React from "react";
import { Link } from "react-router-dom";

const AchievementCard = ({ title, description, img , ig_post }) => {
  return (
    <div className="achievement__card bg-white shadow-lg rounded-md p-4 flex flex-col">
  <div className="img mb-4">
    <img className="rounded-md w-full h-[300px] object-cover" src={img} alt="imagen del logro" />
    {/* <img className="rounded-md h-[300px] object-cover" src={img} alt="imagen del logro" /> */}
  </div>
  <div className="content flex-grow">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
  <button className="mt-10 w-[100px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
    <Link to={ig_post} target="a_blank">Ver más</Link>
  </button>
</div>

  );
};

export default AchievementCard;