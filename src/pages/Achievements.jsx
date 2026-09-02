import AchievementCard from "../components/Achievements/AchievementCard";
import { achievements } from "../constants/achievements";
import { useLanguage } from "../context/LanguageContext";

export const Achievements = () => {
  const { t } = useLanguage();

  return (
    <section className="achievements__container flex-col">
      <div className="flex-col justify-between mb-8 px-[20px] sm:px-[74px] py-[2rem] w-full bg-[#C4D8F0]">
        <h2 className="title hidden md:block">{t("achievements_title")}</h2>
        <p className="text-center md:text-left text-[15px]  md:text-[20px] text-[#5c5c5c] xsm:w-[100%] md:w-[70%]">
          {t("achievements_intro")}
        </p>
      </div>
      <section className="achievements__cards grid justify-items-center items-stretch grid-cols-articles gap-x-4 gap-y-[40px] sm:px-20 sm:pt-4 sm:pb-0">
        {achievements.map((item, i) => {
          return (
            <AchievementCard
              ig_post={item.ig_post}
              title={t(`achievement_${i + 1}_title`)}
              description={t(`achievement_${i + 1}_desc`)}
              img={item.img}
              objectPosition={item.objectPosition}
              key={i}
            />
          );
        })}
      </section>
      <div className="flex justify-center items-center w-full px-4 -mt-4 mb-2">
        <img
          src="/logo-veb-negro.png"
          alt="Voy en Bici"
          className="h-auto w-auto max-w-[200px] md:max-w-[260px]"
        />
      </div>
    </section>
  );
};
