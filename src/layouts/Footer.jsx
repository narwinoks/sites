import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col px-4 pb-6 text-sm xs:px-8 ">
      <hr className="mb-6" />
      <div className="flex justify-between">
        <div className="space-x-2">
          <Link url="/me">/me</Link>
          <Link url="/source">/source</Link>
        </div>
        <p>&copy;2023 by wins</p>
      </div>
    </footer>
  );
};

export default Footer;
