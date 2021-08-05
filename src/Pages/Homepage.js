import React from "react";
import classes from "../assets/classesAndMembership.jpg";
import golf from "../assets/golfServiceCard.jpeg";
import team from "../assets/personalTraining.jpg";
import gym from "../assets/opengym.jpg";

const services = [
  { name: "Open Gym", service: gym },
  { name: "Classes", service: classes },
  { name: "Golf Training", service: golf },
];

const Homepage = () => {
  return (
    <main>
      <video
        src={process.env.PUBLIC_URL + "/mainVideo.mp4"}
        loop
        muted
        autoPlay
      ></video>
      <div className="p-4">
        <div className="grid gap-4 bg-black sm:grid-flow-col">
          {services.map(({ name, service }, idx) => (
            <div key={idx}>
              <div
                style={{
                  backgroundImage: `url(${service})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="shadow-3xl w-full h-64"
              />
              <span className="font-extrabold">{name}</span>
            </div>
          ))}
        </div>
        <div className="sm:flex text-white my-8">
          <div className="flex flex-col sm:items-start items-center">
            <h1 className="text-3xl mb-4 font-extrabold">ABOUT US</h1>
            <p className="text-sm sm:text-base mb-4">
              Farrell Fitness caters for all levels of fitness at an affordable
              price. Our gym is filled with state-of-the-art equipment from
              heavy lifting areas and cardio specific studio and everything in
              between. Get access to our classes with our highly trained team
              guiding you towards you specific goals! Get access to the open gym
              or classes only or both. You choose!
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${team})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="shadow-3xl w-full h-64"
          />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
