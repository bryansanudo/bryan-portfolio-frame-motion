import React from "react";
import Section from "@/components/common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: "https://i.ibb.co/Hp9gLT6/adidas-01.png",
      title: "Carrito de compras",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 2,

      github: "https://github.com",
      image: "https://i.ibb.co/9bTBMt2/trivia-01.png",
      title: "Trivia Game",
      demo: "https://github.com",
    },

    {
      id: 3,
      image: "https://i.ibb.co/1vhvqRJ/ingravity-App-01.png",
      title: "Ingravity Roller App",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 4,
      image: "https://i.ibb.co/bQynG3J/sara-App-01.png",
      title: "Sara Zapata App",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 5,
      image: "https://i.ibb.co/WWmJnkC/Pokedex-App-01.png",
      title: "Pokedex App",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 6,
      image: "https://i.ibb.co/YQZvFHZ/memory-01.png",
      title: "Memory Game",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 7,
      image: "https://i.ibb.co/VQkvy8f/magrey-Barber-01.png",
      title: "Magrey Barber",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 8,
      image: "https://i.ibb.co/YZZvxYS/wedding-01.png",
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
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
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
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
