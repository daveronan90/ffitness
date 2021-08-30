import React, { useState } from "react";
import robbie from "../assets/robbie.jpg";
import shannon from "../assets/shannon.jpg";
import eoghan from "../assets/eoghan.jpg";

const team = [
  {
    teamMember: robbie,
    name: "Robbie",
    position: "Owner",
    bio: "Hi, and a warm welcome to Farrell Fitness. Personally I love meeting people and connecting with them on a personal level. I try to gain as much experience and knowledge from everyone I meet. Learning about my clients gives me a deep appreciation to the level of detail that they require to reach their goals. Whether that is to improve their sporting performance, build muscle, lose weight, lose body fat or just improve general health. I will give each client 110% because that is how I would like to be treated no matter where I go. I pride myself on my honesty and work ethic. I feel that’s why I really connect with all my clients because I genuinely care about each one. Everybody has a story to tell and I am more than happy to listen to you!",
  },
  {
    teamMember: shannon,
    name: "Shannon",
    position: "Trainer",
    bio: "Shannon has a huge passion and interest in the health and fitness industry. She’s very outgoing and chatty. Shannon loves the overall concept of health and fitness, and she loves getting to know people on a personal level to help them out the best she can with there goals. Her main interest is Strength & Conditioning. She has competed in Crossfit and Olympic lifting competitions and she has achieved 1st place in some. She has been playing sports, such as soccer and football, throughout her whole life and she has represented her college. Shannon is here to help you all you have to do is ask.",
  },
  {
    teamMember: eoghan,
    name: "Eoghan",
    position: "Trainer",
    bio: "Shannon has a huge passion and interest in the health and fitness industry. She’s very outgoing and chatty. Shannon loves the overall concept of health and fitness, and she loves getting to know people on a personal level to help them out the best she can with there goals. Her main interest is Strength & Conditioning. She has competed in Crossfit and Olympic lifting competitions and she has achieved 1st place in some. She has been playing sports, such as soccer and football, throughout her whole life and she has represented her college. Shannon is here to help you all you have to do is ask.",
  },
];

function PersonalTraining() {
  const [showBio, setShowBio] = useState(null);
  return (
    <div>
      <video
        src={process.env.PUBLIC_URL + "/ptVideo.mp4"}
        loop
        muted
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
      ></video>
      <h1 className="text-xl font-bold text-center">Personal Training</h1>
      <p className="m-2">
        Sometimes we need a little help. A gentle push to get us started and to
        motivate us to achieve our dreams. Personal Training here at Farrell
        Fitness can provide you with everything you need to start and then
        continue your fitness journey. We cater for 1 to 1 or semi group
        personal training. So, whether your goal is to run a marathon, grow
        muscle and gain definition, lose weight or maybe just to gain confidence
        to attend classes we are here to help, encourage and motivate you.
      </p>
      <h1 className="text-xl font-bold text-center">How it works</h1>
      <ul className="m-3">
        <li>
          <span className="text-base-yellow">- </span>Come in and meet your
          instructor
        </li>
        <li>
          <span className="text-base-yellow">- </span>Discuss a plan and set
          short and long term goals
        </li>
        <li>
          <span className="text-base-yellow">- </span>Get your 3D Body
          Composition Scan
        </li>
        <li>
          <span className="text-base-yellow">- </span>We will provide and
          educate you with a personalised nutrition plan
        </li>
        <li>
          <span className="text-base-yellow">- </span>We will then head out to
          the Gym and teach you all the techniques you need to know
        </li>
        <li>
          <span className="text-base-yellow">- </span>Once we are confident we
          will progress to our fitness and mobility testing
        </li>
      </ul>
      <h1 className="text-xl font-bold text-center">Our Team</h1>
      <div className="grid gap-4 bg-black sm:grid-flow-col m-2">
        {team.map(({ name, teamMember, bio, position }, idx) => (
          <div key={idx}>
            <div
              style={{
                backgroundImage: `url(${teamMember})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="shadow-3xl w-full h-64 cursor-pointer"
              onClick={() => setShowBio(idx + 1)}
            />
            <span className="font-extrabold">{name}</span>
            <br />
            <span>
              {bio.replace(/^(.{200}[^\s]*).*/, "$1") + "\n"}{" "}
              <span
                className="font-bold text-base-yellow cursor-pointer"
                onClick={() => setShowBio(idx + 1)}
              >
                {" "}
                Read More...
              </span>
            </span>
            <div
              className={`fixed inset-0 bg-gray-300 z-50 flex transform transition duration-500 ease-in-out ${
                showBio === idx + 1 ? "translate-x-0" : "-translate-x-full"
              }`}
              onClick={() => setShowBio(0)}
            >
              <div className="text-black w-1/2 m-1">
                <p>{position}</p>
                <h1 className="text-xl font-bold text-base-yellow">{name}</h1>
                <p className="text-xs sm:text-base">{bio}</p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${teamMember})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-1/2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalTraining;
