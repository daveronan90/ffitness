import React from "react";
import cupping from "../assets/cupping.jpg";
import dryNeedle from "../assets/dry-needle.jpg";
import sportsMassage from "../assets/sports-massage.jpg";

const PhysicalTherapy = () => {
  return (
    <div className="m-2 text-center flex flex-col">
      <h1 className="text-2xl font-bold">Physical Therapy</h1>
      <img className="mt-3" src={cupping} alt="cupping" />
      <span className="font-bold text-lg">Cupping</span>
      <p>
        Cupping is a type of alternative therapy that originated in China. It
        involves placing cups on the skin to create suction which increases
        blood circulation to the area where the cups are placed. This can
        relieve muscle tension and improve overall blood flow and promote cell
        repair. It can also help form new connective tissues and create new
        blood vessels in the tissue.
      </p>
      <div className="text-base-yellow font-extrabold flex flex-col my-2">
        <br />
        <span>Non-Members €50</span>
        <span>Members €40</span>
      </div>
      <img className="mt-3" src={dryNeedle} alt="dry needle" />
      <span className="font-bold text-lg">Dry Needling</span>
      <p>
        The aim of Trigger Point Dry Needling is to reduce muscle pain and
        dysfunction by releasing oversensitive areas in the muscle known as
        myofascial trigger points. Trigger points can be a source of pain and
        can commonly refer pain to different areas. Trigger points can develop
        as a result of overloading a muscle, overuse, or when the body is in a
        stressed and tense state. When the needle is inserted into the trigger
        point, the muscle will undergo a localised contraction known as a
        ‘twitch’. You may also feel a deep aching in the muscle, both of which
        are normal reactions and will result in therapeutic benefit from the
        technique.
      </p>
      <div className="text-base-yellow font-extrabold flex flex-col my-2">
        <br />
        <span>Non-Members €50</span>
        <span>Members €40</span>
      </div>
      <img className="mt-3" src={sportsMassage} alt="massage" />
      <span className="font-bold text-lg">Sport Massage</span>
      <p>
        Therapeutic sports massage is a type of massage technique that focuses
        on treating soft tissue aches, pain and injuries that are associated
        with recreational activities. Massage can reduce muscle stiffness and
        improve relaxation by reducing heart rate and blood pressure.
        <br />
        Benefits of sports massage include: Increased joint range of motion
        (ROM), increased flexibility, increased sense of well-being, decreased
        muscle tension, decreased neurological excitability (nerves more
        relaxed, decreased muscle spasms and better sleep).
      </p>
      <div className="text-base-yellow font-extrabold flex flex-col my-2">
        <br />
        <span>Non-Members €50</span>
        <span>Members €40</span>
      </div>
    </div>
  );
};

export default PhysicalTherapy;
