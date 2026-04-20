import AchievementCard from "../components/Achievements/AchievementCard";
import { achievements } from "../constants/achievements";

export const Achievements = () => {
  return (
    <section className="achievements__container flex-col h-full">
      <div className="flex-col justify-between mb-[5rem] px-[20px] sm:px-[74px] py-[2rem] w-full bg-[#C4D8F0]">
        <h2 className="title hidden md:block">Logros</h2>
        <p className="text-center md:text-left text-[15px]  md:text-[20px] text-[#5c5c5c] xsm:w-[100%] md:w-[70%]">
          Estos son algunos de los reconocimientos más destacados que ha
          conseguido VOY EN BICI a lo largo de su corta historia. Nos pone muy
          felices recibir estos premios y nos impulsa a seguir trabajando con
          mucho esfuerzo, por el bien de los más desfavorecidos
        </p>
      </div>
      <section className="achievements__cards grid place-items-center grid-cols-articles gap-4 sm:p-20">
        {achievements.map((item, i) => {
          return (
            <AchievementCard
              ig_post={item.ig_post}
              title={item.title}
              description={item.description}
              img={item.img}
              key={i}
            />
          );
        })}
      </section>
    </section>
  );
};
