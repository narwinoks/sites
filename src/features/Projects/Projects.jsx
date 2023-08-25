import React from "react";
import CardProject from "../../components/CardProject";
import { useMemo } from "react";
import data from "../../_data/data.json";

const Projects = () => {
  const projects = useMemo(() => data.projects, []);
  projects.sort(function (a, b) {
    return b.id - a.id;
  });
  return (
    <div className="mt-0">
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Last Projects</h1>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects &&
          projects.map((project, index) => {
            if (index <= 2) {
              return (
                <CardProject key={index}>
                  <img
                    className="w-full"
                    src={project.image}
                    alt="Sunset in the mountains"
                  ></img>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {project.title}
                    </div>
                    <p className="text-base">{project.description}</p>
                  </div>
                </CardProject>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Projects;
