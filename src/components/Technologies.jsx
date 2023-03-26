import { useState } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";

import TechnologieCard from "@/components/TechnologieCard";
import Section from "@/components/common/Section";

const Technologies = () => {
  const [active, setActive] = useState("tec-2");

  const tecs = [
    {
      id: "tec-1",
      imgUrl: "/img/reactjs.svg",
      title: "React Js",
    },
    {
      id: "tec-2",
      imgUrl: "/img/tailwind.svg",
      title: "Tailwind ",
    },
    {
      id: "tec-3",
      imgUrl: "/img/figma.svg",
      title: "Figma",
    },
    {
      id: "tec-4",
      imgUrl: "/img/js.svg",
      title: "JavaScript",
    },
    {
      id: "tec-5",
      imgUrl: "/img/css.svg",
      title: "CSS",
    },
    {
      id: "tec-6",
      imgUrl: "/img/html.svg",
      title: "HTML",
    },
    {
      id: "tec-7",
      imgUrl: "/img/gitHub.svg",
      title: "GitHub",
    },
    {
      id: "tec-8",
      imgUrl: "/img/motion.svg",
      title: "Motion",
    },
    {
      id: "tec-9",
      imgUrl: "/img/illustrator.svg",
      title: "Illustrator",
    },
    {
      id: "tec-10",
      imgUrl: "/img/firebase.svg",
      title: "Firebase",
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
        title="Portfolio"
        subtitle="These are all the projects that I have worked on. Some of them I have worked before I gained some experience. So go gentle on them."
      >
        <div className=" grid grid-cols-2 gap-5  lg:grid-cols-5 ">
          {tecs.map((world, index) => (
            <TechnologieCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Technologies;
