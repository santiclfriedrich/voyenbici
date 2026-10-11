import projects from "../../data/projects.json";
import { useLanguage } from "../context/LanguageContext";

const ProjectRow = ({ index, image, ctaUrl, title, text, ctaText }) => {
  const reverse = index % 2 !== 0;
  const bg = index % 2 === 0 ? "bg-[#EEF4FB]" : "bg-white";

  return (
    <article
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} ${bg} md:items-stretch`}
    >
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-[78px] py-8 lg:py-12">
        <div className="w-10 h-[4px] bg-[#0054BE] mb-5 rounded-full" />
        <h2 className="text-[24px] lg:text-[34px] font-[700] text-[#0054BE] leading-tight mb-4">
          {title}
        </h2>
        <p className="text-[16px] lg:text-[18px] text-gray-600 leading-relaxed mb-6 max-w-[46ch]">
          {text}
        </p>
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center self-start rounded-[6px] bg-[#0054BE] px-6 py-[10px] text-[16px] font-medium text-white transition-colors hover:bg-[#004396] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0054BE]"
        >
          {ctaText}
        </a>
      </div>
      <div className="md:w-[45%] flex-shrink-0 flex items-center justify-center p-6 lg:p-10">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-[240px] lg:h-[320px] rounded-2xl shadow-md object-cover"
        />
      </div>
    </article>
  );
};

const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section className="projects">
      <div className="bg-[#C4D8F0] px-[20px] sm:px-[74px] py-[2rem]">
        <h2 className="text-[32px] lg:text-[40px] font-[700] text-custom-blue mb-2">
          {t("projects_title")}
        </h2>
        <p className="text-[15px] md:text-[18px] text-[#5c5c5c] max-w-[70ch]">
          {t("projects_intro")}
        </p>
      </div>

      {projects.map((project, index) => (
        <div key={project.image}>
          {index > 0 && <div className="h-[2px] bg-[#0054BE] opacity-20" />}
          <ProjectRow
            index={index}
            image={project.image}
            ctaUrl={project.instagram}
            title={(project[language] ?? project.es).title}
            text={(project[language] ?? project.es).text}
            ctaText={(project[language] ?? project.es).cta}
          />
        </div>
      ))}
    </section>
  );
};

export default Projects;
