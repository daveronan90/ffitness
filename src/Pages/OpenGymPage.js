import React from "react";
import Timetable from "../Components/Timetable";

const OpenGymPage = () => {
  return (
    <div className="overflow-auto bg-black ">
      <video
        src={process.env.PUBLIC_URL + "/OpenGym.mp4"}
        loop
        muted
        autoPlay
      ></video>
      <Timetable />
      <h1 className="text-center font-bold text-5xl mt-8 tracking-wide relative">
        Our Pricing
      </h1>
      <div className="flex flex-col justify-center sm:flex-row text-base-yellow">
        <div className="border rounded-lg md:rounded-r-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-10 shadow-lg">
          <div className="">Classes</div>
          <div id="annual" className="font-bold text-6xl annual">
            199.99
          </div>
          <hr />
          <div className="text-sm my-3">500 GB Storage</div>
          <hr />
          <div className="text-sm my-3">2 Users Allowed</div>
          <hr />
          <div className="text-sm my-3">Send up to 3 GB</div>
          <hr />
          <a href="/" target="_blank">
            <div className="bg-gradient-base border border-base-yellow hover:bg-white text-black hover:text-base-yellow font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
              Learn More
            </div>
          </a>
        </div>

        <div className="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-base-yellow text-white font-medium z-10 shadow-lg">
          <div className="py-4">
            Gym & Classes
            <div id="annual" className="font-bold text-6xl annual">
              249.99
            </div>
            <hr />
            <div className="text-sm my-3">1 TB Storage</div>
            <hr />
            <div className="text-sm my-3">5 Users Allowed</div>
            <hr />
            <div className="text-sm my-3">Send up to 10 GB</div>
            <hr />
            <a href="/" target="_blank">
              <div className="bg-white border border-white hover:bg-transparent text-base-yellow hover:text-white font-bold uppercase text-xs mt-5 py-2 mpx-4 rounded cursor-pointer">
                Learn More
              </div>
            </a>
          </div>
        </div>

        <div className="border rounded-lg  md:rounded-l-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-10 shadow-lg text-base-yellow">
          <div className="">Gym Only</div>
          <div id="annual" className="font-bold text-6xl annual">
            399.99
          </div>
          <hr />
          <div className="text-sm my-3">2 TB Storage</div>
          <hr />
          <div className="text-sm my-3">10 Users Allowed</div>
          <hr />
          <div className="text-sm my-3">Send up to 20 GB</div>
          <hr />
          <a href="/" target="_blank">
            <div className="bg-gradient-base border border-base-yellow hover:bg-transparent text-black hover:text-base-yellow font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
              Learn More
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpenGymPage;
