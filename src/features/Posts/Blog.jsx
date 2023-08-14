import React from "react";
import Hr from "../../components/hr";
import CardContainer from "../../components/CardContainer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="mt-20">
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Blogs</h1>
      <Hr></Hr>
      <div className="my-4 grid grid-cols-1 gap-4">
        <CardContainer customClass={"h-80"}>
          <div className="relative flex max-h-64 items-center overflow-hidden">
            <img
              className="w-full  object-cover relative"
              src="https://placehold.co/200x400"
              alt="Sunset in the mountains"
            ></img>
            <div className="absolute bottom-0 right-0 mr-4 mb-4 space-x-2">
              <span className="rounded py-1 px-2 text-xs capitalize transition-[background-color] duration-300 bg-brand-light text-brand-dark dark:bg-brand-dark dark:text-brand-light">
                Development
              </span>
            </div>
          </div>
          <div className="px-6 py-4 h-1/2 flex flex-col justify-between">
            <p className="mb-2">27 June 2023</p>
            <Link to={"/blog/123"}>
              <div className="mb-2 text-2xl font-bold hover:cursor-pointer hover:underline hover:decoration-blue-600 hover:text-blue-600">
                Belajar Laravel Dasar
              </div>
            </Link>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </CardContainer>
        <CardContainer>2</CardContainer>
      </div>
    </div>
  );
};

export default Blog;
