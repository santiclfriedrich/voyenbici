import About from "../components/About/About";
import Slider from "../components/UI/Slider";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Articles />
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Home;
