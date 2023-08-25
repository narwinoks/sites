import React from "react";
import { Link } from "react-router-dom";

const CardPost = ({ data }) => {
  return (
    <div className="overflow-hidden rounded shadow-sm transition-[background-color,transform,border-color] duration-300 hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 flex flex-col p-4">
      <div className="px-6 py-4">
        <p className="mb-2">{data.date}</p>
        <Link to={data.url} target="_blank">
          <div className="mb-2 text-2xl font-bold hover:cursor-pointer hover:underline hover:decoration-blue-600 hover:text-blue-600">
            {data.title}
          </div>
        </Link>
        <p className="text-base">{data.description}</p>
      </div>
    </div>
  );
};

export default CardPost;
