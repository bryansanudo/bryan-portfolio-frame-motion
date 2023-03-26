import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "@/assets/hero.svg";
import { motion } from "framer-motion";
import { TypingText } from "@/components/CustomTexts";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://linkedin.com",
      icon: <FaLinkedin />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen flex flex-col justify-start items-center p-5 text-center"
    >
      <TypingText
        title="Bryan Sañudo Garcia"
        textStyles="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#29A52D] to-[#5C24B3] hover:from-pink-500 hover:to-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl"
      />
      <TypingText title="Software Engineer" textStyles="py-3 text-2xl" />
      <p className="max-w-xl font-light text-gray-500 mb-10">
        Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my
        site. I am a freelance software engineer. I love to work on Web Dev,
        Mobile Dev & automation projects.
      </p>

      {/* <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3"
      >
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </motion.div> */}

      <motion.div variants={zoomIn(0.4, 1)}>
        <img
          src={avatar}
          alt=""
          className=" h-[280px] w-full md:h-[400px] object-cover object-top bg-gradient-to-b from-[#29A52D] rounded-xl"
        />
        <a
          href="/yash-resume.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-[#29A52D] to-[#5C24B3] text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </motion.div>

      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </motion.section>
  );
};

export default Hero;
