import React from "react";
import Hero from "../../components/Home/Banner";
import Section1 from "../../components/Home/Section1";
import Section2 from "../../components/Home/Section2";
import Section3 from "../../components/Home/Section3";
import Section4 from "../../components/Home/Section4";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const isMobile = useOutletContext();
  return (
    <div>
      <Hero isMobile={isMobile} />
      <Section1 isMobile={isMobile} />
      <Section2 isMobile={isMobile} />
      <Section3 isMobile={isMobile} />
      <Section4 isMobile={isMobile} />
    </div>
  );
};

export default Home;
