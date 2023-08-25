import React, { useMemo } from "react";
import CardContainer from "../../components/CardContainer";
import Hr from "../../components/hr";
import { MdLaunch } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../../_data/data.json";

const Project = () => {
  const projects = useMemo(() => data.projects, []);
  projects.sort(function (a, b) {
    return b.id - a.id;
  });
  return (
    <section className="mt-20">
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Projects</h1>
      <Hr></Hr>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects &&
          projects.map((project, index) => (
            <CardContainer key={index}>
              <img
                className="w-full"
                src={project.image}
                alt="Sunset in the mountains"
              ></img>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-base">{project.description}</p>
                <Hr></Hr>
                <div className="flex justify-end space-x-4">
                  <Link
                    to={project.github}
                    className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky flex items-center"
                    target="_blank"
                  >
                    GitHub
                    <MdLaunch className="ml-2"></MdLaunch>
                  </Link>
                  <Link
                    to={project.production}
                    className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky flex items-center"
                    target="_blank"
                  >
                    Demo
                    <MdLaunch className="ml-2"></MdLaunch>
                  </Link>
                </div>
              </div>
            </CardContainer>
          ))}
      </div>
    </section>
  );
};

export default Project;
