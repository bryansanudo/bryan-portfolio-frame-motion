import React from "react";
import Section from "@/components/common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: "https://i.ibb.co/Hp9gLT6/adidas-01.png",
      title: "E-commerce",
      github: "https://github.com/bryansanudo/ecommerce-adidas",
      demo: "https://bryan95-adidas.vercel.app/",
    },
    {
      id: 2,

      github: "https://github.com/bryansanudo/trivia-game",
      image: "https://i.ibb.co/9bTBMt2/trivia-01.png",
      title: "Trivia Game",
      demo: "https://bryan95-trivia.vercel.app/",
    },

    {
      id: 3,
      image: "https://i.ibb.co/1vhvqRJ/ingravity-App-01.png",
      title: "Ingravity Roller App",
      github: "https://github.com/bryansanudo/ingravityV2",
      demo: "https://ingravity.vercel.app/",
    },
    {
      id: 4,
      image: "https://i.ibb.co/bQynG3J/sara-App-01.png",
      title: "Sara Zapata App",
      github: "https://github.com/bryansanudo/saraZapata",
      demo: "https://sarazapata.vercel.app/",
    },
    {
      id: 5,
      image: "https://i.ibb.co/WWmJnkC/Pokedex-App-01.png",
      title: "Pokedex App",
      github: "https://github.com/bryansanudo/pokedex",
      demo: "https://bryan95-pokedex.vercel.app/",
    },
    {
      id: 6,
      image: "https://i.ibb.co/YQZvFHZ/memory-01.png",
      title: "Memory Game",
      github: "https://github.com/bryansanudo/memory-game",
      demo: "https://bryan95-memory.vercel.app/",
    },
    {
      id: 7,
      image: "https://i.ibb.co/VQkvy8f/magrey-Barber-01.png",
      title: "Magrey Barber",
      github: "https://github.com/brsanudo/magrey",
      demo: "https://magrey.vercel.app/",
    },
    {
      id: 8,
      image: "https://i.ibb.co/YZZvxYS/wedding-01.png",
      title: "Wedding invitation",
      github: "https://github.com/bryansanudo/deivisysorany2",
      demo: "https://deivissorany2.vercel.app/",
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
        subtitle="These are some the projects that I have worked on. Some of them I have worked before I gained some experience. So go gentle on them."
      >
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
          {projects.map(({ id, image, title, github, demo }) => (
            <motion.div
              variants={fadeIn("right", "spring", id * 0.5, 0.75)}
              key={id}
              className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
            >
              <img src={image} alt={title} className="w-2/3" />
              <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                <h2 className="font-medium ">{title}</h2>
                <a
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-2xl cursor-pointer duration-300  hover:scale-125"
                >
                  <FaGithub />
                </a>
                <a
                  href={demo}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-2xl cursor-pointer duration-300 animate-pulse hover:scale-125"
                >
                  <FaExternalLinkSquareAlt className="" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Portfolio;
