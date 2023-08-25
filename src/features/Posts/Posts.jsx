import React, { useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import BlogsHooks from "../../hooks/BlogsHooks";

const Posts = () => {
  const { getBlogs } = BlogsHooks;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getBlogs();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Last Posts</h1>
      <div className="my-4 grid grid-cols-1 gap-4">
        {blogs.map((blog, i) => {
          if (i <= 3) {
            return <CardPost key={i} data={blog}></CardPost>;
          }
        })}
      </div>
    </div>
  );
};

export default Posts;
