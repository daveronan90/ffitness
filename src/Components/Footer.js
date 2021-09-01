import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/FF.svg";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col font-semibold">
        <div className="flex pb-2 flex-col items-center flex-1 justify-center sm:justify-between sm:flex-row sm:mr-12">
          <Logo />
          <Link
            to="/"
            className="hidden md:block cursor-pointer text-gray-200 hover:text-white uppercase"
          >
            Contact
          </Link>
          <div className="flex pt-1 flex-row space-x-8 items-center justify-between sm:pt-0">
            <a href="www.facebook.com" className="text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 60 60"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M34.094 8.688h4.756V.005h-8.643c-.721-.03-9.51-.198-11.788 8.489-.033.091-.761 2.157-.761 6.983l-7.903.024v9.107l7.913-.023v24.021h12.087v-24h8v-9.131h-8v-2.873c0-1.786.753-3.914 4.339-3.914zm1.661 8.786v5.131h-8v24h-8.087V22.579l-7.913.023v-5.107l7.934-.023-.021-1.017c-.104-5.112.625-7.262.658-7.365 1.966-7.482 9.473-7.106 9.795-7.086l6.729.002v4.683h-2.756c-4.673 0-6.338 3.054-6.338 5.912v4.873h7.999z"
                ></path>
              </svg>
            </a>
            <a href="www.instgram.com" className="text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-white" />
        <p className="w-full text-center my-1 text-gray-200">
          Copyright © 2021 Dave Ronan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
