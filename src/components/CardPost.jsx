import React from "react";

const CardPost = () => {
  return (
    <div className="overflow-hidden rounded shadow-sm transition-[background-color,transform,border-color] duration-300 hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 flex flex-col p-4">
      <div className="px-6 py-4">
        <p className="mb-2">27 June 2023</p>
        <div className="mb-2 text-2xl font-bold hover:cursor-pointer hover:underline hover:decoration-blue-600 hover:text-blue-600">
          Belajar Laravel Dasar
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default CardPost;
