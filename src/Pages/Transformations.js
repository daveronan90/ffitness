import React from "react";
import Slider from "../Components/Slider";

const images = require.context("../assets", false, /transformation\d{1,2}.jpeg/);

const Transformations = () => {
  return (
    <div className="m-2 text-center">
      <h1 className="text-2xl font-bold">10 Week Transformations Package</h1>
      <p>
        Our body transformation is an intense program run over 10 weeks (four
        gym sessions per week). These sessions are a combination of strength and
        conditioning and focus on helping build strength, gain muscle and in
        turn loosing body fat. Each client is assessed at the beginning and at
        the end of the 10 weeks. Our sessions combined with our nutritional plan
        will get you the results you seek provided you stick to our plan. The
        results we have seen in clients over the 10 weeks speak for themselves{" "}
      </p>
      <ul className="my-3 text-left">
        <li>
          <span className="text-base-yellow font-extrabold">- </span>
          Nutritional Plan
        </li>
        <li>
          <span className="text-base-yellow font-extrabold">- </span>2 fitness
          tests (Before and After Package)
        </li>
        <li>
          <span className="text-base-yellow font-extrabold">- </span>2 Styku
          Body Scans (Before and After Package)
        </li>
        <li>
          <span className="text-base-yellow font-extrabold">- </span>
          Pictures (Before and After Package)
        </li>
        <li>
          <span className="text-base-yellow font-extrabold">- </span>
          Make new friends
        </li>
        <li>
          <span className="text-base-yellow font-extrabold">- </span>
          Have great craic in a fun and safe environment
        </li>
      </ul>
      <Slider images={images.keys().map((img) => images(img).default)} />
    </div>
  );
};

export default Transformations;
