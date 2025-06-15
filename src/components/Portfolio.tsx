import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.png";
import poster5 from "../assets/poster5.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import vector from "../assets/vector.png";
import backbtn from "../assets/backbtn.png";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type PortfolioItem = {
  id: number;
  poster: string; // url to image
  img: string; // url to image
  heading: string;
  paragh: string;
};

export const Portfolio = () => {
  const portfolio: PortfolioItem[] = [
    {
      id: 1,
      poster: poster1,
      img: img1,
      heading: "Poster Design",
      paragh:
        "Bold, clean, and made to catch attention. I design posters that speak loud and look good, perfect for events, promos, or anything you need to share.",
    },
    {
      id: 2,
      poster: poster2,
      img: img2,
      heading: "Visual Identity",
      paragh:
        "I help bring your brand to life with logos, colors, and styles that match your vibe — so people remember you at a glance",
    },
    {
      id: 3,
      poster: poster3,
      img: img3,
      heading: "Church Designs",
      paragh:
        "From flyers to social media and event posters, I design clean, spirit-filled visuals that help churches share the Word and connect with people.",
    },
    {
      id: 4,
      poster: poster4,
      img: img4,
      heading: "Book Covers",
      paragh:
        "I design covers that grab attention and tell the story at first glance, whether it’s for print or digital books. Clean, creative, and made to stand out on any shelf or screen.",
    },
    {
      id: 5,
      poster: poster5,
      img: img5,
      heading: "UI/UX Design",
      paragh:
        "I design user-friendly apps and websites that not only look great but also feel natural to use. From wireframes to final visuals and with a great experience.",
    },
  ];

  const [state, setState] = useState({
    slider: 0,
    direction: "next" as "next" | "prev",
  });

  const [displayedSlider, setDisplayedSlider] = useState(state.slider);

  const items = portfolio[displayedSlider];

  function next() {
    if (state.slider + 1 < portfolio.length) {
      setState({ slider: state.slider + 1, direction: "next" });
      setTimeout(() => {
        setDisplayedSlider(state.slider + 1);
      }, 0);
    }
  }

  function prev() {
    if (state.slider > 0) {
      setState({ slider: state.slider - 1, direction: "prev" });
      setTimeout(() => {
        setDisplayedSlider(state.slider - 1);
      }, 0);
    }
  }

  const showGoBackButton = state.slider > 0;

  return (
    <section id="portfolio">
      <h1 className="font-nasa py-6 text-center text-[20px] text-black md:text-[32px] lg:py-10">
        Portfolio
      </h1>
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-[312px] rounded-t-[20px] bg-cover bg-center md:h-[500px] lg:h-[900px] lg:w-full lg:rounded-t-[80px] xl:h-[960px]"
          key={items.poster}
          style={{
            backgroundImage: `url(${items.poster})`,
          }}
          transition={{ duration: 0.9, ease: "easeIn" }}
        >
          {/* Vector overlay */}
          <div
            className="absolute inset-0 bottom-0 left-0 z-10 w-full bg-contain bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${vector})` }}
          ></div>

          {/* Content */}
          <div className="relative z-20 flex space-x-8 px-4 pt-[10.2rem] text-white md:pt-[16rem] lg:space-x-0 lg:pt-[30rem] xl:px-9 xl:pt-[33rem]">
            <div className="space-y-1 md:pl-5 lg:space-y-2 xl:space-y-4 xl:pl-20">
              <motion.h2
                key={items.heading}
                initial={{
                  y: state.direction === "next" ? 20 : -20,
                  opacity: 0,
                }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: state.direction === "next" ? -20 : 20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="font-nasa text-[20px] font-bold md:text-[40px] lg:text-[50px] xl:text-[64px]"
              >
                {items.heading}
              </motion.h2>

              <p className="font-poppins max-w-[13rem] text-[7px] md:max-w-[24rem] md:text-[13px] md:font-[500] lg:max-w-[58rem] lg:text-[20px] xl:max-w-[38rem]">
                {items.paragh}
              </p>
              <a href="https://www.behance.net/ufotvictory" target="_blank">
                <button className="h-[18px] w-[64px] cursor-pointer rounded-[6px] bg-white text-[7px] font-medium text-black md:mt-3 md:h-[30px] md:w-[100px] md:text-[10px] lg:mt-5 lg:h-[50px] lg:w-[178px] lg:rounded-[12px] lg:text-[20px]">
                  Explore More
                </button>
              </a>
            </div>

            {/* Slider */}
            <div className="flex space-x-4 md:pl-18 lg:pl-14 xl:space-x-6 xl:pl-40">
              {showGoBackButton && (
                <button onClick={prev} className="cursor-pointer xl:pr-5">
                  <img
                    src={backbtn}
                    className="h-[20px] w-[20px] lg:h-[50px] lg:w-[50px] xl:h-[56px] xl:w-[56px]"
                    alt="back"
                  />
                </button>
              )}

              <div>
                <motion.img
                  key={items.img}
                  initial={{
                    x: state.direction === "next" ? 100 : -100,
                    opacity: 0,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: state.direction === "next" ? -100 : 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  src={items.img}
                  alt={items.heading}
                  className="h-[89.5px] w-[75.8px] rounded-[10px] object-cover md:h-[178px] md:w-[140px] lg:h-[300px] lg:w-[290px] lg:rounded-[35px] xl:h-[349px] xl:w-[295.59px] xl:rounded-[52px]"
                />
              </div>

              {state.slider + 1 < portfolio.length && (
                <button onClick={next}>
                  <img
                    src={portfolio[state.slider + 1].img}
                    alt={portfolio[state.slider + 1].heading}
                    className="h-[62.51px] w-[56.82px] cursor-pointer rounded-[10px] object-cover md:h-[120px] md:w-[100px] lg:h-[220px] lg:w-[200px] lg:rounded-[35px] xl:h-[243.77px] xl:w-[221.56px] xl:rounded-[52px]"
                  />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
