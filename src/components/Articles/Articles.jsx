import { useLanguage } from "../../context/LanguageContext";

export default function Articles() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#C4D8F0]">
      <section className={`w-full min-h-[80vh] pt-10 pb-10 lg:pb-16 sm:px-8 lg:px-20 xl:px-28 2xl:px-34`}>
        <div className="w-[90%] flex flex-col justify-center m-auto items-center ">
          <h2 className="text-[32px]  lg:text-[36px] w-[100%] title leading-normal pt-10">
            {t("articles_title")}
          </h2>
          <section className="flex flex-col sm:flex-row  gap-4 h-full w-[100%] justify-between items-center py-4 place-items-center">
            <article className="w-[325px] h-[480px] bg-[#fff] rounded-[10px]">
              <img
                className="h-[50%] w-full rounded-t-[10px]"
                src="/home/otrosp/consultoria.JPG"
                alt=""
              />
              <div className="w-full flex flex-col h-[50%] p-4">
                <h3 className="h-[48px] leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                  {t("article_1_title")}
                </h3>
                <p className="h-[75px] text-[#8a8a8a] text-[16px] mb-[15px]">
                  {t("article_1_text")}
                </p>
                <div className="w-full flex justify-center items-end">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    <a href="https://www.instagram.com/p/DT8tKRzARePh9b7kBjBTHuZ5RQMKlJtZTS2lZY0/?hl=es&img_index=1" target="a_blank">
                      {t("article_view_more")}
                    </a>
                  </button>
                </div>
              </div>
            </article>
            <article className="w-[325px] h-[480px] bg-[#fff] rounded-[10px]">
              <img
                className="h-[50%] w-full rounded-t-[10px]"
                src="/home/otrosp/banconinios.png"
                alt=""
              />
              <div className="w-full h-[50%] p-4">
                <h3 className="h-[48px] leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                  {t("article_2_title")}
                </h3>
                <p className="h-[75px] text-[#8a8a8a] text-[16px] mb-[15px]">
                  {t("article_2_text")}
                </p>
                <div className="w-full flex justify-center items-center">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    <a href="https://www.instagram.com/p/C6ZmHvMLfqL/?hl=es&img_index=1" target="a_blank" >
                      {t("article_view_more")}
                    </a>
                  </button>
                </div>
              </div>
            </article>
            <article className="w-[325px] h-[480px] bg-[#fff] rounded-[10px]">
              <img
                className="h-[50%] w-full rounded-t-[10px]"
                src="/home/otrosp/talleres-oficio.JPG"
                alt=""
              />
              <div className="w-full h-[50%] p-4">
                <h3 className="h-[48px] leading-6 mb-[10px] text-[24px] font-semibold text-[#194382]">
                  {t("article_3_title")}
                </h3>
                <p className="h-[75px] text-[#8a8a8a] text-[16px] mb-[15px]">
                  {t("article_3_text")}
                </p>
                <div className="w-full flex justify-center items-center">
                  <button className="rounded-[6px] bg-[#0C8CE9] text-white py-2 px-4 font-medium text-[18px] m-auto">
                    <a href="https://www.instagram.com/p/CnqAP2FO9-1/?hl=es&img_index=1" target="a_blank">
                      {t("article_view_more")}
                    </a>
                  </button>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
    </div>
  );
}
