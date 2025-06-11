import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import rect1 from "../assets/Rect1.png";
import rect2 from "../assets/Rect2.png";
import rect3 from "../assets/Rect3.png";
import rect4 from "../assets/Rect4.png";
import tools from "../assets/tools.png";
import { cn } from "./lib/utils.ts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";

type Service = {
  img: string;
  title: string;
  desc: string;
};

export const Services = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef);

  const descRef = useRef(null);
  const isDescInView = useInView(descRef);

  const experienceRef = useRef(null);
  const isExpInView = useInView(experienceRef);

  const counterRef = useRef(null);
  const isInView = useInView(counterRef);

  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let start = 0;
      const end = 5;
      const duration = 1000;
      const stepTime = duration / end;

      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(counter);
          setHasAnimated(true);
        }
      }, stepTime);
    }
  }, [isInView, hasAnimated]);

  const services: Service[] = [
    {
      img: services1,
      title: "Visual Design/Branding",
      desc: "I excel at visual identity design by creating clear, cohesive, and impactful visuals that reflect a brand’s values. With a strong eye for detail and design consistency, I ensure every element aligns to leave a lasting impression",
    },
    {
      img: services2,
      title: "UI/UX Design",
      desc: "I specialize in UI/UX design by creating user-centered interfaces that are both functional and visually engaging. I focus on clarity, consistency, and intuitive experiences that enhance usability across digital platforms.",
    },
    {
      img: services3,
      title: "Video Editing",
      desc: "Delivering impactful video edits that tell compelling stories using smooth transitions, clean cuts, and engaging visuals. My aim is on clarity, pacing, and emotion to help the viewer’s experience and message retention.",
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl p-15">
      {/* Heading */}
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-nasa text-center text-[20px] text-black md:text-[32px]"
      >
        OUR SERVICES
      </motion.h1>

      {/* Subheading */}
      <motion.p
        ref={descRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isDescInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-poppins mx-auto mt-2 text-center text-[14px] leading-[128%] md:text-[30px] lg:max-w-5xl lg:text-[48px]"
      >
        Browse my projects to see how strategic design translates into real
        impact.
      </motion.p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 place-items-center gap-y-5 md:grid-cols-2 md:gap-x-24 md:gap-y-6 lg:gap-x-0 xl:grid-cols-3 xl:gap-6">
        {services.map((service, index) => {
          const cardRef = useRef(null);
          const isCardInView = useInView(cardRef);

          return (
            <motion.div
              ref={cardRef}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={cn(
                "h-[503.64px] w-[356.34px] rounded-[30px] bg-white p-3",
                index === services.length - 1 &&
                  "md:col-span-2 md:mx-auto xl:col-span-1",
              )}
            >
              <img src={service.img} alt="service" className="rounded-[25px]" />
              <div className="font-poppins space-y-4 p-4">
                <h3 className="text-[20px] leading-[40px] font-[500]">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-[18px] tracking-[-5%]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Experience section (md and up) */}
      <motion.div
        ref={experienceRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isExpInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-10 hidden items-center justify-center md:flex lg:mt-20"
      >
        {/* Left */}
        <div
          className="flex h-[153.9px] w-[622.65px] items-center justify-center bg-contain bg-center bg-no-repeat p-3"
          style={{ backgroundImage: `url(${rect1})` }}
        >
          <div className="flex items-center space-x-4 sm:space-x-6 md:-ml-19 lg:-ml-15 lg:space-x-10 xl:-ml-42">
            <div className="flex items-center justify-center rounded-[7px] bg-white sm:h-[60px] sm:w-[80px] lg:h-[90px] lg:w-[125px] lg:rounded-[15px] xl:h-[131px] xl:w-[133px]">
              <motion.h2
                ref={counterRef}
                className="font-nasa text-[48px] leading-[100%] font-[400]"
              >
                +{count}
              </motion.h2>
            </div>
            <h2 className="font-nasa flex flex-col text-[18px] text-white lg:text-[32px]">
              <span>Years of</span>
              <span>Experience</span>
            </h2>
          </div>
        </div>

        {/* Right */}
        <div
          className="flex h-[52px] w-[233px] items-center justify-center bg-contain bg-center bg-no-repeat p-3 md:h-[154px] md:w-[651px]"
          style={{ backgroundImage: `url(${rect2})` }}
        >
          <div className="flex items-center space-x-4 sm:space-x-6 md:ml-10 lg:ml-18">
            <h2 className="font-nasa flex flex-col text-right text-[12px] font-[400] text-white sm:text-[18px] md:text-[15px] lg:text-[25px] xl:text-[30px]">
              <span>+6 Design Tools</span>
              <span>Expertise</span>
            </h2>
            <div className="flex h-[40px] w-[70px] items-center justify-center rounded-[10px] bg-white md:h-[60px] md:w-[100px] lg:h-[90px] lg:w-[135px] xl:h-[131px] xl:w-[222px]">
              <img src={tools} alt="tools" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Experience (sm only) */}
      <div className="mt-16 flex flex-col items-center justify-center gap-6 md:hidden">
        {/* Rect3 */}
        <div
          className="flex h-[90px] w-[350px] items-center justify-center bg-contain bg-center bg-no-repeat p-3"
          style={{ backgroundImage: `url(${rect3})` }}
        >
          <div className="mr-10 flex items-center space-x-4">
            <div className="flex h-[60px] w-[80px] items-center justify-center rounded-[10px] bg-white">
              <motion.h2 className="font-nasa text-[32px] leading-[100%] font-[400]">
                +5
              </motion.h2>
            </div>
            <h2 className="font-nasa flex flex-col text-[14px] text-white">
              <span>Years of</span>
              <span>Experience</span>
            </h2>
          </div>
        </div>

        {/* Rect4 */}
        <div
          className="flex h-[90px] w-[350px] items-center justify-center bg-contain bg-center bg-no-repeat p-3"
          style={{ backgroundImage: `url(${rect4})` }}
        >
          <div className="ml-8 flex items-center space-x-4">
            <h2 className="font-nasa flex flex-col text-right text-[14px] text-white">
              <span>+6 Design Tools</span>
              <span>Expertise</span>
            </h2>
            <div className="flex h-[60px] w-[100px] items-center justify-center rounded-[10px] bg-white">
              <img src={tools} alt="tools" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
