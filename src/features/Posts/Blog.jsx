import React, { useEffect, useState } from "react";
import BlogsHooks from "../../hooks/BlogsHooks";
import Hr from "../../components/hr";
import CardContainer from "../../components/CardContainer";
import { Link } from "react-router-dom";

const Blog = () => {
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
    <div className="mt-20">
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Blogs</h1>
      <Hr></Hr>
      <div className="my-4 grid grid-cols-1 gap-4">
        {blogs &&
          blogs.map((blog, index) => {
            return (
              <CardContainer customClass={"h-80"} key={index}>
                <div className="relative flex max-h-64 items-center overflow-hidden">
                  <img
                    className="w-full  object-cover relative"
                    src={blog.image}
                    alt="Sunset in the mountains"
                  ></img>
                  <div className="absolute bottom-0 right-0 mr-4 mb-4 space-x-2">
                    <span className="rounded py-1 px-2 text-xs capitalize transition-[background-color] duration-300 bg-brand-light text-brand-dark dark:bg-brand-dark dark:text-brand-light">
                      Development
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 h-1/2 flex flex-col justify-between">
                  <p className="mb-2">{blog.date}</p>
                  <Link to={blog.url} target="_blank">
                    <div className="mb-2 text-2xl font-bold hover:cursor-pointer hover:underline hover:decoration-blue-600 hover:text-blue-600">
                      {blog.title}
                    </div>
                  </Link>
                  <p className="text-base">{blog.description}</p>
                </div>
              </CardContainer>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
