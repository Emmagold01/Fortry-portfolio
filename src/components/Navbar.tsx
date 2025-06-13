import fortry from "../assets/FORTRY.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "./lib/utils.ts";
import { easeInOut, motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const listVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: easeInOut,
      duration: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About", "Services", "Portfolio", "Contact"];

  function toggleBtn() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="relative z-50 my-5 h-18 rounded-2xl bg-[#383838] px-3 md:px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between"
      >
        <div>
          <img src={fortry} alt="logo" />
        </div>

        <motion.ul
          variants={listVariants}
          className="font-nasa hidden space-x-7 pb-2.5 text-lg font-medium text-white md:flex"
        >
          {navLinks.map((link) => (
            <motion.li
              whileHover={{
                color: "#0073ff",
              }}
              key={link}
              variants={itemVariants}
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </motion.ul>

        <button className="pb-2 md:hidden">
          <Icon
            onClick={toggleBtn}
            className="text-2xl text-white"
            icon={isOpen ? "fa-solid:times" : "fa-solid:bars"}
          />
        </button>
      </motion.div>

      {/* Mobile View */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: easeInOut }}
            className={cn(
              "font-nasa z-50 mt-2 flex flex-col items-center justify-center rounded-2xl bg-[#383838] p-8 text-white md:hidden",
            )}
          >
            <ul className="space-y-3 text-center">
              {navLinks.map((nav) => (
                <li key={nav}>
                  <a href={`#${nav.toLowerCase()}`}>{nav}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
