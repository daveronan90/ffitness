import React, { useEffect, useState } from "react";

const Slider = ({ images }) => {
  const [[page], setPage] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  });

  const paginate = (newDirection) => {
    if (page + newDirection < 0) {
      setPage([images.length - 1, newDirection]);
    } else if (page + newDirection > images.length - 1) {
      setPage([0, newDirection]);
    } else {
      setPage([page + newDirection, newDirection]);
    }
  };

  return (
    <div className="flex items-center justify-center overflow-x-hidden">
      <div
        className="transform rotate-180 scale-150 mr-3 sm:mr-32 cursor-pointer"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </div>
        <img
          className="w-1/2 h-40 sm:h-80"
          src={images[page]}
          alt="img"
        />
      <div
        className="transform scale-150 ml-3 sm:ml-32 cursor-pointer"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </div>
    </div>
  );
};

export default Slider;
