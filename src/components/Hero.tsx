import mask from "../assets/Mask group.png";
import bgstyle from "../assets/bgstyle.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { easeInOut, motion } from "motion/react";

export const Hero = () => {
  const text =
    "Visual & UI/UX Designer based in Lagos, crafting smooth interfaces and bold visual stories. I bring ideas to life through intentional design, vibrant aesthetics, and user-focused solutions.";

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        ease: easeInOut,
      }}
      id="about"
      className="my-5 flex flex-col justify-center space-y-5 md:space-x-5 lg:flex-row lg:space-y-0"
    >
      {/* Image Div */}
      <motion.div className="relative">
        <img
          src={mask}
          alt="hero-img"
          className="h-full w-full bg-cover bg-center lg:w-[30rem] xl:w-full"
        />

        <motion.a
          whileTap={{
            scale: 0.8,
          }}
          href="/FORTRY_RESUME.pdf"
          target="_blank"
          className="font-poppins absolute bottom-3 left-[2rem] flex items-center space-x-1 font-semibold md:bottom-5 md:left-[6rem] md:text-lg lg:left-[3rem] xl:left-[6rem] xl:text-xl"
        >
          <span>Download C.V</span>
          <span>
            <Icon icon="iconoir:download" className="text-xl" />
          </span>{" "}
        </motion.a>
      </motion.div>

      {/* Text Div */}
      <div
        className="w-full rounded-[3rem] bg-cover bg-center p-9 text-white md:p-15 lg:w-[50%] lg:p-9 xl:p-15"
        style={{
          backgroundImage: `url(${bgstyle}), linear-gradient(to bottom, #0073ff, #003699)`,
        }}
      >
        <h1 className="font-nasa flex flex-col gap-3">
          <span className="text-center text-[32px] md:hidden">
            Hi i'm Victory
          </span>
          <span className="hidden text-[64px] leading-none md:block">
            Hi, i'm
          </span>
          <span className="hidden text-[96px] leading-none md:block lg:text-[60px] xl:text-[96px]">
            Victory
          </span>
        </h1>
        <p className="font-poppins pt-4 text-left text-[14px] font-[400] md:pt-19 md:text-[24px] lg:max-w-md lg:text-[22px] xl:text-[24px]">
          {text.split("").map((word, index) => (
            <motion.span
              key={word + index}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.1, delay: index * 0.03 }}
              className="inline"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </motion.section>
  );
};
