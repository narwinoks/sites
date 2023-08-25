import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
const Main = ({
  children,
  title,
  description,
  keywords,
  author,
  activeNavbar = 1,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log("successfully");
  };
  return (
    <div className={`m-auto ${darkMode ? "dark" : ""}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className="m-auto flex h-full min-h-screen w-full flex-col justify-between bg-brand-light text-brand-dark transition-colors duration-300 dark:bg-brand-dark dark:text-brand-light">
        <Header toggleDarkMode={toggleDarkMode}></Header>
        <main
          className={`mx-auto flex w-full max-w-5xl flex-col justify-center py-6 px-4 xs:py-6 xs:px-9`}
        >
          {children}
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
};

Main.defaultProps = {
  title: "winarno",
  description: "WINARNO",
  keywords: "WINARNO",
  author: "win",
};

export default Main;
