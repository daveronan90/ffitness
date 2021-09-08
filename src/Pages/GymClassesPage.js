import React from "react";
import Timetable from "../Components/Timetable";
import Video from "../Components/Video";
import { classTableData } from "../fixtures/classesTimetableData";
import { gymTableData } from "../fixtures/gymTimetableData";

const OpenGymPage = () => {
  return (
    <div>
      <Video source={"/OpenGym.mp4"} />
      <h1 className="text-center font-bold text-5xl mt-8 tracking-wide relative">
        Our Pricing
      </h1>
      <div className="flex flex-col justify-center sm:flex-row text-base-yellow">
        <div className="border rounded-lg md:rounded-r-none text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gray-100 font-medium z-10 shadow-lg">
          <div className="">1 Month Gym & Classes</div>
          <div id="annual" className="font-bold text-6xl annual">
            99.00
          </div>
          <hr />
          <div className="text-sm my-3">Unlimited access to open GYM</div>
          <hr />
          <div className="text-sm my-3">State of the art equipment</div>
          <hr />
          <div className="text-sm my-3">Limitied spaces remaining</div>
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
              899.00
            </div>
            <hr />
            <div className="text-sm my-3">Unlimited access to GYM</div>
            <hr />
            <div className="text-sm my-3">Unlimited access to Classes</div>
            <hr />
            <div className="text-sm my-3">Limited spaces remaining</div>
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
            549.00
          </div>
          <hr />
          <div className="text-sm my-3">Unlimited access to open GYM</div>
          <hr />
          <div className="text-sm my-3">State of the art equipment</div>
          <hr />
          <div className="text-sm my-3">Limitied spaces remaining</div>
          <hr />
          <a href="/" target="_blank">
            <div className="bg-gradient-base border border-base-yellow hover:bg-transparent text-black hover:text-base-yellow font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
              Learn More
            </div>
          </a>
        </div>
      </div>
      <Timetable tableData={gymTableData} />
      <Timetable tableData={classTableData} />
    </div>
  );
};

export default OpenGymPage;
