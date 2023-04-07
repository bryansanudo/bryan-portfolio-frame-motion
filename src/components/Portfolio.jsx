import React from "react";
import Section from "@/components/common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "@/assets/p1.svg";
import p2 from "@/assets/p2.svg";
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
      image: "https://i.ibb.co/GPqVW3w/adidas.png",
      title: "Carrito de compras",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 2,

      github: "https://github.com",
      image: "https://i.ibb.co/cxfYLGH/trivia.png",
      title: "Trivia Game",
      demo: "https://github.com",
    },

    {
      id: 3,
      image: "https://i.ibb.co/y4cPchh/ingravity.png",
      title: "Ingravity Roller App",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 4,
      image: "https://i.ibb.co/m4krpSw/sarazapata.png",
      title: "Sara Zapata App",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 5,
      image: "https://i.ibb.co/K0qkKfq/Pokedex.png",
      title: "Pokedex App",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 6,
      image: "https://i.ibb.co/4JtH7N5/memory.png",
      title: "Memory Game",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 7,
      image: "https://i.ibb.co/bPSY15h/magrey.png",
      title: "Magrey Barber",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 8,
      image: "https://i.ibb.co/9YjPQt2/wedding.png",
      title: "Invitación de boda",
      github: "https://github.com",
      demo: "https://github.com",
    },
  ];

  return (
    <Section
      name="portfolio"
      title="Portfolio"
      subtitle="These are all the projects that I have worked on. Some of them I have worked before I gained some experience. So go gentle on them."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div
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
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
