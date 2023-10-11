import About from "../components/About/About";
import Slider from "../components/UI/Slider";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact";
import { Element } from "react-scroll";
import ImageSection from "../components/UI/ImageSection";
import ImageBicis from '../../public/img-home-desktop.png'

const Home = () => {
  return (
    <div className="bg-[#C4D8F0]">
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
