import SVGsContainer from "../UI/SVGsContainer";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactHeading() {
  const { t } = useLanguage();
  return (
    <div className="w-full flex flex-col items-center mb-20">
        <p className="text-[#5c5c5c] text-[20px] lg:text-[25px] my-[16px]">
            <span className="font-bold">{t("contact_if_you_want")}</span>
        </p>
        <SVGsContainer/>
    </div>
  )
}
