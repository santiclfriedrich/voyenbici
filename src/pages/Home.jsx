import React from "react";
import About from "../components/About/About";
import Slider from "../components/UI/Slider";
import Articles from "../components/Articles/Articles";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Articles />
    </>
  );
};

export default Home;
