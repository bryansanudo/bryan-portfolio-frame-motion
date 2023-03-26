import React from "react";
import Section from "@/components/common/Section";

import Board from "@/components/tecs/Board";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";
const Technologies = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section
        title="Tecs "
        subtitle="This is what my other clients have to say about me. I accept clients from all around the world."
      >
        <Board />
      </Section>
    </motion.div>
  );
};

export default Technologies;
