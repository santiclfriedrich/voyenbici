import stats from "../../../data/stats.json";
import { useLanguage } from "../../context/LanguageContext";

// Los numeros y sus etiquetas viven en data/stats.json, para que el equipo
// pueda actualizarlos sin tocar codigo.
export default function StatsBar() {
  const { language } = useLanguage();

  return (
    <div className="w-full flex flex-col sm:flex-row">
      {stats.map((stat, index) => {
        const opacity = 1 - index * 0.13;
        return (
          <div
            key={stat.number + index}
            className="flex-1 flex flex-col items-center justify-center py-8 px-4 text-white text-center"
            style={{ backgroundColor: `rgba(0, 84, 190, ${opacity})` }}
          >
            <span className="text-[32px] lg:text-[40px] font-bold leading-none mb-2">
              {stat.number}
            </span>
            <span className="text-[13px] lg:text-[15px] font-light leading-snug max-w-[120px]">
              {stat[language] ?? stat.es}
            </span>
          </div>
        );
      })}
    </div>
  );
}
