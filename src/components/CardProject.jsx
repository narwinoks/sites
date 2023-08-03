import React from "react";

const CardProject = ({ children, customClass = null }) => {
  return (
    <>
      <div
        className={`${customClass} overflow-hidden rounded shadow-sm transition-[background-color,transform,border-color] duration-300 hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 flex flex-col`}
      >
        {children}
      </div>
    </>
  );
};

export default CardProject;
