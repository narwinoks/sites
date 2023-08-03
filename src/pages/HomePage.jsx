import React from "react";
import { Link } from "react-router-dom";
import Main from "../layouts/Main";
import Hero from "../features/Hero/Hero";
import Hr from "../components/hr";
import Posts from "../features/Posts/Posts";
import Projects from "../features/Projects/Projects";

const HomePage = () => {
  return (
    <Main>
      <Hero></Hero>
      <Hr></Hr>
      <Posts></Posts>
      <Hr></Hr>
      <Projects></Projects>
      <Hr></Hr>
    </Main>
  );
};

export default HomePage;
