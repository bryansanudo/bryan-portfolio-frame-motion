import { motion } from "framer-motion";

import styles from "@/utils/styles";
import { footerVariants } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col ">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4 ">
          <TypingText
            title="Bryan Sañudo"
            textStyles="font-extrabold text-[24px] text-white"
          />
          <div className="flex items-center justify-between flex-wrap gap-5">
            <button
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
            >
              <span>arrow</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
