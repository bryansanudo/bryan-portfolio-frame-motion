"use client";

import { motion } from "framer-motion";

import styles from "@/utils/styles";
import { fadeIn } from "@/utils/motion";

const TechnologieCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center w-40 h-40 transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-40 h-40 object-cover rounded-[24px]"
    />
    {active !== id ? (
      ""
    ) : (
      <div className="absolute bottom-0 p-8 ">
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default TechnologieCard;
