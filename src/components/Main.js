import React from "react";
import image from "../assests/image.jpg";
const Main = () => {
  return (
    <div
      className="mt-[5rem] flex flex-wrap flex-col-reverse   justify-around items-center sm:flex-row"
      id="home"
    >
      <div className="mt-4 sm:mt-0">
        <h1 className="text-[30px] sm:text-[50px] font-bold">
          Hello,I am Pooja.
        </h1>
        <h1 className="text-[25px] sm:text-[40px] font-semibold mb-4">
          Software Developer
        </h1>
        <a
          href="../assests/Resume.pdf"
          download
          className="px-4 py-2  bg-orange-500 mt-4"
        >
          Download Resume
        </a>
      </div>
      <div className=" sm:w-[400px]  sm:h-[400px] rounded-full">
        <img
          src={image}
          alt=""
          className="rounded-full w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] object-cover "
        />
      </div>
    </div>
  );
};

export default Main;
