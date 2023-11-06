import About from "../components/About/About";
import Slider from "../components/UI/Slider";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact";
import { Element } from "react-scroll";
import ImageSection from "../components/UI/ImageSection";
import ImageBicis from '../../public/img-home-desktop.png'

const Home = () => {

  const phoneNumber = '541157532148'
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <div className="bg-white">
      <>
      <a href={whatsappUrl}>
        <img src="/home/whatsappIcon.png" alt="whatsappIcon" className="fixed bottom-[20px] right-[40px] z-50" />
      </a>
      </>
      <Slider />
      <About />
      <Articles />
      <ImageSection img={ImageBicis}/>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
