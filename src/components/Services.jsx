import React from "react";
import Section from "@/components/common/Section";

import commerce from "@/assets/commerce.png";
import research from "@/assets/research.png";
import web from "@/assets/web.png";
import mobile from "@/assets/mobile.png";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
const Services = () => {
  const services = [
    {
      id: 1,
      image: commerce,
      title: "ECommerce Website",
    },
    {
      id: 2,
      image: web,
      title: "Web Development",
    },
    {
      id: 3,
      image: mobile,
      title: "Mobile Development",
    },
    {
      id: 4,
      image: research,
      title: "Research and develpment",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section
        title="Services👀"
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quis at suscipit aspernatur! Quia soluta cumque vitae delectus fugit aut voluptatem sint inventore. Hic earum dolore ipsum pariatur a fugit?
      export default Services"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          {services.map(({ id, image, title }) => (
            <div
              className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
              key={id}
            >
              <img
                src={image}
                alt={title}
                className="w-36 h-36 md:w-44 md:h-44 object-contain"
              />
              <h3 className="mt-5 text-base">{title}</h3>
            </div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Services;
