import React from "react";
import porjectImage from "../assests/project.jpg";
const project = [
  {
    heading: "Porject-1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  ",
  },
  {
    heading: "Porject-2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  ",
  },
  {
    heading: "Porject-3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  ",
  },
  {
    heading: "Porject-4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  ",
  },
];
const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto" id="project">
      <h1 className="text-[30px] font-extrabold ml-4 sm:ml-0">Porjects</h1>
      <div className="flex flex-wrap">
        {project.map((item, index) => (
          <div
            className="flex shadow-md flex-wrap my-4 p-4 justify-center sm:justify-between items-center"
            key={index}
          >
            <div>
              <img
                src={porjectImage}
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

export default Projects;
