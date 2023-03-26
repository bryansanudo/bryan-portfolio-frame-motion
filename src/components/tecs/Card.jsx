import React from "react";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const Card = ({ card, handleCardClick }) => {
  return (
    <motion.div
      variants={zoomIn(card.id * 0.1, 1.5)}
      className={`shadow-md shadow-[#5C24B3] flex items-center ${
        card.flipped ? "[transform:rotateY(10deg)]" : ""
      } justify-center cursor-pointer h-20 w-20 md:h-40 md:w-40 hover:scale-105 rounded-xl transition-all duration-1000`}
      onClick={() => handleCardClick(card.id)}
    >
      <div>
        <img
          src={card.img}
          alt={card.alt}
          className={`md:h-32 h-16 scale-110 bg-white rounded-xl ${
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
