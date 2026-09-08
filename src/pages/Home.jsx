import About from "../components/About/About";
import Hero from "../components/UI/Hero";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact";
import ImageSection from "../components/UI/ImageSection";
import Sponsors from "../components/Sponsors/Sponsors";
import StatsBar from "../components/UI/StatsBar";
import VideoSection from "../components/UI/VideoSection";
import { IoLogoWhatsapp } from "react-icons/io";
import { whatsappUrl } from "../constants/contact";
// import InstagramEmbed from "../components/Instagram/InstagramEmbed";

const Home = () => {
  return (
    <div className="bg-white">
      <>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <IoLogoWhatsapp className="fixed bottom-[20px] right-[40px] z-50 text-[#25D366] h-[50px] w-[50px] " />
        </a>
      </>
      <Hero />
      <About />
      <StatsBar />
      <VideoSection />
      <Articles />
      <ImageSection />
      <Sponsors />
      <Contact />
      {/* <InstagramEmbed/> */}
    </div>
  );
};

export default Home;
