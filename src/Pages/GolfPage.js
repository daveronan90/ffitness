import React from "react";
import tm1 from "../assets/tm1.png";

const GolfPage = () => {
  return (
    <div>
      <video
        src={process.env.PUBLIC_URL + "/trackman.mp4"}
        loop
        muted
        autoPlay
      ></video>
      <div className="flex flex-col">
        <img src={tm1} alt="trackman" />
        <div className="m-2">
          <h3 className="font-semibold text-xl">
            Farrell Fitness Golf / Trackman
          </h3>
          <p>
            TrackMan uses two radar systems instead of one to obtain maximum
            data quality and increased pick up rates. One radar system tracks
            everything the club does before, during, and after impact - from
            commonly known parameters like club path and face angle to swing
            direction and spin loft. The other radar system tracks the full ball
            flight - from launch to landing and everything in between; including
            launch angle, spin rate and curvature. The dual radar technology
            enables even more data to be captured. Due to its focused,
            high-resolution radar beam, the TrackMan launch monitor provides the
            user with the greatest detail and accuracy of the club and ball at
            the moment of impact. The amount of detail achieved in the club
            delivery and ball flight is greatly superior to what is possible
            through single radar technology.
          </p>
          <br />
          <p>
            TrackMan uses two radar systems instead of one to obtain maximum
            data quality and increased pick up rates. One radar system tracks
            everything the club does before, during, and after impact - from
            commonly known parameters like club path and face angle to swing
            direction and spin loft. The other radar system tracks the full ball
            flight - from launch to landing and everything in between; including
            launch angle, spin rate and curvature. The dual radar technology
            enables even more data to be captured. Due to its focused,
            high-resolution radar beam, the TrackMan launch monitor provides the
            user with the greatest detail and accuracy of the club and ball at
            the moment of impact. The amount of detail achieved in the club
            delivery and ball flight is greatly superior to what is possible
            through single radar technology.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center mx-1 my-2 text-xs font-semibold sm:text-base">
        <div className="p-2  bg-base-yellow flex justify-center items-center">TRACKMAN SESSION</div>
        <div className="p-2  bg-base-yellow flex justify-center items-center">18 HOLES</div>
        <div className="p-2  bg-base-yellow flex justify-center items-center">12 WEEK PROGRAMME</div>
        <div className="p-2 border-r-2 border-base-yellow text-base-yellow">
          60 Minutes €60
          <br />
          90 Minutes €80
        </div>
        <div className="p-2 border-r-2 border-base-yellow text-base-yellow">Price dependent on duration</div>
        <div className="p-2 text-base-yellow">12 Week Golf Specific Programme €600</div>
        <div className="p-2 border-r-2 border-base-yellow">
          Yardage Assessment
          <br />
          <br />
          Trackman Practice
          <br />
          <br />
          Driving Range
          <br />
          <br />
          Skills Test
          <br />
          <br />
          Par 3
        </div>
        <div className="p-2 border-r-2 border-base-yellow">4 People Max</div>
        <div className="p-2 ">
          TPI Assessment Before & After
          <br />
          <br />
          10 Trackman Sessions (1Hour)
          <br />
          <br />
          3D Body Scan (optional)
          <br />
          <br />
          Nutritional Advice
          <br />
          <br />
          Mobility Programme
          <br />
          <br />
          Yardage Assessment
          <br />
          <br />
          Skills Test
        </div>
      </div>
    </div>
  );
};

export default GolfPage;
