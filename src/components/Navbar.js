import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-tertiary p-6 flex justify-between items-center text-primary shadow-lg">
      <h1 className="text-3xl font-bold font-heading">MEOWSite</h1>
      <div className="font-body">
        <ul className="flex gap-10 text-xl">
          <li>
            <a
              href="#"
              className="transform hover:scale-110 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transform hover:scale-110 transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#"
              className="transform hover:scale-110 transition duration-200"
            >
              Services 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;