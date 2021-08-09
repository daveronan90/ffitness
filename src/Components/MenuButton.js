import React from "react";

const MenuButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`w-10 h-10 relative focus:outline-none transform ease-in-out transition-all duration-300 z-30 ${
        open
          ? "bg-black translate-x-36  border-base-yellow border-2 rounded-full"
          : "translate-x-0"
      }`}
    >
      <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out 
            ${open ? "rotate-45" : "-translate-y-1.5"}`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out
            ${open ? "opacity-0" : ""}`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out
            ${open ? "-rotate-45" : " translate-y-1.5"}`}
        ></span>
      </div>
    </button>
  );
};

export default MenuButton;
