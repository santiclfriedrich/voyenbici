import About from "../components/About/About";
import Slider from "../components/UI/Slider";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact";
import { Element } from "react-scroll";
import ImageSection from "../components/UI/ImageSection";
import { IoLogoWhatsapp } from "react-icons/io";
// import InstagramEmbed from "../components/Instagram/InstagramEmbed";

const Home = () => {
  const phoneNumber = "541157532148";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <div className="bg-white">
      <>
        <a href={whatsappUrl} target="a_blank" rel="noreferrer">
          <IoLogoWhatsapp className="fixed bottom-[20px] right-[40px] z-50 text-[#25D366] h-[50px] w-[50px] " />
        </a>
      </>
      <Slider />
      <About />
      <Articles />
      <ImageSection />
      <Element name="contact">
        <Contact />
      </Element>
      {/* <InstagramEmbed/> */}
    </div>
  );
};

export default Home;
