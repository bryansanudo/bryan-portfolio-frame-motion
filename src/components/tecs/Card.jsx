import React from "react";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const Card = ({ card, handleCardClick }) => {
  return (
    <motion.div
      variants={zoomIn(0.4, 1)}
      className={`drop-shadow-md flex items-center ${
        card.flipped ? "[transform:rotateY(10deg)]" : "bg-red-500"
      } justify-center cursor-pointer h-20 w-20 md:h-40 md:w-40 hover:scale-105 rounded-xl transition-all duration-1000`}
      onClick={() => handleCardClick(card.id)}
    >
      <div>
        <img
          src={card.img}
          alt={card.alt}
          className={`md:h-32 h-16 scale-110 bg-blue-500 rounded-xl ${
            !card.flipped
              ? "[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000"
              : ""
          }`}
        />
      </div>
    </motion.div>
  );
};

export default Card;
