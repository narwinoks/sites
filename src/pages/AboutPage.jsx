import React from "react";
import Main from "../layouts/Main";
import About from "../features/About/About";
import Skillset from "../features/Skillset/Skillset";
import Experience from "../features/Experience/Experience";
import Hr from "../components/hr";

const AboutPage = () => {
  return (
    <Main>
      <About></About>
      <hr></hr>
      <Skillset></Skillset>
      <Hr></Hr>
      <Experience></Experience>
    </Main>
  );
};

export default AboutPage;
