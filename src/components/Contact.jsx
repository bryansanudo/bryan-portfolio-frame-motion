import React from "react";
import Section from "@/components/common/Section";
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from "react-icons/fa";
import contact from "@/assets/mobile.png";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

const Contact = () => {
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

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section
        title="Contact"
        subtitle=" I am open to talk regardin freelancing or full-time opportunities.
        Feel Free to contact me using your preferred medium :)"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            className="flex w-full items-center justify-evenly text-3xl"
          >
            {SOCIAL.map(({ id, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrerr"
                className="duration-500 hover:scale-150"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          <div className="p-8 text-left md:w-[500px] w-[300px]">
            <form action="" method="POST">
              <div className="flex flex-col gap-2 w-full ">
                <motion.div
                  className="flex flex-col"
                  variants={zoomIn(0.5, 1.5)}
                >
                  <label className="capitalize text-sm py-2 font-extralight">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </motion.div>
                <motion.div className="flex flex-col" variants={zoomIn(1, 1.5)}>
                  <label className="capitalize text-sm py-2 font-extralight">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  variants={zoomIn(1.5, 1.5)}
                >
                  <label className="capitalize text-sm py-2 font-extralight">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  variants={zoomIn(2.0, 1.5)}
                >
                  <label className="capitalize text-sm py-2 font-extralight">
                    message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                  ></textarea>
                </motion.div>
              </div>

              <div className="flex items-center justify-center">
                <button className="my-8 bg-gradient-to-r from-[#29A52D] to-[#5C24B3] text-white px-6 py-3  rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200 capitalize">
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Contact;
