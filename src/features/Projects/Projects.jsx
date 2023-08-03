import React from "react";
import CardProject from "../../components/CardProject";

const Projects = () => {
  return (
    <div className="mt-20">
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Last Projects</h1>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <CardProject>
          <img
            className="w-full"
            src="https://placehold.co/600x400"
            alt="Sunset in the mountains"
          ></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 hover:cursor-pointer hover:underline hover:font-bold hover:text-blue-800">The Coldest Sunset</div>
            <p className="text-base">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              .
            </p>
          </div>
        </CardProject>
      </div>
    </div>
  );
};

export default Projects;
