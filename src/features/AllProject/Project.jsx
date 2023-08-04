import React from "react";
import CardContainer from "../../components/CardContainer";
import Hr from "../../components/hr";
import { MdLaunch } from "react-icons/md";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="mt-20">
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Projects</h1>
      <Hr></Hr>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <CardContainer>
          <img
            className="w-full"
            src="https://placehold.co/600x400"
            alt="Sunset in the mountains"
          ></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-base">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              .
            </p>
            <Hr></Hr>
            <div className="flex justify-end space-x-4">
              <Link
                className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky flex items-center"
                target="_blank"
              >
                GitHub
                <MdLaunch className="ml-2"></MdLaunch>
              </Link>
              <a
                className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky flex items-center"
                target="_blank"
              >
                Demo
                <MdLaunch className="ml-2"></MdLaunch>
              </a>
            </div>
          </div>
        </CardContainer>
        <CardContainer>2</CardContainer>
      </div>
    </section>
  );
};

export default Project;
