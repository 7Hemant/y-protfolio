import React from "react";
import blogImage from "../assests/blogimage.jpg";
const blog = [
  {
    heading: "BLOG-1-heading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  ",
  },
  {
    heading: "BLOG-2-heading",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  ",
  },
];

const Blog = () => {
  return (
    <div className="max-w-[1000px] mx-auto mt-8 sm:mt-0" id="blog">
      <h1 className="text-[30px] font-extrabold">BLOGS</h1>
      <div className="flex flex-wrap sm:flex-nowrap justify-around">
        {blog.map((item, index) => (
          <div
            className="flex shadow-md flex-wrap mx-2 my-4 p-4 sm:justify-between justify-center items-center hover:bg-[#eee]  hover:animate-bounce"
            key={index}
          >
            <div>
              <img
                src={blogImage}
                alt=""
                className="w-[200px] h-[200px] object-cover"
              />
            </div>
            <div className="sm:w-[50%]">
              <h1 className="font-bold text-[25px]">{item.heading}</h1>
              <p className="text-[#acacac]">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
