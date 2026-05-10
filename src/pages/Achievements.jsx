import AchievementCard from "../components/Achievements/AchievementCard";
import { achievements } from "../constants/achievements";
import { useLanguage } from "../context/LanguageContext";

export const Achievements = () => {
  const { t } = useLanguage();

  return (
    <section className="achievements__container flex-col h-full">
      <div className="flex-col justify-between mb-[5rem] px-[20px] sm:px-[74px] py-[2rem] w-full bg-[#C4D8F0]">
        <h2 className="title hidden md:block">{t("achievements_title")}</h2>
        <p className="text-center md:text-left text-[15px]  md:text-[20px] text-[#5c5c5c] xsm:w-[100%] md:w-[70%]">
          {t("achievements_intro")}
        </p>
      </div>
      <section className="achievements__cards grid place-items-center grid-cols-articles gap-4 sm:p-20">
        {achievements.map((item, i) => {
          return (
            <AchievementCard
              ig_post={item.ig_post}
              title={t(`achievement_${i + 1}_title`)}
              description={t(`achievement_${i + 1}_desc`)}
              img={item.img}
              key={i}
            />
          );
        })}
      </section>
    </section>
  );
};
