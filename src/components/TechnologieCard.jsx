"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";
import { TitleText } from "@/components/CustomTexts";

const TechnologieCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", 1, 2.5)}
    className={`relative  flex items-center justify-center  cursor-pointer  `}
    onMouseOver={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className=" w-60 h-60 " />
    {active !== id ? (
      ""
    ) : (
      <div className="absolute bottom-[-20px] rounded-lg shadow-xl p-2 shadow-black dark:shadow-white  duration-200  ">
        <TitleText
          title={title}
          textStyles="font-semibold sm:text-[32px] text-[24px] dark:text-white "
        />
      </div>
    )}
  </motion.div>
);

export default TechnologieCard;
