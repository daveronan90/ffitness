import React from "react";
import stykuImg from "../assets/styku.png";

const StykuPage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center">3D Body Scanning</h1>
      <p className="border-b border-white mb-3 w-full text-center">
        Available to Members and Non-Members
      </p>
      <img
        src={process.env.PUBLIC_URL + "/stykuVideo.gif"}
        alt="styku video"
        className="w-screen"
      />
      <div className="m-2 flex flex-col justify-center items-center">
        <img src={stykuImg} alt="styku" />
      </div>
      <div className="m-2">
        <p>
          A revolutionary new way to measure body-fat and overall fitness,
          helping you to set goals and track results.
          <br />
          <br />
          Ideal for weight management, athletes, body builders, groups and
          sports clubs.
          <br />
          <br />
          Skyku appointments will take approximately 15-25 minutes and include
          the scan and data evaluation.
          <br />
          <br />A detailed Styku report will be emailed to you and your data
          will remain in the system for comparison with future scans.
        </p>
        <ul className="m-3">
          <li>
            <span className="text-base-yellow">- </span>Measures Body Fat and
            Overall Fitness
          </li>
          <li>
            <span className="text-base-yellow">- </span>3D Visualisations and
            Reports
          </li>
          <li>
            <span className="text-base-yellow">- </span>Fast and Accurate Body
            Measurements
          </li>
          <li>
            <span className="text-base-yellow">- </span>Precisely Track Progress
          </li>
        </ul>
        <div className="font-bold">
          <h1 className="border-b border-base-yellow w-52 mb-2">Members €40</h1>
          <h1 className="border-b border-base-yellow w-52">Non-Members €40</h1>
        </div>
      </div>
    </div>
  );
};

export default StykuPage;
