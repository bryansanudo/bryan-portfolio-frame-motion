import React from "react";
import Section from "@/components/common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Best App",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 2,
      image: p2,
      title: "Best App 2",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 3,
      image: p3,
      title: "Best App3",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 4,
      image: p4,
      title: "Best App4",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 5,
      image: p5,
      title: "Best App5",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 6,
      image: p6,
      title: "Best App6",
      github: "https://github.com",
      demo: "https://github.com",
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
        name="portfolio"
        title="Portfolio"
        subtitle="These are all the projects that I have worked on. Some of them I have worked before I gained some experience. So go gentle on them."
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1.5)}
          className="grid gap-8 lg:gap-14 lg:grid-cols-2"
        >
          {projects.map(({ id, image, title, github, demo }) => (
            <div
              key={id}
              className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
            >
              <img src={image} alt={title} className="w-2/3" />
              <motion.div
                variants={zoomIn(1, 1)}
                className="w-1/3 flex flex-col items-center justify-evenly p-1"
              >
                <h2>{title}</h2>
                <a
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-2xl cursor-pointer duration-150 hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href={demo}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-2xl cursor-pointer duration-150 hover:scale-110"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default Portfolio;
