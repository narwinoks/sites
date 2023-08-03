import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h3>About Page</h3>
      <Link to={"/"}>
        <h1>Home Page</h1>
      </Link>
      <Link to={"/about"}>
        <h1>About</h1>
      </Link>
    </div>
  );
};

export default AboutPage;
