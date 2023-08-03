import React from "react";
import CardPost from "../../components/CardPost";

const Posts = () => {
  return (
    <div>
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Last Posts</h1>
      <div className="my-4 grid grid-cols-1 gap-4">
        <CardPost></CardPost>
        <CardPost></CardPost>
        <CardPost></CardPost>
      </div>
    </div>
  );
};

export default Posts;
