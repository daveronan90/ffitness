import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Slider = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

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
        className="transform rotate-180 scale-150 mr-3 sm:mr-32"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </div>
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <motion.img
          className="w-1/2"
          key={page}
          src={images[page]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.1 }}
        />
      </AnimatePresence>
      <div
        className="transform scale-150 ml-3 sm:ml-32"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </div>
    </div>
  );
};

export default Slider;
