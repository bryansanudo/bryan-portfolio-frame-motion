"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";
import { TitleText } from "@/components/CustomTexts";

const TechnologieCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative  flex items-center justify-center  cursor-pointer  `}
    onMouseOver={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className=" w-60 h-60 " />
    {active !== id ? (
      ""
    ) : (
      <div className="absolute bottom-0  ">
        <TitleText
          title={title}
          textStyles="font-semibold sm:text-[32px] text-[24px] dark:text-white "
        />
      </div>
    )}
  </motion.div>
);

export default TechnologieCard;
