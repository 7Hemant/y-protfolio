import React from "react";

const Header = () => {
  return (
    <header className="bg-white w-[100%] shadow py-4 fixed top-0">
      <nav>
        <ul className="list-none flex   ">
          <li className="mx-4">
            <a href="#home">Home</a>
          </li>
          <li className="mx-4">
            <a href="#blog">Blog</a>
          </li>
          <li className="mx-4">
            <a href="#project">Project</a>
          </li>
          <li className="mx-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
