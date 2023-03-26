import React from "react";

import { TypingText } from "@/components/CustomTexts";

const Section = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <TypingText
        title={title}
        textStyles="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#29A52D] to-[#5C24B3] hover:from-pink-500 hover:to-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl "
      />

      <p className="max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base ">
        {subtitle}
      </p>
      {children}
    </section>
  );
};

export default Section;
